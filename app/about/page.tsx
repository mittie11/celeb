import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "StarBuzz is your daily destination for celebrity news, Hollywood gossip, red carpet coverage, music drama, and the entertainment stories America is talking about.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">About StarBuzz</h1>
      <div className="w-12 h-1 bg-pink-600 rounded-full mb-8" />

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <p>
          Welcome to <strong>StarBuzz</strong> — your daily source for celebrity news, Hollywood
          drama, red carpet moments, music industry stories, and the entertainment content that has
          America talking. We cover the stories that matter to fans: the real ones, the shocking
          ones, and the ones that everyone is discussing but nobody is fully explaining.
        </p>

        <p>
          From A-list breakups and Hollywood feuds to the reality TV moments that broke the internet
          and the music collaborations nobody saw coming, StarBuzz brings you the entertainment
          coverage you actually want — written in plain English, without the industry spin.
        </p>

        <h2>What We Cover</h2>

        <p>
          StarBuzz publishes original editorial content across seven categories:{" "}
          <strong>Celebrity News</strong>, <strong>Hollywood Scandals</strong>,{" "}
          <strong>Reality TV</strong>, <strong>Music &amp; Artists</strong>,{" "}
          <strong>Red Carpet</strong>, <strong>Viral &amp; Trending</strong>, and{" "}
          <strong>Relationships</strong>. We cover the full spectrum of entertainment culture — from
          the biggest award show moments to the social media stories that took over your feed.
        </p>

        <h2>Our Editorial Standards</h2>

        <p>
          <strong>Sourced reporting:</strong> We base our coverage on published reports,
          documented public statements, and credible media accounts. We distinguish clearly
          between confirmed facts and reported allegations.
        </p>

        <p>
          <strong>Honest language:</strong> We use words like &ldquo;reportedly,&rdquo;
          &ldquo;allegedly,&rdquo; and &ldquo;according to sources&rdquo; when claims are
          unverified. We do not present unconfirmed rumors as established fact.
        </p>

        <p>
          <strong>Entertainment disclosure:</strong> Some of our content covers speculation,
          unverified claims, and entertainment commentary. We label these articles for entertainment
          purposes and encourage readers to form their own opinions.
        </p>

        <h2>Advertising Disclosure</h2>

        <p>
          StarBuzz is ad-supported. We display advertisements via Google AdSense and other
          advertising partners. Advertising revenue supports the operation of this site.
          Advertisers have no editorial influence over our content — we write what we believe
          our readers want to know.
        </p>

        <h2>Contact Us</h2>

        <p>
          Have a tip, a correction, or feedback? We read everything we receive.
          StarBuzz is operated by an independent team passionate about entertainment
          coverage. We are not affiliated with any studio, record label, or talent agency.
        </p>

        <p>Thanks for reading. Stay buzzed.</p>
      </div>
    </div>
  );
}
