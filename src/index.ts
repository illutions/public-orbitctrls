import { App, cfg } from 'illutions';

// Set cameras position
cfg.cam.position = { x: -2.25, y: 0.25, z: 0 }

// Set how camera rotates, pans and zooms around a target
cfg.orbitCtrls.enable = true;
cfg.orbitCtrls.autoRotate = true;
cfg.orbitCtrls.maxDistance = 10;
cfg.orbitCtrls.minDistance = 2;

// Load GLTF/GLB model
cfg.model.file = 'scene/argus_camera.glb';

// Set scene environment map
cfg.envCtrls.enable = true;
cfg.envCtrls.map = 'scene/brown_photostudio_02_1k.exr';

// Set rendering backend
cfg.render.api = 'webgl';
cfg.render.webgl.parameters.antialias = true;

document.addEventListener('DOMContentLoaded', () => {
  // Run illutions engine
  App.run(cfg);
}); 