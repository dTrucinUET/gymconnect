"use client"
import { useEffect, useState } from "react";

export default function FitnessCenterPage() {
  const equipment = {
    image_url: [
      "https://vuacobap.com/wp-content/uploads/2021/05/ta-tay-dumbbell-alex.jpg",
      "https://i.pinimg.com/control/564x/cd/06/9a/cd069a94bd0484f2a1b13653194ff870.jpg",
      "https://i.pinimg.com/control/564x/47/dc/e9/47dce93b455a9e4bcebab62ebe6e9591.jpg",
    ],
    name: "Tạ tay",
    description: "somethings",
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const lenImg = equipment.image_url.length;

  const updateSliderPosition = (index: number) => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? lenImg - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    updateSliderPosition(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === lenImg - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    updateSliderPosition(newIndex);
  };

  useEffect(() => {
    updateSliderPosition(currentIndex);
  }, [currentIndex]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 p-6">
        Tạ tay tại FITNESS CENTER
      </h1>

      <div className="relative flex flex-col lg:flex-row lg:space-x-6 h-full">
        {/* Slider Section */}
        <div className="relative lg:w-2/3 h-100 overflow-hidden flex flex-col justify-between">
          <div id="slider" className="flex transition-transform duration-500 ease-in-out h-full">
            {equipment.image_url.map((img: string, index: number) => (
              <div
                key={index}
                className="w-full flex-shrink-0 pr-5 pl-5 h-100"
              >
                <img
                  src={img}
                  alt={`Equipment Image ${index + 1}`}
                  className="w-full object-cover rounded-lg md:h-full h-96"
                  style={{ maxHeight: "680px" }}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 text-lg lg:text-2xl"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 text-lg lg:text-2xl"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Description Section */}
        <div className="relative lg:w-1/3 text-lg text-gray-300 mt-4 lg:mt-0 flex flex-col p-4">
          <p className="text-orange-500 font-semibold mb-2">Mô tả:</p>
          <p className="mb-4">{equipment.description}</p>

          <div className="mt-auto mb-4 flex justify-start space-x-2">
            <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm md:text-md w-32">
              Chi tiết
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm md:text-md w-32">
              Hướng dẫn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
