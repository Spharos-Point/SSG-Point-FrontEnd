import Link from "next/link";

export default function EventLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <nav className="w-full pt-14">
      <ul className="flex">
        <li className="w-1/3 p-5 bg-black text-white">
          <Link href="/event/ingevents">진행중 이벤트</Link>
        </li>
        <li className="w-1/3 p-5 bg-black text-white">
          <Link href="/event/endevents">완료 이벤트</Link>
        </li>
        <li className="w-1/3 p-5 bg-black text-white">
          <Link href="/event/winevents">당첨 이벤트</Link>
        </li>
      </ul>
    </nav>
    {children}
    </>
  )
}