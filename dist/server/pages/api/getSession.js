"use strict";
(() => {
var exports = {};
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 8633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = __webpack_require__(8174)(process.env.STRIPE_SECRET_KEY);
async function handler(req, res) {
    const sessionId = req.query.session_id;
    const session = await stripe.checkout.sessions.listLineItems(sessionId);
    res.status(200).json({
        session
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8633));
module.exports = __webpack_exports__;

})();