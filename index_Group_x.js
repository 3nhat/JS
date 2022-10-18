function EID(NameID) {return document.getElementById(NameID);}
function ECN(NameClass) {return document.getElementsByClassName(NameClass);}
var root;
var thietbi;
var test = "w3s";
var DefaultPage = "Express1";  //"Group";
var batdau = true;

var lengthOtp = 2;
var rand = 0;
var page = "Group";
var LinkImage = "http://placekitten.com/400/200";

window.addEventListener('DOMContentLoaded', (event) => { QT001(); });

function QT001(){
	window.CaptchaLoad = false;
	window.charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
	
	function GetLink() {
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
								for (var i=0;i<arr1[rand].length;i++) {
									script_url = script_url + arr1[rand][i];
								}
								script_url =  "https://script.google.com/macros/s/" + script_url + "/exec";
								var linkexec = "https://script.google.com/macros/s/AKfycbyU5sTwq9NyhycuxnJAc0EVoqcrrkGE1X5lkAfahV5h0Be7v_hz/exec";
								var str1 = window.location.href;

								if (test=="w3s") {
									var link = script_url;
								} else {
									var link = (str1.indexOf('https://3nhat.github.io/')>=0) ? script_url : "";
								}

								if (link=="") {
									EID("HuongDan").innerHTML = "Chương trình không được chạy từ trang chính. Cám ơn bạn đã quan tâm đến chương trình";
									return link;
								}

								var timthay = str1.indexOf('zalo');
								if (timthay>0) {
									for (var j=timthay; j>=0; j--) {
										var v = str1.substring(j,j+1);
										if (v=="?" || v=="&") {
											str1 = str1.substring(0,j);
											break;
										}
									}
								}
								var str4 = (timthay>0) ? "]QQQ[zalo" : "";
								var strArr = str1.split('ID=');
								str1 = strArr[0];
								var str2="";
								if (strArr.length>1) {
									str2 = "ID=" + strArr[1] + "]QQQ[";
								} 

								strArr = str1.split('P=');

								var str3 = (strArr.length>1) ? strArr[1] : "Pr01";
								var str3 = (strArr.length>1) ? strArr[1] : DefaultPage;

								//link = script_url + "?P=" + str3 + "&para1=F001" + "&para2=" + str3 + "]QQQ[100nBtoDN7MupVz8lYQZzZw5zdG_9TgbFKJmuG007OTI]QQQ[" + str3 + "]QQQ[select A, B, C, D" + str2 + str4;
								link = script_url + "?P=" + str3 + "&para1=F001" + "&para2=" + "none]QQQ[func]QQQ[GetDataServer]TTT[Khoitao";
								return link;
							}
	
	
	function worker_1(x0, x1){
                var x2 = "NoLink";
                var str = "function T(exp){ " +
                                  "fetch (exp[1])" +
                                    ".then(x => x.text())" +
                                    ".then(y => postMessage([exp[0],y]));" +
                          "} " +
                          "function Q() { self.addEventListener('message', function(e) { T(e.data); }, false); } " +
                          "Q();";

                var x3 = str;
                var x4 = 'Func_Run02a';
                var x5 = 'QT';
                var x6 = 'Cộng hoà xã hội';
                var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6;
                  
                TaoHuyWorker(exp);
              }  
              
              function TaoHuyWorker(exp){
                var arr = exp.split(']TTT[');
                var x0 = arr[0].trim(); //xác định tạo hay xoá hay gửi thông tin
                var x1 = arr[1].trim(); //Biến lưu trên worker.js
                var x2 = arr[2].trim(); //Đường dẫn file worker.js
                var x3 = arr[3].trim(); //Chuỗi tạo hàm chạy cho worker
                var x4 = arr[4].trim(); //Hàm nhận thông tin worker trả về
                var x5 = arr[5].trim(); //tên biến của Hàm nhận thông tin worker trả về
                var x6 = arr[6].trim(); //Nội dung gửi worker
                
                  
                function startWorker(){
                  if(typeof(Worker)!=="undefined") {
                    if(x3=='NoStringFunc'){
                      window.window[x1] = new Worker(x2); 
                    } else {
                      var blob = new Blob([x3]);
                      var blobURL = window.URL.createObjectURL(blob);
                      window.window[x1] = new Worker(blobURL);
                    }
                    window[x1].onmessage = function (event) { 
                      window.window[x5] = event.data;
                      window[x4](x5);
                    };
                            
                  } else {
                    alert("Sorry, your browser does not support Web Workers...");
                  }
                }

                function stopWorker(){ 
                  window[x1].terminate(); 
                }
                  
                if(x0=='1') startWorker();
                if(x0=='0') stopWorker();
                if(x0=='2') window[x1].postMessage([x1,x6]);

              }
	
	worker_1('1','getND');
	
	
	function Qtimthietbi() {
		const toMatch = [
				/Android/i,
				/webOS/i,
				/iPhone/i,
				/iPad/i,
				/iPod/i,
				/BlackBerry/i,
				/Windows Phone/i
				];
		thietbi = toMatch.some((toMatchItem) => { return navigator.userAgent.match(toMatchItem); });
		root = document.querySelector(':root');
	}
	Qtimthietbi();
		
	window.addEventListener("contextmenu", function(e) {
		e.preventDefault();
	}, false);
		
	window.addEventListener("keydown", function(e) {
		if (e.ctrlKey || e.keyCode==123) {
			e.stopPropagation();
			e.preventDefault();
		}
	}); 
		
	window.addEventListener("touchstart", function(e) {
		if(e.touches.length > 1){
			e.preventDefault();
		}
	},{passive: false});
		     
	function preventPullToRefresh(element) {
		var prevent = false;
		document.querySelector(element).addEventListener('touchstart', function(e) {
			if (e.touches.length !== 1) {
				return;
			}
			var scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
				prevent = (scrollY === 0);
		});
		document.querySelector(element).addEventListener('touchmove', function(e) {
			if (prevent) {
				prevent = false;
				e.preventDefault();
			}
		});
	}
	preventPullToRefresh('html');
		
	window.history.pushState(null, document.title, location.href);
		history.back();
		history.forward();
		window.onpopstate = function () {
		history.go(1);
	};
		
	window.addEventListener('beforeunload', function (e) {
		return "bạn muốn tải lại trang chương trình?";
	});
		
	function Qresize() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		var w = window.innerWidth;
		var h = window.innerHeight;

		if (thietbi == false) {
			root.style.setProperty('--heso-cotcontent',3);
			root.style.setProperty('--thietbi',1);
			if(w>401) {
				root.style.setProperty('--size-standard','100px');
			} else {
				root.style.setProperty('--size-standard','25vw');
			}
			if (w>400 && w<720){
				root.style.setProperty('--display-ngang','flex');
				root.style.setProperty('--display-doc','none');
				var nd = '<p>Máy tính có khung làm việc quá nhỏ để hiện thị đầy dủ nội dung.<br><br>Kích thước tối thiểu là:<br>rộng: 720px - cao: 480px</p>'
			} 
			if (w<240){
				root.style.setProperty('--display-ngang','flex');
				root.style.setProperty('--display-doc','none');
				var nd = '<p>Thiết bị có quá nhỏ quá nhỏ để hiện thị đầy dủ nội dung.<br><br>Kích thước tối thiểu là:<br>rộng: 240px - 400px<br>cao: 480px - 800px</p>';
			} 
			if (w>=240 && w<=400){
				if(h>=1.5*w) {
					root.style.setProperty('--display-ngang','none');
					root.style.setProperty('--display-doc','block');
					var nd='';
				} else {
					root.style.setProperty('--display-ngang','flex');
					root.style.setProperty('--display-doc','none');
					var nd = '<p>Thiết bị có quá nhỏ quá nhỏ để hiện thị đầy dủ nội dung.<br><br>Kích thước tối thiểu là:<br>rộng: 240px - 400px<br>cao: 480px - 800px</p>';
				}
				root.style.setProperty('--heso-cotcontent',1);
				root.style.setProperty('--display-content1','block');
				root.style.setProperty('--display-content2','none');
				root.style.setProperty('--display-content3','none');
			}
			if(w>=720){
				root.style.setProperty('--display-ngang','none');
				root.style.setProperty('--display-doc','block');
				root.style.setProperty('--display-content1','block');
				root.style.setProperty('--display-content2','block');
				root.style.setProperty('--display-content3','block');
			}
			EID('ngang').innerHTML = nd;

		} else {

			root.style.setProperty('--heso-cotcontent',1);
			root.style.setProperty('--display-content1','block');
			root.style.setProperty('--display-content2','none');
			root.style.setProperty('--display-content3','none');
			if(w >= 2*h) {
				root.style.setProperty('--display-ngang','flex');
				root.style.setProperty('--display-doc','none');
				var nd = '<p>Chương trình không được thiết kế để hoạt động theo chiều ngang của thiết bị</p>';
        
			} else {
				root.style.setProperty('--thietbi','2');
				root.style.setProperty('--display-ngang','none');
				root.style.setProperty('--display-doc','block');
				root.style.setProperty('--size-standard','200px');

				var nd = '';
			}
			EID('ngang').innerHTML = nd;
		}
	}

	function toado(){
		EID("Geo").innerHTML=="";
		getLocation();
		function getLocation() {
            EID("HuongDan").style.display = "block";
        		if (navigator.geolocation) {
        			navigator.geolocation.getCurrentPosition(showPosition);
        		} else { 
        			alert("Geolocation is not supported by this browser.");
        		}
  		}
        
  		function showPosition(position) {
			EID("Geo").innerHTML = position.coords.latitude + "][" + position.coords.longitude;
    			if (EID("Geo").innerHTML!="") {
				
				function Send_Worker_1(){
                var x0 = '2';
                var x1 = 'getND';
                var x2 =  "NoLink"
                var x3 = "NoStringFunc";
                var x4 = 'Func_Run02a';
                var x5 = 'QT';

                var rand = Math.floor(Math.random() * (window['ALL_LINK'].length-1));
                var script_id = window['ALL_LINK'][rand];
                var script_id1 = window['func_getlinkServer'](script_id);

                var x6 = "https://script.google.com/macros/s/" + script_id1 + "/exec";
                x6 = x6 + "?P=Express&para1=F001&para2=none]QQQ[" + '1xO2fOPwAjAEdeR_muzIRRPcSzG6lD3Z4VxTcOI9QP44'; //link MenuCuocQuocGia
                x6 = x6 + "]QQQ[" + "00a";
                x6 = x6 + "]QQQ[" + "select A, B, C, D, E";
                var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6;
                
					alert(exp);
		//TaoHuyWorker(exp);

              }

              window.window['Func_Run02a'] = function(x5){
                alert(window[x5]);
              }

              Send_Worker_1();
				
				
      				function gotoMainPage() {
					if(batdau==true) {
						EID('DDOS').style.display = 'none';
						EID('c').style.display = 'none';
						window.addEventListener('resize', () => {
							Qresize();
						});
						Qresize();
							
						EID("HuongDan").style.display = "none";
						batdau = false;

						window.window["Begin"] = function Begin() {
							var x0='get';
							var x1='slag';    

							async function RunFirstBegin() {
								let promise = new Promise((resolve, reject) => {
									setTimeout(function(){
										var url = GetLink();
										if (x0=='get') { QuangBegin(resolve, url, x1); }
									},5);
								});
								let result = await promise; 
								if (result=="done!") { RunAfterBegin(); }
							}

							function QuangBegin(resolve, url) {
								window.window[x1];

								$.getJSON(url, function (json) {
									resolve("done!");
									window[x1] = json.records.map(doc => Object.values(doc));
									window[x1].map(function mapper(s) {
										if (Array.isArray(s)) {
											return s.map(mapper);
										} else {
											return s.toString().trim();
										}
									});
								});
							}

							function RunAfterBegin() {
								for (var i=0; i<window[x1].length; i++) {
									var str = window[x1][i][1];
									var str1 = window[x1][i][2];
									if(str.indexOf('Khoitao')>=0) {
										var str2 = window.location.href;
										var bd = str2.indexOf('P=') + 2;
										var kt = str2.indexOf('&');
										kt = (kt>0) ? kt : str2.length;
										str2 = str2.substring(bd, kt);
										str1 = str1.replace(/\THAYTHECHUONGTRINH/gi, str2)
									}
									this[window[x1][i][1]] = new Function('return ' + str1)();
									try {
										this[window[x1][i][1]]();
									}
									catch(err) { }
								}

							}

							function encrypt(key, value) {
								var result="";
								for(i=0;i<value.length;++i) {
									result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i));
								}
								return result;
							}
							function decrypt(key, value) {
								var result="";
								for(i=0;i<value.length;++i) {
									result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i));
								}
								return result;
							}

							function base64_encode(s) {      
								return btoa(unescape(encodeURIComponent(s)));
							}
							function base64_decode(s) {      
								return decodeURIComponent(escape(atob(s)));
							}

							

							RunFirstBegin();

						}
						window["Begin"](); 
					}
					
				}

					//gotoMainPage();
					
				function xacnhan(x) {
					if (thietbi==false) {
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
							gotoMainPage();
						}else{
							alert("Nhập sai chuỗi mã hình. Cố gắng lần nữa");
							EID("cpatchaTextBox").value = "";
							createCaptcha();
						}
					}
					
					if (rand1 == 0) {
						if(thietbi==true) {
							gotoMainPage();
							return;
						}

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
						if(thietbi==true) {
						    	gotoMainPage();
							return;
						}
						    
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
									gotoMainPage();
						    
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

				xacnhan('createCaptcha');
					
				//ketthuc ham getcapcha
    			}
        	
  		}

	}
	toado();
}
