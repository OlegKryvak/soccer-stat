import React, { useState } from "react";
import { Competition } from "../types";
import Leagues from "./Leagues";

type Props = {
  data: Competition[];
  itemsPerPage: number;
  totalItemsCount: number;
};

const Pagination = ({ data, itemsPerPage, totalItemsCount }: Props) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const totalPageCount = Math.floor(totalItemsCount / itemsPerPage);

  const navButtonsArrayGenerator = (num: number): number[] => {
    const arr: number[] = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  };

  const buttons = navButtonsArrayGenerator(totalPageCount);

  const prevPageClicker = () => {
    setSelectedPage((prev) => prev - 1);
  };
  const nextPageClicker = () => {
    setSelectedPage((prev) => prev + 1);
  };

  return (
    <div>
      <Leagues data={data} selectedPage={selectedPage} itemsPerPage={itemsPerPage} />

      <nav>
        <ul className="flex justify-center">
          <button disabled={selectedPage === 1} onClick={prevPageClicker}>
            {"<"}
          </button>
          {buttons.map((button) => {
            return (
              <li key={button} className="inline">
                <button
                  onClick={() => setSelectedPage(button)}
                  className={
                    button === selectedPage ? "text-white" : "text-gray"
                  }
                >
                  {button}
                </button>
              </li>
            );
          })}
          <button
            disabled={selectedPage === totalPageCount}
            onClick={nextPageClicker}
          >
            {">"}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
