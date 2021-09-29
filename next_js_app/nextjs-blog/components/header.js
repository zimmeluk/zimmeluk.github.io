import Link from 'next/link'

export default function Header() {
  return(
    // Fixed navbar
    <nav className="flex w-screen bg-">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
          </button>
          <a className="text-xl" href="/">Luke Zimmerman</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="flex flex-row space-x-4">
            <li>
              <Link href={'/about'}>
                  <a className="text-gray-500 hover:text-gray-800">About</a>
              </Link>
            </li>
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
      </div>
    </nav>
  )
}