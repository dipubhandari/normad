import express from 'express'
import VenderController from '../controller/venderController.js'
import multer from 'multer'

const venderRouter = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/vendor')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

// routes for vender
// public routes
venderRouter.get('/featured-vendors', VenderController.FeaturedVendor)
// protected route
venderRouter.post('/add-vendor', upload.single('avatar'), VenderController.NewVendor)
// delete
venderRouter.delete('/delete-vendor/:id', VenderController.DeleteVendor)
// routes for vender till

// exporting the routes
export default venderRouter