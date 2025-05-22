import combatImplants from "./combatImplants";
import { editPersonById, findPersonById, getData } from "./DataOperations";
import DisplayPers from "./DisplayPers";


export default function AddCyber(id){
  let PersonLookForCyber=findPersonById(id)
  let PersonsCyber=PersonLookForCyber.Cybernetics ? PersonLookForCyber.Cybernetics : []
  let AppComponent=document.querySelector('#app')
  let AllImplants=''
  for (let i = 0; i < combatImplants.length; i++) {
    AllImplants += combatImplants[i].id ? `<span>${combatImplants[i].id}. ${combatImplants[i].theName}</span>` : ''
  }
  let div = document.createElement('div');
  div.classList.add('divPopup')
  let template=`
  <div class="weaponWrapper">  
    <div>Введите номер импланта чтобы добавить: </div>  
    <div class="Weappons" data-id="weaponsInPopup">
      ${AllImplants}
    </div>
    <input data-id="cyberInput" type="text">
    <button data-id="okButton">кнопка</button>    
  </div>`
  div.innerHTML = template;
  const okButton = div.querySelector(`[data-id="okButton"]`);
  const cyberInput = div.querySelector(`[data-id="cyberInput"]`);
  okButton.onclick= () => {
    let CyberToAppend=combatImplants.find(weap=>weap.id==cyberInput.value)
    if (CyberToAppend) {
      PersonsCyber.push(CyberToAppend.theName)
      editPersonById(id,'Cybernetics',PersonsCyber)
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
/*
[{"id":1747753083234,"Weapons":["Hand","Leg","Axe Топор","Colt .45 Peacemaker"],"Cybernetics":[],"hp":39,"age":"33","headSP":"20","torsoSP":13,"rightHandSP":"14","leftHandSP":"14","rightLegSP":"20","leftLegSP":"20","persName":"Leila Lates","int":"10","ref":"10","tec":"5","cool":"8","att":"7","luck":"5","ma":"6","body":"5","emp":"4","Streetdeal":"7","ResistTortureDrugs":"3","Streetwise":"3","PersuasionFastTalk":"6","AwarenessNotice":"6","Chemistry":"3","DodgeEscape":"5","Handgun":"3","OperateHeavyMachinery":"3","Forgery":"4","PickLock":"6","PickPocket":"3"},{"id":1747759977095,"Weapons":["Hand","Leg","Armalite 44"],"Cybernetics":[],"hp":35,"age":"25","torsoSP":"20","persName":"Leonardo Boomboom","int":"2","ref":"10","tec":"2","cool":"3","att":"10","luck":"10","ma":"3","body":"10","emp":"10","CombatSense":"8","WardrobeStyle":"5","HumanPerception":"5","AwarenessNotice":"4","Brawling":"5","Dance":"2","Handgun":"8","Stealth":"7","Submachinegun":"3","leftHandSP":-1}] 
*/