// Web Scrapping using Node js and Cherio Request
// npm install cherio
// npm install request

// Imports 
const cherio = require('cherio');
const request = require('request');
const fs = require('fs');
const { Console } = require('console');
const CrawlPaths = ["INTERNAL LINKS:"]
var ScrapedIndex = "http://runi01615.web.techcollege.dk/"
i = 0
o = 0
// Create a Write Stream 




request(ScrapedIndex + '/', (err, resp, html)=>{
a="a"
var WriteStream  = fs.createWriteStream("ScrapedItems" + o++ + ".txt", "UTF-8");


    if(!err && resp.statusCode == 200){
        console.log("Request was successful ");
        console.log(resp.statusCode + " " + resp.statusMessage)

        
        // Define Cherio or $ Object 
        const $ = cherio.load(html);

        $("*").each((index, SubPages)=>{
            var SubPages = $(SubPages).attr("href");
            var baseUrl = ScrapedIndex;
            var Links = baseUrl + SubPages;
            if(SubPages !== undefined && !SubPages.includes("https".toLocaleLowerCase()) && !SubPages.includes("http".toLocaleLowerCase()))
            {
                if(!CrawlPaths.includes(Links)){
                    CrawlPaths.push(Links)
                }
            }
            else if(SubPages !== undefined && SubPages.includes("https".toLocaleLowerCase()) && SubPages.includes("http".toLocaleLowerCase())){
                console.log("external Links: " + SubPages)
            }

            else{
                
            }
            
            
        });

    }
    else{
        console.log("Request Failed ");
        console.log(resp.statusCode + " " + resp.statusMessage)

    }


a = "b"
if (a=="b")
{
    console.log("Scraping done..")
    console.log(resp.statusCode + " " + resp.statusMessage)

    console.log(CrawlPaths)
    
    
 for (let i = 1; i < CrawlPaths.length; i++) {
 console.log(i)
 

request((CrawlPaths[i]), (err, resp, html)=>{
a="a"
    if(!err && resp.statusCode == 200){
        console.log("Request for " + CrawlPaths[i] + " was successful ");
        
        // Define Cherio or $ Object 
        const $ = cherio.load(html);

        $("*").each((index, SubPages)=>{

            var SubPages = $(SubPages).attr("class");
            var baseUrl = CrawlPaths[i];
            var Links = baseUrl + SubPages;
            if(SubPages != undefined)
            {
                console.log(i + " SCRAPE " + SubPages)
                WriteStream.write(SubPages + "\n")
            }

            else{
                
            }
            
            
        });

    }
    else{
        console.log("Request for " + CrawlPaths + " Failed ");
        console.log(resp.statusCode + " " + resp.statusMessage)

    }


a = "b"
if (a=="b")
{
    console.log("Scraping done..")
    console.log(resp.statusCode + " " + resp.statusMessage)
}

});
}
}
});
