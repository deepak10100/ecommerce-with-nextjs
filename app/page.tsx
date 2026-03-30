import { BadgePoundSterling, CircleCheck, Headphones } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const products = [
  {
    id: 1,
    name: "Blue Shirt",
    price: "$99",
    image: "/p1.png",
  },
  {
    id: 2,
    name: "Pink Jacket",
    price: "$70",
    image: "/p2.png",
  },
  {
    id: 3,
    name: "Black Jogger",
    price: "$100",
    image: "/p3.png",
  },
  {
    id: 4,
    name: "White Plain T-Shirt",
    price: "$33",
    image: "/p4.png",
  },
  {
    id: 5,
    name: "White T-Shirt",
    price: "$45",
    image: "/p5.png",
  },
];

export default function Home() {
  return (
    <>
     <section className="w-full px-4 md:px-10 lg:px-20 py-10 text-black bg-white">
      <div className="border border-gray-300 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          
          {/* Small heading */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-gray-500"></div>
            <p className="text-sm tracking-wide text-black uppercase">
              OUR BESTSELLERS
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-serif  text-black mb-6">
            Fresh Arrivals
          </h1>

          {/* Button */}
          <Link
            href="/shop"
            className="flex items-center gap-3 text-sm font-medium  text-black "
          >
            SHOP NOW
            <span className="w-10 h-[2px] bg-gray-700"></span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
          <Image
            src="/model.jpg" // 👉 apni image public folder me daal
            alt="model"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>

     <section className="px-4 md:px-10 lg:px-20 py-16 bg-white">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          LATEST COLLECTIONS
        </h2>
        <div className="w-16 h-[2px] bg-gray-800 mx-auto my-3"></div>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {products.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-3 text-sm">
              <h3 className="text-gray-700">{item.name}</h3>
              <p className="font-medium">${item.price.replace("$", "")}</p>
            </div>
          </div>
        ))}

         {products.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-3 text-sm">
              <h3 className="text-gray-700">{item.name}</h3>
              <p className="font-medium">${item.price.replace("$", "")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

     <section className="px-4 md:px-10 lg:px-20 py-16 bg-white">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
         BEST SELLERS
        </h2>
        <div className="w-16 h-[2px] bg-gray-800 mx-auto my-3"></div>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {products.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-3 text-sm">
              <h3 className="text-gray-700">{item.name}</h3>
              <p className="font-medium">${item.price.replace("$", "")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


       <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
      
          <div className="flex flex-col items-center gap-4">
            
            {/* Icon */}
            <div className="text-black"><BadgePoundSterling /></div>

            {/* Title */}
            <h3 className="font-semibold text-gray-800">
             Easy Exchange Policy
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm max-w-xs">
              We offer hassle free exchange policy
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            
            {/* Icon */}
            <div className="text-black"><CircleCheck /></div>

            {/* Title */}
            <h3 className="font-semibold text-gray-800">
            7 Days Return Policy
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm max-w-xs">
             We provide 7 days free return policy
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            
            {/* Icon */}
            <div className="text-black"><Headphones /></div>

            {/* Title */}
            <h3 className="font-semibold text-gray-800">
            Best customer support
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm max-w-xs">
              we provide 24/7 customer support
            </p>
          </div>
      

      </div>
    </section>
    </>
  );
}
