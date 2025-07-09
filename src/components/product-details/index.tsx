import { ProductType } from "@/models/product";
import { useSearchParams } from "next/navigation";

const products: ProductType[] = [
  { id: "1", name: "Product1", price: 1 },
  { id: "2", name: "Product2", price: 2 },
  { id: "3", name: "Product3", price: 3 },
];

export default function ProductDetails() {
  const searchParam = useSearchParams();
  const id = searchParam.get("id") ?? "";
  const product = products.find((p) => p.id === id);

  return (
    <div>
      {product?.id} {product?.name} {product?.price}
    </div>
  );
}
