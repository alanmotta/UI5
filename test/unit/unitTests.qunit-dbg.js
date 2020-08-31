/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"delaware/reporting/sacimport/bugettool/BugetToolFileUpdate/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});