const Project = require('../Models/Project')

exports.read = async (req, res) => {
    try {
        const id = req.params.id
        const projected = await Project.findOne({ _id: id }).exec()
        res.send(projected)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.list = async (req, res) => {
    try {
        //code
        const projected = await Project.find({}).exec()
        res.send(projected)
    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async (req, res) => {
    try {
        console.log(req.body)
        const projected = await Project(req.body).save()

        res.send(projected)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const updated = await Project.findOneAndUpdate({ _id: id }, req.body, { new: true }).exec()
        res.send(updated)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const removed = await Project.findOneAndDelete({ _id: id }).exec()
        res.send(removed)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}