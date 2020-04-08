

module.exports = {
    getPerson: function (name, age) {
        let person = {
            name,
            age,
            introduce: function () {
                console.log(`hello, my name is: ${this.name}, i'm ${this.age} yo`);
            }
        };
        return person;
    }
}