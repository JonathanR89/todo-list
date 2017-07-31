new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue ToDo App',
		anyLink: 'http://google.com',
		todoText: '',
		todos: [
		{ title: 'Todo1'},
		{ title: 'Todo2'},
		{ title: 'Todo3'},
		{ title: 'Todo4'},
		{ title: 'Todo5'}
		],
		showTodos: true,
		count: 1
	},
	methods: {
		createTodo: function () {
			var todoText = this.todoText.trim();
			if (todoText){
				this.todos.push({ title: todoText });
				this.todoText = '';
			}
		},
		clearTodo: function () {
			this.todoText = '';
		},
		increaseCounter: function () {
			this.count = this.count+1;
		}
	}
});	