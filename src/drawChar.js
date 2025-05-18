import actions from "./actions"
import PersParams from "./PersParams"
import RoleSkills from "./RoleSkills";

export function DrawChar(persContainer, Pers){
  
  Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
  };

  let PersonSpecialSkill=''
  let PersonSpecialSkillValue=''

  let ThisPersonInfo=Pers.Info()

  let PersonBox=document.createElement('div')
  let action=document.createElement('select')
  let DeleteButton=document.createElement('button')
  let DamageButton=document.createElement('button')
  let RunActionButton=document.createElement('button')
  let idBox=document.createElement('div')
  let ageBox=document.createElement('div')
  let RoleBox=document.createElement('div')
  let persNameBox=document.createElement('div')
  let statBox=document.createElement('div')
  let armorBox=document.createElement('div')
  let saveHpBox=document.createElement('div')
  let skillBox=document.createElement('div')
  let damagedHpBox=document.createElement('div')  
  let saveBtmBox=document.createElement('div')
    
  PersonBox.classList.add('PersonBox')
  saveHpBox.classList.add('saveHpBox')
  RoleBox.classList.add('RoleBox')
  statBox.classList.add('statBox')
  armorBox.classList.add('armorBox')
  persNameBox.classList.add('persNameBox')
  idBox.classList.add('idBox')  
  saveBtmBox.classList.add('saveBtmBox')
  damagedHpBox.classList.add('damagedHpBox')

  
  let PParams=PersParams.params
  let specialParams=['id', 'hp', 'persName','age','diff']
  let armorParams=['headSP', 'torsoSP', 'rightHandSP', 'leftHandSP', 'rightLegSP', 'leftLegSP']
  let statParams=['int', 'ref', 'tec', 'cool', 'att', 'luck', 'ma', 'body', 'emp']
  let careerSkills=['Authority', 'CharisLeadership', 'CombatSense', 'Credibility', 'Family', 'Interface', 'JuryRig', 'MedicalTech', 'Resources','Streetdeal']
  PParams = PParams.diff(specialParams)
  PParams = PParams.diff(armorParams)
  PParams = PParams.diff(statParams)
  let Skills = PParams.diff(careerSkills)

  //id            
  // idBox.innerText=ThisPersonInfo.id    



  //persName
  persNameBox.innerHTML=`
  <span class="propHeader">HANDLE </span>
  <span>${ThisPersonInfo.persName}</span>`



  //careerSkills
  for (let i=0;i<careerSkills.length;i++) {
    let valElement = ThisPersonInfo[careerSkills[i]]
    if(valElement){
      PersonSpecialSkill=careerSkills[i]
      PersonSpecialSkillValue=valElement
    }        
  }



  //Роли
  RoleBox.innerHTML=`<span class="propHeader">ROLE </span>`  
  Object.keys(RoleSkills).forEach(key => {
    let role=RoleSkills[key]
    let checked=false
    if (role==RoleSkills[PersonSpecialSkill]){
      checked=true
    }
    let roleElem=`<input type="checkbox" ${checked?'checked':''}><span style="font-size: 12px;">${role} </span>`
    RoleBox.innerHTML+=roleElem
  });



  //Age+CP
  let CharPoints=0
  for (let i = 0; i < statParams.length; i++) {
    CharPoints += Number(ThisPersonInfo[statParams[i]]);    
  }
  ageBox.innerHTML=`<span class="propHeader">CHARACTER POINTS  </span>
  <span>${CharPoints}</span>
  <span class="propHeader">AGE  </span>
  <span>${ThisPersonInfo.age}</span>`



  //Статы
  statBox.innerHTML=`<span class="propHeader">STATS  </span>`
  for (let i=0;i<statParams.length;i++) {
    const valElement = ThisPersonInfo[statParams[i]]
    statBox.innerHTML+=`<span>${statParams[i]}[${valElement}], </span>`
  }



  //armor
  let newArmorBox=document.createElement('div')
  newArmorBox.innerHTML=`
  <div class="armorFlex">
    <div class="armorCell propHeader armorHeader">Location</div>
    <div class="armorCell">Head</div>
    <div class="armorCell">Torso</div>
    <div class="armorCell">R.Arm</div>
    <div class="armorCell">L.Arm</div>
    <div class="armorCell">R.Leg</div>
    <div class="armorCell">L.Leg</div>
  </div>
  <div class="armorFlex" id="armorValues">
    <div class="armorCell propHeader armorHeader">Armor SP</div>
  </div>
  `
  let armorTabs=newArmorBox.children[1]
  for (let i = 0; i < armorParams.length; i++) {
    armorTabs.innerHTML+=`<div class="armorCell">${ThisPersonInfo[armorParams[i]]}</div>`
  } 



  //HP
  let BTM=Math.floor(ThisPersonInfo.body/2)
  let currentDamage=40-ThisPersonInfo.hp
  saveBtmBox.innerHTML=`
  <div>
    <div class="propHeader">Save</div>
    <div style="border:1px solid black">${ThisPersonInfo.body}</div>
  </div>
  <div>
    <div class="propHeader">BTM</div>
    <div style="border:1px solid black">${BTM}</div>
  </div>`  
  for (let i = 0; i < 40; i++) {
    damagedHpBox.innerHTML+=`<input type="checkbox" class="hpCelll" ${(i<currentDamage)?'checked':''}>`
  }

  

  //Скиллы
  skillBox.innerHTML=`
  <span class="propHeader">SKILLS  </span>
  <div class="specialSkill">${PersonSpecialSkill} : ${PersonSpecialSkillValue}</div>
  `
  for (let i=0;i<Skills.length;i++) {
    const valElement = ThisPersonInfo[Skills[i]]
    if(valElement){
      skillBox.innerHTML+=`<div>${Skills[i]} : ${valElement}</div>`
    }        
  }
  
  

  let defaultOption = new Option("Выберите действие", "0", true, true);
  Object.keys(actions).forEach(key => {
    let element=actions[key]
    let newOption = new Option(element.actName, element.actName); 
    action.appendChild(newOption)   
  });

    
  RunActionButton.innerText='Выполнить действие'
  DamageButton.innerText='Получить урон'
  DeleteButton.innerText='Delete'
  RunActionButton.onclick=()=>{Pers.Click(action.value)} 
  DamageButton.onclick=()=>{Pers.AddDamage()} 
  DeleteButton.onclick=()=>{Pers.Delete()} 
  

  saveHpBox.appendChild(saveBtmBox)  
  saveHpBox.appendChild(damagedHpBox)  
  action.appendChild(defaultOption)
  // PersonBox.appendChild(idBox) 
  PersonBox.appendChild(persNameBox) 
  PersonBox.appendChild(RoleBox) 
  PersonBox.appendChild(ageBox) 
  PersonBox.appendChild(statBox) 
  PersonBox.appendChild(newArmorBox) 
  PersonBox.appendChild(armorBox) 
  PersonBox.appendChild(saveHpBox)
  PersonBox.appendChild(skillBox) 
  PersonBox.appendChild(DeleteButton)
  PersonBox.appendChild(DamageButton)
  PersonBox.appendChild(action)
  PersonBox.appendChild(RunActionButton)
  persContainer.appendChild(PersonBox)
}