class stranger {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    usePower(powerName, energyCost) {
        this.energy -= energyCost;

        console.log(
            `${this.name} used ${powerName}! Remaining energy: ${this.energy}`
        );
    }
}

const eleven = new stranger("Eleven", 100);

eleven.usePower("Telekinesis", 20);
eleven.usePower("Brain Diving", 30);
