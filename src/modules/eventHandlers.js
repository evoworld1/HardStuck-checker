import fetchApiData from "./fetchApiData";
export let summonersName;

const eventHandlers = () => {
  const evaluateButton = document.querySelector(".search-btn");

  evaluateButton.addEventListener("click", () => {
    summonersName = document.querySelector(".search-box").value;
    fetchApiData();
  });
};

export default eventHandlers;
