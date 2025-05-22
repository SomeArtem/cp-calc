import actions from "./actions"
import combatImplants from "./combatImplants";
import { findPersonById, getData } from "./DataOperations";
import modifiers99 from "./modifiers99";
import { difficultyByRange } from "./utils";
import weapons from "./weapons";

export default function actionMethod(actionName, _persId) {
  let AttackPers=findPersonById(_persId)
  alert(`${AttackPers.persName} ${actions[actionName].description}\n${actions[actionName].whatToRoll}`)
  switch (actionName) {
    case 'CloseAttWithoutWeapon':
      CloseAttWithoutWeapon(AttackPers)            
      break;
    case 'DistantAttWithSingleShot':
      DistantAttWithSingleShot(AttackPers)            
      break;
  
    default:
      break;
  }
}
function CloseAttWithoutWeapon(Attaker) {
  let acceptableWeapons=weapons.filter(w=>w.type=='WOW')
  let allPerson=getData()
  let allPersonNames=allPerson.map(item => item.persName)
  allPersonNames=allPersonNames.filter(p => p !== Attaker.persName)
  let victimName=prompt('Введите Имя, кого атакуем: '+allPersonNames)
  let victim=allPerson.find(p=>p.persName==victimName)
  
  let attRef=Number(Attaker.ref)
  let attBrSkill=Number(Attaker.Brawling)
  let attRoll=Number(prompt(`Киньте 1d10 за ${Attaker.persName}: `))
  

  let attackWhatWith=prompt(`Чем атаковать?${['Hand', 'Leg']}`)
  let damage=acceptableWeapons.find(w=>w.theName==attackWhatWith).damage
  if(Attaker.Cybernetics.length>0){
    let AttCybernetics=[]
    for (let i=0;i<Attaker.Cybernetics.length;i++) {
      const valElement = Attaker.Cybernetics[i]
      let currentImplant=combatImplants.find(x=>x.theName==valElement&&x.place==attackWhatWith)
      AttCybernetics.push(currentImplant)
    }
    if(AttCybernetics.length>1){
      let exactImplantName=prompt(`Какой имплант будет задействован?${AttCybernetics.map(item => item.theName)}`)
      let exactImplant = AttCybernetics.find(i=>i.theName==exactImplantName)
      damage=exactImplant.damage
    }else damage = AttCybernetics[0].damage
  }
  
  
  let vicRef=Number(victim.ref)
  let vicBrSkill=Number(victim.Brawling)
  let vicRoll=Number(prompt(`Киньте 1d10 за ${victim.persName}: `))

  let result=((attRef+attBrSkill+attRoll)>(vicRef+vicBrSkill+vicRoll)) ? `Атака прошла, нанесите урон ${damage}` : 'Атака не прошла'
  
  alert(`${Attaker.persName} атаковал ${victim.persName} с 
    ${attRef+attBrSkill+attRoll} очков против ${vicRef+vicBrSkill+vicRoll} у ${victim.persName} 
    ${result}`)
  //[REF + Боевой Навык + 1d10]
}



function DistantAttWithSingleShot(Shooter) {
  let modDescription=''
  let modSummary=0
  let modsToShow=''
  for (let i = 0; i < modifiers99.length; i++) {
    let mod=modifiers99[i]
    modsToShow += `${mod.id}. ${mod.ruDescription}: "${mod.bonusValue}"\n`;
  }
  let currentModNums=prompt(`Введите номера модификаторов через пробел, например "0 14 3":\n${modsToShow}`).split(' ')
  currentModNums.forEach(numm => {
    let currModifier=modifiers99.find(e=>e.id==numm)
    modDescription+=`${currModifier.ruDescription} `
    modSummary+=Number(currModifier.bonusValue)
  });
  let Shotrange=prompt(`Теперь мы знаем, что ${modDescription} 
    Бонус модификаторов равен ${modSummary}
    Введите дистанцию(м) 0-1000`);
  let WeaponToUse=prompt(`Введите название оружия${JSON.stringify(Shooter.Weapons)}`);

  let weaponFromBase=weapons.find(x=>x.theName==WeaponToUse)
  let weaponRange=weaponFromBase.range
  let difficulty=difficultyByRange(Shotrange,weaponRange)
  let RollResult=Number(prompt(`Сложность выстрела будет составлять ${difficulty} брось 1d10, чтобы узнать попал или нет`))
  let reflexes=Number(Shooter.ref)
  let needSkill=weaponFromBase.relatedSkill
  let weaponSkill=Number(Shooter[needSkill])
  let SooterScore=reflexes+weaponSkill+RollResult+modSummary
  let summary=(SooterScore>=difficulty)?`Выстрел попал в цель, нанесите цели урон ${weaponFromBase.damage}`:'Промазал'
  alert(`рефлексы=${reflexes}, оружейный навык(${needSkill})=${weaponSkill}, 1d10=${RollResult}, МодСтр99=${modSummary} суммарно дают${SooterScore} против ${difficulty}. ${summary}`)
}