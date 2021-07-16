const initialState = {
  todos: [
    { id: 0, text: 'learn React', completed: true },
    { id: 0, text: 'learn Redux', completed: false, color: 'purple' },
    { id: 0, text: 'Build something cool', completed: false, color: 'blue' },
  ],
  filters: {
    status: 'All',
    colors: [],
  },
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    case 'todos/todoToggled': {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    }

    case 'filters/statusFilterChanged': {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    }

    default:
      // if action is not recognized return previous state
      return state;
  }
}

/* A reducer must not have any asynchoronous logic, and any other side effect
console.log() don't do this inside reducer()
saving a fille
making a AJAX request
async function
modifing args
generating random values like Math.random() or Date.now()
reducer is not allowed to modifiy the original/current state
state.value = 123
 */

/* A reducer must not have any asynchoronous logic, and any other side effect
console.log() don't do this inside reducer
A rule of thumb  immutable updates is that you have to make copy of every 
level of  nested value that has to be updated
*/
