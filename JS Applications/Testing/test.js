import { chromium } from "playwright-chromium";
import { expect } from "chai";

/**
* @type {import('playwright-chromium').BrowserServer}
*/
let browser;
/**
* @type {import('playwright-chromium').Page}
*/
let page;

describe('Book-library', async function(){
    this.timeout(60000);

    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it ('load books', async () => {
        await page.goto('http://127.0.0.1:5500/04.Book-library/index.html');
        await page.click('text=load all books');
        const tbody = await page.evaluate(() => {
            return document.querySelectorAll('tbody tr').length;
        });
        expect(tbody).to.equal(3);
    });

    it ('add book', async () => {
        await page.goto('http://127.0.0.1:5500/04.Book-library/index.html');
        await page.fill('input[name="title"]', 'Test title');
        await page.fill('input[name="author"]', 'Test author');
        await page.click('text=Submit');
        await page.click('text=load all books');
        const [titleContent, authorContent] = await page.evaluate(() => {
            const trs = document.querySelectorAll('tbody tr')
            const tr = trs[trs.length - 1];
            const title = tr.querySelectorAll('td')[0].textContent.trim();
            const author = tr.querySelectorAll('td')[1].textContent.trim();
            return [title, author];
        });
        expect(titleContent).to.equal('Test title');
        expect(authorContent).to.equal('Test author');
    });

    it ('edit book', async () => {
        await page.goto('http://127.0.0.1:5500/04.Book-library/index.html');
        await page.click('text=load all books');
        await page.click('text="Edit"');
        await page.fill('input[name="title"]', 'EDIT');
        await page.click('text=Save');
        await page.click('text=load all books');
        const [titleContent, authorContent]  = await page.evaluate(() => {
            const tr = document.querySelector('tbody tr');
            const title = tr.querySelectorAll('td')[0].textContent.trim();
            const author = tr.querySelectorAll('td')[1].textContent.trim();
            return [title, author];
        });
        expect(titleContent).to.equal('EDIT');
        expect(authorContent).to.equal('J.K.Rowling');
    });

    it ('delete book', async () => {
        await page.goto('http://127.0.0.1:5500/04.Book-library/index.html');
        await page.click('text=load all books');
        await page.locator('text="Delete" >> nth=3').click();
        await page.click('text=load all books');
        const leftTrs = await page.evaluate(() => {
            const left = document.querySelectorAll('tbody tr').length;
            return left;
        });
        expect(leftTrs).to.equal(3);
    })
})

// describe('Messenger', async function(){
//     this.timeout(60000);

//     before(async () => { browser = await chromium.launch(); });
//     after(async () => { await browser.close(); });
//     beforeEach(async () => { page = await browser.newPage(); });
//     afterEach(async () => { await page.close(); });

//     it('load messages', async () => {
//         await page.goto('http://127.0.0.1:5500/01.Messenger/index.html');
//         await page.click('text=refresh');
//         const content = await page.textContent('textarea');
//         expect(content).to.contain('Spami: Hello, are you there?');
//         expect(content).to.contain('Spami: Hello, George nice to see you! :)))');
//     });
//     it ('send message', async () => {
//         await page.goto('http://127.0.0.1:5500/01.Messenger/index.html');
//         await page.fill('input[name="author"]', 'Valyo');
//         await page.fill('input[name="content"]', 'Test message!');
//         await page.click('text=Send');
//         await page.click('text=refresh');
//         const content = await page.textContent('textarea');
//         expect(content).to.contain('Valyo: Test message!');
//     })
// })