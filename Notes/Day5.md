##### Component Configuration (Component.js)

- a process to encapsulate all the UI assets into a component that would be independent of of the index.html file.
- this makes all the component or assets independent and reusable

- create an initial `Component.js` file in the `webapp` folder that will hold the app setup,
- the init function of the component is automatically invoked by SAPUI5 when the component is instantiated. Our component inherits from the base class sap.ui.core.UIComponent and it is obligatory to make the super call to the init function of the base class in the overridden init method.

- metadata section defines a reference to the root view,
- init function which will get invoked by SAPUI5 when the component is instantiated, will in-turn instantiate the models that were being instantiated in the App.controller

- now this component will take care of the view and we will not have to manage/maintain it in the index.js file,

- with compoenet configuration, models are directly set on the component and not on the root view of the component. However, as nested controls automatically inherit the models from their parent controls, the models will be available on the view as well.

##### Descriptor for Applications (manifest.json)

- application specific configuration settings are placed in a separate file called `manifest.json`.
- this helps separate application coding and configuration settings,

- now I have created this file on day [one](./Day1.md)

- with this in place we no longer need  the index.js file as the component container setttings are now available in the manifest, hence the descriptior will take care of everything,
- the component is declared in the `index.html` file, inside the *script-tag* of our index.html, we enabled the ComponentSupport module,
- and then the component is declared in the body via a *div-tag*, this will instantiate the component when the onInit event is executed

- read [this](https://sapui5.hana.ondemand.com/1.103.1/#/topic/8f93bf2b2b13402e9f035128ce8b495f) for more details.

> end of day 5 [commit - *separating code and config*]
--- 

TODO
: there are a lot of console error, need to fix those as an activity for self,