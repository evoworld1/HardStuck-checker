import fetchApiData from "./fetchApiData";
export let summonersName;

const eventHandlers = () => {
  const evaluateButton = document.querySelector(".search-btn");
  const displayResults = document.querySelector(".search-results");
  const searchModule = document.querySelector(".search-module-container");
  evaluateButton.addEventListener("click", () => {
    summonersName = document.querySelector(".search-box").value;
    fetchApiData();
    searchModule.classList.add("hidden");
    displayResults.classList.add("revealed");
  });
};

export default eventHandlers;
