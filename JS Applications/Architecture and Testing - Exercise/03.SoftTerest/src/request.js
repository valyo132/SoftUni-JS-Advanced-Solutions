import {getUserData} from './util.js';

export async function request(method, url, data){
	const options = {
		method,
		headers: {}
	};
	
	const userData = getUserData();
	
	if (userData){
		options.headers['X-Authorization'] = userData.accessToken;
	}
	
	if (data != undefined){
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(data);
	}

	try{
		const res = await fetch(url, options);
		
		if (!res.ok){
			const err = await res.json();
			
			if (userData && err.code == 403){
				localStorage.clear();
			}
			throw new Error(err.message);
		}
		
		return await res.json();
		
	} catch (err){
		alert(err.message);
	}
}

export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('put', url, data);
export const patch = (url, data) => request('patch', url, data);
export const del = (url) => request('delete', url);