const first_name = "Grace"
const last_name = "Hopper"
const age = 40;
const greeting = `Hello, ${first_name} ${last_name} (${age}).`;
const is_adult = age >= 18;
const hobbies = ["coding", "sailing", "swimming", true, 13, ["one", "two", 3, 4, true]]

const profile = {
    age,
    first_name,
    last_name,
    hobbies,
    is_adult,
}

console.log(profile)
console.log(`${first_name} is an adult: ${profile.is_adult}`)

const my_users = [
    {
        first_name: "Grace",
        last_name: "Hopper",
    },
    {
        first_name: "Sarah",
        last_name: "Smith",
    },
]

console.log(my_users)
console.log(my_users[1].last_name)