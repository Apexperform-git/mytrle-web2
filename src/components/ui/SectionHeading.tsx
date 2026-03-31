type SectionHeadingProps = {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} mb-14 ${className}`}>
      {tag && (
        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-4">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neu-fg leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-neu-muted max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
