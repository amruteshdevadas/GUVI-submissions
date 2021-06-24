class person
{
  constructor(fName,lName,age,gender,bGroup)
  {
    this.fName = fName;
    this.gender = gender;
    this.lName = lName;
    this.age = age;
    this.bGroup =bGroup;
  }
getfullname()
{
  console.log(`Full name is ${this.fName +" " +this.lName}`)
}
getage()
{
  console.log(`Age of the person is ${this.age}`)
}
getgender()
{
  console.log(`Gender of the person is ${this.gender}`)
}
getbGroup()
{
  console.log(`Blood Group of the person ${this.bGroup}`)
}
}

let person1 = new person('Amrutesh','Devadas',24,'Male','AB+ve')
person1.getfullname();
person1.getage();
person1.getbGroup();
person1.getgender();