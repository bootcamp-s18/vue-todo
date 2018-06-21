Vue.component('task', {

	props: [ 'words', 'index' ],

	template: `<li class="list-group-item" v-on:click="signalDelete(index)">
				{{ words }}
				<button type="button" class="close" aria-label="Close">
  					<span aria-hidden="true" class="text-danger">&times;</span>
				</button>
			</li>`,

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