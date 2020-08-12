var express = require('express');
var router = express.Router();
const Book = require('../models/Book')
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

/**
   * @swagger
   * /login:
   *   get:
   *     summary: Login to the application via basic auth(use admin:admin)
   *     tags: [Login (Get JWT)]
   *     security:
   *       - basicAuth: []
   *     responses:
   *       '200':
   *         description: returns json with user and token
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 user:
   *                   type: string
   *                   description: user authenticated with
   *                 token:
   *                   type: string
   *                   description: JWT
   *       '401':
   *          description: returns error in json
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  status:
   *                    type: string
   *                    description: authentication status
   */

router.get('/', async (req, res) => {
  const books = await Book.find();
  return res.json(books);
});

router.post('/', async (req, res) => {
  const { title, url, author, genres, target_class } = req.body;
  const book = await Book.create({ title, url, author, genres, target_class });
  return res.json(book);
});

router.delete('/', async (req, res) => {
  const { _id } = req.body;
  const book = await Book.deleteOne({ _id });
  return res.json({ type: 'DELETE', obj: _id, book });
});

module.exports = router;