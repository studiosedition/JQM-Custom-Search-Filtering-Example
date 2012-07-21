$(document).ready(function() {
	$('div#custom-format-page').on({ 
		pageinit: function(event) {
			$('#custom-format-listview').listview('option', 'filterCallback', onlyBody);
		}
	});
});

function defaultSearch( text, searchValue ) {
	console.log("Text: "+ text, ", SearchValue: "+ searchValue);
	return text.toLowerCase().indexOf( searchValue ) === -1;
}

function exactMatch( text, searchValue ) {
	console.log("text: "+ text, "searchValue: "+ searchValue);
	return !(text.toLowerCase() == searchValue);
}

function onlyBody( text, searchValue ) {
	var splitText = text.trim().split("\n");
	console.log("text: "+ splitText[1]);
	return splitText[1].toLowerCase().indexOf( searchValue ) === -1;
}

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}