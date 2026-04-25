import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import HomeHighlights from "@/components/home-highlights";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

import { useRouter } from "next/router";
import { Locale } from "../utility/translations";

export default function Home() {
  const router = useRouter();
  const locale = (router.locale || "en") as Locale;

  return (
    <>
      <NextSeo
        title="Mohammad Faizan Khan | Project manager"
        description="Explore the professional portfolio of Mohammad Faizan Khan, a skilled Project manager with 6 years of hands-on experience. Discover expertise in workforce management, operational efficiency, and a passion for creating seamless organizational operations."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Mohammad Faizan Khan - Project manager",
          description:
            "Dive into the world of operations management with Mohammad Faizan Khan. Discover a Project manager with 6 years of expertise, showcasing leadership and a commitment to operational efficiency.",
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
              "Operations Coordinator, Project Manager, Operations Management, Workforce Management, Operations, Management, Leadership",
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
