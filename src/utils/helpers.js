import { createNoise2D } from "simplex-noise";

export const createPoints = () => {
  const points = [];
  const numPoints = 6;
  const angleStep = (Math.PI * 2) / numPoints;
  const rad = 75;

  for (let i = 1; i <= numPoints; i++) {
    const theta = i * angleStep;
    const x = 100 + Math.cos(theta) * rad;
    const y = 100 + Math.sin(theta) * rad;

    points.push({
      x: x,
      y: y,
      originX: x,
      originY: y,
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000,
    });
  }

  return points;
};

export const map = (n, start1, end1, start2, end2) => {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
};

export const noise = (x, y) => {
  let noise = new createNoise2D();
  return noise(x, y);
};
