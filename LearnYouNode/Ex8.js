var http = require('http');

http.get(process.argv[2], function(response) {
    var len = 0;
    var str = '';
    response.setEncoding("utf8");
    response.on("data", function(data) {
        len += data.length;
        str += data;
    });
    response.on("end", function(end) {
        console.log(len);
        console.log(str);
    });
    response.on("error", console.error);
});