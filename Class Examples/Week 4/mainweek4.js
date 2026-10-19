const students = [
    {name: 'Alice', score: 95},
    {name: 'Bob', score: 72},
    {name: 'Cara', score: 88},
    {name: 'Dev', score: 60},
    {name: 'Eli', score: 45},
    {name: 'Fay', score: 45},
]

const number_of_students_in_array = students.length

function grade_for(score){

    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    }

    return 'F'
}

for (const student of students) {
    const letter = grade_for(student.score)
    console.log(`${student.name} - ${student.score} (${letter})`)
}

for (let i = 0; i < number_of_students_in_array; i++) {
    console.log(`${i+1}. ${students[i].name}`)
}

students.forEach(student => {
    if(student.score < 60) {
        console.log(`${student.name} needs a check in.`)
    }
})

function average_score(list) {
    if (list.length === 0) {
        return 0
    }

    let total = 0
    for (const student of list) {
        total = total + student.score
    }

    return total / list.length
}

const avg = average_score(students)
    console.log(`Class average: ${avg} (${grade_for(avg)})`)
    
const aries = {
    symbol: 'Ram',
    element: 'Fire',
    dates: 'Mar 21 - Apr 19',
}

for (const key in aries) {
    console.log (`${key}: ${aries[key]}`)
}

for (const sign_name in zodiac_signs) {
    const sign = zodiac_signs[sign_name]
    console.log(`${sign_name} (${sign.symbol}): ${sign.dates}`)
}