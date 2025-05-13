import { tilesPerRow, tileSize } from "../constants";

type Props = {
    rowIndex: number;
    children?: React.ReactNode;   
};

// Road component serves as a container for cars on the road
export function Road({ rowIndex, children }: Props) {
    return (
        <group position-y={rowIndex * tileSize}>
            <mesh receiveShadow>
                <planeGeometry args={[tilesPerRow * tileSize, tileSize]} />
                <meshLambertMaterial color={0x454a59} flatShading />
            </mesh>
            {/* CarLane and TruckLane components pass in vehicles as children */}
            {children}
        </group>
    )
}