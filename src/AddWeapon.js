import { editPersonById, findPersonById, getData } from "./DataOperations";
import DisplayPers from "./DisplayPers";
import weapons from "./weapons";

export default function AddWeapon(id){
  // let PersonLookForWeapon=findPersonById(id)
  // let PersonsWeapons=PersonLookForWeapon.Weapons
  // let WeaponToAppendId=0
  // let AllWeapons=''
  // for (let i = 0; i < weapons.length; i++) {
  //   let element = weapons[i].id ? `<span>${weapons[i].id}. ${weapons[i].theName}</span>` : ''
  //   AllWeapons+=element   
  // }

  // let divPopup=document.createElement('div')
  // divPopup.classList.add('divPopup')
  // divPopup.innerHTML=`<div class="Weappons">${AllWeapons}</div>`
  // document.getElementById('app').appendChild(divPopup)

  // let inp=`<input id="weaponInput" type="text">`
  // divPopup.innerHTML+=inp

  // let button=document.createElement('button')
  // button.innerText='кнопка'  
  // button.onclick=()=>
  //   {
  //   WeaponToAppendId=Number(divPopup.querySelector('#weaponInput').value)
  //   let WeaponToAppend=weapons.find(weap=>weap.id==WeaponToAppendId)
  //     if (WeaponToAppend) {
  //       PersonsWeapons.push(WeaponToAppend.theName)
  //       editPersonById(id,'Weapons',PersonsWeapons)
  //       document.getElementById('app').removeChild(divPopup)
  //       let StoredAsPersons=getData()    
  //       DisplayPers(StoredAsPersons)
  //     }
  //   }  
  // divPopup.appendChild(button)
  let PersonLookForWeapon=findPersonById(id)
  let PersonsWeapons=PersonLookForWeapon.Weapons
  let AppComponent=document.querySelector('#app')
  let AllWeapons=''
  for (let i = 0; i < weapons.length; i++) {
    AllWeapons += weapons[i].id ? `<span>${weapons[i].id}. ${weapons[i].theName}</span>` : ''
  }
  let div = document.createElement('div');
  div.classList.add('divPopup')
  let template=`
  <div class="weaponWrapper">  
    <div>Введите номер оружия чтобы добавить: </div>  
    <div class="Weappons" data-id="weaponsInPopup">
      ${AllWeapons}
    </div>
    <input data-id="weaponInput" type="text">
    <button data-id="okButton">кнопка</button>    
  </div>`
  div.innerHTML = template;
  const okButton = div.querySelector(`[data-id="okButton"]`);
  const weaponInput = div.querySelector(`[data-id="weaponInput"]`);
  okButton.onclick= () => {
    let WeaponToAppend=weapons.find(weap=>weap.id==weaponInput.value)
    if (WeaponToAppend) {
      PersonsWeapons.push(WeaponToAppend.theName)
      editPersonById(id,'Weapons',PersonsWeapons)
      let StoredAsPersons=getData()    
      DisplayPers(StoredAsPersons)
      AppComponent.removeChild(div)
    }
  };
  div.onclick=(e)=>{
    if(e.target==div){
      AppComponent.removeChild(div)
    }
  }
  AppComponent.appendChild(div);
  




}


