import * as THREE from "three";
import { useRef } from "react";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";
import useVehicleAnimation from "../hooks/useVehicleAnimation.tsx";

type Props = {
    rowIndex: number;
    initialTileIndex: number;
    direction: boolean;
    speed: number;
    color: THREE.ColorRepresentation;
};

export function Car({
    rowIndex,
    initialTileIndex,
    direction,
    speed,
    color,
}: Props) {

    //Animation

    const car = useRef<THREE.Group>(null);
    useVehicleAnimation(car, direction, speed);

    return (
        <group
        position-x={initialTileIndex * tileSize}
        // if car goes left, we rotate by 180 (180deg is equivalent to PI)
        rotation-z= {direction ? 0 : Math.PI}
        // bind useRef to group element
        ref={car}
        >
            <mesh position={[0, 0, 12]} castShadow receiveShadow>
                <boxGeometry args={[60, 30, 15]} />
                <meshLambertMaterial color={color} flatShading />
            </mesh>
            <mesh position={[-6, 0, 25.5]} castShadow receiveShadow>
                <boxGeometry args={[33, 24, 12]} />
                <meshLambertMaterial color={0xffffff} flatShading />
            </mesh>
            <Wheel x={-18} />
            <Wheel x={18} />
            </group>
    )
}