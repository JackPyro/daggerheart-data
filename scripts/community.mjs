// const itemsToAdd = [
//   {
//     name: "Highborne",
//     feature:
//       '<p class="Body-anc"><em>Being part of a Highborne community means you were born into a life of elegance, opulence, and prestige within the upper echelons of society. </em></p><p class="c5" chunk_id="feef60a4-cede-4abf-9b18-ea40a779f298"><strong>Privilege: </strong>You have advantage on rolls you make to consort with nobles, negotiate prices, or leverage your reputation to get what you want.</p>',
//     cardType: "community",
//     img: "systems/daggerheart/assets/icons/community/highborne.webp",
//   },
//   {
//     name: "Loreborne",
//     feature:
//       '<p class="communities-flavour-text"><em>Being part of a Loreborne community means you are from a society that favors strong academic or political prowess. </em></p><p class="c5" chunk_id="e3f1b6e0-3d0d-4843-aa0f-ccdb26108e23"><strong>Well-Read:</strong> You have advantage on any rolls regarding the history, culture, or politics of a prominent person or place.</p>',
//     cardType: "community",
//     img: "systems/daggerheart/assets/icons/community/loreborne.webp",
//   },
//   {
//     name: "Orderborne",
//     feature:
//       '<p class="communities-flavour-text"><em>Being part of an Orderborne community means you are from a collective that focuses on discipline or faith, and you uphold a set of principles that reflect your experience there.</em></p><p class="c5" chunk_id="a8770c24-899e-4c31-a5b1-7a027c3ff33a"><strong>Dedicated:</strong> Record three sayings or values your upbringing instilled in you. Once per short rest, when you describe how you’re embodying one of these principles through your current action, you can roll a d20 as your Hope Die instead of a d12.</p>',
//     cardType: "community",
//     img: "systems/daggerheart/assets/icons/community/orderborne.webp",
//   },
//   {
//     name: "Ridgeborne",
//     feature:
//       '<p class="communities-flavour-text"><em>Being part of a Ridgeborne community means you\'ve called the rocky peaks and sharp cliffs of the mountainside home.</em></p><p class="c5" chunk_id="99130a4c-a497-4dc0-85d5-73ef9f6882d1"><strong>Steady: </strong>You have advantage on rolls to traverse dangerous cliffs and ledges, navigate harsh environments, and use your survival knowledge. Additionally, raise your Severe Damage Threshold by 2.</p>',
//     cardType: "community",
//     img: "systems/daggerheart/assets/icons/community/ridgeborne.webp",
//   },
//   {
//     name: "Seaborne",
//     feature:
//       '<p class="communities-flavour-text"><em>Being part of a Seaborne community means you lived on or near a large body of water.</em></p><p class="c5" chunk_id="6a8703cc-1a53-41f0-8e43-de6c1f43f737"><strong>Know the Tide: </strong>You can sense the ebb and flow of life, and have learned to embrace its rhythm. When you roll with Fear, put a token on this card. Before you make an action roll, you can spend one or more of these tokens to add them as +1 modifiers to your roll. At the end of a session, clear all tokens on this card and gain that many Hope.</p>',
//     cardType: "community",
//     img: "systems/daggerheart/assets/icons/community/seaborne.webp",
//   },
//   {
//     name: "Slyborne",
//     feature:
//       '<p class="communities-flavour-text"><em>Being part of a Slyborne community means growing up in the underbelly of society, surrounded by criminals and con artists.</em></p><p class="c5" chunk_id="96b73d88-9dd8-4d06-826b-9f4f87021b2f"><strong>Scoundrel:</strong> You have advantage on any rolls to negotiate with criminals, detect lies, or find a safe place to hide.</p>',
//     cardType: "community",
//     img: "systems/daggerheart/assets/icons/community/slyborne.webp",
//   },
//   {
//     name: "Underborne",
//     feature:
//       '<p class="communities-flavour-text"><em>Being part of an Underborne community means that you’re from a subterranean society.</em></p><p class="c5" chunk_id="a72eca1f-a0f1-4ee9-9b79-ad72d8a41920"><strong>Low-Light Living: </strong>When you are in an area with low light or heavy shadow, you have advantage on rolls to hide, investigate, or perceive details within that area.</p>',
//     cardType: "community",
//     img: "systems/daggerheart/assets/icons/community/underborne.webp",
//   },
//   {
//     name: "Wanderborne",
//     feature:
//       '<p class="communities-flavour-text"><em>Being part of a Wanderborne community means that you\'ve lived as a nomad, not having a permanent home but experiencing a wide variety of cultures.</em></p><p class="c5" chunk_id="82e1987d-d781-4473-9764-fa9d10565237"><strong>Nomad: </strong>At the beginning of a session, randomly choose a different community card. At the end of the session, return that card and take this card back.</p>',
//     cardType: "community",
//     img: "systems/daggerheart/assets/icons/community/wanderborne.webp",
//   },
//   {
//     name: "Wildborne",
//     feature:
//       '<p class="communities-flavour-text"><em>Being part of a Wildborne community means you lived deep within the forest.</em></p><p class="c5" chunk_id="98aa7d83-4ef5-4000-b145-bcb4d71c04a3"><strong>Lightfoot: </strong>Your movement is naturally silent. You have advantage on rolls to move without being heard.</p>',
//     cardType: "community",
//     img: "systems/daggerheart/assets/icons/community/wildborne.webp",
//   },
// ];
// Hooks.on("ready", async () => {
//   console.log("ready");
//   const [raceFolder] = await Folder.createDocuments([
//     { name: "Community", type: "Item" },
//   ]);

//   itemsToAdd.forEach((item) => {
//     Item.create({
//       type: "card",
//       name: `${item.name}`,
//       system: { ...item },
//       img: item.img,
//       folder: raceFolder.id,
//     });
//   });
// });
