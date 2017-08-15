var myModel = {
	name: "Jonathan",
	age: 28,
	friends: [
	{ name: "Erens", age: 30 },
	{ name: "Warren", age: 40 },
	{ name: "Megan", age: 32 }
	]
};

Vue.component('sitepoint', {
	props: ['chanel'],
	template: '<a href="https://www.sitepoint.com/{{ channel | lowercase }}">{{ channel }} @Sitepoint</span>',
});

var myViewModel = new Vue({
	el: '#my_view',
	data: myModel,

	//A click handler inside methods
	methods: {
		myClickHandler: function(e) {
			alert("hello " + this.name);
		}
	}
});

