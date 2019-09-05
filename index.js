// Your code here

const reducer = (accumulator, currentValue) => accumulator + currentValue;

class Polygon{
    constructor(array){
    this.sides = array
    }

        get countSides(){
            return this.sides.length
        }

        get perimeter(){
            return this.sides.reduce(reducer, 0)
        }
}

class Triangle extends Polygon{

    get isValid(){
        let a =this.sides[0]  
        let b =this.sides[1]  
        let c =this.sides[2]  
        if ( a + b > c && b+c > a && a+c > b){
            return true
        }
        else{console.log("butts")
            return false
        }

    }
}
class Square extends Polygon{

    get isValid(){
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]  
        let d = this.sides[3]  
        if(a != b || b!=c || c!=d){
            return false
        }
        else{
            return true
        }
    }

    get area(){
        return (this.sides[0] * this.sides[1])
    }

}