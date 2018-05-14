({
	afterScriptsLoaded : function(component, event, helper) {

		var domEl = component.find("ratingarea").getElement(); // [get dom element of rating area] ==> "get dom element" is not cmp.find('foo'), it is indeed ... getElement()? maybe.
		var currentRating = component.get("v.value"); // [get value attribute of component]
		var readOnly = component.get("v.readonly"); // [get readonly attribute of component]
	
		var maxRating = 5;
	
		var callback = function(rating) {
			component.set('v.value', rating);
		}
		component.ratingObj = rating(domEl,currentRating,maxRating,callback,readOnly); 
		console.log('afterscriptsloaded');
	},
	
	onValueChange: function(component,event,helper) {
		 if (component.ratingObj) {
			var value = component.get('v.value');
			component.ratingObj.setRating(value,false);
		}
	}	
})