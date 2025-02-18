# WARP Generator v2.0

<p align="center">
  <img src="https://img.shields.io/badge/version-2.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/username/WARP-Generator/blob/main/LICENSE" target="_blank">
    <img alt="License: GPL-3.0" src="https://img.shields.io/badge/License-GPL--3.0-yellow.svg" />
  </a>
</p>

> یک ابزار ساده و کارآمد برای تولید کانفیگ‌های WARP با تنظیمات سفارشی نویز و قابلیت WARP در WARP برای امنیت بیشتر

## ویژگی‌ها

- تولید کانفیگ‌های WARP برای کلاینت‌های مختلف (Hiddify, v2rayNG, Singbox و غیره)
- پشتیبانی از IPv4 و IPv6
- تنظیمات سفارشی نویز (IFP, IFPS, IFPD, IFPM)
- قابلیت WARP در WARP برای امنیت بیشتر
- تولید QR کد برای اشتراک‌گذاری آسان کانفیگ
- رابط کاربری ساده و کاربرپسند

## استفاده آنلاین

برای استفاده آنلاین از WARP Generator، به این آدرس مراجعه کنید:

[https://4n0nymou3.github.io/WARP/Generator](https://4n0nymou3.github.io/WARP)

## راهنمای استفاده

1. نوع کلاینت و نسخه IP مورد نظر خود را انتخاب کنید.
2. تعداد بسته‌های نویز، اندازه بسته‌ها، تأخیر و حالت تولید نویز را به دلخواه تنظیم کنید.
3. در صورت تمایل، کد لایسنس WARP خود را وارد کنید.
4. گزینه WARP در WARP را در صورت نیاز فعال کنید.
5. روی دکمه "تولید URL" کلیک کنید.
6. URL تولید شده را کپی کرده یا از QR کد آن استفاده کنید.

## تنظیمات نویز WARP

در تنظیمات WARP، می‌توانید از پارامترهای زیر برای تولید نویز استفاده کنید:

پارامترهای مختلفی برای تنظیم و بهینه‌سازی عملکرد WARP وجود دارد که هر یک نقش مهمی در بهبود امنیت و پایداری ارتباطات ایفا می‌کنند.

```
• IFP (تعداد بسته‌های نویز)
• IFPS (اندازه بسته‌های نویز)
• IFPD (تأخیر بین بسته‌ها)
• IFPM (حالت تولید نویز)
```

در ادامه، توضیحاتی درباره هر یک از این پارامترها ارائه می‌شود:
	
یک: 	IFP (تعداد بسته‌های نویز): این پارامتر تعداد بسته‌های نویزی را که در هر ارتباط ارسال می‌شوند، تعیین می‌کند. با تنظیم این مقدار، می‌توان حجم ترافیک نویز را کنترل کرد تا شناسایی ترافیک واقعی برای سیستم فیلترینگ دشوارتر شود. به‌عنوان مثال، مقدار ifp=40-80 به این معناست که در هر ارتباط، بین ۴۰ تا ۸۰ بسته نویز به‌صورت تصادفی ارسال می‌شود.
	
دو: 	IFPS (اندازه بسته‌های نویز): این پارامتر اندازه هر بسته نویز را مشخص می‌کند. با تنظیم اندازه بسته‌ها، می‌توان الگوی ترافیک را متنوع‌تر کرد و تشخیص آن را سخت‌تر نمود. برای مثال، مقدار ifps=40-100 نشان می‌دهد که هر بسته نویز دارای اندازه‌ای بین ۴۰ تا ۱۰۰ بیت خواهد بود.
	
سه: 	IFPD (تاخیر بین بسته‌ها): این پارامتر تاخیر زمانی بین ارسال هر بسته نویز را تعیین می‌کند. با تنظیم این تاخیر، می‌توان الگوی زمانی ترافیک را تغییر داد و شناسایی آن را پیچیده‌تر کرد. به‌عنوان مثال، مقدار ifpd=4-8 به این معناست که بسته‌های نویز با تاخیری بین ۴ تا ۸ ثانیه به‌صورت تصادفی ارسال می‌شوند.
	
چهار: 	IFPM (حالت تولید نویز): این پارامتر پروتکل یا روشی را که برای تولید نویز استفاده می‌شود، مشخص می‌کند. حالت‌های مختلفی برای تولید نویز وجود دارد که هر یک ویژگی‌ها و کاربردهای خاص خود را دارند:

m2:
در این حالت، از پروتکل HTTP/2 برای تولید نویز استفاده می‌شود. این روش باعث می‌شود ترافیک نویز شبیه به ترافیک واقعی وب به‌نظر برسد.

m3:
در این حالت، از پروتکل HTTP/3 برای تولید نویز بهره‌گیری می‌شود. این پروتکل نسبت به HTTP/2 بهینه‌تر است و می‌تواند ترافیک نویز را موثرتر تولید کند.

m4:
این حالت از پروتکل QUIC برای تولید نویز استفاده می‌کند. QUIC یک پروتکل مدرن است که توسط گوگل توسعه یافته و برای بهبود سرعت و امنیت ارتباطات طراحی شده است.

m5:
در این حالت، از پروتکل WireGuard برای تولید نویز استفاده می‌شود. WireGuard یک پروتکل VPN سبک و سریع است که می‌تواند ترافیک نویز را به‌صورت کارآمد تولید کند.

m6:
این حالت از پروتکل LQUIC برای تولید نویز بهره می‌برد. LQUIC نسخه بهینه‌شده‌ای از QUIC است که برای کاهش تاخیر و افزایش کارایی طراحی شده است.

با تنظیم مناسب این پارامترها، می‌توان امنیت و پایداری ارتباطات را بهبود بخشید و از شناسایی ترافیک توسط سیستم فیلترینگ جلوگیری کرد.

### تنظیمات پیشنهادی

برای عملکرد بهینه، توصیه می‌شود از تنظیمات زیر استفاده کنید:

```
IFP: 40-80
IFPS: 50-100
IFPD: 2-4
IFPM: m4
```

## لینک اشتراک

اگر با نحوه ساخت و تولید URL آشنایی ندارید، می‌توانید از لینک اشتراک زیر در اپلیکیشن‌های Hiddify و Karing استفاده کنید:

```
https://raw.githubusercontent.com/4n0nymou3/WARP/refs/heads/main/Sub
```

## مجوز

این پروژه تحت مجوز [GPL-3.0](https://github.com/username/WARP-Generator/blob/main/LICENSE) منتشر شده است.

## نویسنده

**Anonymous**

* تلگرام: [@BXAMbot](https://t.me/BXAMbot)