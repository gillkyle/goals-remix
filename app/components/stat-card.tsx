import * as React from "react";
import ClientOnly from "./client-only";

const StatCard = ({
  title,
  invert = false,
  addendum,
  number,
  isPercentage,
  className,
}: {
  title: string;
  invert: boolean;
  addendum: React.ReactNode;
  number: number;
  isPercentage: boolean;
  className: string;
}) => {
  return (
    <div className={`${className} shadow-sm rounded-lg bg-white sm:p-6 p-3`}>
      <h3 className="font-semibold text-sm text-blueGray-500">{title}</h3>
      <ClientOnly>
        {invert && (
          <p className="font-bold text-3xl text-red-300">
            {number > 100 && isPercentage ? `100` : number}
            <span className="text-sm">{title.includes(`%`) && `%`}</span>
          </p>
        )}
        {!invert && (
          <p className="font-bold text-3xl text-lime-600">
            {number > 100 && isPercentage ? `100` : number}
            {addendum && <span className="text-sm">{addendum}</span>}
          </p>
        )}
      </ClientOnly>
    </div>
  );
};

export default StatCard;
