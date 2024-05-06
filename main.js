/*
	theme
*/
var relImg = document.querySelectorAll(".relimg");
// Selecting the root element
const rootTheme = document.querySelector(":root");
// selecting the button which will trigger the event
const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");
// change theme to light
lightBtn.addEventListener("click", () => {
   // changing the color from #0b32e7 to #f44336
   rootTheme.style.setProperty("--bg-color", "#fff");
   rootTheme.style.setProperty("--text-color", "#000");
   rootTheme.style.setProperty("--link-color", "#00f");
   rootTheme.style.setProperty("--side-background", "#dddddd");
   rootTheme.style.setProperty("--side-text", "#ffffff9e");
   rootTheme.style.setProperty("--sub", "#f00");
   // relImg.style.filter = "brightness(0%)";
   for (var i = 0; i < relImg.length; i++) {
      relImg[i].style.filter = "brightness(0%)";
   }
});
// change the theme to dark
darkBtn.addEventListener("click", () => {
   rootTheme.style.setProperty("--bg-color", "#000");
   rootTheme.style.setProperty("--text-color", "#fff");
   rootTheme.style.setProperty("--link-color", "#00f");
   rootTheme.style.setProperty("--side-background", "#484848");
   rootTheme.style.setProperty("--side-text", "#c4c4c463");
   rootTheme.style.setProperty("--sub", "#ffd700");
   // relImg.style.filter = "brightness(100%)";
   for (var i = 0; i < relImg.length; i++) {
      relImg[i].style.filter = "brightness(100%)";
   }
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
      )
   }else if (
      answer % 2 != 0 &&
      answer % 3 != 0 &&
      answer % 4 != 0 &&
      answer % 5 != 0 &&
      answer % 6 != 0 &&
      answer % 7 != 0 &&
      answer % 8 != 0 &&
      answer % 9 != 0 &&
      answer % 10 != 0 &&
      answer % 11 != 0 &&
      answer % 12 != 0 &&
      answer % 13 != 0 &&
      answer % 14 != 0 &&
      answer % 15 != 0 &&
      answer % 17 != 0 &&
      answer % 18 != 0 &&
      answer % 19 != 0 &&
      answer % 20 != 0
   ) {
      li.appendChild(
         document.createTextNode(`${answer} is not divisible by 2-20 numbers`)
      )
   }else{
      li.appendChild(document.createTextNode(`${answer} 🟰 `));
      if (answer % 2 == 0) {
         li.appendChild(document.createTextNode(`${2} `));
      } else if (answer % 3 == 0) {
         li.appendChild(document.createTextNode(`${3} `));
      }
      if (answer % 4 == 0) {
         li.appendChild(document.createTextNode(`${4} `));
      }
      if (answer % 5 == 0) {
         li.appendChild(document.createTextNode(`${5} `));
      }
      if (answer % 6 == 0) {
         li.appendChild(document.createTextNode(`${6} `));
      }
      if (answer % 7 == 0) {
         li.appendChild(document.createTextNode(`${7} `));
      }
      if (answer % 8 == 0) {
         li.appendChild(document.createTextNode(`${8} `));
      }
      if (answer % 9 == 0) {
         li.appendChild(document.createTextNode(`${9} `));
      }
      if (answer % 10 == 0) {
         li.appendChild(document.createTextNode(`${10} `));
      }
      if (answer % 11 == 0) {
         li.appendChild(document.createTextNode(`${11} `));
      }
      if (answer % 12 == 0) {
         li.appendChild(document.createTextNode(`${12} `));
      }
      if (answer % 13 == 0) {
         li.appendChild(document.createTextNode(`${13} `));
      }
      if (answer % 14 == 0) {
         li.appendChild(document.createTextNode(`${14} `));
      }
      if (answer % 15 == 0) {
         li.appendChild(document.createTextNode(`${15} `));
      }
      if (answer % 16 == 0) {
         li.appendChild(document.createTextNode(`${16} `));
      }
      if (answer % 17 == 0) {
         li.appendChild(document.createTextNode(`${17} `));
      }
      if (answer % 18 == 0) {
         li.appendChild(document.createTextNode(`${18} `));
      }
      if (answer % 19 == 0) {
         li.appendChild(document.createTextNode(`${19} `));
      }
      if (answer % 20 == 0) {
         li.appendChild(document.createTextNode(`${20} `));
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
      li.appendChild(document.createTextNode(`the input number is not greater than one!`))
   }else if (numberMan % divisibleBy == 0) {
      li.appendChild(document.createTextNode(`YES`))
   }else {
      li.appendChild(document.createTextNode(`NO`));
   }
}
