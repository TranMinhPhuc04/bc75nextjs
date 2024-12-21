"use client";

// import Image from "next/image";
import { useEffect, useState } from "react";
import Image from "next/image";

interface IShoe {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function Home() {
  const [data, setData] = useState<IShoe []>([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product");
      const data = await res.json();
      setData(data.content);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
    className="container mx-auto"
    >
      <h1>List Shoes</h1>
      <div className="grid grid-cols-4 gap-10">
        {data?.map((shoe) => {
          return (
            <div key={shoe.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {/* <img
                  className="rounded-t-lg"
                  src={shoe.image}
                  alt={shoe.name}
                /> */}
                <Image
                  className="rounded-t-lg"
                  src={shoe.image}
                  alt={shoe.name}
                  width={200}/>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {shoe.name}
                  </h5>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
