import { useEffect, useRef, useState } from "react";
import { spline } from "@georgedoescode/spline";
import { motion } from "framer-motion";
import { createPoints, map, noise } from "../../utils/helpers";

function Blob({ uid }) {
  const ref = useRef();
  const [hue, setHue] = useState();
  const [scale, setScale] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function animate(points) {
    const path = ref.current;

    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
      const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
      const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
      const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);
      point.x = x;
      point.y = y;
      point.noiseOffsetX += 0.05;
      point.noiseOffsetY += 0.05;
    }

    path.setAttribute("d", spline(points, 1, true));
  }

  useEffect(() => {
    const n = noise(Math.random(), Math.random());

    setPosition({
      x: map(n, -1, 1, 0, window.innerWidth),
      y: map(n, -1, 1, 0, window.innerHeight),
    });

    setHue(map(n, -1, 1, 0, 360));
    setScale(map(n, -1, 1, 0, 4));

    animate(createPoints());
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: scale }}
      transition={{ type: "spring", delay: 0.8, duration: 1 }}
      style={{ top: position.y, left: position.x }}
      className="absolute"
    >
      <motion.svg
        animate={{ rotate: Math.random() < 0.5 ? -360 : 360 }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        viewBox="0 0 200 200"
        height="300"
        width="300"
      >
        <defs>
          <linearGradient id={"gradient_" + uid} gradientTransform="rotate(80)">
            <stop offset="0%" stopColor={`hsl(${hue}, 100%, 75%)`} />
            <stop offset="100%" stopColor={`hsl(${hue + 60}, 100%, 75%)`} />
          </linearGradient>
        </defs>
        <path ref={ref} d="" fill={`url('#gradient_${uid}')`} />
      </motion.svg>
    </motion.div>
  );
}

export default Blob;
