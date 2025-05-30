export default function SciFiButton({ children, ...props }) {
  return (
    <button {...props} className="bg-sci-fi-bg text-sci-fi-blue px-6 py-2 rounded-lg shadow-sci-fi-glow transition-all hover:scale-105 hover:shadow-lg border border-sci-fi-blue font-bold text-lg">
      {children}
    </button>
  );
}