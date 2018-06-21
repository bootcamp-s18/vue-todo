var todo = new Vue({

	el: '#main',

	data: {

		newTaskText: '',

		tasks: [ 'Buy milk', 'Eat Oreos', 'Wash dishes' ]

	},

	methods: {

		addTask: function() {

			this.tasks.push(this.newTaskText);
			this.newTaskText = '';

		},

		removeTask: function(index) {

			this.tasks.splice(index, 1);

		}


	}

});