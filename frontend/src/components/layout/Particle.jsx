import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle({height}) {

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
      height={height}
      options={
        {
          fullScreen: {
          enable: false
          },
          fpsLimit: 30,
          particles: {
            number: {
              value: 10,
            density: {
              enable: true,
              value_area: 250
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
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 2,
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
              distance: 100,
              color: "#ffffff",
              warp: true,
              opacity: 1,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.5,
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
              mode: "grab"
              },
              // onclick: {
              //   enable: true,
              //   mode:'push'
              // },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1
                }
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