import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "StarBuzz disclaimer — our editorial standards and content disclosure.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Disclaimer</h1>
      <div className="w-12 h-1 bg-pink-600 rounded-full mb-8" />

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <p>
          The content published on StarBuzz is for <strong>entertainment and informational
          purposes only</strong>. While we strive to provide accurate and up-to-date information,
          we make no representations or warranties of any kind, express or implied, about the
          completeness, accuracy, reliability, suitability, or availability of any information
          contained on this site.
        </p>

        <h2>Editorial Content</h2>
        <p>
          StarBuzz publishes celebrity news, entertainment commentary, and pop culture analysis.
          Our articles draw from publicly available sources including news reports, official
          statements, social media posts, and publicly available records. Where information is
          unverified, we use language such as &ldquo;reportedly,&rdquo; &ldquo;allegedly,&rdquo;
          &ldquo;according to sources,&rdquo; or &ldquo;sources claim&rdquo; to signal that claims
          have not been independently confirmed.
        </p>

        <h2>Opinion and Commentary</h2>
        <p>
          Some content on StarBuzz represents the editorial opinions of our writers and should
          be understood as commentary rather than objective reporting. Opinion pieces and
          entertainment analysis do not necessarily reflect the views of any individuals
          or organizations mentioned.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          Nothing on StarBuzz constitutes legal, financial, medical, or professional advice of
          any kind. Do not rely on content from this site for decisions requiring professional
          expertise. Always consult qualified professionals for advice specific to your situation.
        </p>

        <h2>Third-Party Content</h2>
        <p>
          StarBuzz may reference, link to, or embed content from third-party websites and
          sources. We are not responsible for the accuracy, completeness, or reliability of
          any third-party content.
        </p>

        <h2>Advertising</h2>
        <p>
          StarBuzz is supported by advertising revenue. Advertisements are clearly distinguished
          from editorial content. Advertisers have no influence over our editorial decisions
          or content.
        </p>

        <h2>Copyright</h2>
        <p>
          All original content on StarBuzz is the property of StarBuzz and may not be reproduced
          without permission. All images are sourced from Unsplash under their free commercial
          use license.
        </p>

        <h2>Contact</h2>
        <p>
          If you have concerns about specific content, please contact us via our About page.
          We take accuracy seriously and will review and correct errors promptly.
        </p>
      </div>
    </div>
  );
}
