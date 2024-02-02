// MAIN

let warmHugs = `Hi, I'm Olaf and I like warm hugs.`;
console.log(warmHugs.toUpperCase()); // HI, I'M OLAF AND I LIKE WARM HUGS.
warmHugs = warmHugs.replace(`like`, `love`);

let beenImpaled = `Oh, look at that. I've been impaled.`;
console.log(beenImpaled.slice(beenImpaled.indexOf(`I've been impaled.`))); // I've been impaled.

let dotDotDot = `...`;
let skullBones = `I don't have a skull${dotDotDot}or bones.`;

console.log(Math.PI); // 3.141592653589793

let randomNumber = Math.floor(Math.random() * 3);

// BONUS
` Let It Go!`.repeat(2).toUpperCase().trim();

let reindeers = `Reindeers are better than people.`;
console.log(reindeers.replaceAll(` `, `_`)); // Reindeers_are_better_than_people.

console.log(Math.sqrt(2)); // 1.4142135623730951

let newRandomNumber = Math.floor(Math.random() * 17 + 7);
