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
    <div className={`${alignClass} mb-16 ${className}`}>
      {tag && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-4">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neu-fg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-neu-muted max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
