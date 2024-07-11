import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../assets/json/particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { styled } from '@stitches/react';
import { useTrail, animated } from '@react-spring/web';
import { Container } from "react-bootstrap";
  
const Box = styled('div', {
  position: 'relative',
  height: 50,
  width: 50,
});

const SharedStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Orbitron',
  fontWeight: 800,
  backfaceVisibility: 'hidden',
  fontSize: 45,
  color: '#fff',
};

const FrontBox = styled(animated.div, {
  ...SharedStyles,
});

const MiddleBox = styled(animated.div, {
  ...SharedStyles,
});

const BackBox = styled(animated.div, {
  ...SharedStyles,
});

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
    }, 2000); // Ganti 2000 dengan interval waktu yang diinginkan (dalam milidetik)

    return () => clearInterval(interval); // Bersihkan interval saat komponen dibongkar
  }, [api]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>  
      <Parallax ref={parallax} pages={3} style={{ background: '#0E0E52' }}>
        {/* <ParallaxLayer offset={0.7} speed={1} style={{ backgroundColor: '#805E73' }} /> */}
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
          </Container>
        </ParallaxLayer>
      </Parallax> 
    </>
  );
}

export default AboutUs;
