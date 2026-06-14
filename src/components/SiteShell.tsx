import { Menu, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteContent } from "@/content/siteContent";

type SiteShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const navigationItems = [
  { to: siteContent.links.home, label: "Home" },
  { to: siteContent.links.support, label: "Support" },
  { to: siteContent.links.privacy, label: "Privacy" },
];

/// 统一站点外壳：负责导航、页脚、页面标题和整体视觉氛围。
export default function SiteShell({ title, description, children }: SiteShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = `${title} | ${siteContent.brandName}`;
    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [description, title]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(40,102,255,0.16),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(144,78,255,0.18),_transparent_28%),linear-gradient(135deg,_#041229_0%,_#06091b_45%,_#130621_100%)] text-slate-100">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-10" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-10 rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Link to={siteContent.links.home} className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}branding/app-icon.png`}
                alt="PeekSentry icon"
                className="h-10 w-10 rounded-2xl border border-white/20 shadow-[0_8px_20px_rgba(61,110,255,0.3)]"
              />
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-cyan-200/80 uppercase">
                  <ShieldCheck className="h-4 w-4" />
                  PeekSentry
                </div>
                <p className="text-xs text-slate-300/72">{siteContent.chineseName}</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "rounded-full px-4 py-2 text-sm font-medium transition duration-200",
                      isActive
                        ? "bg-white/12 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]"
                        : "text-slate-300 hover:bg-white/8 hover:text-white",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              className="rounded-full border border-white/12 p-2 text-slate-200 md:hidden"
              aria-label="Open navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {isMenuOpen ? (
            <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 md:hidden">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "rounded-2xl px-4 py-3 text-sm font-medium transition",
                      isActive ? "bg-white/12 text-white" : "bg-white/5 text-slate-300",
                    ].join(" ")
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          ) : null}
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-16 rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="text-sm font-semibold tracking-[0.18em] text-cyan-200/80 uppercase">
                {siteContent.brandName}
              </p>
              <h2 className="text-xl font-semibold text-white">{siteContent.chineseName}</h2>
              <p className="text-sm leading-7 text-slate-300/82">
                Public pages for App Store marketing, support, and privacy disclosure. Replace
                the placeholder contact details before final submission.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  Pages
                </p>
                {navigationItems.map((item) => (
                  <div key={item.to}>
                    <NavLink to={item.to} className="text-sm text-slate-200 transition hover:text-cyan-200">
                      {item.label}
                    </NavLink>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  Support
                </p>
                <a
                  href={`mailto:${siteContent.supportEmail}`}
                  className="block text-sm text-slate-200 transition hover:text-cyan-200"
                >
                  {siteContent.supportEmail}
                </a>
                <p className="text-sm text-slate-400">Last updated: {siteContent.updatedAt}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 text-xs text-slate-400">
            © {year} {siteContent.brandName}. Built for GitHub Pages deployment.
          </div>
        </footer>
      </div>
    </div>
  );
}
