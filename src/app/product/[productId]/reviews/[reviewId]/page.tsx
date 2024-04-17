import { notFound } from "next/navigation";
import React from "react";

export default function ReviewProduc({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 100) return notFound();
  return (
    <div>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
}
