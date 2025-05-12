import { tilesPerRow, tileSize } from "../constants";

type Props = {
    rowIndex: number;
    children?: React.ReactNode;
};

export function Grass({ rowIndex, children }: Props) {
    return (
        // Group element is a container that can hold multiple 3D elements and apply transformations to all of them at once
        <group position-y={rowIndex * tileSize}>
            {/* Grass models */}
            <mesh>
                <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
                <meshLambertMaterial color={0xbaf455} flatShading />
            </mesh>
            {/* Children passed into the grass component will render below*/}
            {children}
        </group>
    )
}
