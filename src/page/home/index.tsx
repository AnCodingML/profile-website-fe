import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../assets/json/particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useSpring, useTrail, animated, easings } from '@react-spring/web';
import { Container, Image } from "react-bootstrap";
import Satelit from '../../assets/icon/satelit.svg';
import Backend from '../../assets/icon/backend.svg';
import Frontend from '../../assets/icon/frontend.svg';
import Javascript from '../../assets/icon/javascript.svg';
import Typescript from '../../assets/icon/Typescript.svg';
import React from '../../assets/icon/react.svg';
import Html5 from '../../assets/icon/HTML5.svg';
import Css from '../../assets/icon/CSS.svg'
import Bootstrap from '../../assets/icon/bootstrap.svg';
import Tailwind from '../../assets/icon/tailwind.svg';
import Nodejs from '../../assets/icon/node-js.svg'
import Express from '../../assets/icon/express-js.svg'
import Postgres from '../../assets/icon/postgres.svg'
import Mysql from '../../assets/icon/mysql.svg'
import Git from '../../assets/icon/git.svg'
import Alibaba from '../../assets/icon/alibaba-cloud.svg'
import Devops from '../../assets/icon/devops.svg'

import {
  Box,
  FrontBox,
  MiddleBox,
  BackBox,
  Trigger,
  TriggerShadow,
  TriggerEdge,
  TriggerLabel,
} from '../../styles.tsx';

const items = ['F', 'U', 'L', 'L', 'S', 'T', 'A', 'C', 'K'];
const items2 = ['W', 'E', 'B', 'S', 'I', 'T', 'E'];
const items3 = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];

function AboutUs() {
  const [init, setInit] = useState(false);    
  const parallax = useRef<IParallax>(null!);

  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));
  
  const isFlipped = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isFlipped.current === 0) {
        api.start({ rotateX: 120 });
        isFlipped.current = 1;
      } else if (isFlipped.current === 1) {
        api.start({ rotateX: 240 });
        isFlipped.current = 2;
      } else {
        api.start({ rotateX: 0 });
        isFlipped.current = 0;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  const springsSatelit = useSpring({
    from: { x: -50, y: 25 },
    to: async (next) => {
      while (1) {
        await next({ x: 50, y: 0 });
        await next({ x: -50, y: 25 });
      }
    },
    config: {
      duration: 4000,
      easing: easings.easeInOutSine,
    },
    loop: true,
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>  
      <Parallax ref={parallax} pages={4} style={{ background: '#0E0E52', fontFamily:'Orbitron' }}>
        {/* <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} /> */}
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ position: 'relative' }}>
          {init && (
            <Particles className="position-absolute" options={particlesOptions as unknown as ISourceOptions} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.2}>
          <Container>
            <h1 className="text-white fs__hero">Hi. I am <b className="glow__yellow">Andi</b></h1>
            <div className="d-flex gap-2 gap-lg-4">
              {trail.map(({ rotateX }, i) => (
                <Box key={i}>
                  <FrontBox
                    key={items[i]}
                    style={{
                      transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {items[i]}
                  </FrontBox>
                  <MiddleBox
                    key={items2[i]}
                    style={{
                      transform: rotateX.to(val => `perspective(600px) rotateX(${val - 120}deg)`),
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {items2[i]}
                  </MiddleBox>
                  <BackBox
                    key={items3[i]}
                    style={{
                      transform: rotateX.to(val => `perspective(600px) rotateX(${val - 240}deg)`),
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {items3[i]}
                  </BackBox>
                </Box>
              ))}
            </div>
            <div id="hero__desc" className="text-white col-lg-6 mt-5 lh-lg">
                As a passionate and experienced fullstack programmer, I specialize in creating seamless, efficient, and user-friendly web solutions. With a strong foundation in both front-end and back-end technologies, I bring ideas to life by crafting innovative and functional digital experiences. Let's transform your vision into reality
            </div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={-0.7}>
          <Container className="d-flex justify-content-end pe-5">
            <animated.div  style={{...springsSatelit}}>
              <Image id="img-satelit" src={Satelit} alt="satelit" />
            </animated.div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Container className="d-lg-flex flex-wrap d-grid gap-4 justify-content-center">
            <div className="skill-set p-sm-5 p-4 rounded-4" style={{maxWidth:'416px'}}>
              <div className="fs-1 text-white fw-bold rounded-4 text-center">Frontend</div>
              <div className="d-flex justify-content-center  mt-4">
                <Image src={Frontend} alt="front-end" height={100}/>
              </div>
              <div className="text-white lh-lg text-justify mt-5">
                As a front-end developer, I am skilled at building responsive and interactive user interfaces using React and TypeScript, and have a deep understanding of modern web design principles.
              </div>
              <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 align-items-end">
                <Image src={Html5} height={62}/>
                <Image src={Css} height={62}/>
                <Image src={Javascript} height={50}/>
                <Image src={Typescript} height={50}/>
                <Image src={React} height={50}/>
                <Image src={Bootstrap} height={50}/>
                <Image className="align-self-center" src={Tailwind} width={50}/>
              </div>
            </div>
            <div className="skill-set p-sm-5 p-4 rounded-4" style={{maxWidth:'416px'}}>
              <div className="fs-1 text-white fw-bold rounded-4 text-center">Backend</div>
              <div className="d-flex justify-content-center  mt-4">
                <Image src={Backend} alt="back-end" height={100}/>
              </div>
              <div className="text-white lh-lg text-justify mt-5">
                Sebagai developer back-end, saya ahli dalam pembuatan API RESTful, manajemen database (SQL dan NoSQL), ORM, autentikasi dan otorisasi (JWT, session). Dokumentasi API dan Unit Testing.
              </div>
              <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 align-items-end">
                <Image src={Javascript} height={50}/>
                <Image src={Typescript} height={50}/>
                <Image className="bg-white rounded" src={Nodejs} height={50}/>
                <Image className="bg-white p-1 rounded" src={Express} height={50}/>
                <Image src={Postgres} height={50}/>
                <Image className="bg-white p-1 rounded" src={Mysql} height={50}/>
                <Image src={Git} height={50}/>
              </div>
            </div>
            <div className="skill-set p-sm-5 p-4 rounded-4" style={{maxWidth:'416px'}}>
              <div className="fs-1 text-white fw-bold rounded-4 text-center">DevOps</div>
              <div className="d-flex justify-content-center  mt-4">
                <Image src={Devops} alt="back-end" height={100}/>
              </div>
              <div className="text-white lh-lg text-justify mt-5">
                Mengelola server Linux pada Alibaba Cloud dan CI/CD dengan GitHub Actions, serta sedang mempelajari manajemen konfigurasi, IaC, kontainerisasi dan orkestrasi, serta monitoring dan logging.
              </div>
              <div className="d-flex justify-content-center gap-4 flex-wrap mt-5 align-items-end">
                <Image src={Alibaba} height={50}/>
              </div>
            </div>
          </Container>
        </ParallaxLayer>
      </Parallax> 
    </>
  );
}

export default AboutUs;
