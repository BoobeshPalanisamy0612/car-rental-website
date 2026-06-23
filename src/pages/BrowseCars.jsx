import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import FilterSidebar from "../components/FilterSidebar";
import CarCard from "../components/CarCard";
import { cars } from "../data/Cars";

export default function BrowseCars() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="relative overflow-hidden">

        <div className="absolute left-20 top-40 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute right-20 top-60 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">

          <div className="mb-16">

            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Premium Collection
            </span>

            <h1 className="mt-6 text-6xl font-black">
              Browse Cars
            </h1>

            <p className="mt-4 text-lg text-slate-400">
              Discover luxury, sports and premium vehicles.
            </p>

          </div>

          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

            <FilterSidebar />

            <div>

              <div className="mb-8 flex flex-col gap-4 md:flex-row">

                <div className="flex-1">
                  <SearchBar />
                </div>

                <SortDropdown />

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

          </div>

        </div>

      </div>

    </div>
  );
}