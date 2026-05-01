import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#f2c341" },
          links: {
            enable: true,
            color: "#f2c341",
            opacity: 0.2,
            distance: 150,
          },
          move: { enable: true, speed: 1.5 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
