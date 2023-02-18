import continentModel from "../model/continentModel.js"

class ContinentController {
    static PostContinents = async (req, res) => {
        const { name } = req.body
        console.log(name)
        try {
            const creatcontinent = await continentModel.create({ name })
            if (creatcontinent) {
                res.send({ success_msg: "Successfully created" })
            }
            else {
                res.send({ error_msg: "Try Again" })
            }
        } catch (error) {
            res.send({ error_msg: "Something went wrong" })
        }
    }

    // userRoute.get('/continents', ContinentController.Continents)
    static Continents = async (req, res) => { 
        try {
            const continents = await continentModel.find()
            const continentArr = continents.map((item, id) => {
                return item.name
            })
            res.send(continents)
        } catch (error) {
            res.send({ error_msg: "Something went wrong" })
        }
    }
}

export default ContinentController