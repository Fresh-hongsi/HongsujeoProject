import { combineReducers } from 'redux';
import user from './user_reducer';

// combineReducers : 여러 reducer 들을 하나의 store 에 저장 할 수 있게 해주는 함수 (여러 reducer를 user에 저장)
const rootReducer = combineReducers({
    user,
});

export default rootReducer;