export default class Dog {
  constructor(name) {
    this.name = name;
  }

  bark(param) {
    return param ? `${param} ${this.name}` : `Wah wah, I am ${this.name}`;
  }

  barkInConsole() {
    console.log(this.bark()); // eslint-disable-line
  }

}
