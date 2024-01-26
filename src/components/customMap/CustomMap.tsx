import React, {useEffect} from 'react';
import {mapController} from "./mapController";

export const CustomMap = () => {
    useEffect(() => {
        mapController()
    }, [])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

