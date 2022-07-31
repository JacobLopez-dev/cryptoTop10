import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getNewsArticles, resetNews} from '../features/news/newsSlice'
import Particle from '../components/layout/Particle'
import NewsList from '../components/news/NewsList';


function News() {

//   const news = [
//     {
//         "news_url": "https://ambcrypto.com/decoupling-from-bitcoin-btc-will-it-be-good-or-bad-for-doge-its-holders/",
//         "image_url": "https://crypto.snapi.dev/images/v1/0/z/dog-g0634efd7e-1280-e1659270737876-174798.jpg",
//         "title": "Decoupling from Bitcoin [BTC] – Will it be good or bad for DOGE, its holders",
//         "text": "As the broader market continues to sustain its recovery, the likes of Dogecoin are also seeing some growth on the charts. However, growth across the board hasn't been uniform in any way.",
//         "source_name": "AMBCrypto",
//         "date": "Sun, 31 Jul 2022 12:30:37 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "DOGE"
//         ]
//     },
//     {
//         "news_url": "https://cryptodaily.co.uk/2022/07/btc-usd-tests-technical-support-around-23522-sally-ho-technical-analysis-1-august-2022-btc-bitcoin",
//         "image_url": "https://crypto.snapi.dev/images/v1/y/s/bitcoin-dominance-1-174194-174393-174794.jpg",
//         "title": "BTC/USD Tests Technical Support Around 23522: Sally Ho's Technical Analysis 1 August 2022 BTC",
//         "text": "Bitcoin (BTC/USD) looked to regain its recent upside bias early in the Asian session as the pair drifted higher after trading as low as the 23429.71 level during a pullback, representing a test of a legacy price objective around the 23491.23 area that is related to historic buying pressure around the 3858 and 9357.36 areas.  Traders lifted BTC/USD to the 24666 area after Stops were elected above the 24569.43 area, a level that represents an upside price objective related to buying activity that strengthened around the 16892 area.",
//         "source_name": "Crypto Daily",
//         "date": "Sun, 31 Jul 2022 12:00:00 -0400",
//         "topics": [
//             "tanalysis"
//         ],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://cryptopotato.com/40-yearr-high-inflation-surged-another-100bps-in-june-tailwind-for-bitcoin/",
//         "image_url": "https://crypto.snapi.dev/images/v1/b/i/bitcoin-inflation-cover-174791.jpg",
//         "title": "40-Yearr High Inflation Surged Another 100bps in June: Tailwind for Bitcoin?",
//         "text": "Inflation is raging through the U.S. dollar economy. A new print out Friday from the Commerce Department shows it surged sharply again in June.",
//         "source_name": "CryptoPotato",
//         "date": "Sun, 31 Jul 2022 11:23:30 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://tokenpost.com/Bitcoin-is-about-to-enter-into-one-of-its-greatest-bull-markets-9709",
//         "image_url": "https://crypto.snapi.dev/images/v1/z/r/20220731a73f79dcfb732dffc-174789.jpg",
//         "title": "Bitcoin is about to enter into one of its \"greatest bull markets\"",
//         "text": "Bitcoin is beginning to show signs of recovery signs this month with the crypto on track to post a monthly gain of around 19 percent this month. According to a Bloomberg Intelligence strategist believes that the cryptos future price action may be much more bullish than the short-term charts and that BTC is on the verge of one of its greatest bull markets.",
//         "source_name": "Tokenpost",
//         "date": "Sun, 31 Jul 2022 10:21:50 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://u.today/bitcoin-is-at-bottom-bull-cycle-will-begin-november-2023-according-to-this",
//         "image_url": "https://crypto.snapi.dev/images/v1/e/m/image-from-ios20281829-174767.jpg",
//         "title": "Bitcoin Is at Bottom & Bull Cycle Will Begin November 2023, According to This",
//         "text": "Bitcoin is far from new bull cycle, says prominent crypto analyst",
//         "source_name": "UToday",
//         "date": "Sun, 31 Jul 2022 09:36:00 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://cryptopotato.com/2-worrying-signs-that-can-lead-to-btcs-quick-drop-towards-20k-bitcoin-price-analysis/",
//         "image_url": "https://crypto.snapi.dev/images/v1/p/v/bitcoin-backslide-bulljpgw1024-174342-174766.jpg",
//         "title": "2 Worrying Signs That Can Lead to BTC's Quick Drop Towards $20K (Bitcoin Price Analysis)",
//         "text": "The crypto industry is experiencing a prolonged ongoing bear market and is down more than 70% since recording its all-time high during the late months of 2021. However, the recent price action had seen Bitcoin bouncing over 35% since the current bottom recorded in mid-June.",
//         "source_name": "CryptoPotato",
//         "date": "Sun, 31 Jul 2022 09:35:48 -0400",
//         "topics": [
//             "tanalysis"
//         ],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://coingape.com/?p=118512",
//         "image_url": "https://crypto.snapi.dev/images/v1/n/z/liqauted-174497-174755.jpeg",
//         "title": "BTC Under Correction Threat As Inverted Flag Pattern Emerges Again",
//         "text": "Bitcoin's ongoing recovery rally initiated when the price bounced back from the $17708 low. Furthermore, this bull run shows new higher highs and lows within two ascending trend lines, indicating the formation of inverted flag patterns.",
//         "source_name": "Coingape",
//         "date": "Sun, 31 Jul 2022 08:49:00 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://news.bitcoin.com/analysts-brics-currency-meant-to-rival-usd-trump-warns-of-depression-as-kiyosaki-predicts-bond-crash-waits-to-buy-bitcoin-bitcoin-com-news-week-in-review/",
//         "image_url": "https://crypto.snapi.dev/images/v1/b/i/bitcoin-174459-174749.jpg",
//         "title": "Analysts: BRICS Currency Meant to Rival USD, Trump Warns of Depression as Kiyosaki Predicts Bond Crash, Waits to Buy Bitcoin — Bitcoin.com News Week in Review",
//         "text": "BRICS nations have revealed they're “creating an international reserve currency” analysts believe is meant to challenge the U.S. dollar and the International Monetary Fund's Special Drawing Rights (SDR) currency. Further, Donald Trump warns of a depression in the U.S.",
//         "source_name": "Bitcoin",
//         "date": "Sun, 31 Jul 2022 08:00:29 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://u.today/buying-bitcoin-now-is-good-idea-explains-economist",
//         "image_url": "https://crypto.snapi.dev/images/v1/q/x/22229-174735.jpg",
//         "title": "Buying Bitcoin Now Is Good Idea, Explains Economist",
//         "text": "This indicator might help decide when to invest in Bitcoin, according to fund manager",
//         "source_name": "UToday",
//         "date": "Sun, 31 Jul 2022 08:00:00 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://cointelegraph.com/news/bitcoin-due-one-of-greatest-bull-markets-as-july-gains-circle-20",
//         "image_url": "https://crypto.snapi.dev/images/v1/i/q/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmdcvyte0mgm3mjctzmy5zc00y2i2lwe3zmytmzhiodrhnmy1zwiylmpwzw-174728.jpg",
//         "title": "Bitcoin due 'one of greatest bull markets' as July gains circle 20%",
//         "text": "The future for Bitcoin price action may be much more bullish than the short-term charts, says Bloomberg Intelligence's Mike McGlone.",
//         "source_name": "Cointelegraph",
//         "date": "Sun, 31 Jul 2022 07:21:20 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://cryptopotato.com/bitcoin-balance-on-exchange-sees-macro-decline/",
//         "image_url": "https://crypto.snapi.dev/images/v1/p/o/bitcoin-blocks-cover-174724.jpg",
//         "title": "Bitcoin Balance on Exchange Sees Macro Decline",
//         "text": "New data suggest that Bitcoins are continuously leaving exchanges.",
//         "source_name": "CryptoPotato",
//         "date": "Sun, 31 Jul 2022 07:06:28 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://www.fool.com/investing/2022/07/31/why-bitcoin-is-the-first-thing-im-buying-if-we-ent/",
//         "image_url": "https://crypto.snapi.dev/images/v1/p/e/pexels-karolina-grabowska-5980743-1jpgstripalllossy1sharp1ssl1-174460-174745.jpg",
//         "title": "Why Bitcoin Is the First Thing I'm Buying If We Enter a Recession",
//         "text": "Even during a recession, one way to protect your investment portfolio is to buy and HODL Bitcoin.",
//         "source_name": "The Motley Fool",
//         "date": "Sun, 31 Jul 2022 05:30:00 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://bitcoinmagazine.com/culture/bitcoin-education-is-a-way-out-of-oppression-for-ethiopia",
//         "image_url": "https://crypto.snapi.dev/images/v1/o/l/earth-174716.png",
//         "title": "Bitcoin Education Is A Way Out Of Globalist Oppression For Ethiopia",
//         "text": "True to their history as an uncolonized people, Ethiopians are more determined than ever to build sovereign value through principled education and civic action.",
//         "source_name": "Bitcoin Magazine",
//         "date": "Sun, 31 Jul 2022 05:30:00 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://cryptodaily.co.uk/2022/07/uniglo-glo-is-trending-in-tokens-that-could-make-you-a-millionaire-alongside-bitcoin-btc-and-ethereum-eth",
//         "image_url": "https://crypto.snapi.dev/images/v1/k/i/screenshot-2022-07-29-at-163550-174709.png",
//         "title": "Uniglo (GLO) Is Trending In Tokens That Could Make You A Millionaire Alongside Bitcoin (BTC) And Ethereum (ETH)",
//         "text": "If you're looking for that next coin that could make you a millionaire, you're in the right place. Tons of crypto millionaires have been made over the last few years, you've probably heard multiple stories already.",
//         "source_name": "Crypto Daily",
//         "date": "Sun, 31 Jul 2022 05:00:00 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "ETH",
//             "GLO"
//         ]
//     },
//     {
//         "news_url": "https://www.fxempire.com/forecasts/article/top-5-crypto-pairs-to-watch-this-week-btc-etc-op-uni-and-yfi-1081248",
//         "image_url": "https://crypto.snapi.dev/images/v1/o/p/shutterstock-2153066245-9-174710.jpg",
//         "title": "Top 5 Crypto Pairs to Watch This Week: BTC, ETC, OP, UNI, and YFI",
//         "text": "It is a bullish final week of the month, with the crypto market cap on target to end a 3-month losing streak, Several coins look set for another breakout.",
//         "source_name": "FXEmpire",
//         "date": "Sun, 31 Jul 2022 04:48:03 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "ETC",
//             "UNI",
//             "YFI",
//             "OP"
//         ]
//     },
//     {
//         "news_url": "https://cryptopotato.com/weekend-watch-btc-recorded-6-week-high-etc-up-45-weekly-following-buterins-talk/",
//         "image_url": "https://crypto.snapi.dev/images/v1/m/c/shutterstock-2136951113-1-173633-173979-174708.jpg",
//         "title": "Weekend Watch: BTC Recorded 6-Week High, ETC Up 45% Weekly Following Buterin's Talk",
//         "text": "Ever since Vitalik Buterin's suggestion about miners perhaps switching to Ethereum Classic, ETC has soared by almost 50%.",
//         "source_name": "CryptoPotato",
//         "date": "Sun, 31 Jul 2022 04:46:08 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "ETC"
//         ]
//     },
//     {
//         "news_url": "https://en.cryptonomist.ch/2022/07/31/gold-bitcoin-different-store-value-assets/",
//         "image_url": "https://crypto.snapi.dev/images/v1/5/1/bitcoin-oro-1-300x200-174699.jpg",
//         "title": "Gold and Bitcoin: different store of value assets",
//         "text": "Positioning part of one's portfolio in one or more safe-haven assets is certainly key to protecting one's capital",
//         "source_name": "The Cryptonomist",
//         "date": "Sun, 31 Jul 2022 02:00:33 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://coinpedia.org/news/the-global-market-to-enter-recession-how-will-bitcoin-perform/",
//         "image_url": "https://crypto.snapi.dev/images/v1/h/2/bitcoins-price-hits-a-6-week-high-as-market-sustains-short-term-gains-174148-174685.jpeg",
//         "title": "The Global Market To Enter Recession? How Will Bitcoin Perform?",
//         "text": "After the US GDP was released on July 28th, it was learnt that the GDP had fallen around -0.9%. Yet, the US officials had claimed that there is no recession.",
//         "source_name": "CoinPedia",
//         "date": "Sat, 30 Jul 2022 23:38:28 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://coinpedia.org/altcoin/bitcoin-ethereum-ethereum-classic-price-to-see-a-bull-run-amidst-a-pull-back-per-crypto-analyst/",
//         "image_url": "https://crypto.snapi.dev/images/v1/4/g/4gfre2-173672-174687.jpg",
//         "title": "Bitcoin, Ethereum & Ethereum Classic Price To see A Bull Run, Amidst A Pull Back, Per Crypto Analyst",
//         "text": "While the crypto market is struggling between bears and bulls, a well-known crypto trader and analyst expresses his bullish stance for Bitcoin, Ethereum and another altcoin.",
//         "source_name": "CoinPedia",
//         "date": "Sat, 30 Jul 2022 23:32:39 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "ETC",
//             "ETH"
//         ]
//     },
//     {
//         "news_url": "https://ambcrypto.com/why-bitcoin-investors-remain-vulnerable-despite-btcs-5-rally/",
//         "image_url": "https://crypto.snapi.dev/images/v1/a/c/cryptocurrency-ge6e16e936-1280-174683.jpg",
//         "title": "Why Bitcoin investors remain vulnerable despite BTC's 5% rally",
//         "text": "This week was filled with surprises for even those haven't been a part of the crypto niche. Bitcoin [BTC] and other cryptocurrencies continued their climb.",
//         "source_name": "AMBCrypto",
//         "date": "Sat, 30 Jul 2022 23:30:26 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://www.fxempire.com/forecasts/article/bitcoin-btc-fear-greed-index-falls-to-sub-40-on-bitcoin-decline-1081169",
//         "image_url": "https://crypto.snapi.dev/images/v1/b/j/bitcoin-chain-174681.jpg",
//         "title": "Bitcoin (BTC) Fear & Greed Index Falls to sub-40 on Bitcoin Decline",
//         "text": "The Bitcoin Fear & Greed Index fell back on Sunday, with a second consecutive BTC loss leaving the Index on the back foot. The Index trend is bullish, however.",
//         "source_name": "FXEmpire",
//         "date": "Sat, 30 Jul 2022 22:26:46 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://crypto.news/bitcoin-is-hovering-24k-level-end-july-fear/",
//         "image_url": "https://crypto.snapi.dev/images/v1/a/u/bitcoin-dipping-174671.jpg",
//         "title": "Bitcoin is Hovering Near the $24K Level End-July as Sentiment Exits ‘Fear Zone'",
//         "text": "The value of cryptocurrencies has dropped since it peaked at almost $3 trillion last November. As of July 26, the industry's total market cap reverted back above $1 trillion after a deep decline.",
//         "source_name": "Crypto news",
//         "date": "Sat, 30 Jul 2022 21:01:04 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://bitcoinmagazine.com/business/bitcoin-finance-growth-cannabis-industry",
//         "image_url": "https://crypto.snapi.dev/images/v1/7/l/blockchain-advocacy-coalition-sponsors-bill-to-allow-crypto-for-legal-cannabis-tax-174666.jpg",
//         "title": "Bitcoin Can Finance Growth In The Cannabis Industry",
//         "text": "The cannabis industry has many reasons to look to bitcoin as a way to grow and improve relationships with their customers.",
//         "source_name": "Bitcoin Magazine",
//         "date": "Sat, 30 Jul 2022 20:00:00 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://ambcrypto.com/this-is-how-the-crypto-market-especially-btc-and-eth-reacted-amid-latest-fed-hike/",
//         "image_url": "https://crypto.snapi.dev/images/v1/f/0/seedling-ge94fc665e-1280-e1659171974430-174653.jpg",
//         "title": "This is how the crypto market, especially BTC and ETH, reacted amid latest Fed hike",
//         "text": "The Federal Reserve increased the interest rate by a further 0.75% and the crypto markets responded bizarrely. The U.S. interest rates are back to pre-pandemic levels as the battle against inflation rages on.",
//         "source_name": "AMBCrypto",
//         "date": "Sat, 30 Jul 2022 17:30:46 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "ETH"
//         ]
//     },
//     {
//         "news_url": "https://dailyhodl.com/2022/07/30/heres-whats-next-for-bitcoin-btc-ethereum-eth-and-one-altcoin-that-over-exploded-225-top-crypto-trader/",
//         "image_url": "https://crypto.snapi.dev/images/v1/3/a/btc-eth-exploded-200jpgw1024-174646.jpg",
//         "title": "Here's What's Next for Bitcoin (BTC), Ethereum (ETH) and One Altcoin That Over Exploded 225%: Top Crypto Trader",
//         "text": "A widely followed trader is exploring the near-term outlook of the two largest-crypto assets and one altcoin that has recently printed massive gains.",
//         "source_name": "The Daily Hodl",
//         "date": "Sat, 30 Jul 2022 16:00:15 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "ETH",
//             "ETC"
//         ]
//     },
//     {
//         "news_url": "https://www.dcforecasts.com/bitcoin-news/eth-and-btc-consolidate-at-key-levels-calm-before-the-storm/",
//         "image_url": "https://crypto.snapi.dev/images/v1/r/2/source-quantify-crypto-1-174635.png",
//         "title": "ETH And BTC Consolidate At Key Levels, Calm Before The Storm?",
//         "text": "The ETH and BTC consolidate both at key levels and the market remained at a tipping point waiting to have the direction determined so let's read have a closer look at today's latest cryptocurrency news.",
//         "source_name": "DCForecasts",
//         "date": "Sat, 30 Jul 2022 15:14:10 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "ETH"
//         ]
//     },
//     {
//         "news_url": "https://insidebitcoins.com/news/bitcoin-price-prediction-for-today-july-29-btc-ready-to-spike-above-25000",
//         "image_url": "https://crypto.snapi.dev/images/v1/a/j/pexels-karolina-grabowska-5980743-1jpgstripalllossy1sharp1ssl1-174460-174629.jpg",
//         "title": "Bitcoin Price Prediction for Today, July 29: BTC Ready to Spike Above $25,000",
//         "text": "The Bitcoin price prediction shoots above $24,000 as bulls are ready to blow hot doing a little to flip the market sentiment at this stage.",
//         "source_name": "Inside Bitcoins",
//         "date": "Sat, 30 Jul 2022 15:01:40 -0400",
//         "topics": [
//             "tanalysis"
//         ],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://zycrypto.com/40-of-all-btc-in-circulation-are-currently-in-loss-but-analyst-points-out-a-strong-accumulation-zone/",
//         "image_url": "https://crypto.snapi.dev/images/v1/3/c/bitcoins-massive-accumulation-phase-shows-where-price-is-headed-768x448-174619.jpg",
//         "title": "40% of all BTC in circulation are currently in loss, but analyst points out a strong accumulation zone",
//         "text": "Bitcoin is experiencing one of the most challenging stages of its journey to being a widely adopted asset class. Still, these challenging times are not new to the asset, having faced worse market conditions and emerged triumphant.",
//         "source_name": "Zycrypto",
//         "date": "Sat, 30 Jul 2022 13:23:17 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://www.reuters.com/technology/bitcoin-rises-34-24584-up-397-year-low-june-2022-07-30/",
//         "image_url": "https://crypto.snapi.dev/images/v1/q/r/kgbqsysmqro47bzlcenbdejyza-174613.jpg",
//         "title": "Bitcoin rises 3.4% to $24,584; up 39.7% from year low in June",
//         "text": "Bitcoin rose 3.36% to $24,584.24 at 1707 GMT on Saturday, adding $798.93 to its previous close.",
//         "source_name": "Reuters",
//         "date": "Sat, 30 Jul 2022 13:20:37 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://www.benzinga.com/markets/cryptocurrency/22/07/28278062/heres-why-bitcoin-could-blast-higher-if-this-trend-confirms?SNAPI",
//         "image_url": "https://crypto.snapi.dev/images/v1/a/v/bitcoin-rocket-174610.jpg",
//         "title": "Here's Why Bitcoin Could Blast Higher If This Trend Confirms",
//         "text": "Bitcoin (CRYPTO: BTC) was trading about 3% higher during Saturday's trading session on continued momentum after breaking up bullishly from a falling channel pattern on July 27, which Benzinga pointed out on July 25. During Friday's session, Bitcoin negated the downtrend it had been trading in within the falling channel, but hasn't yet confirmed a new uptrend on the daily time frame.",
//         "source_name": "Benzinga",
//         "date": "Sat, 30 Jul 2022 13:03:31 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://zycrypto.com/recent-survey-shows-investors-think-btc-is-more-likely-to-crash-to-10000-first-than-hit-30000/",
//         "image_url": "https://crypto.snapi.dev/images/v1/p/y/bitcoin-could-hit-crazy-levels-if-market-adjusts-to-new-exchange-inflows-pattern-768x448-174609.jpg",
//         "title": "Recent Survey Shows Investors Think BTC Is More Likely To Crash To $10,000 First Than Hit $30,000",
//         "text": "In what appears to be a direct refutation to the widely held theories of most bullish Bitcoin proponents, Wall Street thinks Bitcoin is more likely to plummet to $10,000 first before a surge to $30,000 can be considered – according to a recent survey.",
//         "source_name": "Zycrypto",
//         "date": "Sat, 30 Jul 2022 12:51:32 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://zycrypto.com/bitcoin-enters-full-accumulation-season-with-shrimps-and-whales-seizing-their-share-of-the-pie/",
//         "image_url": "https://crypto.snapi.dev/images/v1/8/s/bitcoins-massive-accumulation-phase-shows-where-price-is-headed-768x448-174605.jpg",
//         "title": "Bitcoin Enters Full Accumulation Season, With Shrimps and Whales Seizing Their Share Of The Pie",
//         "text": "Bitcoin has enjoyed a small rally, but pundits are making a case for even more significant gains for the most prominent cryptocurrency.",
//         "source_name": "Zycrypto",
//         "date": "Sat, 30 Jul 2022 12:51:32 -0400",
//         "topics": [
//             "whales"
//         ],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://cryptodaily.co.uk/2022/07/btc-usd-poised-to-finish-july-positively-sally-ho-technical-analysis-31-july-2022-btc-bitcoin",
//         "image_url": "https://crypto.snapi.dev/images/v1/v/w/sally-hos-technical-analysis-30-july-2022-174593.jpg",
//         "title": "BTC/USD Poised to Finish July Positively: Sally Ho's Technical Analysis 31 July 2022 BTC",
//         "text": "Bitcoin (BTC/USD) awaited fresh technical sentiment early in the Asian session as the pair continued to orbit the 24000 figure after recently peaking around the 24450 level, its strongest print since early June.  Some technical demand was evident when BTC/USD bounced higher from the 50-hour simple moving average a couple of times after finding bids around the 23429.71 level, representing a test of the 76.4% retracement of the depreciating range from 24287.13 to 20715.",
//         "source_name": "Crypto Daily",
//         "date": "Sat, 30 Jul 2022 12:00:00 -0400",
//         "topics": [
//             "tanalysis"
//         ],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://www.benzinga.com/markets/cryptocurrency/22/02/25891889/how-much-100-in-bitcoin-could-be-worth-in-2030-cathie-woods?SNAPI",
//         "image_url": "https://crypto.snapi.dev/images/v1/c/f/bitcoin-2007769-1920-165-174584.jpg",
//         "title": "How Much $100 In Bitcoin Could Be Worth In 2030 If Cathie Wood's Price Prediction Comes True",
//         "text": "Ark Funds CEO Cathie Wood has been known to make some highly criticized forward-looking predictions. Wood and her colleagues have some of the higher price targets on Wall Street for Bitcoin (CRYPTO: BTC).",
//         "source_name": "Benzinga",
//         "date": "Sat, 30 Jul 2022 11:30:38 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://decrypt.co/106295/this-week-in-coins-bitcoin-and-ethereum-see-continued-growth-as-merge-looms",
//         "image_url": "https://crypto.snapi.dev/images/v1/w/f/shutterstock-1012491031-gid-5-174580.jpg",
//         "title": "This Week in Coins: Bitcoin and Ethereum See Continued Growth as Merge Looms",
//         "text": "The crypto market held steady this week even after the Fed announced another interest rate hike of 75 basis points.",
//         "source_name": "Decrypt",
//         "date": "Sat, 30 Jul 2022 11:02:06 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "ETH"
//         ]
//     },
//     {
//         "news_url": "https://www.livebitcoinnews.com/didi-taihuttu-is-trying-to-cope-with-the-bitcoin-crash/",
//         "image_url": "https://crypto.snapi.dev/images/v1/q/p/cryptocurrency-g31ab4377d-1280-174319-174579.jpg",
//         "title": "Didi Taihuttu Is Trying to Cope with the Bitcoin Crash",
//         "text": "Didi Taihuttu is a man that most crypto traders should likely be familiar with. As the patriarch of what's been dubbed the “bitcoin family,” he and his kin have ultimately sold all their belongings and devoted their lives to bitcoin.",
//         "source_name": "LiveBitcoinNews",
//         "date": "Sat, 30 Jul 2022 11:00:32 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://u.today/bitcoin-ethereum-headed-toward-best-monthly-close-since-2021-analysts-indicate-reversal-signals-to",
//         "image_url": "https://crypto.snapi.dev/images/v1/o/4/22217-174576.jpg",
//         "title": "Bitcoin, Ethereum Headed Toward Best Monthly Close Since 2021; Analysts Indicate Reversal Signals To Watch",
//         "text": "BTC and ETH set to mark best monthly performance since 2021",
//         "source_name": "UToday",
//         "date": "Sat, 30 Jul 2022 10:33:00 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "ETH"
//         ]
//     },
//     {
//         "news_url": "https://dailyhodl.com/2022/07/30/bitcoin-btc-likely-to-pull-off-disbelief-rally-in-face-of-economic-recession-according-to-coinshares/",
//         "image_url": "https://crypto.snapi.dev/images/v1/s/r/btc-from-a-recessionjpgw1024-174574.jpg",
//         "title": "Bitcoin (BTC) Likely To Pull Off Disbelief Rally in Face of Economic Recession, According to CoinShares",
//         "text": "A leading digital assets manager believes that a cloudy financial outlook for the United States could be bullish for Bitcoin (BTC).",
//         "source_name": "The Daily Hodl",
//         "date": "Sat, 30 Jul 2022 10:30:16 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://ambcrypto.com/bnb-hits-new-ath-against-btc-who-is-working-behind-the-scenes/",
//         "image_url": "https://crypto.snapi.dev/images/v1/f/c/untitled-design-78-1-174561.png",
//         "title": "BNB hits new ATH against BTC— who is working behind the scenes?",
//         "text": "Binance exchange cryptocurrency [BNB] reached a new all-time high (ATH)  on 29 July. No, it hasn't surpassed its 2021 levels against the Tether [USDT], but as of 29 July, BNB crossed to an ATH against Bitcoin [BTC].",
//         "source_name": "AMBCrypto",
//         "date": "Sat, 30 Jul 2022 09:30:42 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BNB",
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://cointelegraph.com/news/historically-accurate-bitcoin-metric-exits-buy-zone-in-unprecedented-2022-bear-market",
//         "image_url": "https://crypto.snapi.dev/images/v1/e/w/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmdcvmtm5ndgzmmetmzqxys00nzizltk0njqtotzkywy3mzzlyzq2lmpwzw-174555.jpg",
//         "title": "Historically accurate Bitcoin metric exits buy zone in 'unprecedented' 2022 bear market",
//         "text": "Bitcoin has historically profited from Puell Multiple lift-offs, but unique macro conditions mean what happens next is uncertain.",
//         "source_name": "Cointelegraph",
//         "date": "Sat, 30 Jul 2022 09:10:46 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://cryptoslate.com/how-short-term-bitcoin-holders-invest-differently-to-long-term-holders-according-to-on-chain-data/",
//         "image_url": "https://crypto.snapi.dev/images/v1/e/s/image-bitcoin5-174028-174371-174539.jpg",
//         "title": "How short-term Bitcoin holders invest differently to long-term holders according to on-chain data",
//         "text": "Looking at on-chain data shows apparent differences in how short-term and long-term holders invest in Bitcoin. The post How short-term Bitcoin holders invest differently to long-term holders according to on-chain data appeared first on CryptoSlate.",
//         "source_name": "CryptoSlate",
//         "date": "Sat, 30 Jul 2022 08:31:16 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://www.dcforecasts.com/bitcoin-news/bitcoin-surges-19-in-july-as-the-best-trading-month-since-2021/",
//         "image_url": "https://crypto.snapi.dev/images/v1/o/7/bitcoin-173932-174536.jpg",
//         "title": "Bitcoin Surges 19% In July As The Best Trading Month Since 2021",
//         "text": "Bitcoin surges 19% in July making it the best trading month since 2021 and Ethereum is also soaring by 50% in the past month so let's read more today in our latest Bitcoin news.",
//         "source_name": "DCForecasts",
//         "date": "Sat, 30 Jul 2022 08:19:13 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://www.fool.com/investing/2022/07/30/buying-bitcoin-on-the-dip-3-things-the-smartest-in/",
//         "image_url": "https://crypto.snapi.dev/images/v1/s/e/senators-send-letterjpgw1024-174361-174548.jpg",
//         "title": "Buying Bitcoin on the Dip? 3 Things the Smartest Investors Know About Crypto",
//         "text": "Is now the time to buy Bitcoin? Consider what some of the smartest investors have to say.",
//         "source_name": "The Motley Fool",
//         "date": "Sat, 30 Jul 2022 08:15:00 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://news.bitcoin.com/bitcoin-ethereum-technical-analysis-btc-eth-consolidate-to-start-weekend/",
//         "image_url": "https://crypto.snapi.dev/images/v1/n/f/shutterstock-1975064078-174528.jpg",
//         "title": "Bitcoin, Ethereum Technical Analysis: BTC, ETH Consolidate to Start the Weekend",
//         "text": "Following strong gains on Friday, bitcoin was consolidating under a key resistance level to start the weekend. Bulls opted to secure gains as price uncertainty heightened in crypto markets, which as of writing are down 1% on the day. Ethereum was also marginally lower in the session.",
//         "source_name": "Bitcoin",
//         "date": "Sat, 30 Jul 2022 08:00:10 -0400",
//         "topics": [
//             "tanalysis"
//         ],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC",
//             "ETH"
//         ]
//     },
//     {
//         "news_url": "https://beincrypto.com/btc-on-chain-analysis-long-term-holders-experience-capitulation/",
//         "image_url": "https://crypto.snapi.dev/images/v1/m/w/bic-on-chain-btc-bearjpgoptimal-174525.jpg",
//         "title": "BTC on-Chain Analysis: Long-Term Holders Experience Capitulation",
//         "text": "In today's on-chain analysis, BeInCrypto looks at several indicators for long- and short-term Bitcoin holders to determine the health of the current cryptocurrency market. The capitulation of two types of BTC holders means that the market is severely cooled, and the bottom may have already been reached.",
//         "source_name": "BeInCrypto",
//         "date": "Sat, 30 Jul 2022 07:45:00 -0400",
//         "topics": [],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://cointelegraph.com/news/bitcoin-price-eyes-24k-july-close-as-sentiment-exits-fear-zone",
//         "image_url": "https://crypto.snapi.dev/images/v1/z/o/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmdcvmjc3ndrmntgtmtnmyi00yjbmlthizmutmdy0y2ziotu5mzc4lmpwzw-174523.jpg",
//         "title": "Bitcoin price eyes $24K July close as sentiment exits 'fear' zone",
//         "text": "The relatively good times could continue next month, one prediction says after July manages to reverse the worst of the 2022 crypto downturn.",
//         "source_name": "Cointelegraph",
//         "date": "Sat, 30 Jul 2022 07:36:42 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://www.fool.com/investing/2022/07/30/bitcoin-buy-the-dip/",
//         "image_url": "https://crypto.snapi.dev/images/v1/b/i/bitcoin-173932-174546.jpg",
//         "title": "Bitcoin: Buy the Dip?",
//         "text": "Now might be an opportune time to invest in the most valuable cryptocurrency.",
//         "source_name": "The Motley Fool",
//         "date": "Sat, 30 Jul 2022 07:13:00 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://www.fxempire.com/forecasts/article/5-things-to-know-in-crypto-today-btc-on-course-for-best-month-since-october-2021-1081003",
//         "image_url": "https://crypto.snapi.dev/images/v1/5/4/bitcoin-up-2-174518.jpg",
//         "title": "5 Things to Know in Crypto Today: BTC On Course For Best Month Since October 2021",
//         "text": "Its been a historically strong month for cryptocurrencies, which have benefitted from a pullback in central bank tightening bets.",
//         "source_name": "FXEmpire",
//         "date": "Sat, 30 Jul 2022 07:08:41 -0400",
//         "topics": [],
//         "sentiment": "Neutral",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://www.cryptoglobe.com/latest/2022/07/british-man-aiming-to-use-robotic-dogs-to-search-for-his-lost-8000-bitcoins/",
//         "image_url": "https://crypto.snapi.dev/images/v1/r/y/many-gold-bitcoins-174508.jpg",
//         "title": "British Man Aiming To Use Robotic Dogs To Search for His Lost 8,000 Bitcoins",
//         "text": "Former IT worker and UK resident James Howells says he wants to use several robot dogs from American robotics firm Boston Dynamics to search a landfill fin Wales for a missing Bitcoin hard drive containing around 8,000 bitcoins (worth roughly $191 million at today's prices).",
//         "source_name": "CryptoGlobe",
//         "date": "Sat, 30 Jul 2022 06:03:02 -0400",
//         "topics": [
//             "bitcoin"
//         ],
//         "sentiment": "Negative",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     },
//     {
//         "news_url": "https://blockchain.news/news/bitcoin-balance-on-exchanges-experiences-macro-decline-as-price-eyes-a-weekly-close-above-the-200-week-ma",
//         "image_url": "https://crypto.snapi.dev/images/v1/v/s/8e5e1552d64ce537ec979e8a1dc5afc5f0c0f688dcd2cdc59e70c77057a27ce4-174644.jpg",
//         "title": "Bitcoin Balance on Exchanges Experiences Macro Decline as Price Eyes a Weekly Close Above the 200-Week MA",
//         "text": "Bitcoin (BTC) continues to exit crypto exchanges since it's recording a macro decline.",
//         "source_name": "Blockchain News",
//         "date": "Sat, 30 Jul 2022 06:00:09 -0400",
//         "topics": [],
//         "sentiment": "Positive",
//         "type": "Article",
//         "tickers": [
//             "BTC"
//         ]
//     }
// ]
  const {isSuccess, newsArticles} = useSelector((state) => state.newsArticles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsArticles())
    console.log('news dispatch')
  }, [dispatch])

  useEffect(() => {
    return () => {
        if(isSuccess) {
            dispatch(resetNews())
        }
        console.log('news page reset')
    }
    
}, [dispatch, isSuccess])

  console.log(newsArticles)


  return (
    <div className="h-fit">
    <div className="hero h-96 bg-primary">
        <Particle height={750}/>
        <div className="hero-content text-center">
          <div className="max-w-md text-neutral-content">
            <h1 className="text-5xl font-bold">CryptoNews</h1>
            <p className="py-6">
              The latest in Crypto News
            </p>
          </div>
        </div>
      </div>
      <section className='w-full h-fit grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-10 mt-5'>
        <NewsList newsArticles={newsArticles}/>
      </section>
    </div>
  )
}

export default News

