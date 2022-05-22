import appendDataToDOM from "./appendApiData";
import { summonersName } from "./eventHandlers";

const fetchApiData = async () => {
  const api_key = "api_key=RGAPI-adc97b60-8b0e-4820-8a7c-d673f88be6f6";

  let getPlayerDataBySummonersName;
  let playerEncryptedSummonerId;
  let getSummonersDetailedInfo;

  getPlayerDataBySummonersName = await fetch(
    `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonersName}?${api_key}`
  );

  getPlayerDataBySummonersName = await getPlayerDataBySummonersName.json();

  playerEncryptedSummonerId = getPlayerDataBySummonersName.id;

  getSummonersDetailedInfo = await fetch(
    `https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerEncryptedSummonerId}?${api_key}`
  );

  getSummonersDetailedInfo = await getSummonersDetailedInfo.json();
  console.log(getSummonersDetailedInfo[0].losses);
  appendDataToDOM(getSummonersDetailedInfo);
};

export default fetchApiData;
