module.exports = async function (context, obj) {

  context.bindings.customersTable = [];
      
     context.bindings.customersTable.push({
     PartitionKey: "Customer" + obj["Name"],
     RowKey: "1",
     Name: obj["Name"],
     Address : obj["Address"],
     Phone : obj["Phone"],
     Email : obj["Email"],
     Age : obj["Age"]
      })
 
 context.done();
};