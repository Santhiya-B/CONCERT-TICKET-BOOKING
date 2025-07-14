// /
// let j=1;
// do{
//     console.log("value: "+j);
//     j++;
// }while(j<=5)
    let colors=["red","green","violet"];
    for(let color of colors)
    {
        console.log(color);

    }
    let person1={name:"san", age:"21",city:"TN"}
    for(let key in person1)
    {
        console.log(key+" "+person1[key]);
    }
    let fruits=["apple","banana","mango"];
    fruits.forEach(function(fruit))