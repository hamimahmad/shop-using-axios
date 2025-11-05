import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-linear-to-br from-slate-900 to-slate-800 rounded-xl cursor-pointer overflow-hidden"
    >

      <div className="bg-slate-300 h-64">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>


      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">
          {product.title}
        </h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <span className="text-2xl font-bold text-emerald-400">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default Card;