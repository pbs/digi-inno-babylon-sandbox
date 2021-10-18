# 3: Using External Assets

`git checkout 3-external-assets`

All of your scene's contents may not be created in the code. Chances are high that you will be working with external assets created in more sophisticated and specialized computer graphics software like [Blender](https://www.blender.org/), or photographic textures, or video.


Babylon.js has robust support for external assets. This project doesn't need need anything extra to load an external image[*]. In order to load an external mesh, you've got to have `@babylonjs/loaders/{loaderName}` imported where the loader name matches the file extension you wish to load. This branch contains the following updates:
    - a new file, `src/assets/duck.gltf`. **glTF**, or GL Transmission Format, is an open standard for 3D scenes and models. A Babylon.js scene may use multiple 3D file formats in the same scene.
    - `src/scene.ts` is updated with Babylon.js's glTF loader imported and `duck.gltf` loaded into the scene and placed center stage.


The duck new to this scene is a [Public Domain CC0](https://creativecommons.org/share-your-work/public-domain/cc0/) asset, usable without restriction. The opportunities for varied 3D experiences in public media grow proportionally with the body of public domain 3D assets.

[*] Several examples of external images being loaded can be found in `helpers/material.ts`.