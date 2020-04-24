class Matrix{
    constructor(matrixString){
      this.columns=((matrixString)=>{
        function transpose(matrix) {
            return matrix[0].map((col, i) => matrix.map(row => row[i]));
          }          
        return transpose(matrixString.split('\n').map(x=>x.split(' ').map(y => parseInt(y))))
      })(matrixString);

      this.rows=((matrixString)=>{
        return matrixString.split('\n').map(x=>x.split(' ').map(y => parseInt(y)))
     })(matrixString);
    }
 }


var s = new Matrix('89 1903 3\n18 3 1\n9 4 800')
console.log(s.columns[1])