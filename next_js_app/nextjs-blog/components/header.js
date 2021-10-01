import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';

export default function Header() {
  return(
    <nav className="flex items-center w-screen bg-yellow-400">
      <div className="flex-1 md:hidden">
        <button id="navExpand">
        </button>
      </div>

      <div id="navbar" className="hidden flex-1 md:flex justify-center navbar-collapse collapse">
        <ul className="flex flex-row justify-evenly w-full">
          <li>
            <Link href={'/projects'}>
                <a className="text-gray-500 hover:text-gray-800">Projects</a>
            </Link>
          </li>
          <li>
            <Link href={'/blog'}>
                <a className="text-gray-500 hover:text-gray-800">Blog</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 md:flex justify-center">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
        </button>
        <a className="text-xl" href="/">Luke Zimmerman</a>
      </div>

      <div className="flex flex-1 flex-row-reverse">
        <span>
          <IoIosSearch size={16}/>
        </span>
        <input className="mr-5 rounded-md" type="text" placeholder="Search..." />
      </div>
    </nav>
  )
}