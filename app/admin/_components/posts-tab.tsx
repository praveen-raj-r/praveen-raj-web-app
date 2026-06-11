"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Plus, ArrowLeft, Trash2, ExternalLink } from "lucide-react";

type Post = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  published: boolean;
  published_at: string;
};

type FormState = Omit<Post, "id">;

const EMPTY: FormState = {
  slug: "",
  title: "",
  category: "",
  excerpt: "",
  content: "",
  published: false,
  published_at: new Date().toISOString().split("T")[0],
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function PostsTab() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Post | "new" | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((r) => r.json())
      .then((data) => { setPosts(data ?? []); setLoading(false); });
  }, []);

  const openNew = () => { setForm(EMPTY); setEditing("new"); };
  const openEdit = (p: Post) => { setForm({ ...p }); setEditing(p); };
  const cancel = () => setEditing(null);

  const set = (k: keyof FormState, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleTitleChange = (v: string) => {
    setForm((f) => ({
      ...f,
      title: v,
      slug: editing === "new" ? slugify(v) : f.slug,
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    if (editing === "new") {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const created = await res.json();
      if (!res.ok) { alert(created.error); setSaving(false); return; }
      setPosts((p) => [created, ...p]);
    } else if (editing) {
      const res = await fetch(`/api/admin/posts/${editing.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const updated = await res.json();
      if (!res.ok) { alert(updated.error); setSaving(false); return; }
      setPosts((p) => p.map((x) => (x.id === editing.id ? updated : x)));
    }
    setSaving(false);
    setEditing(null);
  };

  const handleDelete = async () => {
    if (editing === "new" || !editing) return;
    if (!confirm("Delete this post permanently?")) return;
    setDeleting(true);
    await fetch(`/api/admin/posts/${editing.id}`, { method: "DELETE" });
    setPosts((p) => p.filter((x) => x.id !== editing.id));
    setDeleting(false);
    setEditing(null);
  };

  /* ── List view ── */
  if (!editing) {
    return (
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs text-white/40">
            {posts.filter((p) => p.published).length} published ·{" "}
            {posts.filter((p) => !p.published).length} drafts
          </p>
          <button
            onClick={openNew}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition"
          >
            <Plus className="size-3.5" />
            New post
          </button>
        </div>

        {loading ? (
          <p className="text-white/30 text-sm py-10 text-center">Loading…</p>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40 text-sm">No posts yet.</p>
            <p className="text-white/25 text-xs mt-1">
              Click "New post" to write your first article.
            </p>
          </div>
        ) : (
          <div className="space-y-1.5">
            {posts.map((p) => (
              <button
                key={p.id}
                onClick={() => openEdit(p)}
                className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl border border-white/7 bg-white/3 hover:bg-white/5 transition text-left"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className={cn(
                        "text-xs px-1.5 py-0.5 rounded-full font-medium",
                        p.published
                          ? "bg-green-500/15 text-green-400"
                          : "bg-white/8 text-white/40",
                      )}
                    >
                      {p.published ? "Published" : "Draft"}
                    </span>
                    <span className="text-xs text-white/30">
                      {p.category}
                    </span>
                  </div>
                  <p className="font-medium text-sm truncate">{p.title}</p>
                </div>
                <span className="text-xs text-white/30 whitespace-nowrap shrink-0">
                  {fmtDate(p.published_at)}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  /* ── Edit / Create form ── */
  const isNew = editing === "new";

  return (
    <div className="max-w-2xl space-y-5">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={cancel}
          className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition"
        >
          <ArrowLeft className="size-4" />
          All posts
        </button>
        <div className="flex items-center gap-2">
          {!isNew && (
            <>
              {form.published && (
                <a
                  href={`/blog/${form.slug}`}
                  target="_blank"
                  className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition"
                >
                  <ExternalLink className="size-3.5" />
                  View
                </a>
              )}
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex items-center gap-1 text-xs text-red-400/70 hover:text-red-400 transition disabled:opacity-40"
              >
                <Trash2 className="size-3.5" />
                {deleting ? "Deleting…" : "Delete"}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-white/7 bg-white/3 p-5 space-y-4">
        {/* Title */}
        <div className="space-y-1.5">
          <label className="text-xs text-white/40">Title</label>
          <input
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Post title"
            className="w-full bg-white/5 border border-white/8 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/20 transition placeholder:text-white/25"
          />
        </div>

        {/* Slug + Category row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs text-white/40">Slug</label>
            <input
              value={form.slug}
              onChange={(e) => set("slug", e.target.value)}
              placeholder="post-url-slug"
              className="w-full bg-white/5 border border-white/8 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/20 transition placeholder:text-white/25 font-mono"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-white/40">Category</label>
            <input
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
              placeholder="e.g. Web Dev"
              className="w-full bg-white/5 border border-white/8 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/20 transition placeholder:text-white/25"
            />
          </div>
        </div>

        {/* Date */}
        <div className="space-y-1.5">
          <label className="text-xs text-white/40">Published date</label>
          <input
            type="date"
            value={form.published_at}
            onChange={(e) => set("published_at", e.target.value)}
            className="bg-white/5 border border-white/8 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/20 transition"
          />
        </div>

        {/* Excerpt */}
        <div className="space-y-1.5">
          <label className="text-xs text-white/40">Excerpt</label>
          <textarea
            value={form.excerpt}
            onChange={(e) => set("excerpt", e.target.value)}
            rows={2}
            placeholder="Short description shown in cards and meta"
            className="w-full bg-white/5 border border-white/8 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/20 transition placeholder:text-white/25 resize-none"
          />
        </div>

        {/* Content */}
        <div className="space-y-1.5">
          <label className="text-xs text-white/40">
            Content{" "}
            <span className="text-white/25">(Markdown)</span>
          </label>
          <textarea
            value={form.content}
            onChange={(e) => set("content", e.target.value)}
            rows={16}
            placeholder="Write your post in Markdown…"
            className="w-full bg-white/5 border border-white/8 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none focus:border-white/20 transition placeholder:text-white/25 resize-y font-mono leading-relaxed"
          />
        </div>

        {/* Published toggle */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <p className="text-sm font-medium">
              {form.published ? "Published" : "Draft"}
            </p>
            <p className="text-xs text-white/40 mt-0.5">
              {form.published
                ? "Visible on your portfolio"
                : "Only you can see this"}
            </p>
          </div>
          <button
            role="switch"
            aria-checked={form.published}
            onClick={() => set("published", !form.published)}
            className={cn(
              "relative w-10 h-5 rounded-full transition-colors shrink-0",
              form.published ? "bg-white" : "bg-white/15",
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 w-4 h-4 rounded-full transition-transform",
                form.published
                  ? "translate-x-5 bg-black"
                  : "translate-x-0.5 bg-white/50",
              )}
            />
          </button>
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={saving || !form.title || !form.slug}
        className="w-full bg-white text-black font-medium rounded-xl py-2.5 text-sm hover:bg-white/90 active:scale-[0.98] transition disabled:opacity-40"
      >
        {saving ? "Saving…" : isNew ? "Create post" : "Save changes"}
      </button>
    </div>
  );
}
