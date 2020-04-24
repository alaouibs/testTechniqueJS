class Square{
    constructor(n){
      this.squareOfSum=((n)=>{
         return Math.pow(n*(n+1)/2,2);
      })(n);
      this.sumOfSquares=((n)=>{
         return Math.pow(n,3)/3 + Math.pow(n,2)/2 + n/6;
      })(n);
      
      this.difference = Math.abs(this.sumOfSquares - this.squareOfSum);
    }
 }


var s = new Square(100)
console.log(s.difference)