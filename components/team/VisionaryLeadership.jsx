"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import linkedInIcon from "../../public/assets/teams/linkedin.png";

import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
const COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_LEADERS_COLLECTION_ID || "";

const PAGE_SIZE = 6; // change if you want more/less per page

// Single leader card – UI unchanged
const SingleLeader = ({ leader }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-[8px] border border-[#19BCE533] p-4 max-w-[600px]">
      <div className="flex flex-col gap-6">
        <div className="w-[192px] h-[192px]">
          <Image
            className="w-full h-full object-cover rounded-[4px]"
            src={leader.avatar}
            alt={leader.name}
            width={192}
            height={192}
          />
        </div>

        {leader.linkedIn && (
          <a
            href={leader.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="flex justify-start items-center gap-1 text-sm font-medium text-[#0B3641] border border-[#EEF6F8] rounded-[4px] px-4 py-[6px]"
          >
            <Image src={linkedInIcon} alt="LinkedIn" />
            LinkedIn
          </a>
        )}
      </div>

      <div>
        <h2 className="text-[18px] sm:leading-[24px] font-semibold text-[#010101]">
          {leader.name}
        </h2>
        <h5 className="text-[#19BCE5] text-base font-normal">
          {leader.position}
        </h5>
        <p className="text-[#0B3641] font-normal text-base mt-3">
          {leader.desc}
        </p>
      </div>
    </div>
  );
};

// MAIN SECTION – now client component with pagination (like members)
const VisionaryLeadership = () => {
  const [leaders, setLeaders] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoadDone, setInitialLoadDone] = useState(false);

  const fetchPage = useCallback(async () => {
    if (!DB_ID || !COLLECTION_ID) {
      console.error("Leaders collection not configured in env.");
      return;
    }
    if (isLoading) return;

    try {
      setIsLoading(true);

      const queries = [
        Query.orderAsc("$createdAt"),
        Query.limit(PAGE_SIZE),
      ];

      if (cursor) {
        queries.push(Query.cursorAfter(cursor));
      }

      const res = await databases.listDocuments(DB_ID, COLLECTION_ID, queries);
      const newDocs = res.documents || [];

      setLeaders((prev) => [...prev, ...newDocs]);

      if (newDocs.length < PAGE_SIZE) {
        setHasMore(false);
      }

      if (newDocs.length > 0) {
        const lastDoc = newDocs[newDocs.length - 1];
        setCursor(lastDoc.$id);
      }

      setInitialLoadDone(true);
    } catch (err) {
      console.error("Failed to load leaders:", err);
      setHasMore(false);
      setInitialLoadDone(true);
    } finally {
      setIsLoading(false);
    }
  }, [cursor, isLoading]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  return (
    <div className="bg-gradient-to-bl from-white to-[#F5FDFF]">
      <div className="custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-[32px] font-[700] text-[#0B3641] leading-[40px]">
            Visionary Leadership
          </h1>
          <p className="text-[#677A7E] text-[18px] font-[400] leading-[24px] mt-2 text-center">
            Meet the minds shaping our strategy, guiding innovation, and leading
            CMED Innovation toward a smarter future
          </p>

          {/* Empty state */}
          {initialLoadDone && leaders.length === 0 && (
            <p className="text-sm text-gray-500 mt-6">
              Leaders will appear here once added.
            </p>
          )}

          {/* Leaders grid */}
          {leaders.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 pb-0 sm:pb-6 mt-4 gap-6 w-full">
              {leaders.map((leader, idx) => {
                const isLastOdd =
                  leaders.length % 2 === 1 && idx === leaders.length - 1;

                return (
                  <div
                    key={leader.$id || idx}
                    className={
                      isLastOdd ? "lg:col-span-2 flex justify-center" : ""
                    }
                  >
                    <SingleLeader leader={leader} />
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom controls – like members */}
          <div className="mt-4 mb-8 min-h-[40px] flex items-center justify-center">
            {hasMore ? (
              <button
                onClick={fetchPage}
                disabled={isLoading}
                className={`px-6 py-2 rounded-full border border-[#19BCE5] text-sm font-medium transition
                  ${
                    isLoading
                      ? "bg-[#19BCE5] text-white opacity-70 cursor-not-allowed"
                      : "text-[#19BCE5] hover:bg-[#19BCE5] hover:text-white"
                  }`}
              >
                {isLoading ? "Loading leaders..." : "Load more leaders"}
              </button>
            ) : (
              leaders.length > 0 && (
                <p className="text-xs text-gray-400">
                  You’ve reached the end of the list.
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionaryLeadership;
