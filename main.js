Vue.component('task', {
	template: '<li></li>'
});

new Vue({
	el: '#root',
	data: {
		tasks: [
      {description: 'Commit step 6', completed: false},
      {description: 'Complete step 6 Homework', completed: false},
      {description: 'Prepare coffee', completed: true},
      {description: 'Complete the puzzle', completed: false},
      {description: 'Take a brake', completed: false},
      {description: 'Eat cheese', completed: true}
    ]
	}
});