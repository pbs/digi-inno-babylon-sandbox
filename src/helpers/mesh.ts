import {
  TransformNode,
  InspectableType,
  MeshBuilder,
  Mesh,
  StandardMaterial,
  Color3,
  Scene,
} from "@babylonjs/core";

enum shapeArgumentMapping {
  // Incomplete idea. Enum w/ meshType.
  box = "CreateBox",
  sphere = "CreateSphere",
  cylinder = "CreateCylinder",
  plane = "CreatePlane",
  torus = "CreateTorus",
}

export class TransformableCubeNode extends TransformNode {
  _mesh: Mesh;
  _color!: Color3;

  constructor(name: string, scene: Scene, color: Color3, size: number) {
    super(name, scene);

    this._mesh = MeshBuilder.CreateBox(name, { size: size }, scene);
    this._mesh.parent = this;
    this._mesh.material = new StandardMaterial("material", scene);

    this.color = color;

    this.inspectableCustomProperties = [
      {
        label: "color",
        propertyName: "color",
        type: InspectableType.Color3,
      },
    ];
  }

  set color(value) {
    this._color = value;
    (this._mesh!.material! as StandardMaterial).diffuseColor = value;
  }

  get color() {
    return this._color;
  }
}

export class TransformableSphereNode extends TransformNode {
  _mesh: Mesh;
  _color!: Color3;

  constructor(name: string, scene: Scene, color: Color3, size: number) {
    super(name, scene);

    this._mesh = MeshBuilder.CreateSphere(
      name,
      { segments: 32, diameter: size },
      scene
    );
    this._mesh.parent = this;
    this._mesh.material = new StandardMaterial("material", scene);

    this.color = color;

    this.inspectableCustomProperties = [
      {
        label: "color",
        propertyName: "color",
        type: InspectableType.Color3,
      },
    ];
  }

  set color(value) {
    this._color = value;
    (this._mesh!.material! as StandardMaterial).diffuseColor = value;
  }

  get color() {
    return this._color;
  }
}
