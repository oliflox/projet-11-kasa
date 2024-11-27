
import data from "../data/logements.json";

export const useLogement = (id) => {
  return data.find(logement => logement.id === id);
};

export default useLogement;