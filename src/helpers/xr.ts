import { Scene, Mesh, WebXRDefaultExperience, Vector3 } from "@babylonjs/core";

export const initXR = async (
  groundMesh: Mesh,
  scene: Scene
): Promise<WebXRDefaultExperience> => {
  const defaultExperience = await scene.createDefaultXRExperienceAsync({
    floorMeshes: [groundMesh],
  });
  const experience = defaultExperience.baseExperience;

  experience.camera.position = new Vector3(0, 0, -5);

  defaultExperience.input.xrCamera.onViewMatrixChangedObservable.add(
    (eventData) => {
      const t = new Date().getMilliseconds();
      t % 500 == 0 ? console.log(eventData) : null;
    }
  );

  return defaultExperience;
};
