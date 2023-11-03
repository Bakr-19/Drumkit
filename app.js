let display1 = document.querySelector('.display1')

let display2 = document.querySelector('.display2')

let display3 = document.querySelector('.display3')

let display4 = document.querySelector('.display4')

let display5 = document.querySelector('.display5')

let display6 = document.querySelector('.display6')

let displaybox = document.querySelector('.displaybox')

let audio = new Audio()
let audio1 = new Audio()
let audio2 = new Audio()
let audio3 = new Audio()
let audio4 = new Audio()
let audio5 = new Audio()





display1.addEventListener('click', () => {
  audio1.src = ("./sounds/boom.wav")
  audio1.play(audio1)
  displaybox.textContent = 'Boom'
})


document.addEventListener('keydown', (event) => {
  audio1.src = ("./sounds/boom.wav")
  if(event.key == "d"){
    audio1.play(audio1)
    displaybox.textContent = 'Boom'

  }

})


display2.addEventListener('click', () => {
  audio.src = ("./sounds/clap.wav")
  audio.play(audio)
  displaybox.textContent = 'Clap'
})


document.addEventListener('keydown', (event) => {
  audio.src = ("./sounds/clap.wav")
  audio.load(audio)
  if(event.key == "f"){
    audio.play(audio)
    displaybox.textContent = 'Clap'

  }

})


display3.addEventListener('click', () => {
  audio2.src = ("./sounds/hihat.wav")
  audio2.play(audio2)
  displaybox.textContent = 'Hihat'
})


document.addEventListener('keydown', (event) => {
  audio2.src = ("./sounds/hihat.wav")
  audio2.load(audio2)
  if(event.key == "g"){
    audio2.play(audio2)
    displaybox.textContent = 'Hihat'

  }

})


display4.addEventListener('click', () => {
  audio3.src = ("./sounds/kick.wav")
  audio3.play(audio2)
  displaybox.textContent = 'Kick'
})


document.addEventListener('keydown', (event) => {
  audio3.src = ("./sounds/kick.wav")
  audio3.load(audio3)
  if(event.key == "h"){
    audio3.play(audio3)
    displaybox.textContent = 'Kick'

  }

})




display5.addEventListener('click', () => {
  audio4.src = ("./sounds/openhat.wav")
  audio4.play(audio4)
  displaybox.textContent = 'openhat'
})


document.addEventListener('keydown', (event) => {
  audio4.src = ("./sounds/openhat.wav")
  audio4.load(audio4)
  if(event.key == "j"){
    audio4.play(audio4)
    displaybox.textContent = 'openhat'

  }

})



display6.addEventListener('click', () => {
  audio5.src = ("./sounds/ride.wav")
  audio5.play(audio5)
  displaybox.textContent = 'ride'
})


document.addEventListener('keydown', (event) => {
  audio5.src = ("./sounds/ride.wav")
  audio5.load(audio5)
  if(event.key == "k"){
    audio5.play(audio5)
    displaybox.textContent = 'ride'

  }

})

