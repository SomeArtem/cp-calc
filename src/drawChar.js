import actions from "./actions"
import PersParams from "./PersParams"
import RoleSkills from "./RoleSkills";

export function DrawChar(persContainer, Pers){
  
  Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
  };

  let PersonSpecialSkill=''

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
  let careerSkillBox=document.createElement('div')
  let hpBox=document.createElement('div')
  let skillBox=document.createElement('div')
  let damagedHpBox=document.createElement('span')  
  let etcHpBox=document.createElement('span')
    
  PersonBox.classList.add('PersonBox')
  RoleBox.classList.add('RoleBox')
  statBox.classList.add('statBox')
  armorBox.classList.add('armorBox')
  persNameBox.classList.add('persNameBox')
  idBox.classList.add('idBox')  
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
  let persNameHeader=document.createElement('span') 
  persNameHeader.classList.add('propHeader')
  let persNameValue=document.createElement('span') 
  persNameHeader.innerText=`HANDLE `
  persNameValue.innerText=ThisPersonInfo.persName
  persNameBox.appendChild(persNameHeader)
  persNameBox.appendChild(persNameValue)



  //careerSkills
  for (let i=0;i<careerSkills.length;i++) {
    let valElement = ThisPersonInfo[careerSkills[i]]
    if(valElement){
      let val=document.createElement('div')
      val.innerText=careerSkills[i]+' : '+valElement
      careerSkillBox.appendChild(val)
      PersonSpecialSkill=careerSkills[i]
    }        
  }



  //Роли
  let roleItem2=document.createElement('span')  
  let roleHeader=document.createElement('span')  
  roleHeader.innerText='ROLE '
  roleHeader.classList.add('propHeader')
  RoleBox.appendChild(roleHeader)
  RoleBox.appendChild(roleItem2)
  Object.keys(RoleSkills).forEach(key => {
    let role=RoleSkills[key]
    let roleItem=document.createElement('span')
    let newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.checked=true
    roleItem.style.fontSize='12px'
    roleItem.innerText=role+` `
    if (role!=RoleSkills[PersonSpecialSkill]){
      newCheckBox.checked=false
    }
    RoleBox.appendChild(newCheckBox)
    RoleBox.appendChild(roleItem)
  });



  //Age+CP
  let cpHeader=document.createElement('span')
  cpHeader.innerText=`CHARACTER POINTS  `
  cpHeader.classList.add('propHeader')
  ageBox.appendChild(cpHeader)
  let CharPoints=0
  for (let i = 0; i < statParams.length; i++) {
    CharPoints += Number(ThisPersonInfo[statParams[i]]);    
  }
  let cpValue=document.createElement('span')
  cpValue.innerText=CharPoints
  ageBox.appendChild(cpValue)

  let ageHeader=document.createElement('span')
  ageHeader.innerText=`AGE  `
  ageHeader.classList.add('propHeader')
  ageBox.appendChild(ageHeader)

  let ageValue=document.createElement('span')
  ageValue.innerText=ThisPersonInfo.age
  ageBox.appendChild(ageValue)
  // ageBox.innerText=`CHARACTER POINTS ${CharPoints},  AGE:${ThisPersonInfo.age} `




  //Статы

  let statsHeader=document.createElement('span')
  statsHeader.innerText=`STATS  `
  statsHeader.classList.add('propHeader')
  statBox.appendChild(statsHeader)

  // let StatsHeader=document.createElement('span')
  // StatsHeader.innerText=`STATS `
  // statBox.appendChild(statsHeader)
  for (let i=0;i<statParams.length;i++) {
    const valElement = ThisPersonInfo[statParams[i]]
    let val=document.createElement('span')
    val.innerText=`${statParams[i]}[${valElement}], `
    statBox.appendChild(val)          
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
      // `<div class="armorCell">${ThisPersonInfo[armorParams[i]]}</div>`
  }  
  
  // for (let i = 0; i < armorParams.length; i++) { 
  //   let armPart=document.createElement('div')
  //   armPart.classList.add('armPart')
  //   let armPartName=document.createElement('span')
  //   let armPartValue=document.createElement('span')
  //   armPartName.innerText=armorParams[i].slice(0,-2)+' '
  //   armPartValue.innerText=ThisPersonInfo[armorParams[i]]
  //   armPart.appendChild(armPartName)
  //   armPart.appendChild(armPartValue)
  //   armorBox.appendChild(armPart)
  // }




  //Если поле - это HP
  hpBox.innerText=`hp:${ThisPersonInfo.hp} \n`
  for (let i = 0; i < 40-ThisPersonInfo.hp; i++) {
    damagedHpBox.innerText+='x'
  }
  for (let i = 0; i < ThisPersonInfo.hp; i++) {
    etcHpBox.innerText+='o'
  }

  


  //Скиллы
  for (let i=0;i<Skills.length;i++) {
    const valElement = ThisPersonInfo[Skills[i]]
    if(valElement){
      let val=document.createElement('div')
      val.innerText=Skills[i]+' : '+valElement
      skillBox.appendChild(val)
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
  

  hpBox.appendChild(damagedHpBox)  
  hpBox.appendChild(etcHpBox)  
  action.appendChild(defaultOption)
  // PersonBox.appendChild(idBox) 
  PersonBox.appendChild(persNameBox) 
  PersonBox.appendChild(RoleBox) 
  PersonBox.appendChild(ageBox) 
  PersonBox.appendChild(statBox) 
  PersonBox.appendChild(newArmorBox) 
  PersonBox.appendChild(armorBox) 
  PersonBox.appendChild(hpBox)
  PersonBox.appendChild(careerSkillBox) 
  PersonBox.appendChild(skillBox) 
  PersonBox.appendChild(DeleteButton)
  PersonBox.appendChild(DamageButton)
  PersonBox.appendChild(action)
  PersonBox.appendChild(RunActionButton)
  persContainer.appendChild(PersonBox)
}