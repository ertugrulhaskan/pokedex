import React, { useState } from "react";

const TabContent = ({ tabs }) => {
  const [tabID, setTabID] = useState(0);

  return (
    <>
      <div className="flex flex-row items-start justify-center text-center font-semibold uppercase text-zinc-500">
        {tabs.map((tab, idx) => {
          return (
            <div
              className={`w-full cursor-pointer p-2 hover:bg-zinc-100 ${
                tabID === idx && "border-b-2 border-zinc-500"
              }`}
              key={idx}
              onClick={() => setTabID(idx)}
            >
              {tab.icon}
              <div className="hidden md:block">{tab.title}</div>
            </div>
          );
        })}
      </div>
      <div className="py-5">{tabs[tabID].content}</div>
    </>
  );
};

export default TabContent;
