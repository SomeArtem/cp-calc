import { deletePersonById, editPersonById, findPersonById, getData } from "./DataOperations"
import DisplayPers from "./DisplayPers"

export default function damageMethod(id) {
  let targetPers=findPersonById(id)
  let targetPart=prompt(`В какую часть тела? headSP torsoSP leftHandSP rightHandSP leftLegSP rightLegSP`)
  let targetPartArmor=0
  switch (targetPart) {
    case 'headSP':
      targetPartArmor=targetPers.headSP      
      break;
    case 'torsoSP':
      targetPartArmor=targetPers.torsoSP      
      break;
    case 'leftHandSP':
      targetPartArmor=targetPers.leftHandSP      
      break;
    case 'rightHandSP':
      targetPartArmor=targetPers.rightHandSP      
      break;
    case 'leftLegSP':
      targetPartArmor=targetPers.leftLegSP      
      break;  
    case 'rightLegSP':
      targetPartArmor=targetPers.rightLegSP      
      break;  
    default:
      break;
  }
  let damage=prompt(`Количество входящего урона по ${targetPers.persName}????`)
  if (Number(damage)>Number(targetPartArmor)){
    // console.log('Броню нужно уменьшить на 1')
    if(targetPartArmor>0){
      editPersonById(id, targetPart, targetPartArmor-1)
    }
  }
  console.log(`damage${damage}-armor${targetPartArmor}-btm${Math.floor(targetPers.body/2)}`)
  damage=damage-targetPartArmor-Math.floor(targetPers.body/2)
  damage = (damage < 0) ? 0 : damage
  console.log(`${targetPart} ${targetPers.persName}-a получила ${damage} очков урона`)
  let newHp=targetPers.hp-damage
  editPersonById(id, 'hp', newHp)
  let StoredAsPersons=getData()
  DisplayPers(StoredAsPersons) 
}