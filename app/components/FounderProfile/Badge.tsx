export default function Badge({
  text,
  light = false,
}: {
  text: string;
  light?: boolean;
}) {
  return (
    <span
      className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
      style={{
        color: light ? "var(--color-amber)" : "var(--color-forest)",
        background: light ? "rgba(248,171,29,0.12)" : "rgba(28,82,68,0.1)",
        border: light
          ? "1px solid rgba(248,171,29,0.25)"
          : "1px solid rgba(28,82,68,0.25)",
        fontFamily: "var(--font-heading)",
      }}
    >
      {text}
    </span>
  );
}
