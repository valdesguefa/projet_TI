//import papa from "papaparse";
import { features } from ".././data/batiments.json";
import data from "../data/Mydata";
//    this.setState(features);

class LoadbuildingsTask {
 // covidUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  setState = null;

  load = (setState) => {
    this.setState = setState;

    // papa.parse(this.covidUrl, {
    //   download: true,
    //   header: true,
    //   complete: (result) => this.#processCovidData(result.data),
    // });

    this.#processCovidData(data);

  };

  #processCovidData = (building) => {
    for (let i = 0; i < features.length; i++) {
      const country = features[i];
      //console.log(country);
      const specificBuilding = building.find(
        (item) => country.properties.name === item.departemnt
      );

      country.properties.confirmed = 0;
      country.properties.confirmedText = 0;

      if (specificBuilding != null) {
        country.properties.Avatar      = building.Avatar
        country.properties.description = building.description
        country.properties.departemnt  = building.departemnt
        country.properties.namePerson        = building.name
      }
      
    }

    this.setState(features);
  };


  #formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadbuildingsTask;
