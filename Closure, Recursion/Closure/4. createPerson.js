function createPerson(name, age) {
	let person = {
        name,
        age,
    }; 
  
	return {
        getName: () => {
            return person.name;
        }, 
        getAge: () => {
            return person.age;
        },
        setName: (name) => {
            person.name = name;name
        }, 
        setAge: (age) => {
            person.age = age;
        },
    }
}

const person = createPerson("Karen", 20);

console.log(person.getName());
console.log(person.getAge());
person.setAge(21);
person.setName("Armen");
console.log(person.getName());
console.log(person.getAge());
