export default function Stats() {
  const stats = [
    { value: "500+", label: "Premium Cars" },
    { value: "10K+", label: "Happy Customers" },
    { value: "50+", label: "Cities Covered" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="px-6 py-20">

      <div
        className="
          mx-auto
          max-w-7xl
          rounded-[40px]
          border
          border-white/10
          bg-gradient-to-r
          from-blue-600
          via-purple-600
          to-cyan-500
          p-14
        "
      >
        <div className="grid gap-8 md:grid-cols-4 text-center">

          {stats.map((item) => (
            <div key={item.label}>
              <h3 className="text-5xl font-black">
                {item.value}
              </h3>

              <p className="mt-2 text-white/80">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}