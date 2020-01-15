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
		targetButton.addEventListener('click', model.saveData);
	},

	checkBoxState: function(){
		const elem = document.getElementById('TypeOfDelivery');
		elem.onclick = function(event){
			const target = event.target;
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
		thePostOfficeNumber.setAttribute('onchange', 'controller.postOfficeAddressParsing()');
	},

	postOfficeAddressParsing: function(){
		const numberRow = document.getElementById('PosteOfficeNumber');
		const thePostOfficeNumber = numberRow.lastChild;
		const thePostOfficeNumberValue = thePostOfficeNumber.value;
		const addressRow = document.getElementById('PosteOfficeAdress');
		const autofillingElem = addressRow.lastChild;

		if (thePostOfficeNumberValue <= model.postOfficeData.length && thePostOfficeNumberValue > 1){
			autofillingElem.value = model.postOfficeData[+thePostOfficeNumberValue-1].address;
		} else {
			autofillingElem.value = 'проверьте номер указаного отделения';
		}
	},

	checkingIsEmpty: function(){
		const mustBeFilledElements = document.getElementsByClassName('isFilled');
		let errorsArr = [];
		for (let elem of mustBeFilledElements) {
			if (elem.value === '') {
				errorsArr.push(elem);
			}
		}
		for (let elem of errorsArr) {
			controller.borderIsRed(elem);
		}
	},

	checkingIsNumeric: function() {
		const mustBeLateric = document.getElementsByClassName('isNumeric');
		let errorsArr = [];
		for (let elem of mustBeLateric) {
			if (/[0-9]/.test(elem.value)) {
				errorsArr.push(elem);	
			}
		}
		for (let elem of errorsArr) {
			controller.borderIsRed(elem);
		}
	},

	checkBeforeSave: function() {
		clearTimeout(controller.classDelete);
		controller.checkingIsEmpty();
		controller.checkingIsNumeric();
		controller.borderTimeout();
	},

	borderIsRed: function(elem) {
		elem.classList.add('borderRed');
	},

	borderTimeout: function(elem) {
		const redBorderDeley = 5000;
		controller.classDelete = setTimeout(() => {
	    const redBordered = document.querySelectorAll('.borderRed');
	    	for (let elem of redBordered) {
	    		elem.classList.remove('borderRed')
	    	}
	    }, redBorderDeley);
	},

	classDelete: null,

}
contentRendering();
controller.clearButtonAction();
controller.submitButtonAction();
controller.checkBoxState();
controller.additionalOptionsRendering();