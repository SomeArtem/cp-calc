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

  //Если поле - это id            
  idBox.innerText=ThisPersonInfo.id    

  //persName
  persNameBox.innerText=`кличка: ${ThisPersonInfo.persName}`

  //statParams
  let CharPoints=0
  for (let i = 0; i < statParams.length; i++) {
    CharPoints += Number(ThisPersonInfo[statParams[i]]);    
  }
  ageBox.innerText=`ОЧ ПЕРС:${CharPoints},  ВОЗР:${ThisPersonInfo.age} `

  
  //armor
  for (let i = 0; i < armorParams.length; i++) { 
    let armPart=document.createElement('div')
    armPart.classList.add('armPart')
    let armPartName=document.createElement('span')
    let armPartValue=document.createElement('span')
    armPartName.innerText=armorParams[i]+' '
    armPartValue.innerText=ThisPersonInfo[armorParams[i]]
    armPart.appendChild(armPartName)
    armPart.appendChild(armPartValue)
    armorBox.appendChild(armPart)
  }

  //Если поле - это HP
  hpBox.innerText=`hp:${ThisPersonInfo.hp} \n`
  for (let i = 0; i < 40-ThisPersonInfo.hp; i++) {
    damagedHpBox.innerText+='x'
  }
  for (let i = 0; i < ThisPersonInfo.hp; i++) {
    etcHpBox.innerText+='o'
  }

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
  roleItem2.innerText=`Роль: ${RoleSkills[PersonSpecialSkill]} `
  roleItem2.style.textTransform='uppercase'
  RoleBox.appendChild(roleItem2)
  Object.keys(RoleSkills).forEach(key => {
    let role=RoleSkills[key]
    if (role!=RoleSkills[PersonSpecialSkill]){
      let roleItem=document.createElement('span')
      roleItem.style.fontSize='12px'
      roleItem.innerText=role+' '
      RoleBox.appendChild(roleItem)

    }
  });



  //Скиллы
  for (let i=0;i<Skills.length;i++) {
    const valElement = ThisPersonInfo[Skills[i]]
    if(valElement){
      let val=document.createElement('div')
      val.innerText=Skills[i]+' : '+valElement
      skillBox.appendChild(val)
    }        
  }
  
  
  //Статы
  for (let i=0;i<statParams.length;i++) {
    const valElement = ThisPersonInfo[statParams[i]]
    let val=document.createElement('span')
    val.innerText=`${statParams[i]}[${valElement}], `
    statBox.appendChild(val)          
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
    PersonBox.appendChild(idBox) 
    PersonBox.appendChild(persNameBox) 
    PersonBox.appendChild(RoleBox) 
    PersonBox.appendChild(ageBox) 
    PersonBox.appendChild(statBox) 
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