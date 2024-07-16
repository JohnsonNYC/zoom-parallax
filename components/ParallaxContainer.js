"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styled from "styled-components";

import Image from "next/image";
import Lenis from "@studio-freight/lenis";

import Picture1 from "../public/images/1.jpg";
import Picture2 from "../public/images/2.jpg";
import Picture3 from "../public/images/3.jpg";
import Picture4 from "../public/images/4.jpg";
import Picture5 from "../public/images/5.jpg";
import Picture6 from "../public/images/6.jpg";

const ParallaxContainer = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale7 },
    { src: Picture5, scale: scale8 },
    { src: Picture6, scale: scale9 },
  ];

  return (
    <Container ref={container}>
      <Sticky>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="el">
              <div className="imageContainer">
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </Sticky>
    </Container>
  );
};

export default ParallaxContainer;

const Container = styled.div`
  height: 300vh;
  position: relative;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  overflow: hidden;
  height: 100vh;
  background: orange;

  .el {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    .imageContainer {
      position: relative;
      width: 25vw;
      height: 25vh;

      img {
        object-fit: cover;
      }
    }

    &:nth-of-type(2) {
      .imageContainer {
        top: -30vh;

        left: 5vw;

        width: 35vw;

        height: 30vh;
      }
    }

    &:nth-of-type(3) {
      .imageContainer {
        top: -10vh;

        left: -25vw;

        width: 20vw;

        height: 45vh;
      }
    }

    &:nth-of-type(4) {
      .imageContainer {
        left: 27.5vw;

        width: 25vw;

        height: 25vh;
      }
    }

    &:nth-of-type(5) {
      .imageContainer {
        top: 27.5vh;

        left: 5vw;

        width: 20vw;

        height: 25vh;
      }
    }

    &:nth-of-type(6) {
      .imageContainer {
        top: 27.5vh;

        left: -22.5vw;

        width: 30vw;

        height: 25vh;
      }
    }

    &:nth-of-type(7) {
      .imageContainer {
        top: 22.5vh;

        left: 25vw;

        width: 15vw;

        height: 15vh;
      }
    }
  }
`;
