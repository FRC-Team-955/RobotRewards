/* global $ */
/* global deepstream */
var ds = deepstream("localhost:6020").login();
var front = {}, back = {};
var memberSelect = document.getElementById("teamMemberSelect");

// Deepstream functions.

// Update the frontend dropdown list of team members.
front.updateMembers = function () {
	var option;
	$.get("/members", null, function (data) {
		for (var i = 0; i < data.length; i++) {
			option = document.createElement("option");
			option.value = i + 1;
			option.text = data[i].nameFirst + " " + data[i].nameLast;
			memberSelect.add(option);
		};
	});
};

// jQuery initial function.
$(document).ready(function () {
	$("#teamMemberSelect")
		.dropdown();

	front.updateMembers();
});