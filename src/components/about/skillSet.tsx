import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { FrontendSkill, BackendSkill, DevopsSkill } from "../../utils/about";
import { Container } from "react-bootstrap";

interface Slide {
  key: string;
  content: JSX.Element;
  onClick?: () => void;
}

interface State {
  goToSlide: number;
  offsetRadius: number;
  showNavigation: boolean;
  config: object;
}

function SkillSet() {
  const [state, setState] = useState<State>({
    goToSlide: 0,
    offsetRadius: 3,
    showNavigation: false,
    config: config.gentle,
  });

  const [isTablet, setisTablet] = useState<boolean>(window.innerWidth < 1200);
  const [isMobile, setisMobile] = useState<boolean>(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setisTablet(window.innerWidth < 1200);
      setisMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  const slides: Slide[] = [
    {
      key: uuidv4(),
      content: <FrontendSkill />,
    },
    {
      key: uuidv4(),
      content: <BackendSkill />,
    },
    {
      key: uuidv4(),
      content: <DevopsSkill />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ ...state, goToSlide: index }) };
  });

  let xDown: number | null = null;
  let yDown: number | null = null;

  const getTouches = (evt: TouchEvent): TouchList => {
    return evt.touches;
  };

  const handleTouchStart = (evt: React.TouchEvent) => {
    const firstTouch = getTouches(evt.nativeEvent)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt: React.TouchEvent) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        setState({ ...state, goToSlide: state.goToSlide + 1 });
      } else {
        setState({ ...state, goToSlide: state.goToSlide - 1 });
      }
    }

    xDown = null;
    yDown = null;
  };

  return (
    <div style={{ width: isMobile ? "100%" : isTablet ? "70%" : "100%", margin: "0 auto" }}>
      {isTablet ? (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} style={{transform:'translateY(34.5vh)'}}>
          <Carousel
            slides={slides}
            goToSlide={state.goToSlide}
            offsetRadius={state.offsetRadius}
            showNavigation={state.showNavigation}
            animationConfig={state.config}
          />
        </div>
      ) : (
        <Container className="d-flex gap-4 justify-content-center">
          <FrontendSkill />
          <BackendSkill />
          <DevopsSkill />
        </Container>
      )}
    </div>
  );
}

export default SkillSet;
