import { ProductType } from "@/models/product";
import Link from "next/link";

const products: ProductType[] = [
  { id: "1", name: "Product1", price: 12.35 },
  { id: "2", name: "Product2", price: 21.19 },
  { id: "3", name: "Product3", price: 3.19 },
];

export default function ProductLists() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {products.map((product) => (
        <div className="border flex flex-col p-3 rounded-md" key={product.id}>
    
          <div>{product.name} </div> <div>{product.price} </div>
          <div className="flex justify-center">
            <Link className="cursor-pointer rounded-full border w-[100px] text-center" href={`/product?id=${product.id}`}>View</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
