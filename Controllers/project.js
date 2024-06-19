exports.read = async (req, res) => {
    res.send("hello Controllers Read")
}

exports.list = async (req, res) => {
    try {
        //code
        res.send('hello list')
    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async (req, res) => {
    try {
        res.send('hello create')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async (req, res) => {
    try {
        res.send('hello update')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.remove = async (req, res) => {
    try {
        res.send('hello remove')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}