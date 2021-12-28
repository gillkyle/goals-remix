import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export let loader: LoaderFunction = () => {
  console.log(process.env.AIRTABLE_API_KEY);
  return [{ name: "Pants" }, { name: "Jacket" }];
};

export default function Index() {
  let data = useLoaderData();
  console.log(data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <section className="flex space-x-4 items-center width-100 sm:px-10 px-4 pt-10 pb-16 bg-gradient-to-br from-sky-400 to-indigo-500">
        <div>Image</div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Goals</h1>
          <div className="flex space-x-2 items-center text-white text-xs mb-1 italic ">
            "...by small and simple things are great things brought to pass"
          </div>
          <div className="flex space-x-2 items-center">
            Fingerprint
            <p className="text-md text-white">Kyle Gill</p>
          </div>
          <div className="flex space-x-2 items-center">
            Calendar
            <p className="text-md text-white">2021</p>
          </div>
        </div>
      </section>
      <h1 className="text-gray-600">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
