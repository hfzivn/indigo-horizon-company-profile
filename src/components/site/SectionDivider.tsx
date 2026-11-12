import { Reveal } from "./Reveal";

export function SectionDivider({ title, number, id }: { title: string; number: string; id?: string }) {
  return (
    <div id={id} className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="container-site flex min-h-[18rem] flex-col justify-between pb-0 pt-10 md:min-h-[24rem]">
        <div className="border-t border-on-brand/25 pt-6">
          <Reveal>
            <h2 className="text-3xl font-light md:text-5xl">{title}</h2>
          </Reveal>
        </div>
        <div className="flex justify-end">
          <span aria-hidden="true" className="select-none text-[8rem] font-light leading-[0.78] tracking-tight text-periwinkle md:text-[15rem]">
            {number}
          </span>
        </div>
      </div>
    </div>
  );
}
