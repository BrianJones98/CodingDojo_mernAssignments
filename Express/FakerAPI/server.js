const express = require('express');
const faker = require('faker');

const app = express();
const port = 8000;

class User{
    static count = 0;
    
    constructor(){
        this.id = ++User.count;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    static count = 0;

    constructor(){
        this.id = ++Company.count;
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

const userArr = [];
const companyArr = [];

app.post("/api/users/new", (req, res) => {
    const newUser = new User();
    userArr.push(newUser);
    
    res.json(newUser);
});

app.post("/api/companies/new", (req, res) =>{
    const newCompany = new Company();
    companyArr.push(newCompany);

    res.json(newCompany);
});

app.post("/api/user/company", (req, res) =>{
    const newUser = new User();
    const newCompany = new Company();

    userArr.push(newUser);
    companyArr.push(newCompany);

    res.json({
        createdUser: userArr[userArr.length - 1],
        createdCompany: companyArr[companyArr.length - 1]
    });
});

app.get("/api/companies/:id", (req, res) =>{
    const reqCompany = companyArr[req.params.id - 1];
    
    if(reqCompany === undefined){
        res.json({error: "Not found"})
    } else{
        res.json(reqCompany);
    }
});

app.get("/api/users/:id", (req, res) =>{
    const reqUser = userArr[req.params.id - 1];
    
    if(reqUser === undefined){
        res.json({error: "Not found"})
    } else{
        res.json(reqUser);
    }
});

app.listen(port, () => console.log(`Listening on port: ${port}`));