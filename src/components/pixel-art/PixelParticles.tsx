export function PixelParticles() {
  return (
    <div className="pixel-particles" aria-hidden="true">
      {Array.from({ length: 22 }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}
