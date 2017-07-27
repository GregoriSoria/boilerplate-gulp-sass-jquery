$(document).ready(function() {
	var page = {

		init: function() {
			console.log('iniciou javascript');
			this.declaracoes();
		},

		declaracoes: function() {
			this.clickTitulo();
		},

		clickTitulo: function() {
			$('h1').click(function() {
				alert('clicou no título');
			});
		},


	};


	page.init();
});