import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import { FaLaptopCode, FaCogs, FaUsers, FaChartLine, FaRobot, FaAward, FaSearch } from "react-icons/fa";
import { SiGoogleanalytics, SiSap } from "react-icons/si";
import { MdOutlineLeaderboard } from "react-icons/md";

import { type Locale } from "@/utility/translations";

export const SKILLS_DATA: Record<Locale, SkillsShowcaseProps["skills"]> = {
  en: [
    {
      sectionName: "Top Skills & Expertise",
      skills: [
        {
          name: "Organizational Leadership",
          icon: MdOutlineLeaderboard,
        },
        {
          name: "AI for Business",
          icon: FaRobot,
        },
        {
          name: "Artificial Intelligence (AI)",
          icon: FaCogs,
        },
        {
          name: "Workforce Management",
          icon: FaUsers,
        },
        {
          name: "Operations Strategy",
          icon: FaChartLine,
        },
      ],
    },
    {
      sectionName: "Certifications",
      skills: [
        {
          name: "Google Ads for Beginners",
          icon: FaSearch,
        },
        {
          name: "Google Analytics",
          icon: SiGoogleanalytics,
        },
        {
          name: "SAP ERP Essential Training",
          icon: SiSap,
        },
        {
          name: "Operations Management",
          icon: FaCogs,
        },
        {
          name: "Supporting Belonging",
          icon: FaAward,
        },
      ],
    },
  ],
  ar: [
    {
      sectionName: "أبرز المهارات والخبرات",
      skills: [
        {
          name: "القيادة التنظيمية",
          icon: MdOutlineLeaderboard,
        },
        {
          name: "الذكاء الاصطناعي للأعمال",
          icon: FaRobot,
        },
        {
          name: "الذكاء الاصطناعي (AI)",
          icon: FaCogs,
        },
        {
          name: "إدارة القوى العاملة",
          icon: FaUsers,
        },
        {
          name: "استراتيجية العمليات",
          icon: FaChartLine,
        },
      ],
    },
    {
      sectionName: "الشهادات",
      skills: [
        {
          name: "إعلانات جوجل للمبتدئين",
          icon: FaSearch,
        },
        {
          name: "تحليلات جوجل",
          icon: SiGoogleanalytics,
        },
        {
          name: "التدريب الأساسي لنظام SAP ERP",
          icon: SiSap,
        },
        {
          name: "إدارة العمليات",
          icon: FaCogs,
        },
        {
          name: "دعم الانتماء في بيئة العمل",
          icon: FaAward,
        },
      ],
    },
  ]
};
