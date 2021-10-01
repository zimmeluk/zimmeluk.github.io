import Link from 'next/link'
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return(
    <footer className="flex flex-row">
      <Link href={'https://twitter.com/zimmeluk'}>
        <FaTwitter title="Twitter" size={32} className="cursor-pointer" />
      </Link>
      <Link href={'https://www.facebook.com/luke.zimmerman.14661'}>
        <FaFacebook title="Facebook" size={32} className="cursor-pointer" />
      </Link>
      <Link href={'https://www.linkedin.com/in/lukedzimmerman/'}>
        <FaLinkedin title="Linkedin" size={32} className="cursor-pointer" />
      </Link>
      <Link href={'https://github.com/zimmeluk'}>
        <FaGithub title="GitHub" size={32} className="cursor-pointer" />
      </Link>
    </footer>
  )
}