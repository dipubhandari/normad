import Category__Model from "../model/categoryModel.js"


class CategoryController {

    // creating categories
    static CreateCategory = async (req, res) => {
        // getting the values from client
        const { name } = req.body
        const subcategories = ['Mens Wear', 'Shoes', 'Accessories', 'Other']
        try {
            // validating 
            if (!(name)) {
                res.status(400).send({ error_msg: "Enter the category name" })
            }
            else {
                const category = await Category__Model.create({
                    name, subcategories
                })
                // if category successfully created
                if (category) {
                    res.send({ succes_msg: "Successfully New Category Added" })
                }
                else {
                    res.send({ error_msg: "Try again" })
                }
            }
        }
        catch (error) {
            res.status(400).json({ error_msg: "Something went wrong" })
        }
    }
    static Categories = async (req, res) => {
        try {
            const categories = await Category__Model.find()
            if (categories) {
                res.send(categories)
            }
            else {
                res.status(400).json({ error_msg: 'Unable to find Try Again' })
            }
        } catch (error) {
            res.send({ error_msg: "Something Went Wrong" })
        }
    }
    // feting categories ..................................

    // deleting categories
    static DeleteCategory = async (req, res) => {
        try {
            // getting id
            const id = req.params.id
            // finding and delete the data id
            const deleteData = await Category__Model.findByIdAndDelete(id)
            if (deleteData) {
                res.send({ success_msg: "Succesfully Deleted" })
            }
            else {
                res.send({ error_msg: "Try Again" })
            }
        } catch (error) {
            res.status(400).send({ succes_msg: "Something Went Wrong" })
        }
    }

    //deleting categories................................
}

export default CategoryController