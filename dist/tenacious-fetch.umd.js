!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.tenaciousFetch=t()}(this,function(){function e(e,r,n){return new Promise(function(o,i){!function e(r,n,u){var f=n.retryStatus;(0,n.fetcher)(r,n).then(function(s){if(f.includes(s.status)){var c=new Error("Request failed with status code "+s.status);if(c.response=s,u>0){var a=t(n,--u);n.onRetry&&"function"==typeof n.onRetry&&n.onRetry({retriesLeft:u,retryDelay:a,error:c}),setTimeout(function(){return e(r,n,u)},a)}else i(c)}else o(s)}).catch(function(o){if(u>0){var f=t(n,--u);n.onRetry&&"function"==typeof n.onRetry&&n.onRetry({retriesLeft:u,retryDelay:f,error:o}),setTimeout(function(){return e(r,n,u)},f)}else i(o)})}(r,n,e)})}function t(e,t){var r=e.retryDelay,n=e.factor,o=e.retries,i=e.retryDelayFn;return"function"==typeof i?i(o-t):n&&"number"==typeof n&&Number.isInteger(n)?function(e,t){return Math.pow(e,t)}(n,o-t):r*(o-t)}var r=!1;try{r=window&&window.fetch}catch(e){}return function(t,n){if(void 0===t&&(t=""),void 0===n&&(n={}),!(n=Object.assign({retries:1,retryDelay:1e3,retryStatus:[],fetcher:r,timeout:void 0},n)).fetcher||"function"!=typeof n.fetcher)throw new Error("tenacious-fetch: No fetch implementation found. Provide a valid fetch implementation via the fetcher configuration property.");"string"!=typeof n.retryStatus&&"number"!=typeof n.retryStatus||(n.retryStatus=[Number.parseInt(n.retryStatus)]);var o=n.timeout;return o&&Number.isInteger(o)?Promise.race([e(n.retries,t,n),new Promise(function(e,t){return setTimeout(function(){return t(new Error("tenacious-fetch: Request took longer than timeout of "+o+" ms."))},o)})]):e(n.retries,t,n)}});
//# sourceMappingURL=tenacious-fetch.umd.js.map
