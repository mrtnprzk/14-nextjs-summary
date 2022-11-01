import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="flex justify-between bg-purple-800 p-5 shadow-xl text-white mb-5">
      <div className="text-2xl font-bold">React Meetups</div>
      <nav className="flex space-x-5">
        <ul>
          <li className="hover:text-purple-300">
            <Link href="/">All Meetups</Link>
          </li>
        </ul>
        <ul>
          <li className="hover:text-purple-300">
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
