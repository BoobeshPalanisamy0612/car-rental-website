import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import BrowseCars from "../pages/BrowseCars";
import CarDetails from "../pages/CarDetails";

export default function AppRoutes() {
  return (
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Browse Cars */}
        <Route path="/cars" element={<BrowseCars />} />

        {/* Car Details */}
        <Route path="/cars/:id" element={<CarDetails />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-500">
                  404
                </h1>
                <p className="mt-4 text-slate-400">
                  Page Not Found
                </p>
              </div>
            </div>
          }
        />

      </Routes>
  );
}