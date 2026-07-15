import { App, cfg } from 'illutions';

// Show helpers
cfg.gui.infoBox.enable = true;
cfg.gui.inspector.enable = true;

// Set cameras position
cfg.cam.position = { x: -2.25, y: 0.25, z: 0 }

// Set how camera rotates, pans and zooms around a target
cfg.orbitCtrls.enable = true;
cfg.orbitCtrls.autoRotate = true;
cfg.orbitCtrls.maxDistance = 8;
cfg.orbitCtrls.minDistance = 1.75;
cfg.orbitCtrls.enableDamping = true
cfg.orbitCtrls.dampingFactor = 0.025
cfg.orbitCtrls.zoomSpeed = 0.5;

// Load GLTF/GLB model
cfg.model.file = 'scene/orbitctrls.glb';

// Set scene environment map
cfg.envCtrls.enable = true;
cfg.envCtrls.map = ['scene/brown_photostudio_02_1k.exr'];

// Set antialias
cfg.render.params.aa = true;

document.addEventListener('DOMContentLoaded', () => {
  // Run illutions engine
  App.run(cfg);
}); 