```css
/* =========================================================
   VEDIKA DIGITAL
   PREMIUM DIGITAL MARKETING WEBSITE
   ========================================================= */

:root {
    --bg: #07080b;
    --bg-2: #0c0e13;
    --card: #11141b;
    --card-2: #151820;

    --white: #f6f7f9;
    --text: #e8eaf0;
    --muted: #9298a7;

    --line: #252a35;

    --accent: #a8ff60;
    --accent-dark: #17230f;

    --max-width: 1180px;
}


/* ================= RESET ================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    background: var(--bg);
    color: var(--text);

    font-family: "DM Sans", sans-serif;

    line-height: 1.6;

    overflow-x: hidden;
}


body::selection {
    background: var(--accent);
    color: #050805;
}


a {
    color: inherit;
    text-decoration: none;
}


button,
input,
textarea,
select {
    font: inherit;
}


/* ================= NAVBAR ================= */

.navbar {
    position: fixed;

    top: 0;
    left: 0;
    right: 0;

    z-index: 1000;

    height: 78px;

    padding: 0 30px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border-bottom: 1px solid transparent;

    background: rgba(7, 8, 11, .82);

    backdrop-filter: blur(18px);

    transition: .3s;
}


.navbar.scrolled {
    border-bottom-color: var(--line);
}


.logo {
    font-family: "Space Grotesk", sans-serif;

    font-size: 22px;

    font-weight: 700;

    letter-spacing: -.5px;
}


.logo span {
    color: var(--accent);
}


.navigation {
    display: flex;

    align-items: center;

    gap: 27px;
}


.navigation a {
    color: #b9bec9;

    font-size: 13px;

    transition: .25s;
}


.navigation a:hover {
    color: var(--accent);
}


.nav-button {
    padding: 10px 18px;

    border: 1px solid #3b414e;

    border-radius: 50px;

    font-size: 13px;

    transition: .25s;
}


.nav-button:hover {
    border-color: var(--accent);

    color: var(--accent);
}


.menu-button {
    display: none;

    background: none;

    border: none;

    color: white;

    font-size: 25px;

    cursor: pointer;
}


/* ================= HERO ================= */

.hero {
    min-height: 100vh;

    max-width: var(--max-width);

    margin: auto;

    padding: 145px 30px 100px;

    display: grid;

    grid-template-columns: 1.05fr .95fr;

    gap: 70px;

    align-items: center;
}


.hero-content {
    position: relative;
    z-index: 2;
}


.hero-badge {
    display: inline-flex;

    align-items: center;

    gap: 9px;

    margin-bottom: 25px;

    padding: 8px 13px;

    border: 1px solid #293026;

    border-radius: 50px;

    color: var(--accent);

    background: #11160d;

    font-size: 10px;

    letter-spacing: 1.8px;

    font-weight: 700;
}


.hero-badge span {
    width: 6px;

    height: 6px;

    border-radius: 50%;

    background: var(--accent);

    box-shadow: 0 0 10px var(--accent);
}


.hero h1 {
    max-width: 700px;

    font-family: "Space Grotesk", sans-serif;

    font-size: clamp(52px, 6.3vw, 80px);

    line-height: .98;

    letter-spacing: -4px;
}


.hero h1 span {
    display: block;

    color: var(--accent);
}


.hero-description {
    max-width: 600px;

    margin: 28px 0 32px;

    color: var(--muted);

    font-size: 17px;
}


.hero-buttons {
    display: flex;

    flex-wrap: wrap;

    gap: 12px;
}


.button {
    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    padding: 14px 21px;

    border-radius: 10px;

    font-size: 13px;

    font-weight: 700;

    transition: .3s;
}


.button.primary {
    color: #071005;

    background: var(--accent);
}


.button.primary:hover {
    transform: translateY(-3px);

    box-shadow: 0 15px 40px rgba(168, 255, 96, .15);
}


.button.outline {
    border: 1px solid #3a3f4c;

    color: var(--white);
}


.button.outline:hover {
    color: var(--accent);

    border-color: var(--accent);
}


.hero-stats {
    display: flex;

    gap: 42px;

    margin-top: 58px;
}


.hero-stats div {
    display: flex;

    flex-direction: column;
}


.hero-stats strong {
    font-family: "Space Grotesk", sans-serif;

    font-size: 17px;
}


.hero-stats span {
    margin-top: 2px;

    color: var(--muted);

    font-size: 10px;
}


/* ================= HERO VISUAL ================= */

.hero-visual {
    position: relative;

    min-height: 480px;

    display: flex;

    align-items: center;

    justify-content: center;
}


.hero-glow {
    position: absolute;

    width: 350px;
    height: 350px;

    border-radius: 50%;

    background: var(--accent);

    filter: blur(120px);

    opacity: .10;
}


.growth-card {
    position: relative;

    z-index: 2;

    width: 430px;

    padding: 30px;

    border: 1px solid #2c313d;

    border-radius: 25px;

    background:
        linear-gradient(
            145deg,
            #191c24,
            #0d0f14
        );

    box-shadow:
        0 35px 90px rgba(0, 0, 0, .45);
}


.growth-header {
    display: flex;

    align-items: center;

    justify-content: space-between;
}


.growth-header div:first-child {
    display: flex;

    flex-direction: column;
}


.growth-header span {
    color: var(--muted);

    font-size: 10px;
}


.growth-header strong {
    margin-top: 2px;

    font-family: "Space Grotesk", sans-serif;

    font-size: 16px;
}


.growth-icon {
    width: 42px;
    height: 42px;

    display: grid;

    place-items: center;

    border: 1px solid #334027;

    border-radius: 12px;

    color: var(--accent);

    background: var(--accent-dark);

    font-size: 20px;
}


.growth-number {
    margin-top: 35px;

    font-family: "Space Grotesk", sans-serif;

    font-size: 43px;

    font-weight: 700;
}


.growth-number span {
    display: block;

    color: var(--muted);

    font-family: "DM Sans", sans-serif;

    font-size: 11px;

    font-weight: 400;
}


.chart {
    position: relative;

    height: 190px;

    margin-top: 15px;

    border-bottom: 1px solid #292d37;

    overflow: hidden;
}


.chart::before,
.chart::after {
    content: "";

    position: absolute;

    left: 0;
    right: 0;

    border-top: 1px dashed #242934;
}


.chart::before {
    top: 35%;
}


.chart::after {
    top: 68%;
}


.chart-bars {
    position: absolute;

    inset: 0;

    display: flex;

    align-items: flex-end;

    gap: 12px;

    padding: 0 5px;
}


.chart-bars i {
    flex: 1;

    border-radius: 6px 6px 0 0;

    background: var(--accent);

    opacity: .75;

    animation: barAnimation 1.5s ease forwards;
}


@keyframes barAnimation {

    from {
        transform: scaleY(0);
        transform-origin: bottom;
    }

    to {
        transform: scaleY(1);
    }

}


.growth-bottom {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 10px;

    margin-top: 20px;
}


.growth-bottom div {
    padding: 12px;

    border: 1px solid #242934;

    border-radius: 10px;

    background: #0a0c10;
}


.growth-bottom span {
    display: block;

    color: var(--muted);

    font-size: 9px;
}


.growth-bottom strong {
    display: block;

    margin-top: 2px;

    color: var(--accent);

    font-size: 15px;
}


.floating-card {
    position: absolute;

    z-index: 3;

    display: flex;

    flex-direction: column;

    padding: 15px 18px;

    border: 1px solid #303540;

    border-radius: 13px;

    background: #11141a;

    box-shadow: 0 20px 40px rgba(0, 0, 0, .3);
}


.floating-card span {
    color: var(--accent);

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 1px;
}


.floating-card strong {
    margin-top: 3px;

    font-size: 12px;
}


.floating-card small {
    color: var(--muted);

    font-size: 9px;
}


.card-one {
    top: 75px;

    left: -15px;
}


.card-two {
    right: -15px;

    bottom: 80px;
}


/* ================= TRUST ================= */

.trust-strip {
    padding: 23px 30px;

    border-top: 1px solid var(--line);

    border-bottom: 1px solid var(--line);

    text-align: center;

    background: #0a0c10;
}


.trust-strip p {
    margin-bottom: 9px;

    color: #656b79;

    font-size: 9px;

    letter-spacing: 2px;

    font-weight: 700;
}


.trust-items {
    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 17px;

    color: #777d8a;

    font-family: "Space Grotesk", sans-serif;

    font-size: 12px;
}


/* ================= COMMON SECTIONS ================= */

.section {
    max-width: var(--max-width);

    margin: auto;

    padding: 125px 30px;
}


.section-label {
    display: flex;

    align-items: center;

    gap: 10px;

    color: var(--accent);

    font-size: 10px;

    letter-spacing: 2px;

    font-weight: 700;
}


.section-label span {
    color: #6e746f;
}


.section-title h2,
.about-heading h2,
.contact-intro h2 {
    margin-top: 17px;

    font-family: "Space Grotesk", sans-serif;

    font-size: clamp(40px, 5vw, 63px);

    line-height: 1;

    letter-spacing: -3px;
}


.section-title h2 span,
.about-heading h2 span,
.contact-intro h2 span {
    color: var(--accent);
}


.section-title > p:last-child {
    max-width: 610px;

    margin-top: 18px;

    color: var(--muted);

    font-size: 15px;
}


.centered {
    text-align: center;
}


.centered .section-label {
    justify-content: center;
}


.centered > p:last-child {
    margin-left: auto;

    margin-right: auto;
}


/* ================= ABOUT ================= */

.about {
    border-bottom: 1px solid var(--line);
}


.about-layout {
    display: grid;

    grid-template-columns: .9fr 1.1fr;

    gap: 100px;

    margin-top: 70px;
}


.about-heading h2 {
    max-width: 470px;
}


.about-content > p {
    max-width: 650px;

    color: var(--muted);

    font-size: 15px;

    margin-bottom: 17px;
}


.about-content .large-text {
    color: var(--white);

    font-size: 22px;

    line-height: 1.4;

    margin-bottom: 25px;
}


.about-highlights {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 15px;

    margin-top: 45px;
}


.about-highlights > div {
    padding-top: 18px;

    border-top: 1px solid var(--line);
}


.about-highlights strong {
    color: var(--accent);

    font-size: 11px;
}


.about-highlights h3 {
    margin-top: 9px;

    font-family: "Space Grotesk", sans-serif;

    font-size: 15px;
}


.about-highlights p {
    margin-top: 7px;

    color: var(--muted);

    font-size: 11px;
}


/* ================= WHY ================= */

.why-section {
    background: #0a0c10;

    max-width: none;

    padding-left: max(30px, calc((100vw - 1120px) / 2));

    padding-right: max(30px, calc((100vw - 1120px) / 2));
}


.why-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 15px;

    margin-top: 60px;
}


.why-card {
    min-height: 270px;

    padding: 27px;

    border: 1px solid var(--line);

    border-radius: 17px;

    background: var(--card);

    transition: .3s;
}


.why-card:hover {
    transform: translateY(-5px);

    border-color: #4d5463;
}


.why-number {
    color: var(--accent);

    font-family: "Space Grotesk", sans-serif;

    font-size: 12px;
}


.why-card h3 {
    margin-top: 75px;

    font-family: "Space Grotesk", sans-serif;

    font-size: 20px;
}


.why-card p {
    margin-top: 10px;

    color: var(--muted);

    font-size: 12px;
}


/* ================= SERVICES ================= */

.services {
    border-bottom: 1px solid var(--line);
}


.services-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 15px;

    margin-top: 65px;
}


.service-card {
    min-height: 450px;

    padding: 30px;

    border: 1px solid var(--line);

    border-radius: 18px;

    background: var(--card);

    transition: .3s;
}


.service-card:hover {
    transform: translateY(-6px);

    border-color: #505766;
}


.service-card.featured {
    background:
        linear-gradient(
            145deg,
            #151b12,
            #10130f
        );

    border-color: #37432d;
}


.service-top {
    display: flex;

    justify-content: space-between;

    align-items: center;
}


.service-number {
    color: #686e7b;

    font-size: 10px;

    letter-spacing: 1px;
}


.service-symbol {
    width: 43px;
    height: 43px;

    display: grid;

    place-items: center;

    border-radius: 12px;

    color: var(--accent);

    background: var(--accent-dark);

    font-size: 12px;

    font-weight: 700;
}


.service-card h3 {
    margin-top: 28px;

    font-family: "Space Grotesk", sans-serif;

    font-size: 22px;

    line-height: 1.15;
}


.service-card > p {
    min-height: 68px;

    margin-top: 13px;

    color: var(--muted);

    font-size: 13px;
}


.service-card ul {
    list-style: none;

    margin-top: 18px;

    padding-top: 17px;

    border-top: 1px solid var(--line);
}


.service-card li {
    position
