"use client";

import {
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

type ProjectImageViewerProps = {
  images: readonly string[];
  title: string;
  activeIndex: number;
  onIndexChange: (index: number) => void;
};

export const ProjectImageViewer = ({
  images,
  title,
  activeIndex,
  onIndexChange,
}: ProjectImageViewerProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number; posX: number; posY: number } | null>(
    null,
  );
  const viewportRef = useRef<HTMLDivElement>(null);

  const currentImage = images[activeIndex];

  const resetView = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    resetView();
  }, [activeIndex, resetView]);

  const clampScale = (value: number) =>
    Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));

  const zoomIn = () => setScale((prev) => clampScale(prev + ZOOM_STEP));
  const zoomOut = () => {
    setScale((prev) => {
      const next = clampScale(prev - ZOOM_STEP);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const showPrev = () => {
    onIndexChange(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const showNext = () => {
    onIndexChange(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    setScale((prev) => {
      const next = clampScale(prev + delta);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    if (scale <= 1) return;
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      posX: position.x,
      posY: position.y,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!isDragging || !dragStart.current) return;
    setPosition({
      x: dragStart.current.posX + (event.clientX - dragStart.current.x),
      y: dragStart.current.posY + (event.clientY - dragStart.current.y),
    });
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    dragStart.current = null;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        ref={viewportRef}
        onWheel={handleWheel}
        className={cn(
          "relative min-h-[320px] flex-1 overflow-hidden rounded-xl border border-blue-500/20 bg-[#050816] sm:min-h-[380px] lg:min-h-0",
          scale > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default",
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage}
            alt={`${title} screenshot ${activeIndex + 1}`}
            draggable={false}
            className="max-h-full max-w-full select-none object-contain transition-transform duration-150 ease-out"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: "center center",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          />
        </div>

        <button
          type="button"
          onClick={showPrev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white transition hover:border-blue-400/50 hover:bg-black/90"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white transition hover:border-blue-400/50 hover:bg-black/90"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/70 p-1 backdrop-blur-sm">
          <button
            type="button"
            onClick={zoomOut}
            disabled={scale <= MIN_ZOOM}
            aria-label="Zoom out"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <MagnifyingGlassMinusIcon className="h-4 w-4" />
          </button>
          <span className="min-w-[3.5rem] text-center text-xs font-medium text-gray-300">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            onClick={zoomIn}
            disabled={scale >= MAX_ZOOM}
            aria-label="Zoom in"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <MagnifyingGlassPlusIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={resetView}
            aria-label="Reset zoom"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-white/10"
          >
            <ArrowPathIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs text-gray-300">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={`slide-${index}`}
            type="button"
            aria-label={`Go to image ${index + 1}`}
            onClick={() => onIndexChange(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === activeIndex
                ? "w-6 bg-blue-400"
                : "w-2 bg-white/30 hover:bg-white/50",
            )}
          />
        ))}
      </div>
    </div>
  );
};
