import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    render() {
        let articles = [
            {
                "source": {
                    "id": null,
                    "name": "ESPN"
                },
                "author": "Todd Archer",
                "title": "Cowboys' Mike McCarthy laments OT penalties, not 4th-down call - ESPN",
                "description": "Mike McCarthy stood by his decision to go for it on fourth down instead of attempting a 53-yard field goal in overtime. His kicker, Brett Maher, agreed: \"We're here to win games. I think that was a good call.\"",
                "url": "https://www.espn.com/nfl/story/_/id/35023775/cowboys-mike-mccarthy-laments-penalties-ot-not-4th-decision",
                "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1114%2Fr1090974_1296x729_16%2D9.jpg",
                "publishedAt": "2022-11-14T04:01:29Z",
                "content": "GREEN BAY, Wis. -- Cowboys coach Mike McCarthy knows the ins and outs of Lambeau Field better than anybody having coached for parts of 13 seasons with the Green Bay Packers.\r\nFacing fourth-and-3 from… [+3065 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Zelenskiy says investigators document more than 400 Russian war crimes in Kherson - Reuters",
                "description": "Ukrainian President Volodymyr Zelenskiy has accused Russian soldiers of committing war crimes and killing civilians in Kherson, parts of which were retaken by Ukraine's army last week after Russia pulled out.",
                "url": "https://www.reuters.com/world/europe/donetsk-battles-are-hell-ukraines-zelenskiy-says-kherson-mops-up-2022-11-13/",
                "urlToImage": "https://www.reuters.com/resizer/ayhdoxkd-OwYBQDBlPSTLDAYuEY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7GFT6KU4S5I4JGT5CDRPKJ5OEI.jpg",
                "publishedAt": "2022-11-14T03:38:00Z",
                "content": "KHERSON, Ukraine, Nov 14 (Reuters) - Ukrainian President Volodymyr Zelenskiy has accused Russian soldiers of committing war crimes and killing civilians in Kherson, parts of which were retaken by Ukr… [+5409 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Ben Morse",
                "title": "Tom Brady makes history as Tampa Bay Buccaneers win first-ever regular season game in Germany - CNN",
                "description": "Tom Brady has become well-accustomed at making history over his long and illustrious NFL career. And on Sunday, the 45-year-old set more historic marks from all the way across the globe.",
                "url": "https://www.cnn.com/2022/11/13/sport/brady-tampa-bay-buccaneers-seattle-seahawks-munich-spt-intl/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221113125625-01-buccaneers-seahawks-nfl-1113.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2022-11-14T03:10:00Z",
                "content": "Tom Brady has become well-accustomed at making history over his long and illustrious NFL career. And on Sunday, the 45-year-old set more historic marks from all the way across the globe. \r\nBradys Tam… [+2632 chars]"
            },
            {
                "source": {
                    "id": "al-jazeera-english",
                    "name": "Al Jazeera English"
                },
                "author": "Al Jazeera",
                "title": "Turkish police arrest suspect in Istanbul bombing - Al Jazeera English",
                "description": "Interior minister says police have arrested ‘the person who left the bomb’ that killed eight people in central Istanbul.",
                "url": "https://www.aljazeera.com/news/2022/11/14/turkish-police-arrest-suspect-in-istiklal-bombing",
                "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/11/AP22317684102856.jpg?resize=1920%2C1440",
                "publishedAt": "2022-11-14T03:06:17Z",
                "content": "Turkish police have arrested a suspect for the bombing in central Istanbul that left at least eight people dead and 81 others wounded, according to an official.\r\nInterior Minister Suleyman Soylu told… [+3282 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Four found dead near University of Idaho; Moscow police investigating - The Seattle Times",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiggFodHRwczovL3d3dy5zZWF0dGxldGltZXMuY29tL3NlYXR0bGUtbmV3cy9ub3J0aHdlc3QvZm91ci1mb3VuZC1kZWFkLW5lYXItdW5pdmVyc2l0eS1vZi1pZGFoby1tb3Njb3ctcG9saWNlLWludmVzdGlnYXRpbmctaG9taWNpZGUv0gEA?oc=5",
                "urlToImage": null,
                "publishedAt": "2022-11-14T02:22:13Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "menshealth.com"
                },
                "author": "Evan Romano",
                "title": "'Yellowstone' Season 5: Who Does Country Star Lainey Wilson Play? - Men's Health",
                "description": "There's a good reason she looked familiar.",
                "url": "https://www.menshealth.com/entertainment/a41940246/yellowstone-season-5-lainey-wilson/",
                "urlToImage": "https://hips.hearstapps.com/hmg-prod/images/lainey-wilson-yellowstone-1668208504.png?crop=0.8555555555555555xw:1xh;center,top&resize=1200:*",
                "publishedAt": "2022-11-14T01:57:29Z",
                "content": "It was a big week for Lainey Wilson. On Wednesday, the country music star won a pair of the most coveted CMA Awards\r\nNew Artist of the Year and Female Vocalist of the Yearand on Sunday, she made her … [+2558 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "YouTube"
                },
                "author": null,
                "title": "Republicans Assign Blame After Failing To Capture A Senate Majority - NBC News",
                "description": "Some Republicans are directly accusing former President Trump of hurting the party’s chances in the midterms by endorsing weaker candidates in key races like...",
                "url": "https://www.youtube.com/watch?v=FrVrDxddRQg",
                "urlToImage": "https://i.ytimg.com/vi/FrVrDxddRQg/maxresdefault.jpg",
                "publishedAt": "2022-11-14T01:30:06Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Guardian staff reporter",
                "title": "NFL roundup: Tagovailoa and Fields shine as Bills lose thriller to Vikings - The Guardian",
                "description": "Patrick Peterson intercepted Josh Allen with 1:12 left in overtime to finally end a sloppy yet thrilling back-and-forth game between two of the NFL’s best teams",
                "url": "https://www.theguardian.com/sport/2022/nov/13/nfl-roundup-tagovailoa-and-fields-shine-as-bills-lose-thriller-to-vikings",
                "urlToImage": "https://i.guim.co.uk/img/media/4cd6627c5c0497a1ccdfd612040d8a8a86197050/0_109_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7078cbe5a949d538c764996b430693a3",
                "publishedAt": "2022-11-14T00:52:00Z",
                "content": "Patrick Peterson intercepted Josh Allen with 1:12 left in overtime to finally end a sloppy yet thrilling back-and-forth game between two of the NFLs best teams, and the Minnesota Vikings completed th… [+7048 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Asia shares pause as Fed warns against exuberance - Reuters",
                "description": "Asian share markets were taking a breather on Monday after last week's sweeping rally as a top U.S. central banker warned investors against getting carried away over one inflation number, nudging up bond yields and the dollar.",
                "url": "https://www.reuters.com/world/china/global-markets-wrapup-1-pix-graphics-2022-11-14/",
                "urlToImage": "https://www.reuters.com/resizer/wp5tTNuzdbMa94YLnhqNaV21ncs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ICXAGXVFG5OA5FESDDNOUTVO7Y.jpg",
                "publishedAt": "2022-11-14T00:27:00Z",
                "content": "SYDNEY, Nov 14 (Reuters) - Asian share markets were taking a breather on Monday after last week's sweeping rally as a top U.S. central banker warned investors against getting carried away over one in… [+3865 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Action Network"
                },
                "author": "Stuckey",
                "title": "49ers vs Chargers Sunday Night Football Odds, Prediction - The Action Network",
                "description": "Stuckey of the Action Network previews the Week 10 Sunday Night Football game between the Chargers and 49ers.",
                "url": "https://www.actionnetwork.com/nfl/chargers-vs-49ers-odds-picks-prediction-sunday-night-football",
                "urlToImage": "https://images.actionnetwork.com/blog/2022/11/christian-mccaffrey-deebo-samuel.jpg",
                "publishedAt": "2022-11-14T00:04:00Z",
                "content": "If the season ended after last week, the 5-3 Chargers would have had the seventh and final playoff spot in the AFC. However, they only sat one-half game ahead of the Bengals and Patriots, both of who… [+5076 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "David Hollerith",
                "title": "Crypto.com's errant $405M transaction triggers investors after FTX fiasco - Yahoo Finance",
                "description": "Crypto exchange Crypto.com is under the microscope after sending $405 million to the wrong recipient.",
                "url": "https://finance.yahoo.com/news/cryptocom-ftx-fiasco-233855168.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/GzxF1vYyUsb6M3rMLTFnlw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-11/2134ae90-40e2-11ec-bb8f-4ca2d1458de7",
                "publishedAt": "2022-11-13T23:38:55Z",
                "content": "Crypto exchange Crypto.com is under the microscope after sending $405 million to the wrong recipient, raising alarm bells among crypto watchers after the whirlwind unraveling this week of competitor … [+3767 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Susannah Cullinane, Emma Tucker, Alaa Elassar",
                "title": "6 dead after a pair of vintage military aircraft collided at a Texas air show - CNN",
                "description": "A National Transportation Safety Board team is expected to begin investigating Saturday's fatal collision at the Wings Over Dallas airshow when its team arrives at the crash scene later today.",
                "url": "https://www.cnn.com/2022/11/13/us/dallas-air-show-collision-sunday/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221113025547-03-dallas-air-show-collision-sunday.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2022-11-13T23:31:00Z",
                "content": "Six people are dead after two World War II-era military planes collided in midair and crashed at Dallas Executive Airport during an airshow Saturday afternoon, killing all on board,the Dallas County … [+7182 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Phil Mattingly",
                "title": "Biden rides midterm validation into high-stakes meeting with Xi - CNN",
                "description": "Thirty-seven minutes after wrapping up a late-night gala dinner with Asian leaders -- punctuated by plates of wild Mekong lobster and beef saraman -- an aide handed President Joe Biden the phone.",
                "url": "https://www.cnn.com/2022/11/13/politics/midterms-joe-biden-xi-jinping-meeting/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221112044949-01-biden-cambodia-asean-111222.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2022-11-13T22:45:00Z",
                "content": "Thirty-seven minutes after wrapping up a late-night gala dinner with Asian leaders punctuated by plates of wild Mekong lobster and beef saraman an aide handed President Joe Biden the phone. \r\nOn the … [+7817 chars]"
            },
            {
                "source": {
                    "id": "fox-news",
                    "name": "Fox News"
                },
                "author": "Tracy Wright",
                "title": "Adam Sandler leads tributes to Budd Friedman after Improv founder's death at 90: 'Can't thank this man enough' - Fox News",
                "description": "Budd Friedman opened the Improv in Manhattan in 1963 and the Hollywood staple on Melrose in 1974. The comedy club pioneer died in Los Angeles Saturday.",
                "url": "https://www.foxnews.com/entertainment/adam-sandler-leads-tributes-budd-friedman-improv-founder-death-90-cant-thank-this-man-enough",
                "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/11/adam-sandler-budd-friedman.jpg",
                "publishedAt": "2022-11-13T22:15:03Z",
                "content": "Budd Friedman, known for kick-starting the careers of many notable comedians as the founder of the Improv, died on Saturday in Los Angeles. He was 90.\r\nAdam Sandler shared gratitude for getting a cha… [+5137 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Billboard"
                },
                "author": "Paul Grein",
                "title": "Taylor Swift Is Top Winner at 2022 MTV EMAs: Full Winners List - Billboard",
                "description": "Find all the night's biggest winners from the Nov. 13 event, hosted by Rita Ora and Taika Waititi.",
                "url": "https://www.billboard.com/music/awards/2022-mtv-emas-full-winners-list-1235170510/",
                "urlToImage": "https://www.billboard.com/wp-content/uploads/2022/11/taylor-swift-2022-ema-award-billboard-1548.jpg?w=1024",
                "publishedAt": "2022-11-13T22:01:05Z",
                "content": "Taylor Swift was the top winner at the 2022 MTV EMAs, which were held at PSD Bank Dome in Düsseldorf, Germany, on Sunday (Nov. 13). Swift took four awards — best artist, best video, best pop and best… [+5168 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Ukrainska Pravda",
                "title": "CNN and Sky News journalists stripped of their accreditation for reporting from Kherson - Yahoo News",
                "description": "Several journalists working for foreign media have been stripped of their accreditation for reporting from liberated Kherson. Source: Detector Media; General...",
                "url": "https://news.yahoo.com/cnn-sky-news-journalists-stripped-214341036.html",
                "urlToImage": "https://media.zenfs.com/en/ukrayinska_pravda_articles_451/0f5855d707aca13b05d28e31d71f89bb",
                "publishedAt": "2022-11-13T21:43:41Z",
                "content": "Several journalists working for foreign media have been stripped of their accreditation for reporting from liberated Kherson.\r\nSource:Detector Media; General Staff of the Armed Forces of Ukraine\r\nDet… [+2974 chars]"
            },
            {
                "source": {
                    "id": "fortune",
                    "name": "Fortune"
                },
                "author": "Steve Mollman",
                "title": "One of the greatest financial writers alive has been embedded with FTX’s Sam Bankman-Fried for six months and has a book on the way - Fortune",
                "description": "Michael Lewis’ next book is about crypto's disgraced FTX founder Sam Bankman-Fried, according to The Ankler.",
                "url": "https://fortune.com/2022/11/13/michael-lewis-ftx-sam-bankman-fried-crypto-book-movie-deal/",
                "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/11/GettyImages-1357912815-e1668372671470.jpg?resize=1200,600",
                "publishedAt": "2022-11-13T20:58:00Z",
                "content": "Michael Lewis next book is about FTX founder Sam Bankman-Fried, and the best-selling author has been embedded with the disgraced crypto mogul for the past six months. Thats according to reporting fro… [+2845 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "New York Post"
                },
                "author": "Fox News",
                "title": "Nick Cannon, soon to be father of 12, talks yearly multi-million child support bill - New York Post ",
                "description": "A report claimed that Nick Cannon “nearly paid $3 million a year in child support,” however the musician and actor told The Neighborhood Talk that the actual number is much larger.",
                "url": "https://nypost.com/2022/11/13/nick-cannon-soon-to-be-father-of-12-talks-child-support-bill/",
                "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/11/nick-cannon-soon-to-be-father-of-12-talks-multi-million-child-support-homepage.jpg?quality=75&strip=all&w=1024",
                "publishedAt": "2022-11-13T20:49:00Z",
                "content": "Amidst news that Nick Cannon’s brood is continuing to expand, with the TV host announcing Alyssa Scott is pregnant with his soon-to-be 12th child, the 42-year-old father is talking about the hefty ch… [+1608 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "New York Post"
                },
                "author": "MaryAnn Martinez",
                "title": "Migrants use El Paso airport as shelter amid surge, end of NYC bussing - New York Post ",
                "description": "A relentless surge of immigrants through El Paso, Texas, threatens to overwhelm its airport now that the city closed a welcome center and stopped bussing migrants to cities like New York.",
                "url": "https://nypost.com/2022/11/13/migrants-use-el-paso-airport-as-shelter-amid-surge-end-of-nyc-bussing/",
                "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/11/el-paso-airport-migrants-comp.jpg?quality=75&strip=all&w=1024",
                "publishedAt": "2022-11-13T20:22:00Z",
                "content": "A relentless surge of immigrants crossing the border into El Paso, Texas, is threatening to overwhelm its airport — with stranded migrants encamped on the floor since the city shuttered a welcome cen… [+3333 chars]"
            },
            {
                "source": {
                    "id": "mashable",
                    "name": "Mashable"
                },
                "author": "Tim Marcin",
                "title": "Elon Musk has fired even more Twitter workers - Mashable",
                "description": "More people gone.",
                "url": "https://mashable.com/article/elon-musk-fires-more-twitter-workers",
                "urlToImage": "https://helios-i.mashable.com/imagery/articles/01acQVmwB9YON14V5mN9UPY/hero-image.fill.size_1200x675.v1668368639.jpg",
                "publishedAt": "2022-11-13T20:12:06Z",
                "content": null
            }
        ]
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItems />
                    </div>
                    <div className="col-md-4">
                        <NewsItems />
                    </div>
                    <div className="col-md-4">
                        <NewsItems />
                    </div>
                </div>
            </div>
        )
    }
}

export default News