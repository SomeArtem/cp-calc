import data from '../src/PersParams' 
export default function setPerson() {
  let ObjToReturn={}
  for (let i = 0; i < data.params.length; i++) {
    const element = data.params[i];
    if(element=="id"){
      ObjToReturn[element]=Date.now()
    }else if (element=="hp"){
      ObjToReturn[element]=String(40)
    }else if (element=="Weapons"){
      ObjToReturn[element]=['Hand', 'Leg']
    }    
    else {      
      let paramValue=prompt(`Введите значение ${element}: `)
      ObjToReturn[element]= paramValue ? paramValue : 0;
    }


  }

  console.log('ObjToReturn: \n',ObjToReturn)
  return ObjToReturn
}