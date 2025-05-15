import Person from "./Person";

export default function DisplayPers(PersonsToDisplay) {
  let persContainer=document.getElementById('persContainer')
  persContainer.innerHTML=''
  PersonsToDisplay.forEach(currentPerson => {
    currentPerson.Display(persContainer);
  });  
}