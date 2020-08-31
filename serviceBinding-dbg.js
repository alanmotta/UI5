function initModel() {
	var sUrl = "/delaware/global/services/BugetToolUI5FileUpload.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}