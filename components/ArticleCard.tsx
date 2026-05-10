import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/posts";
import { getCategoryName } from "@/lib/categories";

type Props = {
  post: Post;
  variant?: "default" | "featured" | "compact";
};

export default function ArticleCard({ post, variant = "default" }: Props) {
  if (variant === "featured") {
    return (
      <Link href={`/${post.slug}`} className="group block relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
        <div className="relative h-[420px] sm:h-[500px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <span className="inline-block bg-pink-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              {getCategoryName(post.category)}
            </span>
            <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-2 group-hover:text-pink-200 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center gap-3 mt-4 text-gray-400 text-xs">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/${post.slug}`} className="group flex gap-4 items-start">
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="80px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold text-pink-600 uppercase tracking-wide">
            {getCategoryName(post.category)}
          </span>
          <h3 className="text-sm font-bold text-gray-900 leading-snug mt-0.5 group-hover:text-pink-700 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/${post.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-shadow duration-200">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-pink-600 text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {getCategoryName(post.category)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-2 group-hover:text-pink-700 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
