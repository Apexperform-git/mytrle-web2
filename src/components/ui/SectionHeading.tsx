type Props = {
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
}: Props) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} mb-14 ${className}`}>
      {tag && (
        <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-3">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight text-warm-fg leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-warm-muted max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
