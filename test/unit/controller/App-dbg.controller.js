/*global QUnit*/

sap.ui.define([
	"delaware/reporting/sacimport/bugettool/BugetToolFileUpdate/controller/App.controller"
], function (Controller) {
	"use strict";

	QUnit.module("App Controller");

	QUnit.test("I should test the App controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});