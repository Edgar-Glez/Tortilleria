"use client";
import React, { useEffect, useState } from "react";
import { CCarousel, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Card } from "@nextui-org/react";
import CornImage from "../assets/granos.jpeg";
import Local from "../assets/Local.jpg";
import Celorio from "../assets/celorio.jpeg";

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

  const handleCardTextPosition = (isFirstCard) => {
    if (isSmallScreen) {
      return {
        fontSize: isFirstCard ? "20px" : "30px",
        textAlign: "center",
        position: "relative",
        top: "40px",
      };
    }

    return {};
  };

  const cardClass = isSmallScreen ? "pl-[10%]" : "pl-[20%]";

  return (
    <CCarousel controls transition="crossfade" indicators>
      <CCarouselItem>
        <div
          className={`px-[10%] pb-25 pt-21 flex md:flex-row gap-4 ${cardClass}`}
        >
          <Card 
            style={{
              
              backgroundImage: `url(${Local.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "300px",
              borderRadius: "32px",
              maxHeight: "1000px",
              maxWidth: "1000px",
            }}
          >
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex-1 md:ml-[62px] max-w-[650px]">
                <h4
                  className="font-bold lg:text[90px] text-[60px] text-[#3C9B35] card-text"
                  style={{
                    textShadow: "0 0 10px #000",
                    ...handleCardTextPosition(true),
                  }}
                >
                  Ven y conócenos
                </h4>
                <p
                  className="font-normal text-[30px] text-[#d7ff27] card-text"
                  style={{
                    textShadow: "0 0 10px #000",
                    ...handleCardTextPosition(true),
                  }}
                >
                  Calle Ámbar #130 Col. Valle Verde.
                </p>
                <p
                  className="text-[20px] text-[#d7ff27] card-text"
                  style={{
                    textShadow: "0 0 10px #000",
                    ...handleCardTextPosition(true),
                  }}
                >
                  (Sobre la calle de las segundas, a un costado de Prim. Anexa a
                  la normal)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div
          className={`px-[10%] pb-25 pt-21 flex md:flex-row gap-4 ${cardClass}`}
        >
          <Card
            style={{
              backgroundImage: `url(${CornImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "300px",
              borderRadius: "32px",
              maxHeight: "1000px",
              maxWidth: "1000px",
            }}
          >
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex-1 md:ml-[62px] max-w-[650px]">
                <h4
                  className="font-bold lg:text[90px] text-[60px] text-[#3C9B35] card-text"
                  style={{
                    textShadow: "0 0 10px #fff",
                    ...handleCardTextPosition(),
                  }}
                >
                  100% Maíz
                </h4>
                <p
                  className="font-normal text-[30px] card-text"
                  style={{
                    textShadow: "0 0 10px #fff",
                    ...handleCardTextPosition(),
                  }}
                >
                  Garantizamos calidad premium en el proceso de nixtamalización
                </p>
              </div>
            </div>
          </Card>
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div
          className={`px-[10%] pb-25 pt-21 flex md:flex-row gap-4 ${cardClass}`}
        >
          <Card
            style={{
              backgroundImage: `url(${Celorio.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "300px",
              borderRadius: "32px",
              maxHeight: "1000px",
              maxWidth: "1000px",
            }}
          >
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex-1 md:ml-[62px] max-w-[650px]">
                <h4
                  className="font-bold lg:text-[90px] text-[60px] text-[#3C9B35] card-text"
                  style={{
                    textShadow: "0 0 10px #fff",
                    ...handleCardTextPosition(),
                  }}
                >
                  Celorio
                </h4>
                <p
                  className="font-normal text-[30px] card-text"
                  style={{
                    textShadow: "0 0 10px #fff",
                    ...handleCardTextPosition(),
                  }}
                >
                  Las mejores y originales maquinas tortilladoras
                </p>
              </div>
            </div>
          </Card>
        </div>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Cards;
