var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat');
exports.User = mongoose.model('User',require('./user'));
exports.Room = mongoose.model('Room',require('./room'));







