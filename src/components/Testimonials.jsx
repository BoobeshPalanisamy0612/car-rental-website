import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Business Executive",
    review:
      "Outstanding experience. The car was immaculate and the service was flawless.",
  },
  {
    name: "Sarah Johnson",
    role: "Travel Blogger",
    review:
      "The booking process was incredibly smooth and the support team was amazing.",
  },
  {
    name: "Michael Brown",
    role: "Entrepreneur",
    review:
      "The best luxury rental platform I have ever used.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <span className="text-blue-400">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            What Clients Say
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                neon-card
                rounded-3xl
                p-8
              "
            >
              <div className="mb-5 flex gap-1">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="
                      fill-yellow-400
                      text-yellow-400
                    "
                  />
                ))}

              </div>

              <p className="mb-6 text-slate-400">
                "{item.review}"
              </p>

              <div>
                <h4 className="font-bold">
                  {item.name}
                </h4>

                <span className="text-sm text-slate-500">
                  {item.role}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}