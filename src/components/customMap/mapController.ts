import mapboxgl from 'mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "mapbox-gl/dist/mapbox-gl.css"

import {initTriangle} from './layers/initTriangle'
import {coordinates} from "../utils/constants";
import {findCursorPosition, generateNewRectangleCoordinates} from "../helpers";
import {firstSquareBackground, firstSquareHoverBackground, secondSquareBackground} from "../utils/colors";
import {Point} from "../types";

mapboxgl.accessToken = 'pk.eyJ1IjoidmlrdG9yLWtvbnRha3QiLCJhIjoiY2xsZzdpaTMxMHFqazNrcXFpMGcweHV6MSJ9.NULl4gU0IMftD8Epjbi6pQ';

export const mapController = () => {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [73.366669, 54.983334],
        zoom: 10,
    });

    const Draw = new MapboxDraw({
        defaultMode: 'draw_polygon'
    });
    map.addControl(Draw, 'top-left');

    map.on('load', function() {
        map.addLayer(initTriangle(coordinates, "firstSquare", firstSquareBackground))

        map.on('mousemove', 'firstSquare', function (event) {
            map.getCanvas().style.cursor = 'pointer';
            map.setPaintProperty('firstSquare', 'fill-color', firstSquareHoverBackground);

            if(!map.getLayer('secondSquare')) {
                const cursorCoords: Point = [event.lngLat.lng, event.lngLat.lat]; // Получение координат курсора на карте
                const side = findCursorPosition(coordinates, cursorCoords); // Вызов модифицированной функции

                const newSquare = generateNewRectangleCoordinates(coordinates, side);
                map.addLayer(initTriangle(newSquare, 'secondSquare', secondSquareBackground))
            }
        });

        map.on('mouseleave', 'firstSquare', function (event) {
            map.getCanvas().style.cursor = '';
            map.setPaintProperty('firstSquare', 'fill-color', firstSquareBackground);

            if (map.getLayer('secondSquare')) {
                map.removeLayer('secondSquare');
                map.removeSource('secondSquare');
            }
        });
    });
}
