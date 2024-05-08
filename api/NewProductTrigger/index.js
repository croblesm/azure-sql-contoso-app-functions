module.exports = function (context, orderEntry) {
    context.log(`SQL Changes: ${JSON.stringify(orderEntry)}`)
    context.bindings.outputNewOrders = [];

    orderEntry.forEach(newOrder => {
        context.log(`Order change type: ${JSON.stringify(newOrder.Operation)}`);
        // inserts only
        if (newOrder.Operation === 0) {
            context.log(`!!!!! New Order: ${JSON.stringify(newOrder)}`);
            context.bindings.outputNewOrders.push(newOrder.Item);
        }
    });

    context.done();
}