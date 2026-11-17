import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { calculateCharProgressRange } from '../utils/math';

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Char: React.FC<CharProps> = ({ char, index, total, progress }) => {
  const { start, end } = calculateCharProgressRange(index, total, 0.04);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for natural layout & spacing */}
      <span className="opacity-0">{char === ' ' ? '\u00A0' : char}</span>
      {/* Absolute positioned animated character */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text?: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text = "I’m an engineering student with a strong passion for web design and development. I enjoy creating modern, visually appealing websites that combine creativity, functionality, and smooth user experiences. I’m always exploring new technologies, experimenting with designs, and turning ideas into engaging digital experiences. I’m excited to collaborate, learn, and build something incredible together!",
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = Array.from(text).length;
  const words = text.split(' ');
  let globalIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[600px] mx-auto text-[clamp(1rem,2vw,1.35rem)] ${className}`}
      aria-label={text}
    >
      {words.map((word, wordIdx) => {
        const wordChars = Array.from(word);
        const startIdx = globalIndex;
        globalIndex += wordChars.length + (wordIdx < words.length - 1 ? 1 : 0);

        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, charOffset) => (
                <Char
                  key={charOffset}
                  char={char}
                  index={startIdx + charOffset}
                  total={totalChars}
                  progress={scrollYProgress}
                />
              ))}
            </span>
            {wordIdx < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default AnimatedText;
