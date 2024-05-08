/*
	theme
*/
var relImg = document.querySelectorAll(".relimg");
// Selecting the root element
const rootTheme = document.querySelector(":root");
// selecting the button which will trigger the event
const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");
// Function to update theme properties
const updateThemeProperties = (properties) => {
   Object.keys(properties).forEach((key) => {
      rootTheme.style.setProperty(key, properties[key]);
   });
};
// Event listener for the light theme button
lightBtn.addEventListener("click", () => {
   const lightThemeProperties = {
      "--bg-color": "#fff",
      "--text-color": "#000",
      "--link-color": "#00f",
      "--side-background": "#dddddd",
      "--side-text": "#ffffff9e",
      "--sub": "#f00",
   };
   updateThemeProperties(lightThemeProperties);
   relImg.forEach((img) => (img.style.filter = "brightness(0)"));
});
// Event listener for the dark theme button
darkBtn.addEventListener("click", () => {
   const darkThemeProperties = {
      "--bg-color": "#000",
      "--text-color": "#fff",
      "--link-color": "#00f",
      "--side-background": "#484848",
      "--side-text": "#c4c4c463",
      "--sub": "#ffd700",
   };
   updateThemeProperties(darkThemeProperties);
   relImg.forEach((img) => (img.style.filter = "brightness(100%)"));
});
/*
	divisibility calculation
*/
// selecting input and results
document.getElementById("calc").addEventListener("click", math);
function math() {
   // selecting the input
   const answer = document.getElementById("input").value;
   // selecting the results
   const result = document.getElementById("result");
   // create clear button
   document.getElementById("clear").addEventListener("click", clearResults);
   function clearResults() {
      li.remove();
      document.getElementById("input").value = null;
   }
   // creating individual elements for each result
   const li = document.createElement("li");
   result.appendChild(li);
   // divisibility
   if (answer <= 1) {
      li.appendChild(
         document.createTextNode("number must be greater than one")
      );
   } else {
      let isDivisible = true;
      for (let i = 2; i <= 20; i++) {
         if (answer % i == 0) {
            isDivisible = false;
            break;
         }
      }
      if (isDivisible) {
         li.appendChild(
            document.createTextNode(
               `${answer} is not divisible by 2-20 numbers`
            )
         );
      } else if (answer > 1) {
         li.appendChild(document.createTextNode(`${answer} = `));
         for (let i = 2; i <= 20; i++) {
            if (answer % i == 0) {
               li.appendChild(document.createTextNode(`${i} `));
            }
         }
      }
   }
}
// manual test
document.getElementById("calcMan").addEventListener("click", manualMan);
function manualMan() {
   const numberMan = document.getElementById("number").value;
   const divisibleBy = document.getElementById("divisibleBy").value;
   // selecting the results
   const resultMan = document.getElementById("resultMan");
   // create clear button
   document.getElementById("clearMan").addEventListener("click", clearResults);
   function clearResults() {
      li.remove();
      document.getElementById("number").value = null;
      document.getElementById("divisibleBy").value = null;
   }
   // creating individual elements for each result
   const li = document.createElement("li");
   resultMan.appendChild(li);
   if (numberMan <= 1 || divisibleBy <= 1) {
      li.appendChild(
         document.createTextNode(`the input number is not greater than one!`)
      );
   } else if (numberMan % divisibleBy == 0) {
      li.appendChild(document.createTextNode(`YES`));
   } else {
      li.appendChild(document.createTextNode(`NO`));
   }
}
