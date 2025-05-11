import { Link } from "react-router-dom";

// @ts-ignore
const CategoryCard = ({ title, bgColor, to }) => {
  return (
    <Link
      to={to}
      className={`rounded-lg shadow-md text-white p-6 flex items-center justify-center text-center text-lg font-semibold transition-transform duration-300 hover:scale-105 ${bgColor}`}
    >
      {title}
    </Link>
  );
};

export default CategoryCard;
