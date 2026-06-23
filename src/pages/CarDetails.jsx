import Navbar from "../components/Navbar";
import {
  Users,
  Fuel,
  Settings,
  Star,
  Shield,
} from "lucide-react";
import { useState } from "react";
import BookingModal from "../components/BookingModal";

export default function CarDetails() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
                alt="Porsche 911"
                className="w-full rounded-[32px] border border-white/10"
              />

              <div className="mt-4 grid grid-cols-3 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80"
                  alt="Porsche Front"
                  className="rounded-2xl"
                />

                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80"
                  alt="Porsche Side"
                  className="rounded-2xl"
                />

                <img
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&q=80"
                  alt="Porsche Rear"
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Right */}
            <div>
              <span className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
                Premium Collection
              </span>

              <h1 className="mt-6 text-5xl font-bold">
                Porsche 911
              </h1>

              <div className="mt-4 flex items-center gap-2">
                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span>4.9 Rating</span>
              </div>

              <div className="mt-8 text-5xl font-bold text-blue-400">
                $250
                <span className="ml-1 text-lg text-slate-400">
                  /day
                </span>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-900 p-4">
                  <Users />
                  <p className="mt-2">2 Seats</p>
                </div>

                <div className="rounded-2xl bg-slate-900 p-4">
                  <Fuel />
                  <p className="mt-2">Petrol</p>
                </div>

                <div className="rounded-2xl bg-slate-900 p-4">
                  <Settings />
                  <p className="mt-2">Automatic</p>
                </div>

                <div className="rounded-2xl bg-slate-900 p-4">
                  <Shield />
                  <p className="mt-2">Fully Insured</p>
                </div>
              </div>

              <p className="mt-8 text-slate-400">
                Experience the thrill of driving a luxury sports car
                with premium comfort, advanced technology, and
                unmatched performance.
              </p>

              <button
                onClick={() => setOpenModal(true)}
                className="
                  mt-10
                  w-full
                  rounded-2xl
                  bg-blue-600
                  py-4
                  text-lg
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-blue-700
                "
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}