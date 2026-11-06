import { setCfg } from 'illutions';

export const cfg = setCfg({
  // Display runtime information and editable settings
  gui: {
    infoBox: {
      enable: true,
    },
    inspector: {
      enable: true,
    },
  },

  // Load the model used to demonstrate orbit controls
  model: {
    file: ['scene/orbitctrls.glb'],
  },

  // Light the model with an EXR studio environment
  envCtrls: {
    enable: true,
    map: ['scene/brown_photostudio_02_256.exr'],
  },

  // Define how the camera orbits, zooms and eases around the model
  orbitCtrls: {
    enable: true,
    autoRotate: true,
    maxDistance: 8,
    minDistance: 1.75,
    enableDamping: true,
    dampingFactor: 0.025,
    zoomSpeed: 0.5,
  },

  render: {
    // Configure renderer profiles
    profile: {
      webgpu: {
        msaa: 'render',
        aa: 'traa',
      },
      webgl: {
        msaa: 'render',
        aa: 'fxaa',
      },
    },
  },

  // Log all messages to the console.
  debug: {
    log: 'all',
  },
});
