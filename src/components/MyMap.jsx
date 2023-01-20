import React, { Component } from "react";
import { Map, GeoJSON } from "react-leaflet";
//import mapData from "./../data/countries.json";
import mapData from "./../data/batiments.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";


//import { MapContainer } from 'react-leaflet/MapContainer'


class MyMap extends Component {
  state = { color: "#ffff00" };

  colors = ["green", "blue", "yellow", "orange", "grey"];

  componentDidMount() {
    console.log(mapData);
  }

  countryStyle = {
    fillColor: "red",
    fillOpacity: 1,
    position:'absolute',
    color: "black",
    weight: 2,
    height: '100%',
    width: "100%",
  };

  printMesssageToConsole = (event) => {
    console.log("Clicked");
  };

  changeCountryColor = (event) => {
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

  colorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  onEachCountry = (country, layer) => {
    //layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
   // const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name}`);
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My Map</h1>

        <Map 
         
        style={{ height: "80vh", backgroundColor: 'yellow' }}  zoom={2} center={[2.5, 10.5]}>
          <GeoJSON
          
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
          />
        </Map>

        <input
          type="color"
          value={this.state.color}
          onChange={this.colorChange}
        />
      </div>
    );
  }
}

export default MyMap;
