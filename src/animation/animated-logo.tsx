import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-full w-full"
      >
        <Image
          src="/images/logo.png"
          alt="Mohd Faizan Khan Logo"
          fill
          className="object-contain scale-[1.8] transition-transform duration-300"
          unoptimized
        />
      </motion.div>
    </AnimatePresence>
  );
}
