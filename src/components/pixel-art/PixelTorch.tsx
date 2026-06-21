export function PixelTorch({ className = "" }: { className?: string }) {
  return (
    <svg className={`pixel-art-svg ${className}`} viewBox="0 0 64 64" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="28" y="28" width="8" height="28" fill="#641A2B" />
      <rect x="24" y="20" width="16" height="12" fill="#D51A2B" />
      <rect x="28" y="12" width="8" height="8" fill="#FFA586" />
      <rect x="20" y="24" width="8" height="8" fill="#FFA586" />
      <rect x="36" y="24" width="8" height="8" fill="#FFA586" />
      <rect x="24" y="56" width="16" height="4" fill="#0F172C" />
    </svg>
  );
}
