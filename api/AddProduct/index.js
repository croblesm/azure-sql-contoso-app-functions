const uuid = require('uuid');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body) {
        var newProduct = req.body;

        // setting some default values
        // set ModifiedDate to now
        newProduct.ModifiedDate = new Date();
        newProduct.SellStartDate = new Date();
        // set rowguid to new guid
        newProduct.rowguid = uuid.v4();
        // set discontinued to null
        newProduct.DiscontinuedDate = null;


        // checking for optional fields
        // check for 0 weight, database expecting null
        if (newProduct.Weight === 0) {
            newProduct.Weight = null;
        }
        // check for empty/missing size, replace with null
        if (!newProduct.Size || newProduct.Size === '') {
            newProduct.Size = null;
        }
        // check for empty/missing color, replace with null
        if (!newProduct.Color || newProduct.Color === '') {
            newProduct.Color = null;
        }

        // generate the product number
        // eg name "The New Product" will generate "TNP-1234"
        var productNumber = "";
        for (var i = 0; i < newProduct.Name.length; i++) {
            if (newProduct.Name[i].match(/^[A-Z]*$/)) {
                productNumber += newProduct.Name[i];
            }
            if (productNumber.length >= 10) {
                break;
            }
        }
        if (productNumber.length === 0) {
            productNumber = "A-";
        }
        productNumber += "-" + Math.floor(Math.random()*1000);
        newProduct.ProductNumber = productNumber;

        context.bindings.product = JSON.stringify(newProduct);
    
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: newProduct,
            status: 201
        };
    } else {
        context.res = {
            status: 400,
            body: "Pass the product contents in the request body"
        };
    }
}