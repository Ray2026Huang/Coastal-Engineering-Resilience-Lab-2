/*
 * Publications — edit this list to add papers.
 *
 * Fields
 *   year, authors, title, journal, details (volume, issue, pages / article no.)
 *   doi           : DOI without the https://doi.org/ prefix ("" if none)
 *   corresponding : true if Prof. Huang is the corresponding author
 *   group         : "recent" (shown under Journal articles) or "earlier" (Selected earlier work)
 *   themes        : research-theme keys used for tags (morpho, extreme, risk, ai, lab, other)
 *
 * "Huang, W.-P." is highlighted automatically.
 */
window.PUBLICATIONS = [
  { group: "recent", year: 2026, themes: ["risk"],
    authors: "Ye, C.-J., Huang, W.-P., & Hsu, J.-C.",
    title: "Coastal risk assessment and hazard forecast analysis via a Bayesian network",
    journal: "Natural Hazards", details: "122, 633", doi: "10.1007/s11069-026-08335-y" },
  { group: "recent", year: 2024, themes: ["morpho"], corresponding: true,
    authors: "Hsu, J.-C., Huang, W.-P., & Ye, C.-J.",
    title: "Comparing the dominant factors in coastal morphology: Inappropriate infrastructure vs. climate change — A case study of the Hsinchu Fishery Harbor, Taiwan",
    journal: "Sustainability", details: "16, 5563", doi: "10.3390/su16135563" },
  { group: "recent", year: 2023, themes: ["morpho"],
    authors: "Huang, W.-P., Hsu, J.-C., & Ye, C.-J.",
    title: "Assessing the impact factors and corresponding weights affecting the coastal morphology of Hsinchu Coast, Taiwan",
    journal: "Journal of Sea Research", details: "195, 102432", doi: "10.1016/j.seares.2023.102432" },
  { group: "recent", year: 2022, themes: ["risk"],
    authors: "Huang, W.-P., Ye, C.-J., & Hsu, J.-C.",
    title: "Forecasts of the compound coastal erosion risks based on time-variant assessment: A case study on Yunlin Coast, Taiwan",
    journal: "Sustainability", details: "14(21), 14505", doi: "10.3390/su142114505" },
  { group: "recent", year: 2022, themes: ["morpho"],
    authors: "Huang, W.-P.",
    title: "Impact of coastal development on coastal morphology of Taiwan: Case studies and proposed countermeasures",
    journal: "Journal of Sea Research", details: "186, 102234", doi: "10.1016/j.seares.2022.102234" },
  { group: "recent", year: 2022, themes: ["morpho"],
    authors: "Liang, T.-Y., Chang, C.-H., Hsiao, S.-C., Huang, W.-P., Chang, T.-Y., Guo, W.-D., Liu, C.-H., Ho, J.-Y., & Chen, W.-B.",
    title: "On-site investigations of coastal erosion and accretion for the northeast of Taiwan",
    journal: "Journal of Marine Science and Engineering", details: "10(2), 282", doi: "10.3390/jmse10020282" },
  { group: "recent", year: 2021, themes: ["other"],
    authors: "Lee, M.-A., Huang, W.-P., Shen, Y.-L., Weng, J.-S., Semedi, B., Wang, Y.-C., & Chan, J.-W.",
    title: "Long-term observations of interannual and decadal variation of sea surface temperature in the Taiwan Strait",
    journal: "Journal of Marine Science and Technology", details: "29(4), Article 7", doi: "10.51400/2709-6998.1587" },
  { group: "recent", year: 2021, themes: ["other"],
    authors: "Ku, C.-Y., Liu, C.-Y., Huang, W.-P., & Xiao, J.-E.",
    title: "A meshless method with radial basis function for solving unsaturated flow in heterogeneous porous media",
    journal: "Journal of Marine Science and Technology", details: "29(5), 698–713", doi: "" },
  { group: "recent", year: 2021, themes: ["other"], corresponding: true,
    authors: "Ku, C.-Y., Hong, L.-D., Liu, C.-Y., Xiao, J.-E., & Huang, W.-P.",
    title: "Modeling transient flows in heterogeneous layered porous media using the space–time Trefftz method",
    journal: "Applied Sciences", details: "11, 3421", doi: "" },
  { group: "recent", year: 2020, themes: ["other"],
    authors: "Ku, C.-Y., Liu, C.-Y., Su, Y., Yang, L., & Huang, W.-P.",
    title: "Modeling tide-induced groundwater response in a coastal confined aquifer using the spacetime collocation approach",
    journal: "Applied Sciences", details: "10, 439", doi: "" },
  { group: "recent", year: 2019, themes: ["other"],
    authors: "Ku, C.-Y., Xiao, J.-E., Huang, W.-P., Yeih, W., & Liu, C.-Y.",
    title: "On solving two-dimensional inverse heat conduction problems using the multiple source meshless method",
    journal: "Applied Sciences", details: "9, 2629", doi: "" },

  /* ---------- Selected earlier work ---------- */
  { group: "earlier", year: 2018, themes: ["risk"],
    authors: "Huang, W.-P., Hsu, J.-C., Chen, C.-S., & Ye, C.-J.",
    title: "The study of the coastal management criteria based on risk assessment: A case study on Yunlin Coast, Taiwan",
    journal: "Water", details: "10, 988", doi: "10.3390/w10080988" },
  { group: "earlier", year: 2017, themes: ["morpho", "extreme"],
    authors: "Huang, W.-P.",
    title: "Modelling the effects of typhoons on morphological changes in the estuary of Beinan, Taiwan",
    journal: "Continental Shelf Research", details: "135, 1–13", doi: "10.1016/j.csr.2017.01.011" },
  { group: "earlier", year: 2017, themes: ["morpho"],
    authors: "Huang, W.-P., Chien, L.-K., & Ku, C.-Y.",
    title: "Assessment on morphological changes due to coastal exploitations and remedies for coastal defense",
    journal: "Proc. OMAE 2017, Vol. 7A: Ocean Engineering", details: "V07AT06A026", doi: "10.1115/OMAE2017-61206" },
  { group: "earlier", year: 2014, themes: ["risk"],
    authors: "Huang, W.-P., & Yim, J. Z.",
    title: "Sand dune restoration experiments at Bei-Men Coast, Taiwan",
    journal: "Ecological Engineering", details: "73, 409–420", doi: "10.1016/j.ecoleng.2014.09.038" },
  { group: "earlier", year: 2007, themes: ["extreme"],
    authors: "Huang, W.-P., Hsu, C.-A., Kung, C.-S., & Yim, J. Z.",
    title: "Numerical studies on typhoon surges in the northern Taiwan",
    journal: "Coastal Engineering", details: "54, 883–894", doi: "10.1016/j.coastaleng.2007.05.015" },
  { group: "earlier", year: 2003, themes: ["lab"],
    authors: "Huang, W.-P., Chou, C.-R., & Yim, J. Z.",
    title: "Experiments on the reflection coefficients of a detached breakwater in a directional wave field",
    journal: "Coastal Engineering", details: "47, 367–379", doi: "10.1016/S0378-3839(02)00129-1" }
];
