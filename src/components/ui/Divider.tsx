interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={`relative max-w-prose mx-auto my-8 md:my-12 ${
        className ?? ""
      }`}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
    </div>
  );
}
