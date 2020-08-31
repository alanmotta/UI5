sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("delaware.reporting.sacimport.bugettool.BugetToolFileUpdate.controller.CostCenter", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf delaware.reporting.sacimport.bugettool.BugetToolFileUpdate.view.CostCenter
		 */
		onInit: function () {
			this._oRouter = this.getOwnerComponent().getRouter();
		},
		/**
		 *@memberOf delaware.reporting.sacimport.bugettool.BugetToolFileUpdate.controller.CostCenter
		 */
		onPressUploadCC: function (oEvent) {
			//Call Financial Statements Hierarchy view
			this._oRouter.navTo("UploadCostCenter");
		},
		onBeforeExport: function (oEvent) {
			//Change export file header columns
			var vSettings = oEvent.getParameters("exportSettings");
			vSettings.exportSettings.workbook.columns[0].label = "TYPE";
			vSettings.exportSettings.workbook.columns[1].label = "ID_FROM";
			vSettings.exportSettings.workbook.columns[2].label = "ID_TO";
		}
	});
});