import {
  ShieldCheck,
  Headphones,
  Car,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Luxury Fleet",
    desc: "Choose from premium sports cars, SUVs and luxury sedans.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    desc: "Drive with confidence backed by complete coverage.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated customer assistance anytime, anywhere.",
  },
  {
    icon: Wallet,
    title: "Best Prices",
    desc: "Transparent pricing with no hidden charges.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="features"
      className="relative py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <span className="text-blue-400 font-medium">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Premium Experience
          </h2>

          <p className="mt-5 text-slate-400">
            Everything you need for the perfect rental.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  neon-card
                  rounded-3xl
                  p-8
                "
              >
                <div
                  className="
                    mb-6
                    inline-flex
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600
                    p-4
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="text-slate-400">
                  {feature.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}