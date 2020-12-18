module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const name = (req.query.Name || (req.body && req.body.Name));
  const address = req.body.Address;
  const responseMessage = name + address;


  context.bindings.saveCustomer = req.body
  
  context.res = {
      // status: 200, /* Defaults to 200 */
      body: "Customer " +req.body.Name +  " Saved"
  };
}