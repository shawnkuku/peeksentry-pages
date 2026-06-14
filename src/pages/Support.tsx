import { Clock3, Mail, ShieldAlert } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SiteShell from "@/components/SiteShell";
import { siteContent } from "@/content/siteContent";

/// 技术支持页：提供给 App Store Connect 的技术支持网址使用。
export default function Support() {
  return (
    <SiteShell
      title="Support"
      description="PeekSentry technical support page for App Store Connect."
    >
      <div className="space-y-10">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Technical Support"
            title="Support information for the App Store edition"
            description="This page is intended to serve as the public technical support destination for PeekSentry. It summarizes support scope, expected contact information, and common setup questions."
          />

          <div className="grid gap-4 rounded-[30px] border border-white/10 bg-white/6 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <div className="rounded-[24px] border border-cyan-300/20 bg-cyan-300/10 p-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-cyan-200" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/72">
                    Contact Email
                  </p>
                  <a
                    href={`mailto:${siteContent.supportEmail}`}
                    className="mt-2 block text-lg font-semibold text-white"
                  >
                    {siteContent.supportEmail}
                  </a>
                  <p className="mt-2 text-sm leading-7 text-slate-200/78">
                    Replace this placeholder email with your real support mailbox before using the
                    page in App Store submission.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {siteContent.supportFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[24px] border border-white/10 bg-black/14 p-5"
                >
                  <div className="flex items-start gap-3">
                    <fact.icon className="mt-1 h-5 w-5 text-cyan-200" />
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/70">
                        {fact.label}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-100">{fact.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
            <Clock3 className="h-6 w-6 text-cyan-200" />
            <h3 className="mt-4 text-lg font-semibold text-white">Response expectation</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300/78">
              Suggested support target: reply within 2 business days for installation or permission
              issues.
            </p>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
            <ShieldAlert className="h-6 w-6 text-cyan-200" />
            <h3 className="mt-4 text-lg font-semibold text-white">Current scope</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300/78">
              Installation, permission guidance, screenshot retention, overlay behavior, and general
              App Store edition troubleshooting.
            </p>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
            <Mail className="h-6 w-6 text-cyan-200" />
            <h3 className="mt-4 text-lg font-semibold text-white">Recommended note</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300/78">
              Keep this page public and stable so Apple review can open it directly at any time.
            </p>
          </article>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Common setup and permissions questions"
            description="These answers cover the most likely App Store review and end-user questions around permissions, storage, and offline behavior."
          />

          <div className="grid gap-4">
            {siteContent.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_18px_36px_rgba(0,0,0,0.14)] backdrop-blur-md"
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/78">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
