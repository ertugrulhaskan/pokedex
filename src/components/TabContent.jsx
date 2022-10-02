import React, { useState } from "react";

const TabContent = ({ tabs }) => {
  const [tabID, setTabID] = useState(0);

  return (
    <>
      <div className="flex flex-row items-start justify-center text-center font-semibold uppercase text-zinc-500">
        {tabs.map((tab, idx) => {
          return (
            <div
              className={`p- w-full cursor-pointer ${
                tabID === idx && "font-extrabold"
              }`}
              key={idx}
              onClick={() => setTabID(idx)}
            >
              {tab.icon}
              <div className="mb-3 hidden md:block">{tab.title}</div>
            </div>
          );
        })}
      </div>
      <div className="max-h-[33vh] overflow-auto pr-5">
        <div className="py-5">{tabs[tabID].content}</div>
      </div>
    </>
  );
};

export default TabContent;
