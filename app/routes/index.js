
import database from '../config/database';
import express from 'express'

import UsuarioRota from "./UsuarioRota";

const routes = express.Router();

//controladores
const UsuarioCtrl = require('../controllers/UsuarioCtrl')


routes.post('/login')