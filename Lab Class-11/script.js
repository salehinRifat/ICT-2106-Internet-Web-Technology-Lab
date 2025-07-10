/*
const userInfo = {
    name: "John Doe",
    age: 30,
    email: "jonh@gmail.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    hobbies: ["reading", "gaming", "hiking"],
};
// constructor function to create a user object
function User(name, age, email, address, hobbies) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
    this.hobbies = hobbies;
    
    this.displayInfo = function() {
        document.writeln(`Name: ${this.name}<br>`);
        document.writeln(`Age: ${this.age}<br>`);
        document.writeln(`Email: ${this.email}<br>`);
        document.writeln(`Address: ${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.zip}<br>`);
        document.writeln(`Hobbies: ${this.hobbies.join(", ")}<br>`);
    };
}

const user = new User(
    "Jane Smith",
    25,
    "hello@gmail.com",
    {
        street: "456 Elm St",
        city: "Othertown",
        state: "NY",
        zip: "67890"
    },
    ["cooking", "traveling", "photography"]
);
user.displayInfo();

// all the work of Math object
document.writeln("<h2>Math Object Operations</h2>");
//random number between 0 to 9
document.writeln(`Random Number (0-9): ${Math.floor(Math.random() * 10)}<br>`);
document.writeln(`Square Root of 16: ${Math.sqrt(16)}<br>`);
document.writeln(`Power of 2^3: ${Math.pow(2, 3)}<br>`);
document.writeln(`Maximum of 10, 20, 30: ${Math.max(10, 20, 30)}<br>`);
document.writeln(`Minimum of 10, 20, 30: ${Math.min(10, 20, 30)}<br>`);
document.writeln(`Rounded value of 4.5: ${Math.round(4.4)}<br>`);
document.writeln(`Ceiling value of 4.3: ${Math.ceil(4.3)}<br>`);
document.writeln(`Floor value of 4.7: ${Math.floor(4.7)}<br>`);

// date object
document.writeln("<h2 >Date Object Operations</h2>");
const currentDate = new Date();
document.writeln(`Year: ${currentDate.getFullYear()}<br>`);
document.writeln(`Month: ${currentDate.getMonth() + 1}<br>`);
document.writeln(`Date: ${currentDate.getDate()}<br>`);



info2.innerHTML = `<strong  style="color: green;">This is my new text</strong>`;


let info = document.getElementById("mytext").innerHTML;
document.writeln(`Text from HTML: ${info}<br>`);
let info2 = document.getElementById("mytext2");


const users = [
    {
        name: "Alice",
        age: 28,
        dept: "Computer Science"
    }
    ,
    {
        name: "Bob",
        age: 32,
        dept: "Mathematics"
    },
    {
        name: "Charlie",
        age: 25,
        dept: "Physics"

    },
]
for(let i = 0; i < users.length; i++) {
    document.writeln(`<h2>User ${i + 1}</h2>`);
    document.writeln(`Name: ${users[i].name}<br>`);
    document.writeln(`Age: ${users[i].age}<br>`);
    document.writeln(`Department: ${users[i].dept}<br>`);
}

let tags  = document.getElementsByTagName("p");
for(let i = 0; i < tags.length; i++) {
    document.writeln(`<h2>Paragraph ${i + 1}</h2>`);
    document.writeln(`Text: ${tags[i].innerHTML}<br>`);
}
let classTags = document.getElementsByClassName("myclass");
for(let i = 0; i < classTags.length; i++) {
    document.writeln(`<h2>Class Paragraph ${i + 1}</h2>`);
    document.writeln(`Text: ${classTags[i].innerHTML}<br>`);
}
    */
let userInfo;

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        userInfo = data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

fetchUsers();

// Display user information
userInfo.forEach(user => {
    document.writeln(`<h2>User ${user.id}</h2>`);
    document.writeln(`<p>Name: ${user.name}<br></p>`);
    document.writeln(`Email: ${user.email}<br>`);
    document.writeln(`Phone: ${user.phone}<br>`);
    document.writeln(`Website: ${user.website}<br>`);
    document.writeln(`Address: ${user.address.street}, ${user.address.city}, ${user.address.zipcode}<br>`);
    document.writeln(`Company: ${user.company.name}<br>`);
    document.writeln(`<hr>`);
});
