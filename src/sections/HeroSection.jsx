const HeroSection = () => {
  return (
    <section
      className="relative bg-[url('https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[60vh] md:h-[50vh] bg-cover bg-center bg-fixed flex items-center justify-center"
    >
      <div className="bg-purple/40 w-full h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-black text-4xl md:text-6xl font-bold mb-6">
            Find the Best Birthday Professionals
          </h1>
          <p className="text-black text-lg md:text-xl mb-8">
            Search decorators, artists, organizers, and more near you.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search services (e.g., balloon decorator)"
              className="w-full bg-amber-100 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg w-full md:w-auto">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Cards Row */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 hidden md:block">
        <div className="flex justify-between gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-md rounded-lg p-4 w-full text-center">
              <h2 className="text-lg font-semibold mb-2">Card {item}</h2>
              <p className="text-gray-600 text-sm">Short description for card {item}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
