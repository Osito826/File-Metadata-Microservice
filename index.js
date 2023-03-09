//existing
var express = require('express');
var cors = require('cors');
require('dotenv').config()
//existing
var app = express();
//existing
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
//existing
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});



//existing
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
/*
New
You should provide your own project, not the example URL.
Waiting:You can submit a form that includes a file upload.
Waiting:The form file input field has the name attribute set to upfile.
Waiting:When you submit a file, you receive the file name, type, and size in bytes within the JSON response.
*/

//Install and set multer dependency & require it
let multer = require('multer')

//Set up the File Upload POST route
//call instance of file upload multer
app.post('/api/fileanalyse', multer().single('upfile'), (request, response) => {
  let responseObject = {}
  responseObject['name'] = request.file.originalname
  responseObject['type'] = request.file.mimetype
  responseObject['size'] = request.file.size
  
  response.json(responseObject)
})
