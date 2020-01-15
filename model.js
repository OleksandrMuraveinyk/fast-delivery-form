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
	rowsTitles: ['Фамилия получателя', 'Имя получателя', 'Отчество получателя', 'Номер телефона', 
	'Выберите способ доставки', 'Использовать транзитный счет1', 'Использовать транзитный счет2', 
	'Город', 'Номер отделения', 'Адрес отделения'],

	customerData: {
	},
		
	

	preventDefault: function (event) {
		event.preventDefault();
	},

	saveData: function(){
		const form = document.getElementById('form');
		const [surname, name, fathername, phone, , , city, posteOfficeNumber, posteOfficeAdress] = form.getElementsByTagName('input');
		const [firstCheckBox, secondCheckBox] = form.querySelectorAll('.checkbox');
		
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
}