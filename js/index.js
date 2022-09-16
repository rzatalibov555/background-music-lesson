

var person = {
    p_name: "Ismayil",
    surname: "Qahramanov",
    age: 15,
    eye_color: "brown",
    job: "Programmer",
    country: "Azerbaijan",
    city: "Bilasuvar",
    
}

var my_cars = {
    brand: "BMW", 
    model: "328i",
    motor: "2.8",
    fuel:  "Benzin",
    year:  2022,
    test: function(){
        return "My name is "+person.p_name+" i am "+person.job+". My car is "+this.brand+" "+this.model
    }
}




    // confirm(car.test())
    // console.log(my_cars.test())
    // document.write(car.test())

// document.getElementById("demo").innerHTML = "Menim adim "+person.p_name+" "+person.surname+"dur ve menim masinimin markasi "+car.brand+" "+car.model+"-dir";

// document.getElementById("demo").innerHTML = car.brand+" - "+ car.model
// document.getElementById("demo").innerHTML = person.p_name+" "+person.surname+ " - "+person.job



// person.fin = "demo"
// console.log(person)