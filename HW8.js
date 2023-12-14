// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname , email, phone ){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users =[
    new User(7,'vasya','petrov','xeufragroukake-9130@yopmail.com]',2312067-45-30),
    new User(92,'anna','novikova','groissapeufaxe-8180@yopmail.com',10210097-52-62),
    new User(12,'natalia','vesnezhova','feugreujabommi-1564@yopmail.com',810984-43-96),
    new User(91,'pety','sokolov','nouxijattani-7848@yopmail.com',629521953-67-56),
    new User(9,'kolia','saizev','nouxijattani-7848@yopmail.com',2163865506-62-34),
    new User(9,'nina','lebedeva','freuquahoittoto-3460@yopmail.com',511558917-58-62),
    new User(18,'inna','timofeeva','quessafagrulu-1867@yopmail.com',4543270-65-77),
    new User(8,'nikolay','belov','grepagrifeinne-5151@yopmail.com',527523326-18-47),
    new User(98,'vlad','lynev','quesseitroimmeube-6549@yopmail.com',98221589-14-78)
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log('-----------------------------')
let filterUsers = users.filter(user => users.id % 2 === 0);
console.log(filterUsers)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('-----------------------------')
users.sort((a,b) => a.id-b.id);
console.log(users)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
    constructor (id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client

clients = [
    new Client(7,'vasya','petrov','xeufragroukake-9130@yopmail.com]',2312067-45-30,87),
    new Client(92,'anna','novikova','groissapeufaxe-8180@yopmail.com',10210097-52-62,45),
    new Client(12,'natalia','vesnezhova','feugreujabommi-1564@yopmail.com',810984-43-96,98),
    new Client(91,'pety','sokolov','nouxijattani-7848@yopmail.com',629521953-67-56,23),
    new Client(9,'kolia','saizev','nouxijattani-7848@yopmail.com',2163865506-62-34,82),
    new Client(9,'nina','lebedeva','freuquahoittoto-3460@yopmail.com',511558917-58-62,25),
    new Client(18,'inna','timofeeva','quessafagrulu-1867@yopmail.com',4543270-65-77,35),
    new Client(8,'nikolay','belov','grepagrifeinne-5151@yopmail.com',527523326-18-47,65),
    new Client(98,'vlad','lynev','quesseitroimmeube-6549@yopmail.com',98221589-14-78,33)
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('-----------------------------')

clients.sort((b,a) => b.order-a.order);
let sortOrder = clients.map(({order,name}) => ({order,name}));
console.log(sortOrder)
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('-----------------------------')
function Car0(model,producer,age,maxspeed,engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.age = age;
        this.maxspeed = maxspeed;
        this.engineCapacity = engineCapacity;
    }

let carSk = {
    maxspeed: 250,
    greeting() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
}


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
carSk.greeting('250 ');
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
let info0 = {
    name: 'BMW',
    producer:'Germany',
    age:2019,
    maxspeed:250,
    engineCapacity:4
}
console.log(info0)
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
let speed0 = new Car0('BMW','Germany',2019,350,4);
console.log(speed0)
// -- changeYear (newValue) - змінює рік випуску на значення newValue
let car0 = new Car0('BMW','Germany',2020,250,4)
console.log(car0)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('-----------------------------')
class Car{
    constructor(model,producer,age,maxspeed,engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.age = age;
        this.maxspeed = maxspeed;
        this.engineCapacity = engineCapacity;
    }
    driver(){
        return 'driver'
    }
}
let carSkill = {
    maxspeed: 200,
    greeting() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
}

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
carSkill.greeting('200 ');
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
let info = {
    name: 'BMW',
    producer:'Germany',
    age:2019,
    maxspeed:250,
    engineCapacity:4
}
console.log(info)
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
let speed = new Car('BMW','Germany',2019,350,4)
console.log(speed)
// -- changeYear (newValue) - змінює рік випуску на значення newValue
let car = new Car('BMW','Germany',2020,250,4)
console.log(car)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(car.driver())
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{
    constructor(name,age,lagsize) {
        this.name = name;
        this.age = age;
        this.lagsize = lagsize;
    }
}

let cinderellas = [
    new Cinderella('anna',18,36),
    new Cinderella('katya',23,40),
    new Cinderella('oly',30,39),
    new Cinderella('inna',20,38),
    new Cinderella('dina',24,42),
    new Cinderella('natalia',32,35),
    new Cinderella('eva',17,37),
    new Cinderella('olesy',28,40),
    new Cinderella('nastya',25,38),
    new Cinderella('lyba',21,40),
]
console.log(cinderellas)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name,age,foundCinderella) {
        this.name = name;
        this.age = age;
        this.foundCinderella = foundCinderella;
    }
}
let chose = cinderellas[3];

let p = new Prince('vova',27,chose.lagsize);
console.log(p)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


