import CarCard from "./CarCard";
import { cars } from "../data/Cars";

export default function FeaturedCars() {
  return (
    <section className="px-6 py-28">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <span className="text-blue-400">
            Premium Collection
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Cars
          </h2>

          <p className="mt-4 text-slate-400">
            Handpicked luxury and sports cars.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}

        </div>

      </div>

    </section>
  );
}