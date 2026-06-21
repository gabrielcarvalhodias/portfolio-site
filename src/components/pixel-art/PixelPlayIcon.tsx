export function PixelPlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`pixel-art-svg ${className}`} viewBox="0 0 64 64" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="8" y="8" width="48" height="48" fill="#641A2B" />
      <rect x="12" y="12" width="40" height="40" fill="#D51A2B" />
      <rect x="24" y="20" width="8" height="24" fill="#FFA586" />
      <rect x="32" y="24" width="8" height="16" fill="#FFA586" />
      <rect x="40" y="28" width="8" height="8" fill="#FFA586" />
    </svg>
  );
}
