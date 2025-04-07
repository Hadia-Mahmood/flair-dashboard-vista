
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const ProductTable = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: "$299.99",
      sales: 1245,
      trend: "up",
      image: "https://placehold.co/60x60/4F46E5/FFFFFF.png?text=HP",
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      category: "Furniture",
      price: "$189.99",
      sales: 876,
      trend: "up",
      image: "https://placehold.co/60x60/10B981/FFFFFF.png?text=OC",
    },
    {
      id: 3,
      name: "Smart Watch Series X",
      category: "Electronics",
      price: "$249.99",
      sales: 654,
      trend: "down",
      image: "https://placehold.co/60x60/F97316/FFFFFF.png?text=SW",
    },
    {
      id: 4,
      name: "Organic Cotton T-shirt",
      category: "Clothing",
      price: "$34.99",
      sales: 543,
      trend: "up",
      image: "https://placehold.co/60x60/EC4899/FFFFFF.png?text=TS",
    },
    {
      id: 5,
      name: "Professional Blender",
      category: "Kitchen",
      price: "$129.99",
      sales: 432,
      trend: "down",
      image: "https://placehold.co/60x60/FBBF24/FFFFFF.png?text=PB",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-800">Top Selling Products</h3>
        <button className="text-sm font-medium text-dashboard-blue hover:text-dashboard-indigo">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-xs uppercase">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-gray-500 font-medium tracking-wider">
                Product
              </th>
              <th scope="col" className="px-6 py-3 text-left text-gray-500 font-medium tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-gray-500 font-medium tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-gray-500 font-medium tracking-wider">
                Sales
              </th>
              <th scope="col" className="px-6 py-3 text-left text-gray-500 font-medium tracking-wider">
                Trend
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img className="h-12 w-12 rounded-lg" src={product.image} alt={product.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{product.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.sales}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.trend === "up" ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-dashboard-green">
                      <TrendingUp size={14} className="mr-1" /> Up
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-dashboard-red">
                      <TrendingDown size={14} className="mr-1" /> Down
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
