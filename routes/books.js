const router = require('express').Router()
const Book = require('../models/book')
const { bookValidation } = require('../validations/book');

router.post('/', async (req, res) => {
    const { error } = bookValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    
    var newbook = Book({
        book: req.body.book,
        author: req.body.author
    })
    try{
        await newbook.save();
        res.json(newbook)
    }catch(err){
        res.json(err)
    }
})

router.get('/', async (req, res) => {
    try{
        res.json(await Book.find())
    }catch(err){
        res.json(err)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const data = await Book.find({_id: req.params.id})
        if (!data) return res.send("Book Does not exist")

        res.json(data)
    }catch(err){
        res.json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const data = await Book.find({_id: req.params.id})
        if (!data) return res.send("Book Does not exist")

        await Book.remove({_id: req.params.id});
        res.json(await Book.find())
    }catch(err){
        res.json(err)
    }
})

router.put('/:id', async (req, res) => {
    try{
        const { error } = bookValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message);
        
        const data = await Book.find({_id: req.params.id})
        if (!data) return res.send("Book Does not exist")

        await book.updateOne({_id: req.params.id}, {
            book: req.body.book,
            author: req.body.author
        });
        res.json(await Book.find())
    }catch(err){
        res.json(err)
    }
})

module.exports = router