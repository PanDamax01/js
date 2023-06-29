//Immediately-invoked function expression IIFE
;(() => {
	// console.log('Witam')
	// Może wykorzystam
})()

///																				Prawda o && o ||
/*

	// const a = true && true // zwraca ostatnią parametr na którym sie zatrxymał
	// const loggedUser = null
	const loggedUser = {name: 'Jon'}
	const userName = loggedUser && loggedUser.name
	console.log(userName);

	const isLogged = isLogged()
	if (!isLogged) {
		redirectToHomepage()
	}
	// wesja skrócona:
	isLogged() || redirectToHomepage()

*/	
//								operatory jednoatgumentowe
// plus         +
// const value = 'cos'
// plus to robi:
// value.valueOf()
// value.toString()
// Number(value)

//data w js jest w minisekundach
//ciekawostka: +new Date()

// minus  -
//robi to samo co plus ale dodatkowo dodaje minus,
// dokładnie to odwraca wartość

// ! wykrzyknik
//odrwaca wartość
// !! jeszcze jest to xd
// wykorzytujemy to aby sprawdzuć czy wartośc jest prawdziwa lub fałszywa, zamiasta boolen

/*  Jeszcze z majkiem tutaj dopisać

//                                       Obiekty i this
// funkcja jest w obiekcie - wkazuje na obiekt
// w zwyklej funkcji - obiekt globalny
// w funkcji strzałkowej - window

const person = {
	name: 'Tom',
	showName() {
		console.log(this.name) //person
	},
	address: {
		city: 'Warsaw',
		street: 'Kościuszki',
		showAddress() {
			console.log(`${this.city}, ${this.street}`) //person.address
		},
		test:()=>{
			console.log(this); //window
		}
	},
}

person.showName()
person.address.showAddress()
person.address.test()
//jak widac this wksazuje na to co jest przed funkcja i dopisuje

const dog = {
	name: 'Spike',
	showName: person.showName //dog.name
}

dog.showName()
// pokazuje tak albowiiem to wyglada jakbym
//zamiast showName: person.showName miał:
// showName: function() {
// 	console.log(this.name) 
// },

                       kolejny rozdział    */

// 																	bill, call, apply
/*
const human = {
	name: 'Tom',
	sayName() {
		console.log(`My name is ${this.name}`)
	},
	sayFullName: function (surname) {
		console.log(
			`My name is ${this.name} ${this.surname ? this.surname : surname}`
		)
	},
}

const personA = {
	name: 'Artur',
}

const people = [{ name: 'Artur', surname: 'King' }, { name: 'Karol' }]

human.sayName.call(personA) //call połącz
// użyj funkcji z human sayName ale jako kontekst daj personA

//apply zastosuj
// human.sayName.apply(personA, [])
human.sayFullName.apply(personA, ['Lichoń'])
// mogę podać dodatkowe parametry do funkcji

people.forEach((el) => {
	human.sayFullName.apply(el, ['Grudzinski'])
})

//  					bind
//robi to samo co apply tylko nie taglice , a kolejne parametry
people.forEach((el) => {
	human.sayFullName.bind(el, 'Lolowski')()
})
//lepiej zrobić apply bo latwiej widać
//aby zmienic kontekt musze miec kontekst utworzony, funkcja strzałkowa kontekstu nie tworzy wiec nie moze być, musi być zwykła funkcja
//obiekt sam w sobie nie tworzy kontekstu

////////////			jeszcze majka dorobić
*/

//////								                                      funkcje
// javascript na początku bierze zmienne i daje na samą góre
// tak samo z zwykła funkcją

// function greet() {} - wywolujesz wszedzie
// greet = function() {} - po
// greet = () => {} - po

//	funkcja strzałkowa nie tworzy kontekstu, this nie działa

//                PĘTLE
// 	for (let i = 0; i < 5; i++) {	}
//	musi być let albowiem
// 	const nie nadpiszesz
// 	var to przedskakuje o 1 poziom wyżej
// 	a bez deklaracji to jest jakby zminn a globalną

//                   									Róznica między pętal IN and OF
/*
// 	for.. in - leci po polach/indeksach
//	for..of  - leci po wartościach
const employer = {
	boss: 'Michael',
	sercetary: 'Pam',
}

for (const key in employer) {
	console.log(key) 		//tylko ta moze być do obiektów
}

const names = ['KEvin', 'Oscar']

for (const key in names) {
	console.log(key) 		// wyświetla indeksy
}
for (const key of names) {
	console.log(key) 		// wyświetla wartości
}

const text = 'this is text'

for (const key in text) {
	console.log(key)
	console.log(text[key]) 		// moze wykorzystam
}

//// obiekty domylsnie nie sa iterowalne
// for..in
// - leci po polach i indexach
// - tylko po enumerowalnych !!! (hasOwnProperty())
// - sprawdza rowniez pola prototypu

// for..of -
// - leci po wartosciach
// - iterowalnych Symbol.iterator (obiekty domylsnie nie sa iterowalne)
*/

// 																		Aynchronicznosc
// JavaSCript sam w sobie nie jest synchroniczny

// JavaSCript jest syncjroniczny - czuli jest wykony kod linijka po linijce
//	Dzięki window i settimeout jest asynchroniczny

//	Stos to Call Stack
//  Jak wykonunujemy kod to trafia na stos
// 	Jak jest skonczona to jest sciagana z stosu
//	jesli mamy asynchroniczny kod to trafia na wen API np fetch timeout
//	i sie wykonuje np pobiera sie pogoda lub przycisk i jesli się wykona i jest gotowy to trafia do kolejki(callback queue)
//	gdy stos jest pusty event loop- sprawdzający przezyca na stos i sie wykonuje i znow stos sie opróznia

// 																				Import Export

//	1
// import { user,sayHi } from './user.js'
// console.log(user);
// sayHi()

//	2
//Jako domylsna zmienna
// import User from './user.js'
// console.log(User);
//	To ugóry morze byc zapisane tak samo jak:
// import test from './user.js'
// console.log(test);

// 3
// import User,{ user, sayHi} from './user.js'

// console.log(User);
// console.log(user);
// sayHi()

// 4
// Pobranei wszytkich zmiennych
// import User, * as userModule from './user.js'

// console.log(User);
// console.log(userModule);
// userModule.sayHi()

// 5
// exportowanie tego czego potrzebuje
// import userModule from './user.js'

// console.log(userModule);
// userModule.sayHi()

//																			Indexy w js(podstawa)
/*
const dogs = ['spike', 'max', 'milo', 'max', 'bark']

// leci od początku
const index = dogs.indexOf('spike')
console.log(index);
//	szuka w tablicy, jak znajdzie to pokazuje index
//	a jak nie to -1 <-- dzieki temu mozemy sprawdzać


// leci od końca
const index2 = dogs.lastIndexOf('max')
console.log(index2);

// leci od drugiego indexu
const index3 = dogs.indexOf('max', 2)
console.log(index3);
// tak samo może być z latindexof

const users = [
	{id:'dsasdas', name: 'John', age: 32},
	{id:'32342d', name: 'Khal', age: 41},
	{id:'asd222', name: 'Jamal', age: 56}
]

//	operuje na tablicy obiektów
const index4 = users.findIndex(el => el.name === 'John')
// const index4 = users.findIndex(el => el.age > 40)
// users[index4].age = 56
console.log(index4);

//	sprawdzanie -logowanie
const ifUserExist = name => users.findIndex(el => el.name === name) > -1
// tu jest return i zwraca jesli jest wieksze od -1 true
console.log(ifUserExist('Khal'));

*/
// 																							Calback
//	czyli funkcja użyta jako parametr w innej funkcji
//	jak skonczysz co robic to uruchom tą unkcje

// function someFunction(callback){
// 	// ,,,,,
// 	callback()
// }

// const logB = function(){
// 	console.log('b');
// }
// someFunction(logB)

//// inny przykład

// function logA(callback) {
// 	// tu coś trwa
// 	console.log('a');

// 	const someValue = ' this is from a'
// 	callback(someValue)
// }

// function logB(param) {
// 	console.log('b');
// 	console.log(param);
// }
// logA(logB)

// ciekawiej

// const arr = [2,3,5].map(el => el * 2)
// console.log(arr);

//	ale mozemy tez wyrzucic funkcje
// const multiplay = el => el * 2
// const arr = [2,3,5].map(multiplay)
// console.log(arr);
// i to u góry to jest callback ale tak sie nazywa multiplay

//	Czystość kodu
// const arr = [1,3,5]

// const multiplay = el => el * 2
// const add = el => el + 23
// const odd = el => el - 1

// const transformArray = (arr, callback) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = callback(arr[i])
// 	}
// }
// // transformArray(arr, multiplay)
// // transformArray(arr, add)
// transformArray(arr, odd)

// console.log(arr);

//////																						Promisy

//  1. pobranie danych usera
//	2. validacja danych
//	3. rejestracja usera
//	4. wyslanie maila z potwierdzeniem
/*
const getUserData = () => {
	return new Promise((resolve,reject) => {
		
		setTimeout(() => {
			console.log('1. get user data');
			resolve({name: 'Jon'})
		}, 800);
	})
}

const validateData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('2. validate');
			resolve()
		}, 900);
	})
}

const registerUser = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('3. register');
			resolve()
		}, 400);
	})
}

const sendEmail = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('4. send email');
			resolve('Email has been sent')
		}, 200);
	})
}

getUserData()
	.then(res =>{
		return validateData(res)
	})
	.then(registerUser)
	.then(sendEmail)
	.then((res) => {
		console.log(res)
		console.log('end!')
	})
	.catch(err => {
		console.log('Error: ',err);
	})
*/

/////////																												Klonowanie obiektów
/*
const Jon = {
	name: 'Jon',
	skill: {name: 'piano', level: 4}
}

// const Bob = {...Jon} //shallow copy, płytka kopia  --dla pierwszego poziomu

const Bob = {		// --dla drugiego poziomu
	...Jon,			
	name: 'Bob',
	skill: {name: Jon.skill.name, level: Jon.skill.level}
} // deep copy, głepokia kopia

Bob.skill.level = 10
console.log(Jon);
console.log(Bob);

// dobry sposób na kopiowanie głębokich danych
// ale bez funkcji i typów np date
const Bob2 = JSON.parse(JSON.stringify(Jon))
console.log(Bob2);

// zewnetrzna biblioteka potrafi to i to
*/

//////																													Asyns, await
/*
//lepsze niz promisy

// const getUserData = () => {
// 	return new Promise((resolve,reject) => {
		
// 		setTimeout(() => {
// 			console.log('1. get user data');
// 			resolve()
// 		}, 800);
// 	})
// }

// const validateData = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('2. validate');
// 			resolve()
// 		}, 900);
// 	})
// }

// const registerUser = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('3. register');
// 			resolve()
// 		}, 400);
// 	})
// }

// async function someAsyncFunctions() {
// 	await getUserData()
// 	await validateData()
// 	await registerUser()

// 	console.log('end');
// }
// someAsyncFunctions()
// console.log('render page');
// console.log('display page');


// ceikawy przyklad z danymi
const getUserData = () => {
	return new Promise((resolve,reject) => {
		
		setTimeout(() => {
			console.log('1. get user data');
			resolve({name:'Pawel'})
		}, 800);
	})
}
const registerUser = (user) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('2. register');
			resolve({name: user.name, id: 232})
		}, 400);
	})
}

const sendEmail = (user) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('3. sen confimation email to', user.name, 'id:', user.id);
			resolve()
		}, 900);
	})
}


async function someAsyncFunctions() {
	const userDate = await getUserData()
	const registeredUser = await registerUser(userDate)
	await sendEmail(registeredUser)

	console.log('end');
}
someAsyncFunctions()
console.log('render page');
console.log('display page');
*/

////																					try, catch, finally
/*
//jak wylapywac bledy przy asyn
// nie ma tutaj tehen oraz catch wiez nie ma jak wylapac bledu

// const getUser = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			// resolve({ name: 'Karol' })
// 			reject('some error')
// 		}, 500)
// 	})
// }

// const someAsynFun = async () =>{
// 	//try - czyli sprobuj to zrobić
// 	// ogranicza zasob błędu
// 	try{
// 		const user = await getUser()
// 		console.log(user);
// 	} catch(error){
// 		console.log(error);
// 	} finally{  //finally czyli koniec
// 		console.log('end');
// 	}
// }
// someAsynFun()

// ale try moze byc wykorzystywany inaczej
const getUsers = () => {
	// const user = {name: 'James'}
	const user = null

	if (user) {
		return user
	}else{
		// throw 'User not found'
		throw new Error('User not found')
	}
}

const someFunct = async () => {
	try{
		const user = getUsers()
		console.log(user);
	}catch(error){
		// console.log(`Error: ${error}`);  //mozemy to tez inaczej zapisac
		if (error instanceof Error) {
			console.log(error.message);
		}else{
			console.log('Something went wrong');
		}
	}finally{
		console.log('end');
	}
}
someFunct()

*/

////																							Optional chaining

/*
const personA = {
	name: 'Jon',
	address:{
		city: 'Krakow'
	},
	hobbies: [
		{title: 'horse riding'},
		{title: 'sword fight'}
	],
	fight: () => console.log('I will figh you!')
}

const personB = {
	name: 'Sansa',
	hobbies: []
}

const hobby = personA.hobbies[0].title

// const hobby2 = personB.hobbies[0] && personB.hobbies[0].title
// console.log(hobby2);
//krotszy zapis
const hobby3 = personB.hobbies[0]?.title
console.log(hobby3);

//	przyklady z zycia
// const input = document.querySelector('inpu[name="email"]')?.value

//lub
const fetchAPI = () => {
	return new Promise( resolve =>{
		setTimeout(() => {
			// resolve({data:{items: []}})
		}, 1000);
	})
}

fetchAPI('/api/items').then(res => {
	const items = res.data?.items || ''
	console.log(items);
})
*/
