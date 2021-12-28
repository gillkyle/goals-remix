import * as React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import { getYear } from "date-fns";

const Goal = ({
  name,
  subtitle,
  dates,
}: {
  name: string;
  subtitle: string;
  dates: object;
}) => {
  React.useEffect(() => {
    ReactTooltip.rebuild();
  }, []);

  return (
    <React.Fragment>
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="mb-4 text-blueGray-600">{subtitle}</p>
      <div className="max-w-3xl bg-white rounded-lg shadow-sm sm:pt-6 pt-3 sm:pr-8 pr-4 sm:pl-4 pl-2">
        <p className="ml-2 mb-2 font-semibold text-sm text-blueGray-500">
          Days Tracked
        </p>
        <div className="overflow-scroll">
          <CalendarHeatmap
            showWeekdayLabels
            horizontal={true}
            weekdayLabels={["S", "M", "T", "W", "Th", "F", "S"]}
            startDate={new Date(`${getYear(new Date()) - 1}-12-31`)}
            endDate={new Date(`${getYear(new Date())}-12-31`)}
            values={dates}
            className="width-64"
            gutterSize={1.5}
            showOutOfRangeDays={true}
            classForValue={(value: { count: number }) => {
              if (!value) {
                return "color-empty";
              }
              return `color-scale-${value.count}`;
            }}
            tooltipDataAttrs={(value: { date: string }) => {
              if (!value || !value.date) {
                return null;
              }
              return {
                "data-tip": `${value.date}`,
              };
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Goal;
