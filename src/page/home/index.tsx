import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../assets/json/particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import {animated} from '@react-spring/web';
import { Container, Image } from "react-bootstrap";
import Satelit from '../../assets/icon/satelit.svg';
import Slide from '../../components/about/skillSet.tsx'
import { useSpring, easings } from '@react-spring/web';
import Role from '../../components/about/role'



function AboutUs() {
  const [init, setInit] = useState(false);    
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
  }, []);

  return (
    <>  
      <Parallax id="parallax" ref={parallax} pages={4} style={{ background: '#0E0E52', fontFamily:'Orbitron' }}>
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
              <Role/>
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
          <Slide/>
        </ParallaxLayer>
      </Parallax> 
    </>
  );
}

export default AboutUs;
