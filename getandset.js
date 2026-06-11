class Character {
    constructor(name, energy) {
        this.name = name;
        this._energy = energy;
    }
    // Getter
    get energy() {
        return `${this._energy} energy points`;
    }
    // Setter
    set energy(value) {
        if (value < 0) {
            console.log("Energy cannot be negative.");
        } else {
            this._energy = value;
        }
    }
    static warningMessage() {
        console.log("Friends don't lie.");
    }
}
const eleven = new Character("Eleven", 100);
console.log(eleven.energy); // Getter
eleven.energy = 130; // Setter
console.log(eleven.energy);
Character.warningMessage();

