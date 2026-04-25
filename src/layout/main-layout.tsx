import { ReactNode, useState } from "react";
import { Montserrat } from "next/font/google";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import FaizanAIChat from "@/components/faizan-ai-chat";
import { classNames } from "../../utility/classNames";
import { useRouter } from "next/router";
import { translations, Locale } from "../../utility/translations";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const router = useRouter();
  const locale = (router.locale || "en") as Locale;
  const t = translations[locale].navbar;

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialChatMessage, setInitialChatMessage] = useState("");

  const handleAISearch = (query: string) => {
    setInitialChatMessage(query);
    setIsChatOpen(true);
  };

  const localizedRoutes = [
    { title: t.home, href: "/" },
    { title: t.about, href: "/about" },
    { title: t.events, href: "/projects" },
  ];

  return (
    <>
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navbar routes={localizedRoutes} onAISearch={handleAISearch} />
        <main>{props.children}</main>
      </div>
      <Footer />
      <FaizanAIChat
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
        initialMessage={initialChatMessage}
      />
    </>
  );
}
