class person{
    constructor(nama, kelas, umur, colorfav){
        this.nama=nama;
        this.kelas=kelas;
        this.umur=umur;
        this.colorfav=colorfav;
    }
    greeeting(){
        return("Nama Saya" + " " + this.nama + "kelas" + " " + this.kelas + "Umur Saya" + " " + this.umur + "Color Favorit" + " " + this.colorfav);
    }
}
const person1=new person ("Alvisyah hatta ", "XI RPL 3 " , "16 ", "Black And red");
console.log(person1.greeeting());