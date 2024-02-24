import mapboxgl from 'mapbox-gl';
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xhdmthaGl0cml5IiwiYSI6ImNsYnpmNmV5cTBiMHIzbnFxejhibXJqd3MifQ.kaeD3uS6BI6qF1wV0w4lrw';

const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-93.74, 30.09],
            },
            properties: {
                orderNumber: 1200554,
                orderType: 'Casing',
                info: [
                    {
                        name: 'Footage',
                        value: '8,190',
                    },
                    {
                        name: 'Joints',
                        value: '260',
                    },
                    {
                        name: 'Status',
                        value: 'Ready',
                        codeValue: 1,
                    },
                ],
            },
        },
    ],
};

export const Map = ({ sx }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-93.745);
    const [lat, setLat] = useState(30.104);
    const [zoom, setZoom] = useState(9);

    const initMap = () => {
        if (!map.current && mapContainer.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/slavkahitriy/clrmalkgr004f01pn3uz860dl',
                center: [lng, lat],
                zoom: zoom,
            });

            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            });

            for (const feature of geojson.features) {
                const el = document.createElement('div');
                el.className = 'marker';

                new mapboxgl.Popup({ closeOnClick: false })
                    .setLngLat(feature.geometry.coordinates)
                    .setHTML(
                        `<div class='marker-wrapper'>
                            <div class='marker-header'>
                                <div class="marker-header-icon"></div>
                                <div class="marker-header-item">
                                    <div class="marker-header-item-value">${feature.properties.orderNumber}</div>
                                    <div class="marker-header-item-name">Order</div>
                                </div>
                                <div class="marker-header-item">
                                    <div class="marker-header-item-value">${feature.properties.orderType}</div>
                                    <div class="marker-header-item-name">Type</div>
                                </div>
                            </div>
                            <div class='marker-content'>
                                <div class='marker-item'>
                                    <div class='marker-item-value'>${feature.properties.info[0].value}</div>
                                    <div class='marker-item-name'>${feature.properties.info[0].name}</div>
                                </div>
                                <div class='marker-item'>
                                   <div class='marker-item-value'>${feature.properties.info[1].value}</div>
                                    <div class='marker-item-name'>${feature.properties.info[1].name}</div>
                                </div>
                                <div class='marker-item'>
                                    <div class="marker-item-box">
                                        <div class='marker-item-value'>${feature.properties.info[2].value}</div>
                                        <div class='marker-item-value marker-item-circle'></div>
                                    </div>
                                    <div class='marker-item-name'>${feature.properties.info[2].name}</div>
                                </div>
                            </div>
                            <div class="marker-footer">
                                <div class="marker-footer-icon"></div>
                                <div class="marker-footer-content">
                                    <div class="marker-footer-address">2800 West Broadway Dr. Houston, Tx</div>
                                    <div class="marker-footer-time">11.05.2023 @ 8:00 AM</div>
                                </div>
                                <button type="button" class="marker-footer-btn"></button>
                            </div>
                        </div>
                        `
                    )
                    .addTo(map.current);
            }
        }
    };

    useEffect(() => {
        const tempInterval = setInterval(() => {
            if (map.current) clearInterval(tempInterval);
            else initMap();
        }, 100);

        return () => clearInterval(tempInterval);
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                ...sx,
            }}
            ref={mapContainer}
        />
    );
};
