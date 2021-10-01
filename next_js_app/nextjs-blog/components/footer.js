import Link from 'next/link'
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return(
    <footer className="flex flex-row">
      <a href="https://twitter.com/zimmeluk"><img border="0" alt="Twitter" src="/assets/TwitterGray.png" width="32" height="32" /></a>
      <a href="https://www.facebook.com/luke.zimmerman.14661"><img border="0" alt="Facebook" src="/assets/FacebookGray.png" width="32" height="32" /></a>
      <a href="https://www.linkedin.com/in/lukedzimmerman/"><img border="0" alt="LinkedIn" src="/assets/LinkedinGray.png" width="32" height="32" /></a>
      <a href="https://github.com/zimmeluk"><img border="0" alt="GitHub" src="/assets/GithubGray.png" width="32" height="32" /></a>

      <Link href={'https://twitter.com/zimmeluk'}>
        <FaTwitter size={32} />
      </Link>
      <Link href={'https://www.facebook.com/luke.zimmerman.14661'}>
        <FaFacebook size={32} />
      </Link>
      <Link href={'https://www.linkedin.com/in/lukedzimmerman/'}>
        <FaLinkedin size={32} />
      </Link>
      <Link href={'https://github.com/zimmeluk'}>
        <FaGithub size={32} />
      </Link>
    </footer>
  )
}