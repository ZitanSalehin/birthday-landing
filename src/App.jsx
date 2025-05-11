
import { useState } from 'react';

import CategoryCards from './Components/CategoryCards.jsx';
import FilterButtons from './Components/FiilterButton.jsx';
import ProfessionalCard from './Components/ProffesionalCard.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Footer from './sections/Footer.jsx';
import HeroSection from './sections/HeroSection.jsx';
import Navbar from './sections/Navbar.jsx';



const App = () => {

  const professionals = [
    {
      id: 1,
      title: "Pastel and Gold Birthday Decor",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      price: 1500,
      profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Sophia Washington",
      rating: 5,
      reviews: 48,
      isNew: true
    },
    {
      id: 2,
      title: "Minion Themed Birthday Decor",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      price: 1500,
      profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Richardson",
      rating: 4,
      reviews: 36,
      isNew: true
    },
    {
      id: 3,
      title: "Black and Gold Birthday Decor",
      image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      price: 1500,
      profileImage: "https://randomuser.me/api/portraits/women/15.jpg",
      name: "Olivia Peterson",
      rating: 5,
      reviews: 52,
      isFeatured: true
    },
    {
      id: 4,
      title: "Flamingo Themed Birthday Decor",
      image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      price: 1500,
      profileImage: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "James Sutherland",
      rating: 4,
      reviews: 31,
      isNew: true
    },
    {
      id: 5,
      title: "Beer and Whiskey Themed Birthday Decor",
      image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      price: 1500,
      profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Samuel Thompson",
      rating: 4,
      reviews: 27,
      isFeatured: true
    },
    {
      id: 6,
      title: "Moustache Themed Birthday Decor",
      image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      price: 1500,
      profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
      name: "Sarah Wilkinson",
      rating: 5,
      reviews: 41,
      isNew: true
    }
  ];
   const buttonLabels = [
    'Birthday Special Decor',
    'Birthday Surprise',
    'Birthday Gift',
    'Birthday Special Decor',
    'Birthday Surprise',
    'Birthday Gift',
    'Birthday Special Decor',
    'Birthday Surprise',
    'Birthday Gift',
    'Birthday Special Decor',
    'Birthday Surprise',
    'Birthday Gift',
  ];

  const [activeFilter, setActiveFilter] = useState('Birthday Special Decors');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <CategoryCards />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h2 className="text-xl font-bold mb-4 md:mb-0">Top professionals for Birthday Decorations</h2>
          <div className="flex items-center">
            <span className="text-sm mr-2">Sort:</span>
            <button className="flex items-center text-sm border border-gray-300 rounded px-3 py-1">
              Popular
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        
        <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <div className="flex flex-col md:flex-row items-start">
      {/* Left Sidebar with Buttons */}
      <div className="w-full md:w-1/5 px-4">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            className="text-black w-full py-2 mb-2 bg-gray-100 border-purple-500 border-2 cursor-pointer rounded-sm hover:bg-purple-300"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Right Section with Professional Cards */}
      <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        {/* Assuming you are rendering professional cards here */}
        {/* Example: */}
        {professionals.map((professional) => (
          // @ts-ignore
          <ProfessionalCard key={professional.id} {...professional} />
        ))}
      </div>
    </div>
      </div>
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;