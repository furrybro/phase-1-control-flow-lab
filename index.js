function scuberGreetingForFeet(number){
  // Write your code here!
  if (number <= 400) {
    return 'This one is on me!';
  } else if (number > 400 && number < 2000) {
    return 'That will be twenty bucks.';
  } else if (number > 2000 && number < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (number > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
   return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipMessage;

  switch (tip) {
    case 'generous':
      tipMessage = 'Thank you so much.';
      break;
    case 'not as generous':
      tipMessage = 'Thank you.';
      break;
    default:
      tipMessage = 'Bye.';
  }
  return tipMessage;
}