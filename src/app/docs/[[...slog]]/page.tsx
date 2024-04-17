export default function Docs({ params }: { params: { slog: string[] } }) {
  // console.log(params.slog);
  if (params.slog?.length === 2)
    return (
      <h1>
        Viewing docs for {params.slog[0]} and {params.slog[1]}
      </h1>
    );
  if (params.slog?.length === 1)
    return <h1>Viewing docs for {params.slog[0]}</h1>;
  return <h1>Docs home page</h1>;
}
