const marval_heroes=["spiderman","ironman","thor"]
const dc_heroes=["superman","batman","flash"]
// const new_heroes=marval_heroes.push(dc_heroes)
// console.log(new_heroes)
// const all_new_heroes=marval_heroes.concat(dc_heroes)
// console.log(all_new_heroes)
const combine_heroes=[...marval_heroes,...dc_heroes] // spread all multiple array
console.log(combine_heroes)

console.log(Array.from("ramesh")) // convert into array

const score1=100
const score2=120
const score3=140
console.log(Array.of(score1,score2,score3))
