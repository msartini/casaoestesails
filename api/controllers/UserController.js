/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list: function (req, res) {
    //return res.send('Hi there!');
    return res.view('homepage');
  },

  find: function(req, res) {
      User.find(function(err, users) {
          res.view({users: users})
      })
  }
};

