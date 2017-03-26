import Faker from "faker";

const initialState = {
	avotes: 1,
	questions: [
		{
			summary: "How to refactor this Redux connect code?",
			date: Faker.date.past(),
			tags: [
				"javascript",
				"reactjs",
				"ecmascript-6",
				"redux",
				"ecmascript-5"
			],
			name: `John Doe`,
			votes: 2,
			answers: 1,
			views: 10
		},
		{
			summary: "Need an IoT dev who knows Squirrel",
			date: Faker.date.past(),
			tags: [
				"squirrel",
				"iot"
			],
			name: `${Faker.name.findName()}`,
			votes: 0,
			answers: 2,
			views: 10
		},
		{
			summary: "Can't get my AWS Lambda to work",
			date: Faker.date.past(),
			tags: [
				"aws",
				"serverless"
			],
			name: `${Faker.name.findName()}`,
			votes: 0,
			answers: 1,
			views: 2			
		},
		{
			summary: "Heroku deployment stopped working",
			date: Faker.date.past(),
			tags: [
				"heroku",
				"node",
				"express"
			],
			name: `${Faker.name.findName()}`,
			votes: 3,
			answers: 2,
			views: 6			
		}
	]
};

const questions = (state = initialState, action) => {
	let avotes = parseInt(state.avotes);

	console.log('avotes:');
	console.log(avotes);

	switch (action.type) {
		case 'CLICK_UP':
			avotes++;
			console.log('clicked up');
			console.log('state:');
			console.log(state);
			return Object.assign({}, state, {
				state: {avotes},
				questions: state.questions
			});
		case 'CLICK_DOWN':
			avotes--;
			console.log('clicked down');
			console.log('state:');
			console.log(state);
			console.log(state);
			return Object.assign({}, state, {
				state: {avotes},
				questions: state.questions
			});
		default:
			return state;
	}
};

export default questions;

// const todo = (state = {}, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false
//       }
//     case 'TOGGLE_TODO':
//       if (state.id !== action.id) {
//         return state
//       }

//       return {
//         ...state,
//         completed: !state.completed
//       }
//     default:
//       return state
//   }
// }

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         todo(undefined, action)
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(t =>
//         todo(t, action)
//       )
//     default:
//       return state
//   }
// }

// export default todos
