
var entries = [];
var liHTML = '<li><p>%data%</p></li>';

function getUserEntries() {
    var string = prompt('Please enter some text you\'d like to save.');
    entries.push(string);

    displayEntry(string);
}

function displayEntry(entry) {
    var ul = $('#entries');
    if (entry) {
        var formattedLi = liHTML.replace('%data%', entry);
        ul.append(formattedLi);
    }
}