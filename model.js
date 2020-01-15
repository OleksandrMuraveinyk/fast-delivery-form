import view from "./view.js";
import controller from "./controller.js";

const model = {
	postOfficeData: [ 
		{
			number: '1',
			address: 'test address 1'
		},
		{
			number: '2',
			address: 'test  test address 22'
		},
		{
			number: '3',
			address: 'test address 33/3'
		},
		{
			number: '4',
			address: 'test address for test 44/44'
		},
		{
			number: '5',
			address: '5 test address 5'
		},
		{
			number: '6',
			address: 'test 6 test 6 address 666'
		},
		{
			number: '7',
			address: 'hello world address 7'
		},
		{
			number: '8',
			address: '8 house 8'
		}
	],
// object for keeping of user data after pushing of submitButton
	customerData: {

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
			model.borderIsRed(elem);
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
			model.borderIsRed(elem);
		}
	},

	checkBeforeSave: function() {
		clearTimeout(model.classDelete);
		model.checkingIsEmpty();
		model.checkingIsNumeric();
		model.borderTimeout();
	},

	preventDefault: function (event) {
		event.preventDefault();
	},

	saveData: function(){
		const form = document.getElementById('form');
		const inputedDatas = form.getElementsByTagName('input');
		const [surname, name, fathername, phone, , , city, posteOfficeNumber, posteOfficeAdress] = inputedDatas;

		const checkboxes = form.querySelectorAll('.checkbox');
		const [firstCheckBox, secondCheckBox] = checkboxes;

		model.customerData.user = {
			surname: surname.value,
			name: name.value,
			fathername: fathername.value,
			phone: phone.value,
			transiteOne: firstCheckBox.getAttribute('checked'),
			transiteTwo: secondCheckBox.getAttribute('checked'),
			city: city.value,
			posteOfficeNumber: posteOfficeNumber.value,
			posteOfficeAdress: posteOfficeAdress.value,
		}

		console.log(model.customerData.user);
		
	},

	borderIsRed: function(elem) {
		elem.classList.add('borderRed');
	},

	borderTimeout: function(elem) {
		model.classDelete = setTimeout(() => {
	    const redBordered = document.querySelectorAll('.borderRed');
	    	for (let elem of redBordered) {
	    		elem.classList.remove('borderRed')
	    	}
	    }, 5000);
	},

	classDelete: null,
}

export default model