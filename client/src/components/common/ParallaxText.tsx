import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";
// import { wrap } from "@motionone/utils";

interface ParallaxProps {
  baseVelocity: number;
  text: string[];
}

const ParallaxText = ({ baseVelocity = 100, text }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(
    baseX,
    (v) => `${wrap((100 / text.length) * -3, 0, v)}%`
  );

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="flex flex-nowrap m-0 overflow-hidden tracking-tighter leading-tight whitespace-nowrap rotate-[-3deg]">
      <motion.div
        className="font-semibold uppercase text-2xl md:text-4xl flex flex-nowrap whitespace-nowrap"
        style={{ x, animationDirection: "alternate" }}
      >
        {[...text, ...text, ...text].map((t, i) => (
          <span className="text-white block mr-7 mb-1" key={i}>
            {t}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxText;
