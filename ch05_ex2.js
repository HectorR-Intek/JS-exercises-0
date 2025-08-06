// Chapter 5, exercise 2:
"use strict";
class Building{
    constructor(){
        this.users = new Map();
        this.equipment = new Map();
        this.searchHistory = [];
    }

    addUser(user){
        this.users.set(user.name, user);
    }

    findUser(name){
        const user = this.users.get(name);
        this.searchHistory.push({type: "user", name: user.name, office: user.office});
        return user;
    }

    addEquipment(equip){
        this.equipment.set(equip.id, equip);
    }

    findEquipment(equip){
        const equipment = this.equipment.get(equip);
        this.searchHistory.push({type: "equipment", id: equipment.id, room: equipment.room});
        return equipment;
    }

    getSearchHistory(){
        return this.searchHistory;
    }
}

class Equipment{
    constructor(id, room){
        this.id = id;
        this.room = room;
    }
}

class User{
    constructor(name, office){
        this.name = name;
        this.office = office;

    }
}
// Initialization
const lab = new Building();

const andrea = new User("Andrea", "301");
const carla  = new User("Carla", "402");
lab.addUser(carla);
lab.addUser(andrea);

const printer = new Equipment("printer", "205");
const spectrograph = new Equipment ("spectrograph", "105");
lab.addEquipment(printer);
lab.addEquipment(spectrograph);

// Search:

console.log(lab.findUser("Carla"));
console.log(lab.findUser("Andrea"));
console.log(lab.findEquipment("spectrograph"));
console.log(lab.searchHistory[0]);
console.log(lab.searchHistory[1]);