export default function SortDropdown() {
  return (
    <select
      className="
        rounded-2xl
        border
        border-white/10
        bg-slate-900
        px-4
        py-3
      "
    >
      <option>Popular</option>
      <option>Price Low → High</option>
      <option>Price High → Low</option>
      <option>Newest</option>
    </select>
  );
}