class Person{
  constructor(nama, kelas, umur){
  this.nama=nama;
  this.kelas=kelas;
  this.umur=umur;
  }
}
class nons extends Person{
  constructor(nama, kelas, umur, hobi, favcolor){
  super(nama, kelas, umur);
  this.hobi=hobi;
  this.favcolor=favcolor;
}
greeting(){
  return `Nama Saya ${this.nama} Kelas ${this.kelas} Umur Saya ${this.umur} Hobi Saya ${this.hobi} Favcolor ${this.favcolor}`
   }
}
const person2 = new nons("Alvisyah", 11, 16, "Futsal", "Black");
console.log(person2.greeting());