 //without promise
 const cart = ["shoes","pants","kurta"];
 
 createOrder(cart,function(ordeerId){
    processedToPayment(orderId);
 });



 //with promise
 const promise = createOrder(cart);

 promise.then(finction (orderId){
    processedToPayment(orderId);
 });

 //promise chaining
 createOrder(cart)
 .then((orderId) => processedToPayment(orderId))
 .then((paymentInfo) => showOrderSummary(paymentInfo))
 .then((paymentInfo) =>updateWalletBalance(paymentInfo));