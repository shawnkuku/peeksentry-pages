import { FileLock2, ShieldCheck } from "lucide-react";
import PolicySection from "@/components/PolicySection";
import SectionHeading from "@/components/SectionHeading";
import SiteShell from "@/components/SiteShell";
import { siteContent } from "@/content/siteContent";

/// 隐私政策页：提供给 App Store Connect 的隐私政策网址使用。
export default function Privacy() {
  return (
    <SiteShell title="Privacy Policy" description="PeekSentry privacy policy page.">
      <div className="space-y-10">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionHeading
            eyebrow="Privacy Policy"
            title="Privacy information for the App Store version of PeekSentry"
            description="This page summarizes how the App Store edition of PeekSentry uses system permissions, where data is stored, and what offline-first behavior means in practice."
          />

          <div className="grid gap-4 rounded-[30px] border border-white/10 bg-white/6 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <div className="rounded-[24px] border border-emerald-300/18 bg-emerald-300/10 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-emerald-200" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100/74">
                    Privacy-first statement
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-100">
                    The App Store edition is intended to stay local-first and does not require an
                    account or always-on remote backend for core protection features.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-black/14 p-5">
              <div className="flex items-start gap-3">
                <FileLock2 className="mt-1 h-5 w-5 text-cyan-200" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300/74">
                    Effective date
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-100">{siteContent.updatedAt}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4">
          {siteContent.policySections.map((section) => (
            <PolicySection key={section.title} section={section} />
          ))}
        </section>
      </div>
    </SiteShell>
  );
}
