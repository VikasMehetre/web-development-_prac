function bmis(mass,height){
    bmi=mass/height**2
    return bmi
}
let jonh_mass=92
let jonh_height=1.95
let marks_mass=85
let marks_height=1.76
console.log(bmis(jonh_mass,jonh_height))
console.log(bmis(marks_mass,marks_height))
console.log(bmis(jonh_mass,jonh_height)>bmis(marks_mass,marks_height))