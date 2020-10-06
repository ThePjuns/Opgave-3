let Selector: HTMLSelectElement = <HTMLSelectElement> document.getElementById("BIGorsmall");
let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let Manipulate: HTMLButtonElement = <HTMLButtonElement> document.getElementById("Manipulate")
let Input: HTMLInputElement = <HTMLInputElement> document.getElementById("TekstInput")

Manipulate.addEventListener("click", function()
{
element.innerHTML = manipulateString(Input.value)
})

element.innerHTML = Input.value

function manipulateString(input : string): string{
    switch(Selector.selectedIndex)
    {
        case 0: {
            return input.toUpperCase()
        }

        case 1: {
            return input.toLowerCase()
        }

        default: {
            return input
        }
    }
}



// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person): string {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user: Person = { firstName: "John", lastName: "Doe" };


// let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
// element.innerHTML = greeter(user);