import {Point} from "../types";

export function generateNewRectangleCoordinates(oldRectangle: Point[], entrySide: string): Point[] {
    const [p1, p2, p3, p4, p5] = oldRectangle;
    let newRectangle: Point[] = [];

    const offset = 0.105; // Небольшой отступ

    if (entrySide === "справа") {
        newRectangle = [
            [p1[0] + offset, p1[1]],
            [p2[0] + offset, p2[1]],
            [p3[0] + offset, p3[1]],
            [p4[0] + offset, p4[1]],
            [p5[0] + offset, p5[1]]
        ];
    } else if (entrySide === "слева") {
        newRectangle = [
            [p1[0] - offset, p1[1]],
            [p2[0] - offset, p2[1]],
            [p3[0] - offset, p3[1]],
            [p4[0] - offset, p4[1]],
            [p5[0] - offset, p5[1]]
        ];
    } else if (entrySide === "снизу") {
        newRectangle = [
            [p1[0], p1[1] - offset],
            [p2[0], p2[1] - offset],
            [p3[0], p3[1] - offset],
            [p4[0], p4[1] - offset],
            [p5[0], p5[1] - offset]
        ];
    } else if (entrySide === "сверху") {
        newRectangle = [
            [p1[0], p1[1] + offset],
            [p2[0], p2[1] + offset],
            [p3[0], p3[1] + offset],
            [p4[0], p4[1] + offset],
            [p5[0], p5[1] + offset]
        ];
    }

    return newRectangle;
}
