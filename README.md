# Running your local Babylon experience in VR

`git checkout 4-run-in-xr`

WebVR requires an SSL connection to work, so we'll stop our running web server (Ctrl+C in terminal) and run a script to serve the experience over HTTPS.

Run `npm run start:https`, and navigate to https://localhost:8080 in your web browser if it doesn't happen automatically. You may safely bypass the warning that this connection is insecure.

1. Establish a wired USB-C connection from Oculus to your computer.
2. In your Oculus device, a dialog should pop up asking to allow USB debugging. Select Allow or Always Allow.
3. Depending on the length of the USB-C cable you're using, you may want to enable WiFi connection to your device in Oculus Developer Hub. If you enable WiFi, be sure to disconnect your USB-C cable from your computer for the next step.
4. Reverse-forward the web server port. First run `adb devices` and confirm that only one device is listed, then run `adb reverse tcp:8080 tcp:8080`

## Debugging a scene _while_ in VR.

- In any Chromium browser, visit `chrome://inspect/#devices`.
- Casting via Oculus Developer Hub or Oculus Mobile App while debugging is often more comfortable than debugging en scene.
- leave XR mode (menu button on left controller) to explore the scene tree while in VR.
