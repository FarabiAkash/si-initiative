import Image from "next/image";
import linkedInIcon from "../../public/assets/teams/linkedin.png";

import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
const COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_LEADERS_COLLECTION_ID || "";

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

// MAIN SECTION – now async server component using Appwrite
const VisionaryLeadership = async () => {
  let leaders = [];

  if (!DB_ID || !COLLECTION_ID) {
    console.error("Leaders collection not configured in env.");
  } else {
    try {
      const res = await databases.listDocuments(DB_ID, COLLECTION_ID, [
        // sort however you prefer: by name or latest first
          Query.orderAsc("$createdAt"), 
      ]);
      leaders = res.documents || [];
    } catch (err) {
      console.error("Failed to load leaders:", err);
    }
  }

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

          {leaders.length === 0 ? (
            <p className="text-sm text-gray-500 mt-6">
              Leaders will appear here once added.
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 pb-0 sm:pb-6 mt-4 gap-6">
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
        </div>
      </div>
    </div>
  );
};

export default VisionaryLeadership;
