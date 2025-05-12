import type { Row } from "../types";
import { Road } from "./Road"
import { Car } from "./Car";

// CarLane component receives a row data object as a prop, which contains cars to be rendered
type Props = {
    rowIndex: number;
    rowData: Extract<Row, { type: "car" }>;
};

export function CarLane({ rowIndex, rowData }: Props) {
    return (
        // wraps cars in a Road component and maps and maps over the vehicle's array to render each car
        <Road rowIndex={rowIndex}>
            {rowData.vehicles.map((vehicle, index) => (
                <Car
                    key={index}
                    rowIndex={rowIndex}
                    initialTileIndex={vehicle.initialTileIndex}
                    direction={rowData.direction}
                    speed={rowData.speed}
                    color={vehicle.color}
                />
            ))}
        </Road>
    )
}