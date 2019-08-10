// add code snippets from README
// let state = {count: 0}

let state

function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count +1}
    default:
      return state
  }
}

function dispatch(action){
  state = reducer(state, action)
  render()
  return state
}

function render(){
  let container = document.getElementById('container')
  container.innerHTML = state.count
}

dispatch({type: '@@INIT'})

let button = document.getElementById('button')

button.addEventListener('click', function(){
  dispatch({type: 'INCREASE_COUNT'})
})
