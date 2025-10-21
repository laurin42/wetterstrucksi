interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div className={`relative max-w-6/8 mx-auto  ${className ?? ""}`}>
      <div className="border-b border-accent/44"></div>
    </div>
  );
}
