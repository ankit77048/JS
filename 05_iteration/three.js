// we print array by using fo rof loop

const arr=[1,2,3,4,5]
for(const ele of arr){
    console.log(ele)
}

// use of map

const map=new Map()
map.set('IN' , "India")
map.set('USA' , "United staes of america")
map.set('UK' , "United Kindom")
console.log(map)

for(const [key , value] of map){
    console.log(key + " :- " + value)
}