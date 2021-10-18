# 2: The Inspector

`git checkout 2-inspector`

The developers of Babylon.js have provided a set of tools to help us reason about the experiences we're creating in one place. In this branch, we import the inspector and make the scene show the debug layer. The code in `src/scene.ts` has been updated with corresponding comments[*].

The Scene Explorer on the left pane lays out all of the scene's contents in a nested list. Under Nodes, once again, we have our meshes, our light source, and our camera. Clicking the eye to the right of an node's name shows or hides it in the scene; clicking the square to the left or the eye will highlight it. Under Materials and Textures, we see the materials and textures that the scene is using.

The Inspector on the right pane provides more information about the selected node, material, or texture. We can also review and edit the properties of a selected item. In editing an item's properties by these means, we can achieve quick composition of a scene by means other than code.


[*]NB: For those using React, having `import "@babylonjs/inspector";` in scope will prevent a production build from being created even if the Babylon debug layer is not used.
