import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-gray-50 mt-20">
      
      {/* Subscribe Section */}
      <div className="text-center px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Subscribe now & get 20% off
        </h2>
        <p className="text-gray-500 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Input + Button */}
        <div className="max-w-xl mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 px-4 py-3 outline-none"
          />
          <button className="bg-black text-white px-6 md:px-10">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className=" flex justify-between md:px-20 py-16">
        
        {/* About */}
        <div>
          <p className="text-gray-600 text-sm leading-6 w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4 text-black">COMPANY</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/delivery">Delivery</Link></li>
            <li><Link href="/privacy">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-black">GET IN TOUCH</h3>
          <p className="text-gray-600 text-sm mb-2">+1-212-456-7890</p>
          <p className="text-gray-600 text-sm">contact@foreveryou.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-600">
        Copyright 2024 © forever.com - All Right Reserved.
      </div>
    </section>
  );
}