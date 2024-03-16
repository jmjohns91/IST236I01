import Article from "../models/articles";

export const articles = [
  new Article(
    1,
    "tech",
    "Northumbria University",
    "Phys.Org",
    "Mar 15, 2024",
    "Brighter, cheaper blue light could revolutionize screen technology",
    "https://scx1.b-cdn.net/csz/news/800a/2024/brighter-cheaper-blue.jpg",
    "A team of researchers from Northumbria, Cambridge, Imperial, and Loughborough universities has developed a new design for blue OLEDs, potentially leading to more efficient, longer-lasting, and cheaper TV and smartphone screens. Their study in Nature Materials introduces a light-emitting molecule with added shields that block destructive energy pathways, improving molecule interaction and efficiency. This innovation could significantly reduce energy consumption in devices, aligning with net zero targets, and addresses issues with the lifespan and efficiency of blue subpixels in OLED displays."
  ),
  new Article(
    2,
    "tech",
    "Shiona McCallum, Liv McMahon & Tom Singleton",
    "BBC",
    "Mar 13, 2024",
    "MEPs approve world's first comprehensive AI law",
    "https://ichef.bbci.co.uk/news/1536/cpsprodpb/4F37/production/_132897202_gettyimages-1258702904.jpg.webp",
    "The European Parliament has approved a significant AI Act, making it a pioneer in global AI regulation. This legislation categorizes AI products based on risk levels, with stringent rules for high-risk applications in critical areas like healthcare, law enforcement, and others. It bans AI that threatens fundamental rights, particularly involving biometric data. The Act aims for \"human - centric\" AI governance and positions the EU as a leader in establishing trustworthy AI standards worldwide. It's not yet law but is expected to greatly influence global AI regulation, with companies preparing to align with its requirements."
  ),
  new Article(
    3,
    "tech",
    "Sethu Pradeep",
    "Rueters",
    "March 15, 2024",
    "SpaceX says it \‘lost\’ Starship after mostly-successful third launch",
    "https://images.indianexpress.com/2024/03/Starship-launch-SpaceX-20240315.jpg?w=640",
    "SpaceX's Starship had its third test flight from the Starbase facility, successfully reaching orbit but losing the spacecraft during reentry into Earth's atmosphere. This marks progress compared to previous failures. Starship, intended for missions to the Moon and potentially Mars, is vital for NASA's Artemis 3 lunar mission. SpaceX's rapid iteration approach is pushing the development of this powerful launch system, bringing it closer to operational readiness for significant space exploration missions."
  ),
  new Article(
    4,
    "tech",
    "YURI KAGEYAMA",
    "AP",
    "March 15, 2024",
    "Honda and Nissan agree to work together in developing electric vehicles and intelligent technology",
    "https://dims.apnews.com/dims4/default/4fa6e0f/2147483647/strip/true/crop/5000x3333+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F20%2Fda%2Ffb2d8359b140df2b670c311d6c8c%2F8966eae1480b4e77981d5625a39551a8",
    "Nissan and Honda have announced a collaboration to develop electric vehicles and auto intelligence technology, acknowledging the need to catch up in these rapidly growing sectors. They plan to develop core technologies together while maintaining distinct products. The agreement aims to address challenges like EV technology advancement and climate change concerns. This partnership reflects the industry's shift towards electric vehicles and marks a significant step for both Japanese automakers in competing with global rivals."
  ),
  new Article(
    5,
    "tech",
    "Leah Willingham",
    "AP",
    "March 16, 2024",
    "TikTok creators warn of economic impact if app sees ban, call it a vital space for the marginalized",
    "https://dims.apnews.com/dims4/default/efe50ad/2147483647/strip/true/crop/6000x4000+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F41%2F5893ba3333fc284ca87d588fa751%2F1ba3b5ada91048ee915b02e8aaa8efbb",
    "TikTok creators are concerned about a proposed U.S. bill that could lead to a nationwide TikTok ban. The House of Representatives passed the bill, which requires Chinese-owned ByteDance to sell its stake in TikTok. Content creators argue that a ban would impact many who rely on the platform for income and community. TikTok's popularity and influence have surged, but concerns about user data security and Chinese government influence persist. The bill still needs Senate approval, and its future there is uncertain."
  ),
  new Article(
    6,
    "Condo",
    300000,
    1,
    1,
    700,
    2012,
    "2468 Maple Ave",
    "Mount Pleasant",
    "SC",
    "29464",
    "https://cdn.articlephotos.sierrastatic.com/pics2x/v1706983147/72/72_2402903_01.jpg",
    "1 bedroom, 1 bathroom condo with a balcony overlooking the harbor. This waterfront condo features an open floor plan, hardwood floors, and floor-to-ceiling windows with panoramic views. Enjoy the convenience of living near shops, restaurants, and parks."
  ),
  new Article(
    7,
    "Townhouse",
    400000,
    3,
    2.5,
    1600,
    2018,
    "3344 Elm St",
    "Rock Hill",
    "SC",
    "29730",
    "https://photos.zillowstatic.com/fp/7abfb3007766230044d9a8e62e01b69f-p_e.jpg",
    "3 bedroom, 2.5 bathroom townhouse with a two-car garage. This newly built townhouse features a modern kitchen with granite countertops, stainless steel appliances, and a spacious living area. The master suite includes a walk-in closet and ensuite bathroom."
  ),
  new Article(
    8,
    "Trailer",
    70000,
    2,
    1,
    700,
    2005,
    "5432 Birch St",
    "Spartanburg",
    "SC",
    "29301",
    "https://www.mobilehomerepair.com/wp-content/uploads/2017/09/manufactured-home-vs-mobile-home.jpg",
    "2 bedroom, 1 bathroom trailer with a covered porch. This cozy trailer features laminate flooring, a compact kitchen, and a fenced yard. Ideal for a first-time homebuyer or as a rental property."
  ),
  new Article(
    9,
    "House",
    500000,
    4,
    3,
    2300,
    2015,
    "1122 Pine St",
    "Florence",
    "SC",
    "29501",
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    "Modern 4 bedroom, 3 bathroom house with an open floor plan. This newly constructed home features a chef's kitchen with quartz countertops, stainless steel appliances, and a large island. The master suite includes a spa-like bathroom with a soaking tub and separate shower."
  ),
  new Article(
    10,
    "Condo",
    280000,
    2,
    2,
    1100,
    2008,
    "3344 Oak Ave",
    "Summerville",
    "SC",
    "29483",
    "https://photos.zillowstatic.com/fp/67d34014d8104310b9b4f6399c524bc0-p_e.jpg",
    "2 bedroom, 2 bathroom condo in a resort-style community. This well-appointed condo features a spacious living area, kitchen with granite countertops, and a private balcony. The community amenities include a pool, fitness center, and walking trails."
  ),
  new Article(
    11,
    "Townhouse",
    380000,
    3,
    2.5,
    1700,
    2010,
    "5566 Maple St",
    "Anderson",
    "SC",
    "29621",
    "https://images1.apartments.com/i2/SVEagIqtkX8zYZaf2-1alji7VxYnvMVShqIAHyJ82uw/117/moorland-reserve-myrtle-beach-sc-building-photo.jpg?p=1",
    "3 bedroom, 2.5 bathroom townhouse with a fenced backyard. This well-maintained townhouse features an open-concept living area, hardwood floors, and a kitchen with granite countertops. The backyard includes a patio and garden area."
  ),
  new Article(
    12,
    "Trailer",
    75000,
    2,
    1,
    800,
    2000,
    "7788 Elm St",
    "Greer",
    "SC",
    "29650",
    "https://qoraxenergy.com/wp-content/uploads/2021/11/05.jpg",
    "2 bedroom, 1 bathroom trailer with a small garden. This cozy trailer features laminate flooring, a compact kitchen, and a covered porch. The garden area is perfect for growing flowers or vegetables."
  ),
  new Article(
    13,
    "House",
    480000,
    3,
    2.5,
    2200,
    2012,
    "9900 Cedar Ave",
    "North Charleston",
    "SC",
    "29405",
    "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg",
    "3 bedroom, 2.5 bathroom house with a backyard deck. This spacious home features an open floor plan, vaulted ceilings, and a gourmet kitchen with granite countertops. The deck overlooks the fenced backyard, ideal for outdoor entertaining."
  ),
  new Article(
    14,
    "Condo",
    270000,
    1,
    1,
    800,
    2016,
    "1122 Birch St",
    "Mauldin",
    "SC",
    "29662",
    "https://images1.forrent.com/i2/vcRnUgXq4a1VrLW8cMDlFkeyiSENz_Y2-i9nAQsDh-E/117/image.jpg",
    "1 bedroom, 1 bathroom condo with a community pool. This well-maintained condo features an open floor plan, hardwood floors, and a kitchen with granite countertops. The community amenities include a pool, clubhouse, and fitness center."
  ),
  new Article(
    15,
    "Townhouse",
    390000,
    3,
    2.5,
    1800,
    2014,
    "3344 Elm Ave",
    "Simpsonville",
    "SC",
    "29680",
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/10/what-is-a-townhouse.jpeg.jpg",
    "3 bedroom, 2.5 bathroom townhouse with a two-car garage. This spacious townhouse features a gourmet kitchen with granite countertops, stainless steel appliances, and a breakfast bar. The master suite includes a walk-in closet and ensuite bathroom."
  ),
];