const mrGreen = {
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
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: 'Was she looking through the keyhole at the very moment the crime took place?',
  age: 62,
  image: 'assets/peacock.png',
  occupation: 'Cook',
  favoriteWeapon: 'candlestick'
};

const rope = {
  name: 'Rope',
  weight: 10,
  id: 'rope',
  description: 'Who could have tied such a strong knot?'
};

const knife = {
  name: 'Knife',
  weight: 10,
  id: 'knife',
  description: 'The steel is shining as though it was recently cleaned...'
};

const candlestick = {
  name: 'Candlestick',
  id: 'candlestick',
  description: 'Very solid brass and very, very blunt.'
};

const leadPipe = {
  name: 'Lead Pipe',
  id: 'lead pipe',
  description: 'Who could have struck such a blow?'
};

const poison = {
  name: 'Poison',
  id: 'poison',
  description: 'Who broke the wax seal on the vial?'
};

const horseshoe = {
  name: 'Horseshoe',
  id: 'horseshoe',
  description: 'What suspect brings his own horses to the country?'
};

const hatPin = {
  name: 'Hat Pin',
  id: 'hatPin',
  description: 'Small, sharp, and discreet.'
};

const wrench = {
  name: 'Wrench',
  id: 'wrench',
  description: 'Whose fingerprints are on the grip?'
};

const revolver = {
  name: 'Revolver',
  id: 'revolver',
  description: 'The mechanism seems well-oiled...'
};

const suspects = [mrGreen, profPlum, missScarlett, mrsPeacock, colMustard, mrsWhite];

const weapons = [rope, knife, candlestick, leadPipe, poison, horseshoe, hatPin, wrench, revolver];

const rooms = [Gazebo, Conservatory,  Kitchen, Study, Library, Fountain, Lounge, Ballroom, Hall, Spa, Stables, Observatory, Theater, Garage, Patio];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = `${suspects} ${weapons} ${rooms}`;

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
}

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
