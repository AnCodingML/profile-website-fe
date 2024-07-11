import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../assets/json/particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { styled } from '@stitches/react';
import { useSpring, useTrail, animated, easings, useTransition  } from '@react-spring/web';
import { Container, Image, Button } from "react-bootstrap";
import Satelit from '../../assets/icon/satelit.svg';
import Profile from '../../assets/img/photo.jpg';
import * as Dialog from '@radix-ui/react-dialog'
  
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

  const springs = useSpring({
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
        <ParallaxLayer offset={0.1} speed={-0.8}>
          <Container className="d-flex justify-content-end pe-5">
            <animated.div style={{...springs}}>
              <Image src={Satelit} alt="" />
            </animated.div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <Container id="about-us__section-1" className="d-flex p-5 gap-5">
              <Image src={Profile}/>
              <div className="fs-3 text-white d-grid align-items-evenly">
                <div>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className="align-self-end">
                  <Dialog.Root onOpenChange={handleDialogChange}>
                    <Trigger className="col-12">
                      <TriggerShadow />
                      <TriggerEdge />
                      <TriggerLabel  >My Resume</TriggerLabel>
                    </Trigger>
                    <Dialog.Portal forceMount>
                      
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
                
              </div>
          </Container>
        </ParallaxLayer>
      </Parallax> 
    </>
  );
}

const TriggerPart = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: 8,
})

const TriggerShadow = styled(TriggerPart, {
  background: 'hsl(0deg 0% 0% / 0.5)',
  transform: 'translateY(4px)',
  transition: 'transform 250ms ease-out',
})

const TriggerEdge = styled(TriggerPart, {
  background: `linear-gradient(
      to left,
      hsl(0deg 0% 30%) 0%,
      hsl(0deg 0% 60%) 8%,
      hsl(0deg 0% 60%) 92%,
      hsl(0deg 0% 30%) 100%
    )`,
})

const TriggerLabel = styled('span', {
  display: 'block',
  position: 'relative',
  borderRadius: 8,
  color: '#569AFF',
  fontSize: '25px',
  padding: '12px 24px',
  background: '#fafafa',
  transform: 'translateY(-7px)',
  width: '100%',
  userSelect: 'none',
  transition: 'transform 250ms ease-out',
  fontFamily: 'Orbitron',
  fontWeight: 700,
})

const Trigger = styled(Dialog.Trigger, {
  border: 'none',
  fontWeight: 600,
  cursor: 'pointer',
  background: 'transparent',
  position: 'relative',
  padding: 0,
  transition: 'filter 250ms ease-out',

  '&:hover': {
    filter: 'brightness(110%)',

    [`& ${TriggerLabel}`]: {
      transform: 'translateY(-6px)',
    },

    [`& ${TriggerShadow}`]: {
      transform: 'translateY(4px)',
    },
  },

  '&:active': {
    [`& ${TriggerLabel}`]: {
      transform: 'translateY(-2px)',
      transition: 'transform 34ms',
    },

    [`& ${TriggerShadow}`]: {
      transform: 'translateY(1px)',
      transition: 'transform 34ms',
    },
  },
})

export default AboutUs;
