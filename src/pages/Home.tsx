import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import SiteShell from "@/components/SiteShell";
import { marketingBullets, siteContent } from "@/content/siteContent";

/// 官网首页：用于承接 App Store 的营销网址，同时也给支持页和隐私页提供统一入口。
export default function Home() {
  return (
    <SiteShell
      title="Home"
      description="PeekSentry public landing page for App Store marketing, support, and privacy disclosure."
    >
      <div className="space-y-10 lg:space-y-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/82">
              <ShieldCheck className="h-4 w-4" />
              {siteContent.storeBadge}
            </div>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300/66">
                {siteContent.chineseName}
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {siteContent.brandName}
                <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
                  {siteContent.subtitle}
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300/82 sm:text-lg">
                {siteContent.heroDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to={siteContent.links.support}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(255,255,255,0.18)]"
              >
                Technical Support
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={siteContent.links.privacy}
                className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                Privacy Policy
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {marketingBullets.map((item) => (
                <div
                  key={item.text}
                  className="rounded-3xl border border-white/10 bg-white/6 px-4 py-4 text-sm text-slate-200 shadow-[0_16px_30px_rgba(0,0,0,0.16)] backdrop-blur-md"
                >
                  <item.icon className="mb-3 h-5 w-5 text-cyan-200" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-10 inset-y-12 rounded-full bg-cyan-400/16 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/6 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-5">
              <img
                src={`${import.meta.env.BASE_URL}screenshots/professional.png`}
                alt="PeekSentry professional mode screenshot"
                className="w-full rounded-[24px] border border-white/10 object-cover shadow-[0_24px_48px_rgba(0,0,0,0.28)]"
              />
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="A privacy guard built for real Mac workspaces"
            description="PeekSentry focuses on local detection, configurable response, and practical desktop behavior instead of account-first workflows or cloud-only processing."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {siteContent.features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-[30px] border border-white/10 bg-white/6 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:border-cyan-200/30 hover:bg-white/8"
              >
                <feature.icon className="h-6 w-6 text-cyan-200 transition group-hover:scale-110" />
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/76">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Preview"
            title="Prepared visuals for App Store review and public launch"
            description="The same screenshot set can support App Store listing, support documentation, and public marketing pages with a consistent visual language."
          />

          <div className="grid gap-5 xl:grid-cols-3">
            {siteContent.screenshots.map((screenshot) => (
              <article
                key={screenshot.title}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                <img src={`${import.meta.env.BASE_URL}${screenshot.src.slice(1)}`} alt={screenshot.title} />
                <div className="space-y-3 p-5">
                  <h3 className="text-lg font-semibold text-white">{screenshot.title}</h3>
                  <p className="text-sm leading-7 text-slate-300/76">{screenshot.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,34,80,0.86),rgba(44,14,68,0.86))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                App Store Metadata
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Use this site as your public presence for review and launch
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-200/82 sm:text-base">
                Publish this site to GitHub Pages, then use the root URL as the marketing URL,
                <span className="font-semibold text-white"> /#/support </span>
                as the technical support URL, and
                <span className="font-semibold text-white"> /#/privacy </span>
                as the privacy policy URL.
              </p>
            </div>

            <div className="grid gap-4 rounded-[28px] border border-white/10 bg-black/14 p-5">
              {siteContent.marketingHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
