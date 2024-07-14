import { styled } from '@stitches/react';
import { animated } from '@react-spring/web';

export const Box = styled('div', {
  position: 'relative',
  height: 50,
  width: 50,
  '@media screen and (max-width: 992px)': {
    height: 25,
    width: 25,
  },
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

 '@media screen and (max-width: 992px)': {
    fontSize: 'calc(20px + 2vw)',
  },
};

export const FrontBox = styled(animated.div, {
  ...SharedStyles,
});

export const MiddleBox = styled(animated.div, {
  ...SharedStyles,
});

export const BackBox = styled(animated.div, {
  ...SharedStyles,
});

const TriggerPart = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: 8,
});

export const TriggerShadow = styled(TriggerPart, {
  background: 'hsl(0deg 0% 0% / 0.5)',
  transform: 'translateY(4px)',
  transition: 'transform 250ms ease-out',
});

export const TriggerEdge = styled(TriggerPart, {
  background: `linear-gradient(
      to left,
      hsl(0deg 0% 30%) 0%,
      hsl(0deg 0% 60%) 8%,
      hsl(0deg 0% 60%) 92%,
      hsl(0deg 0% 30%) 100%
    )`,
});

export const TriggerLabel = styled('span', {
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
});

export const Trigger = styled('button', {
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
});
