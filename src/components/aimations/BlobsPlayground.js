import { motion, useScroll, useTransform } from "framer-motion";
import Blob from "./Blob";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function BlobsPlayground({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);

  return (
    <div className="relative w-full h-full" ref={ref}>
      <div className="inset-0 fixed h-full p-10 -z-10 blur-3xl opacity-40">
        {[1, 2, 3, 4].map((item) => (
          <motion.div key={item} style={{ y }}>
            <Blob uid={item} />
          </motion.div>
        ))}
      </div>
      <div className="w-full max-w-5xl mx-auto px-6 z-20">{children}</div>
    </div>
  );
}

export default BlobsPlayground;
