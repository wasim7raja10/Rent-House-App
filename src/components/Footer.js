import Link from "next/link";
import { BiBuildingHouse} from "react-icons/bi";

function Foot() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-white p-4   md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          href="/"
          className="mb-4 flex items-center sm:mb-0"
        >
          {/* <img
            src="/logo.png"
            className="mr-3 h-8"
            alt=" Logo"
          /> */}
          < BiBuildingHouse className="h-8 w-8 mr-3  text-purple-800" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold  text-purple-800 ">
            RentHouse
          </span>
        </Link>
        <ul className="text-md mb-6 flex flex-wrap items-center  text-gray-900 sm:mb-0">
          <li>
            <Link
              href="/"
              className="mr-4 hover:text-purple-700 md:mr-6 "
              rel="noreferrer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="mr-4 hover:text-purple-700 md:mr-6"
              rel="noreferrer"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="mr-4 hover:text-purple-700 md:mr-6 "
              rel="noreferrer"
            >
              Licensing
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-purple-700 " rel="noreferrer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-700  sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-900 dark:text-gray-400 sm:text-center">
        © {year}{" "}
        <Link href="/" className="hover:text-purple-700" rel="noreferrer">
          RentHouse™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Foot;