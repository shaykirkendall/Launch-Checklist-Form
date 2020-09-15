// Write your JavaScript code here!

 window.addEventListener("load", function() {
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let items = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let ready = true;
      //let pilotStatus = document.getElementById("pilotStatus");
      //let cargoStatus =  document.getElementById("copilotStatus");

      let pilotName = document.querySelector("input[name=pilotName]").value;
		let copilotName = document.querySelector("input[name=copilotName]").value;
		let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
		let cargoMass = document.querySelector("input[name=cargoMass]").value;
      

      if (pilotName === null || pilotName === "") {
         alert("All fields are requried!");
         //return false;
         //event.preventDefault();
      } if (copilotName === null || copilotName === "") {
         alert("All fields are required!");
         //return false;
         //event.preventDefault();
      } if (isNaN(fuelLevel) || fuelLevel === "") {
         alert("Make sure to enter valid information for each field!");
         //return false;
         //event.preventDefault();
      } if (isNaN(cargoMass) || cargoMass === "") {
         alert("Make sure to enter valid information for each field!");
         //return false;
         //event.preventDefault();
      
      } else {
   

      items.style.visibility = "visible";
      
      document.getElementById("pilotStatus").innerHTML = `Pilot  ${ pilotName}  Ready`;
      
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${ copilotName + " " }Ready`;

      if (fuelLevel < 10000) {
         ready = false;
         fuelStatus.innerHTML = "Fuel level too low for launch";
         //event.preventDefault();
      } else {
         fuelStatus.innerHTML = "Fuel level high enough for launch";
         //event.preventDefault();
      }

      if (cargoMass > 10000 ) {
         ready = false;
         cargoStatus.innerHTML = "Cargo mass too high for launch";
         //event.preventDefault();
      } else {
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
         //event.preventDefault();
      }

      if (ready) {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         retrieveData();
      } else {
         items.style.visibility = "visible";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
            }

         }
      });
   });

   function retrieveData() {

      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function (response) {
         response.json().then( function(json) {
            let div = document.getElementById("missionTarget");
            div.innerHTML = `
               <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[0].name}</li>
                     <li>Diameter: ${json[0].diameter}</li>
                     <li>Star: ${json[0].star}</li>
                     <li>Distance from Earth: ${json[0].distance}</li>
                     <li>Number of Moons: ${json[0].moons}</li>
                  </ol>
                  <img src="${json[0].image}"></img>
               `;
         });
      });
   }
//});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
