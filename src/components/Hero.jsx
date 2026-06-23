import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-40 pb-32">

      <div className="absolute right-0 top-20 h-[600px] w-[600px] rounded-full border-4 border-blue-500/30" />

      <div className="absolute right-10 top-28 h-[550px] w-[550px] rounded-full border-4 border-purple-500/20" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div>
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Premium Luxury Cars
          </span>

          <h1 className="mt-8 text-6xl font-black leading-none lg:text-8xl">
            Drive Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dream Car
            </span>
            <br />
            Today
          </h1>

          <p className="mt-8 max-w-xl text-lg text-slate-400">
            Rent luxury, sports and premium vehicles with
            instant booking and world class service.
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => navigate("/cars")}
              className="
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                px-8 py-4
                font-semibold
              "
            >
              Browse Cars
            </button>

            <button
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                px-8 py-4
              "
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
            alt="Porsche"
            className="relative z-10 w-full"
          />
        </div>

      </div>
    </section>
  );
}