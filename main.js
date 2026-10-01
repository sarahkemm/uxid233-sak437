const first_name = 'Grace'
const last_name = 'Hopper'
const age = 40;
const greeting = 'Hello, ${first_name} ${last_name} (${age}).'
const is_adult = age>=18
const hobbies = ['coding', 'sailing', 'swimming', true, 13, ['one', 'two', 3, 4, true]]

const profile = {
    age,
    first_name,
    last_name,
    hobbies,
    is_adult,
}
console.log(profile);