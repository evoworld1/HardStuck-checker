const init = () => {
  const api_key = "RGAPI-353f6eff-7c8a-4d86-ab39-23c28f14a882";
  let summonerName;

  const getSummonerName = () => {
    const userInput = document.querySelector(".search-box");
    const evaluateButton = document.querySelector(".search-btn");

    evaluateButton.addEventListener("click", (e) => {
      userInput.textContent = e.target.value;
      summonerName = userInput.textContent;
      console.log(summonerName);
    });
  };

  getSummonerName();

  const getApiData = () => {
    const evaluateButton = document.querySelector(".search-btn");
  };
};

init();

export default init;
