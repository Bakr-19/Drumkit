let display1 = document.querySelector('.display1')

let display2 = document.querySelector('.display2')

let display3 = document.querySelector('.display3')

let display4 = document.querySelector('.display4')

let display5 = document.querySelector('.display5')

let display6 = document.querySelector('.display6')

let displaybox = document.querySelector('.displaybox')

let text = document.querySelectorAll('.text')

let display = document.querySelectorAll(".display")


let audio = new Audio()




function btnDown(){
  display1.addEventListener('click', () => {
    myFunction(1)
  })
  display2.addEventListener('click', () => {
    myFunction(2)
  })
  display3.addEventListener('click', () => {
    myFunction(3)
  })
  display4.addEventListener('click', () => {
    myFunction(4)
  })
  display5.addEventListener('click', () => {
    myFunction(5)
  })
  display6.addEventListener('click', () => {
    myFunction(6)
  })

  document.addEventListener('keydown', (event) => {
    if(event.key == "d"){
      myFunction(1)
  
    }
    else if(event.key == "f"){
      myFunction(2)
    }
    else if(event.key == "g"){
      myFunction(3)
    }
    else if(event.key == "h"){
      myFunction(4)
    }
    else if(event.key == "j"){
      myFunction(5)
    }
    else if(event.key == "k"){
      myFunction(6)
    }
  
  })
  
}

btnDown()


function myFunction(roll){
  switch(roll){
    case 1:
      audio.setAttribute("src", "./sounds/boom.wav")
      audio.play()
      text[0].classList.toggle('special')
      console.log(text[0].classList)
      displaybox.textContent = 'Boom'
      
      break;
    case 2:
      audio.setAttribute("src", "./sounds/clap.wav")
      console.log(audio)
      audio.play()
      text[1].classList.toggle('special')
      displaybox.textContent = 'Clap'
      break;
    case 3:
        audio.setAttribute("src", "./sounds/hihat.wav")
        console.log(audio)
        audio.play()
        text[2].classList.toggle('special')
        displaybox.textContent = 'Hihat'
        break;
    case 4:
          audio.setAttribute("src", "./sounds/kick.wav")
          console.log(audio)
          audio.play()
          text[3].classList.toggle('special')
          displaybox.textContent = 'Kick'
          
          break;
    case 5:
            audio.setAttribute("src", "./sounds/openhat.wav")
            console.log(audio)
            audio.play()
            text[4].classList.toggle('special')
            displaybox.textContent = 'Openhat'
            break;
    case 6:
              audio.setAttribute("src", "./sounds/ride.wav")
              console.log(audio)
              audio.play()
              text[5].classList.toggle('special')
              displaybox.textContent = 'Ride'
              break;    
    
    default:
      console.log("Nothing")

  }
}

