"use client";

export default function ErrorBoundry({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h1 className="text-[red] text-lg font-bold">
        {error.message}
        <button className="bg-[yellow]" onClick={reset}>
          Try again
        </button>
      </h1>
    </div>
  );
}
