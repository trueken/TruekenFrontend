import mockaddinfo from './mockup/getAddressInfo.json.txt';

const hostname = window && window.location && window.location.hostname;
let backendHost;
let setup = null;

if(hostname === 'localhost') {
	setup = {
		"addinfo": "http://ethplorer/api/getAddressInfo/[address]/apiKey=freekey",
		"backend_api": "http://127.0.0.1:8000/api/"
	}
	process.env.ADDINFO = mockaddinfo;
	
} else {
	//TODO
}

export const ENV = setup;
