import React from "react";
import ProgressBar from "../ProgressBar";

const PokemanStats = ({ stats, className }) => {
  return (
    <>
      <div className="flex flex-col justify-start">
        {stats.map((stat, idx) => {
          let STAT_VALUE = stat.stat;
          let STAT_VALUE_CALC = parseInt((STAT_VALUE / 150) * 100);
          return (
            <div
              className="mb-3 flex flex-row items-center last:mb-0"
              key={idx}
            >
              <h3 className="w-6/12 shrink-0 text-zinc-600">{stat.name}</h3>
              <div className="w-10 shrink-0 font-semibold">{STAT_VALUE}</div>
              <div className="w-full">
                <ProgressBar
                  value={STAT_VALUE_CALC}
                  className={`${className}-gradient`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PokemanStats;
