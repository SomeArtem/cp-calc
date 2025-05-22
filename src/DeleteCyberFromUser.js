import { editPersonById, findPersonById, getData } from "./DataOperations";
import DisplayPers from "./DisplayPers";

export function DeleteCyberFromUser(PersId, cyberNumber) {
  let Pers = findPersonById(PersId)    
  let persCybrArray=Pers.Cybernetics
  persCybrArray.splice(cyberNumber,1)
  editPersonById(PersId, 'Cybernetics', persCybrArray)
  let StoredAsPersons=getData()    
  DisplayPers(StoredAsPersons)
}