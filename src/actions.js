export default {
    CloseAttWithoutWeapon : {
      actName:"CloseAttWithoutWeapon",
      description:"совершает атакуближнего боя без оружия",
      whatToRoll:"Сделай проверку \n[REF + Боевой Навык + 1d10]\n против \n[REF + Бой/Укл Навык + 1d10 + модСтр42]жертвы"
    },
    CloseAttWithWeapon : {
      actName:"CloseAttWithWeapon",
      description:"совершает атаку ближнего боя c оружием",
      whatToRoll:"Сделай проверку \n[REF + Навык оружия ближнего боя + 1d10]\n против \n[REF + Бой/Укл Навык + 1d10 + модСтр42]жертвы"
    },
    DistantAttWithThrowWeapon : {
      actName:"DistantAttWithThrowWeapon",
      description:"совершает атаку дальнего боя с метательным оружием",
      whatToRoll:`
      Сделай проверку\n
      [REF + Боевой Навык + 1d10]
      против
      [Сложность от дистанции. Дист=10xBODY] 
      Если прошло, то урон тем, кто в радиусе 3 метров.
      Если нет, кинь 1d10 по гранатной таблице, кинь 1d10 чтобы определить дистанцию до цели`
    },
    DistantAttWithFirethrower : {
      actName:"DistantAttWithFirethrower",
      description:"совершает атаку дальнего боя с огнемётом",
      whatToRoll:"Сделай проверку \n[REF + Боевой Навык + 1d10+МодСтр99]\n против \n[Сложность от дистанции]\n"
    },
    DistantAttWithRocketWeapon : {
      actName:"DistantAttWithRocketWeapon",
      description:"совершает атаку дальнего боя с ракетой",
      whatToRoll:"Сделай проверку \n[REF + HeavyWeapon + 1d10+МодСтр99]\n против \n[Сложность от дистанции]"
    },
    DistantAttWithSingleShot : {
      actName:"DistantAttWithSingleShot",
      description:"совершает атаку дальнего боя с однозарядным оружием",
      whatToRoll:"Сделай проверку \n[REF + Оружейный Навык + 1d10+МодСтр99]\n против \n[Сложность от дистанции]"
    },
    DistantAttWithShotgun : {
      actName:"DistantAttWithShotgun",
      description:"совершает атаку дальнего боя с дробовиком",
      whatToRoll:"[Дистанция дробовика = 50м.\nУрБлизко=4d6\nУрСредне=3d6\nУрПолн=2d6]"
    },
}