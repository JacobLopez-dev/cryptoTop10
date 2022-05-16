import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {

    const particlesInit = async (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        // console.log(container);
      };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        {
          fullScreen: {
          enable: false
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 40,
            density: {
              enable: true,
              value_area: 800
            }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 2,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              warp: true,
              opacity: 1,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              warp: true,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            events: {
              onhover: {
              enable: true,
              mode: "repulse"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 100,
                size: 40,
                duration: 2,
                opacity: 0.8,
                speed: 2
              },
              repulse: {
                distance: 200
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true,
        }
      }
    />
  )
}

export default Particle