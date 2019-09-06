// Your code here

class Polygon {
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((a,b) => a + b, 0)
  }

}

class Triangle extends Polygon {
  get isValid(){
    if (this.countSides === 3){
      let ordered = this.sides.sort(function(a, b){return a-b})
      console.log("SIDES:", ordered)
      if (ordered[0]+ordered[1]>ordered[2]){return true}
      else {return false}
    }
    else {
      return false}
    }
}

class Square extends Polygon {
  get isValid(){
    if (this.countSides == 4 &&
      this.sides.every((val, i, arr) => val === arr[0])
    ){return true}
    else {return false}
  }

  get area(){
    return this.sides[0] * this.sides[0]
  }
}
