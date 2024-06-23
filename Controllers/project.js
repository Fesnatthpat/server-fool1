const Project = require('../Models/Project')
const fs = require('fs')

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
        // console.log(req.body)
        // console.log(req.file)
        var data = req.body
        if (req.file) {
            data.file = req.file.filename
        }
        console.log(data)
        const projected = await Project(data).save()
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
        
        if (removed?.file) {
            await fs.unlink('./uploads/' + removed.file, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('remove success')
                }
            })
        }

        res.send(removed)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}