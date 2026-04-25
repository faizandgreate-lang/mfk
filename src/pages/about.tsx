import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

import { useRouter } from "next/router";
import { Locale, translations } from "../utility/translations";

export default function About() {
  const router = useRouter();
  const locale = (router.locale || "en") as Locale;
  const tExp = translations[locale].experience;
  const tEdu = translations[locale].education;

  return (
    <>
      <NextSeo
        title="About Mohammad Faizan Khan | Project manager"
        description="Learn more about Mohammad Faizan Khan, a dedicated Project manager with 6 years of experience. Discover the journey, skills, and passion that drive me to optimize organizational efficiency."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Mohammad Faizan Khan - Project manager",
          description:
            "Dive into the story of Mohammad Faizan Khan, a Project manager. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional operational workflows.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Mohammad Faizan Khan - Portfolio Image",
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
              "Project Manager portfolio, Operation Coordinator, Operations, Management, Professional Journey, Skills",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title={tExp.title} details={EXPERIENCE[locale]} />
      <ExperienceShowcaseList title={tEdu.title} details={EDUCATION[locale]} />
    </>
  );
}
