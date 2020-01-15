const view = {
	deliveryFormComponents: {
		title: function(title) {
			const form = document.getElementById('form');
			const formTitle = document.createElement('div');
			
			formTitle.classList.add('form__Title');
			form.insertAdjacentElement('beforeend', formTitle);
			formTitle.innerHTML = title;
		},

		formRow: function(id) {
			const form = document.getElementById('form');
			const formRow = document.createElement('div');
			
			formRow.classList.add('form__Row');
			form.insertAdjacentElement('beforeend', formRow);
			formRow.setAttribute('id', id);
		},

		formRowName: function(parentId, nameOfFormRow) {
			const parent = document.getElementById(parentId);
			const formRowName = document.createElement('span');

			formRowName.classList.add('form__RowName');
			parent.insertAdjacentElement('beforeend', formRowName)
			formRowName.innerHTML = nameOfFormRow;
		},

		formRowInput: function(parentId, ...className) {
			const parent = document.getElementById(parentId);
			const formRowInput = document.createElement('input');

			formRowInput.classList.add('form__RowInput', ...className);
			parent.insertAdjacentElement('beforeend', formRowInput);
		},

		formRowAttentionNotification: function(parentId) {
			const parent = document.getElementById(parentId);
			const attentionNotification = document.createElement('a');

			attentionNotification.setAttribute('title', 'поле, обязательное для заполнения');
			parent.insertAdjacentElement('afterbegin', attentionNotification);
			attentionNotification.innerHTML = '*';
			attentionNotification.classList.add('form__attentionNotification');
		},

		formRowFakeAttentionNotification: function(parentId) {
			const parent = document.getElementById(parentId);
			const attentionNotification = document.createElement('a');

			attentionNotification.setAttribute('title', 'поле, обязательное для заполнения');
			parent.insertAdjacentElement('afterbegin', attentionNotification);
			attentionNotification.innerHTML = '*';
			attentionNotification.classList.add('form__fakeAttentionNotification');
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
		},

		clearButton: function(parentId, name){
			const parent = document.getElementById(parentId);
			const clearButton = document.createElement('button');

			clearButton.classList.add('form__clearButton');
			parent.insertAdjacentElement('beforeend', clearButton);
			clearButton.innerHTML = name;
		},

		submitButton: function(parentId, name){
			const parent = document.getElementById(parentId);
			const submitButton = document.createElement('button');

			submitButton.classList.add('form__submitButton');
			parent.insertAdjacentElement('beforeend', submitButton);
			submitButton.innerHTML = name;
		},
	},

	renderingElements: {
		renderingFormTitle: function(){
			view.deliveryFormComponents.title('Заполните данные для отправки');
		},

		renderingRecipientSurname: function(){
			view.deliveryFormComponents.formRow('RecipientSurname');
			view.deliveryFormComponents.formRowName('RecipientSurname', model.rowsTitles[0]);
			view.deliveryFormComponents.formRowInput('RecipientSurname', 'isFilled', 'isNumeric');
			view.deliveryFormComponents.formRowAttentionNotification('RecipientSurname');
		},

		renderingRecipientName: function(){
			view.deliveryFormComponents.formRow('RecipientName');
			view.deliveryFormComponents.formRowName('RecipientName', model.rowsTitles[1]);
			view.deliveryFormComponents.formRowInput('RecipientName', 'isFilled', 'isNumeric');
			view.deliveryFormComponents.formRowAttentionNotification('RecipientName');
		},

		renderingRecipientFathername: function(){
			view.deliveryFormComponents.formRow('RecipientFathername');
			view.deliveryFormComponents.formRowName('RecipientFathername', model.rowsTitles[2]);
			view.deliveryFormComponents.formRowInput('RecipientFathername', 'isNumeric');
			view.deliveryFormComponents.formRowFakeAttentionNotification('RecipientFathername');
		},

		renderingRecipientPhoneNumber: function(){
			view.deliveryFormComponents.formRow('RecipientPhoneNumber');
			view.deliveryFormComponents.formRowName('RecipientPhoneNumber', model.rowsTitles[3]);
			view.deliveryFormComponents.formRowInput('RecipientPhoneNumber', 'isFilled');
			view.deliveryFormComponents.formRowAttentionNotification('RecipientPhoneNumber');
		},

		renderingTypeOfDelivery: function(){
			view.deliveryFormComponents.formRow('TypeOfDelivery');
			view.deliveryFormComponents.formRowDeliveryTypeCheck('TypeOfDelivery', model.rowsTitles[4], model.rowsTitles[5], model.rowsTitles[6]);
		},

		renderingCity: function(){
			view.deliveryFormComponents.formRow('RecipientCity');
			view.deliveryFormComponents.formRowName('RecipientCity', model.rowsTitles[7]);
			view.deliveryFormComponents.formRowInput('RecipientCity', 'isFilled');
			view.deliveryFormComponents.formRowAttentionNotification('RecipientCity');
		},

		renderingPosteOfficeNumber: function(){
			view.deliveryFormComponents.formRow('PosteOfficeNumber');
			view.deliveryFormComponents.formRowName('PosteOfficeNumber', model.rowsTitles[8]);
			view.deliveryFormComponents.formRowInput('PosteOfficeNumber', 'isFilled');
			view.deliveryFormComponents.formRowAttentionNotification('PosteOfficeNumber');

		},

		renderingPosteOfficeAdress: function(){
			view.deliveryFormComponents.formRow('PosteOfficeAdress');
			view.deliveryFormComponents.formRowName('PosteOfficeAdress', model.rowsTitles[9]);
			view.deliveryFormComponents.formRowInput('PosteOfficeAdress', 'isFilled');
			view.deliveryFormComponents.formRowAttentionNotification('PosteOfficeAdress');
		},

		renderingClearBotton: function() {
			view.deliveryFormComponents.formRow('buttonRow');
			view.deliveryFormComponents.clearButton('buttonRow', 'Отменить');
		},

		renderingSubmitBotton: function() {
			view.deliveryFormComponents.submitButton('buttonRow', 'Сохранить');
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