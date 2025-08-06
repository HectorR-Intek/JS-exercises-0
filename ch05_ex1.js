// Exercise 1:
//Bank and clients
"use strict";
class Bank{
    constructor(){
        let customers = 0;
        let clients = [];
    

    this.addClient = function(client, money){
        customers++;
        clients.push({account: customers ,name: client.name, balance: money});
        client.account =customers;
        client.money -= money;        
    };

    this.addMoney= function(amount, account){
        for(let client of clients){
            if(client.account == account) client.balance += amount;
            break;
        }
    };
    
    this.giveMoney = function(amount, account){
        for(let client of clients){
            if(client.account == account){
                client.balance -= amount;
                return amount;
            }else return "Not enough money in the account for that withdrawal";
        }
    };
    
    this.consult = function(account){
        for(let client of clients){
            if(client.account == account){
                return client.balance;
            }
        }
    };

    }
}

class Person{
    constructor(name, money){
        this.account;
        this.name = name;
        this.money = money;
    }

    deposit(amount, account, bank){
        if(this.money >= amount) this.money -= amount;
        else console.log("Not enough money for that deposit");
        bank.addMoney(amount, account);
    }

    withdraw(amount, bank){
        let answer = bank.giveMoney(amount, this.account);
        if(typeof(answer) == "number") this.money += answer;
        else console.log(answer);
    }
    
    consult(bank){
        console.log(`${this.name}, your balance is: ${bank.consult(this.account)} dollars`);
    }
}

const richBank = new Bank();
const sarah  = new Person("Sarah", 1000);

richBank.addClient(sarah, 600);

console.log(sarah);

sarah.deposit(200, 1, richBank);
console.log(sarah);

sarah.withdraw(100, richBank);
console.log(sarah);

sarah.consult(richBank);