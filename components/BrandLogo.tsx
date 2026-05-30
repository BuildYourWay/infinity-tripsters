import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type BrandLogoProps = {
  href?: string;
  className?: string;
  /** Size of the icon mark (infinity symbol from logo). */
  iconSize?: number;
  priority?: boolean;
  showText?: boolean;
};

function BrandMark({
  iconSize,
  priority,
}: {
  iconSize: number;
  priority?: boolean;
}) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white"
      style={{ width: iconSize, height: iconSize }}
    >
      <Image
        src="/favicon-mark.png"
        alt=""
        width={iconSize}
        height={iconSize}
        className="h-full w-full object-contain p-1"
        priority={priority}
        aria-hidden
      />
    </div>
  );
}

function BrandText() {
  return (
    <div className="leading-tight">
      <div className="text-sm font-semibold tracking-wide text-white">
        INFINITY
      </div>
      <div className="text-[11px] text-white/70">TRIPSTERS</div>
    </div>
  );
}

export default function BrandLogo({
  href = "/",
  className,
  iconSize = 36,
  priority = false,
  showText = true,
}: BrandLogoProps) {
  const content = (
    <span
      className={clsx("inline-flex items-center gap-3", className)}
    >
      <BrandMark iconSize={iconSize} priority={priority} />
      {showText && <BrandText />}
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-flex shrink-0 items-center">
      {content}
    </Link>
  );
}
