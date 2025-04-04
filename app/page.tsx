import Link from "next/link"
import { ProductSelection } from "@/app/components/product-selection"
import { Hero } from "@/app/components/hero"
import { Features } from "@/app/components/features"
export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <ProductSelection />
      <Features />
      <div className="container mx-auto px-4 py-8 text-center">

      </div>
    </div>
  )
}

