// Objects for Suspects
const mrGreen = {
  title: 'Mr. Green',
  firstName: 'John',
  lastName: 'Green',
  color: '#668547',
  description: 'A defrocked priest turned tycoon, he does not like people looking into his past.',
  age: 53,
  image: 'assets/green.png',
  occupation: 'Businessman',
  favoriteWeapon: 'Lead Pipe'
}

const profPlum = {
  title: 'Professor Plum',
  firstName: 'Peter',
  lastName: 'Plum',
  color: '#b29cc9',
  description: 'An archaeologist with a dubious reputation, he has worked on a number of mysterious cases.',
  age: 37,
  image: 'assets/plum.png',
  occupation: 'Archeologist',
  favoriteWeapon: 'Poison'
}

const missScarlett = {
  title: 'Miss Scarlett',
  firstName: 'Josephine',
  lastName: 'Scarlett',
  color: '#d07474',
  description: 'Red has always been the colour of danger...',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'Madam',
  favoriteWeapon: 'Rope'
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
  favoriteWeapon: 'Hat Pin'
}

const colMustard = {
  title: 'Colonel Mustard',
  firstName: 'Michael',
  lastName: 'Mustard',
  color: '#eacc69',
  description: 'A distinguished soldier and hero of many battles, he is also an excellent shot.',
  age: 61,
  image: 'assets/mustard.png',
  occupation: 'Military',
  favoriteWeapon: 'Wrench'
}

const mrsWhite = {
  title: 'Mrs. White',
  firstName: 'Blanche',
  lastName: 'White',
  color: '#999',
  description: 'Was she looking through the keyhole at the very moment the crime took place?',
  age: 62,
  image: 'assets/white.png',
  occupation: 'Cook',
  favoriteWeapon: 'Candlestick'
}

// Objects for Weapons
const rope = {
  name: 'Rope',
  color: '#',
  description: 'Who could have tied such a strong knot?',
  image: 'assets/rope.png'
}

const knife = {
  name: 'Knife',
  color: '#',
  description: 'The steel is shining as though it was recently cleaned...',
  image: 'assets/knife.png'
}

const candlestick = {
  name: 'Candlestick',
  color: '#',
  description: 'Very solid brass and very, very blunt.',
  image: 'assets/candlestick.png'
}

const leadPipe = {
  name: 'Lead Pipe',
  color: '#',
  description: 'Who could have struck such a blow?',
  image: 'assets/leadpipe.png'
}

const poison = {
  name: 'Poison',
  color: '#',
  description: 'Who broke the wax seal on the vial?',
  image: 'assets/poison.png'
}

const horseshoe = {
  name: 'Horseshoe',
  color: '#',
  description: 'What suspect brings his own horses to the country?',
  image: 'assets/horseshoe.png'
}

const hatPin = {
  name: 'Hat Pin',
  color: '#',
  description: 'Small, sharp, and discreet.',
  image: 'assets/hatpin.png'
}

const wrench = {
  name: 'Wrench',
  color: '#',
  description: 'Whose fingerprints are on the grip?',
  image: 'assets/wrench.png'
}

const revolver = {
  name: 'Revolver',
  color: '#',
  description: 'The mechanism seems well-oiled...',
  image: 'assets/revolver.png'
}

// Objects for Rooms
const hall = {
  name: 'Hall',
  color: '#',
  image: 'assets/hall.png'
}

const lounge = {
  name: 'Lounge',
  color: '#',
  image: 'assets/lounge.png'
}

const diningRoom = {
  name: 'Dining Room',
  color: '#',
  image: 'assets/diningroom.png'
}

const kitchen = {
  name: 'Kitchen',
  color: '#',
  image: 'assets/kitchen.png'
}

const ballroom = {
  name: 'Ballroom',
  color: '#',
  image: 'assets/ballroom.png'
}

const conservatory = {
  name: 'Conservatory',
  color: '#',
  image: 'assets/conservatory.png'
}

const billiardRoom = {
  name: 'Billiard Room',
  color: '#',
  image: 'assets/billiardroom.png'
}

const library = {
  name: 'Library',
  color: '#',
  image: 'assets/library.png'
}

const study = {
  name: 'Study',
  color: '#',
  image: 'assets/study.png'
}

const spa = {
  name: 'Spa',
  color: '#',
  image: 'assets/spa.png'
}

const observatory = {
  name: 'Observatory',
  color: '#',
  image: 'assets/observatory.png'
}

const stables = {
  name: 'Stables',
  color: '#',
  image: 'assets/stables.png'
}

const guestHouse = {
  name: 'Guest House',
  color: '#',
  image: 'assets/guesthouse.png'
}

const trophyRoom = {
  name: 'Trophy Room',
  color: '#',
  image: 'assets/trophyroom.png'
}

const carriageHouse = {
  name: 'Carriage House',
  color: '#',
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


// Testing
// suspects.forEach((person) => {
//   console.log(`${person.firstName} ${person.lastName} has the color ${person.color}.`);
// });
// weapons.forEach((weapon) => {
//   console.log(`${weapon.name} : ${weapon.description}`);
// });
// rooms.forEach((room) => {
//    console.log(`${room.name}`);
// });

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
}

// Object to hold The Mystery
const mystery = {
  killer: '',
  weapon: '',
  room: ''
}

// Card Randomizer Funtions for Killer, Weapon, and Room
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)

  const killer = document.getElementById('killer-card')
  const killerName = document.getElementById("killerTitle")
  const killerPic = document.getElementById("killerImg")
  const killerFullName = document.getElementById("killerName")
  const killerAge = document.getElementById("killerAge")
  const killerWrk = document.getElementById("killerOccupation")
  const killerFavWeapon = document.getElementById("killerFavWeapon")
  const killerDescrip = document.getElementById("killerDescription")

  killer.style.background = mystery.killer.color
  killerName.innerHTML = mystery.killer.title
  killerPic.src = mystery.killer.image
  killerFullName.innerHTML = `AKA: ${mystery.killer.firstName} ${mystery.killer.lastName}`
  killerAge.innerHTML = `Age: ${mystery.killer.age}`
  killerWrk.innerHTML = `Occupation: ${mystery.killer.occupation}`
  killerFavWeapon.innerHTML = `Favourite Weapon: ${mystery.killer.favoriteWeapon}`
  killerDescrip.innerHTML = mystery.killer.description
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const weapon = document.getElementById("weapon-card")
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

  const room = document.getElementById("room-card")
  const rooomName = document.getElementById("roomName")
  const roomPic = document.getElementById('roomImg')

  room.style.background = mystery.room.color
  rooomName.innerHTML = mystery.room.name
  roomPic.src = mystery.room.image
}


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  const mysterySolution = document.getElementById("mystery")
  mysterySolution.innerHTML = 
  `It was ${mystery.killer.title} with the ${mystery.weapon.name} in the ${mystery.room.name}!`
  //   hide reveal button
  // show reset button
}


/*

**🔵  Blue Level (Minimum Requirements)**
- Style your page
- Site should have three clickable cards and a clickable button.
- You should be able to randomly pick suspects, weapons and rooms.
- You should be able to reveal the mystery.

Make sure you've committed and pushed a version of your project before starting with the intermediary and advanced goals.


**🔴  Red Level (Intermediary Goals)**
- Make your objects more complex :
    - Add `favouriteWeapon` property to each suspect, indicating his favourite weapon. The value of it should be unique id, possibly name of a weapon written lowercase like `favouriteWeapon: "knife"`. Add the same value as an `id` to each weapon in weapon object like `id: "knife"`. It's very important that they have exactly the same value so later on, in **⚫  Black Level** we can compare them.
    - Create `shuffleFavouriteWeapon` function to change favourite weapons of each person
    - Display those properties in mystery card as an info part
- Add loading animations which will signify that generating of a suspect, weapon and room is currently during processing. It should last couple seconds

**⚫  Black Level (Advanced Goals)**
- Make use of additional `favouriteWeapon` property created in **🔴 Red level.** Change logic behind generating weapon so it's not completely random anymore and it's more likely to draw weapon which is the favourite one of a suspect generated in previous step. You can do that by creating new array of weapon objects, where favourite weapon object occurs more than one time so probability of picking it is higher.
- Create similar logic for relation between weapon and room - knives are more likely to be found in kitchen, candlestick in living room etc.
*/
