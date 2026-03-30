'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="py-12 px-6 ">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-light tracking-widest text-gray-600">
            ABOUT US —
          </h1>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-16 items-start">
          
          {/* LEFT - IMAGE */}
          <div className="flex justify-center">
            <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/p1.png"
                alt="Fashion products"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="space-y-8">
            {/* FIRST PARAGRAPH */}
            <div>
              <p className="text-gray-700 text-base leading-relaxed">
                Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
              </p>
            </div>

            {/* SECOND PARAGRAPH */}
            <div>
              <p className="text-gray-700 text-base leading-relaxed">
                Since our inception, we ve worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
              </p>
            </div>

            {/* MISSION SECTION */}
            <div className="pt-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Our mission at Forever is to empower customers with choice, convenience, and confidence. We re dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}