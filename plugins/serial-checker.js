import Vue from 'vue'
import serials from 'static/serials.json'

Vue.prototype.$serialChecker = (serialInput) => {
  let status = null
  const digitRegex = /\D/

  if (serialInput.length >= 4) {
    let firstPart = serialInput.substring(0, 4).toUpperCase()
    let secondPart = serialInput.substring(3, 10).toUpperCase()
    if (serials[firstPart]) {
      if (serialInput.length >= 10) {
        secondPart = secondPart.replace(digitRegex, '0')

        let serialPart = parseInt(secondPart)
        let currentSerials = serials[firstPart]
        for (const serial in currentSerials) {
          if (serialPart > parseInt(serial)) {
            continue
          } else {
            status = serials[firstPart][serial]
            break
          }
        }

        if (status === null) {
          status = 'patched'
        }
      } else {
        status = 'incorrect'
      }
    } else {
      status = 'warning'
    }
  } else {
    status = 'incorrect'
  }

  return status
}
