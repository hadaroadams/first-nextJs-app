import { Metadata } from "next";

interface Props {
  params: { productId: string };
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId} `,
  };
};

export default function ProductId({ params }: Props) {
  return <h1>Product details {params.productId}</h1>;
}
