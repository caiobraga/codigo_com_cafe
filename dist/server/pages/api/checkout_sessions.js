"use strict";
(() => {
var exports = {};
exports.id = 118;
exports.ids = [118];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 6698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8174);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7481);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET_KEY, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2022-08-01"
});
async function handler(req, res) {
    if (req.method === "POST") {
        const items = req.body.items;
        // This is the shape in which stripe expects the data to be
        const transformedItems = items.map((item)=>({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.title,
                        images: [
                            (0,_sanity__WEBPACK_IMPORTED_MODULE_1__/* .urlFor */ .u)(item.image[0]).url()
                        ]
                    },
                    unit_amount: item.price * 100
                },
                quantity: 1
            }));
        try {
            // Create Checkout Sessions from body params
            const params = {
                payment_method_types: [
                    "card"
                ],
                // shipping_address_collection: {
                //   allowed_countries: ["US", "CA", "GB"],
                // },
                line_items: transformedItems,
                payment_intent_data: {},
                mode: "payment",
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/checkout`,
                metadata: {
                    images: JSON.stringify(items.map((item)=>item.image[0].asset.url))
                }
            };
            const checkoutSession = await stripe.checkout.sessions.create(params);
            res.status(200).json(checkoutSession);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Internal server error";
            res.status(500).json({
                statusCode: 500,
                message: errorMessage
            });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ urlFor)
});

// UNUSED EXPORTS: config

;// CONCATENATED MODULE: external "next-sanity"
const external_next_sanity_namespaceObject = require("next-sanity");
;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_namespaceObject);
;// CONCATENATED MODULE: ./sanity.js


const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    token: process.env.SANITY_API_TOKEN,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-10-21",
    useCdn: "production" === "production"
};
// Set up the client for fetching data in the getProps page functions
//export const sanityClient = createClient(config);
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/ const urlFor = (source)=>image_url_default()(config).image(source);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6698));
module.exports = __webpack_exports__;

})();