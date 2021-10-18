# Babylon.js / WebXR minimal setup repo

Requirements for local dev:

- Google Chrome
- [NodeJS 14+](https://nodejs.org/en/download/)

Debugging in VR:
- [Oculus Developer Hub](https://developer.oculus.com/documentation/tools/odh/) + [ADB](https://developer.android.com/studio/releases/platform-tools)
- [Oculus Mobile App (optional)](https://support.oculus.com/articles/getting-started/getting-started-with-quest-2/install-oculus-app-phone/)

---

## Getting Started

* Before anything, make sure your Node.js dependencies are installed: `npm install`.
* Once dependencies are installed, run `git checkout 1-get-started` and `npm run start`.
    This will start serving our example application. In the case that your web browser doesn't automatically navigate to http://localhost:8080, please visit this address.

A basic Babylon.js scene with ground, light source, and a couple of basic meshes. You can use the mouse to click and change the camera angle or right click to pan.

---

### Inspector

`git checkout 2-inspector`

Left pane is the Scene Explorer. Clicking the eye shows or hides a node in the scene, clicking the square to the left or the eye will highlight it.

Right pane is the Inspector. Its context depends on the node or material selected in the scene explorer.

If you select either green sphere or red box in the Scene Explorer, you can customize one of the properties that has been exposed to the Inspector.

NB: For those using React, having `import "@babylonjs/inspector";` in scope will prevent a production build from being created even if the Babylon debug layer is not used.

---

### Loading External Assets

`git checkout 3-external-assets`

Outside of models created with the Mesh Builder, we also work with external assets in creating a scene.

Babylon has really robust external asset support. We can find examples of their use in `helpers/material` and `helpers/mesh`. In order to load an external image, we don't need anything extra. In order to load an external mesh, you've got to have `@babylonjs/loaders/{loaderName}` imported in the local scope of whatever file you're loading in.

[*] You can load assets directly from the web, but that may come with tradeoffs with respect to load time and remote object availability.

---

## Running your local Babylon project in VR

`git checkout 4-run-in-xr`

WebVR requires an SSL connection to work, so we'll stop our running web server (Ctrl+C in terminal) and run a script to serve the experience over HTTPS.

Run `npm run start:https`, and navigate to https://localhost:8080 in your web browser if it doesn't happen automatically. You may safely ignore the warning that this connection is insecure.

1. Establish a wired USB-C connection from Oculus to your computer.
2. A box should pop up asking to allow USB debugging. Select Allow or Always Allow.
3. Enable or disable wifi to your device depending on a variety of factors. Length of the USB cable you're using is probably one of them.
4. Reverse-forward ports. First run `adb devices` to be sure that you only have one device, then `adb reverse tcp:8080 tcp:8080`

---

### Debugging a scene _while_ in VR.

- In any Chromium browser, visit `chrome://inspect/#devices`.
- Casting via Oculus Developer Hub or Oculus Mobile App while debugging is often more comfortable than debugging en scene.
- leave XR mode (menu button on left controller) to explore the scene tree while in VR.

---

### Getting data from the XR device and Misc.

- checkout `5-logging-xr-input-and-misc-control`.
