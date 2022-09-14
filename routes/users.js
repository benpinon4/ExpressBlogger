var express = require('express');
var router = express.Router();

var { validateUserData } = require("../validation/users")

const userList = [];

/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.send(userList);
});

router.get('/single', (req,res) => {
  res.json({
    success: true,
    user: 'single user'
  })
})

router.post('/create-one', (req, res) => {

  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const age = req.body.age
  const favoriteFoods = req.body.favoriteFoods

  const userData = {
    email,
    firstName,
    lastName,
    age,
    favoriteFoods,
    fullName: firstName + " " + lastName,
    createdAt: new Date(),
    lastModified: new Date(),
  }

  const userDataCheck = validateUserData(userData)
  console.log(userDataCheck)
	if (userDataCheck.isValid === false) {
		res.json({
			success: false
		})
		return;
	}

	userList.push(userData)

	console.log("userList ", userList)

	res.json({
		success: true,
    userList,
	})

})
module.exports = router;
