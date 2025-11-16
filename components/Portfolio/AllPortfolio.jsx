"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

export default function AllPortfolio({ selectedTag = "All" }) {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const COLLECTION_PORTFOLIO = process.env.NEXT_PUBLIC_APPWRITE_PORTFOLIO_COLLECTION_ID;

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      try {
        setLoading(true);
        const res = await databases.listDocuments(DB_ID, COLLECTION_PORTFOLIO, [
          Query.orderDesc("$createdAt"),
        ]);

        const formatted = (res.documents || []).map((doc) => ({
          id: doc.$id,
          img: doc.imgUrl || "/placeholder.jpg",
          name: doc.name,
          type: doc.type,
          desc: doc.desc,
        }));

        if (mounted) setPortfolios(formatted);
      } catch (err) {
        console.error("Failed to fetch portfolio:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, [DB_ID, COLLECTION_PORTFOLIO]);

  if (loading) return <p className="p-10 text-center">Loading portfolios...</p>;

  // Apply filter
  const filtered =
    !selectedTag || selectedTag === "All"
      ? portfolios
      : portfolios.filter((p) => (p.type || "").toString() === selectedTag);

  if (!filtered.length) return <p className="p-10 text-center">No portfolio found for “{selectedTag}”.</p>;

  const rows = filtered.reduce((acc, item, index) => {
    if (index % 2 === 0) acc.push([item, filtered[index + 1]]);
    return acc;
  }, []);

  return (
    <div className="custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto mt-10 space-y-8">
      {rows.map((pair, rowIndex) => (
        <div key={rowIndex} className="flex flex-col md:flex-row gap-6 md:h-[440px]">
          {pair.map(
            (project, colIndex) =>
              project && (
                <Card key={project.id} project={project} rowIndex={rowIndex} colIndex={colIndex} />
              )
          )}
        </div>
      ))}
    </div>
  );
}

function Card({ project, rowIndex, colIndex }) {
  const isLarge =
    (rowIndex % 2 === 0 && colIndex === 1) ||
    (rowIndex % 2 === 1 && colIndex === 0);

  return (
    <div
      className={`relative rounded-[8px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group flex-1 ${
        isLarge ? "md:flex-[1.5]" : "md:flex-[1]"
      }`}
    >
      <Image
        src={project.img}
        alt={project.name}
        width={800}
        height={600}
        className="w-full h-[320px] sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>

      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
        <div>
          <h3 className="text-2xl sm:text-[32px] sm:leading-[40px] font-bold mb-1">
            {project.name}
          </h3>
          <p className="text-base">{project.type}</p>
        </div>

        <div>
          <p className="text-base mb-4 max-w-lg leading-[20px]">{project.desc}</p>
          <Link
            href={`/portfolio/${project.id}`}
            className="inline-block text-sm py-[5px] transition-all duration-300
              group-hover:bg-white group-hover:text-black font-semibold group-hover:px-5 group-hover:py-2 group-hover:rounded-full uppercase transform group-hover:scale-105 group-hover:shadow-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
