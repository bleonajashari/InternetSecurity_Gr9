<h1 align="center">XSS-SCANNER</h1>   

## Çka është Cross-Site Scripting

Sulmet Cross-Site Scripting (XSS) janë një lloj injeksioni, në të cilin skriptet me qëllim të keq injektohen në web aplikacione të ndryshme.
Sulmet XSS ndodhin kur një sulmues përdor një aplikacion në internet për të dërguar kodin me qëllim të keq.
Një sulmues mund të përdorë XSS për të dërguar një skript me qëllim të keq tek një përdorues që nuk dyshon. Shfletuesi i përdoruesit nuk ka asnjë mënyrë për të ditur se skripti nuk duhet të besohet, prandaj do ta ekzekutojë skripten. Për shkak se ai mendon se skripta ka ardhur nga një burim i besuar, skripta keqdashese mund të ketë çasje në çdo skedar "cookie", "sessions" ose informacione të tjera sensitive të ruajtura nga shfletuesi dhe të përdorura me atë faqe. Këto skripta madje mund të rishkruajnë përmbajtjen e faqes HTML.

## Funksionimi i XSS-Scanner

Dy hapat kryesor:
1. Gjetja e objektivit: Vegla mundohet të identifikojë të gjithë parametrat e injektueshëm në forma, URLs, headers, etj.
2. Testimi për XSS: Për secilin parametër, skenuesi përpiqet të detektojë nëse është i rrezikuar nga Cross-Site Scripting apo jo. Vegla injekton kod të shkruar në JavaScript, duke përfshirë disa karaktere të veçanta HTML (>, <, ", ') dhe mundohet të shohë nëse përgjigja kthehet e pasanitizuar.
Nëse vegla vërenë të paktën një dobësi, do të lajmërojë që faqja e skenuar është jo e sigurtë (ndaj XSS).

## Teknologjitë
 * Puppeteer
 * Javascript
 * NodeJS
 * Express
 
 
