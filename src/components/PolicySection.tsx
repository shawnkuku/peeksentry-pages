import type { PolicySectionItem } from "@/content/siteContent";

type PolicySectionProps = {
  section: PolicySectionItem;
};

/// 隐私政策章节组件，负责保持长文页面的阅读节奏和层级一致。
export default function PolicySection({ section }: PolicySectionProps) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-8">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">{section.title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300/82 sm:text-base">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
