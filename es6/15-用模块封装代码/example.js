export var color = "red"
export let name = "Nicholas"
export const magicNumber = 7
export class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
}

function subtract(num1, num2) {
    return num1 + num2;
}

export function multiply(num1, num2) {
    return num1 * num2;
}

function add(num1, num2) {
    return num1 + num2
}

export { add as plus }

export default function () {
    return name
}
export function whosthis() {
    return this
}


