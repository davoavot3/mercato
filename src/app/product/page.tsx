"use client"

import ProductDetails from "@/components/product-details";
import ProductLists from "@/components/product-lists";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {

  const searchParam = useSearchParams();
  const id = searchParam.get("id")??"";

  return (
   <div>
       <ProductDetails id={id}/>
   </div>
  );
}
