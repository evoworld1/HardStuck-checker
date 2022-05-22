import fetchApiData from "./fetchApiData";
export let summonersName;

const eventHandlers = () => {
  const userInput = document.querySelector(".search-box");
  const evaluateButton = document.querySelector(".search-btn");

  userInput.addEventListener("change", (e) => {
    summonersName = e.target.value;
  });

  evaluateButton.addEventListener("click", () => {
    fetchApiData();
  });
};

export default eventHandlers;
