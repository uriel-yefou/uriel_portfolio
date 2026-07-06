export const NAVBAR_HEIGHT = 64;

/** Shared max width for page sections and footer. */
export const SECTION_MAX_WIDTH = 1450;

/** Minimum horizontal inset from the viewport edge (px). */
export const SECTION_PADDING_X = 80;

/** Navbar content width — kept narrower than sections. */
export const NAVBAR_MAX_WIDTH = 1320;

/** Hero video anchors — tuned so the light streak sits on the navbar bottom line. */
export const HERO_VIDEO_TOP_WIDE = -368;
export const HERO_VIDEO_TOP_NARROW = -400;
export const HERO_VIDEO_OBJECT_Y_WIDE = 20;
export const HERO_VIDEO_OBJECT_Y_SHORT = 28;

const HERO_VIDEO_WIDE_WIDTH = 1280;
const HERO_VIDEO_NARROW_WIDTH = 390;
const HERO_VIDEO_TALL_HEIGHT = 900;
const HERO_VIDEO_SHORT_HEIGHT = 640;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

export function getHeroVideoStyle(
  width = typeof window !== "undefined" ? window.innerWidth : HERO_VIDEO_WIDE_WIDTH,
  height = typeof window !== "undefined" ? window.innerHeight : HERO_VIDEO_TALL_HEIGHT,
) {
  const widthT = clamp(
    (HERO_VIDEO_WIDE_WIDTH - width) / (HERO_VIDEO_WIDE_WIDTH - HERO_VIDEO_NARROW_WIDTH),
    0,
    1,
  );

  const heightT = clamp(
    (HERO_VIDEO_TALL_HEIGHT - height) / (HERO_VIDEO_TALL_HEIGHT - HERO_VIDEO_SHORT_HEIGHT),
    0,
    1,
  );

  return {
    top: Math.round(
      lerp(HERO_VIDEO_TOP_WIDE, HERO_VIDEO_TOP_NARROW, widthT),
    ),
    objectPosition: `center ${Math.round(
      lerp(HERO_VIDEO_OBJECT_Y_WIDE, HERO_VIDEO_OBJECT_Y_SHORT, heightT),
    )}%`,
  };
}
