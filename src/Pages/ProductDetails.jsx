import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl text-gray-600">Product not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate("/")}
        className="mb-6 text-slate-900 font-medium hover:text-emerald-500 transition duration-300"
      >
        ← Back to Shop
      </button>

      <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="bg-slate-700 rounded-lg overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {product.title}
            </h1>
            <p className="text-gray-300 text-lg mb-6">{product.description}</p>
            <div className="text-5xl font-bold text-emerald-400 mb-8">
              ${product.price}
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 w-full md:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
