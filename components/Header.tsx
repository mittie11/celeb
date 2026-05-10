import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-pink-600 tracking-tight">
              Star<span className="text-gray-900">Buzz</span>
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 font-medium border-l border-gray-200 pl-2">
              Hollywood&apos;s Hottest Stories
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          <div className="lg:hidden">
            <details className="relative group">
              <summary className="list-none cursor-pointer p-2 rounded-md hover:bg-gray-100">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
