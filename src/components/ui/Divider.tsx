interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div className={`relative max-w-6/8 mx-auto my-8 ${className ?? ""}`}>
      <div className="border-b border-accent/8"></div>
    </div>
  );
}
