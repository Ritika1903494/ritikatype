import { legacy_createStore as createStore ,applyMiddleware} from "redux";
import mainreducer from './redux/reducer/main';
import thunk from "redux-thunk";

const Store=createStore(
    mainreducer
)

export default Store;