export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="h-10 w-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
