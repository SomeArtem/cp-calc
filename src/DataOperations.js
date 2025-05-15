import actionMethod from "./actionMethod"
import deleteMethod from "./deleteMethod"
import Person from "./Person"
import setPerson from "./setPerson"

let FetchedPersons=[]

export function getData() {
  let StoredAsPersons=[]
  FetchedPersons=JSON.parse(localStorage.getItem('persArray'))  
  for (let i = 0; i < FetchedPersons.length; i++) {
    let currentPers=new Person(FetchedPersons[i], actionMethod, deleteMethod)
    StoredAsPersons.push(currentPers)
  }
  return StoredAsPersons
}

export function AddFunction() {
  let PersonParams=setPerson()
  let AutoPers=new Person(PersonParams, actionMethod, deleteMethod)
  FetchedPersons.push(AutoPers.Info())
  localStorage.setItem('persArray',JSON.stringify(FetchedPersons))
}

export function EraseData() {
  localStorage.setItem('persArray',JSON.stringify([]))
}

export function findPersonById(id) {
  let StoredAsPersons=getData()
  let target=StoredAsPersons.find(element => element.id == id)
  return target
}

export function deletePersonById(id) {
  // let StoredAsPersons=getData()
  FetchedPersons=FetchedPersons.filter(element => element.id !== id)
  localStorage.setItem('persArray',JSON.stringify(FetchedPersons))
}