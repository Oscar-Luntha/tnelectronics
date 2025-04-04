import Link from "next/link"
import{ Button}from "./ui/button"

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">T n E Electricals</h1>
        <p className="mt-6 text-lg text-gray-600">
          Quality electrical devices and equipment with expert installation, collection, and delivery services
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/products" passHref>
            <Button className="text-lg">View Products</Button>
          </Link>
          <Link href="/services" passHref>
            <Button className="text-lg">
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

 