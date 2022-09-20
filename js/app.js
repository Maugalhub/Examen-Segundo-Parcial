// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Axcess',
  	routes: [
		{
		path: '/inicio/',
    	url: 'index.html',
    	name: 'inicio',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/piano/',
    	url: 'piano.html',
    	name: 'piano',
  		},
		{
		path: '/guitarras/',
    	url: 'guitarras.html',
    	name: 'guitarras',
  		}
	],
	dialog: {
		title: 'Axcess',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('¡Bienvenido a Axcess!');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Tu orden ha sido recibida.",
      closeTimeout: 5000,
    });
    notification.open();
	
});





