import Faker from "faker";

const initialState = {
	questions: [
		{
			summary: "Can somebody help me to refactor my app into Redux?",
			date: Faker.date.past(),
			tags: [
				"react",
				"redux"
			],
			name: `${Faker.name.findName()}`,
			votes: 1,
			answers: 3,
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
	switch (action.type) {
		case 'CLICK_QUESTION':
			return state;
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
