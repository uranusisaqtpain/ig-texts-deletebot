require('fs');
const vars = require('./vars.js');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const {threeDots} = require("./vars");
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
    await page.waitForNavigation({timeout: 
            60000});

    await page.goto(vars.chatbox, {timeout: 60000, waitUntil: 'domcontentloaded'});

    await page
        .waitForSelector(vars.notiButtonSelector)
        .then(() => page.click(vars.notiButtonSelector));
    const selector = 'body > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div > div > div > div >div';
    const kdmv = await page.waitForSelector(selector);
    while (true) {
        const infiniteScroll = async (page) => {
            let i = 0;
            while (true) {
                i +=5000;
                previousHeight = await page.evaluate((selector) => document.querySelector(selector).scrollHeight, 'body > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div > div > div > div >div');
                await page.evaluate((selector) => {
                    const scrollDiv = document.querySelector(selector);
                    scrollDiv.scrollTop = -scrollDiv.clientHeight;
                }, 'body > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div > div > div > div >div');
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
                    ]);} catch (TimeoutError) {
                }
                // if (top ) {
                //     break
                // }
                if (previousHeight > 300000) {
                    break
                }

                await new Promise((resolve) => setTimeout(resolve, 100));
            }
        }

        await infiniteScroll(page);


        console.log(texts.length)
        const texts = await page.$$('div.x6prxxf.x1fc57z9.x1yc453h.x126k92a.x14ctfv');}

        for (let text of texts) {
            await text.hover()
            try {
                const threeDots = await  page.waitForSelector(vars.threeDots);
                if (threeDots){
                    await text.hover().then(() => page.click(vars.threeDots));
                }
                    } catch (error) {
                    }
                await page.waitForTimeout(100);
                const unsend = await page.waitForXPath(vars.unsend);
                await unsend.click();
                await page.waitForTimeout(100);
                await page.locator('div[role="dialog"]');
                const button = await page.waitForXPath('//button[text()=\'Unsend\']');
                await button.click();
                await page.waitForTimeout(100);
                await new Promise((resolve) => setTimeout(resolve, 500));



        const images = await page.$$('div.x78zum5.x1iyjqo2.xs83m0k.xeuugli.x15zctf7');
        for (let image of images) {
                await image.hover()
                try {
                    const threeDots = await page.waitForSelector(vars.threeDots);
                    if (threeDots){
                        await image.hover().then(() => page.click(vars.threeDots));
                    }
                } catch (error) {
                    continue;
            }
                const threeDots = await page.waitForSelector(vars.threeDots);
                await threeDots.click();
                await page.waitForTimeout(100);

                const unsend = await page.waitForXPath(vars.unsend);
                await unsend.click();
                await page.waitForTimeout(100);

                await page.locator('div[role="dialog"]');
                const button = await page.waitForXPath('//button[text()=\'Unsend\']');
                await button.click();
                await page.waitForTimeout(100);

                await new Promise((resolve) => setTimeout(resolve, 500));






}}}
dlt();



