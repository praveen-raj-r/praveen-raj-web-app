import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import projects from "@/data/projects-detail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: `${project.title} — Praveen Raj`, description: project.tagline };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white font-inter">
      <div className="max-w-187 mx-auto px-4 md:px-9.5 py-12">

        {/* ── Hero header ───────────────────────────────── */}
        <div className="flex items-start gap-5 mb-8">
          {project.icon && (
            <Image
              src={project.icon}
              alt={project.title}
              width={80}
              height={80}
              className="rounded-[20px] size-20 shadow-lg flex-shrink-0"
            />
          )}
          <div>
            <div className="flex items-center gap-2.5 mb-2 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
              {project.featured && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-white bg-[linear-gradient(90deg,#566cec,#d749af_50%,#ff7c51)]">
                  NEW
                </span>
              )}
              <span className="text-[13px] font-semibold px-3 py-0.5 rounded-full bg-white/10 text-white/70">
                {project.year}
              </span>
            </div>
            <p className="text-white/50 text-lg">{project.tagline}</p>
          </div>
        </div>

        {/* ── Meta grid ─────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 border border-white/10 rounded-2xl overflow-hidden mb-10">
          {[
            { label: "ROLE", value: project.role },
            { label: "STACK", value: project.stack },
            { label: "TIMELINE", value: project.timeline },
            {
              label: "STATUS",
              value: project.status,
              url: project.statusUrl,
              highlight: project.status === "Live",
            },
          ].map(({ label, value, url, highlight }) => (
            <div key={label} className="px-5 py-4">
              <p className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-1.5">
                {label}
              </p>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-semibold flex items-center gap-1 ${highlight ? "text-emerald-400" : "text-white"}`}
                >
                  {value} <ArrowUpRight size={13} />
                </a>
              ) : (
                <p className="text-sm font-semibold text-white">{value}</p>
              )}
            </div>
          ))}
        </div>

        {/* ── Hero image ────────────────────────────────── */}
        <div className="border border-dashed border-white/15 rounded-2xl overflow-hidden mb-12 aspect-[16/10] flex items-center justify-center bg-white/[0.02]">
          {project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={project.heroCaption ?? project.title}
              width={1600}
              height={1000}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <p className="text-white/30 text-sm">{project.heroCaption ?? "Hero screenshot"}</p>
              <p className="text-white/15 text-xs mt-1">1600 × 1000</p>
            </div>
          )}
        </div>

        {/* ── Content + sidebar ─────────────────────────── */}
        <div className="grid md:grid-cols-[1fr_300px] gap-8 mb-12">

          {/* Left: narrative */}
          <div className="space-y-8">
            <section>
              <p className="text-[11px] font-semibold tracking-widest text-white/30 uppercase mb-3">
                The Problem
              </p>
              <p className="text-white/80 leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <p className="text-[11px] font-semibold tracking-widest text-white/30 uppercase mb-3">
                What I Built
              </p>
              <p className="text-white/80 leading-relaxed mb-4">{project.whatBuilt}</p>
              <ul className="space-y-2">
                {project.whatBuiltBullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-white/70 text-sm leading-relaxed">
                    <span className="mt-1.5 size-1.5 rounded-full bg-white/30 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className="text-[11px] font-semibold tracking-widest text-white/30 uppercase mb-3">
                What I'd Change
              </p>
              <p className="text-white/80 leading-relaxed">{project.whatChanged}</p>
            </section>
          </div>

          {/* Right: screenshots + built with */}
          <div className="space-y-4">
            {project.screenshots.map((s, i) => (
              <div
                key={i}
                className="border border-dashed border-white/15 rounded-xl overflow-hidden flex items-center justify-center bg-white/[0.02]"
                style={{ aspectRatio: `${s.width} / ${s.height}`, maxHeight: 300 }}
              >
                {s.url ? (
                  <Image src={s.url} alt={s.caption} width={s.width} height={s.height} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-4">
                    <p className="text-white/30 text-xs">{s.caption}</p>
                    <p className="text-white/15 text-[10px] mt-0.5">{s.width} × {s.height}</p>
                  </div>
                )}
              </div>
            ))}

            {project.builtWith.length > 0 && (
              <div className="border border-white/10 rounded-xl p-4">
                <p className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-3">
                  Built With
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.builtWith.map((t) => (
                    <Image
                      key={t.name}
                      src={t.icon}
                      alt={t.name}
                      width={32}
                      height={32}
                      title={t.name}
                      className="size-8 rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── CTA banner ────────────────────────────────── */}
        {(project.demoUrl || project.githubUrl) && (
          <div className="rounded-2xl bg-[linear-gradient(135deg,#1a1a2e,#16213e)] border border-white/10 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-12">
            <div>
              <h2 className="text-2xl font-bold font-Fraunces mb-1">See it running</h2>
              <p className="text-white/50 text-sm">Demo account preloaded with sample data.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Open live demo <ArrowUpRight size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Source <Github size={14} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* ── Prev / Next ───────────────────────────────── */}
        <div className="flex justify-between items-center border-t border-white/10 pt-8">
          {project.prev ? (
            <Link
              href={`/projects/${project.prev.slug}`}
              className="group flex flex-col gap-1 hover:opacity-70 transition-opacity"
            >
              <span className="text-[11px] text-white/30 uppercase tracking-widest flex items-center gap-1">
                <ArrowLeft size={11} /> Previous
              </span>
              <span className="font-semibold">{project.prev.title}</span>
            </Link>
          ) : <div />}

          {project.next ? (
            <Link
              href={`/projects/${project.next.slug}`}
              className="group flex flex-col gap-1 items-end hover:opacity-70 transition-opacity"
            >
              <span className="text-[11px] text-white/30 uppercase tracking-widest flex items-center gap-1">
                Next <ArrowRight size={11} />
              </span>
              <span className="font-semibold">{project.next.title}</span>
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  );
}
