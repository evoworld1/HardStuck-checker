const api_key = "RGAPI-353f6eff-7c8a-4d86-ab39-23c28f14a882";
const userInput = document.querySelector(".search-box");

const getSummonerName = () => {
  userInput.addEventListener("change", (e) => {
    userInput.textContent = e.target.value;
    const summonerName = userInput.textContent;
    console.log(summonerName);
  });
};

getSummonerName();
