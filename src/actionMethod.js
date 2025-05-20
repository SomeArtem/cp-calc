import actions from "./actions"
import { findPersonById } from "./DataOperations";
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
  let Shotrange=prompt('Введите дистанцию(м) 0-1000');
  let WeaponToUse=prompt(`Введите название оружия${JSON.stringify(Shooter.Weapons)}`);
  let weaponFromBase=weapons.find(x=>x.theName==WeaponToUse)
  let weaponRange=weaponFromBase.range
  let difficulty=difficultyByRange(Shotrange,weaponRange)
  let RollResult=Number(prompt(`Сложность выстрела будет составлять ${difficulty} брось 1d10, чтобы узнать попал или нет`))
  let reflexes=Number(Shooter.ref)
  let needSkill=weaponFromBase.relatedSkill
  let weaponSkill=Number(Shooter[needSkill])
  let SooterScore=reflexes+weaponSkill+RollResult
  let summary=(SooterScore>=difficulty)?`Выстрел попал в цель, нанесите цели урон ${weaponFromBase.damage}`:'Промазал'
  alert(`рефлексы=${reflexes}, оружейный навык(${needSkill})=${weaponSkill}, 1d10=${RollResult}, суммарно дают${SooterScore} против ${difficulty}. ${summary}`)
}