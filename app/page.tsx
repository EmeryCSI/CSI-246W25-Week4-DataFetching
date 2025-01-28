import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-700 border-l-4 border-blue-500 pl-2 min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2 className="text-2xl font-semibold mb-4">Data Fetching Tutorial App</h2>
      <p className="text-gray-700 mb-6">
        This application demonstrates various data fetching techniques in a Next.js environment.
      </p>

      <div className="p-6 rounded-r">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Explore the Techniques:</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <Link href="/posts/server-posts">
              Server Component Direct Fetching
            </Link>
          </li>
          <li className="flex items-start">
            <Link href="/posts/client-posts">
              Client-Side Fetch to an API Route
            </Link>
          </li>
          <li className="flex items-start">
            <Link href="/posts/server-actions">
              Server Actions Form Submission
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
