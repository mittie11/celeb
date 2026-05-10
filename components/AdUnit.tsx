"use client";

type AdUnitProps = {
  slot: "leaderboard" | "rectangle" | "sidebar" | "mobile-banner";
  className?: string;
};

const adDimensions: Record<AdUnitProps["slot"], { label: string; minH: string }> = {
  leaderboard: { label: "Ad — 728×90", minH: "min-h-[90px]" },
  rectangle: { label: "Ad — 300×250", minH: "min-h-[250px]" },
  sidebar: { label: "Ad — 300×600", minH: "min-h-[250px]" },
  "mobile-banner": { label: "Ad — 320×50", minH: "min-h-[50px]" },
};

export default function AdUnit({ slot, className = "" }: AdUnitProps) {
  const { label, minH } = adDimensions[slot];

  return (
    <div
      className={`flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-lg ${minH} ${className}`}
      aria-label="Advertisement"
    >
      {/* Replace this div with your actual AdSense ins tag */}
      <span className="text-xs text-gray-400 font-medium">{label}</span>
    </div>
  );
}
