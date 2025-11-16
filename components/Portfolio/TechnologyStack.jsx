"use client";

import { useState } from "react";

export default function TechnologyStack({ groups = [] }) {
  // Convert groups from Appwrite → Expected Tab Structure
  const techData = groups.length
    ? groups.reduce((acc, group) => {
        acc[group.title] = group.items || [];
        return acc;
      }, {})
    : {
        "Front-end": ["Flutter", "Next.js"],
        "Back-end": ["Node.js", "Firebase"],
        Database: ["MongoDB", "Firebase DB"],
        Cloud: ["AWS", "Firebase Hosting"],
        Integration: ["Zapier", "REST APIs"],
        Tools: ["Git", "VS Code"],
      };

  const tabs = Object.keys(techData);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="custom-container py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-[48px] font-bold text-gray-900 mb-3">
          Technology Stack
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Tools and technologies used to build scalable, secure, and high-performing
          digital solutions.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-8 border-b border-gray-200 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-base font-medium relative ${
                activeTab === tab
                  ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-sky-400"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {techData[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#F9FDFF] border border-[#DDF1F7] rounded-2xl p-6 shadow-sm hover:shadow-md transition w-[184px] h-[144px]"
            >
              {/* Circle with First Letter */}
              <div className="!h-16 !w-16 rounded-full bg-[#19BCE5]/10 border border-[#19BCE5] flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-[#19BCE5]">
                  {item.charAt(0).toUpperCase()}
                </span>
              </div>

              <p className="text-sm font-medium text-gray-800 text-center px-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
