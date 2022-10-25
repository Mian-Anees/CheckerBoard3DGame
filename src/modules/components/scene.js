
import React from 'react'
// import { useFrame, useLoader } from '@react-three/fiber'
// import { SchoolDesk } from './schoolDesk.tsx'
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import * as THREE from "three";
// import { useDrag } from "react-use-gesture"
import { OrbitControls } from '@react-three/drei';
import { GLTF } from 'three-stdlib'
import { Kiwi } from './kiwi';
import { Avocado } from './avocado';
// export function Box(props) {
//   const { x } = props
//   const width = 700;
//   const height = 400
//   const [position, setPosition] = useState([x, 0, 0]);
//   const aspect = width / height;

//   const bind = useDrag(({ offset: [x, y] }) => {
//     console.log(x, y, '-------', position)
//     const [, , z] = position;
//     setPosition([-(x / aspect), -(y / aspect), z]);
//   }, { pointerEvents: true });

//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       {...bind()}
//       position={position}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color={hovered ? 'red' : 'orange'} />
//     </mesh>
//   )
// }


export const MainScene = () => {
  return <>
    <ambientLight />
    <pointLight position={[5, 5, 0]} intensity={4} />
    <OrbitControls />
    <CheckerBoard />
    <PlayersRender />
    {/* <Box x={5} />
    <Box x={2} /> */}
    {/* <SchoolDesk  /> */}
  </>
}



export function CheckerBoard() {
  console.log("render: <Chessboard />");
  const fields = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {fields.map((x) =>
        fields.map((y) => (
          <Box
            key={`(${x},${y})`}
            x={x}
            y={y}
            size={1}
            color={(x + y) % 2 === 0 ? "#fff" : "#000"}
          />
        ))
      )}
    </>
  );
};

export function Box({
  x,
  y,
  z,
  size,
  color,
}) {
  console.log(x, y, z, size, color)
  return (
    <group position={[x - 4, z || 0, y - 4]}>
      <mesh>
        <boxBufferGeometry attach="geometry" args={[size, 0, size]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};


//****************************** render army ****************************

export function PlayersRender() {
  const columnsP1 = [0, 1, 2];
  const rowsP1 = [0, 1, 2, 3, 4, 5, 6, 7]
  const columnsP2 = [7, 6, 5];
  const rowsP2 = [7, 6, 5, 4, 3, 2, 1, 0]

  return (
    <>
      {columnsP1.map((x) =>
        rowsP1.map((y) => (
          <CirlePlayers
            key={`(${x},${y})`}
            x={x}
            y={y}
            size={8}

          />
        ))
      )}

      {columnsP2.map((x) =>
        rowsP2.map((y) => (
          <CirlePlayers2
            key={`(${x},${y})`}
            x={x}
            y={y}
            size={8}
          />
        ))
      )}
    </>
  );
};

export function CirlePlayers({
  x,
  y,
  z,
  size,
}) {
  console.log(x, y, z, size)
  return (
    <Kiwi scale={size} position={[x - 4, z || 0, y - 4]} />
  );
};

export function CirlePlayers2({
  x,
  y,
  z,
  size,
}) {
  console.log(x, y, z, size)
  return (
    <Avocado scale={size} position={[x - 4, z || 0, y - 4]} />
  );
};