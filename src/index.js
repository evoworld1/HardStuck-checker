import eventHandlers from "./modules/eventHandlers";
import fetchApiData from "./modules/fetchApiData";
import appendDataToDOM from "./modules/appendApiData";

const initiateAll = () => {
  eventHandlers();
};

initiateAll();
