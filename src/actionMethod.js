import actions from "./actions"
import { findPersonById } from "./DataOperations";
import modifiers99 from "./modifiers99";
import { difficultyByRange } from "./utils";
import weapons from "./weapons";

export default function actionMethod(actionName, _persId) {
  let ShooterPers=findPersonById(_persId)
  alert(`${ShooterPers.persName} ${actions[actionName].description}\n${actions[actionName].whatToRoll}`)
  switch (actionName) {
    case 'CloseAttWithoutWeapon':
      CloseAttWithoutWeapon()            
      break;
    case 'DistantAttWithSingleShot':
      DistantAttWithSingleShot(ShooterPers)            
      break;
  
    default:
      break;
  }
}

function DistantAttWithSingleShot(Shooter) {
  // Shooter.Weapons.forEach(element => {
    
  // });
  console.log(Shooter)
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