"use client";

import { useMemo, useState } from "react";
import { BookOpen, Clock, FileText, Search } from "lucide-react";
import type { ResearchEntry } from "@/data/congressData";

const TRACKS = [
  "All Tracks",
  "Teaching & Learning",
  "Governance & Leadership",
  "Child Protection & Wellness",
  "Inclusive Education & DRRM",
] as const;

export default function ResearchDirectory({ items }: { items: ResearchEntry[] }) {
  const [selectedTrack, setSelectedTrack] = useState<string>("All Tracks");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesTrack = selectedTrack === "All Tracks" || item.track === selectedTrack;
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.presenter.toLowerCase().includes(q) ||
        item.track.toLowerCase().includes(q) ||
        item.format.toLowerCase().includes(q);
      return matchesTrack && matchesQuery;
    });
  }, [items, selectedTrack, query]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {TRACKS.map((track) => {
            const active = selectedTrack === track;
            return (
              <button
                key={track}
                type="button"
                onClick={() => setSelectedTrack(track)}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? "bg-red-700 text-white shadow-sm shadow-red-900/20"
                    : "bg-white text-stone-700 border border-red-200 hover:border-red-400 hover:text-red-700"
                }`}
              >
                {track}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-red-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search BERF, title, or track..."
            aria-label="Search research papers"
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-red-200 bg-white text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-red-200 bg-white p-10 text-center text-stone-500 text-sm">
          No research entries match your current filter. Try clearing the search or selecting another track.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-red-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-red-50 px-2.5 py-1 text-xs font-bold text-red-800 border border-red-200">
                    <FileText className="w-3.5 h-3.5 text-red-600" />
                    {item.format}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-red-800 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-stone-600 font-medium">{item.presenter}</p>
                <p className="text-xs text-stone-500 mt-0.5">{item.schoolOrOffice}</p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-red-50 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600">
                <span className="inline-flex items-center gap-1.5 font-medium text-red-700">
                  <BookOpen className="w-3.5 h-3.5" />
                  {item.track}
                </span>
                <span className="inline-flex items-center gap-1.5 text-stone-500">
                  <Clock className="w-3.5 h-3.5 text-red-400" />
                  {item.timeSlot}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
