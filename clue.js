// Suspects
const mrGreen = {
  title: 'Mr. Green',
  firstName: 'John',
  lastName: 'Green',
  color: 'green',
  description: 'A defrocked priest turned tycoon, he does not like people looking into his past.',
  age: 53,
  image: 'assets/green.png',
  occupation: 'Businessman',
  favoriteWeapon: 'lead pipe'
};

const profPlum = {
  title: 'Professor Plum',
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'purple',
  description: 'An archaeologist with a dubious reputation, he has worked on a number of mysterious cases.',
  age: 37,
  image: 'assets/plum.png',
  occupation: 'Archeologist',
  favoriteWeapon: 'poison'
};

const missScarlett = {
  title: 'Miss Scarlett',
  firstName: 'Josephine',
  lastName: 'Scarlett',
  color: 'red',
  description: 'Red has always been the colour of danger...',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'Madam',
  favoriteWeapon: 'rope'
};

const mrsPeacock = {
  title: 'Mrs. Peacock',
  firstName: 'Patricia',
  lastName: 'Peacock',
  color: 'blue',
  description: 'An ornithologist with a special interest in birds of prey...',
  age: 48,
  image: 'assets/peacock.png',
  occupation: 'Ornithologist',
  favoriteWeapon: 'hatPin'
};

const colMustard = {
  title: 'Colonel Mustard',
  firstName: 'Michael',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A distinguished soldier and hero of many battles, he is also an excellent shot.',
  age: 61,
  image: 'assets/mustard.png',
  occupation: 'Military',
  favoriteWeapon: 'wrench'
};

const mrsWhite = {
  title: 'Mrs. White',
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: 'Was she looking through the keyhole at the very moment the crime took place?',
  age: 62,
  image: 'assets/peacock.png',
  occupation: 'Cook',
  favoriteWeapon: 'candlestick'
};

// Weapons
const rope = {
  name: 'Rope',
  id: 'rope',
  description: 'Who could have tied such a strong knot?',
  // image: 'assets/'
};

const knife = {
  name: 'Knife',
  id: 'knife',
  description: 'The steel is shining as though it was recently cleaned...',
  // image: 'assets/'
};

const candlestick = {
  name: 'Candlestick',
  id: 'candlestick',
  description: 'Very solid brass and very, very blunt.',
  // image: 'assets/'
};

const leadPipe = {
  name: 'Lead Pipe',
  id: 'lead pipe',
  description: 'Who could have struck such a blow?',
  // image: 'assets/'
};

const poison = {
  name: 'Poison',
  id: 'poison',
  description: 'Who broke the wax seal on the vial?',
  // image: 'assets/'
};

const horseshoe = {
  name: 'Horseshoe',
  id: 'horseshoe',
  description: 'What suspect brings his own horses to the country?',
  // image: 'assets/'
};

const hatPin = {
  name: 'Hat Pin',
  id: 'hatPin',
  description: 'Small, sharp, and discreet.',
  // image: 'assets/'
};

const wrench = {
  name: 'Wrench',
  id: 'wrench',
  description: 'Whose fingerprints are on the grip?',
  // image: 'assets/'
};

const revolver = {
  name: 'Revolver',
  id: 'revolver',
  description: 'The mechanism seems well-oiled...',
  // image: 'assets/'
};

// Rooms
const hall = {
  name: 'Hall',
  id: 'hall',
  // image: 'assets/'
};
const lounge = {
  name: 'Lounge',
  id: 'lounge',
  // image: 'assets/'
};
const diningRoom = {
  name: 'Dining Room',
  id: 'diningRoom',
  // image: 'assets/'
};
const kitchen = {
  name: 'Kitchen',
  id: 'kitchen',
  // image: 'assets/'
};
const ballroom = {
  name: 'Ballroom',
  id: 'ballroom',
  // image: 'assets/'
};
const conservatory = {
  name: 'Conservatory',
  id: 'conservatory',
  // image: 'assets/'
};
const billiardRoom = {
  name: 'Billiard Room',
  id: 'billiardRoom',
  // image: 'assets/'
};
const library = {
  name: 'Library',
  id: 'library',
  // image: 'assets/'
};
const study = {
  name: 'Study',
  id: 'study',
  // image: 'assets/'
};
const spa = {
  name: 'Spa',
  id: 'spa',
  // image: 'assets/'
};
const observatory = {
  name: 'Observatory',
  id: 'observatory',
  // image: 'assets/'
};
const stables = {
  name: 'Stables',
  id: 'stables',
  // image: 'assets/'
};
const guestHouse = {
  name: 'Guest House',
  id: 'guestHouse',
  // image: 'assets/'
};
const trophyRoom = {
  name: 'Trophy Room',
  id: 'trophyRoom',
  // image: 'assets/'
};
const carriageHouse = {
  name: 'Carriage House',
  id: 'carriageHouse',
  // image: 'assets/'
};

// Arrays for suspects, weapons, and rooms.
const suspects = [mrGreen, profPlum, missScarlett, mrsPeacock, colMustard, mrsWhite];

const weapons = [rope, knife, candlestick, leadPipe, poison, horseshoe, hatPin, wrench, revolver];

const rooms = [hall, lounge, diningRoom, kitchen, ballroom, conservatory, billiardRoom, library, study, spa, observatory, stables, guestHouse, trophyRoom, carriageHouse];

// Testing
// console.log(profPlum.description);
// console.log(poison.description);
// console.log(knife.description);

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
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// The values will be set later.

const mystery = {
  killer: pickKiller,
  weapon: pickWeapon,
  room: pickRoom
};

// Clicking a card from each deck will draw a card
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
};

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
};



// Killer Card Display
// document.getElementById(
//     'killerImg'
//   ).innerHTML = `${mystery.killer.image}`;

document.getElementById('killerCard').style.background = mystery.killer.color;

document.getElementById(
    'killerTitle'
  ).innerHTML = `${mystery.killer.title}`;

document.getElementById(
    'killerName'
  ).innerHTML = `AKA: ${mystery.killer.firstName} ${mystery.killer.lastName}`;

document.getElementById(
    'killerAge'
  ).innerHTML = `Age: ${mystery.killer.age}`;

document.getElementById(
    'killerOccupation'
  ).innerHTML = `Occupation: ${mystery.killer.occupation}`;

document.getElementById(
    'killerFavWeapon'
  ).innerHTML = `Favourite Weapon: ${mystery.killer.favoriteWeapon}`;

document.getElementById(
    'killerDescription'
  ).innerHTML = `${mystery.killer.description}`;


// Weapon
// document.getElementById(
//     'weaponImg'
//   ).innerHTML = `${mystery.killer.image}`;

document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`

document.getElementById(
    'weaponDescription'
  ).innerHTML = `${mystery.weapon.description}`

// Room
// document.getElementById(
//     'roomImg'
//   ).innerHTML = `${mystery.room.image}`;

document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room.name}`

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

function revealMystery() {
//   hide reveal button
// show reset button    
  document.getElementById(
    'mystery'
  ).innerHTML = `It was ${mystery.killer.title} with the ${mystery.weapon.name} in the ${mystery.room.name}!`
};

