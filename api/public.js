const router = require('express').Router();
const controller = require('../controllers/public');
const mongoose = require('mongoose');
const PersonalInfo = require('../models/PersonalInfo');
const Resume = require('../models/Resume');
const Project = require('../models/Project');
const AboutMe = require('../models/AboutMe');

router.get('/personal-info', (req, res) => controller.getRecentOne(req, res, PersonalInfo));
router.get('/about-me', (req, res) => controller.getRecentOne(req, res, AboutMe));
router.get('/resume', (req, res) => controller.getRecentOne(req, res, Resume));
router.get('/projects', (req, res) => controller.getAllPublished(req, res, Project));
router.post('/get-in-touch', controller.postMessage);

module.exports = router;
