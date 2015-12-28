sap.ui.jsview("samplehello.sample", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf samplehello.sample
	*/ 
	getControllerName : function() {
		return "samplehello.sample";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf samplehello.sample
	*/ 
	createContent : function(oController) {
		var simpleBtn = new sap.m.Button("idSimpleBtn",{
			text:"Hello,Press me!!!",
			tap:[oController.greetMe,oController]
		});
 		var page =  new sap.m.Page({
			title: "Hello World",
			content: [
			          simpleBtn
			]
		});
 		return page;
	}

});