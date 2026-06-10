"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { SectionConfig, ContentConfig } from "@/types/site-config";

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

const SECTION_LABELS: Record<keyof SectionConfig, string> = {
  intro: "Intro",
  resumes: "Resumes",
  projects: "Projects",
  timeline: "Timeline",
  tech_stack: "Tech Stack",
  contact: "Contact",
};

const TABS = ["Submissions", "Sections", "Content"] as const;

export function Dashboard({
  submissions,
  sections: initialSections,
  content: initialContent,
}: {
  submissions: Submission[];
  sections: SectionConfig;
  content: ContentConfig;
}) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Submissions");
  const [sections, setSections] = useState(initialSections);
  const [content, setContent] = useState(initialContent);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

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
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleSection = async (key: keyof SectionConfig) => {
    const next = { ...sections, [key]: !sections[key] };
    setSections(next);
    await patchConfig("sections", next);
  };

  const saveContent = async () => {
    await patchConfig("content", content);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <h1 className="font-semibold tracking-tight">Admin</h1>
        <div className="flex items-center gap-4">
          {saving && <span className="text-xs text-white/40">Saving…</span>}
          {saved && <span className="text-xs text-green-400">Saved</span>}
          <a
            href="/"
            className="text-sm text-white/50 hover:text-white transition"
          >
            ← Site
          </a>
          <button
            onClick={handleLogout}
            className="text-sm text-white/50 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 px-6 pt-6">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm font-medium transition",
              tab === t
                ? "bg-white text-black"
                : "text-white/50 hover:text-white",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="px-6 py-6">
        {/* ---- Submissions ---- */}
        {tab === "Submissions" && (
          <div className="overflow-x-auto">
            {submissions.length === 0 ? (
              <p className="text-white/40 text-sm">No submissions yet.</p>
            ) : (
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-white/40 border-b border-white/10">
                    <th className="pb-3 pr-6 font-medium">Name</th>
                    <th className="pb-3 pr-6 font-medium">Email</th>
                    <th className="pb-3 pr-6 font-medium">Source</th>
                    <th className="pb-3 pr-6 font-medium">Help with</th>
                    <th className="pb-3 pr-6 font-medium">Notes</th>
                    <th className="pb-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s) => (
                    <tr
                      key={s.id}
                      className="border-b border-white/5 hover:bg-white/3"
                    >
                      <td className="py-3 pr-6">
                        <div>{s.name}</div>
                        {s.workplace && (
                          <div className="text-white/40 text-xs">
                            {s.workplace}
                          </div>
                        )}
                      </td>
                      <td className="py-3 pr-6 text-white/70">{s.email}</td>
                      <td className="py-3 pr-6 text-white/70">{s.source}</td>
                      <td className="py-3 pr-6 text-white/70">
                        {s.help_with.join(", ")}
                      </td>
                      <td className="py-3 pr-6 text-white/70 max-w-xs truncate">
                        {s.notes ?? "—"}
                      </td>
                      <td className="py-3 text-white/40 text-xs whitespace-nowrap">
                        {new Date(s.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* ---- Sections ---- */}
        {tab === "Sections" && (
          <div className="flex flex-col gap-3 max-w-sm">
            {(Object.keys(SECTION_LABELS) as (keyof SectionConfig)[]).map(
              (key) => (
                <label
                  key={key}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer"
                >
                  <span className="font-medium">{SECTION_LABELS[key]}</span>
                  <button
                    role="switch"
                    aria-checked={sections[key]}
                    onClick={() => toggleSection(key)}
                    className={cn(
                      "relative w-11 h-6 rounded-full transition-colors",
                      sections[key] ? "bg-white" : "bg-white/20",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-1 w-4 h-4 rounded-full transition-transform",
                        sections[key]
                          ? "translate-x-6 bg-black"
                          : "translate-x-1 bg-white/60",
                      )}
                    />
                  </button>
                </label>
              ),
            )}
            <p className="text-xs text-white/30 mt-2">
              Changes apply on next page load.
            </p>
          </div>
        )}

        {/* ---- Content ---- */}
        {tab === "Content" && (
          <div className="flex flex-col gap-5 max-w-sm">
            <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
              <span className="font-medium">Show availability badge</span>
              <button
                role="switch"
                aria-checked={content.availability_visible}
                onClick={() =>
                  setContent((c) => ({
                    ...c,
                    availability_visible: !c.availability_visible,
                  }))
                }
                className={cn(
                  "relative w-11 h-6 rounded-full transition-colors",
                  content.availability_visible ? "bg-white" : "bg-white/20",
                )}
              >
                <span
                  className={cn(
                    "absolute top-1 w-4 h-4 rounded-full transition-transform",
                    content.availability_visible
                      ? "translate-x-6 bg-black"
                      : "translate-x-1 bg-white/60",
                  )}
                />
              </button>
            </label>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/60">Availability text</label>
              <input
                value={content.availability_text}
                onChange={(e) =>
                  setContent((c) => ({
                    ...c,
                    availability_text: e.target.value,
                  }))
                }
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-white/30"
                placeholder="e.g. Open to work"
              />
            </div>

            <button
              onClick={saveContent}
              className="bg-white text-black font-medium rounded-xl py-2.5 hover:bg-white/90 transition"
            >
              Save
            </button>
            <p className="text-xs text-white/30">
              Changes apply on next page load.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
