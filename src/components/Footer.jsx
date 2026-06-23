import { CarFront } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-4">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <div
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  p-2
                "
              >
                <CarFront size={22} />
              </div>

              <h3 className="text-2xl font-bold">
                Rent Wheels
              </h3>

            </div>

            <p className="text-slate-400">
              Premium luxury car rentals for modern travelers.
            </p>

          </div>

          <div>
            <h4 className="mb-4 font-bold">
              Company
            </h4>

            <div className="space-y-3 text-slate-400">
              <p>About</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold">
              Services
            </h4>

            <div className="space-y-3 text-slate-400">
              <p>Luxury Cars</p>
              <p>Sports Cars</p>
              <p>SUV Rentals</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold">
              Contact
            </h4>

            <div className="space-y-3 text-slate-400">
              <p>support@rentwheels.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-slate-500">
          © 2026 Rent Wheels. All rights reserved.
        </div>

      </div>

    </footer>
  );
}