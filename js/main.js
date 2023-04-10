'use strict'

//ToolBox
import {
  delay, // Asynchronus delay function : delay(time)
  log, // shorthand console.log : log()
  select, //Custom querrySelector : select(element, ?all[true:false])
  event, // Custom event listener : event(element,event,callback)
  classlist, // Class manipulator : classlist(element,action["+"(add),"-"(remove),"x"(toggle)],class(string or [])),
  debounce, // Debounce ( runs the function only after the specified delay ) : debounce(function,delay)
  throttle, // Throttle ( runs the function n times per specified amount time ) : throttle(function,interval)
  random, // Random number generator : random(min,max)
} from './utils'

//Imports
import Alpine from 'alpinejs'

// Setup before DOM loads
const initApp = async () => {
  // 🗻 Alpine modules
  window.Alpine = Alpine
  Alpine.data('data', Data)
  Alpine.start()

  // async function getImage(url, selector) {
  //   fetch(url)
  //     .then((res) => {
  //       return res.blob()
  //     })
  //     .then((blob) => {
  //       select(selector).src = URL.createObjectURL(blob)
  //       select(selector).width = blob.size
  //       select(selector).height = blob.size
  //     })
  //     .catch((err) => {})
  // }

  // await getImage('./src/assets/image-product-mobile.jpg', '.image-mobile')
  // await getImage('./src/assets/image-product-desktop.jpg', '.image-desktop')
}

event(document, 'DOMContentLoaded', initApp)

function Data() {
  return {
    init() {},
    appInfo: {
      icon: '🌄',
      title: `<h1><b>AlpineJS</b> + <b>TailwindCSS</b> <br> StarterTemplate</h1>`,
    },
    cardInfo: {
      tag: 'perfume',
      title: 'Gabrielle Essence Eau De Parfum',
      description:
        'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
      price: 149.99,
      exPrice: 169.99,
      isInCart: false,
      quantity: 0,
    },
  }
}

// 🚩 JS Code comes here
