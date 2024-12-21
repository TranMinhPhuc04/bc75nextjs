import { fetchDetail } from "@/app/action/services/productApi";
import Image  from "next/image";

export async function generateMetadata({ params }: any) {
  const prodDetail = await fetchDetail(params.id);

  return {
    title: `${prodDetail.name} - Product Detail`,
    description: prodDetail.description,
    openGraph: {
      title: prodDetail.name,
      description: prodDetail.description,
      url: `https://yourwebsite.com/products/${params.id}`,
      images: [
        {
          url: prodDetail.image,
          width: 500,
          height: 500,
          alt: prodDetail.alias,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: prodDetail.name,
      description: prodDetail.description,
      images: [prodDetail.image],
    },
  };
}

export default async function Detail({ params }: any) {
  const { id } = await params;

  const data = await fetchDetail(id);

  console.log(data);

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Detail
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          {/* <img
            src={data.image}
            alt={data.name}
            className="rounded-lg shadow-lg w-full h-auto object-cover max-w-md"
          /> */}
          <Image
            src={data.image}
            alt={data.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto object-cover max-w-md"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h5 className="text-2xl font-semibold text-gray-800 mb-4">
            Name: <span className="text-blue-600">{data.name}</span>
          </h5>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <span className="font-bold text-gray-800">Description</span>:{" "}
            {data.description}
          </p>
          <p className="text-xl font-medium text-gray-800">
            <span className="font-bold text-blue-600">Price</span>: $
            {data.price}
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
