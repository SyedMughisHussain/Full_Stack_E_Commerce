const uploadProductPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")

const deleteProduct = async (req, res) => {
    try {
        const sessionUserId = req.userId

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied")
        }

        const { id } = req.body;
    
        const deleteProduct = await productModel.findByIdAndDelete(id)

        res.json({
            message : "Product delete successfully",
            data : deleteProduct,
            success : true,
        })

    } catch (error) {
        res.json({ 
            message : error.message || error,
            success : false,
            error : true
        })
    }
}

module.exports = deleteProduct;