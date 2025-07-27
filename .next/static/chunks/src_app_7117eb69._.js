(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/GlobalContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const GlobalContainer = (props)=>{
    const { children, className = '' } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${className} w-[90%] h-auto`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/components/GlobalContainer.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
_c = GlobalContainer;
const __TURBOPACK__default__export__ = GlobalContainer;
var _c;
__turbopack_context__.k.register(_c, "GlobalContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useEnquiryForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useEnquiryForm": (()=>useEnquiryForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useEnquiryForm = ()=>{
    _s();
    const [enquiryInputs, setEnquiryInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: null,
        company: null,
        message: null
    });
    const [enquiryInputErrs, setEnquiryInputErrs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEnquirySubmitting, setIsEnquirySubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const validateEnquiry = (vals)=>{
        const inputErrs = {};
        if (!vals?.name) inputErrs.name = "Enter Your Name";
        else if (vals.name.length > 80) inputErrs.name = "Enter a Valid Name";
        if (!vals.phone) inputErrs.phone = "Enter Phone";
        else if (String(vals?.phone).length > 15) inputErrs.phone = "Enter valid Phone";
        if (vals?.company && vals?.company?.length > 120) inputErrs.company = "Enter a Valid Company";
        if (vals?.email && vals?.email?.length > 80) inputErrs.email = "Enter a Valid Email";
        return inputErrs;
    };
    const onChangeEnquiryInputs = (e)=>{
        const { name, value } = e.target;
        setEnquiryInputs((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const onEnquirySubmit = async (onSubmit)=>{
        const validateerrs = validateEnquiry(enquiryInputs);
        setEnquiryInputErrs(validateerrs); // ✅ Important!
        if (Object.entries(validateerrs).length === 0) {
            setIsEnquirySubmitting(true);
            await onSubmit(enquiryInputs);
            setIsEnquirySubmitting(false);
            setEnquiryInputs({
                name: "",
                phone: "",
                email: "",
                company: "",
                message: ""
            });
        }
    };
    return {
        enquiryInputs,
        enquiryInputErrs,
        isEnquirySubmitting,
        validateEnquiry,
        onChangeEnquiryInputs,
        onEnquirySubmit
    };
};
_s(useEnquiryForm, "uh5pfSrc+7fIJdRQZ1oBQpwNNQ4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Loader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/Loader.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loader$2d$spinner$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-loader-spinner/dist/module.js [app-client] (ecmascript)");
;
;
const Loader = ({ type = "oval", color = "#4fa94d", height = 40, width = 40, show = true, variant = "block", className = "" })=>{
    if (!show) return null;
    const commonProps = {
        color,
        height,
        width,
        visible: true
    };
    const loaderMap = {
        oval: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loader$2d$spinner$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Oval"], {
            ...commonProps,
            secondaryColor: color,
            strokeWidth: 2
        }, void 0, false, {
            fileName: "[project]/src/app/components/Loader.tsx",
            lineNumber: 55,
            columnNumber: 15
        }, this),
        bars: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loader$2d$spinner$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bars"], {
            ...commonProps
        }, void 0, false, {
            fileName: "[project]/src/app/components/Loader.tsx",
            lineNumber: 56,
            columnNumber: 15
        }, this),
        dots: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loader$2d$spinner$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThreeDots"], {
            ...commonProps
        }, void 0, false, {
            fileName: "[project]/src/app/components/Loader.tsx",
            lineNumber: 57,
            columnNumber: 15
        }, this),
        puff: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loader$2d$spinner$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Puff"], {
            ...commonProps
        }, void 0, false, {
            fileName: "[project]/src/app/components/Loader.tsx",
            lineNumber: 58,
            columnNumber: 15
        }, this),
        rings: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loader$2d$spinner$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rings"], {
            ...commonProps
        }, void 0, false, {
            fileName: "[project]/src/app/components/Loader.tsx",
            lineNumber: 59,
            columnNumber: 16
        }, this),
        progressbar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loader$2d$spinner$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBar"], {
            ...commonProps
        }, void 0, false, {
            fileName: "[project]/src/app/components/Loader.tsx",
            lineNumber: 60,
            columnNumber: 22
        }, this),
        spin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loader$2d$spinner$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TailSpin"], {
            ...commonProps
        }, void 0, false, {
            fileName: "[project]/src/app/components/Loader.tsx",
            lineNumber: 61,
            columnNumber: 15
        }, this),
        rotate: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loader$2d$spinner$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotatingLines"], {
            strokeColor: color,
            strokeWidth: "5",
            animationDuration: "0.75",
            width: width.toString(),
            visible: true
        }, void 0, false, {
            fileName: "[project]/src/app/components/Loader.tsx",
            lineNumber: 63,
            columnNumber: 13
        }, this)
    };
    const wrapperClass = {
        inline: `inline-flex items-center justify-center ${className}`,
        block: `flex items-center justify-center w-full ${className}`,
        fullscreen: `fixed inset-0 z-50 bg-white bg-opacity-80 flex items-center justify-center ${className}`
    }[variant];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: wrapperClass,
        children: loaderMap[type]
    }, void 0, false, {
        fileName: "[project]/src/app/components/Loader.tsx",
        lineNumber: 79,
        columnNumber: 12
    }, this);
};
_c = Loader;
const __TURBOPACK__default__export__ = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/[customslug]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$GlobalContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/GlobalContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatDistanceToNow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ContactContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ContactContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ListedProperties$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ListedProperties.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEnquiryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useEnquiryForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$LikeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/LikeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Loader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const page = ()=>{
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pId = searchParams?.get("pId");
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [propDetail, setPropDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [heroImage, setHeroImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { properties } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ListedProperties$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListedProperties"])();
    const { contactInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ContactContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContact"])();
    const [showDescription, setShowDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { enquiryInputs, enquiryInputErrs, isEnquirySubmitting, validateEnquiry, onChangeEnquiryInputs, onEnquirySubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEnquiryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnquiryForm"])();
    const { likesArr, isLiked, toggleLike } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$LikeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLikes"])();
    console.log(likesArr, 345345);
    console.log(isLiked('10'), 'islikeddd');
    //  Format "listedAt" date
    const timeAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "page.useMemo[timeAgo]": ()=>{
            if (!propDetail?.listedAt) return "";
            try {
                const isoDate = propDetail?.listedAt.replace(" ", "T");
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(isoDate), {
                    addSuffix: true
                });
            } catch  {
                return "";
            }
        }
    }["page.useMemo[timeAgo]"], [
        propDetail
    ]);
    console.log(enquiryInputErrs, enquiryInputs, 8957345);
    //  Parse gallery images
    const galleryArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "page.useMemo[galleryArr]": ()=>{
            try {
                const parsed = JSON.parse(propDetail?.galleryImage || '[]');
                return Array.isArray(parsed) ? parsed.map({
                    "page.useMemo[galleryArr]": (img)=>({
                            title: 'Interior View',
                            img
                        })
                }["page.useMemo[galleryArr]"]) : [];
            } catch (error) {
                console.error("Failed to parse galleryImage:", error);
                return [];
            }
        }
    }["page.useMemo[galleryArr]"], [
        propDetail
    ]);
    //  Setup hero image when gallery changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "page.useEffect": ()=>{
            if (galleryArr?.length) {
                setHeroImage({
                    img: propDetail?.thumbnailImage,
                    title: 'Interior View'
                });
            }
        }
    }["page.useEffect"], [
        galleryArr,
        propDetail?.thumbnailImage
    ]);
    //  Compose property details object
    const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "page.useMemo[details]": ()=>{
            const det = {
                propertyId: `CLR-STE-${propDetail?.id}`,
                price: `${propDetail?.propertyPrice} ${propDetail?.propertyType === 'rent' ? '/Mon' : ''}`,
                propertySize: propDetail?.propertySize,
                Furnished: propDetail?.furnished || 'Unfurnished',
                propertyType: propDetail?.propertyCategory,
                propertyStatus: `For ${propDetail?.propertyType}`
            };
            if (propDetail?.bathrooms) det.bathrooms = propDetail.bathrooms;
            if (propDetail?.bedrooms) det.bedrooms = propDetail.bedrooms;
            return det;
        }
    }["page.useMemo[details]"], [
        propDetail
    ]);
    //  Dynamic Google Map URL
    const mapURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "page.useMemo[mapURL]": ()=>{
            const fullAddress = `${propDetail?.propertyAddress}, ${propDetail?.propertyCity}, ${propDetail?.propertyState}, ${propDetail?.propertyCountry}`;
            return `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
        }
    }["page.useMemo[mapURL]"], [
        propDetail
    ]);
    //  Fetch details on pId change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "page.useEffect": ()=>{
            if (!pId) return;
            const fetchDetails = {
                "page.useEffect.fetchDetails": async ()=>{
                    setLoader(true);
                    const res = await fetch('/api/properties/getsinglepropdetail', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: pId
                        })
                    });
                    const data = await res.json();
                    if (!data.error) {
                        setPropDetail(data.propertyDetails);
                    }
                    setLoader(false);
                }
            }["page.useEffect.fetchDetails"];
            fetchDetails();
        }
    }["page.useEffect"], [
        pId
    ]);
    //  Filter similar properties
    const similarProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "page.useMemo[similarProperties]": ()=>{
            return properties?.filter({
                "page.useMemo[similarProperties]": (item)=>item.id !== propDetail?.id && (item.title?.toLowerCase().includes(propDetail?.title?.toLowerCase() || '') || item.propertyType === propDetail?.propertyType && item.propertyCategory === propDetail?.propertyCategory)
            }["page.useMemo[similarProperties]"]);
        }
    }["page.useMemo[similarProperties]"], [
        properties,
        propDetail
    ]);
    //  Optional: Memoize Hero Image Renderer
    const HeroImageView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "page.useCallback[HeroImageView]": ()=>{
            if (!heroImage) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:h-[600px] h-[250px] rounded-lg overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: heroImage.img,
                    className: "w-full h-full object-cover",
                    alt: heroImage.title
                }, void 0, false, {
                    fileName: "[project]/src/app/[customslug]/page.tsx",
                    lineNumber: 139,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[customslug]/page.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this);
        }
    }["page.useCallback[HeroImageView]"], [
        heroImage
    ]);
    const submitEnquiry = async (vals)=>{
        const formData = {
            name: vals.name,
            email: vals.email,
            phone: vals.phone,
            message: vals.message,
            propertyId: propDetail?.id,
            propertyTitle: propDetail?.title,
            company: vals?.company,
            to: contactInfo?.email
        };
        const res = await fetch("/api/send-enquiry/route", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (data.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Submitted!! We will contact you soon.");
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to send Enquiry. Make Call or message to get response");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-auto bg-slate-100 flex justify-center items-start",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$GlobalContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-between items-center flex-col lg:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex justify-start items-start flex-col gap-2 lg:mt-10 mt-0 lg:py-10 py-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "lg:text-3xl text-xl text-slate-700 font-semibold",
                                    children: propDetail?.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex justify-start items-center gap-4 lg:text-[15px] text-[10px] text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: propDetail?.propertyAddress
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 129
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex border-x-[1px] border-slate-300 px-3 justify-center items-center gap-1.5 text-secondary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCircleDot"], {
                                                    className: "text-secondary capitalize"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 282
                                                }, this),
                                                "For ",
                                                propDetail?.propertyType
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 171
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex justify-center items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineClockCircle"], {
                                                    className: ""
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 431
                                                }, this),
                                                timeAgo
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 372
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start items-center gap-1 lg:text-[15px] text-[12px] font-semibold text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: '/',
                                            className: "hover:text-secondary duration-200",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 136
                                        }, this),
                                        "/",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: '/properties',
                                            className: "hover:text-secondary duration-200",
                                            children: "properties"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 211
                                        }, this),
                                        "/",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: '#',
                                            className: "hover:text-secondary duration-200",
                                            children: "propertyDetails"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 302
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[customslug]/page.tsx",
                            lineNumber: 178,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex lg:flex-col flex-row-reverse justify-between lg:justify-center lg:items-end items-center gap-2 lg:mt-10 mt-0 lg:py-10 py-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 relative z-99999",
                                    children: [
                                        !isLiked(`${propDetail.id}`) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdHeartEmpty"], {
                                            onClick: ()=>toggleLike(`${propDetail?.id}`),
                                            className: `text-2xl hover:scale-110 duration-200 cursor-pointer`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 61
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdHeart"], {
                                            onClick: ()=>toggleLike(`${propDetail?.id}`),
                                            fill: "red",
                                            className: `text-2xl hover:scale-110 duration-200 cursor-pointer`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiShareAlt"], {
                                            title: "Share Property",
                                            className: "!text-2xl cursor-pointer rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl text-slate-600 font-semibold block mt-2",
                                    children: [
                                        propDetail?.propertyPrice,
                                        " BHD "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[customslug]/page.tsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[customslug]/page.tsx",
                    lineNumber: 177,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full lg:h-[700px] h-auto flex justify-start items-start gap-3 flex-col lg:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:w-[70%] w-full lg:h-full h-auto ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroImageView, {}, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full lg:h-[100px] h-[60px] flex justify-start items-center gap-3 overflow-x-auto",
                                            children: galleryArr?.map((item, ndx)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setHeroImage(galleryArr[ndx]),
                                                    className: "w-full cursor-pointer min-w-[100px]  max-w-3xl h-[90%] rounded-md overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.img,
                                                        alt: item.title,
                                                        className: "w-full hover:border-3 hover:border-secondary h-full object-center"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 45
                                                    }, this)
                                                }, ndx, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 41
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:w-[27%] w-full flex lg:flex-col flex-row justify-start items-start gap-2",
                                    children: [
                                        galleryArr && galleryArr.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex flex-col gap-2",
                                            children: (()=>{
                                                let sideImages = [];
                                                if (galleryArr.length === 1) {
                                                    sideImages = [
                                                        galleryArr[0],
                                                        galleryArr[0]
                                                    ];
                                                } else if (galleryArr.length === 2) {
                                                    sideImages = [
                                                        galleryArr[0],
                                                        galleryArr[1]
                                                    ];
                                                } else if (galleryArr.length >= 3) {
                                                    sideImages = galleryArr.slice(1, 3);
                                                }
                                                return sideImages.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>{
                                                            if (heroImage?.img !== item.img) setHeroImage(item);
                                                        },
                                                        className: "w-full h-[190px] lg:block hidden rounded-lg overflow-hidden cursor-pointer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: item.img,
                                                            alt: item.title,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, `${item.img}-${index}`, false, {
                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 45
                                                    }, this));
                                            })()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full lg:h-[290px] h-[170px] rounded-lg overflow-hidden bg-gray-100 flex justify-center items-center",
                                            children: propDetail?.propertyVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                src: propDetail.propertyVideo,
                                                className: "w-full h-full object-cover",
                                                controls: true,
                                                muted: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[customslug]/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 37
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-500 text-sm text-center p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-1",
                                                        children: "📹 No Property Video"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Check back later or explore the gallery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[customslug]/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[customslug]/page.tsx",
                            lineNumber: 196,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex justify-start items-start gap-2 lg:flex-row flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:w-[70%] w-full lg:my-3 my-0 mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-white rounded-xl p-5 relative shadow-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-700",
                                                    children: "Property Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 33
                                                }, this),
                                                propDetail?.description?.length > 200 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-md text-slate-600 w-full ${!showDescription ? 'h-auto' : 'lg:h-[100px] h-[200px]'} overflow-hidden duration-200`,
                                                    children: propDetail?.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 74
                                                }, this) : null,
                                                propDetail?.description?.length > 200 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    onClick: ()=>setShowDescription(!showDescription),
                                                    className: "text-sm font-semibold cursor-pointer underline",
                                                    children: [
                                                        "show ",
                                                        showDescription ? 'less' : 'more'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 286
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full mt-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold text-slate-700 mb-4",
                                                            children: "Property Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-4",
                                                            children: Object.entries(details).map(([key, value], ndx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full sm:w-[48%] flex justify-between items-start bg-white p-3 border-b-[1px] border-secondary/20",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-md font-semibold text-slate-700 capitalize",
                                                                            children: key.replace(/([A-Z])/g, " $1")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                            lineNumber: 275,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-md text-slate-600 text-right",
                                                                            children: value
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, ndx, true, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 45
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-white rounded-xl p-5 relative shadow-xl my-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-700",
                                                    children: "Features & Amenities"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "w-full flex justify-start items-center flex-wrap gap-2",
                                                    children: propDetail?.amenities && JSON.parse(propDetail.amenities)?.map((item, ndx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "lg:w-[32%] w-[48%] py-2 text-md text-slate-800 ",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTicktick"], {
                                                                    className: "inline-block mr-2 !text-xl text-secondary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 45
                                                                }, this),
                                                                item
                                                            ]
                                                        }, ndx, true, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 41
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-white rounded-xl p-5 relative shadow-xl my-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-700",
                                                    children: "Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full flex justify-start items-start gap-4 flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-md font-semibold text-slate-700",
                                                            children: [
                                                                "Address : ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-600 !text-sm font-thin",
                                                                    children: propDetail?.propertyAddress
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 100
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-md font-semibold text-slate-700",
                                                            children: [
                                                                "City : ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-600 !text-sm font-thin",
                                                                    children: propDetail?.propertyCity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 97
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-md font-semibold text-slate-700",
                                                            children: [
                                                                "State/county : ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-600 !text-sm font-thin",
                                                                    children: propDetail?.propertyState
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 105
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full lg:h-[340px] h-[180px] rounded-xl overflow-hidden mt-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                        src: mapURL,
                                                        width: "100%",
                                                        height: "100%",
                                                        allowFullScreen: true,
                                                        loading: "lazy",
                                                        referrerPolicy: "no-referrer-when-downgrade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:w-[28%] w-full my-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "w-full flex justify-center items-center gap-2 bg-white p-3 rounded-md shadow-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "w-full",
                                                    href: `tel:${propDetail?.propertyPhone ? propDetail?.propertyPhone : contactInfo?.phone}`,
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "w-full h-10 text-center flex justify-center items-center bg-primary rounded-sm shadow gap-2 text-md font-semibold text-white hover:bg-primary/80 cursor-pointer duration-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdCall"], {
                                                                    className: "text-xl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 339
                                                                }, this),
                                                                " Call"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 150
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "w-full",
                                                    href: `https://wa.me/${propDetail?.propertyWapp ? propDetail?.propertyWapp : contactInfo?.phone}?text=Is%20this%20property%20still%20available%3F`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "w-full h-10 bg-secondary flex justify-center items-center rounded-sm shadow gap-2 text-md font-semibold text-white hover:bg-secondary/80 cursor-pointer duration-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiWhatsapp"], {
                                                                className: "text-xl"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 218
                                                            }, this),
                                                            " Whatsapp"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full my-3 rounded-lg bg-white p-3 shadow-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-md font-semibold text-slate-600 text-center",
                                                    children: "SCHEDULE A VIEWING"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    onSubmit: (e)=>e.preventDefault(),
                                                    className: "w-full flex justify-start items-center flex-col gap-3 mt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full border border-slate-400 flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "p-2 bg-primary",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUser"], {
                                                                            className: "text-2xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                            lineNumber: 329,
                                                                            columnNumber: 75
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    onChange: onChangeEnquiryInputs,
                                                                    name: "name",
                                                                    value: enquiryInputs.name,
                                                                    className: "w-full h-full outline-none border-none p-2",
                                                                    placeholder: "Full Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 41
                                                                }, this),
                                                                enquiryInputErrs?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-red-500",
                                                                    children: enquiryInputErrs.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 68
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full border border-slate-400 flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "p-2 bg-primary",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhoneAlt"], {
                                                                            className: "text-2xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                            lineNumber: 340,
                                                                            columnNumber: 75
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    onChange: onChangeEnquiryInputs,
                                                                    name: "phone",
                                                                    value: enquiryInputs.phone,
                                                                    className: "w-full h-full outline-none border-none p-2",
                                                                    placeholder: "Phone"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 41
                                                                }, this),
                                                                enquiryInputErrs?.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-red-500",
                                                                    children: enquiryInputErrs.phone
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 69
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full border border-slate-400 flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "p-2 bg-primary",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineMail"], {
                                                                            className: "text-2xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                            lineNumber: 351,
                                                                            columnNumber: 75
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    onChange: onChangeEnquiryInputs,
                                                                    name: "email",
                                                                    value: enquiryInputs?.email || '',
                                                                    className: "w-full h-full outline-none border-none p-2",
                                                                    placeholder: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 352,
                                                                    columnNumber: 41
                                                                }, this),
                                                                enquiryInputErrs?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-red-500",
                                                                    children: enquiryInputErrs.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 69
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full border border-slate-400 flex justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "p-2 bg-primary",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineFactory"], {
                                                                            className: "text-2xl"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                            lineNumber: 362,
                                                                            columnNumber: 75
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    onChange: onChangeEnquiryInputs,
                                                                    name: "company",
                                                                    value: enquiryInputs?.company || '',
                                                                    className: "w-full h-full outline-none border-none p-2",
                                                                    placeholder: "Company"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 41
                                                                }, this),
                                                                enquiryInputErrs?.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-red-500",
                                                                    children: enquiryInputErrs.company
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 370,
                                                                    columnNumber: 71
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full border border-slate-400 flex justify-center items-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                onChange: onChangeEnquiryInputs,
                                                                name: "message",
                                                                value: enquiryInputs?.message || '',
                                                                className: "w-full h-full outline-none border-none p-2 min-h-[100px]",
                                                                placeholder: "Message"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 37
                                                        }, this),
                                                        !isEnquirySubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onEnquirySubmit(submitEnquiry),
                                                            className: "w-full p-2 bg-primary rounded-lg text-md text-white font-semibold flex justify-center items-center gap-2 cursor-pointer hover:bg-primary/80 duration-200",
                                                            children: [
                                                                "Submit a Request ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiExternalLink"], {
                                                                    className: "inline-block text-xl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 298
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 61
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            type: "rings",
                                                            color: "white",
                                                            className: "w-full p-2 bg-primary rounded-lg text-md text-white font-semibold flex justify-center items-center gap-2 cursor-pointer hover:bg-primary/80 duration-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 361
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex justify-start items-center bg-white flex-col flex-wrap mt-3 shadow-2xl rounded-xl p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-slate-600 text-center uppercase mb-2",
                                                    children: "Similar Properties"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 33
                                                }, this),
                                                similarProperties.length > 0 && similarProperties.slice(0, 3).map((item, ndx)=>{
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group w-full min-h-[300px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-[140px] relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "overflow-hidden w-full h-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: `${item?.thumbnailImage}`,
                                                                            alt: item.title,
                                                                            className: "w-full cursor-pointer group-hover:scale-110 duration-300 group-hover:rotate-2 h-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                            lineNumber: 391,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute bottom-0 right-0  flex justify-end items-center p-1 gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-white text-sm p-[4px] bg-black",
                                                                                children: [
                                                                                    " ",
                                                                                    JSON.parse(`${item?.galleryImage || `[]`}`).length,
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoImagesSharp"], {
                                                                                        className: "text-white text-2xl  inline-block"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                                        lineNumber: 395,
                                                                                        columnNumber: 161
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                                lineNumber: 395,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            item?.propertyVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdVideocam"], {
                                                                                className: "text-white text-3xl bg-black p-[3px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                                lineNumber: 395,
                                                                                columnNumber: 255
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                        lineNumber: 394,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute bottom-2 left-2 rounded-sm bg-secondary p-2 font-mono font-semibold text-md text-white px-4 shadow-2xl",
                                                                        children: [
                                                                            item?.propertyPrice,
                                                                            " BHD ",
                                                                            item?.propertyType == 'rent' ? '/mon' : ''
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                        lineNumber: 397,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-[180px] px-3 py-5 border-[1px] border-slate-300 border-t-none bg-white",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/properties/propertyDetails?pId=${item?.id}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                            className: "text-md font-semibold hover:underline text-slate-900 cursor-pointer",
                                                                            children: item.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                            lineNumber: 400,
                                                                            columnNumber: 108
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-slate-600",
                                                                        children: item?.propertyCity
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                        lineNumber: 401,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-3",
                                                                        children: item?.bedrooms ? `${item?.bathrooms} ${item?.bathrooms}` : item?.propertySize
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                        lineNumber: 402,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full hidden md:hidden lg:hidden my-2 border-t-[1px] border-slate-300 xl:flex justify-between items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "w-full py-3 flex justify-start items-center text-md text-slate-800 capitalize",
                                                                                children: [
                                                                                    "for ",
                                                                                    item?.propertyType
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                                lineNumber: 404,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-full flex justify-end items-center gap-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: `/properties/propertyDetails?pId=${item?.id}`,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiExternalLink"], {
                                                                                            className: "text-2xl hover:scale-110 duration-200 cursor-pointer"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                                            lineNumber: 406,
                                                                                            columnNumber: 116
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                                        lineNumber: 406,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    " ",
                                                                                    !isLiked(`${item.id}`) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdHeartEmpty"], {
                                                                                        onClick: ()=>toggleLike(`${item?.id}`),
                                                                                        className: `text-2xl hover:scale-110 duration-200 cursor-pointer`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                                        lineNumber: 406,
                                                                                        columnNumber: 233
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdHeart"], {
                                                                                        onClick: ()=>toggleLike(`${item?.id}`),
                                                                                        fill: "red",
                                                                                        className: `text-2xl hover:scale-110 duration-200 cursor-pointer`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                                        lineNumber: 407,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                                lineNumber: 405,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[customslug]/page.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, ndx, true, {
                                                        fileName: "[project]/src/app/[customslug]/page.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 41
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[customslug]/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[customslug]/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[customslug]/page.tsx",
                            lineNumber: 265,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[customslug]/page.tsx",
                    lineNumber: 194,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[customslug]/page.tsx",
            lineNumber: 175,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[customslug]/page.tsx",
        lineNumber: 174,
        columnNumber: 9
    }, this);
};
_s(page, "nZQ+lDWgVNFykYqaEqzvrGploes=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ListedProperties$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListedProperties"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ContactContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContact"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEnquiryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnquiryForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$LikeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLikes"]
    ];
});
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_7117eb69._.js.map