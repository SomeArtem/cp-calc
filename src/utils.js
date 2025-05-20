export function difficultyByRange(shotRange,weaponRange) {
    let result=0
    let pointBlanc=1
    let closeDist=Math.floor(weaponRange/4) 
    let midDist=Math.floor(weaponRange/2)
    let farDist=Math.floor(weaponRange)
    let extremeDist=Math.floor(weaponRange*3)
    if(shotRange<=pointBlanc){result=10}
    if(shotRange>pointBlanc&&shotRange<=closeDist){result=15}
    if(shotRange>closeDist&&shotRange<=midDist){result=20}
    if(shotRange>midDist&&shotRange<=farDist){result=25}
    if(shotRange>farDist&&shotRange<=extremeDist){result=30}
    //в упор - меньше 2м                       - сл 10
    //близко - от 2м до 1/4 дистанции оружия   - сл 15
    //средне - от 1/4 до 1/2 дистанции оружия  - сл 20
    //далеко - от 1/2 до 1x дистанции оружия   - сл 25
    //экстремально - от 1x до 3х дистанции     - сл 30
    return result    
}