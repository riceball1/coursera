// Check if running on server
// Add data into the database if it's not already there



// Starter data
Meteor.startup(() => {
    if (Items.find().count() == 0) {
        console.log("No data yet. Creating starter data.");
        Items.insert({
            itemName: "baking soda",
            purpose: ["cleaning", "eating"],
            description: "Sodium bicarbonate is baking soda, bicarb or bicarbonate of soda. It is a chemical compound, sodium hydrogen carbonate, with the formula NaHCO3. The elements within it are sodium, hydrogen, carbon, oxygen. It is a white crystalline powder.It is an antacid: it was in the past to relieve acid indigestion a sickness caused by lots of acid in one's stomach. This was usually done by mixing sodium bicarbonate with water and drinking it. When there is too much acid, it causes heartburn, an uncomfortable feeling in the stomach. It reacts with acids to produce carbon dioxide gas. It also reacts with bases to reduce their harmful effects.When sodium bicarbonate is heated, it releases carbon dioxide and water vapor (gas) and turns into sodium carbonate.Baking soda is rarely found in the earth. It can be manufactured artificially, though.",
            createdOn: new Date(),
            createdBy: "Server",
            up: 0,
            down: 0
        	});
        Items.insert({
            itemName: "vinegar",
            purpose: ["cleaning", "eating"],
            description: "Vinegar is a liquid used mostly in cooking. It can be made from wine or other liquids containing alcohol, like cider or fermented fruit juices. Ethanol is oxidized from the liquid, resulting in vinegar. Vinegar made from dates is a traditional product of the Middle East. It can also be made through the use of certain bacteria. Vinegar contains about 5% of Acetic acid. The acid makes it sour.In cooking, it is often used as a condiment to add to salad, fish and vegetables like pickles and cabbage. It is much used in salad dressings.The pH of vinegar depends on how much acid is in it. Apple cider vinegar is typically between pH 4.25 and 5.00 if undiluted. Distilled vinegar has a pH of around 2.4.",
            createdOn: new Date(),
            createdBy: "Server",
            up: 0,
            down: 0
        	});
        Items.insert({
            itemName: "salt",
            purpose: ["cleaning", "eating"],
            description: "Saline water (also called salt water, salt-water or saltwater) is water with salt in it. It often means the water from the seas (sea water) and oceans. Salt water used for making or preserving food, is usually saltier than sea water and is called brine. Drinking sea water alone is dangerous. A summary of 163 life raft voyages showed the risk of death at 39% for those who drank seawater, compared to 3% for those who did not. Experiments on rats showed the danger.",
            createdOn: new Date(),
            createdBy: "Server",
            up: 0,
            down: 0
        	});
    } // end of if have items
});