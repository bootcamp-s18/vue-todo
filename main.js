Vue.component('task', {

	props: [ 'words', 'index' ],

	template: '#task',

	methods: {
		signalDelete(index) {
			console.log("Emitting a delete event for [" + index + "] in task component");
			this.$emit('delete', index);
		}
	}

});


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

			console.log("Here we are, in removeTask, trying to delete [" + index + "]");
			this.tasks.splice(index, 1);

		}


	}

});