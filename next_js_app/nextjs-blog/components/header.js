import Link from 'next/link'

export default function Header() {
    return(
        // Fixed navbar
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                    </button>
                    <a class="navbar-brand" href="/">Luke Zimmerman</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                     <ul class="nav navbar-nav navbar-right">
                        <li>
                            <Link href={'/about'}>
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/projects'}>
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/blog'}>
                                <a>Blog</a>
                            </Link>
                        </li>
                     </ul>
                </div>
            </div>
        </nav>
    )
}