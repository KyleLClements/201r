/**
 * This array of pokemon will represent a piece of data in our 'database'
 */
var pokemon = [

  {
    name: 'Thomas S. Monson',
       quorum: 'First',
    conferenceLink: 'https://www.lds.org/church/leader/thomas-s-monson?lang=eng&role=01',
    //avatarUrl: 'http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pokemon%20Pixels/Pikachu_Icon__free__by_Aminako.gif~c200'
    avatarUrl: 'https://www.lds.org/bc/content/shared/content/images/leaders/thomas-s-monson.jpg?lang=eng'
  },
     {
    name: 'Russell M. Nelson',
    quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/russell-m-nelson?lang=eng&role=03',   
    avatarUrl: 'https://www.lds.org/bc/content/shared/content/images/leaders/russell-m-nelson.jpg?lang=eng'

  },
   {
    name: 'Dallin H. Oaks',
    quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/dallin-h-oaks?lang=eng&role=03',
    avatarUrl: 'https://www.lds.org/bc/content/shared/content/images/leaders/dallin-h-oaks.jpg?lang=eng'

  },
    {
    name: 'M. Russell Ballard',
    quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/m-russell-ballard?lang=eng&role=03',
    avatarUrl: 'https://www.lds.org/bc/content/shared/content/images/leaders/m-russell-ballard.jpg?lang=eng'

  },
      {
    name: 'Robert D. Hales',
    quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/robert-d-hales?lang=eng&role=03',
    avatarUrl: 'https://www.lds.org/bc/content/shared/content/images/leaders/robert-d-hales.jpg?lang=eng'

  },
      {
    name: 'Jeffery R. Holland',
    quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/jeffrey-r-holland?lang=eng&role=03',
    avatarUrl: 'https://www.lds.org/bc/content/shared/content/images/leaders/jeffrey-r-holland.jpg?lang=eng'

  },
     {
    name: 'Henry B. Eyring',
    quorum: 'First',
    conferenceLink: 'https://www.lds.org/church/leader/henry-b-eyring?lang=eng&role=02',
    avatarUrl: 'https://www.lds.org/bc/content/shared/content/images/leaders/henry-b-eyring.jpg?lang=eng'

  },
   {
    name: 'Dieter F. Uchtdorf',
      quorum: 'First',
    conferenceLink: 'https://www.lds.org/church/leader/dieter-f-uchtdorf?lang=eng&role=02',
    avatarUrl: 'https://www.lds.org/bc/content/shared/content/images/leaders/dieter-f-uchtdorf.jpg?lang=eng'
  },
{
    name: 'David A. Bednar',
      quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/david-a-bednar?lang=eng&role=03',
    avatarUrl:'https://www.lds.org/bc/content/shared/content/images/leaders/david-a-bednar.jpg?lang=eng',
},
{
    name: 'Quentin L. Cook',
      quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/quentin-l-cook?lang=eng&role=03',
    avatarUrl:'https://www.lds.org/bc/content/shared/content/images/leaders/quentin-l-cook.jpg?lang=eng',
},
{
    name: 'D. Todd Christofferson',
      quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/d-todd-christofferson?lang=eng&role=03',
    avatarUrl:'https://www.lds.org/bc/content/shared/content/images/leaders/d-todd-christofferson.jpg?lang=eng',
},
{
    name: 'Neil L. Anderson',
      quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/neil-l-andersen?lang=eng&role=03',
    avatarUrl:'https://www.lds.org/bc/content/shared/content/images/leaders/neil-l-andersen.jpg?lang=eng',
},
{
    name: 'Ronald A. Rasband',
      quorum: 'Twelve',
    conferenceLink: '',
    avatarUrl:'https://www.lds.org/bc/content/shared/content/images/leaders/ronald-a-rasband.jpg?lang=eng',
},
{
    name: 'Gary E. Stevenson',
      quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/gary-e-stevenson?lang=eng&role=03',
    avatarUrl:'https://www.lds.org/bc/content/shared/content/images/leaders/gary-e-stevenson.jpg?lang=eng',
},
  {
    name: 'Dale G. Renlund',
      quorum: 'Twelve',
    conferenceLink: 'https://www.lds.org/church/leader/dale-g-renlund?lang=eng&role=03',
    avatarUrl:'https://www.lds.org/bc/content/shared/content/images/leaders/dale-g-renlund.jpg?lang=eng',
}
];


var http = require('http');
var url = require('url');
var fs = require('fs');//
var ROOT_DIR = "src/";//Where it searches for html documents
var port = 4000;

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);

  if (urlObj.pathname === '/pokemon') {

    /**
     * TODO: return the array of pokemon above as a string
     * with an header status of 'ok'
     */
     res.writeHead(200);
      res.end(JSON.stringify(pokemon));//End of the message we are sending back

  } else {

    /**
     * Here is where we return all requests for files in our 'src' directory
     */
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
      if (err) {
        res.writeHead(404);//If we cannot find the file
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);//End of the message we are sending back
    });
  }

}).listen(port);

console.log('app is now running on port: ' + port)

