var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Promise = require('bluebird');
Promise.promisifyAll(bcrypt);
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
});

userSchema.pre('save', function (next) {
	bcrypt.hash(this.password, 10, function (err, hash) {
		console.log( hash);
		if (err) throw new Error(err);
		else {
			this.password = hash;
			next();
		};
	}.bind(this));
});

userSchema.plugin(uniqueValidator);

userSchema.methods.validPassword = function (password) {
	return bcrypt
	.compareAsync(password, this.password)
	.then(function (result, err) {
		if (err) throw new Error(err);
		return result;
	});
};
// Code from registration
userSchema.statics = {
    getUser: function(condition, map, callback) {
        this.find(condition, map, callback);
    }
};

module.exports = mongoose.model('user', userSchema);
