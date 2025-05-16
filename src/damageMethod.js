import { deletePersonById, editPersonById, findPersonById, getData } from "./DataOperations"
import DisplayPers from "./DisplayPers"

export default function damageMethod(id) {
  let target=findPersonById(id)
  let damage=prompt(`Сколько урона нанести персонажу ${target.persName} с id=${target.id}????`)
  let newHp=target.hp-damage
  editPersonById(id, 'hp', newHp)
  let StoredAsPersons=getData()
  DisplayPers(StoredAsPersons) 
}