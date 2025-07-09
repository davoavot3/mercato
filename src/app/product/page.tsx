"use client"
import ProductDetails from "@/components/product-details";
import { Suspense } from "react";

export default function Page() {


  return (
   <div>
       <Suspense fallback="...loading">
        
        <ProductDetails />
       </Suspense>
   </div>
  );
}
