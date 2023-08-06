require('fs');
const vars = require('./vars.js');
const {
    scrollPageToBottom
} = require('puppeteer-autoscroll-down');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const {
    threeDots
} = require("./vars");
const ca = require("moment/locale/ca");
async function dlt() {


    puppeteer.use(StealthPlugin())
    const browser = await puppeteer.launch({
        headless: false,
        args: [

            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-infobars',
            '--window-position=0,0',
            '--ignore-certifcate-errors',
            '--ignore-certifcate-errors-spki-list',
            '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
        ],
    })
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com');
    await page.waitForSelector(vars.usernamefield);
    await page.type(vars.usernamefield, vars.username);
    await page.type(vars.passwordfield, vars.password);
    await page.click(vars.loginbutton);
    await page.waitForNavigation({
        timeout: 300000
    });

    await page.goto(vars.chatbox, {
        timeout: 60000,
        waitUntil: 'domcontentloaded'
    });

    await page
        .waitForSelector(vars.notiButtonSelector, {
            timeout: 300000
        })
        .then(() => page.click(vars.notiButtonSelector));
    const selector = 'body > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div > div > div > div >div';
    const kdmv = await page.waitForSelector(selector);
    let i = 0;


    while (true) {
        const infiniteScroll = async (page) => {
            while (true) {
                previousHeight = await page.evaluate((selector) => document.querySelector(selector).scrollHeight, 'body > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div > div > div > div >div');
                await page.evaluate((selector) => {
                    const scrollDiv = document.querySelector(selector);
                    scrollDiv.scrollTop = -scrollDiv.clientHeight;
                }, 'body > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div > div > div > div >div');
                const elements = await page.$$('div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x1xzczws.x6ikm8r.x1rife3k.x1n2onr6.xh8yej3 div.x1n2onr6 div.x78zum5.xdt5ytf.x1n2onr6:has(span.xzpqnlu.x1hyvwdk.xjm9jq1.x6ikm8r.x10wlt62.x10l6tqk.x1i1rx1s):has(div.x78zum5.x1iyjqo2.xs83m0k.xeuugli):has(div.x6prxxf.x1fc57z9.x1yc453h.x126k92a.xzsf02u):has(div[role="button"][aria-label="Double tap to like"].x1qjc9v5.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x78zum5.xdt5ytf.x2lah0s.xk390pu.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.xggy1nq.x11njtxf');
                console.log(elements);
                for (let element of elements) {
                    await element.evaluate(el => el.remove());
                }
                try {
                    const timeout = 100;
                    const timeoutPromise = new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(); // Resolve the promise after the timeout duration
                        }, timeout);
                    });
                    const top = await Promise.race([
                        page.waitForSelector('span.x1lliihq.x1plvlek.xryxfnj.x1n2onr6.x193iq5w.xeuugli.x1fj9vlw.x13faqbe.x1vvkbs.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x1i0vuye.xvs91rp.xo1l8bm.x1roi4f4.x2b8uid.x1tu3fi.x3x7a5m.x10wh9bi.x1wdrske.x8viiok.x18hxmgj'),
                        timeoutPromise, // Use the timeout promise
                    ])
                    if (top) {
                        break
                    }
                } catch (TimeoutError) {}
                console.log(previousHeight)


                if (previousHeight > 100000 + i) {
                    break
                }

                await new Promise((resolve) => setTimeout(resolve, 100));
            }
            console.log(previousHeight)
        }

        await infiniteScroll(page);
        const texts = await page.$$('div.x6prxxf.x1fc57z9.x1yc453h.x126k92a.x14ctfv');

        for (let text of texts) {
            try {
                try {
                    try {
                        try {
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            await text.hover();
                            const threeDots = await page.waitForSelector(vars.threeDots, {
                                timeout: 300
                            });
                            await threeDots.click();
                            await page.waitForTimeout(100);
                            const unsend = await page.waitForXPath(vars.unsend);
                            await unsend.click();
                            await page.waitForTimeout(100);
                            await page.locator('div[role="dialog"]',{
                                timeout: 300
                            });
                            const button = await page.waitForXPath('//button[text()=\'Unsend\']',{
                                timeout: 300
                            });
                            await button.click();
                            await page.waitForTimeout(100);
                            await new Promise((resolve) => setTimeout(resolve, 500));
                        } catch (error) {
                            if (error.message === 'Node is either not clickable or not an HTMLElement' ||
                                error.message === 'Error: Node is detached from document' ||
                                error.message === 'Node is detached from document') {
                                console.log('Skipping text.');
                                console.log(error.message);
                                continue;
                            } else {
                                throw error;
                            }
                            continue;
                        }
                    } catch (e) {
                        continue;
                    }
                } catch (Error) {
                    continue
                }
            } catch (TimeoutError) {
                continue
            }

        }
        const images = await page.$$('div.x78zum5.x1iyjqo2.xs83m0k.xeuugli.x15zctf7');
        for (let image of images) {
            try {
                try {
                    try {
                        try {
                            await image.hover();
                            await image.hover()
                            await image.hover()
                            await image.hover()
                            await image.hover()
                            await image.hover()
                            await image.hover()
                            await image.hover()
                            await image.hover()
                            await image.hover()
                            await image.hover()
                            await image.hover()
                            await image.hover()
                            const threeDots = await page.waitForSelector(vars.threeDots, {
                                timeout: 300
                            });
                            await threeDots.click();
                            await page.waitForTimeout(100);
                            const unsend = await page.waitForXPath(vars.unsend);
                            await unsend.click();
                            await page.waitForTimeout(100);
                            await page.locator('div[role="dialog"]',{
                                timeout: 300
                            });
                            const button = await page.waitForXPath('//button[text()=\'Unsend\']',{
                                timeout: 300
                            });
                            await button.click();
                            await page.waitForTimeout(100);
                            await new Promise((resolve) => setTimeout(resolve, 500));
                        } catch (error) {
                            if (error.message === 'Node is either not clickable or not an HTMLElement' ||
                                error.message === 'Error: Node is detached from document' ||
                                error.message === 'Node is detached from document') {
                                console.log('Skipping text.');
                                console.log(error.message);
                                continue;
                            } else {
                                throw error;
                            }
                            continue;
                        }
                    } catch (e) {
                        continue;
                    }
                } catch (Error) {
                    continue;
                }
            } catch (TimeoutError) {
                continue;

            }
        }

        i += 5000;
    }
}

dlt();
