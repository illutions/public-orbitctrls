import { App, cfg } from 'illutions';

// Configures the cameras position.
cfg.cam.position = { x: 0, y: 1, z: 3 }

// Configures how the camera rotates, pans and zooms around a target.
cfg.orbitCtrls.enable = true;
cfg.orbitCtrls.autoRotate = true;
cfg.orbitCtrls.maxDistance = 10;
cfg.orbitCtrls.minDistance = 2;

// Configures GLTF/GLB model loading.
cfg.model.file = 'scene/argus_camera.glb';

// Configures the scene environment map.
cfg.envCtrls.enable = true;
cfg.envCtrls.map = 'scene/brown_photostudio_02_1k.exr';

// Configures the rendering backend.
cfg.render.api = 'webgl';
cfg.render.webgl.parameters.antialias = true;

document.addEventListener('DOMContentLoaded', () => {
  App.run(cfg);
}); 