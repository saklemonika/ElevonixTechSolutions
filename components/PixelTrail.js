// Signature visual motif: a trail of pixels dissolving into place,
// echoing the scattered squares in the Elevonix mark.
export default function PixelTrail({ count = 24, className = "" }) {
  const blocks = Array.from({ length: count }, (_, i) => {
    const o = 0.35 + Math.random() * 0.65;
    const s = 0.6 + Math.random() * 0.6;
    const d = (i % 12) * 0.12;
    return { o, s, d, key: i };
  });

  return (
    <div className={`pixel-trail ${className}`} aria-hidden="true">
      {blocks.map((b) => (
        <span
          key={b.key}
          style={{ "--o": b.o, "--s": b.s, "--d": `${b.d}s` }}
        />
      ))}
    </div>
  );
}
