import actions from "./actions"

export default function actionMethod(actionName, _persName) {
  alert(`${_persName} ${actions[actionName].description}\n${actions[actionName].whatToRoll}`)
}