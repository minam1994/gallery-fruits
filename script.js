var h3 = document.querySelector("h3");
var p = document.querySelector("p");

var apple = document.getElementById("apple");
var banana = document.getElementById("banana");
var blueberry = document.getElementById("blueberry");
var cherry = document.getElementById("cherry");
var kiwi = document.getElementById("kiwi");
var orange = document.getElementById("orange");
var raspberry = document.getElementById("raspberry");
var strawberry = document.getElementById("strawberry");

apple.addEventListener("click", function(){
    h3.textContent = "Apples";
    p.textContent = "An apple is a sweet, edible fruit produced by an apple tree (Malus pumila). Apple trees are cultivated worldwide, and are the most widely grown species in the genus Malus. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.";
});

banana.addEventListener("click", function(){
    h3.textContent = "Bananas";
    p.textContent = "A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe.";
});

blueberry.addEventListener("click", function(){
    h3.textContent = "Blueberries";
    p.textContent = "Blueberries are perennial flowering plants with blue– or purple–colored berries. They have a sweet taste when mature, with variable acidity.";
    scroll(0,0)
});

cherry.addEventListener("click", function(){
    h3.textContent = "Cherries";
    p.textContent = "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe (stone fruit). The cherry fruits of commerce usually are obtained from cultivars of a limited number of species such as the sweet cherry (Prunus avium) and the sour cherry (Prunus cerasus).";
    scroll(0,0)
});

kiwi.addEventListener("click", function(){
    h3.textContent = "Kiwi";
    p.textContent = "Kiwifruit (often abbreviated as kiwi), or Chinese gooseberry is the edible berry of several species of woody vines in the genus Actinidia. The fruit has a soft texture, with a sweet and unique flavor.";
    scroll(0,0)
});

orange.addEventListener("click", function(){
    h3.textContent = "Oranges";
    p.textContent = "An orange is a type of citrus fruit which people often eat or they can sniff the skin when grinded into a smooth powder. Oranges are a very good source of vitamins, especially vitamin C. Oranges are round orange-coloured fruit that grow on a tree which can reach 10 metres (33 ft) high. Orange trees have dark green shiny leaves and small white flowers with five petals.";
    scroll(0,0)
});

raspberry.addEventListener("click", function(){
    h3.textContent = "Raspberries";
    p.textContent = "The raspberry is the edible fruit of a multitude of plant species in the genus Rubus of the rose family, most of which are in the subgenus Idaeobatus; the name also applies to these plants themselves. Raspberries are perennial with woody stems.";
    scroll(0,0)
});

strawberry.addEventListener("click", function(){
    h3.textContent = "Strawberries";
    p.textContent = "The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries. It is cultivated worldwide for its fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, juice, pies, ice creams, milkshakes, and chocolates.";
    scroll(0,0)
});
