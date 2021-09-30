var cryptoObj;
cryptoObj = window.crypto || window.msCrypto;

function randbelow(max) {
  array = new Uint16Array(7);
  cryptoObj.getRandomValues(array);
  N = array[0] + array[1];
  O = array[2] * array[5];
  return (N * O) % max
}

export function randint(min, max) {
 x = max - min;
 distance = randbelow(x);
 return max - distance;
}

export function choice(group) {
 return group[randbelow(group.length)];
}

export function password(length) {
  var str = "";
  for(var i = 0; i < length; ++i){
    chars = "qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP1234567890!@#$%^&*";
    str += choice(chars);
  }
  return str;
}
