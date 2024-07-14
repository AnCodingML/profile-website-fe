import { useTrail } from '@react-spring/web';
import React, { useEffect, useRef } from 'react';
import {
   Box,
   FrontBox,
   MiddleBox,
   BackBox,
   Trigger,
   TriggerShadow,
   TriggerEdge,
   TriggerLabel,
 } from '../style/styles';


 const items = ['F', 'U', 'L', 'L', 'S', 'T', 'A', 'C', 'K'];
 const items2 = ['W', 'E', 'B', 'S', 'I', 'T', 'E'];
 const items3 = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];

 function Role () {
   
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


   return (
      <>
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
      </>
   )
 }

 export default Role