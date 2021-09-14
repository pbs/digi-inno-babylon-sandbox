import { StandardMaterial, Scene, Texture } from "@babylonjs/core";
import woodAOUrl from "../assets/textures/wood-floor/WoodFloor043_1K_AmbientOcclusion.jpg";
import woodDiffuseUrl from "../assets/textures/wood-floor/WoodFloor043_1K_Color.jpg";
import woodNormalUrl from "../assets/textures/wood-floor/WoodFloor043_1K_Normal.jpg";

export const setupGroundMaterial = (scene: Scene): StandardMaterial => {
  const woodPanel = new StandardMaterial("wood-panel", scene);
  woodPanel.ambientTexture = new Texture(woodAOUrl, scene);
  (woodPanel.ambientTexture as Texture).uScale = 20;
  (woodPanel.ambientTexture as Texture).vScale = 20;

  woodPanel.diffuseTexture = new Texture(woodDiffuseUrl, scene);
  (woodPanel.diffuseTexture as Texture).uScale = 20;
  (woodPanel.diffuseTexture as Texture).vScale = 20;

  woodPanel.bumpTexture = new Texture(woodNormalUrl, scene);
  (woodPanel.bumpTexture as Texture).uScale = 20;
  (woodPanel.bumpTexture as Texture).vScale = 20;

  return woodPanel;
};
