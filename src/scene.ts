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
} from "@babylonjs/core";
import { TransformableCubeNode, TransformableSphereNode } from "./helpers/mesh";
import { setupGroundMaterial } from "./helpers/material";

export const createScene = async (
  engine: Engine,
  canvas: HTMLCanvasElement
): Promise<Scene> => {
  // Create scene
  const scene = new Scene(engine);

  // Create materials for use
  const sceneMaterials = {
    matteGray: new StandardMaterial("matte-grey", scene),
    woodPanel: setupGroundMaterial(scene),
  };
  scene.clearColor = new Color4(184, 237, 255, 0.95);


  // Ambient light source
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.55;


  // Create ground and assignment of ground material
  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 100, height: 100 },
    scene
  );
  ground.material = sceneMaterials.woodPanel;


  // Create camera and attach control to the browser's Canvas element
  const flatSpaceCamera = new ArcRotateCamera(
    "basic-camera",
    -1.16,
    1.16,
    80,
    new Vector3(0, 0, 0),
    scene
  );
  flatSpaceCamera.attachControl(canvas);


  // Create meshes and assign materials
  const redBox = new TransformableCubeNode("red-box", scene, Color3.Red(), 10);
  redBox.position = new Vector3(-20, 5, 10);
  const greenSphere = new TransformableSphereNode(
    "green-sphere",
    scene,
    Color3.Green(),
    8
  );
  greenSphere.position = new Vector3(5, 5, 10);

  return scene;
};
