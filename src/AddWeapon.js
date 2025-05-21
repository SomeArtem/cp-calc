import { editPersonById, findPersonById, getData } from "./DataOperations";
import DisplayPers from "./DisplayPers";
import weapons from "./weapons";

export default function AddWeapon(id){
  let PersonLookForWeapon=findPersonById(id)
  let PersonsWeapons=PersonLookForWeapon.Weapons
  let WeaponToAppendId=0
  let AllWeapons=''
  for (let i = 0; i < weapons.length; i++) {
    let element = weapons[i].id ? `<span>${weapons[i].id}. ${weapons[i].theName}</span>` : ''
    AllWeapons+=element   
  }

  let divPopup=document.createElement('div')
  divPopup.classList.add('divPopup')
  divPopup.innerHTML=`<div class="Weappons">${AllWeapons}</div>`
  document.getElementById('app').appendChild(divPopup)

  // let WeaponToAppendId=prompt(`Введите номер оружия:\n${AllWeapons}`);
  let inp=`<input id="weaponInput" type="text">`
  divPopup.innerHTML+=inp

  let button=document.createElement('button')
  button.innerText='кнопка'  
  button.onclick=()=>
    {
    WeaponToAppendId=Number(divPopup.querySelector('#weaponInput').value)
    let WeaponToAppend=weapons.find(weap=>weap.id==WeaponToAppendId)
      if (WeaponToAppend) {
        // alert(`вы хотите добавить ${JSON.stringify(WeaponToAppend)}`)
        // editPersonById(id,'Weapons',PersonsWeapons)    
        // PersonsWeapons.push(WeaponToAppend.theName)
        // divPopup.innerHTML=`<div>вы хотите добавить ${JSON.stringify(WeaponToAppend)}</div>`
        PersonsWeapons.push(WeaponToAppend.theName)
        editPersonById(id,'Weapons',PersonsWeapons)
        document.getElementById('app').removeChild(divPopup)
        let StoredAsPersons=getData()    
        DisplayPers(StoredAsPersons)
      }
    }  
  divPopup.appendChild(button)
  
  

}