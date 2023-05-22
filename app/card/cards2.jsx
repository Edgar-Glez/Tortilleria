"use client";
import React, { useEffect, useState } from "react";
import { CCarousel, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Card } from "@nextui-org/react";
import ElPaisa from "../assets/El_paisa.jpg";
import LaMexico from "../assets/La_mexico.jpg";
import LosReyes from "../assets/Los_reyes.jpg";
import Image from "next/image";

const Cards = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardClass = isSmallScreen ? "pl-[10%]" : "pl-[28%]";

  const cardWidth = isSmallScreen ? "100%" : "70%";

  const cardHeight = isSmallScreen ? "300px" : "350px";

  return (
    <CCarousel transition="crossfade" indicators>
      <CCarouselItem>
        <div
          className={`px-[10%] pb-25 pt-21 flex md:flex-row gap-4 ${cardClass}`}
        >
          <Card
            style={{
              backgroundImage: `url(${ElPaisa.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: cardWidth,
              height: cardHeight,
              borderRadius: "32px",
              maxHeight: "1000px",
              maxWidth: "1000px",
            }}
          >
            {/* <Image
            src={ElPaisa}
            alt="Tacos El Paisa"
            loading="eager"
            placeholder="blur"
            /> */}
          </Card>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div
          className={`px-[10%] pb-25 pt-21 flex md:flex-row gap-4 ${cardClass}`}
        >
          <Card
            style={{
              backgroundImage: `url(${LaMexico.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: cardWidth,
              height: cardHeight,
              borderRadius: "32px",
              maxHeight: "1000px",
              maxWidth: "1000px",
            }}
          >
          </Card>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div
          className={`px-[10%] pb-25 pt-21 flex md:flex-row gap-4 ${cardClass}`}
        >
          <Card
            style={{
              backgroundImage: `url(${LosReyes.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: cardWidth,
              height: cardHeight,
              borderRadius: "32px",
              maxHeight: "1000px",
              maxWidth: "1000px",
            }}
          >
          </Card>
        </div>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Cards;
