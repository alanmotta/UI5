sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function (Controller, MessageBox, MessageToast) {
	"use strict";
	return Controller.extend("delaware.reporting.sacimport.bugettool.BugetToolFileUpdate.controller.UploadCostCenter", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf delaware.reporting.sacimport.bugettool.BugetToolFileUpdate.view.UploadCostCenter
		 */
		onInit: function () {
			this._oRouter = this.getOwnerComponent().getRouter();
		},
		onNavButtonPress: function () {
			// Call back Cost Center view
			this._oRouter.navTo("CostCenter");
		},
		onUpload: function (e) {
			// debugger;
			this.getView().setBusy(true);
			var oFileUploader = this.getView().byId("idfileUploader");
			oFileUploader.setAdditionalData(this.getOwnerComponent().getModel("newUploadModel").getProperty("/UploadName"));
			oFileUploader.upload(); // var fU = this.getView().byId("idfileUploader");
		},
		onSaveCC: function (evt) {
			var oJsonData = {
				"TYPE": "02",
				"FROM": "TESTE02",
				"TO": "TESTE01"
			};
			debugger;
			// var oJsonData = this.getView().byId("table1");
			$.ajax({
				// url: this.getView().getModel().sServiceUrl.substr(0, 35) + "/update.xsjs?$mode=ins",
				url: "https://i5qad9c5090c.hana.ondemand.com/delaware/reporting/services/UpdateTest.xsjs?TYPE=XD&FROM=TESTE&TO=TESTE",
				type: "POST",
				// contentType: "application/json",
				contentType: "text/plain",
				// contentType: "text/html",
				// data: JSON.stringify(oJsonData),
				data: oJsonData,
				// dataType: "json"
				// username: "REZENDERO",
				// password: "Delaware.01",
				xhrFields: {
					withCredentials: true
				},
				success: function (data, oResponse) {
					MessageToast.show(data);
				},
				error: function (xhr, ajaxOptions, throwError) {
					MessageToast.show(throwError);
				}
			});
		},
		//Nome da tabela que será utilizada para o CRUD			
		// var sPath = "/CCMapping";
		//Model criado no manifest/serviceBinding			
		// var oModel = this.getView().getModel();
		//Deleta dados da tabela CCMApping			
		// oModel.remove(sPath, null, {}); //Read data from table with .csv data			
		// var i;
		// var items = this.getView().byId("table1").getItems();
		// oModel.create(sPath, items, null);
		// for (i = 0; i < items.length; i++) {
		// 	var Table = this.getView().byId("table1");
		// 	var oEntry = {};
		// 	oEntry.TYPE = Table.getItems()[i].getCells()[0].getText();
		// 	oEntry.ID_FROM = Table.getItems()[i].getCells()[1].getText();
		// 	oEntry.ID_TO = Table.getItems()[i].getCells()[2].getText();
		// 	// var oModel = this.getView().getModel();
		// 	//Insert data from .csv to xsodata table CCMapping
		// 	oModel.create(sPath, oEntry, null);
		// }
		// },
		handleUploadComplete: function (oEvent) {
				debugger;
				this.getView().setBusy(false);
				var sResponse = oEvent.getParameter("response"),
					sMsg;
				if (sResponse.search("\"SUCCESS\"") !== -1) {
					sMsg = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgUploadSuccessful");
					this.getView().byId("table1").rebindTable();
					MessageToast.show(sMsg);
				} else {
					try {
						sMsg = JSON.parse(sResponse.match(/\{([^}]+)\}/g)).ERROR;
					} catch (error) {
						sMsg = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgUploadFailed");
					}
					MessageBox.show(sMsg, {});
				}
				this._getNewUploadDialog().close();
				oEvent.getSource().clear();
			}
			/**
			 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			 * @memberOf delaware.reporting.sacimport.bugettool.BugetToolFileUpdate.view.UploadCostCenter
			 */
			//	onExit: function() {
			//
			//	}
			,
		/**
		 *@memberOf delaware.reporting.sacimport.bugettool.BugetToolFileUpdate.controller.UploadCostCenter
		 */
		onUploadComplete: function (oEvent) {
			//This code was generated by the layout editor.
			debugger;
			var resp = oEvent.getParameters("response");
		}
	});
});