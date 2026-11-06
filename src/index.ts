import { setComps, App, PerspCam3D } from 'illutions';

// Define the static settings used when the app starts
import { cfg } from './cfg';

// For typed access to components and engine systems.
export type MyApp = App<typeof comps>;

// Register customized asset components
const comps = setComps({
  scene: {
    cam: {
      class: PerspCam3D,
      params: { obj: { position: { x: -2.25, y: 0.25, z: 0 } } }
    },
  },
});

// Start the app when the page is ready
document.addEventListener('DOMContentLoaded', () => {
  App.run(cfg, comps);
}); 
