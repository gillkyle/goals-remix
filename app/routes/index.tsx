import { useLoaderData } from "remix";
import { Links, Meta, Scripts, LoaderFunction, LinksFunction } from "remix";
import { getDayOfYear, getYear, sub, format, isWithinInterval } from "date-fns";
import { HiOutlineCalendar, HiOutlineFingerPrint } from "react-icons/hi";
import Airtable from "airtable";

export let loader: LoaderFunction = async () => {
  console.log(process.env.AIRTABLE_API_KEY);
  const dayOfYear = getDayOfYear(new Date());
  let rows = [];

  let airtableBase;
  // let airtableBase = new Airtable({
  //   apiKey: process.env.AIRTABLE_API_KEY,
  // }).base("appIhwXXgds9RGvVd");

  airtableBase("Journal")
    .select({
      maxRecords: 100,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          rows.push(record.get("Day"));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        console.log("done");
        console.log(rows.length);
        console.log(err);
        if (err) {
          console.error(err);
        }
      }
    );

  console.log(rows.length);
  return {
    product: [{ name: "Pants" }, { name: "Jacket" }],
    dayOfYear,
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "prefetch",
      as: "image",
      href: "/images/portrait.jpg",
    },
  ];
};

export default function Index() {
  let data = useLoaderData();
  console.log(data);

  return (
    <div
      style={{ fontFamily: "Inter, system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <section className="flex space-x-4 items-center width-100 sm:px-10 px-4 pt-10 pb-16 bg-gradient-to-br from-sky-400 to-indigo-500">
        <div>
          <img
            src="/images/portrait.jpg"
            className="border-blueGray-200 border-4 rounded-full shadow-lg w-[120px]"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Goals</h1>
          <div className="flex space-x-2 items-center text-white text-xs mb-1 italic ">
            "...by small and simple things are great things brought to pass"
          </div>
          <div className="flex space-x-2 items-center">
            <HiOutlineFingerPrint className="text-white" />
            <p className="text-md text-white">Kyle Gill</p>
          </div>
          <div className="flex space-x-2 items-center">
            <HiOutlineCalendar className="text-white" />
            <p className="text-md text-white">2021</p>
          </div>
        </div>
      </section>
    </div>
  );
}
