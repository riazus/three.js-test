import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

interface BoxProps {
  position: number[];
}

function Box(props: BoxProps) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // @ts-ignore
  useFrame((_, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default Box;
