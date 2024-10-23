"use client"; // Ensure it's a client-side component
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ToggleDetails = function () {
    var _a = react_1.useState(false), showModal = _a[0], setShowModal = _a[1];
    var toggleModal = function () {
        setShowModal(!showModal);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("button", { className: "mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold", onClick: toggleModal }, "To know more"),
        showModal && (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: "fixed inset-0 bg-gray-800 bg-opacity-50 z-40", onClick: toggleModal }),
            react_1["default"].createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center" },
                react_1["default"].createElement("div", { className: "bg-white p-6 rounded-lg shadow-lg max-w-lg w-full" },
                    react_1["default"].createElement("h2", { className: "text-xl font-semibold text-neutral-800 mb-4" }, "Additional Information"),
                    react_1["default"].createElement("p", { className: "text-sm text-neutral-600 leading-relaxed tracking-wide" }, "You can include details about relevant courses, research projects, and honors obtained during your studies. For example, you may highlight key projects or specializations that directly relate to your current role or future aspirations."),
                    react_1["default"].createElement("button", { className: "mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 font-semibold", onClick: toggleModal }, "Close")))))));
};
exports["default"] = ToggleDetails;
