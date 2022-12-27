const User = require('../model/user/user-model');
const bcrypt = require('bcrypt');
async function register (req,res) {
    console.log("Reached inside Regiter Route");
    try {
        // Get user input
        const { first_name, last_name, username, email, password } = req.body;
    
        // Validate user input
        if (!(email && password && first_name && last_name && username)) {
          res.status(400).send("All input is required");
        }
    
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }
    
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);
    
        // Create user in our database
        const user = await User.create({
          first_name,
          last_name,
          username,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
        });
    
        // Create token
        // const token = jwt.sign(
        //   { user_id: user._id, email },
        //   process.env.TOKEN_KEY,
        //   {
        //     expiresIn: "2h",
        //   }
        // );
        // save user token
        // user.token = token;
        
        // const respUser = {username:user.username, token:token};
        // return new user
        res.status(201).json(user);
      } catch (err) {
        console.log(err);
      }
}

module.exports = register;