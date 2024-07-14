import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../assets/json/particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { animated } from '@react-spring/web';
import { Container, Image } from "react-bootstrap";
import Satelit from '../../assets/icon/satelit.svg';
import Slide from '../../components/about/skillSet.tsx';
import { useSpring, easings } from '@react-spring/web';
import Role from '../../components/about/role';
import Ground3 from '../../assets/img/ground-3.svg';
import Ground2 from '../../assets/img/ground-2.svg';
import Ground1 from '../../assets/img/ground-1.svg';
import Mountain from '../../assets/img/mountain.svg';

function AboutUs() {
  const [init, setInit] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const parallax = useRef<IParallax>(null!);

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


    window.addEventListener('resize', calculateOffset);

    return () => window.removeEventListener('resize', calculateOffset);
  }, []);

  const calculateOffset = (value) => {
    console.log((value) + (windowHeight / 1000))
    return (value) + (windowHeight / 10000);
  };

  return (
    <>
      <Parallax id="parallax" ref={parallax} pages={3} style={{ background: '#0E0E52', fontFamily: 'Orbitron' }}>
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ position: 'relative' }}>
          {init && (
            <Particles className="position-absolute" options={particlesOptions as unknown as ISourceOptions} />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0.2}>
          <Container>
            <h1 className="text-white fs__hero">Hi. I am <b className="glow__yellow">Andi</b></h1>
            <div className="d-flex gap-2 gap-lg-4">
              <Role />
            </div>
            <div id="hero__desc" className="text-white col-lg-6 mt-5 lh-lg">
              As a passionate and experienced fullstack programmer, I specialize in creating seamless, efficient, and user-friendly web solutions. With a strong foundation in both front-end and back-end technologies, I bring ideas to life by crafting innovative and functional digital experiences. Let's transform your vision into reality
            </div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={-0.7}>
          <Container className="d-flex justify-content-end pe-5">
            <animated.div style={{ ...springsSatelit }}>
              <Image id="img-satelit" src={Satelit} alt="satelit" />
            </animated.div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Slide />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={1}>
          <Image src={Mountain} alt="mountain" width={'100%'} style={{minWidth:'1606px'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={2}>
          <Image src={Ground1} alt="ground" width={'100%'} style={{minWidth:'1240px'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={3}>
          <Image src={Ground2} alt="ground" width={'100%'} style={{minWidth:'1240px'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.906} speed={4}>
          <Image src={Ground3} alt="ground" width={'100%'} style={{minWidth:'1240px'}} />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default AboutUs;
