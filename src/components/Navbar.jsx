import { CarFront, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-6">
        <div
          className="
            flex items-center justify-between
            rounded-2xl
            border border-white/10
            bg-slate-900/70
            px-6 py-4
            backdrop-blur-xl
          "
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-2">
              <CarFront size={22} />
            </div>

            <span className="text-xl font-bold">
              Rent Wheels
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/">Home</Link>
            <Link to="/cars">Cars</Link>
            <a href="#features">Features</a>
            <a href="#reviews">Reviews</a>
          </nav>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => navigate("/cars")}
              className="
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                px-5 py-3
                font-semibold
              "
            >
              Rent Now
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              <Link to="/">Home</Link>
              <Link to="/cars">Cars</Link>
              <a href="#features">Features</a>
              <a href="#reviews">Reviews</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}