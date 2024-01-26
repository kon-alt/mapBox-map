import {Point} from "../../types";

export const initTriangle = (coordinates: Point[], idLayer: string, fullColor: string): any => {
  return {
    "id": idLayer,
    "type": "fill",
    "source": {
      "type": "geojson",
      "data": {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            coordinates
          ]
        }
      }
    },
    "layout": {},
    "paint": {
      "fill-color": fullColor,
      "fill-outline-color": "rgba(200, 100, 240, 1)"
    }
  }
}
