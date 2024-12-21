import { fetchData } from "@/app/action/services/productApi";
import Link from "next/link";

export const metadata = {
  title: "Shoes App - Home",
  description:
    "Explore our wide range of shoes with the best prices and quality.",
  openGraph: {
    title: "Shoes App - Home",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    url: "https://shoesshopbc70.vercel.app",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoes App - Home",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Shoes App",
    url: "https://yourwebsite.com",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    image: "https://yourwebsite.com/images/og-image.jpg",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

export default async function About() {
  const data = await fetchData();
  console.log(data);

  return (
    <div className="container mx-auto">
      <h1>List Shoes</h1>
      <div className="grid grid-cols-4 gap-10">
        {data?.map((shoe: any) => {
          return (
            <div
              key={shoe.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img className="rounded-t-lg" src={shoe.image} alt={shoe.name} />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {shoe.name}
                  </h5>
                </a>
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  href={`/detail/${shoe.id}`}
                >
                  Detail
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
