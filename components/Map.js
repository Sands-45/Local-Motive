import React, { useRef, useEffect } from "react";
import tw from "twrnc";
import MapView, { Marker } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import MapViewDirections from "react-native-maps-directions";

const Map = () => {
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude:-26.25875510783432 ,
        longitude: 28.060163299999974,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    ></MapView>
  );
};

export default Map;
