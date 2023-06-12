const container = document.querySelector('.wrapper');
const fireworks = new Fireworks.default(container, {
  autoresize: true,
  opacity: 0.5,
  acceleration: 1.05,
  friction: 0.97,
  gravity: 1.5,
  particles: 50,
  traceLength: 1,
  traceSpeed: 5,
  explosion: 5,
  intensity: 30,
  flickering: 50,
  lineStyle: 'round',
  hue: {
    min: 0,
    max: 360
  },
  delay: {
    min: 30,
    max: 60
  },
  rocketsPoint: {
    min: 50,
    max: 50
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3
    },
    trace: {
      min: 1,
      max: 2
    }
  },
  brightness: {
    min: 50,
    max: 80
  },
  decay: {
    min: 0.015,
    max: 0.03
  }
});

fireworks.start();

// Durée en millisecondes pour laquelle les feux d'artifice doivent être affichés
const dureeFeuxArtifice = 7000;

setTimeout(() => {
  fireworks.stop();
  document.querySelector('canvas').style.zIndex = -1;
}, dureeFeuxArtifice);
