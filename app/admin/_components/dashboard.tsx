"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { SectionConfig, ContentConfig } from "@/types/site-config";
import {
  Mail,
  SlidersHorizontal,
  Type,
  LogOut,
  ExternalLink,
  Users,
  CalendarDays,
  BarChart2,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Eye,
  EyeOff,
} from "lucide-react";

export type { SectionConfig, ContentConfig };

export type Submission = {
  id: string;
  name: string;
  email: string;
  workplace: string | null;
  phone: string | null;
  source: string;
  help_with: string[];
  notes: string | null;
  created_at: string;
};

const SECTION_META: Record<
  keyof SectionConfig,
  { label: string; emoji: string }
> = {
  intro: { label: "Intro", emoji: "👋" },
  resumes: { label: "Resumes", emoji: "📄" },
  projects: { label: "Projects", emoji: "🛠" },
  timeline: { label: "Timeline", emoji: "🗓" },
  tech_stack: { label: "Tech Stack", emoji: "⚙️" },
  contact: { label: "Contact", emoji: "✉️" },
};

const NAV = [
  { id: "Submissions" as const, label: "Submissions", Icon: Mail },
  { id: "Sections" as const, label: "Sections", Icon: SlidersHorizontal },
  { id: "Content" as const, label: "Content", Icon: Type },
];
type Tab = "Submissions" | "Sections" | "Content";

/* ─── helpers ─── */
function thisMonth(submissions: Submission[]) {
  const now = new Date();
  return submissions.filter((s) => {
    const d = new Date(s.created_at);
    return (
      d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
    );
  }).length;
}

function topSource(submissions: Submission[]) {
  if (!submissions.length) return "—";
  const counts: Record<string, number> = {};
  for (const s of submissions) counts[s.source] = (counts[s.source] ?? 0) + 1;
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ─── Toggle switch ─── */
function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={onToggle}
      className={cn(
        "relative w-10 h-5 rounded-full transition-colors shrink-0",
        on ? "bg-white" : "bg-white/15",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 w-4 h-4 rounded-full transition-transform",
          on ? "translate-x-5 bg-black" : "translate-x-0.5 bg-white/50",
        )}
      />
    </button>
  );
}

/* ─── Stat card ─── */
function StatCard({
  label,
  value,
  Icon,
}: {
  label: string;
  value: string | number;
  Icon: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/4 border border-white/7">
      <div className="p-2 rounded-lg bg-white/6">
        <Icon className="size-4 text-white/60" />
      </div>
      <div>
        <p className="text-xl font-semibold tracking-tight">{value}</p>
        <p className="text-xs text-white/40 mt-px">{label}</p>
      </div>
    </div>
  );
}

/* ─── Submission card ─── */
function SubmissionCard({ s }: { s: Submission }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/7 bg-white/3 hover:bg-white/5 transition overflow-hidden">
      <button
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-4"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium">{s.name}</span>
            {s.workplace && (
              <span className="text-xs text-white/40 truncate">
                {s.workplace}
              </span>
            )}
            <span className="ml-auto text-xs text-white/30 whitespace-nowrap">
              {fmt(s.created_at)}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1 flex-wrap">
            <span className="text-sm text-white/50">{s.email}</span>
            {s.phone && (
              <span className="text-sm text-white/40">{s.phone}</span>
            )}
            <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-white/8 text-white/60">
              {s.source}
            </span>
          </div>
        </div>
        {open ? (
          <ChevronUp className="size-4 text-white/30 shrink-0 mt-1" />
        ) : (
          <ChevronDown className="size-4 text-white/30 shrink-0 mt-1" />
        )}
      </button>

      {open && (
        <div className="px-5 pb-4 pt-1 border-t border-white/6 flex flex-col gap-3">
          <div>
            <p className="text-xs text-white/40 mb-1">Wants help with</p>
            <div className="flex flex-wrap gap-1.5">
              {s.help_with.map((h) => (
                <span
                  key={h}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/7 text-white/70"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
          {s.notes && (
            <div>
              <p className="text-xs text-white/40 mb-1">Notes</p>
              <p className="text-sm text-white/70 leading-relaxed">{s.notes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Sidebar ─── */
type SidebarProps = {
  mobile: boolean;
  tab: Tab;
  setTab: (t: Tab) => void;
  setSidebarOpen: (v: boolean) => void;
  submissionCount: number;
  visibleCount: number;
  onLogout: () => void;
};

function Sidebar({
  mobile,
  tab,
  setTab,
  setSidebarOpen,
  submissionCount,
  visibleCount,
  onLogout,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col bg-[#0f0f0f] border-r border-white/7",
        mobile
          ? "fixed inset-y-0 left-0 z-50 w-64"
          : "hidden md:flex w-56 shrink-0",
      )}
    >
      <div className="px-5 pt-6 pb-4 flex items-center justify-between">
        <span className="font-semibold tracking-tight text-sm">⚡ Admin</span>
        {mobile && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white/40 hover:text-white"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      <nav className="flex-1 px-3 space-y-0.5">
        {NAV.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => {
              setTab(id);
              setSidebarOpen(false);
            }}
            className={cn(
              "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition",
              tab === id
                ? "bg-white/8 text-white"
                : "text-white/40 hover:text-white hover:bg-white/4",
            )}
          >
            <Icon className="size-4 shrink-0" />
            {label}
            {id === "Submissions" && submissionCount > 0 && (
              <span className="ml-auto text-xs bg-white/10 px-1.5 py-0.5 rounded-full">
                {submissionCount}
              </span>
            )}
            {id === "Sections" && (
              <span className="ml-auto text-xs text-white/30">
                {visibleCount}/6
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="px-3 pb-5 space-y-0.5">
        <a
          href="/"
          target="_blank"
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-white/40 hover:text-white hover:bg-white/4 transition"
        >
          <ExternalLink className="size-4 shrink-0" />
          View site
        </a>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-white/40 hover:text-white hover:bg-white/4 transition"
        >
          <LogOut className="size-4 shrink-0" />
          Logout
        </button>
      </div>
    </aside>
  );
}

/* ─── Main Dashboard ─── */
export function Dashboard({
  submissions,
  sections: initialSections,
  content: initialContent,
}: {
  submissions: Submission[];
  sections: SectionConfig;
  content: ContentConfig;
}) {
  const [tab, setTab] = useState<Tab>("Submissions");
  const [sections, setSections] = useState(initialSections);
  const [content, setContent] = useState(initialContent);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const patchConfig = async (key: string, value: unknown) => {
    setSaving(true);
    setSaved(false);
    await fetch("/api/admin/config", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const toggleSection = async (key: keyof SectionConfig) => {
    const next = { ...sections, [key]: !sections[key] };
    setSections(next);
    await patchConfig("sections", next);
  };

  const saveContent = () => patchConfig("content", content);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/";
  };

  const visibleCount = Object.values(sections).filter(Boolean).length;

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Desktop sidebar */}
      <Sidebar
        mobile={false}
        tab={tab}
        setTab={setTab}
        setSidebarOpen={setSidebarOpen}
        submissionCount={submissions.length}
        visibleCount={visibleCount}
        onLogout={handleLogout}
      />

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <Sidebar
            mobile
            tab={tab}
            setTab={setTab}
            setSidebarOpen={setSidebarOpen}
            submissionCount={submissions.length}
            visibleCount={visibleCount}
            onLogout={handleLogout}
          />
        </>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center gap-3 px-5 py-3.5 border-b border-white/7 shrink-0">
          <button
            className="md:hidden text-white/50 hover:text-white"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="size-5" />
          </button>
          <h1 className="font-semibold tracking-tight text-sm">{tab}</h1>
          <div className="ml-auto flex items-center gap-3">
            {saving && (
              <span className="text-xs text-white/30 animate-pulse">
                Saving…
              </span>
            )}
            {saved && <span className="text-xs text-green-400">Saved ✓</span>}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-5 md:p-7">
          {/* ── Submissions ── */}
          {tab === "Submissions" && (
            <div className="space-y-5 max-w-3xl">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <StatCard
                  label="Total"
                  value={submissions.length}
                  Icon={Users}
                />
                <StatCard
                  label="This month"
                  value={thisMonth(submissions)}
                  Icon={CalendarDays}
                />
                <StatCard
                  label="Top source"
                  value={topSource(submissions)}
                  Icon={BarChart2}
                />
              </div>

              {/* List */}
              {submissions.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <Mail className="size-8 text-white/20 mb-3" />
                  <p className="text-white/40 text-sm">No submissions yet.</p>
                  <p className="text-white/25 text-xs mt-1">
                    They'll appear here when someone fills the contact form.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {submissions.map((s) => (
                    <SubmissionCard key={s.id} s={s} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Sections ── */}
          {tab === "Sections" && (
            <div className="max-w-md space-y-4">
              <p className="text-xs text-white/40">
                {visibleCount} of 6 sections visible on the site. Changes apply
                on next page load.
              </p>
              <div className="space-y-2">
                {(Object.keys(SECTION_META) as (keyof SectionConfig)[]).map(
                  (key) => {
                    const { label, emoji } = SECTION_META[key];
                    const on = sections[key];
                    return (
                      <div
                        key={key}
                        className={cn(
                          "flex items-center justify-between px-4 py-3.5 rounded-xl border transition",
                          on
                            ? "bg-white/4 border-white/9"
                            : "bg-transparent border-white/5 opacity-60",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg leading-none">{emoji}</span>
                          <div>
                            <p className="text-sm font-medium">{label}</p>
                            <p className="text-xs text-white/30">
                              {on ? "Visible" : "Hidden"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {on ? (
                            <Eye className="size-3.5 text-white/30" />
                          ) : (
                            <EyeOff className="size-3.5 text-white/20" />
                          )}
                          <Toggle on={on} onToggle={() => toggleSection(key)} />
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          )}

          {/* ── Content ── */}
          {tab === "Content" && (
            <div className="max-w-sm space-y-5">
              <div className="rounded-xl border border-white/7 bg-white/3 p-5 space-y-4">
                <h2 className="text-sm font-medium text-white/70">
                  Availability badge
                </h2>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Show badge</p>
                    <p className="text-xs text-white/40 mt-0.5">
                      Visible in the Intro section
                    </p>
                  </div>
                  <Toggle
                    on={content.availability_visible}
                    onToggle={() =>
                      setContent((c) => ({
                        ...c,
                        availability_visible: !c.availability_visible,
                      }))
                    }
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-white/40">Badge text</label>
                  <input
                    value={content.availability_text}
                    onChange={(e) =>
                      setContent((c) => ({
                        ...c,
                        availability_text: e.target.value,
                      }))
                    }
                    disabled={!content.availability_visible}
                    className="w-full bg-white/5 border border-white/8 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/20 transition placeholder:text-white/25 disabled:opacity-40"
                    placeholder="e.g. Open to work"
                  />
                </div>

                {/* Preview */}
                {content.availability_visible && (
                  <div className="pt-1">
                    <p className="text-xs text-white/30 mb-2">Preview</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {content.availability_text || "Open to work"}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={saveContent}
                className="w-full bg-white text-black font-medium rounded-xl py-2.5 text-sm hover:bg-white/90 active:scale-[0.98] transition"
              >
                Save changes
              </button>
              <p className="text-xs text-white/25 text-center">
                Changes apply on next page load.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
