import {Point} from "../types";

export function findCursorPosition(rectangle: Point[], cursorCoords: Point) {
    const [x, y] = cursorCoords;
    const [topLeft, topRight, bottomRight, bottomLeft] = rectangle;

    // Вектор, представляющий сторону прямоугольника
    const side1 = [topRight[0] - topLeft[0], topRight[1] - topLeft[1]];
    const side2 = [bottomRight[0] - topRight[0], bottomRight[1] - topRight[1]];
    const side3 = [bottomLeft[0] - bottomRight[0], bottomLeft[1] - bottomRight[1]];
    const side4 = [topLeft[0] - bottomLeft[0], topLeft[1] - bottomLeft[1]];

    // Вектора, представляющие расстояния от углов прямоугольника до курсора
    const vec1 = [x - topLeft[0], y - topLeft[1]];
    const vec2 = [x - topRight[0], y - topRight[1]];
    const vec3 = [x - bottomRight[0], y - bottomRight[1]];
    const vec4 = [x - bottomLeft[0], y - bottomLeft[1]];

    // Проверка нахождения курсора на каждой стороне прямоугольника
    const dist1 = vec1[0] * side1[0] + vec1[1] * side1[1];
    const dist2 = vec2[0] * side2[0] + vec2[1] * side2[1];
    const dist3 = vec3[0] * side3[0] + vec3[1] * side3[1];
    const dist4 = vec4[0] * side4[0] + vec4[1] * side4[1];

    // Поиск наименьшего расстояния - ближайшей стороны
    const minDist = Math.min(dist1, dist2, dist3, dist4);
    if (minDist === dist1) {
        return "слева";
    } else if (minDist === dist2) {
        return "сверху";
    } else if (minDist === dist3) {
        return "справа";
    } else {
        return "снизу";
    }
}
