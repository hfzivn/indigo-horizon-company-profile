import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/data/site";

const needs = [
  "Transportation and installation engineering",
  "Mooring, subsea and floating systems",
  "Floating power systems",
  "Pipeline and SPM",
  "Feasibility or bankability study",
  "Other",
];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  need: z.string().min(1, "Please choose what you need"),
  message: z.string().trim().min(1, "Please write a short message").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [need, setNeed] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      company: fd.get("company") || undefined,
      email: fd.get("email"),
      phone: fd.get("phone") || undefined,
      need,
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as keyof Errors] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const body = [
      `Name: ${d.name}`,
      d.company ? `Company: ${d.company}` : "",
      `Email: ${d.email}`,
      d.phone ? `Phone: ${d.phone}` : "",
      `Need: ${d.need}`,
      "",
      d.message,
    ]
      .filter((l, i) => l !== "" || i === 5)
      .join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Enquiry: ${d.need}`)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app", { description: `Your message is addressed to ${company.email}.` });
    e.currentTarget.reset();
    setNeed("");
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1 text-xs text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <Label htmlFor="name">Name *</Label>
        <Input id="name" name="name" autoComplete="name" className="mt-1.5 rounded-sm" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
        {err("name")}
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" autoComplete="organization" className="mt-1.5 rounded-sm" />
      </div>
      <div>
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" autoComplete="email" className="mt-1.5 rounded-sm" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        {err("email")}
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" className="mt-1.5 rounded-sm" />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="need">What do you need? *</Label>
        <Select value={need} onValueChange={setNeed}>
          <SelectTrigger id="need" className="mt-1.5 rounded-sm" aria-invalid={!!errors.need} aria-describedby={errors.need ? "need-error" : undefined}>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {needs.map((n) => (
              <SelectItem key={n} value={n}>
                {n}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {err("need")}
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" name="message" rows={5} className="mt-1.5 rounded-sm" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
        {err("message")}
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" variant="brand" size="pill" className="w-full sm:w-auto">
          Send message
        </Button>
      </div>
    </form>
  );
}
