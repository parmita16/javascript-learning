function spell(multiplier) {
  return power => power * multiplier;
}
function memoize(fn) {
  const cache = {};

  return power => {
    if (cache[power]) return cache[power];

    cache[power] = fn(power);
    return cache[power];
  };
}
const fire = memoize(spell(3));

console.log(fire(10)); 
console.log(fire(10)); //(from cache)

console.log(fire(20)); 
console.log(fire(20)); //(from cache)

