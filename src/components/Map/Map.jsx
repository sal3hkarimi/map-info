import React from 'react';
import mapInfo from './coords.json'
import ImageMapper from 'react-image-mapper';
import mapImage from './world-political-maps.jpg'

export default function Map({ handleSelectCountry }) {
    return (
        <ImageMapper
            onClick={(evnt)=>handleSelectCountry(evnt.name)}
            className="map"
            src={mapImage}
            map={mapInfo}
            width={800}
            imgWidth={1000}
        />
    )
}
