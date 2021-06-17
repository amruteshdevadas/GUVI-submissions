var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ]
  //for
  for (let index = 0; index < obj.length; index++) {
      const element = obj[index];
      console.table(element)
  }
//for in
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.table(element)
    }
}
//for of
for (const i of obj) {
console.log(i)
    
}
  //foreach
  obj.forEach(element => {
      console.log(element);
      
  });