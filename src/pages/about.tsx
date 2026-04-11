import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

import { useRouter } from "next/router";
import { Locale, translations } from "@/utility/translations";

export default function About() {
  const router = useRouter();
  const locale = (router.locale || "en") as Locale;
  const tExp = translations[locale].experience;
  const tEdu = translations[locale].education;

  return (
    <>
      <NextSeo
        title="About Mohd Faizan Khan | Operations Coordinator"
        description="Learn more about Mohd Faizan Khan, a dedicated Operations Coordinator with 6 years of experience. Discover the journey, skills, and passion that drive me to optimize organizational efficiency."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Mohd Faizan Khan - Operations Coordinator",
          description:
            "Dive into the story of Mohd Faizan Khan, an Operations Coordinator. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional operational workflows.",
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
              "Software Developer portfolio, Software Developer, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title={tExp.title} details={EXPERIENCE[locale]} />
      <ExperienceShowcaseList title={tEdu.title} details={EDUCATION[locale]} />
    </>
  );
}
