sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel){
    "use strict";

    return UIComponent.extend("sap.ui.introtoui5.Component", {
        metadata : {
            /* rootView : {
                "viewName": "sap.ui.introtoui5.view.App",
                "type":"XML",
                 // we can also use this instead ->sap.ui.core.IAsyncContentCreation interface 
                "async":true,
                "id":"LearnenApp"
            } */
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        init : function () {

            // 1. calls the init function of the parent UI component,
            UIComponent.prototype.init.apply(this, arguments);

            // 2. json data model,
            var oData = {
                recipient : {
                    name : "Anshul"
                } 
            };
            var oModel = new JSONModel(oData);
            // in the case of components, getting the view doesn't makes sense,
            // this.getView().setModel(oModel);
            this.setModel(oModel);
            
            // this is now handled from the manifest 
           /*  // 3. i18n model,
            var i18nModel = new ResourceModel({
                bundleName:"sap.ui.introtoui5.i18n.i18n"
            });
            // getting view is not correct now,
            // this.getView().setModel(i18nModel, "i18n");
            this.setModel(i18nModel, "i18n"); */
        }
    });
});