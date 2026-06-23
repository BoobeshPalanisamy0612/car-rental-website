export default function FilterSidebar() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-6
      "
    >
      <h3 className="mb-6 text-xl font-bold">
        Filters
      </h3>

      {/* Brand */}

      <div className="mb-8">
        <h4 className="mb-3 font-semibold">
          Brand
        </h4>

        <div className="space-y-2">
          <label className="block">
            <input type="checkbox" /> Tesla
          </label>

          <label className="block">
            <input type="checkbox" /> BMW
          </label>

          <label className="block">
            <input type="checkbox" /> Audi
          </label>

          <label className="block">
            <input type="checkbox" /> Mercedes
          </label>
        </div>
      </div>

      {/* Fuel */}

      <div className="mb-8">
        <h4 className="mb-3 font-semibold">
          Fuel Type
        </h4>

        <div className="space-y-2">
          <label className="block">
            <input type="checkbox" /> Electric
          </label>

          <label className="block">
            <input type="checkbox" /> Petrol
          </label>

          <label className="block">
            <input type="checkbox" /> Diesel
          </label>
        </div>
      </div>

      {/* Price */}

      <div>
        <h4 className="mb-3 font-semibold">
          Price Range
        </h4>

        <input
          type="range"
          className="w-full"
        />
      </div>
    </div>
  );
}