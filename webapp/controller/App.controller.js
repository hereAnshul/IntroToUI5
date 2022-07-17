sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel){
    "use strict";
    return Controller.extend("sap.ui.introtoui5.controller.App", {
        // since now all the init stuff is being done in the component,
        // we don't need it here again that be redundant and maybe wrong too.
        /* onInit : function (){
            // this will be the model that we define as JSON
            var oData = {
                recipient : {
                    name : "Anshul"
                } 
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // creating the initialization of the ResourceModel in onInit
            var i18nModel = new ResourceModel({
                bundleName:"sap.ui.introtoui5.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
        }, */

        onClickShowSomething : function () {
            // alert("Text once the event 'ButtonClick' event is triggered");
            //MessageToast.show("Toast after press of the button.");
            // going to read text from i18nModel
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("showMessageText", [sRecipient]);

            MessageToast.show(sMsg);
        }
    });
});         