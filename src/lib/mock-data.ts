export const breakingNews = [
  { id: 1, headline: "CDC Reports Uptick in H5N1 Avian Flu Cases in Poultry Workers", source: "Reuters", time: "12 min ago", sentiment: "negative", reach: "2.4M" },
  { id: 2, headline: "New Mpox Vaccine Campaign Reaches 500,000 in Sub-Saharan Africa", source: "AP News", time: "34 min ago", sentiment: "positive", reach: "1.8M" },
  { id: 3, headline: "Opioid Settlement Funds: States Begin Distributing $26B Package", source: "Washington Post", time: "1 hr ago", sentiment: "neutral", reach: "3.1M" },
  { id: 4, headline: "Maternal Mortality Rates Show First Decline in Five Years", source: "NYT", time: "2 hr ago", sentiment: "positive", reach: "4.2M" },
  { id: 5, headline: "COVID-19 Spring Booster Campaign Launches Nationwide", source: "CNN", time: "3 hr ago", sentiment: "neutral", reach: "5.6M" },
  { id: 6, headline: "Measles Outbreak in Ohio Linked to Undervaccination", source: "NBC News", time: "4 hr ago", sentiment: "negative", reach: "2.9M" },
]

export const topicTrends = [
  { name: "Mon", avianFlu: 42, mpox: 28, opioid: 35, vaccine: 50, maternal: 22 },
  { name: "Tue", avianFlu: 55, mpox: 32, opioid: 30, vaccine: 45, maternal: 25 },
  { name: "Wed", avianFlu: 48, mpox: 45, opioid: 28, vaccine: 52, maternal: 30 },
  { name: "Thu", avianFlu: 70, mpox: 38, opioid: 42, vaccine: 48, maternal: 28 },
  { name: "Fri", avianFlu: 85, mpox: 35, opioid: 55, vaccine: 60, maternal: 35 },
  { name: "Sat", avianFlu: 65, mpox: 30, opioid: 38, vaccine: 42, maternal: 20 },
  { name: "Sun", avianFlu: 78, mpox: 42, opioid: 45, vaccine: 55, maternal: 32 },
]

export const topOutlets = [
  { name: "Reuters", articles: 47, reach: "12.4M", trend: "up" },
  { name: "Associated Press", articles: 42, reach: "11.2M", trend: "up" },
  { name: "Washington Post", articles: 38, reach: "9.8M", trend: "stable" },
  { name: "New York Times", articles: 35, reach: "15.1M", trend: "up" },
  { name: "CNN", articles: 31, reach: "8.5M", trend: "down" },
  { name: "NBC News", articles: 28, reach: "7.2M", trend: "stable" },
  { name: "STAT News", articles: 25, reach: "3.4M", trend: "up" },
  { name: "The Hill", articles: 22, reach: "4.1M", trend: "stable" },
]

export const emergingNarratives = [
  { topic: "H5N1 Dairy Farm Transmission", velocity: "+340%", articles: 28, risk: "high" },
  { topic: "Vaccine Hesitancy in Rural Communities", velocity: "+180%", articles: 15, risk: "medium" },
  { topic: "Mental Health Crisis in Youth", velocity: "+120%", articles: 42, risk: "medium" },
  { topic: "Antimicrobial Resistance Concerns", velocity: "+95%", articles: 11, risk: "low" },
]

export const regionCoverage = [
  { region: "Northeast", coverage: 342, percentage: 28 },
  { region: "Southeast", coverage: 285, percentage: 23 },
  { region: "Midwest", coverage: 198, percentage: 16 },
  { region: "Southwest", coverage: 175, percentage: 14 },
  { region: "West", coverage: 230, percentage: 19 },
]

export const journalistActivity = [
  { name: "Helen Branswell", outlet: "STAT News", beat: "Infectious Disease", articles: 12, lastActive: "2 hrs ago" },
  { name: "Apoorva Mandavilli", outlet: "NYT", beat: "Public Health", articles: 8, lastActive: "4 hrs ago" },
  { name: "Lena H. Sun", outlet: "Washington Post", beat: "Vaccines", articles: 10, lastActive: "1 hr ago" },
  { name: "Meg Tirrell", outlet: "NBC News", beat: "Health Policy", articles: 6, lastActive: "3 hrs ago" },
  { name: "Sanjay Gupta", outlet: "CNN", beat: "Health", articles: 4, lastActive: "5 hrs ago" },
]

export const mediaArticles = [
  { id: 1, headline: "CDC Confirms New H5N1 Cases Among Farm Workers in Texas", source: "Reuters", author: "Julie Steenhuysen", time: "2025-03-16 09:14", geo: "United States", language: "English", engagement: 4520, type: "Wire", sentiment: "negative" },
  { id: 2, headline: "Global Mpox Response: Lessons from the 2024 Outbreak", source: "The Lancet", author: "Editorial Board", time: "2025-03-16 08:00", geo: "United Kingdom", language: "English", engagement: 2180, type: "Journal", sentiment: "neutral" },
  { id: 3, headline: "Biden Administration Announces $4.5B for Maternal Health", source: "Washington Post", author: "Lena H. Sun", time: "2025-03-16 07:45", geo: "United States", language: "English", engagement: 8900, type: "Newspaper", sentiment: "positive" },
  { id: 4, headline: "Respuesta de vacunación contra el sarampión en América Latina", source: "El País", author: "María García", time: "2025-03-16 06:30", geo: "Spain", language: "Spanish", engagement: 1450, type: "Newspaper", sentiment: "neutral" },
  { id: 5, headline: "Fentanyl Seizures at Southern Border Reach Record High", source: "AP News", author: "Elliot Spagat", time: "2025-03-16 05:22", geo: "United States", language: "English", engagement: 12400, type: "Wire", sentiment: "negative" },
  { id: 6, headline: "تقرير جديد عن مقاومة المضادات الحيوية في الشرق الأوسط", source: "Al Jazeera", author: "فاطمة العلي", time: "2025-03-16 04:15", geo: "Qatar", language: "Arabic", engagement: 890, type: "Broadcast", sentiment: "negative" },
  { id: 7, headline: "中国加强禽流感监测措施", source: "Xinhua", author: "李明", time: "2025-03-16 03:00", geo: "China", language: "Chinese", engagement: 3200, type: "Wire", sentiment: "neutral" },
  { id: 8, headline: "La France renforce sa campagne de vaccination contre la rougeole", source: "Le Monde", author: "Claire Dupont", time: "2025-03-16 02:30", geo: "France", language: "French", engagement: 1100, type: "Newspaper", sentiment: "positive" },
  { id: 9, headline: "Youth Mental Health Crisis Prompts New CDC Guidelines", source: "STAT News", author: "Helen Branswell", time: "2025-03-15 22:00", geo: "United States", language: "English", engagement: 6700, type: "Digital", sentiment: "neutral" },
  { id: 10, headline: "Opioid Crisis: New Treatment Centers Open Across Appalachia", source: "NPR", author: "Brian Mann", time: "2025-03-15 20:30", geo: "United States", language: "English", engagement: 3400, type: "Broadcast", sentiment: "positive" },
]

export const broadcastData = [
  { station: "WABC-TV", dma: "New York", topic: "H5N1 Avian Flu Update", airTime: "6:00 PM ET", audience: "1.2M", date: "2025-03-16" },
  { station: "KABC-TV", dma: "Los Angeles", topic: "Vaccine Campaign Launch", airTime: "5:30 PM PT", audience: "890K", date: "2025-03-16" },
  { station: "WLS-TV", dma: "Chicago", topic: "Opioid Settlement Distribution", airTime: "6:00 PM CT", audience: "750K", date: "2025-03-16" },
  { station: "KTRK-TV", dma: "Houston", topic: "Farm Worker H5N1 Cases", airTime: "6:00 PM CT", audience: "680K", date: "2025-03-16" },
  { station: "WPVI-TV", dma: "Philadelphia", topic: "Maternal Health Initiative", airTime: "6:00 PM ET", audience: "620K", date: "2025-03-16" },
  { station: "KXAS-TV", dma: "Dallas-Ft. Worth", topic: "Measles Outbreak Response", airTime: "5:30 PM CT", audience: "580K", date: "2025-03-16" },
  { station: "WTTG-TV", dma: "Washington DC", topic: "CDC Budget Hearing", airTime: "6:00 PM ET", audience: "540K", date: "2025-03-16" },
  { station: "WSB-TV", dma: "Atlanta", topic: "Youth Mental Health", airTime: "6:00 PM ET", audience: "510K", date: "2025-03-16" },
]

export const journalists = [
  { id: 1, name: "Helen Branswell", outlet: "STAT News", beat: "Infectious Disease", subBeat: "Pandemic Preparedness", geo: "Boston, MA", language: "English", reach: "850K", articles: 12, email: "h.branswell@stat.example", recentArticles: ["H5N1 Spreading in New Regions", "Pandemic Preparedness Gaps Identified", "WHO Emergency Meeting Recap"] },
  { id: 2, name: "Apoorva Mandavilli", outlet: "New York Times", beat: "Public Health", subBeat: "COVID-19", geo: "New York, NY", language: "English", reach: "2.1M", articles: 8, email: "a.mandavilli@nyt.example", recentArticles: ["Long COVID Research Breakthroughs", "Public Health Infrastructure Review", "Vaccine Equity Progress Report"] },
  { id: 3, name: "Lena H. Sun", outlet: "Washington Post", beat: "Vaccines", subBeat: "Immunization Policy", geo: "Washington, DC", language: "English", reach: "1.8M", articles: 10, email: "l.sun@wapo.example", recentArticles: ["New Vaccine Schedule Recommendations", "Childhood Immunization Gaps", "Global Vaccine Distribution Update"] },
  { id: 4, name: "Meg Tirrell", outlet: "NBC News", beat: "Health Policy", subBeat: "Biotech", geo: "New York, NY", language: "English", reach: "1.5M", articles: 6, email: "m.tirrell@nbc.example", recentArticles: ["FDA Drug Approval Pipeline", "Health Policy Under New Admin", "Biotech Investment Trends"] },
  { id: 5, name: "Sanjay Gupta", outlet: "CNN", beat: "Health", subBeat: "General Health", geo: "Atlanta, GA", language: "English", reach: "4.2M", articles: 4, email: "s.gupta@cnn.example", recentArticles: ["Brain Health Awareness Campaign", "Emergency Room Crisis", "Wellness Trends 2025"] },
  { id: 6, name: "María García López", outlet: "El País", beat: "Health", subBeat: "Latin America Health", geo: "Madrid, Spain", language: "Spanish", reach: "1.2M", articles: 7, email: "m.garcia@elpais.example", recentArticles: ["Measles Response in LATAM", "Dengue Season Preparedness", "Healthcare Access in Rural Areas"] },
  { id: 7, name: "Rob Stein", outlet: "NPR", beat: "Health & Science", subBeat: "Behavioral Health", geo: "Washington, DC", language: "English", reach: "2.8M", articles: 9, email: "r.stein@npr.example", recentArticles: ["Opioid Crisis New Data", "Mental Health Funding Increase", "Science Communication Evolution"] },
  { id: 8, name: "Dan Diamond", outlet: "Washington Post", beat: "Health Policy", subBeat: "HHS/CDC Policy", geo: "Washington, DC", language: "English", reach: "1.6M", articles: 11, email: "d.diamond@wapo.example", recentArticles: ["CDC Reorganization Update", "HHS Budget Analysis", "Public Health Workforce Study"] },
]

export const mediaLists = [
  { id: 1, name: "Avian Flu Response - Tier 1", journalists: 15, created: "2025-03-10", lastUpdated: "2025-03-16", campaign: "H5N1 Response" },
  { id: 2, name: "Vaccine Campaign National", journalists: 28, created: "2025-02-15", lastUpdated: "2025-03-14", campaign: "Spring Vaccination" },
  { id: 3, name: "Opioid Crisis Reporters", journalists: 12, created: "2025-01-20", lastUpdated: "2025-03-12", campaign: "Opioid Response" },
  { id: 4, name: "Spanish Language Media", journalists: 8, created: "2025-03-01", lastUpdated: "2025-03-15", campaign: "Multilingual Outreach" },
  { id: 5, name: "Broadcast Health Correspondents", journalists: 20, created: "2025-02-01", lastUpdated: "2025-03-16", campaign: "General Health" },
]

export const pressReleases = [
  { id: 1, title: "CDC Issues Updated H5N1 Guidance for Poultry Workers", date: "2025-03-15", sent: 245, received: 238, opened: 189, clicked: 92, storiesWritten: 14 },
  { id: 2, title: "Spring COVID-19 Booster Campaign Launch", date: "2025-03-12", sent: 312, received: 305, opened: 245, clicked: 128, storiesWritten: 22 },
  { id: 3, title: "Maternal Health Initiative Funding Announcement", date: "2025-03-08", sent: 198, received: 192, opened: 156, clicked: 78, storiesWritten: 9 },
  { id: 4, title: "CDC Youth Mental Health Advisory Update", date: "2025-03-05", sent: 278, received: 271, opened: 218, clicked: 145, storiesWritten: 31 },
]

export const distributionEngagement = [
  { name: "Day 1", received: 95, opened: 42, clicked: 12, stories: 2 },
  { name: "Day 2", received: 98, opened: 78, clicked: 35, stories: 5 },
  { name: "Day 3", received: 98, opened: 85, clicked: 52, stories: 8 },
  { name: "Day 4", received: 98, opened: 88, clicked: 58, stories: 11 },
  { name: "Day 5", received: 98, opened: 90, clicked: 60, stories: 13 },
  { name: "Day 6", received: 98, opened: 91, clicked: 61, stories: 14 },
  { name: "Day 7", received: 98, opened: 91, clicked: 62, stories: 14 },
]

export const briefings = [
  {
    id: 1, date: "2025-03-16", title: "Daily Media Intelligence Brief - March 16, 2025", status: "draft",
    stories: [
      { headline: "H5N1 Detected in Three New States", source: "Reuters", time: "09:14 AM", summary: "The CDC confirmed new H5N1 avian influenza cases in poultry farms across three additional states, bringing the total to 12 states with confirmed cases this season.", url: "#" },
      { headline: "Vaccine Hesitancy Survey Shows Regional Disparities", source: "STAT News", time: "08:30 AM", summary: "A new survey reveals significant regional disparities in vaccine confidence, with rural communities showing 35% lower trust in public health recommendations.", url: "#" },
      { headline: "Opioid Settlement: First Funds Reach Communities", source: "NPR", time: "07:45 AM", summary: "The first wave of opioid settlement funds has begun reaching affected communities, with priority given to treatment centers in Appalachian region.", url: "#" },
    ]
  },
  { id: 2, date: "2025-03-15", title: "Daily Media Intelligence Brief - March 15, 2025", status: "published", stories: [] },
  { id: 3, date: "2025-03-14", title: "Daily Media Intelligence Brief - March 14, 2025", status: "published", stories: [] },
]

export const analyticsData = {
  coverageTrends: [
    { month: "Oct", articles: 1250, reach: 45 },
    { month: "Nov", articles: 1380, reach: 52 },
    { month: "Dec", articles: 1100, reach: 41 },
    { month: "Jan", articles: 1520, reach: 58 },
    { month: "Feb", articles: 1680, reach: 62 },
    { month: "Mar", articles: 1890, reach: 71 },
  ],
  topicGrowth: [
    { topic: "Avian Flu (H5N1)", growth: 340, articles: 892 },
    { topic: "Vaccine Campaigns", growth: 85, articles: 1245 },
    { topic: "Opioid Crisis", growth: 42, articles: 678 },
    { topic: "Maternal Health", growth: 125, articles: 445 },
    { topic: "Youth Mental Health", growth: 210, articles: 567 },
    { topic: "Antimicrobial Resistance", growth: 65, articles: 234 },
  ],
  reachOverTime: [
    { week: "W1", reach: 12.4 },
    { week: "W2", reach: 15.2 },
    { week: "W3", reach: 14.8 },
    { week: "W4", reach: 18.5 },
    { week: "W5", reach: 22.1 },
    { week: "W6", reach: 19.8 },
    { week: "W7", reach: 25.4 },
    { week: "W8", reach: 28.2 },
  ],
}

export const globalCoverage = [
  { region: "North America", articles: 4250, percentage: 42, color: "#1a5276" },
  { region: "Europe", articles: 2180, percentage: 22, color: "#2980b9" },
  { region: "Asia", articles: 1560, percentage: 15, color: "#1abc9c" },
  { region: "Latin America", articles: 890, percentage: 9, color: "#27ae60" },
  { region: "Africa", articles: 650, percentage: 6, color: "#f39c12" },
  { region: "Oceania", articles: 420, percentage: 4, color: "#8e44ad" },
  { region: "Middle East", articles: 280, percentage: 2, color: "#e74c3c" },
]

export const emergencyData = {
  active: false,
  event: "H5N1 Human-to-Human Transmission Suspected",
  misinfoSpikes: [
    { narrative: "H5N1 is airborne and spreading rapidly", volume: 12400, growth: "+580%", risk: "critical" },
    { narrative: "Government hiding true case numbers", volume: 8900, growth: "+320%", risk: "high" },
    { narrative: "Vaccines cause the virus to mutate", volume: 5600, growth: "+210%", risk: "high" },
    { narrative: "Drinking raw milk prevents infection", volume: 3200, growth: "+150%", risk: "medium" },
  ],
  coverageVelocity: [
    { hour: "6AM", articles: 12 },
    { hour: "7AM", articles: 28 },
    { hour: "8AM", articles: 55 },
    { hour: "9AM", articles: 89 },
    { hour: "10AM", articles: 134 },
    { hour: "11AM", articles: 178 },
    { hour: "12PM", articles: 210 },
    { hour: "1PM", articles: 245 },
  ],
  topJournalists: [
    { name: "Helen Branswell", outlet: "STAT News", stories: 5, lastFiled: "12 min ago" },
    { name: "Apoorva Mandavilli", outlet: "NYT", stories: 3, lastFiled: "28 min ago" },
    { name: "Lena H. Sun", outlet: "Washington Post", stories: 4, lastFiled: "45 min ago" },
    { name: "Rob Stein", outlet: "NPR", stories: 2, lastFiled: "1 hr ago" },
  ],
}
