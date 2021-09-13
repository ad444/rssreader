const express = require('express');
const fs = require('fs');
const data = require('./newsSectionContainer');
const feeds = require('./newsChannelsContentFeeds');
const newsChannelsData = require('./newsChannelsContent');
const file = require('./jsonWrite');
let Parser = require('rss-parser');
let parser = new Parser();
const path = require('path');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ClientDetails', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("successfully connected to the database");
});
//clientdetails collection
const ClientSchema = new mongoose.Schema({
    name: String,
    email: String
});
const ClientDetails = mongoose.model('ClientDetails', ClientSchema);

//clientcontact details collection
const ClientContactSchema = new mongoose.Schema({
    name: String,
    email: String
});
const ContactDetails = mongoose.model('ContactDetails', ClientContactSchema);

//inorder to accept post request
app.use(express.urlencoded());

//necessary to read stylesheets and javascripts stored in static folder
app.use('/static', express.static('static'));

//app will render html files from the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', (req, res) => {
    const data = new ContactDetails(req.body);
    data.save().then(() => {
        res.render('login');
    }).catch((err) => { res.send("There is an error in getting your data : ", err) });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/dashboard', (req, res) => {
    res.render('homedashboard');
});

app.post('/dashboard', (req, res) => {
    var data = new ClientDetails(req.body);
    data.save().then(() => {
        //on successfully sending the data render the page again
        res.render('homedashboard');
    }).catch((err) => {
        //on any error throw this statement
        res.end("Data is not added succesfully", err);
    });
});

//newsSectionContainer.js module
data.jsonFile.newscards.forEach((element) => {
    return app.get(`/dashboard/${element.url}`, (req, res) => {
        res.render('i', { title: element.header, url: element.url });
    });
});

//newsChannelsContent.js module
newsChannelsData.newsChannels.newsChannelsContent.forEach((element) => {
    app.get(`/dashboard/${element.channelURL}/${element.channelTopStories}`, (req, res) => {
        //newsChannelsContentFeeds.js module function feeds is used
        let feed = feeds.call(req.url);
        let data;
        (async () => {
            data = await parser.parseURL(feed);
            res.render('newsChannelsContent', { channelName: element.channelName, header: element.pageHeaderTopStories, feed: JSON.stringify(data) });
        })();
    });
    app.get(`/dashboard/${element.channelURL}/${element.channelBusiness}`, (req, res) => {
        //newsChannelsContentFeeds.js module function feeds is used
        let feed = feeds.call(req.url);
        let data;
        (async () => {
            data = await parser.parseURL(feed);
            res.render('newsChannelsContent', { channelName: element.channelName, header: element.pageHeaderBusiness, feed: JSON.stringify(data) });
        })();
    })
    app.get(`/dashboard/${element.channelURL}/${element.channelHealth}`, (req, res) => {
        //newsChannelsContentFeeds.js module function feeds is used
        let feed = feeds.call(req.url);
        let data;
        (async () => {
            data = await parser.parseURL(feed);
            res.render('newsChannelsContent', { channelName: element.channelName, header: element.pageHeaderHealth, feed: JSON.stringify(data) });
        })();
    })
    app.get(`/dashboard/${element.channelURL}/${element.channelWorld}`, (req, res) => {
        //newsChannelsContentFeeds.js module function feeds is used
        let feed = feeds.call(req.url);
        let data;
        (async () => {
            data = await parser.parseURL(feed);
            res.render('newsChannelsContent', { channelName: element.channelName, header: element.pageHeaderWorld, feed: JSON.stringify(data) });
        })();
    })
    app.get(`/dashboard/${element.channelURL}/${element.channelSports}`, (req, res) => {
        //newsChannelsContentFeeds.js module function feeds is used
        let feed = feeds.call(req.url);
        let data;
        (async () => {
            data = await parser.parseURL(feed);
            res.render('newsChannelsContent', { channelName: element.channelName, header: element.pageHeaderSports, feed: JSON.stringify(data) });
        })();
    })
    app.get(`/dashboard/${element.channelURL}/${element.channelTechnology}`, (req, res) => {
        //newsChannelsContentFeeds.js module function feeds is used
        let feed = feeds.call(req.url);
        let data;
        (async () => {
            data = await parser.parseURL(feed);
            res.render('newsChannelsContent', { channelName: element.channelName, header: element.pageHeaderTechnology, feed: JSON.stringify(data) });
        })();
    })
});

let tempStorage = fs.readFileSync('./static/json/testing.txt', 'utf-8');
tempStorage = JSON.parse(tempStorage);
tempStorage.data.forEach((element) => {
    (async () => {
        let rssfeeddata = await parser.parseURL(element.feedURL);
        app.get(`/dashboard/yourfeeds/${element.id}`, (req, res) => {
            res.render('userfeeddisplay', { title: element.title, data: JSON.stringify(rssfeeddata) })
        });
    })();
});

app.get('/dashboard/yourfeeds', (req, res) => {
    res.render('userfeeds');
});

app.post('/dashboard/yourfeeds', (req, res) => {

    let checkingPattern = /[0-9]/g;
    if (checkingPattern.test(JSON.stringify(req.body))) {
        let testingFile = fs.readFileSync('./static/json/testing.txt', 'utf-8');
        let dataArray = JSON.parse(testingFile).data;
        dataArray.forEach((element, index) => {
            if (JSON.stringify(req.body).includes(String(element.id))) {
                dataArray.splice(index, 1);
            }
        });
        let stringDataArray = JSON.stringify(dataArray);
        let newTestingFile = `{"data":${stringDataArray}}`;
        fs.writeFileSync('./static/json/testing.txt', newTestingFile);
        res.render('userfeeds');
    } else {
        let data;
        let transferrableData;
        (async () => {
            let testingFile = fs.readFileSync('./static/json/testing.txt', 'utf-8');
            let testingFileData = JSON.parse(testingFile);

            data = await parser.parseURL(req.body.feed);
            transferrableData = {
                id: testingFileData.data.length,
                title: data.title,
                feedURL: req.body.feed
            }
            file.writeJSON('testing', transferrableData);
            res.render('userfeeds');
            app.get(`/dashboard/yourfeeds/${testingFileData.data.length}`, (req, res) => {
                res.render('userfeeddisplay', { title: data.title, data: JSON.stringify(data) });
            });
        })();
    }
});

app.listen(8080, () => {
    console.log("server is listening at 8080 port");
});