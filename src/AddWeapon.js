import { editPersonById, findPersonById } from "./DataOperations";
import weapons from "./weapons";

export default function AddWeapon(id){
  let PersonLookForWeapon=findPersonById(id)
  let PersonsWeapons=PersonLookForWeapon.Weapons
  let AllWeapons=''
  for (let i = 0; i < weapons.length; i++) {
    const element = `${weapons[i].theName}, `;
    AllWeapons+=element    
  }
  let WeaponToAppendName= prompt(`Введите название оружия:\n${AllWeapons}`);
  let WeaponToAppend=weapons.find(weap=>weap.theName.toLowerCase()==WeaponToAppendName.toLowerCase())
  if (WeaponToAppend) {
    alert(`вы хотите добавить ${JSON.stringify(WeaponToAppend)}`)
    PersonsWeapons.push(WeaponToAppend.theName)
    editPersonById(id,'Weapons',PersonsWeapons)    
  }
}