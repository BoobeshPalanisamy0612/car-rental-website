import { Link } from "react-router-dom";
import { Fuel, Users, Settings } from "lucide-react";

export default function CarCard({ car }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-[32px]
        border border-white/10
        bg-slate-900/70
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      <img
        src={car.image}
        alt={car.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">
            {car.name}
          </h3>

          <span className="text-blue-400 font-semibold">
            ${car.price}/day
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-slate-400">

          <div className="flex items-center gap-2">
            <Users size={16} />
            {car.seats}
          </div>

          <div className="flex items-center gap-2">
            <Fuel size={16} />
            {car.fuel}
          </div>

          <div className="flex items-center gap-2">
            <Settings size={16} />
            {car.transmission}
          </div>

        </div>

        <Link
          to={`/cars/${car.id}`}
          className="
            mt-6 block
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            py-3
            text-center
            font-semibold
          "
        >
          Rent Now
        </Link>

      </div>
    </div>
  );
}