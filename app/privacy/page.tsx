import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "StarBuzz Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
      <div className="w-12 h-1 bg-pink-600 rounded-full mb-4" />
      <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <p>
          StarBuzz (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to
          protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information Collected Automatically</h3>
        <p>When you visit StarBuzz, certain information is automatically collected by our analytics and advertising partners, including:</p>
        <ul>
          <li>IP address (anonymized where required by law)</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on each page</li>
          <li>Referring website</li>
          <li>Date and time of visit</li>
        </ul>

        <h3>Cookies and Tracking Technologies</h3>
        <p>We use cookies and similar tracking technologies to enhance your experience, including:</p>
        <ul>
          <li>
            <strong>Google Analytics 4:</strong> We use Google Analytics to understand how visitors
            interact with our site. You can opt out via the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics opt-out add-on
            </a>.
          </li>
          <li>
            <strong>Google AdSense:</strong> We display advertisements provided by Google AdSense.
            You can opt out of personalized advertising at{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google&apos;s Ads Settings
            </a>.
          </li>
          <li>
            <strong>Facebook Pixel:</strong> We may use the Facebook Pixel to measure advertising
            effectiveness. You can control this through your Facebook ad settings.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>Understand how visitors use our site and improve our content</li>
          <li>Display relevant advertisements through Google AdSense</li>
          <li>Measure the effectiveness of our marketing</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Sharing of Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share
          anonymized, aggregated data with advertising partners as described in their respective
          privacy policies.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our site may contain links to third-party websites. We are not responsible for the
          privacy practices of those websites.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          StarBuzz is not directed at children under 13. We do not knowingly collect personal
          information from children.
        </p>

        <h2>Your Rights (US Residents)</h2>
        <p>
          Depending on your state, you may have rights to access, correct, or delete personal
          information we hold about you. Contact us via our About page to make a request.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this
          page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us via the information
          provided on our About page.
        </p>
      </div>
    </div>
  );
}
