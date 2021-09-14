import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color3,
  Color4,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  SceneLoader,
} from "@babylonjs/core";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { TransformableCubeNode, TransformableSphereNode } from "./helpers/mesh";
import { setupGroundMaterial } from "./helpers/material";
import duckUrl from "./assets/duck.gltf";

export const createScene = async (
  engine: Engine,
  canvas: HTMLCanvasElement
): Promise<Scene> => {
  const scene = new Scene(engine);
  const sceneMaterials = {
    matteGray: new StandardMaterial("matte-grey", scene),
    woodPanel: setupGroundMaterial(scene),
  };
  scene.clearColor = new Color4(184, 237, 255, 0.95);

  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.55;

  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 100, height: 100 },
    scene
  );
  ground.material = sceneMaterials.woodPanel;

  const flatSpaceCamera = new ArcRotateCamera(
    "basic-camera",
    -1.16,
    1.16,
    80,
    new Vector3(0, 0, 0),
    scene
  );

  flatSpaceCamera.attachControl(canvas);

  const redBox = new TransformableCubeNode("red-box", scene, Color3.Red(), 10);
  redBox.position = new Vector3(-20, 5, 10);
  const greenSphere = new TransformableSphereNode(
    "green-sphere",
    scene,
    Color3.Green(),
    8
  );
  greenSphere.position = new Vector3(5, 5, 10);

  await SceneLoader.ImportMeshAsync("", duckUrl, undefined, scene);

  scene.debugLayer.show();
  return scene;
};
