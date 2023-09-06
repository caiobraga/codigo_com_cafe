"use strict";
(() => {
var exports = {};
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 99:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 5853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "next/server"
const server_namespaceObject = require("next/server");
;// CONCATENATED MODULE: ./pages/api/email.js

const nodemailer = __webpack_require__(99);
async function handler(req, res) {
    if (req.method === "POST") {
        //const body = await req.json();
        const { nome , email , mensagem , funcao  } = req.body;
        // Create a Nodemailer transporter using your email service's SMTP settings
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "caiotagb@gmail.com",
                pass: "qhwmduafhmqxsaze"
            }
        });
        // Email data
        const mailOptions = {
            from: email,
            to: "hello@codigocomcafe.dev.br",
            subject: funcao,
            text: mensagem
        };
        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({
                success: true,
                message: "Email sent successfully"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                error: "Email sending failed"
            });
        }
    } else {
        res.status(405).json({
            error: "Method not allowed"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5853));
module.exports = __webpack_exports__;

})();