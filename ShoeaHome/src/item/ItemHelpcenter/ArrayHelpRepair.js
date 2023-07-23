import { useState } from 'react';

const HelpCenterRepairArray = [
    { id: 1, title: 'How to repair shoea', message: `You can save yourself money and a trip to the shoe store by repairing your old shoes instead of buying new ones. With the right tools, you can repair loose shoe soles, holes in your shoes, and unsightly scuffs and stains. By putting in a little time and effort, you can hold onto your favorite shoes for years to come!`, visible: false },
    { id: 2, title: `Reattaching a Loose Sole ?`, message: `Wipe down the bottom of your shoe and the loose sole with a wet rag. Clear away any dust or dirt that's gotten lodged in between the sole and the bottom of your shoe. After cleaning your shoe`, visible: false },
    { id: 3, title: 'Patching Holes with Shoe Goo ?', message: `Clean the area around the hole in your shoe with a wet rag. Wipe off any dirt and grime near the hole. Once the area around the hole is clean, dry the area with a dry rag or paper towel`, visible: false },
    { id: 4, title: `Fixing Scuffs and Stains ?`, message: 'Use a pencil eraser to remove scuffs on your suede shoes. Make sure the pencil eraser has never been used before. Place the eraser on the scuff mark on your shoe and gently rub it back and forth until the scuff is gone', visible: false },
    { id: 5, title: 'What can I use to repair my shoes ?', message: `A quality product like Loctite Shoe Glue is best for any shoe because its flexible formulation bonds a variety of materials. In fact, it's the glue of choice for many repair shops. Since it bonds, seals, and repairs, it saves you time and money. The best thing is, it only takes a short while to get great results`, visible: false },
    { id: 6, title: 'What is shoe repairing ?', message: `Definitions of shoe repairing.the shoemaker's trade.synonyms:cobbling,shoemaking.type of:craft,trade.the skilled practice of a practical occupation`, visible: false },
    { id: 7, title: `Can all shoes be repaired ?`, message: `Not all shoes can be resoled. Whether a shoe can be resoled depends entirely on the design and construction of the shoe. On lower quality shoes, replacement soles may not be available. Even if they are, the cost to replace the sole may exceed the cost of the shoe, which doesn't make sense for the smart consumer`, visible: false },
    { id: 8, title: `Is vaseline good for sneakers ?`, message: 'Use Vaseline as a quick alternative to leather polish on scuffed shoes, boots, handbags, baseball gloves, and leather furniture. Simply apply a bit of the gel and buff with a soft cloth to achieve a slick shine', visible: false },
];

const HelpCenterRepair = () => {
    const [Repair, SetRepair] = useState(HelpCenterRepairArray);
    return { Repair, SetRepair };
};

export default HelpCenterRepair;
