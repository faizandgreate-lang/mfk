import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import HomeHighlights from "@/components/home-highlights";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

import { useRouter } from "next/router";
import { Locale } from "@/utility/translations";

export default function Home() {
  const router = useRouter();
  const locale = (router.locale || "en") as Locale;

  return (
    <>
      <NextSeo
        title="Mohd Faizan Khan | Operations Coordinator"
        description="Explore the professional portfolio of Mohd Faizan Khan, a skilled Operations Coordinator with 6 years of hands-on experience. Discover expertise in workforce management, operational efficiency, and a passion for creating seamless organizational operations."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Mohd Faizan Khan - Operations Coordinator",
          description:
            "Dive into the world of operations management with Mohd Faizan Khan. Discover an Operations Coordinator with 6 years of expertise, showcasing leadership and a commitment to operational efficiency.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Mohd Faizan Khan - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "React Developer, Software Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA[locale]} />
      <HomeHighlights />
    </>
  );
}
