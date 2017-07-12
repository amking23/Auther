'use strict';

var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
var Story = require('./story.model');
var User = require('../users/user.model')

router.param('id', function (req, res, next, id) {
  Story.findById(id)
  .then(function (story) {
    if (!story) throw HttpError(404);
    req.story = story;
    next();
    return null;
  })
  .catch(next);
});

router.get('/', function (req, res, next) {
  Story.scope('populated').findAll({
    attributes: { exclude: ['paragraphs'] }
  })
  .then(function (stories) {
    res.json(stories);
  })
  .catch(next);
});

router.post('/', function (req, res, next) {
  Story.create(req.body)
  .then(function (story) {
    return story.reload(Story.options.scopes.populated());
  })
  .then(function (storyIncludingAuthor) {
    res.status(201).json(storyIncludingAuthor);
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.story.reload(Story.options.scopes.populated())
  .then(function (story) {
    res.json(story);
  })
  .catch(next);
});

router.put('/:id', function (req, res, next) {
  req.story.update(req.body)
  .then(function (story) {
    return story.reload(Story.options.scopes.populated());
  })
  .then(function (storyIncludingAuthor) {
    res.json(storyIncludingAuthor);
  })
  .catch(next);
});

router.delete('/:id', function (req, res, next) {
  req.story.destroy()
  .then(function () {
    res.status(204).end();
  })
  .catch(next);
});

module.exports = router;
