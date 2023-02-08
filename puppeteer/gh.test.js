let page;

afterEach(() => {
  page.close();
});

describe("Github/team page tests", () => {
  beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});



  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForTimeout(2000);
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  }, 100000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 60000);
});

describe("Github page test", () => {
  beforeEach(async() => { 
  page = await browser.newPage();
  await page.goto("https://github.com/features");
});

test("Should open Codespaces title", async () => {
  const firstLink = await page.$("picture");
    await firstLink.click();
    await page.waitForSelector("a");
    await page.waitForTimeout(2000); 
    const title2 = await page.title();
    expect(title2).toEqual("GitHub Codespaces · GitHub");
  },100000);

  test("Features GitHub ", async () => {
    const featuresLink = await page.$("a");
    await featuresLink.click();
    await page.waitForSelector("h1");
    await page.waitForTimeout(5000);
    const title2  = await page.title();
    expect(title2).toContain("Features | GitHub · GitHub") 
  },6000);

});

test("Open page with title Join GitHub", async() => {
  page = await browser.newPage();
  await page.goto(
    "https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2Ffeatures%2Fcodespaces&source=header"
    );
    const signup = await page.title();
    expect(signup).toEqual("Join GitHub · GitHub");
},6000);
