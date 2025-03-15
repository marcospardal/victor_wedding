import { motion } from "framer-motion";
import { Typography, TypographyProps } from "@mui/material";
import { letter, sentence } from "../utils/motion/animations";

interface AnimatedTextProps extends TypographyProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, ...props }) => {
  return (
    <motion.div
      variants={sentence}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {text.split(/( )/).map((char, index) => (
        <motion.span key={index} variants={letter}>
          <Typography {...props}>{char === " " ? "\u00A0" : char}</Typography>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
