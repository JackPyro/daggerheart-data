// const itemsToAdd = [
//   {
//     name: "Clank",
//     feature:
//       '<p class="italics-ancestry">Clanks are sentient mechanical beings built from such materials as metal, wood, stone, and clay, to resemble humanoids, animals, or even inanimate objects.</p><p class="Body-anc"><strong><em>Purposeful Design:</em></strong> Decide who you were created by and for what purpose. When you generate your Experiences at character creation, choose one that reflects this purpose and increase it by 1.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/clank.webp",
//   },
//   {
//     name: "Daemon",
//     feature:
//       '<p class="italics-ancestry">Those of daemon ancestry are the humanoid descendants of the Fallen Gods, who possess sharp canines, pointed ears, and horns that come in a variety of styles.</p><p class="c5" chunk_id="d6bff64c-c890-474f-8eb5-c96e7e708b9e"><strong>Fearless:</strong> When you roll with <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="fear-playtest">Fear</tooltip>, you can mark 2 <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="stress-playtest">Stress</tooltip> to make it a roll with <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="hope-playtest">Hope</tooltip> instead. </p>\n<p class="c5" chunk_id="237512d4-bc7b-4cfc-90d2-8cf9f6b76cca"><strong>Dread Visage: </strong>You have advantage on rolls to intimidate non-daemon creatures.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/daemon.webp",
//   },
//   {
//     name: "Drakona",
//     feature:
//       '<p class="italics-ancestry">Drakona resemble wingless dragons in humanoid form and possess a powerful elemental breath.</p><p class="c5" chunk_id="b9d09368-a6dc-4237-b19a-597071560ea9"><strong>Elemental Breath:</strong> At character creation, choose one of the following elements to describe your elemental breath: Fire, Ice, Lightning, Poison, Acid. Spend a Hope to make an <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="instinct-playtest">Instinct</tooltip> Roll using your breath against an enemy or group of enemies within Close range. Deal d8 magic damage using your Proficiency to all enemies you succeed against.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/drakona.webp",
//   },
//   {
//     name: "Dwarf",
//     feature:
//       '<p class="italics-ancestry">Dwarves are most easily recognized as short humanoids with square features, dense musculature, and thick hair.</p><p class="c5" chunk_id="8ba31670-e649-4a5f-88f2-50e4fef0035a"><strong>Increased Fortitude: </strong>When you take physical damage, you can spend three <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="hope-playtest">Hope</tooltip> to halve that damage instead.\n</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/dwarf.webp",
//   },
//   {
//     name: "Elf",
//     feature:
//       '<p class="italics-ancestry">Elves are typically tall humanoids with pointed ears and acutely attuned senses.</p><p class="c5" chunk_id="3e5bcb33-e890-4bea-a525-617a0526773a"><strong>Celestial Trance:</strong> During a long rest, as one of your downtime moves, you can choose to drop into a celestial trance. When you do, roll a number of d8 equal to the <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="stress-playtest">Stress</tooltip> you have marked, then clear all Stress. If two more of these dice roll the same number, also clear all <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="hit-points-and-stress-playtest">Hit Points</tooltip>.\n</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/elf.webp",
//   },
//   {
//     name: "Faerie",
//     feature:
//       '<p class="italics-ancestry">Those of faerie ancestry are winged humanoid creatures with insect-like features.</p><p class="c5" chunk_id="4f2fa08f-c462-4764-a7a0-df84cde17152"><strong>Wings: </strong>Mark <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="stress-playtest">Stress</tooltip> to take flight for a number of minutes equal to your Level. While flying, your <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="evasion-playtest">Evasion</tooltip> score increases by 1.\n</p>\n<p class="c5" chunk_id="d3a0124c-66c4-4237-8820-9b0306f68380"><strong>Luckbender:</strong> Once per session, after you or an ally in Close range makes an <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="action-rolls-playtest">Action</tooltip> Roll, you can spend 3 <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="hope-playtest">Hope</tooltip> to allow a reroll of the <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="duality-dice-playtest">Duality</tooltip> Dice. If you do, take the new result.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/faerie.webp",
//   },
//   {
//     name: "Faun",
//     feature:
//       '<p class="italics-ancestry">Fauns resemble goats in humanoid form, with curving horns, square pupils, and cloven hooves.</p><p chunk_id="adee88d7-6772-491a-a340-b18bed640f63"><strong>Leap:</strong> You can easily leap up to a Close range across gaps or chasms without making an <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="agility-playtest">Agility</tooltip> roll.</p>\n<p class="c5" chunk_id="40ded37a-42c8-4af9-afef-4beb3a8fc043"><strong>Kick: </strong>On a successful melee attack, you can mark a <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="stress-playtest">Stress</tooltip> to kick yourself off of the target, adding 2d6 to the damage and pushing either them or yourself out of <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="melee">Melee</tooltip> range.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/faun.webp",
//   },
//   {
//     name: "Firbolg",
//     feature:
//       '<p class="italics-ancestry">Firbolgs resemble cows in humanoid form, typically recognized by their broad nose and long ears.</p><p class="Body-anc"><strong><em>Natural Calm:</em></strong> Whenever you should mark a <strong>Stress</strong>, roll <strong>1d6</strong>. On a <strong>6</strong>, you take no <strong>Stress</strong>.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/firbolg.webp",
//   },
//   {
//     name: "Fungril",
//     feature:
//       '<p class="italics-ancestry">Fungrils resemble a mushroom in humanoid form, bearing the features of the fungus from which they descend.</p><p class="c5" chunk_id="a6bd8252-353b-4e96-86e4-370a09c33f7e"><strong>Circle of Life:</strong> You can draw the last life essence from the recently deceased. When within Very Close range of a creature who marks their last hit point and dies, spend 2 <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="hope-playtest">Hope</tooltip> to describe what death ritual you perform and clear one of your <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="hit-points-and-stress-playtest">Hit Points</tooltip>.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/fungril.webp",
//   },
//   {
//     name: "Galapa",
//     feature:
//       '<p class="italics-ancestry">Those of galapa ancestry resemble anthropomorphic turtles, with a large, domed shell into which the head and limbs can retract inside for defense.</p><p class="Body-anc"><strong><em>Shell of Protection:</em></strong> Add your Proficiency to your armor score. If you decide not to wear armor, your shell is your active armor and has an armor score equal to your Proficiency.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/galapa.webp",
//   },
//   {
//     name: "Giant",
//     feature:
//       '<p class="italics-ancestry">Giants are very tall humanoids with long arms, broad stature, and one to three eyes.</p><p chunk_id="36031223-276d-4406-9c13-16d765f1f2ef" class=""><strong>Endurance:</strong> Gain an additional <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="hit-points-and-stress-playtest">Hit Point</tooltip> slot at character creation. </p>\n<p chunk_id="011489c4-b609-4240-a22e-19820f3ccd86" class=""><strong>Reach:</strong> Any melee weapon you wield has its range increased to <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="very-close">Very Close</tooltip>.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/giant.webp",
//   },
//   {
//     name: "Goblin",
//     feature:
//       '<p class="italics-ancestry">Those of goblin ancestry are small humanoids typically recognized by their large eyes and massive, membranous ears.</p><p class="c5" chunk_id="cbb490a1-10a8-4e44-b4a1-425d7dfa85f2"><strong>Danger Sense:</strong> Once per short rest, you can mark a <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="stress-playtest">Stress</tooltip> to make the GM reroll an attack roll. If it still hits you, reduce the incoming damage by your Proficiency.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/goblin.webp",
//   },
//   {
//     name: "Halfling",
//     feature:
//       '<p class="italics-ancestry">Halflings are typically smaller humanoids, with large hairy feet and prominent, rounded ears.</p><p class="c5" chunk_id="c50ec3ea-a5a5-4784-8dff-a9b142fee3d0"><strong>Little Lucky:</strong> At the beginning of each session, give everyone in your party a Hope. Additionally, you can always reroll a 1 on your <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="hope-playtest">Hope</tooltip> Die, taking the new result.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/halfling.webp",
//   },
//   {
//     name: "Human",
//     feature:
//       '<p class="italics-ancestry">Those of human ancestry are most easily recognized by their dexterous hands, rounded ears, and bodies built for endurance.</p><p class="c5" chunk_id="41911414-76a5-4269-bec4-6dd27158bb7e"><strong>Perseverance</strong>: When you fail a roll that utilized one of your Experiences, you can mark a <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="stress-playtest">Stress</tooltip> to reroll. You must take the new result.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/human.webp",
//   },
//   {
//     name: "Katari",
//     feature:
//       '<p class="italics-ancestry">Those of katari ancestry are feline humanoids with soft fur and high, triangular ears.</p><p class="c5" chunk_id="e5058169-f8f0-4353-b754-e07c6592d500"><strong>Feline Instincts:</strong> Before you make an <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="agility-playtest">Agility</tooltip> roll, you can spend any number of <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="hope-playtest">Hope</tooltip>, adding +1 to the roll result for each Hope you spend.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/katari.webp",
//   },
//   {
//     name: "Orc",
//     feature:
//       '<p class="italics-ancestry">Orcs are most easily recognized as humanoids with square features and boar-like tusks.</p><p class="Body-anc"><strong><em>Sturdy:</em></strong> At character creation and every time you level up, raise either your Major or Severe damage threshold by 1.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/orc.webp",
//   },
//   {
//     name: "Ribbet",
//     feature:
//       '<p class="italics-ancestry">Those of ribbet ancestry resemble anthropomorphic frogs with protruding eyes and webbed hands and feet. </p><p class="Body-anc"><strong><em>Amphibious:</em></strong> You can breathe and move underwater just as easily as on land. </p><p class="c5" chunk_id="2ffe07a9-38d2-4463-8395-5c95925732ed"><strong>Long Tongue: </strong>You can use your long tongue to grab onto things close to you. You can also mark a <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="stress-playtest">Stress</tooltip> to unleash it as a <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="finesse-playtest">Finesse</tooltip> <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="close">Close</tooltip> weapon that does d12 physical damage using your Proficiency.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/ribbet.webp",
//   },
//   {
//     name: "Simiah",
//     feature:
//       '<p class="italics-ancestry">Simiah resemble anthropomorphic monkeys and apes, with long limbs and prehensile feet.</p><p class="c5" chunk_id="9c4e168b-3272-48cc-8193-67ee9d8b004d"><strong>Nimble:</strong> Take advantage on <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="agility-playtest">Agility</tooltip> Rolls that involve balancing and climbing, and add +1 to your <tooltip class="tooltip-convert" nexus="daggerheart" category="rule" element="evasion-playtest">Evasion</tooltip> at character creation.</p>',
//     cardType: "ancestry",
//     img: "systems/daggerheart/assets/icons/ancestries/simiah.webp",
//   },
// ];

// Hooks.on("ready", async () => {
//   console.log("ready");
//   const [raceFolder] = await Folder.createDocuments([
//     { name: "Ancestry", type: "Item" },
//   ]);

//   itemsToAdd.forEach((item) => {
//     Item.create({
//       type: "card",
//       name: `${item.name}`,
//       system: { ...item, isEquipped: false },
//       img: item.img,
//       folder: raceFolder.id,
//     });
//   });
// });
