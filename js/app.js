
var entries = [];

function getUserEntries() {
    var string = prompt("Please enter some text you'd like to save.");
    entries.push(string);
}

getUserEntries();