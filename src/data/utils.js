import studentData from "./studentdata";

export const Data = studentData;
console.log(Data)

const dataWithLabels = Data.map(avg => ({
    assignment: avg.assignment,
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: `Opdracht ${
      avg.assignment
    }, difficultyRating: ${avg.difficultyRating}, enjoymentRating: ${avg.enjoymentRating}`
  }));

//unique assignments names
export const assignments = [...new Set(Data.map(item => item.assignment))]
console.log("unique", assignments)

//average berekenen
export const allDifficulty = dataWithLabels.map(item => item.difficultyRating)
console.log(allDifficulty)

//plan average per opdracht

//alle data 
//assignmentslijst
//eerst assignement uit assignmentslijst filter
//aan assignment --> diff(1) en fun(2) met map zetten
//(3)totaal diff per opdracht uitrekenen reduce methode op (1)
//(4)totaal fun per opdracht uitrekenen reduce methode op (2)
//average diff berekenen Math.round(3)/10 -> aantal students = 10
//average fun berekenen Math.round(4)/10 -> aantal students = 10

//returnen
//assignment: assignment
// lange naam -> na spatie verwijderen --> substring en indexOf? assignment.substr(0, assignment.indexOf(" "))
//?????


