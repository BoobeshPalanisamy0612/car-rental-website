import { MapPin, CalendarDays } from "lucide-react";

export default function SearchCard() {
  return (
    <section className="-mt-10 px-6 relative z-20">

      <div
        className="
          mx-auto
          max-w-7xl
          rounded-[30px]
          border border-white/10
          bg-slate-900/70
          p-6
          backdrop-blur-xl
        "
      >
        <div className="grid gap-4 lg:grid-cols-5">

          <div className="rounded-2xl bg-slate-800/60 p-4">
            <label className="mb-2 flex gap-2 text-sm text-slate-400">
              <MapPin size={16} />
              Pickup
            </label>
            <input
              className="w-full bg-transparent outline-none"
              placeholder="Chennai"
            />
          </div>

          <div className="rounded-2xl bg-slate-800/60 p-4">
            <label className="mb-2 flex gap-2 text-sm text-slate-400">
              <MapPin size={16} />
              Drop Off
            </label>
            <input
              className="w-full bg-transparent outline-none"
              placeholder="Bangalore"
            />
          </div>

          <div className="rounded-2xl bg-slate-800/60 p-4">
            <label className="mb-2 flex gap-2 text-sm text-slate-400">
              <CalendarDays size={16} />
              Pickup Date
            </label>
            <input
              type="date"
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div className="rounded-2xl bg-slate-800/60 p-4">
            <label className="mb-2 flex gap-2 text-sm text-slate-400">
              <CalendarDays size={16} />
              Return Date
            </label>
            <input
              type="date"
              className="w-full bg-transparent outline-none"
            />
          </div>

          <button
            className="
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              font-semibold
            "
          >
            Search Cars
          </button>

        </div>
      </div>
    </section>
  );
}