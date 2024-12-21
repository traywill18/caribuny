"use client";

import React, { useState } from "react";
import Map, { NavigationControl, FullscreenControl, ScaleControl } from "react-map-gl";
import Navbar from "../components/navbar";
import 'mapbox-gl/dist/mapbox-gl.css';

const MapPage = () => {
  const [viewState, setViewState] = useState({
    latitude: 14.5401,
    longitude: -74.9676,
    zoom: 4.3,
  });

  const mapboxAccessToken = "pk.eyJ1IjoidHJheXdpbGwyMiIsImEiOiJjbTRqbmI2djMwNHhlMnBvN2J0cHlpYzI4In0.YW54NQU8ZlwC3u30PfzjuQ"

  console.log("Mapbox Access Token:", mapboxAccessToken); // Debugging log

  if (!mapboxAccessToken.startsWith("pk.")) {
    return <div>Error: Invalid Mapbox public access token.</div>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <h1 className="text-center text-3xl font-bold my-8 text-gray-800">
          Map of the Caribbean
        </h1>
        <div style={{ height: "70vh", width: "90%", margin: "0 auto" }}>
          <Map
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={mapboxAccessToken}
          >
            <NavigationControl position="top-left" />
            <FullscreenControl position="top-left" />
            <ScaleControl />
          </Map>
        </div>
      </main>
    </>
  );
};

export default MapPage;
