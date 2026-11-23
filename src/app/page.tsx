import Image from "next/image";
import {
  Award,
  BookOpen,
  CalendarDays,
  Handshake,
  Heart,
  MapPin,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import ResearchDirectory from "@/components/ResearchDirectory";
import {
  EVENT_INFO,
  GUEST_LIST,
  PANEL_MEMBERS,
  PROGRAM_SCHEDULE,
  RESEARCH_COMMITTEE,
  RESEARCH_LIST,
} from "@/data/congressData";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffbfa] text-stone-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-red-100 bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#overview" className="flex items-center gap-3 min-w-0">
            <div className="flex items-center shrink-0">
              <Image
                src="/images/deped-toledo-logo.svg"
                alt="DepEd Toledo City Seal"
                width={36}
                height={36}
                className="rounded-full ring-2 ring-white bg-white"
              />
            </div>
            <div className="truncate">
              <p className="text-xs font-bold uppercase tracking-wider text-red-700 leading-none">
                DepEd Toledo City
              </p>
              <p className="text-sm font-extrabold text-stone-900 truncate mt-0.5">
                Research Congress 2026
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-stone-700">
            <a href="#research" className="hover:text-red-700 transition-colors">
              Research
            </a>
            <a href="#panel" className="hover:text-red-700 transition-colors">
              Panel
            </a>
            <a href="#guests" className="hover:text-red-700 transition-colors">
              Guests
            </a>
            <a href="#committee" className="hover:text-red-700 transition-colors">
              Committee
            </a>
            <a href="#program" className="hover:text-red-700 transition-colors">
              Program
            </a>
          </nav>

          <a
            href="#research"
            className="shrink-0 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs sm:text-sm font-bold px-4 py-2 transition-colors shadow-sm"
          >
            View Entries
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="overview"
          className="relative overflow-hidden bg-gradient-to-br from-red-950 via-red-800 to-rose-700 text-white"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #fda4af 0%, transparent 45%), radial-gradient(circle at 85% 75%, #fbbf24 0%, transparent 40%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-300/35 bg-red-900/50 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-red-100">
                  <Handshake className="w-4 h-4 text-amber-300" />
                  <span>DepEd Schools Division of Toledo City</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-white">
                  {EVENT_INFO.title}
                </h1>

                <p className="text-base sm:text-lg text-red-100/95 max-w-2xl leading-relaxed">
                  Advancing evidence-based basic education across Central Visayas through
                  collaborative action research, scholarly peer review, and division-wide
                  innovation.
                </p>

                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3.5 py-2 font-medium">
                    <CalendarDays className="w-4 h-4 text-amber-300" />
                    <span>
                      {EVENT_INFO.dayOfWeek}, {EVENT_INFO.dateDisplay}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3.5 py-2 font-medium">
                    <MapPin className="w-4 h-4 text-amber-300" />
                    <span>{EVENT_INFO.location}</span>
                  </div>
                </div>

                {/* Partner Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  {EVENT_INFO.partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="flex items-center gap-3 rounded-2xl bg-white/95 text-stone-900 px-3.5 py-2.5 shadow-lg"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={44}
                        height={44}
                        className="shrink-0 rounded-full"
                      />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-red-700">
                          {partner.role}
                        </p>
                        <p className="text-xs sm:text-sm font-extrabold text-stone-900">
                          {partner.shortName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <CountdownTimer targetDate={EVENT_INFO.isoTargetDate} />

                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-white/10 border border-white/15 p-3">
                    <p className="text-xl sm:text-2xl font-extrabold text-white">
                      {RESEARCH_LIST.length}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-red-100 font-semibold">
                      Research Slots
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/10 border border-white/15 p-3">
                    <p className="text-xl sm:text-2xl font-extrabold text-white">
                      {PANEL_MEMBERS.length}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-red-100 font-semibold">
                      Panel Roles
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/10 border border-white/15 p-3">
                    <p className="text-xl sm:text-2xl font-extrabold text-white">
                      {GUEST_LIST.length}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-red-100 font-semibold">
                      Key Guests
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research List Section */}
        <section id="research" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Congress Compendium</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              List of Research Presentations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
              Filter by Basic Education Research Agenda (BERA) track or search by paper code.
              Confirmed study titles and presenters will be updated here once finalized.
            </p>
          </div>

          <ResearchDirectory items={RESEARCH_LIST} />
        </section>

        {/* Panel of Evaluators Section */}
        <section id="panel" className="bg-red-50/70 border-y border-red-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 mb-2">
                <UserCheck className="w-4 h-4" />
                <span>Peer Review &amp; Adjudication</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Panel of Evaluators
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
                Evaluation panel composed of division research leaders from DepEd Toledo City
                and partner academic institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PANEL_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <Image
                        src={member.image}
                        alt={`${member.role} photo placeholder`}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-2xl object-cover border border-red-200 bg-red-50"
                      />
                      <div className="w-9 h-9 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-stone-900 leading-snug">
                      {member.role}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold text-red-700">{member.unit}</p>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                      {member.focusArea}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-red-50">
                    <span className="inline-flex items-center rounded-md bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-700">
                      Panelist: {member.assignee}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distinguished Guests Section */}
        <section id="guests" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 mb-2">
              <Users className="w-4 h-4" />
              <span>Leadership &amp; Partners</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Distinguished Guests &amp; Speakers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
              Keynote speakers, division officials, and partner representatives joining the
              December 7, 2026 congress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GUEST_LIST.map((guest) => (
              <div
                key={guest.id}
                className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm flex items-start gap-4"
              >
                <Image
                  src={guest.image}
                  alt={`${guest.designation} photo placeholder`}
                  width={72}
                  height={72}
                  className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl object-cover border border-red-200 bg-red-50 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                      {guest.designation}
                    </span>
                    {guest.guestName ? (
                      <span className="rounded-full bg-red-50 border border-red-200 px-2.5 py-0.5 text-[11px] font-semibold text-red-800">
                        {guest.guestName}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-1 text-base font-bold text-stone-900">{guest.office}</h3>
                  <p className="mt-1 text-sm text-stone-600">{guest.sessionRole}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2026 Research Committee Section */}
        <section id="committee" className="bg-red-50/70 border-t border-red-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Organizing &amp; Steering Team</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                2026 Research Committee
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl">
                Division leadership, secretariat, and technical working group overseeing the
                Schools Division of Toledo City Research Congress 2026.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESEARCH_COMMITTEE.map((member) => (
                <div
                  key={member.id}
                  className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm flex items-start gap-4"
                >
                  <Image
                    src={member.image}
                    alt={`${member.committeeRole} photo placeholder`}
                    width={72}
                    height={72}
                    className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl object-cover border border-red-200 bg-red-50 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                        {member.committeeRole}
                      </span>
                      {member.memberName ? (
                        <span className="rounded-full bg-red-50 border border-red-200 px-2.5 py-0.5 text-[11px] font-semibold text-red-800">
                          {member.memberName}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="text-base font-bold text-stone-900">
                      {member.officeOrUnit}
                    </h3>
                    <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">
                      {member.responsibilities}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Schedule Section */}
        <section id="program" className="bg-red-950 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-2">
                December 7, 2026
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                Congress Program Flow
              </h2>
            </div>

            <div className="space-y-3">
              {PROGRAM_SCHEDULE.map((slot) => (
                <div
                  key={slot.time}
                  className="rounded-2xl border border-red-800/80 bg-red-900/40 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
                >
                  <div className="sm:w-48 shrink-0 text-sm font-bold text-amber-300 tabular-nums">
                    {slot.time}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{slot.title}</h3>
                    <p className="text-sm text-red-100/90 mt-0.5">{slot.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/deped-toledo-logo.svg"
              alt="DepEd Toledo City Seal"
              width={32}
              height={32}
            />
            <div className="text-xs text-stone-600">
              <p className="font-bold text-stone-900">{EVENT_INFO.title}</p>
              <p>Hosted by DepEd Schools Division of Toledo City</p>
            </div>
          </div>
          <div className="text-xs font-medium text-stone-500 flex flex-col sm:items-end gap-1">
            <p>December 7, 2026 • Toledo City</p>
            <p className="inline-flex items-center gap-1">
              <span>crafted with</span>
              <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600" aria-hidden="true" />
              <span>by</span>
              <a
                href="https://gurlah.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red-700 hover:text-red-800 underline underline-offset-2"
              >
                gurlah
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
