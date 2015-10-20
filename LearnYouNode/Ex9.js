var http = require('http');

var urlObject = {
    obj1: new getData(process.argv[2]),
    obj2: new getData(process.argv[3]),
    obj3: new getData(process.argv[4])
};

var finishedCount = 0;

function getData(url) {

    this.contents = '';

    var that      = this;
    var options   = {
        "data" : function(data) { that.contents += data; },
        "end"  : function()     { finish(); }
    };

    var finish = function() {
        finishedCount++;
        if( finishedCount === 3){
            for(i in urlObject) {
                console.log(urlObject[i].contents);
            }
        }
    };

    http.get(url, function(response) {
        for(key in options) {
            response.on(key, options[key]);
        };
    });
};