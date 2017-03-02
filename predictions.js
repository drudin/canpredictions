var year = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"]

var area = ["sensible commenter behaviour", "user-generated content", "virtual reality", "holographic renderings of Question Time broadcast in your living room", "augmented reality", "Conrad Black's latest column", "artificial intelligence", "decentralized curation", "the CBC's newfound reliance on Patreon", "the collapse of the nation's journalism schools", "Peter Mansbridge's second career as a videogame developer", "Andrew Coyne's conversion to communism", "community", "podcasting", "improved print delivery", "product development", "user data", "quality advertising" , "fact checking", "data visualization", "hyper-local content", "animated explainer content", "the privatization of the CBC", "a proliferation of listicles about Xavier James Trudeau", "messenger bots covering City Hall", "forking journalism branches on GitHub", "a merger between Tim Hortons and CTV", "the collapse of net neutrality", "a synergistic collaboration between Starbucks and CityTV", "Paul Godfrey's latest retention bonus", "Peter Mansbridge coming out of retirement", ]
var outcome = ["save the day for", "rescue", "radically transform", "completely reshape", "utterly revolutionize", "usher in unspeakable change for", "revolutionize", "dramatically redeem", "stem the bleeding in", "bring tens of dollars to", "keep Postmedia afloat in", "allow TorStar to dominate", "allow Postmedia to dominate", "keep TorStar afloat in", "prevent the imminent death of", "precipitate the death spiral of", "slowly solve the downward trajectory of", "bring newfound riches to", "create tens of jobs in", "decimate the remaining workforce of", "forever change", "make no difference to", "increase youth interest in", "reduce the number of all-male panels", "reduce the overwhelming whiteness of"]


function news() {
    var rand1 = Math.floor(Math.random() * year.length);
    var rand2 = Math.floor(Math.random() * area.length);
    var rand3 = Math.floor(Math.random() * outcome.length);
    var a = year[rand1];
    var b = area[rand2];
    var c = outcome[rand3];


    var phrase = "In " + a + ", " + b + " will " + c + " the Canadian journalism industry."

    updateHTML('phrase', phrase);
    updateHTML('butn', '<a href="javascript:news();" class="button">Generate <em>another</em> prediction!</a>');

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
