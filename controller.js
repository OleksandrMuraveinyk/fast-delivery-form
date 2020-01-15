import model from "./model.js";
import view from "./view.js";

const controller = {
	clearButtonAction: function() {
		const rowOfButton = document.getElementById('buttonRow');
		const targetButton = rowOfButton.firstChild;
		targetButton.addEventListener('click', model.preventDefault);
		targetButton.addEventListener('click', view.formClear);

	},

	submitButtonAction: function() {
		const rowOfButton = document.getElementById('buttonRow');
		const targetButton = rowOfButton.lastChild;
		targetButton.addEventListener('click', model.preventDefault);
		targetButton.addEventListener('click', model.checkBeforeSave);
		targetButton.addEventListener('click', model.saveData);

	},

	checkBoxState: function(){
		const elem = document.getElementById('TypeOfDelivery');

		elem.onclick = function(event){
			let target = event.target;
			if(target.className != 'checkbox') return;
			if(!target.getAttribute('checked')) {
				target.setAttribute('checked', 'checked');
			} else{
				target.setAttribute('checked', '');
			}
		}
	},

	additionalOptionsRendering: function(){
		controller.postOfficeAddressDisabling();
		controller.postOfficeNumberOnchange();
	},

	postOfficeAddressDisabling: function(){
		const addressRow = document.getElementById('PosteOfficeAdress');
		const disabledElem = addressRow.lastChild;
		disabledElem.setAttribute('disabled', 'disabled');

	},

	postOfficeNumberOnchange: function(){
		const numberRow = document.getElementById('PosteOfficeNumber');
		const thePostOfficeNumber = numberRow.lastChild;
		thePostOfficeNumber.setAttribute('onchange', 'model.postOfficeAddressParsing()');
	},
   
}
view.contentRendering();
controller.clearButtonAction();
controller.submitButtonAction();
controller.checkBoxState();
controller.additionalOptionsRendering();

export default controller;