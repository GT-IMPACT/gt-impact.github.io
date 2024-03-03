### ADVANCED ELECTRIC MINER

![LOGO](media/gregtech/ADV_MINER.png)

##### Description

An advanced electric basic miner for mining.

##### General

The miner mines ore in the entire vein in which the chunk and the miner itself is located. Passively consumes drilling fluid.

##### Mandatory!

Read in [Mechanics](#/mechanics#oregeneration) section how the generation of minerals is arranged.

##### Machine working

With the help of Miner Drill Hatch miner to produce minerals.

The Drill Hatch houses the Drill Head, a headband that has a strength, with the strength of the headband decreasing with each cycle of the miner.

You can use different headband tiers. Headband tier means that a factor (headband tiers) is added to the base ore extraction (x1): Extraction = 1 + tier

Miner has a bonus to mining. Crushing of excavated ore is performed (50% chance of crushing).

![SMALL](media/gregtech/miner_drill.png)

With the Miner Enrichment Unit, the miner increases the yield of ore, and also does the first processing of this ore.

Enrichment Unit performs Flotation Unit recipes. The energy is summed by the prescription.

Example (see picture): if you have Drill Head level 3, then the ore is mined x4, based on this:

- Energy consumption = 4 * 480 = 1,920 EU/t + Miner base consumption.

- Fluid consumption = 4 * 1,000 = 4,000L.

- Time = not included.

![SMALL](media/gregtech/enrich.png)

##### Important!

Only one miner can be in one chunk!
