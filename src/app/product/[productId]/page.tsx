export default function ProductId({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product details {params.productId}</h1>;
}
