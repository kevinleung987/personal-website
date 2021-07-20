import { ArrowUpIcon } from "@chakra-ui/icons";
import { IconButton, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TopButton() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // TODO: Pulse effect.
  return (
    <>
      {scrollPosition > 100 && (
        <Link to="/#top">
          <IconButton
            bg={"black"}
            position="fixed"
            bottom="6em"
            right={["16px", "32px", "64px"]}
            zIndex={"2"}
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
