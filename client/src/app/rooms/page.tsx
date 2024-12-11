"use client"; // Enables client-side functionality for Next.js

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Rooms() {
  useEffect(() => {
    // Test API call
    fetch(`/api/test/hello-world`)
      .then((res) => res.json())
      .then((data) => console.log(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="relative text-center">
    <img src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/478970afM/anh-mo-ta.png" alt="Banner Image"
        className="img-fluid w-full h-48 object-cover shadow-lg" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-7xl font-bold text-orange-500
            ">Phòng tập</span>
        <span className="text-7xl font-bold text-white">của chúng tôi</span>
    </div>
</div>
<div className="flex justify-center mt-4">
    <input type="text" placeholder="Tìm kiếm..." className="p-2 border border-gray-300 rounded-l-lg w-1/2" />
    <button className="bg-warning text-black p-2 rounded-r-lg">Tìm kiếm</button>
</div>
<h2 className="text-3xl font-bold text-center mt-3 text-white">Danh sách phòng tập</h2>
<div className="container mx-auto mt-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-5" id="gym-cards">
    </div>
</div>
    </>
  );
}
