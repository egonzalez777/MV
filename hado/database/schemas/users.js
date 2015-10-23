var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstname: {type: String, required: true},
	lastname: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	profile: {}
});

userSchema.pre('save', function (next) {
	var user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(10, function (err, hash) {
		if (err) {
			return next(err);
		}
		user.password = hash;
		next();
	});
});

userSchema.methods.comparePassword = function (user_pass, cb) {
	bcrypt.compare(user_pass, this.password, function (err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

var User = mongoose.model('User', userSchema);

module.exports = User;