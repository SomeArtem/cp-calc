import { editPersonById, findPersonById, getData } from "./DataOperations";
import DisplayPers from "./DisplayPers";

export function DeleteWeaponFromUser(PersId, weaponNumber) {
  let Pers = findPersonById(PersId)    
  let persWeapArray=Pers.Weapons
  persWeapArray.splice(weaponNumber,1)
  editPersonById(PersId, 'Weapons', persWeapArray)
  let StoredAsPersons=getData()    
  DisplayPers(StoredAsPersons)
}