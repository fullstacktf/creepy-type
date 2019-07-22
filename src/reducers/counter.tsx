//import { IncrementAction, DecrementAction } from '../actions';
import { CounterState } from './index';
import ActionType from '../actions'
const initialState: CounterState = { value: 0 };

//type ActionType = IncrementAction | DecrementAction;

 
const counter = (state = initialState, action: ActionType) => {
 switch (action.type) {
   case 'INCREMENT_COUNTER':
     return { ...state, value: state.value + action.delta };
   default:
     return state;
 }
};
export default counter;