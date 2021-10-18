# 1: Getting Started

`git checkout 1-get-started`

A basic Babylon.js scene with ground, light source, and a couple of basic meshes. You can use the mouse to click and change the camera angle or right click to pan.

In 3D terms, a **scene** is the fundamental container for 3D objects. It's a collection of **meshes**, **light sources**, **materials**, at least one **camera**, and their positions and orientation in 3D space. If this concept is brand new to you, it may be helpful to think of a 3D scene as a stage that needs to be lit, designed, and composed with actors, props, and cameras.

**Meshes**, sometimes called **geometries** or **models** interchangably, are 3D objects that are part of a scene.

**Materials** are aesthetic properties that can be assigned to meshes. They can be as simple as solid colors, but they can also be photographic **textures** or otherwise richly detailed.

**Light sources** illuminate the contents of a scene. We'll be working with a single light source through this exercise.

**Cameras** display a scene, framing content for a viewer. A camera's position and orientation can be fixed, automated, or user-controlled. In XR experiences, the camera is often manipulated by a user's physical action, such as turning one's head in VR, or pointing one's mobile device in AR.

In our browser, our meshes are the wood-textured ground and two different-colored shapes. The camera is the lens through which we view the scene, and the fact that we can see at all is evidence of some light source.

Our source code also confirms the presence of these elements: in `src/scene.ts`, we can get a feel for how this scene was created[*]. Comments in the code point out where we create an ambient light source, materials, the ground, meshes, and a camera.



[*]A note: `src/helpers/mesh.ts` and `src/helpers/material.ts` contain some convenience functions for creating meshes and materials. We won't be diving into this in great detail.