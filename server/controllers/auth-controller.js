

// Home logic
const home = async (req, res) => {
    try {
        res
          .status(200)
          .send('Welcome to home page guys');
    } catch (error) {
        console.log(error)
    }
}

// Registration logic
const registration = async (req, res) => {
    try {
        console.log(req.body);
        res
          .status(200)
          .json({message: req.body})
    } catch (error) {
        console.log(error);
    }
}


module.exports = { home, registration };