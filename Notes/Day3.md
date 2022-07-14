#### Views

- The view is responsible for defining and rendering the UI.

- UI5 support widespread form of view type (HTML, XML, JavaScript), 
- XML views are considered more readable.
- we put the controls in a dedicated view,

- Create `view` inside `webapp` and a file named **App.view.xml**
- the root node of the XML structure is the view in which we reference `sap.m` where the majority of our UI assets are located
- we define an additional sap.ui.core.mvcnamespace with alias mvc, where the SAPUI5 views and all other Model-View-Controller ([MVC](https://sapui5.hana.ondemand.com/#/topic/91f233476f4d1014b6dd926db0e91070.html)) assets are located.
-  XML tags are mapped to controls and the attributes are mapped to the properties of the control.

- Now since the control is defined within an XML view, in index.js we will change the code and instead of initializing the sap.m.Text xontrol we will reference the XML view.

- view [conventions](https://sapui5.hana.ondemand.com/#/topic/1409791afe4747319a3b23a1e2fc7064)

#### Controllers

- The controller reacts to view events and user interaction by modifying the view and model.

- In the view we added a button and mentioned a action/function/method against the press event of the button,
- logic of this action/function/method is written in the controller which is referenced in the same view with the `controllerName="` syntax,


> this ==use script== looks somewhat similar to what we have in the RAP development in the behaviour definition.

#### Modules

- in SAPUI5 modules are nothing but bundle of resources,
- we make use of [MessageToast](https://sapui5.hana.ondemand.com/#/api/sap.m.MessageToast%23overview) from sap.m in-place of vanilla alert.

- need to play with the `mOptions?` in sap.m.MessageToast

> end of day 3 [commit - *hello mvc*]
--- 