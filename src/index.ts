import { Engine } from "@babylonjs/core";
import { createScene } from "./scene";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

const initScene = async () => {
  const engine = new Engine(canvas, true, { xrCompatible: true }, true);
  const scene = await createScene(engine, canvas);
  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener("resize", function () {
    engine.resize();
  });
};

initScene();
