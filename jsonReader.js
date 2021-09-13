const fs = require('fs');

exports.readJSON = function(filename, object){
    let data = fs.readFileSync(`./static/json/${filename}.txt`, 'utf-8');
    let jsonData = JSON.parse(data);
    jsonData.data.push(object);
    let stringJSONData = JSON.stringify(jsonData);
    fs.writeFileSync(`./static/json/${filename}.txt`, stringJSONData);
}