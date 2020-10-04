// Objects for Suspects
const mrGreen = {
  title: 'Mr. Green',
  firstName: 'John',
  lastName: 'Green',
  color: '#668547',
  description: 'A defrocked priest turned tycoon, he does not like people looking into his past.',
  age: 53,
  image: 'assets/green.png',
  occupation: 'Businessman'
}

const profPlum = {
  title: 'Professor Plum',
  firstName: 'Peter',
  lastName: 'Plum',
  color: '#b2a3c2',
  description: 'An archaeologist with a dubious reputation, he has worked on a number of mysterious cases.',
  age: 37,
  image: 'assets/plum.png',
  occupation: 'Archeologist'
}

const missScarlett = {
  title: 'Miss Scarlett',
  firstName: 'Josephine',
  lastName: 'Scarlett',
  color: '#d07474',
  description: 'Red has always been the colour of danger...',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'Madam'
}

const mrsPeacock = {
  title: 'Mrs. Peacock',
  firstName: 'Patricia',
  lastName: 'Peacock',
  color: '#407fbf',
  description: 'An ornithologist with a special interest in birds of prey...',
  age: 48,
  image: 'assets/peacock.png',
  occupation: 'Ornithologist',
}

const colMustard = {
  title: 'Colonel Mustard',
  firstName: 'Michael',
  lastName: 'Mustard',
  color: '#eacc69',
  description: 'A distinguished soldier and hero of many battles, he is also an excellent shot.',
  age: 61,
  image: 'assets/mustard.png',
  occupation: 'Military'
}

const mrsWhite = {
  title: 'Mrs. White',
  firstName: 'Blanche',
  lastName: 'White',
  color: '#999',
  description: 'Was she looking through the keyhole at the very moment the crime took place?',
  age: 62,
  image: 'assets/white.png',
  occupation: 'Cook'
}

// Objects for Weapons
const rope = {
  name: 'Rope',
  color: '#c9c99c',
  description: 'Who could have tied such a strong knot?',
  image: 'assets/rope.png'
}

const knife = {
  name: 'Knife',
  color: '#adad85',
  description: 'The steel is shining as though it was recently cleaned...',
  image: 'assets/knife.png'
}

const candlestick = {
  name: 'Candlestick',
  color: '#a3c2c2',
  description: 'Very solid brass and very, very blunt.',
  image: 'assets/candlestick.png'
}

const leadPipe = {
  name: 'Lead Pipe',
  color: '#99838f',
  description: 'Who could have struck such a blow?',
  image: 'assets/leadpipe.png'
}

const poison = {
  name: 'Poison',
  color: '#c2c2d6',
  description: 'Who broke the wax seal on the vial?',
  image: 'assets/poison.png'
}

const horseshoe = {
  name: 'Horseshoe',
  color: '#bab2ab',
  description: 'What suspect brings his own horses to the country?',
  image: 'assets/horseshoe.png'
}

const hatPin = {
  name: 'Hat Pin',
  color: '#a2c3a3',
  description: 'Small, sharp, and discreet.',
  image: 'assets/hatpin.png'
}

const wrench = {
  name: 'Wrench',
  color: '#d1d194',
  description: 'Whose fingerprints are on the grip?',
  image: 'assets/wrench.png'
}

const revolver = {
  name: 'Revolver',
  color: '#ebccad',
  description: 'The mechanism seems well-oiled...',
  image: 'assets/revolver.png'
}

// Objects for Rooms
const hall = {
  name: 'Hall',
  color: '#c29970',
  image: 'assets/hall.png'
}

const lounge = {
  name: 'Lounge',
  color: '#d19494',
  image: 'assets/lounge.png'
}

const diningRoom = {
  name: 'Dining Room',
  color: '#669966',
  image: 'assets/diningroom.png'
}

const kitchen = {
  name: 'Kitchen',
  color: '#dbbdcc',
  image: 'assets/kitchen.png'
}

const ballroom = {
  name: 'Ballroom',
  color: '#bdbddb',
  image: 'assets/ballroom.png'
}

const conservatory = {
  name: 'Conservatory',
  color: '#92b2c9',
  image: 'assets/conservatory.png'
}

const billiardRoom = {
  name: 'Billiard Room',
  color: '#667a52',
  image: 'assets/billiardroom.png'
}

const library = {
  name: 'Library',
  color: '#738c80',
  image: 'assets/library.png'
}

const study = {
  name: 'Study',
  color: '#7ab8b8',
  image: 'assets/study.png'
}

const spa = {
  name: 'Spa',
  color: '#ccd1c7',
  image: 'assets/spa.png'
}

const observatory = {
  name: 'Observatory',
  color: '#667f99',
  image: 'assets/observatory.png'
}

const stables = {
  name: 'Stables',
  color: '#a6a659',
  image: 'assets/stables.png'
}

const guestHouse = {
  name: 'Guest House',
  color: '#d6c2d6',
  image: 'assets/guesthouse.png'
}

const trophyRoom = {
  name: 'Trophy Room',
  color: '#999966',
  image: 'assets/trophyroom.png'
}

const carriageHouse = {
  name: 'Carriage House',
  color: '#b8cce0',
  image: 'assets/carriagehouse.png '
}

// Arrays for suspects, weapons, and rooms.
const suspects = [
  mrGreen, 
  profPlum, 
  missScarlett, 
  mrsPeacock, 
  colMustard, 
  mrsWhite
]

const weapons = [
  rope, 
  knife, 
  candlestick, 
  leadPipe, 
  poison, 
  horseshoe, 
  hatPin, 
  wrench, 
  revolver
]

const rooms = [
  hall, 
  lounge, 
  diningRoom, 
  kitchen, 
  ballroom, 
  conservatory, 
  billiardRoom, 
  library, 
  study, 
  spa, 
  observatory, 
  stables, 
  guestHouse, 
  trophyRoom, 
  carriageHouse
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
}

// Object to hold The Mystery
const mystery = {
  killer: null,
  weapon: null,
  room: null
}

// Funtions to select a random Killer, Weapon, and Room to add to Mystery Object and display card.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)

  const killer = document.getElementById('killerCard')
  const killerName = document.getElementById("killerTitle")
  const killerPic = document.getElementById("killerImg")
  const killerFullName = document.getElementById("killerName")
  const killerAge = document.getElementById("killerAge")
  const killerWrk = document.getElementById("killerOccupation")
  // const killerFavWeapon = document.getElementById("killerFavWeapon")
  const killerDescrip = document.getElementById("killerDescription")

  killer.style.background = mystery.killer.color
  killerName.innerHTML = mystery.killer.title
  killerPic.src = mystery.killer.image
  killerFullName.innerHTML = `AKA: ${mystery.killer.firstName} ${mystery.killer.lastName}`
  killerAge.innerHTML = `Age: ${mystery.killer.age}`
  killerWrk.innerHTML = `Occupation: ${mystery.killer.occupation}`
  // killerFavWeapon.innerHTML = `Favourite Weapon: ${mystery.killer.favoriteWeapon}`
  killerDescrip.innerHTML = mystery.killer.description
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const weapon = document.getElementById("weaponCard")
  const weaponName = document.getElementById("weaponName")
  const weaponPic = document.getElementById('weaponImg')
  const weaponDesc = document.getElementById("weaponDescription")

  weapon.style.background = mystery.weapon.color
  weaponName.innerHTML = mystery.weapon.name
  weaponPic.src = mystery.weapon.image
  weaponDesc.innerHTML = mystery.weapon.description
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const room = document.getElementById("roomCard")
  const rooomName = document.getElementById("roomName")
  const roomPic = document.getElementById('roomImg')

  room.style.background = mystery.room.color
  rooomName.innerHTML = mystery.room.name
  roomPic.src = mystery.room.image
}

const revealMystery = () => {
  const mysterySolution = document.getElementById("mystery")
  const hideReveal = document.getElementById("mysteryReveal")
  const showReset = document.getElementById("reset")
  if (!mystery.killer || !mystery.room || !mystery.weapon){
    mysterySolution.innerHTML = 'Please choose one card from every deck.'
  } else {
    mysterySolution.innerHTML = 
    `It was ${mystery.killer.title} with the ${mystery.weapon.name} in the ${mystery.room.name}!`
    hideReveal.style.display = "none"
    showReset.style.display = "block"
  }
} 