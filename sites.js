/*
 * Study sites shown on the home-page map.
 * The marker positions are drawn in index.html (the <g id="site-markers"> group);
 * this file holds the text shown when a site is selected.
 *
 *   n      : marker number
 *   coord  : display coordinates
 *   focus  : one-line summary { en, zh }
 *   work   : list of { when, en, zh }
 *   link   : in-page anchor for the related case study ("" if none)
 */
window.SITES = {
  keelung: { n: 1, lab: true, coord: "25.15°N 121.78°E",
    name: { en: "NTOU, Keelung", zh: "海洋大學（基隆）" },
    focus: { en: "Home of the lab: small-scale wave basin, image-based wave measurement and the Environmental Wind Tunnel.",
             zh: "研究室所在地：小尺度造波水槽、影像量測系統與環境風洞。" },
    work: [
      { when: "2018–2020", en: "Integration of central and local disaster-response information, Keelung City (NSTC, Co-PI)", zh: "中央與基隆市防救災情資整合（國科會，共同主持人）" },
      { when: "Lab", en: "Servo-driven piston and flap wave makers at 1:500 scale", zh: "1:500 縮尺伺服馬達活塞式與推板式造波機" }
    ], link: "#facilities" },
  taipei: { n: 2, coord: "25.16°N 121.38°E",
    name: { en: "Taipei Port", zh: "臺北港" },
    focus: { en: "Wave-height estimation from marine radar images.", zh: "以雷達影像推估波高。" },
    work: [
      { when: "Method", en: "Radar image sequences converted to wave height; applied at Taipei Port", zh: "雷達影像轉換為波高，應用於臺北港" }
    ], link: "#case-remote" },
  taoyuan: { n: 3, coord: "25.04°N 121.08°E",
    name: { en: "Taoyuan coast", zh: "桃園海岸" },
    focus: { en: "Shoreline-change monitoring and risk assessment of general seawalls.", zh: "海岸變遷監測與一般性海堤風險評估。" },
    work: [
      { when: "2020–2021", en: "Shoreline-change monitoring of seawall areas and key settlements (1/2, 2/2)", zh: "一般性海堤區域及重要聚落海岸變遷監測調查（1/2、2/2）" },
      { when: "2023–2024", en: "Risk assessment of general seawalls, Taoyuan City", zh: "桃園市一般性海堤風險評估" }
    ], link: "" },
  hsinchu: { n: 4, coord: "24.85°N 120.92°E",
    name: { en: "Hsinchu coast", zh: "新竹海岸" },
    focus: { en: "Sediment bypassing at the Hsinchu Fishery Harbor, monsoon wave-field modelling and long-term topographic monitoring.",
             zh: "新竹漁港迂迴供沙、季風波場模擬與長期地形監測。" },
    work: [
      { when: "2021–2025", en: "Hsinchu Fishery Harbor coastal monitoring and protection plans", zh: "新竹漁港海岸監測防護計畫" },
      { when: "2024–2025", en: "Coastal topography monitoring survey, Hsinchu City", zh: "新竹市海岸地形監測調查" },
      { when: "2023, 2024", en: "Journal of Sea Research; Sustainability", zh: "Journal of Sea Research、Sustainability 論文" }
    ], link: "#case-hsinchu" },
  yunlin: { n: 5, coord: "23.66°N 120.17°E",
    name: { en: "Yunlin coast", zh: "雲林海岸" },
    focus: { en: "Coastal erosion risk mapping and time-variant compound risk forecasting.", zh: "海岸侵蝕災害風險地圖與時變複合風險預測。" },
    work: [
      { when: "2018", en: "Coastal management criteria based on risk assessment (Water)", zh: "以風險評估訂定海岸管理準則（Water）" },
      { when: "2022", en: "Time-variant compound erosion risk forecasts (Sustainability)", zh: "時變複合侵蝕風險預測（Sustainability）" }
    ], link: "#case-yunlin" },
  tainan: { n: 6, coord: "23.28°N 120.11°E",
    name: { en: "Bei-Men coast, Tainan", zh: "臺南北門海岸" },
    focus: { en: "Field experiments on sand-dune and sandbar restoration, with technology transfer to agencies.",
             zh: "沙丘、沙洲復育現地試驗與工法技術移轉。" },
    work: [
      { when: "Study", en: "Coastal dune and sandbar restoration planning (WRA Water Resources Planning Institute)", zh: "海岸沙丘沙洲復育規劃（水利規劃試驗所）" },
      { when: "2014", en: "Sand dune restoration experiments at Bei-Men Coast (Ecological Engineering)", zh: "北門海岸沙丘復育試驗（Ecological Engineering）" }
    ], link: "#case-dune" },
  yilan: { n: 7, coord: "24.59°N 121.87°E",
    name: { en: "Yilan coast & Su-ao Port", zh: "宜蘭海岸與蘇澳港" },
    focus: { en: "Long-term zero-datum water level, harbor tranquility and erosion–accretion on the northeast coast.",
             zh: "零米水位長期變化、港池靜穩度與東北海岸侵淤。" },
    work: [
      { when: "2020", en: "Historical analysis of zero-datum water level, Yilan coast (NCDR)", zh: "宜蘭海岸線零米水位變化歷年分析（國家災害防救科技中心）" },
      { when: "2022", en: "On-site investigations of erosion and accretion, northeast Taiwan (JMSE)", zh: "東北海岸侵淤現地調查（JMSE）" },
      { when: "2024", en: "Harbor tranquility analysis, Su-ao Port", zh: "蘇澳港靜穩度分析" }
    ], link: "" },
  hualien: { n: 8, coord: "23.98°N 121.62°E",
    name: { en: "Hualien coast", zh: "花蓮海岸" },
    focus: { en: "Typhoon-wave hazard, seawall risk assessment and performance of erosion-control works.",
             zh: "颱風波浪災害潛勢、海堤風險評估與侵蝕防治成效。" },
    work: [
      { when: "2021–2022", en: "Risk assessment of general seawalls, Hualien County (1/2, 2/2)", zh: "花蓮縣一般性海堤風險評估（1/2、2/2）" },
      { when: "2022", en: "Typhoon Hinnamnor nearshore wave simulation and hazard assessment", zh: "軒嵐諾颱風近岸波浪模擬與災害潛勢評析" },
      { when: "2023–2024", en: "Baseline monitoring and assessment of degraded protected segments", zh: "海岸基本資料監測及既有防護設施劣化評估" },
      { when: "2025–2026", en: "Xinshe coast monitoring and protection strategies", zh: "新社海岸監測及防護策略研擬" }
    ], link: "#case-hinnamnor" },
  taitung: { n: 9, coord: "22.76°N 121.16°E",
    name: { en: "Taitung coast", zh: "臺東海岸" },
    focus: { en: "River sediment supply at the Beinan River mouth, shoreline monitoring, sea-cliff erosion and adaptation planning.",
             zh: "卑南溪口河川輸砂、海岸變遷監測、海崖侵蝕與調適規劃。" },
    work: [
      { when: "2017", en: "Typhoon effects on morphology of the Beinan estuary (Continental Shelf Research)", zh: "颱風對卑南溪河口地形之影響（Continental Shelf Research）" },
      { when: "2020–2026", en: "Shoreline-change monitoring along several coastal segments, Fugang to Dulanbi and Taimali", zh: "富岡至都蘭鼻、太麻里等多個岸段之海岸變遷監測調查" },
      { when: "2021–2022", en: "Seawall risk assessment and response strategies (1/2, 2/2)", zh: "一般性海堤風險評估與因應策略（1/2、2/2）" },
      { when: "2022–2023", en: "Sea-cliff erosion control, Jialulan Recreation Area", zh: "加路蘭遊憩區海崖侵蝕防治" }
    ], link: "#case-beinan" },
  green: { n: 10, coord: "22.66°N 121.49°E",
    name: { en: "Green Island", zh: "綠島" },
    focus: { en: "Risk assessment and response strategies for general seawalls on an offshore island.", zh: "離島一般性海堤風險評估與因應策略。" },
    work: [
      { when: "2023–2024", en: "Seawall risk assessment, Green Island and Orchid Island", zh: "綠島與蘭嶼一般性海堤岸段風險評估" }
    ], link: "" },
  orchid: { n: 11, coord: "22.05°N 121.55°E",
    name: { en: "Orchid Island (Lanyu)", zh: "蘭嶼" },
    focus: { en: "Risk assessment and response strategies for general seawalls on an offshore island.", zh: "離島一般性海堤風險評估與因應策略。" },
    work: [
      { when: "2023–2024", en: "Seawall risk assessment, Green Island and Orchid Island", zh: "綠島與蘭嶼一般性海堤岸段風險評估" }
    ], link: "" },
  kinmen: { n: 12, coord: "24.44°N 118.36°E",
    name: { en: "Kinmen", zh: "金門" },
    focus: { en: "Erosion–accretion assessment and integrated coastal protection planning.", zh: "海岸侵淤評估與海岸防護整合規劃。" },
    work: [
      { when: "2021–2022", en: "Monitoring and erosion–accretion assessment, western Lieyu", zh: "烈嶼鄉西側監測及侵淤評估" },
      { when: "2022", en: "Risk assessment of general seawalls, Kinmen County", zh: "金門縣一般性海堤風險評估" },
      { when: "2023–2024", en: "Coast assessment and planning: Shuitou–Guningtou–Mashan, Dadan–Erdan", zh: "水頭至古寧頭、古寧頭至馬山、大二膽島評估規劃" },
      { when: "2025–2026", en: "Integrated coastal protection planning for Kinmen Island", zh: "金門本島海岸防護整合規劃" }
    ], link: "" }
};
