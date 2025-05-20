import actions from "./actions"
import { DrawChar } from "./drawChar"

export default class Person{
  actionMethod
  deleteMethod
  damageMethod
  id
  Weapons
  constructor({
    id,
    hp,
    Weapons=[],
    age=0,
    persName='Not assigned',
    headSP=0,
    torsoSP=0,
    rightHandSP=0,
    leftHandSP=0,
    rightLegSP=0,
    leftLegSP=0,
    int=0,
    ref=0,
    tec=0,
    cool=0,
    att=0,
    luck=0,
    ma=0,
    body=0,
    emp=0,
    Authority=0,
    CharisLeadership=0,
    CombatSense=0,
    Credibility=0,
    Family=0,
    Interface=0,
    JuryRig=0,
    MedicalTech=0,
    Resources=0,
    Streetdeal=0,
    PersonalGrooming=0,
    WardrobeStyle=0,
    Endurance=0,
    StrengthFeat=0,
    Swimming=0,
    Interrogation=0,
    Oratory=0,
    ResistTortureDrugs=0,
    Streetwise=0,
    HumanPerception=0,
    Interview=0,
    Leadership=0,
    Social=0,
    PersuasionFastTalk=0,
    Perform=0,
    Accounting=0,
    Anthropology=0,
    AwarenessNotice=0,
    Biology=0,
    Botany=0,
    Chemistry=0,
    Composition=0,
    DiagnoseIllness=0,
    EducationGeneralKnowledge=0,
    Expert=0,
    Gamble=0,
    Geology=0,
    HideEvade=0,
    Historyy=0,
    KnowLanguages=0,
    LibrarySearch=0,
    Mathematics=0,
    Physics=0,
    Programming=0,
    ShadowTrack=0,
    StockMarket=0,
    SystemKnowledge=0,
    Teaching=0,
    Zoology=0,
    Archery=0,
    Athletic=0,
    Brawling=0,
    Dance=0,
    DodgeEscape=0,
    Driving=0,
    Fencing=0,
    Handgun=0,
    HeavyWeapons=0,
    MartialArts=0,
    Melee=0,
    Motorcycle=0,
    OperateHeavyMachinery=0,
    PilotGyro=0,
    PilotFixedWing=0,
    PilotDirigible=0,
    Rifle=0,
    Stealth=0,
    Submachinegun=0,
    AeroTech=0,
    AVTech=0,
    BasicTech=0,
    CryotankOperation=0,
    CyberdeckDesign=0,
    CyberTech=0,
    Demolitions=0,
    Disguise=0,
    Electronics=0,
    ElectSecurity=0,
    FirstAid=0,
    Forgery=0,
    GyroTech=0,
    PaintDraw=0,
    PhotoFilm=0,
    Pharmaceuticals=0,
    PickLock=0,
    PickPocket=0,
    PlayInstrument=0,
    Weaponsmith=0,
  },actionMethod,deleteMethod,damageMethod){
    this.id=id
    this.hp=hp
    this.age=age
    this.headSP=headSP
    this.torsoSP=torsoSP
    this.rightHandSP=rightHandSP
    this.leftHandSP=leftHandSP
    this.rightLegSP=rightLegSP
    this.leftLegSP=leftLegSP
    this.persName=persName
    this.int=int
    this.ref=ref
    this.tec=tec
    this.cool=cool
    this.att=att
    this.luck=luck
    this.ma=ma
    this.body=body
    this.emp=emp
    this.Authority=Authority                                       
    this.CharisLeadership=CharisLeadership                                       
    this.CombatSense=CombatSense                                       
    this.Credibility=Credibility                                       
    this.Family=Family                                       
    this.Interface=Interface                                       
    this.JuryRig=JuryRig                                       
    this.MedicalTech=MedicalTech                                       
    this.Resources=Resources                                       
    this.Streetdeal=Streetdeal                                       
    this.PersonalGrooming=PersonalGrooming                                       
    this.WardrobeStyle=WardrobeStyle                                       
    this.Endurance=Endurance                                       
    this.StrengthFeat=StrengthFeat                                       
    this.Swimming=Swimming                                       
    this.Interrogation=Interrogation                                       
    this.Oratory=Oratory                                       
    this.ResistTortureDrugs=ResistTortureDrugs                                       
    this.Streetwise=Streetwise                                       
    this.HumanPerception=HumanPerception                                       
    this.Interview=Interview                                       
    this.Leadership=Leadership                                       
    this.Social=Social                                       
    this.PersuasionFastTalk=PersuasionFastTalk                                       
    this.Perform=Perform                                       
    this.Accounting=Accounting                                       
    this.Anthropology=Anthropology                                       
    this.AwarenessNotice=AwarenessNotice                                       
    this.Biology=Biology                                       
    this.Botany=Botany                                       
    this.Chemistry=Chemistry                                       
    this.Composition=Composition                                       
    this.DiagnoseIllness=DiagnoseIllness                                       
    this.EducationGeneralKnowledge=EducationGeneralKnowledge                                       
    this.Expert=Expert                                       
    this.Gamble=Gamble                                       
    this.Geology=Geology                                       
    this.HideEvade=HideEvade                                       
    this.Historyy=Historyy                                   
    this.KnowLanguages =KnowLanguages                                       
    this.LibrarySearch=LibrarySearch                                       
    this.Mathematics=Mathematics                                       
    this.Physics=Physics                                       
    this.Programming=Programming                                       
    this.ShadowTrack=ShadowTrack                                       
    this.StockMarket=StockMarket                                       
    this.SystemKnowledge=SystemKnowledge                                       
    this.Teaching=Teaching                                       
    this.Zoology=Zoology                                       
    this.Archery=Archery                                       
    this.Athletic=Athletic                                       
    this.Brawling=Brawling                                       
    this.Dance=Dance                                       
    this.DodgeEscape=DodgeEscape                                       
    this.Driving=Driving                                       
    this.Fencing=Fencing                                       
    this.Handgun=Handgun                                       
    this.HeavyWeapons=HeavyWeapons                                       
    this.MartialArts=MartialArts                                       
    this.Melee=Melee                                       
    this.Motorcycle=Motorcycle                                       
    this.OperateHeavyMachinery=OperateHeavyMachinery                                       
    this.PilotGyro=PilotGyro                                       
    this.PilotFixedWing=PilotFixedWing                                       
    this.PilotDirigible=PilotDirigible                                       
    this.Rifle=Rifle                                       
    this.Stealth=Stealth                                       
    this.Submachinegun=Submachinegun                                       
    this.AeroTech=AeroTech                                       
    this.AVTech=AVTech                                       
    this.BasicTech=BasicTech                                       
    this.CryotankOperation=CryotankOperation                                       
    this.CyberdeckDesign=CyberdeckDesign                                       
    this.CyberTech=CyberTech                                       
    this.Demolitions=Demolitions                                       
    this.Disguise=Disguise                                       
    this.Electronics=Electronics                                       
    this.ElectSecurity=ElectSecurity                                       
    this.FirstAid=FirstAid                                       
    this.Forgery=Forgery                                       
    this.GyroTech=GyroTech                                       
    this.PaintDraw=PaintDraw                                       
    this.PhotoFilm=PhotoFilm                                       
    this.Pharmaceuticals=Pharmaceuticals                                       
    this.PickLock=PickLock                                       
    this.PickPocket=PickPocket                                       
    this.PlayInstrument=PlayInstrument                                       
    this.Weaponsmith=Weaponsmith      
    this.actionMethod=actionMethod
    this.deleteMethod=deleteMethod
    this.damageMethod=damageMethod
    this.Weapons=Weapons
  }
  Info(){
    console.log(this)
    let resultOb={}
    for (var key in this) {      
      if (this[key]!==0) {
        resultOb[key]=this[key];
      }      
    }
    return resultOb    
  }
  Display2(persContainer){
    let PersonBox=document.createElement('div')
    let DeleteButton=document.createElement('button')
    DeleteButton.innerText='Delete'
    DeleteButton.onclick=()=>{this.Delete()} 
    PersonBox.appendChild(DeleteButton)
    let ThisPersonInfo=this.Info()

    for (let key in ThisPersonInfo) {
      const valElement = ThisPersonInfo[key];
      if (typeof(valElement)=='string'||typeof(valElement)=='number') {
        if (key=='id'){
          let idBox=document.createElement('div')
          idBox.classList.add('idBox')          
          idBox.innerText=ThisPersonInfo.id
          PersonBox.appendChild(idBox) 
        }else if(key=='hp'){
          //Если поле - это HP
          let hpBox=document.createElement('div')
          hpBox.innerText=`hp:${valElement} \n`
          
          let damagedHpBox=document.createElement('span')  
          damagedHpBox.style.color='#ff0000'        
          for (let i = 0; i < 40-valElement; i++) {
            damagedHpBox.innerText+='x'
          }
         

          let etcHpBox=document.createElement('span') 
          for (let i = 0; i < valElement; i++) {
            etcHpBox.innerText+='o'
          }        
           hpBox.appendChild(damagedHpBox)  
           hpBox.appendChild(etcHpBox)  
          PersonBox.appendChild(hpBox)
        }else{
        let val=document.createElement('div')
        val.innerText=key+' : '+valElement
        PersonBox.appendChild(val)
      }        
      }      
    }
    persContainer.appendChild(PersonBox)
    PersonBox.classList.add('PersonBox')
    
    let action=document.createElement('select')
    let newListData = new Option("Выберите действие", "0", true, false); 
    action.appendChild(newListData)

    Object.keys(actions).forEach(key => {
      let element=actions[key]
      let newOption = new Option(element.actName, element.actName); 
      action.appendChild(newOption)   
    });

    let RunActionButton=document.createElement('button')
    RunActionButton.innerText='Выполнить действие'
    RunActionButton.onclick=()=>{this.Click(action.value)} 
    PersonBox.appendChild(RunActionButton)

    PersonBox.appendChild(action)

    let DamageButton=document.createElement('button')
    DamageButton.innerText='Получить урон'
    DamageButton.onclick=()=>{this.AddDamage()} 
    PersonBox.appendChild(DamageButton)
  }
  Display(persContainer){
    DrawChar(persContainer, this)
  }
  Click(actionName){
    this.actionMethod(actionName, this.persName)
  }
  Delete(){
    this.deleteMethod(this.id)
  }
  AddDamage(){
    this.damageMethod(this.id)
  }

}

/*

Authority
CharisLeadership
CombatSense
Credibility
Family
Interface
JuryRig
MedicalTech
Resources
Streetdeal
PersonalGrooming
WardrobeStyle
Endurance
StrengthFeat
Swimming
Interrogation
Oratory
ResistTortureDrugs
Streetwise
HumanPerception
Interview
Leadership
Social
PersuasionFastTalk
Perform
Accounting
Anthropology
AwarenessNotice
Biology
Botany
Chemistry
Composition
DiagnoseIllness
EducationGeneralKnowledge
Expert
Gamble
Geology
HideEvade
Historyy
KnowLanguages
LibrarySearch
Mathematics
Physics
Programming
ShadowTrack
StockMarket
SystemKnowledge
Teaching
Zoology
Archery
Athletic
Brawling
Dance
DodgeEscape
Driving
Fencing
Handgun
HeavyWeapons
MartialArts
Melee
Motorcycle
OperateHeavyMachinery
PilotGyro
PilotFixedWing
PilotDirigible
Rifle
Stealth
Submachinegun
AeroTech
AVTech
BasicTech
CryotankOperation
CyberdeckDesign
CyberTech
Demolitions
Disguise
Electronics
ElectSecurity
FirstAid
Forgery
GyroTech
PaintDraw
PhotoFilm
Pharmaceuticals
PickLock
PickPocket
PlayInstrument
Weaponsmith

*/