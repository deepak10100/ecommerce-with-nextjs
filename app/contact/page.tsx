'use client';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <div className="text-center py-12">
  <h1 className="text-4xl font-light tracking-widest text-gray-600">
    CONTACT <span className="text-gray-900">US</span> —
  </h1>
</div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-16 items-start">
          
          {/* LEFT - IMAGE */}
          <div className="flex justify-center">
            <div className="w-full bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=500&fit=crop"
                alt="Contact workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT - CONTACT INFO */}
          <div className="space-y-10">
            
            {/* OUR STORE */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Store
              </h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold">54709 Willms Station</p>
                  <p className="text-gray-700">Suite 350, Washington, USA</p>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Tel:</span> (415) 555-0132
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span> admin@forever.com
                  </p>
                </div>
              </div>
            </div>

            {/* CAREERS */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Careers at Forever
              </h2>
              
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Learn more about our teams and job openings.
              </p>

              {/* EXPLORE JOBS BUTTON */}
              <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300">
                Explore Jobs
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}