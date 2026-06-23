import { X } from "lucide-react";

export default function BookingModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  const handleBooking = () => {
    alert("Booking Confirmed Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-slate-900 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Book Your Car
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm text-slate-400"
            >
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Smith"
              className="w-full rounded-xl border border-white/10 bg-slate-800 p-4"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm text-slate-400"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 9876543210"
              className="w-full rounded-xl border border-white/10 bg-slate-800 p-4"
            />
          </div>

          <div>
            <label
              htmlFor="pickupDate"
              className="mb-2 block text-sm text-slate-400"
            >
              Pickup Date
            </label>

            <input
              id="pickupDate"
              name="pickupDate"
              type="date"
              className="w-full rounded-xl border border-white/10 bg-slate-800 p-4"
            />
          </div>

          <div>
            <label
              htmlFor="returnDate"
              className="mb-2 block text-sm text-slate-400"
            >
              Return Date
            </label>

            <input
              id="returnDate"
              name="returnDate"
              type="date"
              className="w-full rounded-xl border border-white/10 bg-slate-800 p-4"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="pickupLocation"
              className="mb-2 block text-sm text-slate-400"
            >
              Pickup Location
            </label>

            <input
              id="pickupLocation"
              name="pickupLocation"
              type="text"
              placeholder="Chennai Airport"
              className="w-full rounded-xl border border-white/10 bg-slate-800 p-4"
            />
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-800 p-6">
          <div className="flex justify-between">
            <span>Car Rental</span>
            <span>$250/day</span>
          </div>

          <div className="mt-3 flex justify-between">
            <span>Insurance</span>
            <span>Included</span>
          </div>

          <div className="mt-4 border-t border-white/10 pt-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>$250</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleBooking}
          className="
            mt-8
            w-full
            rounded-2xl
            bg-blue-600
            py-4
            text-lg
            font-semibold
            transition
            hover:bg-blue-700
          "
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}