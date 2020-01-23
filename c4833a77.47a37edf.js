/*! For license information please see c4833a77.47a37edf.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(181),n(179)),i={id:"getting_started_react_native_android",title:"Getting Started with React Native for Android",sidebar_label:"Getting Started with React Native for Android"},l=[{value:"Try the Demo",id:"try-the-demo",children:[]},{value:"Adding FBT to an Android specific React Native App",id:"adding-fbt-to-an-android-specific-react-native-app",children:[]},{value:"<strong>Notes</strong>",id:"notes",children:[]}],c={rightToc:l},b="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(b,Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"try-the-demo"},"Try the Demo"),Object(o.b)("p",null,"Check out our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookincubator/fbt/tree/rn-demo-app"}),"React Native Android Demo app"),".\nCheck out our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/fbt-rn-android-native"}),"Android Native Module")," on NPM."),Object(o.b)("h2",{id:"adding-fbt-to-an-android-specific-react-native-app"},"Adding FBT to an Android specific React Native App"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add all dependencies"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"yarn add babel-preset-react-native shelljs fbt babel-plugin-fbt babel-plugin-fbt-runtime @babel/node fb-tiger-hash fbt-rn-android-native --dev"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Make sure your fbt has a version greater than ",Object(o.b)("inlineCode",{parentName:"p"},'"^0.10.0"'))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a .babelrc or babel.config.js file to add the transformation plugins with the following content:"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"{"),"\n",Object(o.b)("inlineCode",{parentName:"p"},'"plugins": ["babel-plugin-fbt", "babel-plugin-fbt-runtime"],'),"\n",Object(o.b)("inlineCode",{parentName:"p"},'"presets": ["module:metro-react-native-babel-preset"]'),"\n",Object(o.b)("inlineCode",{parentName:"p"},"}")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Update your Android main activity so that the app reloads whenever the user changes the locale"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can find an example in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookincubator/fbt/blob/rn-demo-app/android/app/src/main/java/com/fbtrndemoapp/MainActivity.java#L39"}),"rn-demo-app")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Add "locale|layoutDirection" in android:configChanges in the AndroidManifest.xml. This will restart the app whenever the language of the device changes and will load the correct translations.'),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'android:configChanges="keyboard|keyboardHidden|orientation|screenSize|screenLayout|layoutDirection|locale"'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Copy the files in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookincubator/fbt/tree/rn-demo-app/i18n"}),"i18n folder")," of the demo app. Find an explanation of each file below:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"* Create a JS wrapper around the native module\n    * rn-demo-app: [FbtI18nNativeAssets](https://github.com/facebookincubator/fbt/blob/rn-demo-app/i18n/FbtI18nNativeAssets.js)\n    * The Android native module `fbt-rn-android-native` is used to read translations from android resources\n        * This module reads translations from android/raw-xx-rXX/localizable.json files with the following structure:\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},'{\n"2keTtB": "\\"Escanear c\xf3digo QR\\"",\n"24DJ19": "\\"Subir\\"",\n}'),"\n",Object(o.b)("em",{parentName:"p"}," The hash value is the ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/facebookincubator/fbt/blob/master/packages/babel-plugin-fbt/jenkinsHash.js"}),"jenkins hash")," generated by ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/facebookincubator/fbt/blob/52c971671fbb8f096eedf7adba55fa35c4a6d13f/packages/babel-plugin-fbt/bin/collectFBT.js#L51-L52L52"}),"the collectFBT script"))," More info here: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/fbt-rn-android-native"}),"https://www.npmjs.com/package/fbt-rn-android-native")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"* Create your custom payload getter to inject in FBT\n    * rn-demo-app: [CustomTrasnlationPayloadGetter](https://github.com/facebookincubator/fbt/blob/rn-demo-app/i18n/CustomTranslationPayloadGetter.js)\n\n* Create an fbtInit component to inject the CustomPayloadGetter before we execute any JS code. This is needed if you have any strings that need to be statically available in the app.\n    * rn-demo-app: [fbtInit](https://github.com/facebookincubator/fbt/blob/rn-demo-app/i18n/fbtInit.js)\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Import the fbtInit component in the index.js main file"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It's important this is the first module we import so that we make sure the CustomPayloadGetter is set before making any fbt calls"),Object(o.b)("li",{parentName:"ul"},"rn-demo-app: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookincubator/fbt/blob/rn-demo-app/index.js#L25"}),"index.js")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add the fbt scripts to your package.json file:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Add the ",Object(o.b)("inlineCode",{parentName:"li"},"manifest")," script call in package.json. This script looks for all the files that import fbt and creates the input for the collectFBT script below.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"`manifest`"```: ```"`babel-node ./node_modules/babel-plugin-fbt/bin/manifest --src src/ --enum-manifest i18n/fbt/.enum_manifest.json --src-manifest i18n/fbt/.src_manifest.json`"')))),Object(o.b)("li",{parentName:"ul"},"Add the ",Object(o.b)("inlineCode",{parentName:"li"},"collectFBT")," script call in package.json. This script collects all fbt-wrapped strings into a file for you to translate.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"`collect-fbts`"```: ```"`babel-node ./node_modules/babel-plugin-fbt/bin/collectFBT --hash-module \'fb-tiger-hash/hashPhrases\' --react-native-mode --manifest < i18n/fbt/.src_manifest.json > i18n/fbt/.source_strings.json`"')))),Object(o.b)("li",{parentName:"ul"},"Add the ",Object(o.b)("inlineCode",{parentName:"li"},"translate")," script call in package.json. This script should be used after all strings are translated. It\u2019ll generate a single file with all translations that we then need to translate into Android specific localizable.json files. See the input format ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookincubator/fbt/tree/rn-demo-app/i18n/fbt/translationScriptInput"}),"here"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"`translate-fbts`"```: ```"`babel-node ./node_modules/babel-plugin-fbt/bin/translate.js --jenkins --source-strings i18n/fbt/.source_strings.json --translations i18n/fbt/translationScriptInput/*.json > i18n/fbt/translatedFbts.json`"')))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Generate localizable.json files for each language and add them to the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"res/[raw-xx-rXX](https://github.com/facebookincubator/fbt/tree/rn-demo-app/android/app/src/main/res/raw-es-rES)")," folder (xx is the ISO 2 Letter Language Codes)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can find a helper script in the rn-demo-app: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookincubator/fbt/blob/rn-demo-app/i18n/scripts/generate-android-localizables.js"}),"generate-android-localizable.js")),Object(o.b)("li",{parentName:"ul"},'The script takes in the translation script output and generates localizable.json files in the "android/res" folder. See it in the ',Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookincubator/fbt/tree/rn-demo-app/android/app/src/main/res/raw-es-rES"}),"rn-demo-app"))))),Object(o.b)("h2",{id:"notes"},Object(o.b)("strong",{parentName:"h2"},"Notes")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"generate-android-localizable.js")," script creates the main ",Object(o.b)("inlineCode",{parentName:"li"},"res/raw/localizable.json")," with the content: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),". This empty file is necessary so that Android generates the ",Object(o.b)("inlineCode",{parentName:"li"},"R.raw.localizable")," resource. If you don\u2019t use the script, please, create the file ",Object(o.b)("inlineCode",{parentName:"li"},"res/raw/localizable.json")," manually with an empty json as mentioned before."),Object(o.b)("li",{parentName:"ul"},"There's a known bug when using ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookincubator/fbt/issues/127"}),"fbt in React Native components' properties"),". The solution is to call ",Object(o.b)("inlineCode",{parentName:"li"},".toString()")," after the fbt() call:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'<TextInput placeholder={fbt("Text", "Description").toString()} />'))))))}u.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),p=r,s=u[l+"."+p]||u[p]||b[p]||o;return n?a.a.createElement(s,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(s,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,b=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113;a&&Symbol.for("react.suspense_list");var d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder"),a&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}function v(){}function N(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=N.prototype=new v;w.constructor=N,r(w,g.prototype),w.isPureReactComponent=!0;var k={current:null},C={current:null},S=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&!_.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var b=Array(c),u=0;u<c;u++)b[u]=arguments[u+2];a.children=b}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:C.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var A=/\/+/g,E=[];function P(e,t,n,r){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function $(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return r(a,t,""===n?"."+I(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var b=0;b<t.length;b++){var u=n+I(l=t[b],b);c+=e(l,u,r,a)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=h&&t[h]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),b=0;!(l=t.next()).done;)c+=e(l=l.value,u=n+I(l,b++),r,a);else if("object"===l)throw r=""+t,Error(j(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(A,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(A,"$&/")+"/"),$(e,M,t=P(t,o,r,a)),R(t)}function L(){var e=k.current;if(null===e)throw Error(j(321));return e}var z={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,F,t=P(null,null,t,n)),R(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(j(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,n){return L().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,n){return L().useReducer(e,t,n)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:l,Profiler:b,StrictMode:c,Suspense:f,createElement:x,cloneElement:function(e,t,n){if(null==e)throw Error(j(267,e));var a=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(u in t)S.call(t,u)&&!_.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==b?b[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){b=Array(u);for(var p=0;p<u;p++)b[p]=arguments[p+2];a.children=b}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:c}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},B={default:z},U=B&&z||B;e.exports=U.default||U},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),b=1;b<arguments.length;b++){for(var u in n=Object(arguments[b]))a.call(n,u)&&(c[u]=n[u]);if(r){l=r(n);for(var p=0;p<l.length;p++)o.call(n,l[p])&&(c[l[p]]=n[l[p]])}}return c}}}]);