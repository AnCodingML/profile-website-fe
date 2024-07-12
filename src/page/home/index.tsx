import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../assets/json/particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useSpring, useTrail, animated, easings } from '@react-spring/web';
import { Container, Image } from "react-bootstrap";
import Satelit from '../../assets/icon/satelit.svg';
import Profile from '../../assets/img/photo.jpg';
import Frontend from '../../assets/icon/frontend.svg';

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

  const handleDialogChange = () => {
    // window.open(`localhost:4000${Profile}`, '_blank');
  }

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>  
      <Parallax ref={parallax} pages={3} style={{ background: '#0E0E52', fontFamily:'Orbitron' }}>
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ position: 'relative' }}>
          {init && (
            <Particles className="position-absolute" options={particlesOptions as unknown as ISourceOptions} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={-0.1}>
          <Container>
            <h1 className="text-white fs__hero">Hi. I am <b className="glow__yellow">Andi</b></h1>
            <div className="d-flex gap-4">
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
            <div className="text-white col-6 mt-5 fs-5 lh-lg" style={{fontFamily: 'Orbitron', fontWeight: 300}}>
                As a passionate and experienced fullstack programmer, I specialize in creating seamless, efficient, and user-friendly web solutions. With a strong foundation in both front-end and back-end technologies, I bring ideas to life by crafting innovative and functional digital experiences. Let's transform your vision into reality
            </div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={-0.7}>
          <Container className="d-flex justify-content-end pe-5">
            <animated.div style={{...springsSatelit}}>
              <Image src={Satelit} alt="satelit" />
            </animated.div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <Container className="d-flex gap-4">
            <div className="skill-set p-5 rounded-4">
              <div className="d-flex justify-content-center">
                <Image src={Frontend} alt="front-end"/>
              </div>
              <div className="fs-3 text-white fw-bold rounded-4 mt-5">Frontend</div>
              <div className="text-white lh-lg text-justify mt-3">
                As a front-end developer, I am skilled at building responsive and interactive user interfaces using React and TypeScript, and have a deep understanding of modern web design principles.
              </div>
            </div>
            <div className="skill-set p-4 text-center rounded-4">
              <div className="fs-3 text-white fw-bold">Backend</div>
            </div>
            <div className="skill-set p-4 text-center rounded-4">
              <div className="fs-3 text-white fw-bold">DevOps</div>
            </div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={2.3}>
          <Container id="about-us__section-1" className="d-flex p-5 gap-5">
            <Image src={Profile}/>
            <div className="fs-3 text-white d-grid align-items-evenly">
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </div>
              <div className="align-self-end">
                <Trigger className="col-12">
                  <TriggerShadow />
                  <TriggerEdge />
                  <TriggerLabel  >My Resume</TriggerLabel>
                </Trigger>
              </div>   
            </div>
          </Container>
        </ParallaxLayer>
      </Parallax> 
    </>
  );
}

export default AboutUs;
