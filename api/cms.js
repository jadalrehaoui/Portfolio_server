const router = require('express').Router();
const controller = require('../controllers/cms');
const middlewares = require('../middlewares');
const passport = require('passport');

router.patch('/personal-info', middlewares.isAuthenticated, middlewares.upload.single("display_picture"), controller.updatePersonalInfo);
router.patch('/about-me', middlewares.isAuthenticated, middlewares.upload.single('resume_file'), controller.updateAboutMe);
router.patch('/resume-intro', middlewares.isAuthenticated, controller.updateResume);
router.post('/add-education', middlewares.isAuthenticated, controller.addEducation);
router.post('/add-employment', middlewares.isAuthenticated, controller.addEmployment);
router.post('/add-skill', middlewares.isAuthenticated, controller.addSkill);
router.post('/add-project', middlewares.isAuthenticated, middlewares.upload.single('thumbnail_file'), controller.addProject);
router.patch('/edit-project/:id', middlewares.isAuthenticated, middlewares.upload.single('thumbnail_file'), controller.updateProject);
router.get('/logout', middlewares.isAuthenticated, controller.logout);
router.post('/login', passport.authenticate('local'), controller.login);
module.exports = router;
