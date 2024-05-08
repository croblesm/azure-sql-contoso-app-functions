module.exports = async function (context, req, salesinfo) {
    context.log('JavaScript HTTP trigger function processed a request.');
    // check if salesinfo is empty
    if (salesinfo.OrderCount == 0) {
        context.res = {
            status: 204
        };
        return;
    }
    else {
        const responseMessage = salesinfo;
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }
}