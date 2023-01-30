import React, { useState } from "react";
import { Map, GeoJSON } from "react-leaflet";
//import mapData from "./../data/countries.json";
import mapData from "./../data/batiments.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import { useEffect } from "react";
import Loading from "./Loading";
import routeJson from "./../data/route.json"


import data from '../data/Mydata';
//import features from '../data/batiments.json';
import L from "leaflet";
import { lochnessIcon, blueIcon, greenIcon, blackIcon, goldIcon, violetIcon} from './Icons';

//import { MapContainer } from 'react-leaflet/MapContainer'


const MyMap = () => {
  const state = { color: "#ffff00" };

  const colors = ["green", "blue", "yellow", "orange", "grey"]

  const [buildings, setbuildings] = useState([]);
  //  const [features, setfeatures] = useState([]);

  const load = () => {
    console.log("load");
    // setfeatures(features);


    for (let feature of mapData.features) {
      // const feature = mapData.features[i];
      feature.properties.persons = []
      const specificBuilding = data.find(
        (item) => feature.properties.name === item.departemnt
      );



      if (specificBuilding != null) {
        feature.properties.color = specificBuilding.color;
        feature.properties.persons = specificBuilding;
      }

      setbuildings(mapData.features)
    };
  }

  useEffect(() => {
    load();
  }, []);


  useEffect(() => {
    console.log('voici les building', buildings);
  }, [buildings])


  const buildingStyle = {
    fillColor: "white",
    fillOpacity: 1,
    position: 'absolute',
    color: "black",
    weight: 2,
    height: '100%',
    width: "100%",
  };



  const changeCountryColor = (event) => {
    event.target.setStyle({
      color: "green",
      fillColor: this.state.color,
      fillOpacity: 1,
    });
  };

  // onEachCountry = (country, layer) => {
  //   const countryName = country.properties.ADMIN;
  //   console.log(countryName);
  //   layer.bindPopup(countryName);

  //   layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)
  //   // const colorIndex = Math.floor(Math.random() * this.colors.length);
  //   // layer.options.fillColor = this.colors[colorIndex]; //0

  //   layer.on({
  //     click: this.changeCountryColor,
  //   });
  // };

  const colorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  const onEachFeature = (value, layer) => {
    var departemnt = value.properties.persons.departemnt
    if (departemnt === 'Département de Génie Mécanique') {
      layer.options.fillColor = 'blue';
    }
    else if (departemnt === 'Génie Industriel') {
      layer.options.fillColor = 'red';
    }
    else if (departemnt === 'Génie Informatique') {
      layer.options.fillColor = 'yellow';
    }

    const person = value.properties.persons;
    // const confirmedText = country.properties.confirmedText;
    if (value.properties.name !== null) {
      layer.bindPopup(`
      <div className="popup">
      <img src=${person.Avatar} alt="that is Pipo" className="imagePopup">
      <strong>Nom : </strong>${person.name} </br> 
      <strong>Description : </strong> ${person.description} </br> 
      <strong>Departement : </strong>${person.departemnt} </br>
      </div>
      `);

      layer.bindPopup(`
      <div className="popup">
      <img src=${person.Avatar} alt="that is Pipo" className="imagePopup">
      <strong>Nom : </strong>${person.name} </br> 
      <strong>Description : </strong> ${person.description} </br> 
      <strong>Departement : </strong>${person.departemnt} </br>
      </div>
      `);
    }
    else {
      layer.bindPopup(`désolé il n'y a aucune soutenance repertorié dans ce batiment pour le moment `)
    }



    // const popup = L.popup();

    // const html = `
    //   <div >
    //     <button onClick=${someCustomReactFunction}>View</button>
    //   </div>
    // `;

    // popup.setContent(html)

    //  layer.bindPopup(popup);


  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Map</h1>
      {buildings.length === 0 ? (
        <Loading />
      ) : (
        <Map

          style={{ height: "80vh", backgroundColor: 'yellow' }} zoom={2} center={[2.5, 10.5]}>
          <GeoJSON

            style={buildingStyle}
            data={mapData.features}
            onEachFeature={onEachFeature}
          />

          <GeoJSON

            style={buildingStyle}
            data={routeJson.features}
          // onEachFeature={onEachFeature}
          />

        </Map>
      )}

    </div>
  );
}

export default MyMap;
