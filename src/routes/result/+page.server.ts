import puppeteer from 'puppeteer';

export async function load({ fetch, url }) {
	const username = url.searchParams.get('username');
    const password = url.searchParams.get('password');
	// const requesturl = `http://localhost:3000/scrape?username=${username}&password=${password}`;
    // console.log(requesturl)

	try {
		const browser = await puppeteer.launch({
            ignoreHTTPSErrors: true,
        });

        const page = await browser.newPage();

        await page.goto('https://posnwu.xyz/');

        await page.type('#login', username);
        await page.type('#password', password);

        await Promise.all([
            page.click('input[type=submit]'),
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
        ]);

        const size = await page.evaluate(() => {
            const size = Array.from(document.querySelectorAll('body > div.row > div.col-md-7 > table > tbody > tr')).length;
            return size;
        });

        let score = 0, completed = 0, done = 0;

        for (let i = 1; i <= size; i++) {
            let element = await page.waitForXPath(`/html/body/div[2]/div[1]/table/tbody/tr[${i}]/td[4]`);
            let text = await page.evaluate((element) => element.textContent, element);

            if (text.length > 80) {
                let elements = await page.waitForXPath(`/html/body/div[2]/div[1]/table/tbody/tr[${i}]/td[4]/text()[4]`);
                let point = await page.evaluate((element) => parseInt(element.textContent.replace(/\D/g, "")), elements);
                console.log(point);

                if (point == 100) completed++ && done++; else done++;
                if (point == 0) done++;
                
                score += point;
            }
        }

        await browser.close();

        let percent = (score / size).toFixed(2);
        let fullScorePercent = percent;
        let fullScoreCount = completed;
        let submittedCount = done;
        let currentScore = score

        let totalScore = size * 100;

        let questionCount = size;

		// const res = await fetch(requesturl);
		// if (!res.ok) {
		// 	throw new Error('Failed to fetch data');
		// }
		// const data = await res.json();
		// console.log(data);
		// return data;
		let data = {
			fullScorePercent,
			fullScoreCount,
			submittedCount,
			currentScore,
			totalScore,
			questionCount
		}
		return data;
	} catch (error) {
		console.error(error);
		return {
			status: 500,
			error: new Error('Internal Server Error')
		};
	}
}


export const actions = {
	async post({ request, params, resolve }) {
		const res = await fetch(`http://localhost:3000/scrape?username=${params.username}&password=${params.password}`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await res.json();
		return resolve(data);
	}
};