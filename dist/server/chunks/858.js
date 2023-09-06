"use strict";
exports.id = 858;
exports.ids = [858];
exports.modules = {

/***/ 9858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kf": () => (/* binding */ selectBasketItems),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports basketSlice, addToBasket, removeFromBasket, selectBasketItemsWithId, selectBasketTotal */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    items: []
};
const basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action)=>{
            state.items = [
                ...state.items,
                action.payload
            ];
        },
        removeFromBasket: (state, action)=>{
            const index = state.items.findIndex((item)=>item._id === action.payload.id);
            let newBasket = [
                ...state.items
            ];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log(`Cant remove product (id: ${action.payload.id}) as its not in basket!`);
            }
            state.items = newBasket;
        }
    }
});
// Action creators are generated for each case reducer function
const { addToBasket , removeFromBasket  } = basketSlice.actions;
// Selectors -> retrieving items in state to use in different components
const selectBasketItems = (state)=>state.basket.items;
const selectBasketItemsWithId = (state, id)=>{
    state.basket.items.filter((item)=>item._id === id);
};
const selectBasketTotal = (state)=>state.basket.items.reduce((total, item)=>total += item.price, 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);


/***/ })

};
;