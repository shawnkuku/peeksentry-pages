type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/// 统一大段内容区的标题样式，避免页面之间出现风格漂移。
export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/78">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="text-sm leading-7 text-slate-300/78 sm:text-base">{description}</p>
    </div>
  );
}
