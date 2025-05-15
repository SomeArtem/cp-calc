import './style.css'
import DisplayPers from './DisplayPers.js'
import { AddFunction, getData, EraseData} from './DataOperations.js'

document.querySelector('#app').innerHTML = `
  <div id="controls">
    <button id="addButton">Добавить</button>
    <button id="erasePersons">Удалить ВСЕХ</button>
  </div>
  <div id="persContainer"></div>
`

if (localStorage.getItem('persArray')==null) {
  localStorage.setItem('persArray',JSON.stringify([]))  
}



let StoredAsPersons=[]
StoredAsPersons=getData()
DisplayPers(StoredAsPersons)

//Добавление
document.getElementById('addButton').onclick=()=>{
  AddFunction()
  StoredAsPersons=getData()
  DisplayPers(StoredAsPersons)      
}
//Удаление всех
document.getElementById('erasePersons').onclick=()=>{
  EraseData()
  StoredAsPersons=getData()
  DisplayPers(StoredAsPersons)      
}
