const pixel = 8;

const colors = {
  red: "#D51A2B",
  redDark: "#641A2B",
  skin: "#FFA586",
  skinMid: "#E99173",
  skinShadow: "#B96A5C",
  hair: "#111318",
  hairMid: "#1C2430",
  hairSoft: "#384358",
  eye: "#FFF3D7",
  line: "#080A0F",
  shirt: "#10131A",
  shirtLight: "#243F49",
  shadow: "#0F172C",
};

type Block = {
  x: number;
  y: number;
  w?: number;
  h?: number;
  color: string;
  className?: string;
};

const b = (x: number, y: number, w: number, h: number, color: string, className?: string): Block => ({
  x,
  y,
  w,
  h,
  color,
  className,
});

const blocks: Block[] = [
  // Red portrait plate, drawn in chunky steps instead of using an image.
  b(5, 3, 30, 36, colors.redDark),
  b(4, 2, 30, 35, colors.red),
  b(7, 5, 28, 30, "#E02A25"),
  b(8, 33, 26, 4, colors.redDark),
  b(10, 38, 20, 2, "rgba(15, 23, 44, 0.42)"),

  // Shoulders and dark jacket.
  b(8, 34, 6, 6, colors.shirt),
  b(26, 34, 6, 6, colors.shirt),
  b(10, 32, 20, 8, colors.shirt),
  b(14, 32, 12, 6, colors.shirtLight),
  b(16, 30, 8, 5, colors.skin),
  b(14, 34, 2, 5, colors.redDark),
  b(24, 34, 2, 5, colors.redDark),
  b(18, 35, 4, 5, colors.shadow),

  // Face outline and soft shaded face mass.
  b(11, 13, 18, 2, colors.line),
  b(10, 15, 20, 12, colors.line),
  b(11, 27, 18, 4, colors.line),
  b(13, 31, 14, 2, colors.line),
  b(12, 13, 16, 2, colors.skin),
  b(11, 15, 18, 11, colors.skin),
  b(12, 26, 16, 4, colors.skin),
  b(14, 30, 12, 2, colors.skin),
  b(11, 24, 3, 4, colors.skinMid),
  b(26, 19, 3, 8, colors.skinMid),
  b(13, 29, 11, 1, "#FFC09D"),

  // Ears, matching the portrait's rounded side silhouette.
  b(8, 19, 3, 6, colors.line),
  b(29, 19, 3, 6, colors.line),
  b(9, 20, 2, 4, colors.skin),
  b(29, 20, 2, 4, colors.skin),
  b(10, 22, 1, 2, colors.skinShadow),
  b(29, 22, 1, 2, colors.skinShadow),

  // Curly black hair: cleaner silhouette, many soft round-ish clusters.
  b(10, 6, 20, 3, colors.hair),
  b(8, 8, 25, 4, colors.hair),
  b(7, 11, 27, 4, colors.hair),
  b(6, 14, 7, 5, colors.hair),
  b(27, 14, 7, 6, colors.hair),
  b(8, 6, 5, 4, colors.hair),
  b(14, 4, 5, 4, colors.hair),
  b(20, 4, 5, 4, colors.hair),
  b(26, 6, 5, 4, colors.hair),
  b(9, 12, 4, 3, colors.hairMid),
  b(14, 10, 4, 3, colors.hairMid),
  b(20, 10, 5, 3, colors.hairMid),
  b(26, 12, 4, 3, colors.hairMid),
  b(13, 6, 1, 2, colors.hairSoft),
  b(18, 6, 1, 2, colors.hairSoft),
  b(24, 7, 1, 2, colors.hairSoft),
  b(29, 10, 1, 2, colors.hairSoft),

  // Forehead curls from the original portrait.
  b(12, 13, 5, 3, colors.hair),
  b(17, 12, 5, 4, colors.hair),
  b(23, 13, 4, 3, colors.hair),
  b(15, 15, 3, 2, colors.hairMid),
  b(21, 15, 3, 2, colors.hairMid),

  // Thick eyebrows.
  b(12, 18, 7, 1, colors.line),
  b(13, 17, 5, 1, colors.line),
  b(22, 18, 7, 1, colors.line),
  b(23, 17, 5, 1, colors.line),

  // Big expressive eyes, simplified like the cozy style reference.
  b(12, 20, 7, 5, colors.line, "avatar-eye"),
  b(22, 20, 7, 5, colors.line, "avatar-eye"),
  b(13, 20, 5, 4, colors.eye, "avatar-eye"),
  b(23, 20, 5, 4, colors.eye, "avatar-eye"),
  b(16, 21, 2, 3, colors.line, "avatar-eye"),
  b(25, 21, 2, 3, colors.line, "avatar-eye"),
  b(14, 20, 1, 1, "#FFFFFF", "avatar-eye"),
  b(24, 20, 1, 1, "#FFFFFF", "avatar-eye"),

  // Nose, mustache, smile and friendly cheek line.
  b(20, 21, 1, 5, colors.skinShadow),
  b(19, 25, 3, 1, colors.skinShadow),
  b(15, 27, 5, 1, colors.line),
  b(22, 27, 5, 1, colors.line),
  b(16, 28, 3, 1, colors.line),
  b(23, 28, 3, 1, colors.line),
  b(18, 29, 7, 1, colors.redDark),
  b(19, 30, 5, 1, colors.skinShadow),
  b(26, 28, 2, 1, colors.skinShadow),
  b(18, 32, 4, 1, colors.line),
];

export function PixelAvatar() {
  return (
    <div className="pixel-avatar-shell" aria-label="Pixel art portrait of Gabriel">
      <svg
        className="pixel-avatar-svg"
        viewBox={`0 0 ${40 * pixel} ${42 * pixel}`}
        role="img"
        shapeRendering="crispEdges"
      >
        <title>Clean pixel art avatar inspired by Gabriel's portrait</title>
        {blocks.map((block, index) => (
          <rect
            key={`${block.x}-${block.y}-${index}`}
            className={block.className}
            x={block.x * pixel}
            y={block.y * pixel}
            width={(block.w ?? 1) * pixel}
            height={(block.h ?? 1) * pixel}
            fill={block.color}
          />
        ))}
      </svg>
    </div>
  );
}
