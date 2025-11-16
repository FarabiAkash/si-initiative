"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";
import CoreFeatures from "./CoreFeatures";
import TechnologyStack from "./TechnologyStack";

export default function PortfolioDetails() {
  const { id } = useParams();

  const [portfolio, setPortfolio] = useState(null);
  const [features, setFeatures] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [loading, setLoading] = useState(true);

  const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const COLLECTION_PORTFOLIO = process.env.NEXT_PUBLIC_APPWRITE_PORTFOLIO_COLLECTION_ID;
  const COLLECTION_FEATURES = process.env.NEXT_PUBLIC_APPWRITE_FEATURES_COLLECTION_ID;
  const COLLECTION_TECH = process.env.NEXT_PUBLIC_APPWRITE_TECH_STACK_COLLECTION_ID;

  useEffect(() => {
    if (!id) return;
    async function loadDetails() {
      try {
        // Fetch main document
        const p = await databases.getDocument(DB_ID, COLLECTION_PORTFOLIO, id);
        setPortfolio(p);

        // Fetch core features
        const f = await databases.listDocuments(DB_ID, COLLECTION_FEATURES, [
          Query.equal("portfolioId", id),
          Query.orderAsc("$createdAt")
        ]);
        setFeatures(f.documents);

        // Fetch tech stack
        const t = await databases.listDocuments(DB_ID, COLLECTION_TECH, [
          Query.equal("portfolioId", id),
          Query.orderAsc("$createdAt")
        ]);
        setTechStack(t.documents);
      } catch (e) {
        console.error("Error loading details:", e);
      } finally {
        setLoading(false);
      }
    }

    loadDetails();
  }, [id]);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!portfolio) return <p className="p-10">Portfolio not found.</p>;

  return (
    <section className="!pt-0 2xl-custom:w-[1580px] 2xl-custom:mx-auto">

      {/* Hero Image */}
      <div className="custom-container pb-0">
        <img
          src={portfolio.imgUrl}
          alt={portfolio.name}
          className="w-full h-auto md:h-[612px] object-cover rounded-lg border"
        />
      </div>

      {/* Title */}
      <div className="text-center custom-container">
        <h1 className="text-3xl md:text-[48px] font-bold mb-4 text-[#0B3641]">
          {portfolio.name}
        </h1>
        <p className="text-[#0B3641] leading-relaxed max-w-2xl mx-auto text-xl font-medium">
          {portfolio.desc}
        </p>
      </div>

      {/* Production Releases */}
      <div className="w-full bg-[#e9f4f8] py-16 text-center">
        <h2 className="text-2xl md:text-[32px] font-semibold text-[#0B3641] mb-6">
          Production Releases
        </h2>

        <div className="flex flex-col items-center gap-2">

          {portfolio.appStoreUrl && (
            <a href={portfolio.appStoreUrl} target="_blank" className="px-3 py-2 bg-black rounded-lg">
              <Image
                src="/assets/portfolio/appStore1.svg"
                alt="App Store"
                width={166}
                height={56}
              />
            </a>
          )}

          {portfolio.googlePlayUrl && (
            <a href={portfolio.googlePlayUrl} target="_blank" className="px-3 py-2 bg-black rounded-lg">
              <Image
                src="/assets/portfolio/googlePlay1.svg"
                alt="Google Play"
                width={166}
                height={56}
              />
            </a>
          )}
          {portfolio.websiteUrl && (
            <a href={portfolio.websiteUrl} target="_blank" className="px-3 py-2 bg-black rounded-lg text-white font-bold text-2xl">
              Website
            </a>
          )}
        </div>
      </div>

      {/* Core Features */}
      <CoreFeatures features={features} />

      {/* Project Summary */}
      <div className="w-full bg-[#e9f4f8] py-16">
        <div className="custom-container">
          <h2 className="text-3xl md:text-[48px] font-bold mb-4 text-[#0B3641] text-center">
            Project Summary
          </h2>

          <p className="text-xl text-[#0B3641] max-w-2xl mx-auto mb-6 text-center">
            A quick snapshot of the project.
          </p>

          <table className="sm:w-1/2 mx-auto border border-[#DDF1F7] rounded-lg overflow-hidden">
            <tbody>
              {[
                ["Project Title", portfolio.projectTitle || portfolio.name],
                ["Client", portfolio.client || "N/A"],
                ["Duration", portfolio.duration || "N/A"],
                ["Platform", portfolio.platform || "N/A"],
                ["Project Status", portfolio.projectStatus || "N/A"],
              ].map(([label, value], i) => (
                <tr
                  key={i}
                  className={`border-t border-[#DDF1F7] ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F9FDFF]"
                  }`}
                >
                  <td className="font-medium text-[#0B3641] py-3 px-4">{label}</td>
                  <td className="text-[#0B3641] py-3 px-4">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Technology Stack */}
      <TechnologyStack groups={techStack} />
    </section>
  );
}
