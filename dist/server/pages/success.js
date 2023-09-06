"use strict";
(() => {
var exports = {};
exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 4399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ success),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-currency-formatter"
const external_react_currency_formatter_namespaceObject = require("react-currency-formatter");
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_namespaceObject);
;// CONCATENATED MODULE: external "react-responsive"
const external_react_responsive_namespaceObject = require("react-responsive");
;// CONCATENATED MODULE: ./components/Button.tsx

function Button({ title , onClick , width , loading , padding , noIcon  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: `ease group relative z-30 box-border inline-flex ${width ? width : "w-auto"} ${padding} cursor-pointer items-center justify-center overflow-hidden rounded bg-indigo-600 bg-gradient-to-r from-pink-500 to-violet-500 px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "relative z-20 flex items-center font-semibold",
                children: [
                    noIcon && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "relative mr-2 h-5 w-5 flex-shrink-0 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M13 10V3L4 14h7v7l9-11h-7z"
                        })
                    }),
                    loading ? "Loading..." : title
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Button = (Button);

;// CONCATENATED MODULE: ./utils/fetchLineItems.ts
const fetchLineItems = async (sessionId)=>{
    const res = await fetch(`${"http://localhost:3000/"}/api/getSession?session_id=${sessionId}`);
    if (!res.ok) return;
    const data = await res.json();
    const products = data.session.data;
    return products;
};

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/success.tsx












function Success({ products  }) {
    console.log(products);
    const router = (0,router_namespaceObject.useRouter)();
    const { session_id  } = router.query;
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { 0: showOrderSummary , 1: setShowOrderSummary  } = (0,external_react_.useState)(false);
    const subtotal = products.reduce((acc, product)=>acc + product.price.unit_amount / 100, 0);
    const { data: session  } = (0,react_.useSession)();
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    // showOrderSummary always true for desktop but only conditionally true for mobile
    const isTabletOrMobile = (0,external_react_responsive_namespaceObject.useMediaQuery)({
        query: "(max-width: 1024px)"
    });
    const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;
    const handleShowOrderSummary = ()=>{
        setShowOrderSummary(!showOrderSummary);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Thank you! - Apple"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "mx-auto max-w-xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative ml-4 h-16 w-8 cursor-pointer transition lg:hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "https://rb.gy/vsvv2o",
                            layout: "fill",
                            objectFit: "contain"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "grid grid-cols-1 lg:grid-cols-9",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "order-2 mx-auto max-w-xl pb-12 lg:col-span-5 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative ml-14 hidden h-24 w-12 cursor-pointer transition lg:inline-flex",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "https://rb.gy/vsvv2o",
                                        layout: "fill",
                                        objectFit: "contain"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex h-11 w-11 items-center justify-center rounded-full border-2 border-black",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.CheckIcon, {
                                            className: "h-8 w-8"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-sm text-gray-600",
                                                children: [
                                                    "Order #",
                                                    session_id?.slice(-5)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                className: "text-lg",
                                                children: [
                                                    "Thank you",
                                                    " ",
                                                    session ? session.user?.name?.split(" ")[0] : "Guest"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-2 pb-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Your order is confirmed"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-sm text-gray-600",
                                                children: "We’ve accepted your order, and we’re getting it ready. Come back to this page for updates on your shipment status."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "pt-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-medium text-gray-600",
                                                children: "Other tracking number:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "CNB21441622"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "my-4 mx-4 space-y-2 rounded-md border border-gray-300 p-4 lg:ml-14",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Order updates"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "You’ll get shipping and delivery updates by email and text."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mx-4 flex flex-col items-center justify-between text-sm lg:ml-14 lg:flex-row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "hidden lg:inline",
                                        children: "Need help? Contact us"
                                    }),
                                    mounted && /*#__PURE__*/ jsx_runtime_.jsx(components_Button, {
                                        title: "Continue Shopping",
                                        onClick: ()=>router.push("/"),
                                        width: isTabletOrMobile ? "w-full" : undefined,
                                        padding: "py-4"
                                    })
                                ]
                            })
                        ]
                    }),
                    mounted && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "overflow-y-scroll border-y border-l border-gray-300 bg-[#FAFAFA] lg:order-2 lg:col-span-4 lg:h-screen lg:border-y-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `w-full ${showOrderSummaryCondition && "border-b"} border-gray-300 text-sm lg:hidden`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mx-auto flex max-w-xl items-center justify-between px-4 py-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            onClick: handleShowOrderSummary,
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ShoppingCartIcon, {
                                                    className: "h-6 w-6"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Show order summary"
                                                }),
                                                showOrderSummaryCondition ? /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ChevronUpIcon, {
                                                    className: "h-4 w-4"
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ChevronDownIcon, {
                                                    className: "h-4 w-4"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xl font-medium text-black",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_currency_formatter_default()), {
                                                quantity: subtotal + 20
                                            })
                                        })
                                    ]
                                })
                            }),
                            showOrderSummaryCondition && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mx-auto max-w-xl divide-y border-gray-300 px-4 py-4 lg:mx-0 lg:max-w-lg lg:px-10 lg:py-16",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "space-y-4 pb-4",
                                        children: products.map((product)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center space-x-4 text-sm font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "relative flex h-16 w-16 items-center justify-center rounded-md border border-gray-300 bg-[#F1F1F1] text-xs text-white",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "relative h-7 w-7 animate-bounce rounded-md",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    src: "https://rb.gy/vsvv2o",
                                                                    layout: "fill",
                                                                    objectFit: "contain"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[gray] text-xs",
                                                                children: product.quantity
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "flex-1",
                                                        children: product.description
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_currency_formatter_default()), {
                                                            quantity: product.price.unit_amount / 100,
                                                            currency: product.currency
                                                        })
                                                    })
                                                ]
                                            }, product.id))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-1 py-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-[gray]",
                                                        children: "Subtotal"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "font-medium",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_currency_formatter_default()), {
                                                            quantity: subtotal
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-[gray]",
                                                        children: "Discount"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-[gray]"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-[gray]",
                                                        children: "Shipping"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "font-medium",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_currency_formatter_default()), {
                                                            quantity: 20,
                                                            currency: "USD"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex justify-between pt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Total"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "flex items-center gap-x-2 text-xs text-[gray]",
                                                children: [
                                                    "USD",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-xl font-medium text-black",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_currency_formatter_default()), {
                                                            quantity: subtotal + 20
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const success = (Success);
const getServerSideProps = async ({ query ,  })=>{
    const sessionId = query.session_id;
    const products = await fetchLineItems(sessionId);
    return {
        props: {
            products
        }
    };
};


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61], () => (__webpack_exec__(4399)));
module.exports = __webpack_exports__;

})();