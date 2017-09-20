exports.printMsg = function(msg) {
    console.log("This is a message from the demo package: " + msg);
}

exports.addProperty = function(obj, propertyName, propertyValue) {
    var data = obj.data
    if (data == null || propertyName == null || propertyValue == null) {
        return;
    }
    data[propertyName] = propertyValue
}

var test = {data: {}};

exports.addProperty(test, "prop1", "simple String")

exports.printMsg("Hello world")

console.log(test)
