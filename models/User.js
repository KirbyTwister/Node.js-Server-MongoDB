const {Schema, model} = require('mongoose');
const schema = new Schema({
    email: { type:String, required: true,unique: true },
    name: { type:String, required: true },
    registerDate: { type: Date, default: Date.now }
});
module.exports = model('User', schema);