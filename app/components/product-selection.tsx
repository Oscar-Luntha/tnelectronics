import { Wrench, Truck, Boxes } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function ProductSelection() {
  const categories = [
        {
            title: "Installation",
            description: "Professional setup for electronic devices",
            icon: Wrench,
            href: "/products/lighting",
          },
          {
            title: "Delivery",
            description: "Fast doorstep delivery of electronics",
            icon: Truck,
            href: "/products/climate-control",
          },
          {
            title: "Collection",
            description: "We collect and recycle old electronics",
            icon: Boxes,
            href: "/products/power-management",
          },          
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Product Categories</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <div key={category.title} className="bg-gray-100 p-4 rounded-2xl shadow-md">
            <div>
              <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-xl">{category.title}</h1>
              <p className="text-lg">{category.description}</p>
            </div>
            <p>
              <Link href={category.href} passHref>
                <Button >View {category.title}</Button>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

