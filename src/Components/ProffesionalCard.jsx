const ProfessionalCard = ({
  // @ts-ignore
  title,
  // @ts-ignore
  image,
  // @ts-ignore
  price,
  // @ts-ignore
  profileImage,
  // @ts-ignore
  name,
  // @ts-ignore
  rating,
  // @ts-ignore
  reviews,
  // @ts-ignore
  isNew,
  // @ts-ignore
  isFeatured,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between h-full">
      {/* Image and Badges */}
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-2 right-2 w-5 h-5 text-white cursor-pointer hover:text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>

        {/* Badges */}
        {isNew && (
          <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            NEW ARRIVAL
          </span>
        )}
        {isFeatured && (
          <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
            FEATURED
          </span>
        )}

        {/* Price */}
        <div className="absolute bottom-2 right-2 bg-purple-700 text-white font-medium text-sm px-3 py-1 rounded-md">
          Rs. {price}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>

          <div className="flex items-center mt-2">
            <img
              src={profileImage}
              alt={name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-700">{name}</span>
          </div>

          <div className="flex items-center mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-3 h-3 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({reviews})</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md">
          CONTACT NOW
        </button>
      </div>
    </div>
  );
};

export default ProfessionalCard;
