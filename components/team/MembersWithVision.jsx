"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
const COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_MEMBERS_COLLECTION_ID || "";

const PAGE_SIZE = 12;

/* ------------------------
   UI components unchanged
   ------------------------ */

const SingleMember = ({ member }) => {
  return (
    <div className="w-full">
      <h1 className="text-[#010101] text-[24px] font-semibold sm:leading-[32px] text-center">
        {member.domain}
      </h1>

      <div className="flex flex-wrap justify-center items-center pb-0 sm:pb-6 mt-4 gap-4 border-t border-[#19BCE580] py-4">
        {member.member?.map((m, idx) => (
          <SingleMemberCard key={idx} card={m} />
        ))}
      </div>
    </div>
  );
};

const SingleMemberCard = ({ card }) => {
  return (
    <div className="w-full md:w-[270px] 2xl:w-[310px] border border-[#19BCE533] p-4 flex flex-col justify-center items-center gap-4 rounded-[8px]">
      <div className="w-[168px] h-[168px] rounded-full">
        <Image
          src={card.img}
          alt={card.name}
          width={168}
          height={168}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[#010101] text-[18px] font-semibold sm:leading-[24px]">
          {card.name}
        </h2>

        <h3 className="text-[#19BCE5] text-base sm:leading-[24px] font-normal">
          {card.position}
        </h3>
      </div>
    </div>
  );
};

/* -----------------------------------
   MAIN COMPONENT – with pagination
----------------------------------- */

const MembersWithVision = () => {
  const [members, setMembers] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoadDone, setInitialLoadDone] = useState(false);

  const fetchPage = useCallback(async () => {
    if (!DB_ID || !COLLECTION_ID) {
      console.error("Members collection not configured.");
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

      setMembers((prev) => [...prev, ...newDocs]);

      if (newDocs.length < PAGE_SIZE) {
        setHasMore(false);
      }

      if (newDocs.length > 0) {
        const lastDoc = newDocs[newDocs.length - 1];
        setCursor(lastDoc.$id);
      }

      setInitialLoadDone(true);
    } catch (err) {
      console.error("Failed to load members:", err);
      setHasMore(false);
      setInitialLoadDone(true);
    } finally {
      setIsLoading(false);
    }
  }, [cursor, isLoading]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  const groupedByDomain = members.reduce((acc, m) => {
    if (!m.domain) return acc;

    if (!acc[m.domain]) {
      acc[m.domain] = [];
    }

    acc[m.domain].push({
      name: m.name,
      position: m.position,
      img: m.avatar,
    });

    return acc;
  }, {});

  const domainGroups = Object.keys(groupedByDomain).map((domain) => ({
    domain,
    member: groupedByDomain[domain],
  }));

  return (
    <div className="custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-[32px] font-[700] text-[#0B3641] leading-[40px]">
          Members with Shared Vision
        </h1>

        <p className="text-[#677A7E] text-[18px] font-[400] leading-[24px] mt-2 text-center">
          AI engineers to UX designers, data scientists to project managers;
          <br />
          our diverse team works as one to build solutions that matter
        </p>

        {/* Empty state */}
        {initialLoadDone && domainGroups.length === 0 && (
          <p className="text-sm text-gray-500 mt-6">
            Members will appear here once added.
          </p>
        )}

        {/* Members grid */}
        {domainGroups.length > 0 && (
          <div className="grid grid-cols-1 pb-0 sm:pb-6 mt-4 gap-6 w-full">
            {domainGroups.map((member, idx) => (
              <SingleMember key={idx} member={member} />
            ))}
          </div>
        )}

        {/* Bottom controls – fixed height to avoid flicker */}
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
              {isLoading ? "Loading members..." : "Load more members"}
            </button>
          ) : (
            domainGroups.length > 0 && (
              <p className="text-xs text-gray-400">
                You’ve reached the end of the list.
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersWithVision;
