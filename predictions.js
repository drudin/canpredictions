var year = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]

var area = ["commenting", "user-generated content", "virtual reality", "augmented reality", "Conrad Black's latest column", "artificial intelligence", "curation", "the CBC's newfound reliance on Patreon", "the collapse of the nation's journalism schools", "Andrew Coyne's conversion to communism", "community", "podcasting", "improved print delivery", "product development", "user data", "quality advertising" , "fact checking", "data visualization", "hyper-local content", "animated explainer content", "the privatization of the CBC", "a proliferation of listicles about Xavier James Trudeau", "messenger bots covering City Hall", "forking journalism branches on GitHub", "a merger between Tim Hortons and CTV", "the collapse of net neutrality", "a synergistic collaboration between Starbucks and Tim Hortons", "Paul Godfrey's latest retention bonus"]
var outcome = ["save", "rescue", "radically transforms", "completely reshape", "utterly revolutionilize", "usher in unspeakable change for", "revolutionize", "redeem", "stem the bleeding in", "bring tens of dollars to", "keep Postmedia afloat in", "allow TorStar to dominate", "allow Postmedia to dominate", "keep TorStar afloat in", "prevent the imminent death of"]


function news() {
    var rand1 = Math.floor(Math.random() * year.length);
    var rand2 = Math.floor(Math.random() * area.length);
    var rand3 = Math.floor(Math.random() * outcome.length);
    var a = year[rand1];
    var b = area[rand2];
    var c = outcome[rand3];


    var phrase = "In " + a + ", " + b + " will " + c + " the Canadian journalism industry."

    updateHTML('phrase', phrase);
    updateHTML('butn', '<a href="javascript:news();">Generate <em>another</em>, prediction!</a>');

    on('phrase');
}

function on(divName) {
    getStyleObject(divName).display = 'block';
}

function getStyleObject(objectId) {
    if(document.getElementById && document.getElementById(objectId)) {
        return document.getElementById(objectId).style;
    } else if (document.all && document.all(objectId)) {
        return document.all(objectId).style;
    } else if (document.layers && document.layers[objectId]) {
        return document.layers[objectId];
    } else {
        return false;
    }
}



function updateHTML(divName, updateWith) {
    if(document.getElementById && document.getElementById(divName)) {
        document.getElementById(divName).innerHTML = updateWith;
    } else if (document.all && document.all(divName)) {
        document.all(divName).innerHTML = updateWith;
    } else if (document.layers && document.layers[divName]) {
        document.layers[divName].innerHTML = updateWith;
    }
}
