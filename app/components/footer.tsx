import Link from "next/link"
export function Footer(){
    const date = new Date
    const year = date.getFullYear()
    return (
        <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold mb-4">T n E Electricals</h3>
              <p className="text-md text-gray-600">Professional electrical services you can trust</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/installation">Installation</Link>
                </li>
                <li>
                  <Link href="/collection">Collection</Link>
                </li>
                <li>
                  <Link href="/delivery">Delivery</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-md">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/terms">Terms</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-md text-gray-600">
                <li>123 Electric Avenue</li>
                <li>service@tnelectricals.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
            <p>© {year} T n E Electricals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}