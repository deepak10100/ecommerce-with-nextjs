
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full  bg-white text-black px-6 md:px-12 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-2xl font-semibold tracking-wide">Trexo</h1>

      {/* Menu */}
      <ul className=" md:flex gap-8 text-sm font-medium">
        <li>
          <Link href="/" className="border-b-2 border-white pb-1">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/collections" className="hover:text-gray-300">
            COLLECTION
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">
            CONTACT
          </Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <Search className="w-5 h-5 cursor-pointer" />
       <Link href={'/login'}> <User className="w-5 h-5 cursor-pointer" /></Link>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}