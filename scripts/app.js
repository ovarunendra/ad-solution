var allDataUrls = {
    'XML': '/data/response.xml',
    'JSON': '/data/response.json'
}

function getData(type) {
    var dataURL = allDataUrls[type];
    ajax.get(dataURL, {}, function(response) {
        updateUI('response', response.responseText)
    });
    updateUI('select-button', type);
}

function updateUI (elementId, data) {
    document.getElementById(elementId).innerHTML = data;
}

var _init = function() {
    getData('JSON');
}

_init();