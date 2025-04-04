import Link from "next/link"
export function Header(){
    return(
        <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold">T n E Electricals</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-lg font-medium">
              Products
            </Link>
            <Link href="/services" className="text-lg font-medium">
              Services
            </Link>
            <Link href="/about" className="text-lg font-medium">
              About
            </Link>
            <Link href="/contact" className="text-lg font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    )
}