import React from "react";
import Rive from "@rive-app/react-canvas";
import Animation from "../assets/Lens.riv";

import { useRive } from "@rive-app/react-canvas";

export default function Lens() {
  const { rive, RiveComponent } = useRive({
    src: Animation,
    stateMachines: "onPress",
    autoplay: false,
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}
