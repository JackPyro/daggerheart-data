// const domains = [
//   {
//     name: "Bare Bones",
//     feature:
//       '<p class="Body-Foundation">While this card is in your loadout, if you choose not to equip Armor, you have an Armor Score equal to <strong>3</strong> + your level.</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Bolt Beacon",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against a target within far range. On a success, spend a <strong>Hope</strong> to send a bolt of shimmering light towards them. Treat it like a ranged weapon, dealing <strong>d8</strong> magic damage using your proficiency that makes them glow brightly and become temporarily Vulnerable.</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Book of Ava",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Power Push:</em></strong> Make a <strong>Spellcast Roll</strong> against a target in melee range. On a success, they are blasted back to far range and take <strong>d10</strong> magic damage using your proficiency.</p><p class="Body"><strong><em>Tava’s Armor:</em></strong> Use an action to spend a <strong>Hope</strong> that gives a target you can touch +1d6 to their Armor score the next time they mark an Armor Slot. You can\'t stack Tava’s Armor on one creature.</p><p class="Body-Foundation"><strong><em>Ice Spikes:</em></strong> Make a <strong>Spellcast Roll</strong> to summon large ice spikes within very far range. If you use them as a weapon, on a success, deal <strong>d6</strong> physical damage using your proficiency.</p>',
//     recall: 2,
//     level: 1,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Book of Illiat",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Slumber:</em></strong> Make a <strong>Spellcast Roll</strong> against a very close target. On a success, they fall into a deep sleep until they take damage or the GM spends a <strong>Fear</strong> to awaken them.</p><p class="Body-Foundation"><strong><em>Arcane Barrage:</em></strong> Once per short rest, use an action to spend any number of <strong>Hope</strong> and shoot magical projectiles that automatically strike an enemy within close range. Roll an amount of <strong>d6</strong> equal to the <strong>Hope</strong> you spent, and deal that much direct magic damage.</p><p class="Body-Foundation"><strong><em>Telepathy:</em></strong> You may open a line of mental communication with one target you can see. This connection lasts until you use this spell to connect with another creature.</p>',
//     recall: 2,
//     level: 1,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Book of Tyfar",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Wild Flame:</em></strong> Make a <strong>Spellcast Roll</strong> against up to three enemies in melee range of you. A flame erupts from your hand, dealing <strong>2d6</strong> magic damage and a <strong>Stress</strong> to any you succeed against.</p><p class="Body-Foundation"><strong><em>Magic Hand:</em></strong> You can reach out with a magical hand the same size and strength as your own to anywhere within far range of you.</p><p class="Body-Foundation"><strong><em>Mysterious Mist:</em></strong> Use an action to spend a <strong>Hope</strong> and cast a temporary, thick fog that encircles a stationary area up to very close range your current location. Everyone within is <em>Hidden</em> to anybody outside the fog.</p>',
//     recall: 2,
//     level: 1,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Deft Deceiver",
//     feature:
//       '<p class="Body-Foundation">Spend a <strong>Hope</strong> to take advantage on a roll you make to deceive or trick someone into believing a lie you tell them.</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Ability",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Deft Maneuvers",
//     feature:
//       '<p class="Body-Foundation">You can mark a <strong>Stress</strong> to move anywhere within far range without making an <strong>Agility Roll</strong> to get there.</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Enrapture",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against a close target. </p><p class="Body-Foundation">On a success, you can temporarily keep their attention on you, narrowing their field of view and drowning out any sound but your voice. You may also mark a <strong>Stress</strong> on a success to deal <strong>2 Stress</strong> to the target.</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Forceful Push",
//     feature:
//       '<p class="Body-Foundation">When you make a successful melee attack, you can push the target out of melee range and spend a <strong>Hope</strong> to make them temporarily Vulnerable.</p><p class="Body-Foundation">On a success with <strong>Hope</strong>, add an additional <strong>1d6</strong> to your damage dice on this attack.</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Gifted Tracker",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> to track or ask the GM one question you’d be able to learn about a specific creature or group of creatures based on signs of their passage. If you spend a <strong>Hope</strong> before the roll, you can double your spellcast trait as the modifier.</p><p class=\\"Body-Foundation\\">If you encounter any creatures you’ve tracked, your Evasion against them is <strong>+2</strong>.</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Ability",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "I Am Your Shield",
//     feature:
//       '<p class="Body-Foundation">When an ally very close to you is going to take damage, you may mark a <strong>stress</strong> to stand in its way and take the damage instead. Reduce the damage by a value equal to your Strength Trait. You may also reduce the damage by spending armor slots.</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "I See It Coming",
//     feature:
//       '<p class="Body-Foundation">When you are targeted by a ranged attack, mark a <strong>Stress</strong> to roll a <strong>d6</strong> and increase your Evasion against this attack by its value.</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Inspirational Words",
//     feature:
//       '<p class="Body-Foundation-No-BOLDITALIC">You can imbue your speech with enhancing power. At the beginning of a session, place a number of tokens on this card equal to your Presence score. When you recite your words, spend a token and choose an option from the list below to grant to the ally you are speaking to. If the action tracker is active, place that token on it. At the end of a session, clear all tokens.</p><ul><li class=\\"vertical-card-list-found\\"><em>Clear a</em> <em>Stress</em> </li><li class=\\"vertical-card-list-found\\"><em>Heal a Hit Point.</em></li><li class=\\"vertical-card-list-found\\"><em>Gain a</em> <em>Hope</em>.</li></ul>',
//     recall: 1,
//     level: 1,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Mending Touch",
//     feature:
//       '<p class="Body-Foundation">You lay your hands upon a creature and channel healing magic to help close their wounds. When you can take a few minutes to focus on the person you’re helping, spend <strong>2 Hope</strong> and heal a <strong>Hit Point</strong> or a <strong>Stress</strong>. </p><p class="Body-Foundation">Once per long rest, when you spend this healing time learning something new about them or revealing something about yourself, the <strong>2 Hope</strong> you spend heals <strong>2 Hit Points</strong> or <strong>2 Stress</strong> instead.</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Nature’s Tongue",
//     feature:
//       '<p class="Body-Foundation">You can speak the language of the hidden, natural world. When you want to speak to the plants and animals around you, make an <strong>Instinct Roll</strong> (<strong>12</strong>). On a success, they’ll give you the information they know. With <strong>Fear</strong>, their knowledge might be limited or come at a cost.</p><p class="Body-Foundation">In addition, whenever you make a <strong>Spellcast Roll</strong> while within a natural environment, you may spend a <strong>Hope</strong> before the roll to add <strong>+1</strong> to the result.</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Ability",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Nimble",
//     feature:
//       '<p class="Body-Foundation">While this card is in your loadout, add half of your Agility score to your Evasion (rounded up).</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Not Good Enough",
//     feature:
//       '<p class="Body-Foundation">When you roll your damage dice, you may reroll any <strong>1s </strong>or <strong>2s</strong>. If you do, you must take the new result, even on a <strong>1</strong> or <strong>2</strong>.</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Pick and Pull",
//     feature:
//       '<p class="Body-Foundation">You have advantage on any attempt to pick a non-magical lock, disarm a trap, or steal an item from a target (either through stealth or by force).</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Ability",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Rain of Blades",
//     feature:
//       '<p class="Body-Foundation">Spend <strong>2 Hope</strong> to conjure throwing blades that strike any enemies very close to you. Make a <strong>Spellcast Roll</strong> and all targets that you succeed against take <strong>d8</strong> magic damage using your proficiency. </p><p class=\\"Body-Foundation\\">If any targets you hit are currently Vulnerable, they take an additional <strong>1d8</strong> magic damage.</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Reassurance",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, after an ally attempts an <strong>Action Roll</strong>, but before the consequences take place, you may offer assistance or words of support. When you do, they may reroll their dice. They must accept the result of this new roll.</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Retaliation",
//     feature:
//       '<p class="Body-Foundation">When you take damage from a creature in melee range, you may mark a <strong>Stress</strong> to immediately deal weapon damage to the creature at half Proficiency (rounded up).</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Rune Ward",
//     feature:
//       '<p class="Body-Foundation">You have a deeply personal token or trinket that can be infused with protective magic and held as a ward by you or an ally. Describe what it is and why it’s important to you. When the holder of the ward takes damage, they can <strong>spend Hope</strong> to reduce it by <strong>1d8</strong>. </p><p class="Body-Foundation">If the ward die rolls an <strong>8</strong>, its power will temporarily end after it reduces damage this turn. It can be recharged for free on your next rest.</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Uncanny Disguise",
//     feature:
//       '<p class="Body-Foundation">When you have a few minutes to prepare, you can mark a <strong>Stress</strong> to don the facade of any humanoid you can picture clearly in your mind. While disguised, all Presence rolls to avoid scrutiny have advantage. The spell will begin to fade after one hour.</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Unleash Chaos",
//     feature:
//       '<p class="Body-Foundation">At the beginning of a session, place a number of tokens equal to your Spellcast Trait on this card. </p><p class="Body-Foundation">You can make a <strong>Spellcast Roll</strong> against a target within far range and spend any number of tokens to channel raw energy from within yourself and unleash against them. On a success, roll a number of <strong>d10</strong> equal to the tokens you spent, and do that much magic damage to the target. Mark a <strong>Stress</strong> to replenish this card with tokens, up to your Spellcast Trait. Clear all tokens at the end of the session.</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Vicious Entangle",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against a target within far range. On a success, roots and vines reach out from the ground and temporarily Restrain them, dealing <strong>1d8</strong> physical damage.</p><p class="Body-Foundation">On a success, you may also spend a <strong>Hope</strong> to temporarily Restrain any enemies very close to your target.</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Wall Walk",
//     feature:
//       '<p class="Body-Foundation">Spend a <strong>Hope</strong> to allow a creature you can touch to climb on walls and ceilings as easily as walking on the ground below. This spell will end after ten minutes or when you cast it on another creature.</p>',
//     recall: 1,
//     level: 1,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Whirlwind",
//     feature:
//       '<p class="Body-Foundation">When you make a successful attack using a weapon with melee or very close range, you may also spend a <strong>Hope</strong> to use that roll against every other enemy in that weapon’s range. Any additional enemies you succeed against with this ability take half damage (rounded up).</p>',
//     recall: 0,
//     level: 1,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "A Soldier’s Bond",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, if you compliment someone or ask them about something they are good at, you may both take <strong>3 Hope</strong>.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Body Basher",
//     feature:
//       '<p class="Body-Foundation">You use the full force of your body in the fight. On a successful melee attack, always add your Strength Trait to your damage total.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Bold Presence",
//     feature:
//       '<p class="Body-Foundation">Whenever you make a Presence roll against a hostile target, you can also add your Strength trait to the roll.</p>',
//     recall: 0,
//     level: 2,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Book of Sitil",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Adjust Appearance:</em></strong> You can magically shift your appearance and clothing to avoid recognition.</p><p class="Body-Foundation-No-BOLDITALIC"><strong><em>Parallela: </em></strong>Spend a <strong>Hope</strong> to cast this spell on yourself or one ally close to you. The next time that creature makes an attack, they can split the damage between any targets in range that the attack roll succeeds against.</p><p class="Body-Foundation"><strong><em>Illusion:</em></strong> Make a <strong>Spellcast Roll</strong> (<strong>14</strong>). On a success, create a temporary visual illusion no larger than you within close range that will last for as long as you look at it. It holds up to scrutiny until an observer is within melee range.</p>',
//     recall: 2,
//     level: 2,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Book of Vagras",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Runic Lock:</em></strong> You can infuse a rune upon an object you are touching that can close (a lock, chest, box, bag, etc). It will lock the object from being opened by anyone besides those you choose. The spell can be broken by somebody with magic and an hour of time to study it.</p><p class="Body-Foundation"><strong><em>Arcane Door:</em></strong> When you have no enemies in melee range, make a <strong>Spellcast Roll</strong> (<strong>13</strong>). On a success, spend a <strong>Hope</strong> to disappear from where you are and reappear somewhere within far range you can see.  </p><p class="Body-Foundation"><strong><em>Reveal:</em></strong> Make a <strong>Spellcast Roll</strong>. If there is anything hidden within close range the roll would succeed against, it is no longer hidden.</p>',
//     recall: 2,
//     level: 2,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Cinder Grasp",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against a target in melee range. On a success, the target instantly bursts into flames, dealing <strong>1d20</strong> magic damage and temporarily catching them on fire. </p><p class="Body-Foundation">Any time a creature tries to act while on fire, it must take an additional <strong>2d6</strong> magic damage if it is still on fire at the end of its action.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Conjure Swarm",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Tekaira Armored Beetles:</em></strong> Mark an Armor Slot to encircle yourself in beetles. When you take damage, you can reduce the damage by your Armor Score. Anytime you reduce damage in this way, the beetles will dissipate unless you spend a <strong>Hope</strong> to keep them active.</p><p class="Body-Foundation"><strong><em>Fire Flies:</em></strong> Make a <strong>Spellcast Roll</strong> against any close enemies. On a success, spend a<strong> Hope</strong> to have the fire flies swarm them, doing <strong>2d8</strong> magic damage to all targets you succeeded against.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Ferocity",
//     feature:
//       '<p class="Body-Foundation">When you cause an enemy to mark any Hit Points, spend a <strong>Hope</strong> to temporarily increase your Evasion by the number of Hit Points you dealt. This bonus lasts until after the next attack that targets you.</p>',
//     recall: 2,
//     level: 2,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Final Words",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>13</strong>). On a success, you can infuse a moment of life into a corpse in order to speak with it. If the result is with <strong>Hope</strong>, it will answer up to three questions. If the result is with <strong>Fear</strong>, only one. Once the spell ends or on a failure, the body will turn to dust.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Floating Eye",
//     feature:
//       '<p class="Body-Foundation">You can spend a <strong>Hope</strong> to create a single, small floating orb that you can control anywhere within very far range from you. While controlling it, you can choose to see through its vision as though it’s your own. If the orb takes damage or moves out of range, the spell will immediately end.</p>',
//     recall: 0,
//     level: 2,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Healing Hands",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>13</strong>) and target a creature other than yourself in melee. On a success, mark a <strong>Stress</strong> to heal the target <strong>2 Hit Points</strong> or <strong>2 Stress</strong>. On a failure, mark a <strong>Stress</strong> to heal the target <strong>1 Hit Point</strong> or <strong>1 Stress</strong>. You can\'t heal the same target again until after your next short rest.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Midnight Spirit",
//     feature:
//       '<p class="Body-Foundation">Spend a <strong>Hope</strong> to summon an arcane spirit the same size as yourself that can move or carry things you can see until your next short rest.</p><p class="Body-Foundation">You may also send it to make an attack on an enemy. When you do, make a <strong>Spellcast Roll</strong> against a target within very far range of you. On a success, roll an amount of <strong>d6</strong> equal to your Spellcast Trait and deal that much magic damage to the target. The spirit then dissipates.</p><p class="Body-Foundation">You can only have one spirit at a time.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Natural Familiar",
//     feature:
//       '<p class="Body-Foundation">Spend a <strong>Hope</strong> to summon a small nature spirit or forest critter to your side until your next short rest, you use this spell again, or until it takes damage. If you spend an additional <strong>Hope</strong>, they can be a familiar that flies. You can communicate with it, you may make a <strong>Spellcast Roll</strong> to command it to perform simple tasks, and you can mark a <strong>Stress</strong> to see through its eyes.</p><p class="Body-Foundation">While this creature is summoned, when you deal damage to an enemy the critter is in melee range with, you deal an additional <strong>1d6</strong> physical damage.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Reckless",
//     feature:
//       '<p class="Body-Foundation">You may always mark a <strong>Stress</strong> to take advantage on an <strong>Attack Roll</strong> against a target.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Shadowbind",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against all enemies within Very Close range. All it succeeds against have their shadows temporarily pinned where they are, making them <em>restrained</em>.</p>',
//     recall: 0,
//     level: 2,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Strategic Approach",
//     feature:
//       '<p class="Body-Foundation">After a long rest, place a number of tokens equal to your Knowledge Trait on this card, with a minimum of <strong>1</strong>. When you move into melee range of an enemy and make an <strong>Attack Roll</strong> against them, you may spend one token to choose an option below.</p><ul><li class="vertical-card-list-found">Make the attack at advantage.</li><li class="vertical-card-list-found">Don’t add a character token to the action tracker for this attack.</li><li class="vertical-card-list-found">Add <em>1d8</em> to your damage.</li></ul><p class="Body-Foundation">When you take a long rest, clear all unused tokens.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Tell No Lies",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against a target within very close range. On a success, they can’t lie to you while they remain within close range, but they are not compelled to speak. If you ask them a question and they refuse to answer, they mark a <strong>stress</strong> and the spell ends.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Troublemaker",
//     feature:
//       '<p class="Body-Foundation">When you taunt or provoke a target within far range, make a <strong>Presence Roll</strong> against them. On a success, roll a number of <strong>d4</strong>s equal to your proficiency. Take the highest value from those <strong>d4</strong>s and deal that much <strong>Stress</strong> to the target.</p>',
//     recall: 1,
//     level: 2,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Book of Korvax",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Levitation:</em></strong> Make a <strong>Spellcast Roll</strong> to temporarily lift and move a target you can see up into the air within close range of where it currently is.</p><p class="Body-Foundation"><strong><em>Recant:</em></strong> Use an action to spend a <strong>Hope</strong> and make a target roll a <strong>Reaction Roll</strong> (<strong>15</strong>). On a failure, they forget the last minute of your conversation.</p><p class="Body-Foundation"><strong><em>Rune Circle:</em></strong> Use an action to mark a <strong>Stress</strong> and create a temporary magical circle on the ground around you. Any creatures in melee range of this circle, or who enter melee range of this circle, take <strong>2d12</strong> magic damage and are pushed out at the end of their action.</p>',
//     recall: 2,
//     level: 3,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Book of Norai",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Mystic Tether:</em></strong> Make a <strong>Spellcast Roll</strong> against a target within far range. On a success, they are temporarily restrained and mark a <strong>Stress</strong>. If you target a flying creature, this brings them to the ground before restraining them.</p><p class="Body-Foundation"><strong><em>Fireball:</em></strong> Make a <strong>Spellcast Roll</strong> against a target within very far range. On a success, you throw a sphere of fire towards them that explodes upon impact. The target and all creatures very close to them must make a <strong>Reaction Roll</strong> (<strong>12</strong>). On a failure, they take <strong>d8</strong> magic damage using your proficiency. On a success, they take half damage (rounded up).</p>',
//     recall: 2,
//     level: 3,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Brace",
//     feature:
//       '<p class="Body-Foundation">When you use an Armor Slot to reduce incoming damage, you may also spend any number of <strong>Hope</strong>. For every <strong>Hope</strong> you spend, reduce the incoming damage by the value of your Proficiency. </p>',
//     recall: 1,
//     level: 3,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Chokehold",
//     feature:
//       '<p class="Body-Foundation">While hidden, when you successfully position yourself behind a creature that’s about your size, you can use an action to mark a <strong>Stress</strong> and pull them into a chokehold or equally compromising position, making them temporarily Vulnerable. </p><p class="Body-Foundation">Every <strong>Attack Roll</strong> against them while they are Vulnerable from your chokehold adds <strong>2d6</strong> to the damage roll.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Ability",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Conviction",
//     feature:
//       '<p class="Body-Foundation">You speak with an unmatched power and grace. When you attempt to use this candor to de-escalate a violent situation or get someone to follow your lead, roll with advantage. </p><p class="Body-Foundation">Your conviction also emboldens you in moments of duress. When all of your <strong>Stress</strong> is marked, your attacks are made with <strong>+1</strong> Proficiency.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Ability",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Corrosive Projectile",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against a target within far range. On a success, mark a <strong>Stress</strong> to deal <strong>d6</strong> magic damage using your proficiency. The target’s Difficulty value is temporarily reduced by <strong>1</strong>.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Counterspell",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, you can interrupt a spell or magical effect that is taking place to make a <strong>Reaction Roll</strong> using your <strong>Spellcast</strong> trait. On a success, the spell or effect is immediately stopped and any consequences are avoided.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Critical Inspiration",
//     feature:
//       '<p class="Body-Foundation">When you or an ally close to you rolls a critical success on an <strong>Attack Roll</strong>, whoever rolled the critical success may immediately clear a Hit Point or an additional <strong>Stress</strong>.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Flight",
//     feature:
//       '<p class="Body-Foundation">Mark a <strong>Stress</strong> to take flight for a number of minutes equal to your level. While flying, you may spend a <strong>Hope</strong> to pick up and carry another creature approximately your size or smaller. You cannot carry more than one other creature at a time.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Hypnotic Shimmer",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against any enemies in front of you within close range. On a success, once per short rest, you create an illusion of flashing colors and lights that can temporarily <em>Stun</em> any enemies you succeed against, dealing them a <strong>Stress</strong> and leaving them unable to move or act until <em>Stun</em> is cleared. While in combat, the GM can’t spend tokens from the action tracker to activate stunned creatures.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Invisibility",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>10</strong>) while touching a creature. On a success, mark a <strong>Stress</strong> and the target becomes <em>hidden</em> for <strong>1</strong> hour, until you cast this spell again, or until the target makes an Attack or <strong>Spellcast Roll</strong>. </p>',
//     recall: 1,
//     level: 3,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Lean on Me",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, when a character has failed at an action they were attempting, if you console or inspire them, you both clear <strong>2 Stress</strong>.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Scramble",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, when an enemy in melee range would deal damage to you, you can avoid the damage entirely and safely move out of melee range of the enemy.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Second Wind",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, when you make a successful strike against an enemy, you may clear <strong>3 Stress</strong> or one Hit Point. On a success with <strong>Hope</strong>, you may also clear <strong>3 Stress</strong> or one Hit Point of an ally who is within close range of you.</p>',
//     recall: 2,
//     level: 3,
//     domainType: "Ability",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Tactician",
//     feature:
//       '<p class="Body-Foundation">When you Help an Ally, they can add one of your Experience to their roll as well. When making a Tag Team roll, you can roll a <strong>d20</strong> for your <strong>Hope</strong> die instead of a <strong>d12</strong>.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Towering Stalk",
//     feature:
//       '<p class="Body-Foundation">You can conjure a thick, twisting stalk within close range that can be easily climbed. It’s height can grow up to far range.</p><p class="Body-Foundation">When you conjure it, you may also mark a <strong>Stress</strong> to use it as an attack. If you do, make a <strong>Spellcast Roll</strong> against any group of targets within close range. It erupts beneath any you’re successful against, lifting them into the air and dropping them for <strong>3d8</strong> physical damage.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Veil of Shadows",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>13</strong>). On a success, you can create a temporary curtain of darkness from one point up to far range from you to another, as tall as twice your height. Only you can see through this darkness. Gain advantage on any attacks you make through the wall and you are considered hidden to any enemies on the other side. It will hold until you cast another spell.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Versatile Fighter",
//     feature:
//       '<p class="Body-Foundation">You can choose to use the Character Trait of your choice on an equipped weapon, rather than the trait the weapon calls for. </p><p class="Body-Foundation">When dealing damage, you may mark a <strong>Stress</strong> to take the maximum value of one of your Damage Die instead of rolling it.</p>',
//     recall: 1,
//     level: 3,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Blink Out",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>12</strong>). On a success, spend a <strong>Hope</strong> and vanish, teleporting to another place you can see within very far range. If any creatures are very close to you when you succeed, you can spend an additional <strong>Hope</strong> each to bring them with you.</p>',
//     recall: 1,
//     level: 4,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Book of Exota",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Counterspell:</em></strong> Once per short rest, you can interrupt a spell or magical effect that is taking place to make a <strong>Reaction Roll</strong> using your <strong>Spellcast</strong> trait. On a success, the spell or effect is immediately stopped and any consequences are avoided.</p><p class="Body-Foundation"><strong><em>Create Construct:</em></strong> Spend a <strong>Hope</strong> to choose a group of objects around you and create an animated construct from them that obeys basic commands. Use a <strong>Spellcast Roll</strong> to command it to take action. When necessary, it shares your Evasion and Traits and its attacks deal <strong>2d10</strong> physical damage. You can only hold one construct at a time.</p>',
//     recall: 2,
//     level: 4,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Book of Grynn",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Arcane Deflection:</em></strong> Once per long rest, spend a <strong>Hope</strong> to completely negate any incoming damage from a single attack on you or an ally very close to you.</p><p class="Body-Foundation"><strong><em>Time Lock:</em></strong> Target a non-living object within far range. That object stops in time and space exactly where it is for a number of minutes equal to your Level. If a creature tries to move it, make a <strong>Spellcast Roll</strong> against them to maintain this spell.</p><p class="Body-Foundation"><strong><em>Wall of Flame:</em></strong> Use an action to mark a <strong>Stress</strong> and create a temporary wall of magical flame between two points within far range. Anything that passes through it takes <strong>4d10</strong> magic damage.</p>',
//     recall: 2,
//     level: 4,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Boost",
//     feature:
//       '<p class="Body-Foundation">If you have an ally in close range of you, mark a <strong>Stress</strong> to boost off of them and into the air to perform an aerial attack at an enemy within far range. You have advantage on the attack, add <strong>1d10</strong> to the damage, and end your action in melee range of the target.</p>',
//     recall: 1,
//     level: 4,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Deadly Focus",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, you can apply all your focus towards a single target. Choose that target. Until you attack another target, you defeat the creature, or the battle ends, add <strong>+1</strong> to your Proficiency.</p>',
//     recall: 2,
//     level: 4,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Death Grip",
//     feature:
//       '<p class="Body-Foundation">Choose an option below and make a <strong>Spellcast Roll</strong> against the target. On a success, vines reach out from your hands, causing the chosen effect and making them <em>restrained</em>. </p><ul><li class="vertical-card-list-found">Pull the target into melee range of you or pull yourself into melee range with it. </li><li class="vertical-card-list-found">Constrict the target to deal <strong><em>2 Stress</em></strong>.</li><li class="vertical-card-list-found">Any enemies between you and the target must make a<em> Reaction Roll (13)</em> or be hit by vines, dealing <em>3d6</em> physical damage.</li></ul>',
//     recall: 1,
//     level: 4,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Divination",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, you may spend <strong>3 Hope</strong> to reach out to the forces beyond and ask one question about an event, person, place, or situation in the near future. Your vision of the world will momentarily twist and shape around you to show the answer, though it may be cryptic, obscured, or partial.</p>',
//     recall: 1,
//     level: 4,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Fortified Armor",
//     feature:
//       '<p class="Body">Increase your Armor Score by +2 while you are wearing armor and this card is in your loadout. Once per short rest, you may use an Armor Slot without marking it.</p>',
//     recall: 0,
//     level: 4,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Goad Them On",
//     feature:
//       '<p class="Body-Foundation">Make a Presence roll against a target. On a success, the target takes a <strong>Stress</strong> and the next time they act, they target you with disadvantage. </p>',
//     recall: 1,
//     level: 4,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Healing Field",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, you can use an action to conjure a field of small, healing plants around you. Everywhere within close range of you bursts to life with vibrant nature, causing you and your allies in the area to immediately heal one Hit Point. </p><p class=\\"Body-Foundation\\">Spend a <strong>Hope</strong> to increase the healing power of this spell to two Hit Points.</p>',
//     recall: 2,
//     level: 4,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Life Ward",
//     feature:
//       '<p class="Body-Foundation">Use an action to spend <strong>3 Hope</strong> and point at a close ally. They are marked with a glowing sigil of protection. If this ally is ever required to make a death move for any reason, they ignore it and clear one hit point.</p><p class=\\"Body-Foundation\\">This spell ends when it saves the target from a Death Move, it is cast on another target, or when you take a long rest.</p>',
//     recall: 1,
//     level: 4,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Preservation Blast",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against all enemies within melee range of you. Any you succeed against are hurdled into far range and dealt <strong>d8</strong> magic damage using your Spellcast Trait.</p>',
//     recall: 2,
//     level: 4,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Redirect",
//     feature:
//       '<p class="Body-Foundation">When you successfully evade a ranged attack, you may roll a number of <strong>d6</strong> equal to your proficiency. If any roll a <strong>6</strong>, mark a <strong>Stress</strong> to redirect the attack to instead damage an enemy within very close range of you.</p>',
//     recall: 1,
//     level: 4,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Soothing Speech",
//     feature:
//       '<p class="Body-Foundation">During a short rest, when you use the <em>Tend to Wounds</em> downtime move on another character, you may speak supportive words to heal an extra Hit Point on them. When you do, also heal two of your own.</p>',
//     recall: 1,
//     level: 4,
//     domainType: "Ability",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Stealth Expertise",
//     feature:
//       '<p class="Body-Foundation">When you attempt to move through a dangerous area without being noticed, if you roll with <strong>Fear</strong>, you can always mark a <strong>Stress</strong> to change it to a roll with <strong>Hope</strong> instead.</p><p class="Body-Foundation">If an ally within close range is also attempting to move without being noticed and rolls with <strong>Fear</strong>, you can mark a <strong>Stress</strong> to change their roll to a roll with <strong>Hope</strong> as well.</p>',
//     recall: 0,
//     level: 4,
//     domainType: "Ability",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Support Tank",
//     feature:
//       '<p class="Body-Foundation">When an ally close to you fails a roll, you may spend <strong>2 Hope</strong> to allow them to reroll either their <strong>Hope</strong> or <strong>Fear</strong> die and take the new result instead.</p>',
//     recall: 2,
//     level: 4,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Through Your Eyes",
//     feature:
//       '<p class="Body-Foundation">Point to a target within very far range. You can now see through their eyes and hear through their ears. You may return to this vision at any time until you cast another spell or mark a Hit Point.</p>',
//     recall: 1,
//     level: 4,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Twilight Mark",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against a target within very close range. On a success, spend a <strong>Hope</strong> to conjure a dark glyph upon their body that exposes their weak points, temporarily reducing the target’s Difficulty number by <strong>1</strong> + your Knowledge trait.</p>',
//     recall: 1,
//     level: 4,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Armorer",
//     feature:
//       '<p class="Body-Foundation">Your Armor Score increases by <strong>+1</strong> while you are wearing armor and this card is in your loadout.</p><p class="Body-Foundation">During a short rest, if you choose to take the <strong>Repair Armor </strong>downtime action, everybody in your party also clears one additional Armor Slot.</p>',
//     recall: 1,
//     level: 5,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Chain Lightning",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, make a <strong>Spellcast Roll</strong> against every adversary in front of you within close range. On a success, the GM must make a <strong>Reaction Roll</strong> (<strong>16</strong>) for the targets. On a failure, they take <strong>3d8</strong> plus a number of <strong>d8</strong>s equal to your Spellcast Trait in magic damage. On a success, they take half damage (rounded up). </p>',
//     recall: 1,
//     level: 5,
//     domainType: "Ability",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Hero’s Strike",
//     feature:
//       '<p class="Body-Foundation-No-BOLDITALIC">When you land a critical hit on an <strong>Attack Roll</strong>, choose two of the following:</p><ul><li class="vertical-card-list">Clear a Hit Point.</li><li class="vertical-card-list">Clear a marked Armor Slot.</li><li class="vertical-card-list">Mark <em>+1</em><strong><em> Hit Point</em></strong> on the target of the attack.</li></ul>',
//     recall: 1,
//     level: 5,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Hush",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against a target within close range. On a success, spend a <strong>Hope</strong> to temporarily conjure suppressive magic around the target that encompasses everything within very close range of them and follows them as they move. </p><p class="Body-Foundation">The target and anything within the area cannot make noise and cannot cast spells until the GM spends <strong>2</strong> <strong>Fear</strong> to end it, you cast this spell again, or you take Major damage.</p>',
//     recall: 1,
//     level: 5,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Know Thy Enemy",
//     feature:
//       '<p class="Body-Foundation-No-BOLDITALIC">When observing a creature, you can make a <strong>Instinct Roll</strong> against the target. On a success, spend a <strong>Hope</strong> and ask the GM for two of the mechanical specifics about the target from below:</p><ul><li class="vertical-card-list-found">Current Hit Points and unmarked stress.</li><li class="vertical-card-list-found">Difficulty and Damage Thresholds.</li><li class="vertical-card-list-found">Their Tactics and standard attack Damage Dice.</li><li class="vertical-card-list-found">Their Moves and Experiences.</li></ul><p class="Body-Foundation-No-BOLDITALIC">On a success, you may also mark a <strong>stress</strong> to remove one <strong>Fear</strong> from the GM’s <strong>Fear</strong> Pool.</p>',
//     recall: 1,
//     level: 5,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Manifest Wall",
//     feature:
//       '<p class="Body-Foundation"><strong>Spellcast Roll</strong> (<strong>15</strong>). On a success, once per short rest, spend a <strong>Hope</strong> to create a temporary magical wall at any angle up to <strong>50</strong> feet high from one point, within far range of you, to another. Any creatures or objects in its path are shunted to one side. It will dissipate at the end of your next long rest, or when you use this spell again.</p>',
//     recall: 2,
//     level: 5,
//     domainType: "Spell",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Phantom Retreat",
//     feature:
//       '<p class="Body-Foundation">Spend a <strong>Hope</strong> to activate Phantom Retreat where you’re currently standing. You may spend another <strong>Hope</strong> at any time before your next short rest to disappear from where you are and reappear where you were standing when you activated Phantom Retreat. This will end the spell.</p>',
//     recall: 2,
//     level: 5,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Premonition",
//     feature:
//       '<p class="Body-Foundation">You can channel the arcane energy to have visions of the future. Once per long rest, immediately after the GM conveys the consequences of you rolling with <strong>Fear</strong>, you may make that event your Premonition. You instead rescind the action and consequences like they never happened and choose another action instead.</p>',
//     recall: 2,
//     level: 5,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Prowess",
//     feature:
//       '<p class="Body-Foundation"><strong>When you take this card, choose two:</strong></p> <ul><li>Permanently add one additional <strong>Stress</strong> slot</li><li>Permanently add one additional Hit Point Slot</li><li>Permanently raise your Minor Damage Threshold to 5. Any damage that comes in below this value does not mark any hit points.</li></ul> <p>Then place it into your Vault permanently.</p>',
//     recall: 0,
//     level: 5,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Rousing Strike",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, when you roll a Critical Success on an <strong>Attack Roll</strong>, you and all allies that can see or hear you may clear a Hit Point or <strong>1d4 Stress</strong>.</p>',
//     recall: 1,
//     level: 5,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Shape Material",
//     feature:
//       '<p class="Body-Foundation">Mark a <strong>Hope</strong> to adjust a section of natural material you are touching (like stone, ice, wood, etc) into a shape that suits your purpose. This material area can be no larger than you. Examples include forming a rudimentary tool or weapon, creating a door or passage, etc.</p><p class="Body-Foundation">You can only affect the material within close range of where you are touching it.</p>',
//     recall: 1,
//     level: 5,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Signature Move",
//     feature:
//       '<p class="Body-Foundation">You take on a signature move in battle that you can perform once per short rest. Name it and describe it. When you include its description in an action you’re taking, use a <strong>d20</strong> instead of a <strong>d12</strong> as your <strong>Hope</strong> die. If the attack succeeds, you may clear a <strong>Stress</strong>.</p>',
//     recall: 1,
//     level: 5,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Smite",
//     feature:
//       '<p class="Body-Foundation">Spend <strong>3 Hope</strong> to charge up a powerful smite. On the next successful attack, double your Proficiency on the damage roll, and this attack deals magic damage, regardless of the weapon’s damage type.</p>',
//     recall: 2,
//     level: 5,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Teleport",
//     feature:
//       '<p class="Body-Foundation-No-BOLDITALIC">Once per long rest, you have the ability to instantly teleport yourself and a number of others within close range up to your Level somewhere you’re aware of. Choose one option below to gain additional modifiers, then make a <strong>Spellcast Roll</strong> (<strong>16</strong>):</p><ul><li class="vertical-card-list-found">If you know the place very well, take <em>+5</em>. </li><li class="vertical-card-list-found">If you’ve visited the place frequently, take <em>+3</em>. </li><li class="vertical-card-list-found">If you’ve visited the place infrequently, take <em>+1</em>. </li><li class="vertical-card-list-found">If you’ve only been there once, no modifiers.</li><li class="vertical-card-list-found">If you’ve never been there, take<em> -4</em>. </li></ul><p class="Body-Foundation">On a success, you appear where you were intending to go. On a failure, you appear off course, with the range of failure signifying how far off course.</p>',
//     recall: 2,
//     level: 5,
//     domainType: "Spell",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Thorn Skin",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, spend a <strong>Hope</strong> while touching a willing creature and place a number of tokens equal to your Spellcast Trait on this card. Whenever the target takes damage, you can remove any number of these tokens to roll that number of <strong>d6</strong>s. Then reduce the incoming damage by that amount and, if the attacker is in melee, deal that amount of damage back to them. </p><p class="Body-Foundation">When you take a rest, clear all tokens.</p>',
//     recall: 1,
//     level: 5,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Thought Delver",
//     feature:
//       '<p class="Body-Foundation">You can peek into the minds of others. Spend a <strong>Hope</strong> to read the vague surface thoughts of a target within far range. Make a <strong>Spellcast Roll</strong> against the target to delve for deeper, more hidden thoughts.</p>',
//     recall: 2,
//     level: 5,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Wild Fortress",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>13</strong>) to grow a natural barricade in the shape of a dome for you and up to one ally to hide within. You immediately become <em>hidden </em>as long as you stay within, but may reveal yourself out the top of the dome to make ranged attacks. The dome has the damage thresholds below and lasts until it takes three Hit Points. Place tokens on this card to represent marking Hit Points.</p><p><strong>Minor (Mark 1)</strong> 1 | <strong>Major (Mark 2)</strong> 15 | <strong>Severe (Mark 3)</strong> 30</p>',
//     recall: 1,
//     level: 5,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Words of Discord",
//     feature:
//       '<p class="Body-Foundation">When you whisper words of discord to an adversary in melee range, make a <strong>Spellcast Roll</strong> (<strong>13</strong>). On a success, the GM immediately takes a <strong>Stress</strong> and makes an attack against another enemy instead of against you or your allies. If in combat, the GM spends a token from the action tracker to do so.</p><p class="Body-Foundation">Once this attack is over, the target will realize what has happened. On the next use of Words of Discord against them, add <strong>+5</strong> to the <strong>Spellcast Roll</strong> difficulty. </p>',
//     recall: 1,
//     level: 5,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Banish",
//     feature:
//       '<p class="Body-Foundation">Choose a target creature within close range. You can temporarily banish them from this realm. Use an action to roll an amount of <strong>d20</strong>s equal to your Spellcast Trait and tell the GM the highest result. The GM must make a <strong>Reaction Roll</strong> with a target number of this result. </p><p class="Body-Foundation">On a success, they mark a <strong>Stress</strong>. If they fail, once per short rest, they are banished. On any rolls the PCs make with <strong>Fear</strong>, the GM reduces the target number by one and makes another <strong>Reaction Roll</strong>. If it succeeds, the creature returns from banishment.</p>',
//     recall: 0,
//     level: 6,
//     domainType: "Spell",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Battle Hardened",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, when you mark your final Hit Point, instead of making a death move, you can choose to automatically take a Scar (permanently cross out one <strong>Hope</strong> Slot), and roll <strong>1d6</strong>. Clear that many Hit Points and stay on your feet.</p>',
//     recall: 2,
//     level: 6,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Conjured Steeds",
//     feature:
//       '<p class="Body-Foundation">Spend a <strong>Hope</strong> to conjure a number of magical steeds (horses, camels, elephants, etc.) up to your level that you and allies can ride upon until your next long rest or the steed takes any damage. These will double your land speed when traveling and let you move to somewhere within far range without having to roll when in danger. Any <strong>Attack Rolls</strong> made atop the steeds are at<strong> -2</strong>, but add <strong>+2</strong> to their damage rolls.</p>',
//     recall: 0,
//     level: 6,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Dark Whispers",
//     feature:
//       '<p class="Body-Foundation">You can speak into the mind of any person you’ve ever seen or know the true name of.</p><p>When you do, you mkay also choose to mark a <strong>Stress</strong> to make a <strong>Spellcast Roll</strong> against them. On a success, you can ask one of the questions below.</p><ul><li><em>Where are they?</em></li><li><em>What are they doing?</em></li><li><em>What are they afraid of?</em></li><li><em>What do they cherish most in the world?</em></li></ul>',
//     recall: 0,
//     level: 6,
//     domainType: "Ability",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Forager",
//     feature:
//       '<p class="Body-Foundation">As an additional downtime move, you may roll <strong>1d6</strong> to see what you forage. Work with the GM to describe it, and add it to your inventory as a Consumable. Your party may carry up to five foraged Consumables at a time.</p><ol><li class="vertical-card-list-number">A unique food. (Clear <strong><em>2 Stress</em></strong>)</li><li class="vertical-card-list-number">A beautiful relic. (Earn <strong><em>2 Hope</em></strong>)</li><li class="vertical-card-list-number">An arcane rune. (<strong><em>+2</em></strong> to a <strong><em>Spellcast Roll</em></strong>)</li><li class="vertical-card-list-number">A healing vial. (Clear <strong><em>2 Hit Points</em></strong>)</li><li class="vertical-card-list-number">A luck charm. (Reroll all Duality or Damage Dice)</li><li class="vertical-card-list-number">You may choose one of the above options.</li></ol>',
//     recall: 1,
//     level: 6,
//     domainType: "Ability",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Inevitable",
//     feature:
//       '<p class="Body-Foundation">Whenever you fail an <strong>Action Roll</strong>, your next <strong>Action Roll</strong> has Advantage.</p>',
//     recall: 1,
//     level: 6,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Mass Disguise",
//     feature:
//       '<p class="Body-Foundation">When you have a few minutes of silence to focus, you can mark a <strong>Stress</strong> to change the appearance of every willing target close to you, lasting for one hour. The new form must share a general body structure and size, and can be somebody or something you’ve seen before or entirely fabricated.</p><p class="Body-Foundation">A disguised creature’s Presence rolls to shrug off scrutiny have Advantage.</p>',
//     recall: 0,
//     level: 6,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Never Upstaged",
//     feature:
//       '<p class="Body-Foundation">When you mark one or more Hit Points from an attack, you may mark a <strong>Stress</strong> to place a number of tokens on this card equal to the number of Hit Points you marked. On your next attack, you may increase your Proficiency by <strong>+1</strong> for each token on this card, then clear all tokens. </p><p class="Body-Foundation">If you have any tokens remaining on this card when you take a long rest, clear that much <strong>Stress</strong>.</p>',
//     recall: 1,
//     level: 6,
//     domainType: "Ability",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Rage Up",
//     feature:
//       '<p class="Body-Foundation-No-BOLDITALIC">Before making an <strong>Attack Roll</strong>, you may mark a <strong>Stress</strong> to temporarily increase your Proficiency by <strong>+1</strong> until the end of the attack. </p><p class="Body-Foundation">You may Rage Up twice per <strong>Attack Roll</strong>.</p>',
//     recall: 0,
//     level: 6,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Rapid Riposte",
//     feature:
//       '<p class="Body-Foundation">When you successfully evade an attack from melee range, you can mark a <strong>Stress</strong> to automatically deal damage from an active weapon to the attacker.</p>',
//     recall: 0,
//     level: 6,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Recovery",
//     feature:
//       '<p class="Body-Foundation">During a short rest, you can always choose to do one of the long rest options instead. You may spend a <strong>Hope</strong> to let one additional party member do the same.</p>',
//     recall: 1,
//     level: 6,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Restoration",
//     feature:
//       '<p class="Body-Foundation">After a long rest, place a number of tokens equal to your Spellcast Trait on this card. You can touch a creature and spend any number of tokens to heal them for <strong>2 Hit Points</strong> per token. You can also spend a token when touching a creature to clear a <strong>Stress</strong>, end the Vulnerable condition, a disease, or a magical ailment (though the GM might require additional tokens depending on the power of the ailment). If the action tracker is out, any spent tokens are added to it.</p><p class="Body-Foundation">When you take a long rest, clear all tokens.</p>',
//     recall: 2,
//     level: 6,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Rift Walker",
//     feature:
//       '<p class="Body-Foundation-No-BOLDITALIC">Once per long rest, on a successful <strong>Spellcast Roll</strong> (<strong>15</strong>) you place an arcane marking upon the ground where you currently stand. The next time you successfully cast Rift Walker with a <strong>Spellcast Roll</strong> (<strong>15</strong>), a rift in space will open up, providing safe passage back to the exact spot where the marking was placed. You may drop the marking at anytime to cast Rift Walker again and place it somewhere new.</p><p>This rift stays open until you choose to close it or you cast another spell.</p></p>',
//     recall: 2,
//     level: 6,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Rise Up",
//     feature:
//       '<p class="Body-Foundation">While this card is in your loadout, make your Minor Threshold the value of your Strength trait.</p>',
//     recall: 2,
//     level: 6,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Share the Burden",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, you can use an action to absorb <strong>Stress</strong> from a willing creature you can touch. The target describes what intimate knowledge or emotions leak from their mind telepathically in this moment between you. Then, transfer any number of their marked <strong>Stress</strong> to you and you also gain a <strong>Hope</strong> for each <strong>Stress</strong> transferred.</p>',
//     recall: 0,
//     level: 6,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Sigil of Retribution",
//     feature:
//       '<p class="Body-Foundation">Use an action to give the GM a <strong>Fear</strong> and mark a close enemy with a Sigil of Retribution. Every time that enemy does damage to you or your allies, put a <strong>d8</strong> on this card up to a maximum of your level. Any time you attack this enemy, you may choose to roll these dice and add their value to your total damage. This spell ends when you cast this spell on another creature.</p>',
//     recall: 2,
//     level: 6,
//     domainType: "Spell",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Telekinesis",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against an object or target within far range. On a success, you can move it anywhere within far range of its current position using only your mind. If the target is unwilling, you must spend <strong>1</strong> or more <strong>Stress</strong> to do so, and can deal <strong>1d20</strong> magic damage per <strong>Stress</strong> spent. If you are hitting a creature with the target, divide the damage equally between the two.</p>',
//     recall: 0,
//     level: 6,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Zone of Protection",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>16</strong>). On a success, once per long rest, you can designate a point within far range of you and create a visible zone of protection there for all allies within very close range of that point. When you do, place a <strong>d8</strong> on this card at its highest value. When taking damage, any allies in this zone automatically reduce it by the die\'s value. Then reduce the die’s value by <strong>1</strong>. This spell ends when the die reaches <strong>0</strong>.</p>',
//     recall: 2,
//     level: 6,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Arcana Touched",
//     feature:
//       '<p class="Body-Foundation">When a majority of the domain cards in your loadout are from the Arcana domain:</p><ul><li class="vertical-card-list-found">Gain <em>+1</em> to your <em>Spellcast</em> rolls.</li><li class="vertical-card-list-found">Once per short rest, switch the values on your <em>Hope</em> and <em>Fear</em> die.</li></ul>',
//     recall: 2,
//     level: 7,
//     domainType: "Ability",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Blade Touched",
//     feature:
//       '<p class="Body-Foundation-No-BOLDITALIC">When a majority of the domain cards in your loadout are from the Blade domain:</p><ul><li class="vertical-card-list-found"><em>Attack Rolls</em> always take <em>+2</em> to their result.</li><li class="vertical-card-list-found">Increase your Severe Damage Threshold by <em>+4</em>.</li></ul>',
//     recall: 1,
//     level: 7,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Bone Touched",
//     feature:
//       '<p class="Body-Foundation-No-BOLDITALIC">When a majority of the domain cards in your loadout are from the Bone domain:</p><ul><li class="vertical-card-list-found">Increase your Agility by <em>+1</em>.</li><li class="vertical-card-list-found">Before an attack roll targeting you, you can mark an Armor Slot to increase your evasion against it by half your Armor Score (rounded up).</li></ul>',
//     recall: 2,
//     level: 7,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Book of Homet",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Pass Through:</em></strong> Make a <strong>Spellcast Roll</strong> (<strong>13</strong>) on a wall or door within close range. On a success, once per short rest, you and anyone who is touching you can pass through it. The spell drops once everyone is on the other side.</p><p class="Body-Foundation"><strong><em>Plane Gate:</em></strong> Make a <strong>Spellcast Roll</strong> (<strong>14</strong>). On a success, once per long rest, you open a gateway to a location in another dimension or plane of existence that you are aware of. This gateway lasts for <strong>1</strong> minute, or until you wish it to close.</p>',
//     recall: 0,
//     level: 7,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Cloaking Blast",
//     feature:
//       '<p class="Body-Foundation">Make an <strong>Attack Roll</strong> using your primary weapon against a target. On a success, along with dealing damage, you can also spend a <strong>Hope</strong> to immediately become <em>hidden</em>. </p><p class="Body-Foundation"><em>Hidden</em> only drops the next time you make an action roll or the GM uses all of the tokens on the action tracker. </p>',
//     recall: 2,
//     level: 7,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Codex Touched",
//     feature:
//       '<p class="Body-Foundation">When a majority of the domain cards in your loadout are from the Codex domain:</p><ul><li class="vertical-card-list-found">You can always mark a <em>Stress</em> to add your proficiency to a spellcast roll.</li><li class="vertical-card-list-found">Once per short rest, you may replace this card with any card from your Vault instead without paying a Recall cost.</li></ul>',
//     recall: 2,
//     level: 7,
//     domainType: "Ability",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Cruel Precision",
//     feature:
//       '<p class="Body-Foundation">Whenever you make a successful attack with a weapon, add either your Finesse or Agility trait to the damage.</p>',
//     recall: 1,
//     level: 7,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Endless Charisma",
//     feature:
//       '<p class="Body-Foundation">Whenever you make an <strong>Action Roll</strong> to persuade, lie, or garner favor, you can spend a <strong>Hope</strong> to reroll the <strong>Hope</strong> or <strong>Fear</strong> die and take the new result instead.</p>',
//     recall: 1,
//     level: 7,
//     domainType: "Ability",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Fountain of Life",
//     feature:
//       '<p class="Body-Foundation">Whenever you do damage to an enemy, you may spend a <strong>Hope</strong> to heal a single Hit Point on an ally within close range of you.</p>',
//     recall: 1,
//     level: 7,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Glancing Blow",
//     feature:
//       '<p class="Body-Foundation">Whenever you make an attack that misses its target, you may mark a <strong>Stress</strong> to still hit the target for weapon damage at half Proficiency (rounded up).</p>',
//     recall: 1,
//     level: 7,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Grace Touched",
//     feature:
//       '<p class="Body-Foundation">When a majority of the domain cards in your loadout are from the Grace domain:</p><ul><li class="vertical-card-list-found">You may mark an Armor Slot instead of marking <strong><em>Stress</em></strong>. </li><li class="vertical-card-list-found">When you get a critical success on an Action Roll, an enemy within close range takes <strong><em>2 Stress</em></strong>, or an ally within close range gains <strong><em>2 Hope</em></strong>.</li><li>Instead of dealing damage after a successful attack, you can always instead choose to deal <strong>1d6 Stress</strong>.</li></ul>',
//     recall: 2,
//     level: 7,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Midnight Touched",
//     feature:
//       '<p class="Body-Foundation">When a majority of the domain cards in your loadout are from the Midnight domain:</p><ul><li class="vertical-card-list-found">Whenever you succeed with <strong><em>Fear</em></strong>, you gain a <strong><em>Hope</em></strong>.</li><li class="vertical-card-list-found">If your <em>Fear</em> die ever rolls a 1 or 2, you may reroll it once and take the new result instead.</li></ul>',
//     recall: 2,
//     level: 7,
//     domainType: "Ability",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Monster of Nature",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, mark a <strong>Stress</strong> to channel the natural world around you and use it to transform into something monstrous. Describe how your appearance changes, then place a <strong>d6</strong> on this card at a value of <strong>6</strong>.</p><p class="Body-Foundation">While the Monster of Nature die is active, it adds its value to every <strong>Action Roll</strong> you make. After you add its value to a roll, reduce it by <strong>1</strong>. When the die’s value reaches <strong>0</strong> or you take a rest, this form drops and you must mark an additional <strong>Stress</strong>.</p>',
//     recall: 2,
//     level: 7,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Phantom Dodge",
//     feature:
//       '<p class="Body-Foundation">When you successfully evade physical damage, you can choose to envelope yourself in shadow, becoming Hidden and teleporting to anywhere in close range of the target that attacked you. You remain Hidden until the next time you make an action roll.</p>',
//     recall: 1,
//     level: 7,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Sage Touched",
//     feature:
//       '<p class="Body-Foundation">When a majority of the domain cards in your loadout are from the Sage domain:</p><ul><li class="vertical-card-list-found">When you are in a natural environment, you always take <strong><em>+1</em></strong> to your <strong><em>Spellcast</em></strong> Rolls.</li><li class="vertical-card-list-found">Once per short rest, before you roll, treat your Agility or Instinct Trait as though it were double its current value.</li></ul>',
//     recall: 2,
//     level: 7,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Shrug It Off",
//     feature:
//       '<p class="Body-Foundation">When you would take damage, you may mark a <strong>Stress</strong> to reduce the severity of the damage by one Threshold. When you do, roll <strong>1d6</strong>. If the result is a <strong>2</strong> or below, place this card into your Vault.</p>',
//     recall: 1,
//     level: 7,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Splendor Touched",
//     feature:
//       '<p class="Body-Foundation">When a majority of the domain cards in your loadout are from the Splendor domain:</p><ul><li class="vertical-card-list-found">Increase your Major Damage Threshold by <em>+3</em>.</li><li class="vertical-card-list-found">Once per long rest, when incoming damage would require you to take a certain number of Hit Points, you may choose to take that much <em>Stress</em> or spend that much <em>Hope</em> instead.</li></ul>',
//     recall: 2,
//     level: 7,
//     domainType: "Ability",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Valor Touched",
//     feature:
//       '<p class="Body-Foundation-No-BOLDITALIC">When a majority of the domain cards in your loadout are from the Valor domain:</p><ul><li class="vertical-card-list-found">Your Armor Score increases by <strong><em>+2</em></strong> while this ability is in your loadout. </li><li class="vertical-card-list-found">When you mark one or more Hit Points from damage, roll <em>1d6</em>. If you get a 5+, you can clear a <em>Stress</em>.</li></ul>',
//     recall: 1,
//     level: 7,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Arcane Reflection",
//     feature:
//       '<p class="Body-Foundation">Whenever you would take magic damage, if you choose not to reduce it using Armor, you may spend a <strong>Hope</strong> to roll an amount of <strong>d6</strong> equal to your Spellcast Trait. If any of the dice roll a result of <strong>6</strong>, the attack is reflected back onto the caster, dealing the damage to them instead.</p>',
//     recall: 1,
//     level: 8,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Astral Projection",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, mark a <strong>Stress</strong> to create a projected copy of yourself that can appear anywhere you’ve been before. </p><p class="Body-Foundation">You can see and hear through it as though it were you, and can affect the world as though you were there. Anyone investigating this projection can tell it’s of magical origin. This spell ends at your next short rest or when your projection takes any damage.</p>',
//     recall: 0,
//     level: 8,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Battle Cry",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, while you are charging into danger, you can muster a rousing shout or phrase that inspires your allies. You and all your allies that can hear you each clear a <strong>Stress</strong>, gain a <strong>Hope</strong>, and until you or an ally fails a roll with <strong>Fear</strong>, gain <strong>+1</strong> Proficiency.</p>',
//     recall: 2,
//     level: 8,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Book of Vyola",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Memory Delve:</em></strong> Make a <strong>Spellcast Roll</strong> against a target within far range. On a success, you get into the mind of the creature and ask a question. The GM will describe any memories they have that pertain to the answer.</p><p class="Body-Foundation"><strong><em>Shared Clarity:</em></strong> Once per long rest, <strong>spend Hope</strong> to choose two willing creatures. Whenever one of them should mark <strong>stress</strong>, they can choose between the two of them who marks it. This spell will automatically end at their next rest.</p>',
//     recall: 2,
//     level: 8,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Breaking Blow",
//     feature:
//       '<p class="Body-Foundation">When you make a successful attack, you may mark a <strong>Stress</strong> to make the next successful attack against that same target do an additional <strong>2d12</strong> damage.</p>',
//     recall: 3,
//     level: 8,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Confusing Aura",
//     feature:
//       '<p class="Body-Foundation-No-BOLDITALIC">Make a <strong>Spellcast Roll</strong> (<strong>14</strong>). Once per long rest, on a success you create a layer of illusion over your body that makes it hard to tell exactly where you are. You may mark any number of <strong>stress</strong> to make that many additional layers. When an adversary makes an attack against you, roll a number of <strong>d6</strong> equal to the number of layers currently active. If any land on a <strong>4</strong>+, one layer of the aura is destroyed and you avoid the attack. If all are <strong>3</strong>-, you take the damage and the effect ends.</p>',
//     recall: 2,
//     level: 8,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Forest Sprites",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>13</strong>). On a success, spend any number of <strong>Hope</strong> to create an equal number of small Forest Sprites that appear wherever you choose within far range, distracting enemies and aiding allies. Describe what form they take. </p><p class="Body">Attack Rolls against an enemy within melee range of a Sprite gain +3. Any allies who mark an Armor Slot while in melee range of a Sprite add +3 to their Armor Score. </p><p class="Body">A Sprite vanishes after granting a bonus or taking any damage.</p>',
//     recall: 2,
//     level: 8,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Frenzy",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, you can go into a frenzied state until there are no more threats within sight. </p><p class="Body-Foundation">While frenzied, you cannot use Armor Slots, you have <strong>+2</strong> to your Proficiency, and your Severe Damage Threshold is increased by <strong>+8</strong>.</p>',
//     recall: 3,
//     level: 8,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Full Surge",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, mark <strong>3 Stress</strong> to push your body to its limits, increasing all of your Character Traits by <strong>+2</strong>. This lasts until your next rest.</p>',
//     recall: 1,
//     level: 8,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Ground Pound",
//     feature:
//       '<p class="Body-Foundation">Spend <strong>2 Hope</strong> to strike the ground where you stand and make a <strong>Strength Roll</strong> against any enemies within very close range of you. All you succeed against are thrown back to far range and must make a <strong>Reaction Roll</strong> (<strong>17</strong>). On a failure, they also take <strong>4d10</strong> damage. On a success, they take half damage instead (rounded up).</p>',
//     recall: 2,
//     level: 8,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Haven",
//     feature:
//       '<p class="Body-Foundation">When you have a few minutes of calm to focus, you may spend  <strong>2 Hope</strong> to summon your Haven, a large interdimensional home for you and your allies to take shelter in. When you do, a magical door appears somewhere within close distance of you and is only enterable by those you choose. Once inside, you can make the entrance invisible. You and anyone else inside can always exit. Once you leave, the doorway must be summoned again.</p><p class="Body-Foundation">When you take a rest within your own Haven, you can take an additional Downtime Action.</p>',
//     recall: 3,
//     level: 8,
//     domainType: "Spell",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Mass Enrapture",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against all enemies within far range. Any you succeed against temporarily keep their attention on you, narrowing their field of view and drowning out any sound but your own. You may also mark a <strong>Stress</strong> to deal <strong>Stress</strong> to all targets who are enraptured.</p>',
//     recall: 3,
//     level: 8,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Rejuvenation Barrier",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>15</strong>). On a success, once per short rest, you can create a temporary barrier of protective energy around you. You and all allies within very close range of you when it is first cast heal <strong>1d4 Hit Points</strong>. While the barrier is up, you and all allies within have Resistance to physical damage. </p><p class="Body-Foundation">This barrier will follow you as you move.</p>',
//     recall: 1,
//     level: 8,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Shadowhunter",
//     feature:
//       '<p class="Body-Foundation">Under the cover of shadow, your prowess is enhanced. While you are shrouded in low light or darkness, you gain +1 Proficiency and add half your Spellcast trait to your Evasion (rounded up). </p>',
//     recall: 2,
//     level: 8,
//     domainType: "Ability",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Shield Aura",
//     feature:
//       '<p class="Body-Foundation">Mark a <strong>Stress</strong> to cast Shield Aura on a creature you can touch. Whenever they use an Armor Slot, they roll a <strong>d12</strong> and add its value to their Armor Score. If the <strong>d12</strong> result is equal to or above their current level, this spell ends. If the <strong>d12</strong> result is below their current level, it stays active. </p>',
//     recall: 2,
//     level: 8,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Spellcharge",
//     feature:
//       '<p class="Body-Foundation">When you should take magic damage, place tokens on this card equal to the number of hit points that damage would do. Then, reduce the incoming damage in half (rounded up). </p><p class="Body-Foundation">When you make a successful attack roll against a target, you can spend any number of the tokens from this card to deal an additional <strong>1d6</strong> magic damage per token. On your next rest, clear all tokens.</p>',
//     recall: 1,
//     level: 8,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Stunning Sunlight",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against any enemies in front of you within far distance as you unleash powerful rays of burning sunlight. Spend a <strong>Hope</strong> for each enemy you succeed against that you want to affect, and they must make a <strong>Reaction Roll</strong> (<strong>14</strong>). </p><p class=\\"Body-Foundation\\">On a success, they take <strong>4d20</strong> magic damage. </p><p class=\\"Body-Foundation\\">On a failure, they take <strong>4d20</strong> magic damage and are temporarily stunned, keeping them from acting until the condition is cleared.</p>',
//     recall: 2,
//     level: 8,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Wrangle",
//     feature:
//       '<p class="Body-Foundation">Make an <strong>Agility Roll</strong> against all enemies close to you. You may spend a <strong>Hope</strong> to move any enemies you are successful against to any position within close range.</p><p class="Body-Foundation">Use of this ability does not contribute a character token to the action tracker.</p>',
//     recall: 3,
//     level: 8,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Book of Ronin",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Transform:</em></strong> Make a <strong>Spellcast Roll</strong> (<strong>15</strong>). On a success, immediately transform into the shape of an inanimate object you can picture in your mind no larger than twice your normal size. You can remain in this shape until you take Hit Point damage. You can move in this form, but it might draw attention.</p><p class="Body-Foundation"><strong><em>Stable Portal:</em></strong> Once per long rest, use an action to mark a <strong>Stress</strong> and choose two points within very far distance of you. A temporary portal will open up at both of those points, and any creature may use this portal to move between these two points freely. The spell will end at your next short rest.</p>',
//     recall: 4,
//     level: 9,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Copycat",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, this card can mimic the features of any other active Domain card in another player’s loadout of Level <strong>8</strong> or lower. You must <strong>spend Hope</strong> equal to half the card’s level (rounded up), and this lasts until your next short rest.</p>',
//     recall: 3,
//     level: 9,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Disintegration Wave",
//     feature:
//       '<p class="Body">Make a <strong>Spellcast Roll</strong> (<strong>14</strong>). On a success, once per long rest, the GM will tell you what enemies within far range have a difficulty of 14 or lower. You may mark a Stress for each one you wish to hit with this spell. They are immediately killed and cannot come back to life by any means.</p>',
//     recall: 4,
//     level: 9,
//     domainType: "Spell",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Earthquake",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>16</strong>). Once per short rest, on a success all creatures within very far range of your choice must make a <strong>Reaction Roll</strong> (<strong>18</strong>). On a failure, they take <strong>3d10</strong> physical damage and are Vulnerable. On a success, they take half damage (rounded up). </p><p class="Body-Foundation">When you successfully cast this spell, all terrain within very far range of you becomes difficult to move through, and structures within this range may sustain damage or crumble.</p>',
//     recall: 2,
//     level: 9,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Fane of the Wilds",
//     feature:
//       '<p class="Body-Foundation">After a long rest, place a number of tokens equal to how many Sage Domain cards you have in your Loadout and Vault on this card. </p><p class="Body-Foundation">Whenever you would make a <strong>Spellcast Roll</strong>, you may spend any number of these tokens before the roll to add <strong>+1</strong> to the result per token. </p><p class="Body-Foundation">Whenever you roll a Critical Success on a <strong>Spellcast Roll</strong> for a Sage spell, gain a token.</p><p class="Body-Foundation">When you take a long rest, clear all tokens.</p>',
//     recall: 2,
//     level: 9,
//     domainType: "Ability",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Gore and Glory",
//     feature:
//       '<p class="Body-Foundation">Whenever you deal enough Weapon damage to defeat an enemy, you can gain a <strong>Hope</strong> or clear a <strong>Stress</strong>. When you roll a Critical Success on a weapon attack, you gain an additional <strong>Hope</strong> or clear an additional <strong>Stress</strong>.</p>',
//     recall: 2,
//     level: 9,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Hold the Line",
//     feature:
//       '<p class="Body-Foundation">Spend a <strong>Hope</strong> to take a defensive stance that lasts until you move or fail a roll with <strong>Fear</strong>. While in this stance, note the area within close range of you. If any enemy ever occupies that area, they are immediately put into melee with you and are temporarily Restrained. </p><p class="Body-Foundation">The Restrained condition can only be ended if the GM spends a <strong>Fear</strong> to do it.</p>',
//     recall: 1,
//     level: 9,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Lead by Example",
//     feature:
//       '<p class="Body-Foundation">Whenever you mark an Armor Slot, you can choose an ally who can see or hear you to gain a <strong>Hope</strong> or clear a <strong>Stress</strong>.</p>',
//     recall: 3,
//     level: 9,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Master of the Craft",
//     feature:
//       '<p class="Body-Foundation">Add <strong>+2</strong> to any two of your Experiences, or <strong>+4</strong> to any one of your Experiences. Then permanently put this card into your Vault.</p>',
//     recall: 0,
//     level: 9,
//     domainType: "Ability",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Night Terror",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, use an action to choose any targets within very close range. For them, your visage changes into something of nightmarish horror. They must make a successful <strong>Reaction Roll</strong> (<strong>16</strong>) or become temporarily Horrified. While Horrified, they are Vulnerable. Steal an amount of <strong>Fear</strong> from the GM equal to the number of targets that are Horrified (or as many as they have, if it’s not enough). For each <strong>Fear</strong> stolen, roll a <strong>d6</strong> and deal that much damage to each Horrified target. Discard the stolen <strong>Fear</strong>.</p>',
//     recall: 2,
//     level: 9,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "On the Brink",
//     feature:
//       '<p class="Body">When you have one Hit Point remaining, always add your proficiency to your Evasion.</p>',
//     recall: 1,
//     level: 9,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Overwhelming Aura",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>15</strong>) to temporarily embody powerful presence. On a success, spend <strong>2 Hope</strong> to make your Presence score equal to your Spellcast Trait until your next long rest. </p><p class=\\"Body-Foundation\\">While you have Overwhelming Aura active, the GM must always spend a <strong>Fear</strong> to target you with an attack. </p>',
//     recall: 2,
//     level: 9,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Plant Dominion",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>18</strong>). On a success, you reshape the natural world, changing the surrounding plant life within very far distance of you. You can grow trees instantly, clear a path through dense vines, create a wall of thick roots, etc.</p><p class="Body-Foundation">If you create a hostile environment, anyone who moves into or through it takes <strong>5d10</strong> physical damage.</p>',
//     recall: 1,
//     level: 9,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Reaper Strike",
//     feature:
//       '<p class="Body-Foundation">You may declare you are using Reaper Strike. Spend a <strong>Hope</strong> and make an <strong>Attack Roll</strong>. The GM will tell you any enemy it would succeed against in range of your weapon. Once per long rest, choose one of these enemies, and immediately deal <strong>5 Hit Points</strong> of damage to them.</p>',
//     recall: 3,
//     level: 9,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Salvation Beam",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>15</strong>). On a success, mark any amount of <strong>Stress</strong> to clear that many Hit Points on a line of allies within far range.</p>',
//     recall: 2,
//     level: 9,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Sensory Projection",
//     feature:
//       '<p class="Body-Foundation">Once per short rest, make a <strong>Spellcast Roll</strong> (<strong>15</strong>). On a success, drop into a vision that lets you clearly see and hear any place you have been before in this moment as though you are standing there. You can move freely in this vision and are not constrained by the physics or impediments of a physical body. This spell cannot be detected by mundane or magical means and you will drop out of this vision immediately upon taking damage or casting another spell.</p>',
//     recall: 0,
//     level: 9,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Splintering Strike",
//     feature:
//       '<p class="Body-Foundation">Make an <strong>Attack Roll</strong> against all enemies in your weapon’s range. On a success against any targets, once per long rest, you may roll a number of weapon damage dice equal to double your proficiency plus your Finesse Trait. You can distribute this damage however you wish between any enemies you are successful against.</p>',
//     recall: 3,
//     level: 9,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Twilight Toll",
//     feature:
//       '<p class="Body-Foundation">Choose a target within far range to mark. Each time you succeed on any <strong>Action Roll</strong> against them that doesn’t result in making a damage roll, place a token on this card. When you roll damage against this target, you can spend any number of tokens to deal an additional <strong>1d12</strong> per token spent. You may only hold Twilight Toll on one creature at a time.</p>',
//     recall: 1,
//     level: 9,
//     domainType: "Ability",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Adjust Reality",
//     feature:
//       '<p class="Body-Foundation">After a dice roll you or a willing ally makes, you may spend <strong>5 Hope</strong> to change the results of that roll to a result of your choice instead. The result must be plausible within the range of the dice.</p>',
//     recall: 1,
//     level: 10,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Battle Monster",
//     feature:
//       '<p class="Body-Foundation">When you make a successful attack against an enemy, instead of rolling for damage you may spend <strong>6 Hope</strong> to deal the target a number of Hit Points equal to the amount of Hit Points you currently have marked.</p>',
//     recall: 0,
//     level: 10,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Book of Yarrow",
//     feature:
//       '<p class="Body-Foundation"><strong><em>Timejammer:</em></strong> Make a <strong>Spellcast Roll</strong> (<strong>18</strong>). On a success, time temporarily slows to a halt for everyone within far range except for you. It automatically resumes the next time you make an action roll that targets another creature or after a number of minutes equal to your Knowledge Trait.</p><p class="Body-Foundation"><strong><em>Magic Immunity:</em></strong> Spend <strong>5 Hope</strong> to become immune to magic damage until your next short rest.</p>',
//     recall: 2,
//     level: 10,
//     domainType: "Grimoire",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Deathrun",
//     feature:
//       '<p class="Body-Foundation">Spend <strong>3 Hope</strong> to run an open path through the battlefield and make an <strong>Attack Roll</strong> against all enemies within weapon range along your path. Of your successful targets, choose the order in which you deal damage. For the first, roll your weapon damage at <strong>+1</strong> Proficiency. Then, remove one die from your pool and deal the remaining damage to the next target in descending order until you’re out of damage dice or enemies. </p><p class="Body-Foundation">You cannot target the same creature more than once.</p>',
//     recall: 1,
//     level: 10,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Eclipse",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> (<strong>16</strong>). On a success, once per long rest, spend <strong>3 Hope</strong> to plunge the entire area within far range into magical shadow that moves with you. Whenever you or an ally within this shadow should be damaged by an attack or spell, roll <strong>1d6</strong>. On a result of <strong>5</strong>+, the attack or spell misses. </p><p class="Body-Foundation">In addition, when you or an ally rolls a successful <strong>Attack Roll</strong> with <strong>Hope</strong> against an enemy that is within this shadow, the enemy takes a <strong>Stress</strong>.</p><p class="Body-Foundation">This spell lasts for until the GM spends a <strong>Fear</strong>, or you take Severe damage.</p>',
//     recall: 2,
//     level: 10,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Encore",
//     feature:
//       '<p class="Body-Foundation">When an ally within close distance of you deals damage to an enemy, you may make a <strong>Spellcast Roll</strong> against that same enemy. On a success, you immediately do the same amount of damage to them as your ally dealt. If your <strong>Spellcast Roll</strong> succeeds with <strong>Fear</strong>, place this card into your Vault afterward.</p>',
//     recall: 1,
//     level: 10,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Falling Sky",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll</strong> against all enemies within far range. Mark any number of <strong>Stress</strong> to make shards of arcana rain down from above, dealing <strong>1d20</strong> damage per each <strong>Stress</strong> you marked to any targets you succeed against.</p>',
//     recall: 1,
//     level: 10,
//     domainType: "Spell",
//     domain: "arcana",
//     img: "systems/daggerheart/assets/icons/domains/arcana.webp",
//   },
//   {
//     name: "Force of Nature",
//     feature:
//       '<p class="Body-Foundation">You can mark a <strong>Stress</strong> to transform into a hulking nature spirit, gaining the following benefits:</p><p class="Body-Foundation">You gain <strong>+2</strong> Strength, <strong>+2</strong> Agility, and <strong>+2</strong> Finesse.</p><ul><li class="vertical-card-list-found">Whenever you successfully hit with an Attack or Spell, you deal an additional <em>1d10</em> damage.</li><li class="vertical-card-list-found">When you defeat a creature within close range, you absorb them and clear an Armor Slot.</li><li class="vertical-card-list-found">You cannot be restrained.</li></ul><p class="Body-Foundation">Before you make an <strong>Action Roll</strong>, you must spend a <strong>Hope</strong>. If you cannot, you revert to your normal form.</p>',
//     recall: 2,
//     level: 10,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Invigoration",
//     feature:
//       '<p class="Body-Foundation">When you or an ally close to you has used an ability or spell that has an exhaustion limit (once per short rest, once per long rest, etc.), you and any of these allies may spend any amount of <strong>Hope</strong> to roll that many <strong>d6</strong>. On a <strong>6</strong>, you or your ally regain use of that ability or spell.</p><p class="Body-Foundation">This spell doesn’t work on any abilities or spells that have been permanently placed in your Vault.</p>',
//     recall: 4,
//     level: 10,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Notorious",
//     feature:
//       '<p class="Body-Foundation">People know who you are and what you’ve done, and will treat you differently because of it. Whenever you leverage your notoriety to get what you want, mark a <strong>Stress</strong> before you roll to take <strong>+10</strong> to the result. All food and drinks for you are always free wherever you go, and everything else you buy is reduced in price by one chest of gold (to a minimum of one handful).</p><p class="Body-Foundation">This card must remain in your loadout, but doesn’t count towards your domain card maximum.</p>',
//     recall: 1,
//     level: 10,
//     domainType: "Spell",
//     domain: "grace",
//     img: "systems/daggerheart/assets/icons/domains/grace.webp",
//   },
//   {
//     name: "Onslaught",
//     feature:
//       '<p class="Body-Foundation">When you successfully hit, your weapon attacks never deal damage beneath a target’s Major Damage Threshold (you will always deal a minimum of <strong>2 Hit Points</strong> of damage). </p><p class="Body-Foundation">In addition, whenever an enemy within weapon range deals damage to an ally with an attack that doesn’t include you, you can mark a <strong>Stress</strong> to immediately deal weapon damage to the enemy at half Proficiency (rounded up).</p>',
//     recall: 0,
//     level: 10,
//     domainType: "Ability",
//     domain: "blade",
//     img: "systems/daggerheart/assets/icons/domains/blade.webp",
//   },
//   {
//     name: "Resurrection",
//     feature:
//       '<p class="Body-Foundation">Make a <strong>Spellcast Roll (20)</strong>. On a success, you may restore one creature who has been dead no longer than <strong>100</strong> years. Then roll a <strong>1d6</strong>. On a <strong>1</strong>-<strong>5</strong>, put this card into your Vault permanently.</p><p class="Body-Foundation">On a failure, this cannot be attempted again for at least a week, and the consequences of failing such powerful magic can have unexpected effects on the dead.</p>',
//     recall: 2,
//     level: 10,
//     domainType: "Spell",
//     domain: "splendor",
//     img: "systems/daggerheart/assets/icons/domains/splendor.webp",
//   },
//   {
//     name: "Specter of the Dark",
//     feature:
//       '<p class="Body-Foundation">Mark a <strong>Stress</strong> to move like a ghost. While in this form, you are visible but can float and pass through solid objects for a number of minutes equal to your Spellcast Trait. During this time, you are immune to physical damage. </p>',
//     recall: 1,
//     level: 10,
//     domainType: "Spell",
//     domain: "midnight",
//     img: "systems/daggerheart/assets/icons/domains/midnight.webp",
//   },
//   {
//     name: "Tempest",
//     feature:
//       '<p class="Body-Foundation">Choose one of the following tempests and make a <strong>Spellcast Roll</strong> against all targets in far range. Any you are successful against experience its effects until the GM spends a <strong>Fear</strong> to end this spell:</p><p class="Body-Foundation"><em>Blizzard</em> - Immediately deal <strong>2d20</strong> magic damage and make them <em>vulnerable</em>.</p><p class="Body-Foundation"><em>Hurricane</em> - Immediately deal <strong>3d10</strong> magic damage. Choose a direction the wind is blowing. Targets can’t move against the wind.</p><p class="Body-Foundation"><em>Sandstorm</em> - Immediately deal <strong>5d6</strong> magic damage and any ranged attacks are now at disadvantage.</p>',
//     recall: 2,
//     level: 10,
//     domainType: "Spell",
//     domain: "sage",
//     img: "systems/daggerheart/assets/icons/domains/sage.webp",
//   },
//   {
//     name: "Transcendent Union",
//     feature:
//       '<p class="Body-Foundation">Once per long rest, spend <strong>5 Hope</strong> to cast this spell on two or more willing creatures that wish to be bonded. Until your next short rest, any creatures that have this union with each other can always share Hit Points Slots and Stress Slots between them. </p>',
//     recall: 1,
//     level: 10,
//     domainType: "Spell",
//     domain: "codex",
//     img: "systems/daggerheart/assets/icons/domains/codex.webp",
//   },
//   {
//     name: "Unbreakable",
//     feature:
//       '<p class="Body-Foundation">When you mark your last Hit Point, instead of making a death move, you may roll a <strong>1d6</strong> and clear that many marked Hit Points. Then put this card into your Vault.</p>',
//     recall: 4,
//     level: 10,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
//   {
//     name: "Unflappable",
//     feature:
//       '<p class="Body-Foundation">After you successfully evade an attack, you may clear a <strong>Stress</strong>. If you successfully evade an attack and have no <strong>Stress</strong> to clear, instead gain a <strong>Hope</strong>.</p>',
//     recall: 1,
//     level: 10,
//     domainType: "Ability",
//     domain: "bone",
//     img: "systems/daggerheart/assets/icons/domains/bone.webp",
//   },
//   {
//     name: "Unyielding Armor",
//     feature:
//       '<p class="Body-Foundation">Anytime you mark an Armor Slot, roll an amount of <strong>d6</strong>s equal to the Armor Slots you currently have marked. If any result in a <strong>6</strong>, you don’t have to mark it.</p>',
//     recall: 1,
//     level: 10,
//     domainType: "Ability",
//     domain: "valor",
//     img: "systems/daggerheart/assets/icons/domains/valor.webp",
//   },
// ];

// Hooks.on("ready", async () => {
//   const [domainFolder] = await Folder.createDocuments([
//     { name: "Domain Cards", type: "Item" },
//   ]);

//   // const [testFolder] = await Folder.createDocuments([
//   //   { name: "LMAO REAL?", type: "Item", parent: domainFolder.id },
//   // ]);

//   const domainFoldersArgs = [
//     { name: "Arcana", type: "Item", parent: domainFolder.id },
//     { name: "Blade", type: "Item", parent: domainFolder.id },
//     { name: "Bone", type: "Item", parent: domainFolder.id },
//     { name: "Codex", type: "Item", parent: domainFolder.id },
//     { name: "Grace", type: "Item", parent: domainFolder.id },
//     { name: "Midnight", type: "Item", parent: domainFolder.id },
//     { name: "Sage", type: "Item", parent: domainFolder.id },
//     { name: "Splendor", type: "Item", parent: domainFolder.id },
//     { name: "Valor", type: "Item", parent: domainFolder.id },
//   ];

//   const domainFolders = await Folder.createDocuments(domainFoldersArgs);

//   const domainFolderObject = domainFolders.reduce((acc, fold) => {
//     acc[fold.name.toLowerCase()] = fold.id
//     return acc;
//   }, {})

//   domains.forEach((item) => {
//     Item.create({
//       type: "domain",
//       name: `[${item.level}] ${item.name}`,
//       system: { ...item },
//       img: item.img,
//       folder: domainFolderObject[item.domain],
//     });
//   }); 
// });
