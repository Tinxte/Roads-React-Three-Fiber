import type { Row } from "./types";

// The metadata is an array of objects that contains info about each row object
export const rows: Row[] = [
    // {
    //     type: "forest",
    //     trees: [
    //         { tileIndex: -3, height: 50 },
    //         { tileIndex: 2, height: 30 },
    //         { tileIndex: 5, height: 50 },
    //     ],
    // },
    {
        type: "car",
        // true means cars are going to the right, false to the left
        direction: false,
        // how many units per second car travels
        speed: 1,
        // metadata for each tile in the lane
        vehicles: [{ initialTileIndex: 2, color: 0xff0000 }],
    },

];