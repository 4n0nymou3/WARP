let isDarkTheme = true;
let isEnglish = false;
function toggleTheme()
{
	isDarkTheme = !isDarkTheme;
	if (isDarkTheme)
	{
		document.documentElement.style.setProperty('--bg-color', '#0d1117');
		document.documentElement.style.setProperty('--container-bg', '#161b22');
		document.documentElement.style.setProperty('--text-color', '#c9d1d9');
		document.documentElement.style.setProperty('--input-bg', '#21262d');
		document.documentElement.style.setProperty('--input-border', '#30363d');
	}
	else
	{
		document.documentElement.style.setProperty('--bg-color', '#f0f2f5');
		document.documentElement.style.setProperty('--container-bg', '#ffffff');
		document.documentElement.style.setProperty('--text-color', '#1f2937');
		document.documentElement.style.setProperty('--input-bg', '#f9fafb');
		document.documentElement.style.setProperty('--input-border', '#d1d5db');
	}
	if (document.getElementById('qrCodeContainer').firstChild)
	{
		generateQRCode(document.getElementById('generatedUrl').value);
	}
}
function toggleLanguage()
{
	isEnglish = !isEnglish;
	const languageButton = document.querySelector('.language-switch');
	const htmlElement = document.documentElement;
	if (isEnglish)
	{
		languageButton.textContent = 'FA';
		htmlElement.lang = 'en';
		htmlElement.dir = 'ltr';
		document.body.classList.add('ltr');
	}
	else
	{
		languageButton.textContent = 'EN';
		htmlElement.lang = 'fa';
		htmlElement.dir = 'rtl';
		document.body.classList.remove('ltr');
	}
	updateTexts();
}
function updateTexts()
{
	const texts = {
		'fa':
		{
			'title': 'WARP Generator v2.0',
			'infoBoxText': 'اگر با نحوه ساخت و تولید URL آشنایی ندارید، می‌توانید از لینک اشتراک زیر در اپلیکیشن‌های Hiddify و Karing استفاده کنید:',
			'copyLinkButton': 'کپی لینک',
			'usernameLabel': 'نام دلخواه (اختیاری) فقط حروف لاتین و عدد',
			'licenseLabel': 'کد لایسنس WARP (اختیاری)',
			'typeLabel': 'نوع هسته پیکربندی',
			'ipVersionLabel': 'نسخه IP',
			'ipLabel': 'آدرس IP (اختیاری)',
			'portLabel': 'آدرس PORT (اختیاری)',
			'autoFillLabel': ' ⁮⁮ ⁮⁮ پر کردن خودکار ⁮⁮ ',
			'warpInWarpLabel': 'قابلیت وارپ در وارپ',
			'generateButton': 'تولید URL',
			'loadingText': 'در حال تولید URL...',
			'generatedUrlTitle': 'URL تولید شده:',
			'copyUrlButton': 'کپی URL',
			'contactTitle': 'ارتباط با من',
			'telegramButton': 'پیام در ربات تلگرام',
			'footerDesigner': 'طراحی شده توسط: Anonymous',
			'footerThanks': 'با تشکر از Yebekhe و IRCF',
			'noisePacketsLabel': 'IFP',
			'noisePacketSizeLabel': 'IFPS',
			'noisePacketDelayLabel': 'IFPD',
			'noiseModeLabel': 'IFPM',
			'licenseTooltip': 'در صورت تمایل، می‌توانید با وارد کردن کلید مجوز، به ویژگی‌های خاص و پیشرفته دسترسی پیدا کنید'
		},
		'en':
		{
			'title': 'WARP Generator v2.0',
			'infoBoxText': 'If you are not familiar with how to create and generate a URL, you can use the following subscription link in Hiddify and Karing applications:',
			'copyLinkButton': 'Copy Link',
			'usernameLabel': 'Custom name (optional) only Latin letters and numbers',
			'licenseLabel': 'WARP license code (optional)',
			'typeLabel': 'Configuration core type',
			'ipVersionLabel': 'IP Version',
			'ipLabel': 'IP Address (optional)',
			'portLabel': 'PORT Address (optional)',
			'autoFillLabel': 'Auto Fill',
			'warpInWarpLabel': 'WARP on WARP capability',
			'generateButton': 'Generate URL',
			'loadingText': 'Generating URL...',
			'generatedUrlTitle': 'Generated URL:',
			'copyUrlButton': 'Copy URL',
			'contactTitle': '⁮⁮ ⁮⁮Contact Me',
			'telegramButton': 'Message on Telegram Bot',
			'footerDesigner': 'Designed by: Anonymous',
			'footerThanks': 'Thanks to Yebekhe and IRCF',
			'noisePacketsLabel': 'IFP',
			'noisePacketSizeLabel': 'IFPS',
			'noisePacketDelayLabel': 'IFPD',
			'noiseModeLabel': 'IFPM',
			'licenseTooltip': 'If desired, you can access special and advanced features by entering the license key'
		}
	};
	const currentLang = isEnglish ? 'en' : 'fa';
	document.querySelector('h2').textContent = texts[currentLang]['title'];
	document.querySelector('.info-box p').textContent = texts[currentLang]['infoBoxText'];
	document.querySelector('.copy-btn').textContent = texts[currentLang]['copyLinkButton'];
	document.querySelector('label[for="username"]').textContent = texts[currentLang]['usernameLabel'];
	document.querySelector('label[for="license"]').textContent = texts[currentLang]['licenseLabel'];
	document.querySelector('label[for="type"]').textContent = texts[currentLang]['typeLabel'];
	document.querySelector('label[for="ipVersion"]').textContent = texts[currentLang]['ipVersionLabel'];
	document.querySelector('label[for="ip"]').textContent = texts[currentLang]['ipLabel'];
	document.querySelector('label[for="port"]').textContent = texts[currentLang]['portLabel'];
	document.querySelector('label[for="autoFillCheckbox"]').textContent = texts[currentLang]['autoFillLabel'];
	document.querySelector('label[for="warpInWarpToggle"]').textContent = texts[currentLang]['warpInWarpLabel'];
	document.querySelector('.btn[type="submit"]').innerHTML = `<i class="material-icons">send</i> ${texts[currentLang]['generateButton']}`;
	document.querySelector('.loading p').textContent = texts[currentLang]['loadingText'];
	document.querySelector('#result h5').textContent = texts[currentLang]['generatedUrlTitle'];
	document.querySelector('.btn[onclick="copyToClipboard()"]').innerHTML = `<i class="material-icons">content_copy</i> ${texts[currentLang]['copyUrlButton']}`;
	document.querySelector('.contact-title').innerHTML = `<i class="material-icons">contact_mail</i> ${texts[currentLang]['contactTitle']}`;
	document.querySelector('.contact-btn').innerHTML = `<i class="material-icons">telegram</i> ${texts[currentLang]['telegramButton']}`;
	document.querySelector('.footer-info p:first-child').textContent = texts[currentLang]['footerDesigner'];
	document.querySelector('.footer-info p:last-child').textContent = texts[currentLang]['footerThanks'];
	document.querySelector('label[for="type1"]').textContent = texts[currentLang]['noisePacketsLabel'];
	document.querySelector('label[for="type2"]').textContent = texts[currentLang]['noisePacketSizeLabel'];
	document.querySelector('label[for="type3"]').textContent = texts[currentLang]['noisePacketDelayLabel'];
	document.querySelector('label[for="type4"]').textContent = texts[currentLang]['noiseModeLabel'];
	document.querySelector('.tooltip .tooltiptext').textContent = texts[currentLang]['licenseTooltip'];
}
function toggleHiddifyOptions()
{
	var type = document.getElementById('type').value;
	var hiddifyOptions = document.getElementById('hiddifyOptions');
	var usernameField = document.getElementById('usernameField');
	var ipVersionField = document.getElementById('ipVersion');
	var warpInWarpContainer = document.getElementById('warpInWarpContainer');
	if (type === 'hiddify' || type === 'karing')
	{
		hiddifyOptions.style.display = 'block';
		usernameField.style.display = 'block';
		ipVersionField.disabled = false;
		warpInWarpContainer.style.display = 'flex';
	}
	else
	{
		hiddifyOptions.style.display = 'none';
		usernameField.style.display = 'none';
		ipVersionField.value = 'ipv4';
		ipVersionField.disabled = true;
		warpInWarpContainer.style.display = 'none';
	}
	toggleIPOptions();
	document.getElementById('autoFillCheckbox').checked = false;
}
function toggleIPOptions()
{
	var type = document.getElementById('type').value;
	var ipVersion = document.getElementById('ipVersion').value;
	var ipField = document.getElementById('ip');
	var portField = document.getElementById('portField');
	if (type === 'hiddify' && ipVersion === 'ipv6')
	{
		ipField.value = '';
		portField.style.display = 'none';
	}
	else
	{
		ipField.value = '162.159.192.76';
		portField.style.display = 'block';
	}
	document.getElementById('autoFillCheckbox').checked = false;
}
document.addEventListener('DOMContentLoaded', function()
{
	document.getElementById('warpinatorForm').addEventListener('submit', function(event)
	{
		event.preventDefault();
		document.querySelector('.loading').style.display = 'block';
		document.getElementById('result').style.display = 'none';
		setTimeout(function()
		{
			var type = document.getElementById('type').value;
			var url;
			if (type === 'hiddify' || type === 'karing')
			{
				var username = document.getElementById('username').value || 'Anonymous';
				var license = document.getElementById('license').value || '';
				var type1 = document.getElementById('type1').value || '40-80';
				var type2 = document.getElementById('type2').value || '40-10';
				var type3 = document.getElementById('type3').value || '2-4';
				var type4 = document.getElementById('type4').value || 'm4';
				var ip = document.getElementById('ip').value || '162.159.192.76';
				var port = document.getElementById('port').value || '2408';
				var ipVersion = document.getElementById('ipVersion').value;
				var warpInWarp = document.getElementById('warpInWarpToggle').checked;
				var auto = document.getElementById('autoFillCheckbox').checked ? 'true' : 'false';
				var defaultUsername = 'Anonymous';
				var customUsername = username !== defaultUsername;
				if (type === 'karing')
				{
					if (ipVersion === 'ipv6')
					{
						var baseUrl = license ? `warp://${license}@${ip}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}#${username}` : `warp://${ip}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}#${username}`;
					}
					else
					{
						var baseUrl = license ? `warp://${license}@${ip}:${port}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}#${username}` : `warp://${ip}:${port}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}#${username}`;
					}
					url = baseUrl;
				}
				else if (type === 'hiddify')
				{
					if (ipVersion === 'ipv6')
					{
						var baseUrl = license ? `warp://${ip}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}#${username}` : `warp://${ip}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}#${username}`;
					}
					else
					{
						var baseUrl = license ? `warp://${ip}:${port}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}#${username}` : `warp://${ip}:${port}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}#${username}`;
					}
					url = baseUrl;
				}
				if (warpInWarp)
				{
					if (type === 'karing')
					{
						var wowUsername;
						if (customUsername)
						{
							wowUsername = `${username}-WoW-${ipVersion === 'ipv6' ? 'IPv6\u{1F1E9}\u{1F1EA}' : 'IPv4\u{1F1E9}\u{1F1EA}'}`;
						}
						else
						{
							wowUsername = ipVersion === 'ipv6' ? 'Anon-WoW-IPv6\u{1F1E9}\u{1F1EA}' : 'Anon-WoW-IPv4\u{1F1E9}\u{1F1EA}';
						}
						if (ipVersion === 'ipv6')
						{
							var wowUrl = license ? `warp://${license}@${ip}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}` : `warp://${ip}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}`;
						}
						else
						{
							var wowUrl = license ? `warp://${license}@${ip}:${port}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}` : `warp://${ip}:${port}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}`;
						}
						url = wowUrl + `&&detour=${wowUrl}#${wowUsername}`;
					}
					else if (type === 'hiddify')
					{
						var wowUsername;
						if (customUsername)
						{
							wowUsername = `${username}-WoW-${ipVersion === 'ipv6' ? 'IPv6\u{1F1E9}\u{1F1EA}' : 'IPv4\u{1F1E9}\u{1F1EA}'}`;
						}
						else
						{
							wowUsername = ipVersion === 'ipv6' ? 'Anon-WoW-IPv6\u{1F1E9}\u{1F1EA}' : 'Anon-WoW-IPv4\u{1F1E9}\u{1F1EA}';
						}
						if (ipVersion === 'ipv6')
						{
							var wowUrl = license ? `warp://${ip}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}` : `warp://${ip}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}`;
						}
						else
						{
							var wowUrl = license ? `warp://${ip}:${port}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}` : `warp://${ip}:${port}/?ifp=${type1}&ifps=${type2}&ifpd=${type3}&ifpm=${type4}`;
						}
						url = wowUrl + `&&detour=${wowUrl}#${wowUsername}`;
					}
				}
			}
			else
			{
				var license = document.getElementById('license').value || '';
				var ip = document.getElementById('ip').value || '162.159.192.76';
				var port = document.getElementById('port').value || '2408';
				var auto = document.getElementById('autoFillCheckbox').checked ? 'true' : 'false';
				url = `https://itshin.serv00.net/api/warpinator?license=${encodeURIComponent(license)}&type=${encodeURIComponent(type)}&auto=${encodeURIComponent(auto)}`;
				if (!document.getElementById('autoFillCheckbox').checked)
				{
					url += `&ip=${encodeURIComponent(ip)}&port=${encodeURIComponent(port)}`;
				}
			}
			document.getElementById('generatedUrl').value = url;
			document.querySelector('.loading').style.display = 'none';
			document.getElementById('result').style.display = 'block';
			generateQRCode(url);
		}, 1500);
	});
});
function copyToClipboard()
{
	var copyText = document.getElementById('generatedUrl');
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand('copy');
	var btn = document.querySelector('.btn[onclick="copyToClipboard()"]');
	const copiedMessage = isEnglish ? 'Copied!' : 'کپی شد!';
	btn.innerHTML = `<i class="material-icons">check</i>${copiedMessage}`;
	setTimeout(() =>
	{
		updateTexts();
	}, 2000);
}
async function fetchRandomIP()
{
	var ipVersion = document.getElementById('ipVersion').value;
	try
	{
		const response = await fetch('https://raw.githubusercontent.com/ircfspace/endpoint/refs/heads/main/ip.json');
		const data = await response.json();
		var ipList = ipVersion === 'ipv6' ? data.ipv6 : data.ipv4;
		var randomIndex = Math.floor(Math.random() * ipList.length);
		var randomIP = ipList[randomIndex];
		if (ipVersion === 'ipv6')
		{
			var [ip] = randomIP.split('[]:');
			document.getElementById('ip').value = ip;
			document.getElementById('port').value = '';
		}
		else
		{
			var [ip, port] = randomIP.split(':');
			document.getElementById('ip').value = ip;
			document.getElementById('port').value = port;
		}
	}
	catch (error)
	{
		console.error('خطا در دریافت داده IP:', error);
	}
}
function generateQRCode(data)
{
	var qrCodeContainer = document.getElementById('qrCodeContainer');
	qrCodeContainer.innerHTML = '';
	new QRCode(qrCodeContainer, {
		text: data,
		width: 200,
		height: 200,
		colorDark: isDarkTheme ? "#c9d1d9" : "#000000",
		colorLight: isDarkTheme ? "#0d1117" : "#ffffff",
		correctLevel: QRCode.CorrectLevel.L
	});
}
async function fetchRandomLicense()
{
	try
	{
		const response = await fetch('https://raw.githubusercontent.com/ircfspace/warpkey/main/plus/full');
		const text = await response.text();
		const licenses = text.trim().split('\n');
		if (licenses.length > 0)
		{
			const randomIndex = Math.floor(Math.random() * licenses.length);
			return licenses[randomIndex].trim();
		}
		else
		{
			return '';
		}
	}
	catch (error)
	{
		console.error('خطا در دریافت کد لایسنس:', error);
		return '';
	}
}
async function toggleAutoFill()
{
	var autoFillCheckbox = document.getElementById('autoFillCheckbox');
	var ipField = document.getElementById('ip');
	var portField = document.getElementById('port');
	var licenseField = document.getElementById('license');
	if (autoFillCheckbox.checked)
	{
		ipField.disabled = true;
		portField.disabled = true;
		licenseField.disabled = true;
		ipField.value = '•••';
		portField.value = '•••';
		licenseField.value = '•••';
		await fetchRandomIP();
		const license = await fetchRandomLicense();
		licenseField.value = license;
	}
	else
	{
		ipField.disabled = false;
		portField.disabled = false;
		licenseField.disabled = false;
	}
}
function copySubscriptionLink()
{
	var subscriptionLink = document.getElementById('subscriptionLink');
	subscriptionLink.select();
	subscriptionLink.setSelectionRange(0, 99999);
	document.execCommand('copy');
	var copyBtn = document.querySelector('.copy-btn');
	const copiedMessage = isEnglish ? 'Copied!' : 'کپی شد!';
	copyBtn.textContent = copiedMessage;
	setTimeout(function()
	{
		updateTexts();
	}, 2000);
}
window.addEventListener('load', function()
{
	const elements = document.querySelectorAll('.container, .btn, .form-control');
	elements.forEach((el, index) =>
	{
		setTimeout(() =>
		{
			el.style.opacity = '1';
			el.style.transform = 'translateY(0)';
		}, index * 100);
	});
	toggleHiddifyOptions();
});