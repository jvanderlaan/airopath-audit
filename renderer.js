// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

//Read WAPs json file
const fs = require('fs')

fs.readFile('./audit.json', 'utf8', (err, contents) => {

	if (err) {
		console.error(err);
		return
	}
	if (contents) {
		data = JSON.parse(contents);
	}

	listWaps();
	defaultWap();
	clickWap();
	navigateWaps();

});

//List WAPs from json file
function listWaps() {

	wapNames = "";

	$.each(data.waps, function () {
		$('#wap-list').html(wapNames += '<li class="list-group-item clickable wap-listed" data-wap-id="' + this.id + '"><strong>' + this.ap_name + '</strong></li>');		
	});

};

//Set WAP to default first in list
function defaultWap() {

	wap = data.waps[0];

	fillWap(wap);
	fillRules(wap);

};

//Set WAP by clicking in the list
function clickWap() {

	$('.wap-listed').click(function() {

		wapId = $(this).data('wap-id');
		wap = data.waps[wapId];

		fillWap(wap);
		fillRules(wap);

	});

};

//Set WAP by navigating up/down the list
function navigateWaps() {

};

//Fill WAP attributes & input vals
function fillWap(wap) {

	$('#ap-name').text(wap.ap_name);
	$('#ap-model').text(wap.ap_model);
	$('#antenna-model').text(wap.antenna_model);
	$('#mount-elevation').text(wap.mount_elevation);
	$('#backboard').val(wap.backboard);
	$('#broadcast').val(wap.broadcast);
	$('#cabling').val(wap.cabling);
	$('#elevation').val(wap.elevation);
	$('#equipment').val(wap.equipment);
	$('#label').val(wap.label);
	$('#location').val(wap.location);
	$('#material').val(wap.material);
	$('#obstruction').val(wap.obstruction);
	// $('#safety_cable').val(wap.safety_cable);
	$('#notes').val(wap.notes);
	// $('#up').val(wap.up);
	// $('#right').val(wap.right);
	// $('#down').val(wap.down);
	// $('#left').val(wap.left);

};

//Fill rules/tolernaces element
function fillRules(wap) {

	if (wap.ap_type == 1) {
		$('#ap-type').load("./views/opentostructure.html");
	} else if (wap.ap_type == 2) {
		$('#ap-type').load("./views/highracking.html");
	}

};
