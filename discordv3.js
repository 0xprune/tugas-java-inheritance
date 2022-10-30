const { executablePath } = require('puppeteer');
const ptr = require('puppeteer');
const delay = require('delay');
const chalk = require('chalk');
const moment = require('moment');
 
function random_item(kata2)
{
 
return kata2[Math.floor(Math.random()*kata2.length)];
 
}
 
var kata2 = [
    "Tetap semangattt kawand, para pejuang OG",
    "Lagi apa kawand? jangan lupa makan heyy",
    "Guyss jangan sampai lewat ni project, yukk gass",
    "Banggg lg apa? ayokk semangat pushnya",
    "Jangan lupa makan euyy, push mulu ntr tipes",
    "Ngopi dulu bangg, biar kita tetap kuattt"
            ];
 
 
function random_item(kata1)
{
 
return kata1[Math.floor(Math.random()*kata1.length)];
 
}
 
var kata1 = [
    "I'll support this project, lesgooo Swanlana.",
    "Keep support and shilling this project guys",
    "Swanlana goesss to moon, letsgooo",
    "Swanlana is most i love project. How about u guys?",
    "Come on, dont miss it. Swanlana the best",
    "We will goes the bigger community, right?"
            ];
 
(async() => 
    {
 
        const width = 1200
         const height = 700
 
        const browser = await ptr.launch({
            headless: false,
            timeout : 99999999,
            defaultViewport: {
                width,
                height
            }
        });
        const page = await browser.newPage();
 
        await page.goto('https://discord.com/channels/872896252638019605/872911192820162650',{waitUntil: 'load'});
        var readlineSync = require('readline-sync');
        var cekip = readlineSync.question(chalk.yellow(`[${(moment().format('HH:mm:ss'))}] ENTER KALO SUDAH LOGIN `));
 
 
       for (i = 1;i < 100; i++)
        {
            await page.bringToFront()
 
            const comment ="#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > div > div.content-98HsJk > div.chat-3bRxxu > div.content-yTz4x3 > main > form > div:nth-child(1) > div > div > div.scrollableContainer-2NUZem.webkit-HjD9Er > div > div.textArea-12jD-V.textAreaSlate-1ZzRVj.slateContainer-3Qkn2x > div.markup-2BOw-j.slateTextArea-1Mkdgw.fontSize16Padding-3Wk7zP > div"
            console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}] Memulai Comment dichannel`))
            await page.goto('https://discord.com/channels/872896252638019605/872911192820162650',{waitUntil : 'load'})
 
            await page.waitForSelector(comment,{timeout : 99999999})
            await page.type(comment,random_item(kata1))
            await delay(4000)
            await page.keyboard.press('Enter')
            await delay(3000)
            console.log(chalk.greenBright(`[${(moment().format('HH:mm:ss'))}] Success Comment di General `))
 
            await page.goto('https://discord.com/channels/872896252638019605/888118378571640885',{waitUntil : 'load'})
            await page.waitForSelector(comment,{timeout : 99999999})
            await page.type(comment,random_item(kata2))
            await delay(4000)
            await page.keyboard.press('Enter');
            await delay(3000)
            console.log(chalk.greenBright(`[${(moment().format('HH:mm:ss'))}] Success Comment di Indonesia `))
 
            await page.goto('https://discord.com/channels/872896252638019605/888119111299772496',{waitUntil : 'load'})
            await page.waitForSelector(comment,{timeout : 99999999})
            await page.type(comment,random_item(kata1))
            await delay(4000)
            await page.keyboard.press('Enter');
            await delay(3000)
            console.log(chalk.greenBright(`[${(moment().format('HH:mm:ss'))}] Success Comment di Channel Nigeria `))
 
            await page.goto('https://discord.com/channels/872896252638019605/888472298905018368',{waitUntil : 'load'})
            await page.waitForSelector(comment,{timeout : 99999999})
            await page.type(comment,random_item(kata1))
            await delay(4000)
            await page.keyboard.press('Enter');
            await delay(3000)
            console.log(chalk.greenBright(`[${(moment().format('HH:mm:ss'))}] Success Comment di Channel Persia `))
 
            await page.goto('https://discord.com/channels/872896252638019605/876519747049644092',{waitUntil : 'load'})
            await page.waitForSelector(comment,{timeout : 99999999})
            await page.type(comment,'!rank')
            await delay(4000)
            await page.keyboard.press('Enter');
            await delay(3000)
            console.log(chalk.greenBright(`[${(moment().format('HH:mm:ss'))}] Success Comment di Channel Level `))
 
            await page.goto('https://discord.com/channels/872896252638019605/887748203557031967',{waitUntil : 'load'})
            await page.waitForSelector(comment,{timeout : 99999999})
            await page.type(comment,'-invite')
            await delay(4000)
            await page.keyboard.press('Enter');
            await delay(3000)
            console.log(chalk.greenBright(`[${(moment().format('HH:mm:ss'))}] Success Comment di Channel invite `))
 
            console.log("Tunggu 5 Menit untuk memulai comment")
            await delay(400000)
 
 
        };
 
 
    }
 
)();
 