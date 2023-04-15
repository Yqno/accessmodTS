class Person {
  public name: string; // öffentliche Eigenschaft

  private age: number; // private Eigenschaft

  protected address: string; // geschützte Eigenschaft

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public greet(): void {
    console.log(`Hallo, mein Name ist ${this.name}.`);
  }

  private getAge(): number {
    return this.age;
  }

  protected getAddress(): string {
    return this.address;
  }
}

class Employee extends Person {
  public jobTitle: string;

  constructor(name: string, age: number, address: string, jobTitle: string) {
    super(name, age, address);
    this.jobTitle = jobTitle;
  }

  public introduce(): void {
    console.log(`Ich bin ${this.name}, ich arbeite als ${this.jobTitle} und wohne in ${this.getAddress()}.`);
  }
}

let person = new Person("Max Mustermann", 30, "Musterstraße 1");
console.log(person.name); // Zugriff auf öffentliche Eigenschaft
person.greet(); // Aufruf einer öffentlichen Methode
//console.log(person.age); // Fehler: Zugriff auf private Eigenschaft nicht möglich

let employee = new Employee("Anna Schmidt", 25, "Schmidtstraße 2", "Webentwicklerin");
console.log(employee.jobTitle); // Zugriff auf öffentliche Eigenschaft der abgeleiteten Klasse
employee.introduce(); // Aufruf einer Methode der abgeleiteten Klasse, die auf eine geschützte Eigenschaft der Basisklasse zugreift
//console.log(employee.address); // Fehler: Zugriff auf geschützte Eigenschaft der Basisklasse nicht möglich
