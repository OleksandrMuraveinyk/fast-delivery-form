//------------model-------------

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

	deliveryFormComponents: {
		
		Title: function(title) {
			const form = document.getElementById('form');
			const formTitle = document.createElement('div');
			
			formTitle.classList.add('form__Title');
			form.insertAdjacentElement('beforeend', formTitle);
			formTitle.innerHTML = title;
		},

		FormRow: function(id) {
			const form = document.getElementById('form');
			const formRow = document.createElement('div');
			
			formRow.classList.add('form__Row');
			form.insertAdjacentElement('beforeend', formRow);
			formRow.setAttribute('id', id);
			
		},

		FormRowName: function(parentId, nameOfFormRow) {
			const parent = document.getElementById(parentId);
			const formRowName = document.createElement('span');

			formRowName.classList.add('form__RowName');
			parent.insertAdjacentElement('beforeend', formRowName)
			formRowName.innerHTML = nameOfFormRow;

		},

		FormRowInput: function(parentId, ...className) {
			const parent = document.getElementById(parentId);
			const formRowInput = document.createElement('input');

			formRowInput.classList.add('form__RowInput', ...className);
			parent.insertAdjacentElement('beforeend', formRowInput);

		},

		FormRowAttentionNotification: function(parentId) {
			const parent = document.getElementById(parentId);
			const attentionNotification = document.createElement('a');

			attentionNotification.setAttribute('title', 'поле, обязательное для заполнения');
			parent.insertAdjacentElement('afterbegin', attentionNotification);
			attentionNotification.innerHTML = '*';
			attentionNotification.classList.add('form__attentionNotification');

		},

		FormRowFakeAttentionNotification: function(parentId) {
			const parent = document.getElementById(parentId);
			const attentionNotification = document.createElement('a');

			attentionNotification.setAttribute('title', 'поле, обязательное для заполнения');
			parent.insertAdjacentElement('afterbegin', attentionNotification);
			attentionNotification.innerHTML = '*';
			attentionNotification.classList.add('form__fakeAttentionNotification');

		},

		FormRowDeliveryTypeCheck: function(parentId, rowName, checkBoxOneName, checkBoxTwoName){
			const parent = document.getElementById(parentId);
			const checkTitle = document.createElement('div');
			const firstCheckBox = document.createElement('input');
			const secondCheckBox = document.createElement('input');

			checkTitle.classList.add('form__checkTitle');
			parent.insertAdjacentElement('afterbegin', checkTitle);
			checkTitle.innerHTML = rowName;

			firstCheckBox.setAttribute('id', 'firstCheckBox');
			firstCheckBox.setAttribute('type', 'checkbox');
			firstCheckBox.classList.add('checkbox');
			
			const firstLable = document.createElement('label');
			firstLable.classList.add('label', 'noselect');
			firstLable.setAttribute('for', 'firstCheckBox');
			parent.insertAdjacentElement('beforeend', firstCheckBox);
			parent.insertAdjacentElement('beforeend', firstLable);
			firstLable.innerHTML = checkBoxOneName;

			secondCheckBox.setAttribute('id', 'secondCheckBox');
			secondCheckBox.setAttribute('type', 'checkbox');
			secondCheckBox.classList.add('checkbox');
			
			const secondLable = document.createElement('label');
			secondLable.classList.add('label', 'noselect');
			secondLable.setAttribute('for', 'secondCheckBox');
			parent.insertAdjacentElement('beforeend', secondCheckBox);
			parent.insertAdjacentElement('beforeend', secondLable);
			secondLable.innerHTML = checkBoxTwoName;

		},

		ClearButton: function(parentId, name){
			const parent = document.getElementById(parentId);
			const clearButton = document.createElement('button');

			clearButton.classList.add('form__clearButton');
			parent.insertAdjacentElement('beforeend', clearButton);
			clearButton.innerHTML = name;


		},

		SubmitButton: function(parentId, name){
			const parent = document.getElementById(parentId);
			const submitButton = document.createElement('button');

			submitButton.classList.add('form__submitButton');
			parent.insertAdjacentElement('beforeend', submitButton);
			submitButton.innerHTML = name;

		},

	},

	postOfficeAddressDisabling: function(){
		const addressRow = document.getElementById('PosteOfficeAdress');
		const disabledElem = addressRow.lastChild;
		disabledElem.setAttribute('disabled', 'disabled');

	},

	postOfficeNumberOnblur: function(){
		const numberRow = document.getElementById('PosteOfficeNumber');
		const thePostOfficeNumber = numberRow.lastChild;
		thePostOfficeNumber.setAttribute('onchange', 'model.postOfficeAddressParsing()');
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
		for (let elem of mustBeLateric) {
			if (/[0-9]/.test(elem.value)) {
				model.borderIsRed(elem);	
			}
		}
	},

	checkBeforeSave: function() {
		model.checkingIsEmpty();
		model.checkingIsNumeric();
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
		clearTimeout(model.classDelete);
		model.classDelete =  setTimeout(() => elem.classList.remove('borderRed'), 5000);
	},

	classDelete: null,
}

//-------------view-------------

const view = {
	renderingElements: {
		renderingFormTitle: function(){
			model.deliveryFormComponents.Title('Заполните данные для отправки');
		},

		renderingRecipientSurname: function(){
			model.deliveryFormComponents.FormRow('RecipientSurname');
			model.deliveryFormComponents.FormRowName('RecipientSurname', 'Фамилия получателя');
			model.deliveryFormComponents.FormRowInput('RecipientSurname', 'isFilled', 'isNumeric');
			model.deliveryFormComponents.FormRowAttentionNotification('RecipientSurname');
		},

		renderingRecipientName: function(){
			model.deliveryFormComponents.FormRow('RecipientName');
			model.deliveryFormComponents.FormRowName('RecipientName', 'Имя получателя');
			model.deliveryFormComponents.FormRowInput('RecipientName', 'isFilled', 'isNumeric');
			model.deliveryFormComponents.FormRowAttentionNotification('RecipientName');
		},

		renderingRecipientFathername: function(){
			model.deliveryFormComponents.FormRow('RecipientFathername');
			model.deliveryFormComponents.FormRowName('RecipientFathername', 'Отчество получателя');
			model.deliveryFormComponents.FormRowInput('RecipientFathername', 'isNumeric');
			model.deliveryFormComponents.FormRowFakeAttentionNotification('RecipientFathername');
		},

		renderingRecipientPhoneNumber: function(){
			model.deliveryFormComponents.FormRow('RecipientPhoneNumber');
			model.deliveryFormComponents.FormRowName('RecipientPhoneNumber', 'Номер телефона');
			model.deliveryFormComponents.FormRowInput('RecipientPhoneNumber', 'isFilled');
			model.deliveryFormComponents.FormRowAttentionNotification('RecipientPhoneNumber');
		},

		renderingTypeOfDelivery: function(){
			model.deliveryFormComponents.FormRow('TypeOfDelivery');
			model.deliveryFormComponents.FormRowDeliveryTypeCheck('TypeOfDelivery', 'Выберите способ доставки', 'Использовать транзитный счет1', 'Использовать транзитный счет2');
		},

		renderingCity: function(){
			model.deliveryFormComponents.FormRow('RecipientCity');
			model.deliveryFormComponents.FormRowName('RecipientCity', 'Город');
			model.deliveryFormComponents.FormRowInput('RecipientCity', 'isFilled');
			model.deliveryFormComponents.FormRowAttentionNotification('RecipientCity');
		},

		renderingPosteOfficeNumber: function(){
			model.deliveryFormComponents.FormRow('PosteOfficeNumber');
			model.deliveryFormComponents.FormRowName('PosteOfficeNumber', 'Номер отделения');
			model.deliveryFormComponents.FormRowInput('PosteOfficeNumber', 'isFilled');
			model.deliveryFormComponents.FormRowAttentionNotification('PosteOfficeNumber');

		},

		renderingPosteOfficeAdress: function(){
			model.deliveryFormComponents.FormRow('PosteOfficeAdress');
			model.deliveryFormComponents.FormRowName('PosteOfficeAdress', 'Адрес отделения');
			model.deliveryFormComponents.FormRowInput('PosteOfficeAdress', 'isFilled');
			model.deliveryFormComponents.FormRowAttentionNotification('PosteOfficeAdress');
		},

		renderingClearBotton: function() {
			model.deliveryFormComponents.FormRow('buttonRow');
			model.deliveryFormComponents.ClearButton('buttonRow', 'Отменить');
		},

		renderingSubmitBotton: function() {
			model.deliveryFormComponents.SubmitButton('buttonRow', 'Сохранить');
		},

	},

	formClear: function() {
		const form = document.getElementById('form');
		const inputs = form.getElementsByTagName('input');
		const checkBoxes = form.getElementsByClassName('checkbox');

		for (let input of inputs) {
			input.value = '';
		}

		for (let checkbox of checkBoxes) {
			checkbox.checked = false;
			checkbox.setAttribute('checked', '');
		}

	},

}
function contentRendering() {
	view.renderingElements.renderingFormTitle();
	view.renderingElements.renderingRecipientSurname();
	view.renderingElements.renderingRecipientName();
	view.renderingElements.renderingRecipientFathername();
	view.renderingElements.renderingRecipientPhoneNumber();
	view.renderingElements.renderingTypeOfDelivery();
	view.renderingElements.renderingCity();
	view.renderingElements.renderingPosteOfficeNumber();
	view.renderingElements.renderingPosteOfficeAdress();
	view.renderingElements.renderingClearBotton();
	view.renderingElements.renderingSubmitBotton();
	
};

function additionalOptionsRendering(){
	model.postOfficeAddressDisabling();
	model.postOfficeNumberOnblur();
};

contentRendering();
additionalOptionsRendering();

//-------------controller-------------

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
}

controller.clearButtonAction();
controller.submitButtonAction();
controller.checkBoxState();