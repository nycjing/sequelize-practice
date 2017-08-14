const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/sequelize_practice', { logging: false });

const User = db.define('user', {
// YOUR CODE HERE...
    first : {
        type: Sequelize.STRING
    },
    last : {
        type: Sequelize.STRING
    },
    age : {
        type: Sequelize.INTEGER,
        validation :{
            min: 18
        }
    },
    email : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validation :{
            notEmpty: true
        }
    },
    bio : {
        type: Sequelize.TEXT
    }
}, {
// ...AND HERE

    getterMethods: {
        fullName() {
            return this.first + ' ' + this.last
        }
    }

});
User.prototype.haveBirthday = function(){

   //  var result = User.findOne({
   //      where: {
   //          id : this.id
   //          }
   //      })
   //      .then(user=>{
   //          if(user){
   //              user.increment('age', {by: 1});
   //          }
   //          // let oldAge = this.age;
   //          // this.setDataValue('age', oldAge++);
   //          // // user.age++;
   //      });
   //
   // return result;
    return this.update({
        age: this.age + 1
    });
};


module.exports = User;
