export function PixelDiscordIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`contact-icon-svg ${className}`} viewBox="0 0 64 64" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="8" y="16" width="48" height="34" fill="#FFFFFF" />
      <rect x="14" y="22" width="36" height="22" fill="#384358" />
      <rect x="20" y="28" width="8" height="8" fill="#FFFFFF" />
      <rect x="36" y="28" width="8" height="8" fill="#FFFFFF" />
      <rect x="24" y="40" width="16" height="4" fill="#FFFFFF" />
      <rect x="12" y="46" width="8" height="6" fill="#FFFFFF" />
      <rect x="44" y="46" width="8" height="6" fill="#FFFFFF" />
    </svg>
  );
}

export function PixelMailIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`contact-icon-svg ${className}`} viewBox="0 0 64 64" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="10" y="18" width="44" height="30" fill="#FFFFFF" />
      <rect x="14" y="22" width="36" height="22" fill="#384358" />
      <rect x="18" y="26" width="8" height="6" fill="#FFFFFF" />
      <rect x="38" y="26" width="8" height="6" fill="#FFFFFF" />
      <rect x="26" y="32" width="12" height="6" fill="#FFFFFF" />
      <rect x="20" y="38" width="24" height="4" fill="#FFFFFF" />
    </svg>
  );
}
