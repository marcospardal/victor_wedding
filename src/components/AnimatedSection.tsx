import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { fadeIn, slideFromLeft } from "../utils/motion/animations";

type SectionAnimations = "slideFromLeft" | "fadeIn";

interface AnimatedSectionProps extends PropsWithChildren {
  animationKey?: SectionAnimations;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ animationKey = "fadeIn", children }) => {
  const animations = {
    slideFromLeft: slideFromLeft,
    fadeIn: fadeIn
  };

  return (
    <motion.div initial="hidden" whileInView="visible" variants={animations[animationKey]} viewport={{ amount: 0.2 }}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
