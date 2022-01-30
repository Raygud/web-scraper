// Web Scrapping using Node js and Cherio Request
// npm install cherio
// npm install request

// Imports 
const cherio = require('cherio');
const request = require('request');
const fs = require('fs');
const { Console } = require('console');
const CrawlPaths = []
i = 0

// Create a Write Stream 
var WriteStream  = fs.createWriteStream("ImagesLink.txt", "UTF-8");



request('http://runi01615.web.techcollege.dk/', (err, resp, html)=>{

    if(!err && resp.statusCode == 200){
        console.log("Request was successful ");
        
        // Define Cherio or $ Object 
        const $ = cherio.load(html);

        $("*").each((index, SubPages)=>{

            var SubPages = $(SubPages).attr("href");
            var baseUrl = 'http://runi01615.web.techcollege.dk';
            var Links = baseUrl + SubPages;
            WriteStream.write(Links);
            WriteStream.write("\n");
            if(SubPages !== undefined && !SubPages.includes("https".toLocaleLowerCase()) && !SubPages.includes("http".toLocaleLowerCase()))
            {
                CrawlPaths.push(baseUrl+ SubPages)
                console.log(CrawlPaths)
                i++
                console.log(i)
            }
            else if(SubPages !== undefined && SubPages.includes("https".toLocaleLowerCase()) && SubPages.includes("http".toLocaleLowerCase())){
                console.log("external Links: " + SubPages)
            }
            if(i == 2){
                
            }

            else{
                
            }
            
            
        });

    }
    else{
        console.log("Request Failed ");
    }


});

