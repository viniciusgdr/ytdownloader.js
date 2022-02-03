import request from 'request';
import { IHeaders, IYtSearch } from '..';

export function ytsearch(search: string, headers: IHeaders): Promise<IYtSearch[]> {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://yt1s.io/api/ajaxSearch',
            method: 'POST',
            headers: headers.ytis,
            form: { 'q': search, 'vt': 'home' }
        }, function (error, response, body) {
            const bodyer = JSON.parse(body)
            const searchers = []
            for (let i = 0; i < bodyer.items.length; i++) {
                searchers.push({
                    url: 'https://www.youtube.com/watch?v=' + bodyer.items[i].v,
                    title: bodyer.items[i].t
                })
            }
            console.log(searchers)
            resolve(searchers)
        })
    })
};
