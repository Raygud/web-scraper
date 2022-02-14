### Web Scraper too capture SVGS(Or realy any content of a website. NOTE is only set too go one layer deep)
Libraries:
<br/>[require.js](https://requirejs.org/)
<br/>[cheerio.js](https://cheerio.js.org/)
<br/>[node.js](https://nodejs.org/en/)

#Npm installs
<br/> ```npm i requirejs fds
sdf
sa
fsd
f
sconsole.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received(200, 404 etc)
  console.log('body:', body); // Print the HTML for the Crawled Page.

  if(!err && resp.statusCode == 200)

  this code bit says that if there is no error and our status code is 200(The HTTP 200 OK success status response code indicates that the request has succeeded) then do something```
<br/> ```npm i cheerio```
<br/> ```npm install -g npm```

Pseudo code:

Go into desired website -> Find all links -> Sorts links into external and internal links  (External beings links starting with https Or www) -> put all internal links into an array ->  loop trough all internal links arrays and find desires data.

  _______________________________________________

<span style="color:blue">*Require("X")*</span>.imports the chosen moduels(equal too import in python or include in C) 

  _______________________________________________

request((CrawlPaths[i]), (err, resp, html):
Request is the simplest way to make a http call.

  _______________________________________________

console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received(200, 404 etc)
  console.log('body:', body); // Print the HTML for the Crawled Page.

  if(!err && resp.statusCode == 200)

  this code bit says that if there is no error and our status code is 200(The HTTP 200 OK success status response code indicates that the request has succeeded) then do something.

  _______________________________________________

        const $ = cherio.load(html);
         $ is a variable.


        You can load markup in cheerio using the cheerio.load method. The method takes the markup as an argument.

_______________________________________________


        $("*").each((index, SubPages) 

        Subpages is a variable for the attribute you would like too retrieve(href,id,class etc)
        * is a universal selector since im looking for all links on the website im using a universal selector, i could also only look into specific elements (h1,span,a etc)


Iterates over a cheerio object, executing a function for each matched element.

_______________________________________________

            if(SubPages !== undefined && !SubPages.includes("https".toLocaleLowerCase()) && !SubPages.includes("http".toLocaleLowerCase()))

            this statement requires that SubPages includes a valid link(!= undefined) 

            (!SubPages.includes("https/www.toLocaleLowerCase())) this statement
            filters all external links away from our array

            if(!CrawlPaths.includes(Links)) This statement makes sure that we dont have duplicate links



_______________________________________________
=======
