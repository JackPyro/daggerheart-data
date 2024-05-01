// const armors = [
//   {
//     name: "Leather Armor",
//     score: 2,
//     feature: "",
//     isEquipped: false,
//     tier: 0,
//     img: "icons/equipment/chest/vest-cloth-tattered-tan.webp",
//   },
//   {
//     name: "Breastplate Armor",
//     score: 3,
//     feature: "Stiff (-1 to Agility)",
//     isEquipped: false,
//     tier: 0,
//     img: "icons/equipment/chest/breastplate-banded-leather-brown.webp",
//   },
//   {
//     name: "Chainmail Armor",
//     score: 4,
//     feature: "Heavy (-1 to Evasion)",
//     isEquipped: false,
//     tier: 0,
//     img: "icons/equipment/chest/breastplate-metal-scaled-grey.webp",
//   },
//   {
//     name: "Full Plate Armor",
//     score: 5,
//     feature: "Very Heavy (-1 to Evasion and -1 to Agility)",
//     isEquipped: false,
//     tier: 0,
//     img: "icons/equipment/chest/breastplate-layered-steel-black.webp",
//   },
//   {
//     name: "Improved Leather Armor",
//     score: 4,
//     feature: "",
//     isEquipped: false,
//     tier: 1,
//     img: "icons/equipment/chest/breastplate-scale-leather.webp",
//   },
//   {
//     name: "Improved Breastplate Armor",
//     score: 5,
//     feature: "Stiff (-1 to Agility)",
//     isEquipped: false,
//     tier: 1,
//     img: "icons/equipment/chest/breastplate-collared-steel.webp",
//   },
//   {
//     name: "Improved Chainmail Armor",
//     score: 6,
//     feature: "Heavy (-1 to Evasion)",
//     isEquipped: false,
//     tier: 1,
//     img: "icons/equipment/chest/breastplate-banded-steel-gold.webp",
//   },
//   {
//     name: "Improved Full Plate Armor",
//     score: 7,
//     feature: "Very Heavy (-2 to Evasion and -1 to Agility)",
//     isEquipped: false,
//     tier: 1,
//     img: "systems/daggerheart/assets/icons/armor/fpa_1.webp",
//   },
//   {
//     name: "Elundrian Chain Armor",
//     score: 2,
//     feature:
//       "Reinforced (Increase your armor score by the number of unmarked armor slots you have)",
//     isEquipped: false,
//     tier: 1,
//     img: "systems/daggerheart/assets/icons/armor/eludrian.webp",
//   },
//   {
//     name: "Irontree Breastplate Armor",
//     score: 4,
//     feature:
//       "Sturdy (Before you mark your last armor slot, roll your armor die. On a 6, you use the armor without marking the slot. )",
//     isEquipped: false,
//     tier: 1,
//     img: "systems/daggerheart/assets/icons/armor/irontree.webp",
//   },
//   {
//     name: "Runetan Shield",
//     score: 4,
//     feature:
//       "Warded (Each armor slot is worth an extra 2d4 against magic damage. )",
//     isEquipped: false,
//     tier: 1,
//     img: "systems/daggerheart/assets/icons/armor/runetan.webp",
//   },
//   {
//     name: "Harrowbone Armor",
//     score: 4,
//     feature:
//       "Resistant (Mark 2 armor slots to make yourself resistant to the incoming damage instead of reducing it by your armor score. )",
//     isEquipped: false,
//     tier: 1,
//     img: "systems/daggerheart/assets/icons/armor/harrowbone.webp",
//   },
//   {
//     name: "Tyris Soft Armor",
//     score: 4,
//     feature: "Quiet (+2 to any rolls you make to move without being heard. )",
//     isEquipped: false,
//     tier: 1,
//     img: "systems/daggerheart/assets/icons/armor/soft.webp",
//   },
//   {
//     name: "Rosewild Armor",
//     score: 5,
//     feature:
//       "Hopeful (Anytime you need to spend Hope, you may mark an Armor Slot instead. )",
//     isEquipped: false,
//     tier: 1,
//     img: "systems/daggerheart/assets/icons/armor/rosewild.webp",
//   },
//   {
//     name: "Advanced Leather Armor",
//     score: 6,
//     feature: "-",
//     isEquipped: false,
//     tier: 2,
//     img: "systems/daggerheart/assets/icons/armor/leather_2.webp",
//   },
//   {
//     name: "Advanced Breastplate Armor",
//     score: 7,
//     feature: "Stiff (-1 to Agility)",
//     isEquipped: false,
//     tier: 2,
//     img: "systems/daggerheart/assets/icons/armor/bp_2.webp",
//   },
//   {
//     name: "Advanced Chainmail Armor",
//     score: 8,
//     feature: "Heavy (-1 to Evasion)",
//     isEquipped: false,
//     tier: 2,
//     img: "systems/daggerheart/assets/icons/armor/ca_2.webp",
//   },
//   {
//     name: "Advanced Full Plate Armor",
//     score: 9,
//     feature: "Very Heavy (-2 to Evasion and -1 to Agility)",
//     isEquipped: false,
//     tier: 2,
//     img: "systems/daggerheart/assets/icons/armor/fpa_2.webp",
//   },
//   {
//     name: "Dragonscale Armor",
//     score: 6,
//     feature:
//       "Impenetrable (When you mark an armor slot, you cannot fill your last hit point as the result of physical damage. )",
//     isEquipped: false,
//     tier: 2,
//     img: "systems/daggerheart/assets/icons/armor/dragonscale.webp",
//   },
//   {
//     name: "Body Runes",
//     score: 9,
//     feature:
//       "Painful (Mark stress every time you use one or more armor slots on an attack. )",
//     isEquipped: false,
//     tier: 2,
//     img: "systems/daggerheart/assets/icons/armor/body_runes.webp",
//   },
//   {
//     name: "Bellamoi Fine Armor",
//     score: 6,
//     feature:
//       "Gilded (When you mark an armor slot, you may spend any amount of Hope to also reduce the incoming damage by an amount equal to your proficiency per Hope spent. )",
//     isEquipped: false,
//     tier: 2,
//     img: "systems/daggerheart/assets/icons/armor/fine.webp",
//   },
//   {
//     name: "Bladefare Armor",
//     score: 9,
//     feature: "Physical (You cannot use this armor against Magic damage. )",
//     isEquipped: false,
//     tier: 2,
//     img: "systems/daggerheart/assets/icons/armor/bladefare.webp",
//   },
//   {
//     name: "Monett’s Cloak",
//     score: 9,
//     feature: "Magic (You cannot use this armor against Physical damage. )",
//     isEquipped: false,
//     tier: 2,
//     img: "systems/daggerheart/assets/icons/armor/monett.webp",
//   },
//   {
//     name: "Spiked Armor Plating",
//     score: 6,
//     feature:
//       "Sharp (Add 1d4 to any damage rolls you make on a successful Melee attack. )",
//     isEquipped: false,
//     tier: 2,
//     img: "systems/daggerheart/assets/icons/armor/spiked.webp",
//   },
//   {
//     name: "Legendary Leather Armor",
//     score: 8,
//     feature: "",
//     isEquipped: false,
//     tier: 3,
//     img: "systems/daggerheart/assets/icons/armor/leather_4.webp",
//   },
//   {
//     name: "Legendary Breastplate Armor",
//     score: 9,
//     feature: "Stiff (-1 to Agility)",
//     isEquipped: false,
//     tier: 3,
//     img: "systems/daggerheart/assets/icons/armor/bp_4.webp",
//   },
//   {
//     name: "Legendary Chainmail Armor",
//     score: 10,
//     feature: "Heavy (-1 to Evasion)",
//     isEquipped: false,
//     tier: 3,
//     img: "systems/daggerheart/assets/icons/armor/ca_4.webp",
//   },
//   {
//     name: "Legendary Full Plate Armor",
//     score: 11,
//     feature: "Very Heavy (-2 to Evasion and -1 to Agility)",
//     isEquipped: false,
//     tier: 3,
//     img: "systems/daggerheart/assets/icons/armor/fpa_4.webp",
//   },
//   {
//     name: "Emberwoven Armor",
//     score: 8,
//     feature:
//       "Burning (When an enemy strikes you in Melee, they immediately mark a stress. )",
//     isEquipped: false,
//     tier: 3,
//     img: "systems/daggerheart/assets/icons/armor/ember.webp",
//   },
//   {
//     name: "Dunamis Silkchain",
//     score: 7,
//     feature:
//       "Timeslowing (On any incoming attacks, roll 1d4 and add its value to your Evasion score. )",
//     isEquipped: false,
//     tier: 3,
//     img: "systems/daggerheart/assets/icons/armor/dunamis.webp",
//   },
//   {
//     name: "Veritas Opal Armor",
//     score: 9,
//     feature:
//       "Truthseeking (This armor glows when anyone within Close range tells a lie. )",
//     isEquipped: false,
//     tier: 3,
//     img: "systems/daggerheart/assets/icons/armor/opal.webp",
//   },
//   {
//     name: "Channeling Armor",
//     score: 7,
//     feature:
//       "Channeling (While this armor is equipped, take +1 to all Spellcast rolls. )",
//     isEquipped: false,
//     tier: 3,
//     img: "systems/daggerheart/assets/icons/armor/channeling.webp",
//   },
//   {
//     name: "Savior Chainmail",
//     score: 13,
//     feature: "Difficult (-1 to all Character Traits)",
//     isEquipped: false,
//     tier: 3,
//     img: "systems/daggerheart/assets/icons/armor/savior.webp",
//   },
//   {
//     name: "Full Reinforced Armor",
//     score: 8,
//     feature:
//       "Variable (Add +1 to your armor score for every range beyond Melee the damage is coming from. )",
//     isEquipped: false,
//     tier: 3,
//     img: "systems/daggerheart/assets/icons/armor/full.webp",
//   },
// ];

// Hooks.on("ready", async () => {
//   const [armorFolder] = await Folder.createDocuments([
//     { name: "Armor", type: "Item" },
//   ]);

//   // // const [testFolder] = await Folder.createDocuments([
//   // //   { name: "LMAO REAL?", type: "Item", parent: domainFolder.id },
//   // // ]);

//   const weaponFolderArray = [
//     { name: "Starting Armor", type: "Item", parent: armorFolder.id },
//     { name: "Tier 1", type: "Item", parent: armorFolder.id },
//     { name: "Tier 2", type: "Item", parent: armorFolder.id },
//     { name: "Tier 3", type: "Item", parent: armorFolder.id },
//   ];

//   const weaponTiers = await Folder.createDocuments(weaponFolderArray);

//   const weaponTiersObj = weaponTiers.map((fold) => fold.id);

//   armors.forEach((item) => {
//     Item.create({
//       type: "armor",
//       name: `${item.name}`,
//       system: { ...item, isEquipped: false },
//       img: item.img,
//       folder: weaponTiersObj[item.tier],
//     });
//   });
// });
