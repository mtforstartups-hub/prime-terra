export default function Badge({ text }: { text: string }) {
  return (
    <span
      className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
      style={{
        color: "var(--color-forest)",
        background: "rgba(28,82,68,0.1)",
        border: "1px solid rgba(28,82,68,0.25)",
        fontFamily: "var(--font-heading)",
      }}
    >
      {text}
    </span>
  );
}
