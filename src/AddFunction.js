import actionMethod from "./actionMethod"
import Person from "./Person"
import setPerson from "./setPerson"

export default function AddFunction(StoredPersons) {
  let PersonParams=setPerson()
  let AutoPers=new Person(PersonParams, actionMethod)
  StoredPersons.push(AutoPers.Info())
  localStorage.setItem('persArray',JSON.stringify(StoredPersons))
}