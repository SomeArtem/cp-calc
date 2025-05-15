import { deletePersonById, findPersonById, getData } from "./DataOperations"
import DisplayPers from "./DisplayPers"

export default function deleteMethod(id) {
  let pers=findPersonById(id)
  if(confirm(`Точно удалить персонажа ${pers.persName} с id=${pers.id}????`)){
    deletePersonById(id)
    let StoredAsPersons=getData()
    DisplayPers(StoredAsPersons)     
  }else{
    alert('Ну ладно, оставляем')
  }
}