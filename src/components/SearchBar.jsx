import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-slate-900
        px-4
        py-3
      "
    >
      <Search size={20} />

      <input
        type="text"
        placeholder="Search cars..."
        className="
          w-full
          bg-transparent
          outline-none
        "
      />
    </div>
  );
}