# Cluedo Mystery Picker - Overview
Project done as a part of Technigo bootcamp.

Create a piece of the classic board game Cluedo. The user (who is the game leader and the one that will know all about the murder) should be able to click on three decks of cards, to randomly get a character, a weapon and a room. Then there should also be a button to "reveal" the mystery.

Learning objectives:
1. Create and manipulate objects
2. Create arrays
3. Practice manipulating the DOM using Javascript


## Approach
Clue is a favorite of mine (more the movie than the actual game), so to me the feel of Cluedo is light-hearted and sometimes goofy. I knew I wanted the styling of the page to go in that direction and I wanted things to be cute if not a bit cartooney. Having this in mind, I chose this week to focus on working out the functions in JavaScript first. This was a good strategy since knowing that the styling bit can easily get me sidetracked. My goal is always to deliver a page which appears clean and simple even if there's a huge jumble of code happening in the background and I feel that I hit the mark this week. 


## Core Tech
- JavaScript
- HTML5
- CSS


## Requirements Completed
🔵  Blue Level (Minimum)
- Style your page
- Site should have three clickable cards and a clickable button.
- You should be able to randomly pick suspects, weapons and rooms.
- You should be able to reveal the mystery.


<!-- 🔴  Red Level (Intermediary Goals)
- Make your objects more complex :
    - Add `favouriteWeapon` property to each suspect, indicating his favourite weapon. The value of it should be unique id, possibly name of a weapon written lowercase like `favouriteWeapon: "knife"`. Add the same value as an `id` to each weapon in weapon object like `id: "knife"`. It's very important that they have exactly the same value so later on, in **⚫  Black Level** we can compare them.
    - Create `shuffleFavouriteWeapon` function to change favourite weapons of each person
    - Display those properties in mystery card as an info part
- Add loading animations which will signify that generating of a suspect, weapon and room is currently during processing. It should last couple seconds -->

<!-- ⚫  Black Level (Advanced Goals)
- Make use of additional `favouriteWeapon` property created in **🔴 Red level.** Change logic behind generating weapon so it's not completely random anymore and it's more likely to draw weapon which is the favourite one of a suspect generated in previous step. You can do that by creating new array of weapon objects, where favourite weapon object occurs more than one time so probability of picking it is higher.
- Create similar logic for relation between weapon and room - knives are more likely to be found in kitchen, candlestick in living room etc. -->


## See it live
https://pwangy-cluedo.netlify.app/