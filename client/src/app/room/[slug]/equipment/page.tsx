"use client"
import { useState, useEffect } from "react";

export default function FitnessCenterPage() {
  const equipments = [
    {
      name: "Tạ đơn",
      quantity: 20,
      imageUrl:
        "https://product.hstatic.net/1000098702/product/ta-gang-sat_cf60607ec026434a94d6d06506d80769_grande.jpg",
    },
    {
      name: "Máy chạy bộ",
      quantity: 5,
      imageUrl: "https://bofit.vn/wp-content/uploads/2016/09/bofit-x6-1-scaled.jpg",
    },
    {
      name: "Dây nhảy",
      quantity: 15,
      imageUrl:
        "https://product.hstatic.net/200000717719/product/rx102987_fc6a5581364146d8acab0ec829062b45.jpg",
    },
    
  ];

  const itemsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedEquipments, setPaginatedEquipments] = useState(equipments.slice(0, itemsPerPage));

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedEquipments(equipments.slice(startIndex, endIndex));
  }, [currentPage]);

  const totalPages = Math.ceil(equipments.length / itemsPerPage);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Dụng cụ tại FITNESS CENTER
        </h1>

        {/* Search Input */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="input search text"
              className="bg-gray-800 border border-gray-700 text-white p-2 rounded w-full sm:w-96 focus:outline-none focus:border-white pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <i className="bi bi-filter text-white cursor-pointer mr-2"></i>
              <i className="bi bi-search text-white cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* Equipment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" id="equipment-cards">
          {paginatedEquipments.map((equipment, index) => (
            <div
              key={index}
              className="m-4 transition-transform duration-300 transform hover:scale-105 hover:filter hover:brightness-30 cursor-pointer"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={equipment.imageUrl}
                  alt={equipment.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-md font-semibold text-gray-400">
                    Tên dụng cụ: {equipment.name}
                  </h2>
                  <p className="text-gray-400 text-md">Số lượng: {equipment.quantity}</p>
                  <a href="/view-detail-rooms-equipment" className="text-orange-500 hover:underline">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Links */}
        <div className="flex justify-center mt-10">
          <div id="pagination-links">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1 ? "bg-orange-500" : "bg-gray-800"
                } text-white hover:bg-gray-700`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
