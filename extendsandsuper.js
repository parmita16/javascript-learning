class Vecna {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}.`);
    }
}
class Hero extends Vecna {
    constructor(name, energy, specialty) {
        super(name, energy); 
        this.specialty = specialty;
    }
    saveFriends() {
        console.log(
            `${this.name} saves the group using ${this.specialty}!`
        );
    }
}
const eleven = new Hero(
    "Eleven",
    150,
    "Telekinesis"
);

eleven.introduce();
eleven.saveFriends();

