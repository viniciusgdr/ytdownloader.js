"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ytsearch = void 0;
const request_1 = __importDefault(require("request"));
function ytsearch(search, headers) {
    return new Promise((resolve, reject) => {
        (0, request_1.default)({
            url: 'https://yt1s.io/api/ajaxSearch',
            method: 'POST',
            headers: headers.ytis,
            form: { 'q': search, 'vt': 'home' }
        }, function (error, response, body) {
            const bodyer = JSON.parse(body);
            const searchers = [];
            for (let i = 0; i < bodyer.items.length; i++) {
                searchers.push({
                    url: 'https://www.youtube.com/watch?v=' + bodyer.items[i].v,
                    title: bodyer.items[i].t
                });
            }
            console.log(searchers);
            resolve(searchers);
        });
    });
}
exports.ytsearch = ytsearch;
;
