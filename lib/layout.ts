export const NAVBAR_HEIGHT = 64;

/** Shared max width for page sections and footer. */
export const SECTION_MAX_WIDTH = 1450;

/** Minimum horizontal inset from the viewport edge (px). */
export const SECTION_PADDING_X = 80;

/** Navbar content width — kept narrower than sections. */
export const NAVBAR_MAX_WIDTH = 1320;

/** Ignore minor width changes from scrollbars when comparing to initial width. */
export const HERO_VIDEO_WIDTH_TOLERANCE = 24;

/** Initial / full window width — light streak at navbar bottom. */
export const HERO_VIDEO_TOP = -368;
export const HERO_VIDEO_OBJECT_Y = 20;

/** Window resized narrower than the initial width. */
export const HERO_VIDEO_TOP_NARROW = -400;
export const HERO_VIDEO_OBJECT_Y_NARROW = 20;

let initialViewportWidth = 0;

function getInitialViewportWidth() {
  if (typeof window === "undefined") return 0;

  initialViewportWidth = Math.max(initialViewportWidth, window.innerWidth);
  return initialViewportWidth;
}

/** True when viewport is still at (or near) the initial loaded width. */
export function isViewportFullWidth() {
  if (typeof window === "undefined") return true;

  const initialWidth = getInitialViewportWidth();
  return window.innerWidth >= initialWidth - HERO_VIDEO_WIDTH_TOLERANCE;
}

export function getHeroVideoStyle(isFullWidth = isViewportFullWidth()) {
  return {
    top: isFullWidth ? HERO_VIDEO_TOP : HERO_VIDEO_TOP_NARROW,
    objectPosition: `center ${isFullWidth ? HERO_VIDEO_OBJECT_Y : HERO_VIDEO_OBJECT_Y_NARROW}%`,
  };
}
