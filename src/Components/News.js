import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Erwin Seba",
      title:
        "U.S., Brent crude futures fall by $1 a barrel on stronger dollar - Reuters",
      description:
        "U.S. and Brent crude oil futures fell on Thursday by $1 a barrel on a stronger dollar and expectations of weaker international demand.",
      url: "https://www.reuters.com/markets/commodities/oil-prices-edge-up-anticipated-us-crude-stock-draw-2023-09-07/",
      urlToImage:
        "https://www.reuters.com/resizer/8taSwj3y-bOWa8DxxIOcLQGPo8g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5L7A5E5CCBIGJBV4BXGODRBF3Q.jpg",
      publishedAt: "2023-09-07T18:14:10Z",
      content:
        "HOUSTON, Sept 7 (Reuters) - U.S. and Brent crude oil futures fell on Thursday by $1 a barrel on a stronger dollar and expectations of weaker international demand.\r\nBrent crude futures fell $1.00, or … [+2667 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Marshall Cohen",
      title:
        "Trump tells judge he may try to move Georgia election interference case to federal court - CNN",
      description:
        "Former President Donald Trump on Thursday formally notified the judge overseeing the Georgia election subversion case that he “may” try to move his state case into federal court.",
      url: "https://www.cnn.com/2023/09/07/politics/trump-federal-court-georgia/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230906120920-03-donald-trump-082423.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-09-07T17:57:00Z",
      content:
        "Former President Donald Trump on Thursday formally notified the judge overseeing the Georgia election subversion case that he may try to move his state case into federal court.\r\nTrumps lawyers have p… [+1665 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Bill Chappell",
      title: "Hurricane Lee is getting powerful. Will it hit land? - NPR",
      description:
        "The hurricane isn't currently threatening anyone on land. That's a relief: Lee's maximum sustained winds are now predicted to top 160 mph by this weekend.",
      url: "https://www.npr.org/2023/09/07/1198147021/hurricane-lee-forecast-category-5-storm",
      urlToImage:
        "https://media.npr.org/assets/img/2023/09/07/hurricane-lee-atlantic-ocean_wide-44ec21841e65eedbe8c1fce377426d69f76785ce-s1400-c100.jpg",
      publishedAt: "2023-09-07T17:45:13Z",
      content:
        "Hurricane Lee formed a well-defined eye wall on Thursday. The storm is seen here in a satellite image from around noon ET Thursday, showing the Leeward Islands and Puerto Rico to the west.\r\nNOAA/NESD… [+3284 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "Fantasy Football Week 1 QB Preview: Wait and see with Anthony Richardson, Deshaun Watson and Russell Wilson - CBS Sports",
      description: "Everything you need to know about quarterback in Week 1",
      url: "https://www.cbssports.com/fantasy/football/news/fantasy-football-week-1-qb-preview-wait-and-see-with-anthony-richardson-deshaun-watson-and-russell-wilson/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/06/09/41a79431-94d2-43ca-b32d-1817389a7841/thumbnail/1200x675/8f8e66cff67a8ef3d68e624d11dd2712/usatsi-russell-wilson-broncos.jpg",
      publishedAt: "2023-09-07T17:40:00Z",
      content:
        "All summer long I have viewed Anthony Richardson as the best quarterback value at ADP. He is the greatest athlete to ever test at the NFL Combine as a quarterback and he landed with a coach who guide… [+2904 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title:
        "Miami school board again shuts down LGBTQ month recognition - POLITICO",
      description:
        "The recognition was a nonstarter for the conservative-leaning members of Miami’s school board.",
      url: "https://www.politico.com/news/2023/09/07/miami-school-board-lgbtq-month-dont-say-gay-00114496",
      urlToImage:
        "https://static.politico.com/ca/18/50d04ab64116830c376e168445d3/transgender-seniors-70349.jpg",
      publishedAt: "2023-09-07T17:31:54Z",
      content:
        "The recognition was shut down by a 5-3 vote following dozens of public speakers filling the school board auditorium representing both sides of the issue, reminiscent of the scene that played out last… [+2471 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Emma Roth",
      title:
        "Google teaser previews Pixel Watch 2 and both Pixel 8 phones - The Verge",
      description:
        "New videos from Google give clear looks at the Pixel 8, Pixel 8 Pro, and Pixel Watch 2, which will be fully revealed at a launch event on October 4th.",
      url: "https://www.theverge.com/2023/9/7/23863192/google-pixel-8-pro-watch-2",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/fIDI3vu2St6anUocTgKndOUnqq8=/416x192:2507x1583/1200x628/filters:focal(1440x900:1441x901)/cdn.vox-cdn.com/uploads/chorus_asset/file/24903809/google_pixel_8.png",
      publishedAt: "2023-09-07T17:21:47Z",
      content:
        "Google teaser previews Pixel Watch 2 and both Pixel 8 phones\r\nGoogle teaser previews Pixel Watch 2 and both Pixel 8 phones\r\n / No leaks necessary Google posted new videos of the Pixel 8, Pixel 8 Pro,… [+1798 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Matt Donnelly",
      title:
        "CAA Sells Majority Stake to Francois-Henri Pinault’s Artemis - Variety",
      description:
        "French billionaire Francois-Henri Pinault has completed his acquisition of a majority stake in Creative Artists Agency. Through his family investment company Artemis, Pinault replaces private equit…",
      url: "https://variety.com/2023/film/news/caa-sells-majority-stake-francois-henri-pinault-artemis-1235686302/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2023/08/Francois-Henri-Pinault-Bryan-Lourd-Kevin-Huvane-Richard-Lovett-CAA-Sale.jpg?w=1000&h=562&crop=1",
      publishedAt: "2023-09-07T17:00:00Z",
      content:
        "French billionaire Francois-Henri Pinault has completed his acquisition of a majority stake in Creative Artists Agency. Through his family investment company Artemis, Pinault replaces private equity … [+5619 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Daniel Barnes, Dan Mangan",
      title:
        "Jury in trial of Trump advisor Peter Navarro for contempt of Congress begins deliberations - CNBC",
      description:
        "Peter Navarro has said he failed to comply with a subpoena from Congress because former President Donald Trump told him to assert executive privilege.",
      url: "https://www.cnbc.com/2023/09/07/verdict-peter-navarro-contempt-of-congress-jan6-case.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107297048-1694095357882-gettyimages-1665638745-kd_26407_7trqwhnj.jpeg?v=1694113608&w=1920&h=1080",
      publishedAt: "2023-09-07T16:54:28Z",
      content:
        "A jury began deliberations Thursday in the trial of Trump White House trade advisor Peter Navarro, who is charged with two counts of criminal contempt of Congress.\r\nNavarro had said he failed to comp… [+1893 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "John Bacon",
      title:
        "Ukraine Russia live updates: US support, aid may not help end the war - USA TODAY",
      description:
        "A new defense minister, an encouraging visit from a U.S. official and more U.S. aid. Will they have an impact on the Ukraine war?",
      url: "https://www.usatoday.com/story/news/world/ukraine/2023/09/07/ukraine-russia-war-live-updates/70783569007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/presto/2023/09/07/USAT/cb11cc7c-88da-4122-b45b-43201261e2f0-AP_APTOPIX_Russia_Ukraine_War_9.jpg?crop=2506,1410,x0,y0&width=2506&height=1410&format=pjpg&auto=webp",
      publishedAt: "2023-09-07T16:40:04Z",
      content:
        "A new defense minister, an encouraging visit from the U.S. secretary of state and another $1 billion in aid have fueled optimism in Ukraine this week. But will they have an impact on the war?\r\nUkrain… [+6009 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title:
        "DeSantis lashes out at audience member over Jacksonville shooting - POLITICO",
      description:
        '"That is such nonsense!” DeSantis yelled at an audience member who blamed his policies for the shooting.',
      url: "https://www.politico.com/news/2023/09/07/desantis-jacksonville-shooting-race-00114477",
      urlToImage:
        "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1155968404/d0d2af0d-1e10-4a75-a506-9405b5aaf9ac/70a0285a-6ed4-4f38-983d-e36363f1ce8d/1280x720/match/image.jpg",
      publishedAt: "2023-09-07T16:26:20Z",
      content:
        "Thursdays argument became particularly heated when the audience member, who was unidentified, accused DeSantis of allowing people to hunt people like me.\r\nOh, that is nonsense. That is such nonsense!… [+2313 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Michael Wayland",
      title:
        "GM offers wage increases, hefty bonuses in UAW contract fight - CNBC",
      description:
        "GM's latest offer still falls short of the union's demands. The UAW could strike against all three Detroit automakers next week.",
      url: "https://www.cnbc.com/2023/09/07/gm-offers-wage-increases-hefty-bonuses-uaw.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106963284-1634745497535-2022-Chevrolet-BoltEUV-and-BoltEV-ship-to-dealers-12.jpg?v=1694103117&w=1920&h=1080",
      publishedAt: "2023-09-07T16:11:57Z",
      content:
        "DETROIT General Motors on Thursday offered its largest four-year wage increase in decades as part of a new contract proposal to the United Auto Workers, as the automaker attempts to avoid another cos… [+2692 chars]",
    },
    {
      source: {
        id: "nfl-news",
        name: "NFL News",
      },
      author: null,
      title:
        "Week 1 NFL picks: Chiefs unanimously predicted to top Lions; Jets will beat Bills in Aaron Rodgers' debut - NFL.com",
      description:
        "Who'll will win tonight's NFL Kickoff Game between the upstart Lions and defending Super Bowl champion Chiefs? Can the Steelers knock off the 49ers in Pittsburgh? How does Aaron Rodgers' Jets debut play out vs. the rival Bills? Check out the Week 1 game p",
      url: "https://www.nfl.com/news/week-1-nfl-picks-2023-nfl-season",
      urlToImage:
        "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/arivfe64i3gp7g8elsqr",
      publishedAt: "2023-09-07T16:05:00Z",
      content:
        "Why Brooke is taking the Ravens: After Lamar Jackson signed his long-awaited megadeal this offseason, the time has finally come to see what the electric playmaker looks like in new coordinator Todd M… [+481 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "US Health Agency Issues Advisory For Rare, Life-Threatening Flesh-Eating Bacteria - NDTV",
      description:
        "According to the CDC, a dozen people have died from the infection across the US this year.",
      url: "https://www.ndtv.com/science/us-health-agency-issues-advisory-for-rare-life-threatening-flesh-eating-bacteria-4369389",
      urlToImage:
        "https://c.ndtvimg.com/2023-04/m4ulh9oo_vibrio-vulnificus-can-cause-lifethreatening-wound-infections-_625x300_11_April_23.jpg",
      publishedAt: "2023-09-07T16:00:16Z",
      content:
        "The bacteria eats away at the skin, muscles, nerves, fat and blood vessels\r\nThe Centres for Disease Control (CDC) has issued a health advisory for rare and potentially deadly bacterial infections spr… [+1613 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "",
      title:
        "Manhunt launched for terror suspect who escaped London prison - NPR",
      description:
        "Authorities found straps dangling from a truck that left a prison kitchen early Wednesday. The suspect, last seen wearing a chef's uniform, is an ex-soldier accused of planting fake bombs and spying.",
      url: "https://www.npr.org/2023/09/07/1198088956/london-prison-escape-terrorist-manhunt",
      urlToImage:
        "https://media.npr.org/assets/img/2023/09/07/untitled-design_wide-473262313d1aaf1ea101262281d6425312756078-s1400-c100.jpg",
      publishedAt: "2023-09-07T15:21:00Z",
      content:
        "Daniel Abed Khalife was reported to police after escaping from London's Wandsworth Prison on Wednesday morning.\r\nMetropolitan Police\r\nLONDON It sounds like the script of a Hollywood movie.\r\nA former … [+3660 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "China bans the use of Apple iPhones among government officials - CNBC Television",
      description:
        "CNBC's Eunice Yoon joins 'Squawk on the Street' to discuss the new policy out of China banning government workers from using iPhones, Huawei's nearing 5G tec...",
      url: "https://www.youtube.com/watch?v=gs7x4uuQgE4",
      urlToImage: "https://i.ytimg.com/vi/gs7x4uuQgE4/maxresdefault.jpg",
      publishedAt: "2023-09-07T14:43:20Z",
      content: null,
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        "Complex cave rescue looms in Turkey as American Mark Dickey stuck 3,200 feet inside Morca cave - CBS News",
      description:
        'U.S. speleologist Mark Dickey, described as "a highly trained caver and a cave rescuer himself," suffered gastrointestinal bleeding deep underground.',
      url: "https://www.cbsnews.com/news/turkey-cave-rescue-mark-dickey-american-speleologist-morca-cave/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/09/07/841c17d7-a85a-446a-aca7-e5c4ffb65881/thumbnail/1200x630/8d0cdd2832bfa1dfcaacbdbb8122321e/mark-dickey-cave-turkey.jpg?v=265cec9d5f00fdfd8db4b3ff216e4bd4",
      publishedAt: "2023-09-07T14:32:26Z",
      content:
        "Istanbul — Turkish and international cave rescue experts were working Thursday to save an American speleologist trapped at a depth of more than 3,280 feet in a cave in southern Turkey after he became… [+3631 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "Felix Young",
      title: "Polaroid Launches New I-2 Instant Camera - HYPEBEAST",
      description:
        "More than a point and shoot, the I-2 has built-in manual controls for full creative freedom.",
      url: "https://hypebeast.com/2023/9/polaroid-launches-new-polaroid-i-2-instant-camera",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F09%2Fpolaroid-launches-new-polaroid-i-2-instant-camera-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2023-09-07T13:37:30Z",
      content:
        "Polaroid has just launched the I-2, its most advanced (and expensive) instant film camera that comes with built-in manual controls to offer its users full creative freedom. The I-2 marks a first for … [+2217 chars]",
    },
    {
      source: {
        id: null,
        name: "Rolling Stone",
      },
      author: "Krystie Lee Yandoli",
      title:
        "Chaos, Comedy, and ‘Crying Rooms’: Inside Jimmy Fallon’s ‘Tonight Show’ - Rolling Stone",
      description:
        "Sixteen current and former staffers say Fallon’s erratic behavior spoiled their “dream” of working on The Tonight Show",
      url: "https://www.rollingstone.com/tv-movies/tv-movie-features/jimmy-fallon-tonight-show-toxic-work-environment-crying-rooms-nbc-1234819421/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2023/09/TonightShowIllo.jpg?w=1600&h=900&crop=1",
      publishedAt: "2023-09-07T13:30:00Z",
      content:
        "It was a particularly tense day on the set of The Tonight ShowStarring Jimmy Fallon. The host, known for his warm and congenial presence onscreen, was acting especially dismissive and irritable durin… [+21766 chars]",
    },
    {
      source: {
        id: null,
        name: "PBS",
      },
      author: null,
      title:
        "Biden cancels last oil and gas leases in Alaska’s Arctic Refuge, overturns sales held by Trump - PBS NewsHour",
      description:
        "The Biden administration has canceled the remaining seven oil and gas leases in Alaska's Arctic National Wildlife Refuge, overturning sales held in the Trump administration's waning days and angering Republicans.",
      url: "https://www.pbs.org/newshour/politics/biden-cancels-last-oil-and-gas-leases-in-alaskas-arctic-refuge-overturns-sales-held-by-trump",
      urlToImage:
        "https://d3i6fh83elv35t.cloudfront.net/static/2023/09/2023-09-06T194258Z_190937322_RC2633A3WLKT_RTRMADP_3_USA-BIDEN-ALASKA-1024x719.jpg",
      publishedAt: "2023-09-07T13:04:36Z",
      content:
        "JUNEAU, Alaska (AP) In an aggressive move that angered Republicans, the Biden administration canceled the seven remaining oil and gas leases in Alaska’s Arctic National Wildlife Refuge on Wednesday, … [+6153 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Sophie Turner All Smiles in Public Outing Days Before Joe Jonas Filed for Divorce - Entertainment Tonight",
      description:
        "A source tells ET, “Sophie and Joe have been spending more time apart recently. Joe has been busy on tour and spending a lot of time with his family. Joe has...",
      url: "https://www.youtube.com/watch?v=2bfuCI2llus",
      urlToImage: "https://i.ytimg.com/vi/2bfuCI2llus/hqdefault.jpg",
      publishedAt: "2023-09-07T13:00:02Z",
      content: null,
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <>
        <div className="container my-5">
          <h1 className="m-3">Newsman Headlines</h1>
          <div className="row my-5">
            <div className="col-md-3">
              <NewsItems
                title="myTitle"
                description="myDescription"
                newsUrl="https://www.cnn.com/2023/09/07/politics/trump-federal-court-georgia/index.html"
                imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230906120920-03-donald-trump-082423.jpg?c=16x9&q=w_800,c_fill"
              />
            </div>
            <div className="col-md-3">
              <NewsItems title="myTitle" description="myDescription" />
            </div>
            <div className="col-md-3">
              <NewsItems title="myTitle" description="myDescription" />
            </div>
            <div className="col-md-3">
              <NewsItems title="myTitle" description="myDescription" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
