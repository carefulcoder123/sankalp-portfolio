'use client';
import { motion } from 'framer-motion';
import SplitText from './reactBits/TextAnimations/SplitText/SplitText';
import React from 'react';

function AnimatedHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <SplitText
        text="Get in Touch"
        className="text-4xl md:text-5xl font-bold h-[60px] mb-16 text-center text-white"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </motion.div>
  );
}

export default React.memo(AnimatedHeader);
