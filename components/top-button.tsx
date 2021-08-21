import { ArrowUpIcon } from "@chakra-ui/icons";
import { IconButton, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TopButton() {
  const scrollPosition = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    scrollPosition.current = position;
    setIsVisible(scrollPosition.current > 100);
  };
  const MotionIconButton = motion(IconButton);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <Link to="/#top">
          <MotionIconButton
            animate={{
              scale: [1, 1.2, 1.5, 1.2, 1],
            }}
            transition={{ ease: "linear", duration: 1, repeat: 3 }}
            bg="black"
            color="white"
            position="fixed"
            bottom="6em"
            right={["16px", "32px", "64px"]}
            zIndex="2"
            aria-label="Back To The Top"
            icon={<ArrowUpIcon />}
            onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
            isRound={true}
          />
        </Link>
      )}
    </>
  );
}
