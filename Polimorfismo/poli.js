//Polymorphism in this case, is methods behaving in different ways


class Vehicle {
     move(){
        console.log('The Vehicle is moving')
     }
}  


class car extends Vehicle {  // extends Vehicle class to use and change behavior of move method. 
    move(){
        console.log('The car is moving')
    }   
}


class ship extends Vehicle {
    move(speed){ // we can pass parameters as well
        console.log(`The ship is moving at ${speed}KM per hour`)
    }   
}


class bike extends Vehicle {
    move(){
        console.log('The bike is moving')
    }   
}


const chevette = new car()
const titanic = new ship()



chevette.move()
titanic.move(200)




