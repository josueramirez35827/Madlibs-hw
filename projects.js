function madlibs() {
  let story1 = "Story 1";
  let story2 = "Story 2";

  let playerInput = prompt(`Would you like ${story1} or ${story2} ?`);
  if (playerInput.toLowerCase() == story1.toLowerCase()) {
    let adjective1 = prompt('Type an adjective');
    let generalPlace = prompt('Type a general place');
    let vehicleName = prompt('Type a vehicle name(plural)');
    let gameName = prompt('Type the name of a game');
    let pluralNoun = prompt('Type a plural noun');
    let ingVerb = prompt('Type an ing verb');
    let secondIngVerb = prompt('Type another ing verb');
    let foodName = prompt('Type a food name');
    let sportName = prompt('Type the name of a sport');
    let thirdIngVerb = prompt('Type another ing verb');
    let emotion = prompt('Type an emotion');
    let number = prompt('Type a number');

    document.getElementById("Madlib1").innerHTML = `A vacation is when you take a trip to some ${adjective1} place near an amazing ${generalPlace}. A good vacation place is one where you can ride ${vehicleName} or play ${gameName} or go hunting for ${pluralNoun}. I like to spend my time ${ingVerb} or ${secondIngVerb}. When parents go on a vacation, they spend their time eating three ${foodName} a day. Usually, fathers play ${sportName}, and mothers spend their time ${thirdIngVerb}. Adults need vacations more than kids because adults are always very ${emotion} because they have to work ${number} hours every day all year just to afford their vacations!`

  } else if (playerInput.toLowerCase() == story2.toLowerCase()) {
    let adjective2 = prompt("Type an adjective");
    let famousPlace = prompt("Type a famous place");
    let pluralNoun2 = prompt("Type a plural noun");
    let adjective3 = prompt("Type another adjective");
    let foodName2 = prompt("Type a food (plural)");
    let emotion2 = prompt("Type a emotion");
    let ingVerb4 = prompt("Type an ing verb");
    let commonPlace = prompt("Type a common place");
    let adjective4 = prompt("Type another adjective");
    let noun = prompt("Type a noun");
    let adjective5 = prompt("Type another adjective");
    let noun2 = prompt("Type another noun");
    let familyMember = prompt("Type a family member");
    let adjective6 = prompt("Type another adjective");

    document.getElementById("Madlib2").innerHTML = `Today we took a ${adjective2} fieldtrip to ${famousPlace}. They're famous for making ${pluralNoun2} and for cooking ${adjective3} ${foodName2}. Eating all that food made me feel ${emotion2}. Next we enjoyed the local tradition of ${ingVerb4} in the middle of the ${commonPlace}! Finally, we went shopping for souvenirs. I bought a ${adjective4} ${noun} for myself, and a ${adjective5} ${noun2} for my favorite ${familyMember}. I'll definitely never forget this ${adjective6} trip!`

  } else {
    alert("You didn't choose story 1 or story 2!")
  }


}

madlibs();

