const view = {
	deliveryFormComponents: {
		title: function(title) {
			const form = document.getElementById('form');
			const formTitle = document.createElement('div');
			
			formTitle.classList.add('form__Title');
			form.insertAdjacentElement('beforeend', formTitle);
			formTitle.innerHTML = title;
			return view.deliveryFormComponents;
		},

		formRow: function(id) {
			const form = document.getElementById('form');
			const formRow = document.createElement('div');
			
			formRow.classList.add('form__Row');
			form.insertAdjacentElement('beforeend', formRow);
			formRow.setAttribute('id', id);
			return view.deliveryFormComponents;
		},

		formRowName: function(parentId, nameOfFormRow) {
			const parent = document.getElementById(parentId);
			const formRowName = document.createElement('span');

			formRowName.classList.add('form__RowName');
			parent.insertAdjacentElement('beforeend', formRowName)
			formRowName.innerHTML = nameOfFormRow;
			return view.deliveryFormComponents;
		},

		formRowInput: function(parentId, ...className) {
			const parent = document.getElementById(parentId);
			const formRowInput = document.createElement('input');

			formRowInput.classList.add('form__RowInput', ...className);
			parent.insertAdjacentElement('beforeend', formRowInput);
			return view.deliveryFormComponents;
		},

		formRowAttentionNotification: function(parentId) {
			const parent = document.getElementById(parentId);
			const attentionNotification = document.createElement('a');

			attentionNotification.setAttribute('title', 'поле, обязательное для заполнения');
			parent.insertAdjacentElement('afterbegin', attentionNotification);
			attentionNotification.innerHTML = '*';
			attentionNotification.classList.add('form__attentionNotification');
			return view.deliveryFormComponents;
		},

		formRowFakeAttentionNotification: function(parentId) {
			const parent = document.getElementById(parentId);
			const attentionNotification = document.createElement('a');

			attentionNotification.setAttribute('title', 'поле, обязательное для заполнения');
			parent.insertAdjacentElement('afterbegin', attentionNotification);
			attentionNotification.innerHTML = '*';
			attentionNotification.classList.add('form__fakeAttentionNotification');
			return view.deliveryFormComponents;
		},

		formRowDeliveryTypeCheck: function(parentId, rowName, checkBoxOneName, checkBoxTwoName){
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
			return view.deliveryFormComponents;
		},

		clearButton: function(parentId, name){
			const parent = document.getElementById(parentId);
			const clearButton = document.createElement('button');

			clearButton.classList.add('form__clearButton');
			parent.insertAdjacentElement('beforeend', clearButton);
			clearButton.innerHTML = name;
			return view.deliveryFormComponents;
		},

		submitButton: function(parentId, name){
			const parent = document.getElementById(parentId);
			const submitButton = document.createElement('button');

			submitButton.classList.add('form__submitButton');
			parent.insertAdjacentElement('beforeend', submitButton);
			submitButton.innerHTML = name;
			return view.deliveryFormComponents;
		},
	},

	renderingElements: {
		renderingFormTitle: function(){
			view.deliveryFormComponents.title('Заполните данные для отправки');
			return view.renderingElements;
		},

		renderingRecipientSurname: function(){
			view.deliveryFormComponents.formRow('RecipientSurname')
			.formRowName('RecipientSurname', model.rowsTitles[0])
			.formRowInput('RecipientSurname', 'isFilled', 'isNumeric')
			.formRowAttentionNotification('RecipientSurname')
			return view.renderingElements;
		},

		renderingRecipientName: function(){
			view.deliveryFormComponents.formRow('RecipientName')
			.formRowName('RecipientName', model.rowsTitles[1])
			.formRowInput('RecipientName', 'isFilled', 'isNumeric')
			.formRowAttentionNotification('RecipientName');
			return view.renderingElements;
		},

		renderingRecipientFathername: function(){
			view.deliveryFormComponents.formRow('RecipientFathername')
			.formRowName('RecipientFathername', model.rowsTitles[2])
			.formRowInput('RecipientFathername', 'isNumeric')
			.formRowFakeAttentionNotification('RecipientFathername');
			return view.renderingElements;
		},

		renderingRecipientPhoneNumber: function(){
			view.deliveryFormComponents.formRow('RecipientPhoneNumber')
			.formRowName('RecipientPhoneNumber', model.rowsTitles[3])
			.formRowInput('RecipientPhoneNumber', 'isFilled')
			.formRowAttentionNotification('RecipientPhoneNumber');
			return view.renderingElements;
		},

		renderingTypeOfDelivery: function(){
			view.deliveryFormComponents.formRow('TypeOfDelivery')
			.formRowDeliveryTypeCheck('TypeOfDelivery', model.rowsTitles[4], model.rowsTitles[5], model.rowsTitles[6]);
			return view.renderingElements;
		},

		renderingCity: function(){
			view.deliveryFormComponents.formRow('RecipientCity')
			.formRowName('RecipientCity', model.rowsTitles[7])
			.formRowInput('RecipientCity', 'isFilled')
			.formRowAttentionNotification('RecipientCity');
			return view.renderingElements;
		},

		renderingPosteOfficeNumber: function(){
			view.deliveryFormComponents.formRow('PosteOfficeNumber')
			.formRowName('PosteOfficeNumber', model.rowsTitles[8])
			.formRowInput('PosteOfficeNumber', 'isFilled')
			.formRowAttentionNotification('PosteOfficeNumber');
			return view.renderingElements;
		},

		renderingPosteOfficeAdress: function(){
			view.deliveryFormComponents.formRow('PosteOfficeAdress')
			.formRowName('PosteOfficeAdress', model.rowsTitles[9])
			.formRowInput('PosteOfficeAdress', 'isFilled')
			.formRowAttentionNotification('PosteOfficeAdress');
			return view.renderingElements;
		},

		renderingClearBotton: function() {
			view.deliveryFormComponents.formRow('buttonRow')
			.clearButton('buttonRow', 'Отменить');
			return view.renderingElements;
		},

		renderingSubmitBotton: function() {
			view.deliveryFormComponents.submitButton('buttonRow', 'Сохранить');
			return view.renderingElements;
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
	view.renderingElements.renderingFormTitle()
	.renderingRecipientSurname()
	.renderingRecipientName()
	.renderingRecipientFathername()
	.renderingRecipientPhoneNumber()
	.renderingTypeOfDelivery()
	.renderingCity()
	.renderingPosteOfficeNumber()
	.renderingPosteOfficeAdress()
	.renderingClearBotton()
	.renderingSubmitBotton();
};