// import { createStore } from "redux";

// /**
//  * Tạo Redux store để lưu trữ state toàn bộ ứng dụng
//  * 
//  * @param {Function} rootReducer - Reducer chính của ứng dụng, xử lý tất cả các actions
//  *      và trả về state mới. Thường là kết hợp của nhiều reducer nhỏ hơn bằng combineReducers.
//  *      Cấu trúc: (state, action) => newState
//  * 
//  * @param {Object} initValue - (Không bắt buộc) State khởi tạo của ứng dụng.
//  *      Hữu ích khi hydrate state từ server hoặc localStorage,
//  *      hoặc khi thiết lập giá trị mặc định cho state.
//  * 
//  * @param {Function} enhancers - (Không bắt buộc) Store enhancers như middleware.
//  *      Thường được tạo bằng applyMiddleware() để thêm các chức năng như
//  *      xử lý bất đồng bộ (redux-thunk, redux-saga), logging (redux-logger),
//  *      và kết nối Redux DevTools.
//  */
// const store = createStore(rootReducer); //3 tham số


// export default store;