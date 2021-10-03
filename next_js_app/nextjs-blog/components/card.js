import Link from 'next/link';

export default function Header(props) {
  return(
    <Link href={'/{props.link}'}>
      <a
        className="m-4 p-6 text-left no-underline border border-solid border-gray-100 rounded-lg"
      >
        <h3 className="mb-4 text-2xl text-black font-normal inline">{props.title} &rarr;</h3>
        <p className="m-0 text-lg leading-6">{props.description}</p>
      </a>
    </Link>
  )
}