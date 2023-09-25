import { useCallback } from "preact/hooks";
import Particles from "preact-particles";
import { loadFull } from "tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Container, Engine } from "tsparticles-engine";

export default function App() {
  const options = {
    background: {
      color: "#FFFFFF",
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    // preset: "links",
    particles: {
      color: {
        value: "#000",
      },
      links: {
        enable: true,
        distance: 100,
      },
      shape: {
        type: "square",
      },
      size: {
        value: 10,
      },
      number: {
        value: window.innerWidth < 600 ? 80 : 150,
      },
      move: {
        enable: true,
      },
    },

    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },

      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
        repulse: {
          distance: 150,
        },
        bubble: {
          distance: 400,
          size: 40,
          opacity: 8,
          duration: 2,
          speed: 3,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
  };

  // const particlesInit = useCallback(async (engine: Engine) => {
  //   console.log(engine);
  //   await loadLinksPreset(engine);
  //   await loadFull(engine);
  // }, []);
  const particlesInit = async (engine: Engine) => {
    console.log(engine);
    // await loadLinksPreset(engine);
    await loadFull(engine);
  };

  const particlesLoaded = useCallback(async (container: Container) => {
    await console.log(container);
  }, []);

  return <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />;
}
