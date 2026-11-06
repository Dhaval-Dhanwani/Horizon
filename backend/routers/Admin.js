import express from 'express'
import * as AdminController from '../controllers/Admin/admin.js'

app= express()

app.post("/uploads",AdminController.imageupload)