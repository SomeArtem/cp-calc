import actions from "./actions"
import PersParams from "./PersParams"
import RoleSkills from "./RoleSkills";
import weapons from "./weapons";

export function DrawChar(persContainer, Pers){
  
  Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
  };
  let ThisPersonInfo=Pers.Info()
  let PersonSpecialSkill=''
  let PersonSpecialSkillValue=''
  
  let PParams=PersParams.params
  let specialParams=['id', 'hp', 'persName','age','diff','Weapons']
  let armorParams=['headSP', 'torsoSP', 'rightHandSP', 'leftHandSP', 'rightLegSP', 'leftLegSP']
  let statParams=['int', 'ref', 'tec', 'cool', 'att', 'luck', 'ma', 'body', 'emp']
  let careerSkills=['Authority', 'CharisLeadership', 'CombatSense', 'Credibility', 'Family', 'Interface', 'JuryRig', 'MedicalTech', 'Resources','Streetdeal']
  PParams = PParams.diff(specialParams)
  PParams = PParams.diff(armorParams)
  PParams = PParams.diff(statParams)
  let Skills = PParams.diff(careerSkills)

  let PersonBox=document.createElement('div')
  PersonBox.classList.add('PersonBox')


  //id      
  // let idBox=document.createElement('div') 
  // idBox.classList.add('idBox')       
  //idBox.innerText=ThisPersonInfo.id    



  //persName
  let persNameBox=document.createElement('div')
  persNameBox.classList.add('persNameBox')  
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



  //Roles
  let RoleBox=document.createElement('div')
  RoleBox.classList.add('RoleBox')
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
  let ageBox=document.createElement('div')
  let CharPoints=0
  for (let i = 0; i < statParams.length; i++) {
    CharPoints += Number(ThisPersonInfo[statParams[i]]);    
  }
  ageBox.innerHTML=`<span class="propHeader">CHARACTER POINTS  </span>
  <span>${CharPoints}</span>
  <span class="propHeader">AGE  </span>
  <span>${ThisPersonInfo.age}</span>`



  //Stats
  let statBox=document.createElement('div')
  statBox.classList.add('statBox')
  statBox.innerHTML=`<span class="propHeader">STATS  </span>`
  for (let i=0;i<statParams.length;i++) {
    const valElement = ThisPersonInfo[statParams[i]]
    statBox.innerHTML+=`<span>${statParams[i]}[${valElement}], </span>`
  }



  //Armor
  let armorBox=document.createElement('div')
  armorBox.classList.add('armorBox')
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
  </div>`
  let armorTabs=newArmorBox.children[1]
  for (let i = 0; i < armorParams.length; i++) {
    armorTabs.innerHTML+=`<div class="armorCell">${ThisPersonInfo[armorParams[i]]}</div>`
  } 


  
  //HP
  let damagedHpBoxContent=``
  let BTM=Math.floor(ThisPersonInfo.body/2)
  let currentDamage=40-ThisPersonInfo.hp
  let saveHpBox=document.createElement('div')
  saveHpBox.classList.add('saveHpBox')
  for (let i = 0; i < 40; i++) {
    damagedHpBoxContent+=`<input type="checkbox" class="hpCelll" ${(i<currentDamage)?'checked':''}>`
  }
  saveHpBox.innerHTML=`
    <div class="saveBtmBox"><div><div class="propHeader">Save</div>
      <div style="border:1px solid black">${ThisPersonInfo.body}</div></div>
      <div><div class="propHeader">BTM</div>
      <div style="border:1px solid black">${BTM}</div></div>
    </div><div class="damagedHpBox">${damagedHpBoxContent}</div>
  `

  

  //Skills
  let skillBox=document.createElement('div')
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

  //Weapons
  let WeaponBox=document.createElement('div')
  WeaponBox.innerHTML=`
  <span class="propHeader">WEAPONS  </span>
  `
  let persWeapons=ThisPersonInfo.Weapons
  // WeaponBox.innerHTML+=persWeapons
  for (let i=0;i<persWeapons.length;i++) {
    const valElement = persWeapons[i]
    let wepFull=weapons.find(x=>x.theName==valElement)
    if(valElement){
      WeaponBox.innerHTML+=`<div>${valElement} ${wepFull.damage}</div>`
    }        
  }
  WeaponBox.innerHTML+=`
  <div class="armorFlex">
    <div class="armorCell armorHeader weaponHeader">Name</div>
    <div class="armorCell armorHeader weaponHeader">Type</div>
    <div class="armorCell armorHeader weaponHeader">W.A.</div>
    <div class="armorCell armorHeader weaponHeader">Damage</div>
    <div class="armorCell armorHeader weaponHeader">Shots</div>
    <div class="armorCell armorHeader weaponHeader">ROF</div>
    <div class="armorCell armorHeader weaponHeader">Range</div>
  </div>`
  for (let i=0;i<persWeapons.length;i++) {
    const valElement = persWeapons[i]
    let wepFull=weapons.find(x=>x.theName==valElement)
    if(valElement){
      WeaponBox.innerHTML+=`
        <div class="armorFlex">
          <div class="armorCell armorHeader">${wepFull.theName}</div>
          <div class="armorCell armorHeader">${wepFull.type}</div>
          <div class="armorCell armorHeader">${wepFull.precesion}</div>
          <div class="armorCell armorHeader">${wepFull.damage}</div>
          <div class="armorCell armorHeader">${wepFull.shots}</div>
          <div class="armorCell armorHeader">${wepFull.ROF}</div>
          <div class="armorCell armorHeader">${wepFull.range}</div>
        </div>
      `
    }        
  }



  //Controls
  let action=document.createElement('select')
  let defaultOption = new Option("Выберите действие", "0", true, true);
  Object.keys(actions).forEach(key => {
    let element=actions[key]
    let newOption = new Option(element.actName, element.actName); 
    action.appendChild(newOption)   
  });
  let DeleteButton=document.createElement('button')
  DeleteButton.innerText='Delete'
  DeleteButton.onclick=()=>{Pers.Delete()} 

  let DamageButton=document.createElement('button')
  DamageButton.innerText='Получить урон'
  DamageButton.onclick=()=>{Pers.AddDamage()} 

  let RunActionButton=document.createElement('button')
  RunActionButton.innerText='Выполнить действие'
  RunActionButton.onclick=()=>{Pers.Click(action.value)} 
    


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
  PersonBox.appendChild(WeaponBox) 
  PersonBox.appendChild(DeleteButton)
  PersonBox.appendChild(DamageButton)
  PersonBox.appendChild(action)
  PersonBox.appendChild(RunActionButton)
  persContainer.appendChild(PersonBox)
}