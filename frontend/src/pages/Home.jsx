import Auth from "../components/Auth";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Sam Pvt Chat-Room</h1>
        <div>
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="me-2">
              <a
                href="#"
                className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
                aria-current="page"
              >
                Tab 1
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
                aria-current="page"
              >
                Tab 1
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Auth/>
    </div>
  );
}
