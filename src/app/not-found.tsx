import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32 md:py-48">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <span className="font-display text-8xl md:text-9xl font-semibold tracking-tight text-warm-border">
          404
        </span>
        <h1 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-warm-fg mt-6 mb-3">
          Page not found
        </h1>
        <p className="text-warm-muted mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button href="/" variant="accent">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
