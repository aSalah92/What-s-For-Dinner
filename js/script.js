// img-box elements
let mealImg = document.getElementById("meal-img");
let rating = document.getElementById("rating-stars");
let prepTime = document.getElementsByClassName("details-text")[0];
let cookTime = document.getElementsByClassName("details-text")[1];
let servings = document.getElementsByClassName("details-text")[2];

//text-box element
let difficulty = document.getElementById("difficulty");
let region = document.getElementById("region");

let mealName = document.getElementById("meal-name");
let mealDisc = document.getElementById("meal-disc");

let warningMsg = document.getElementById("warning-box");

let ingredientsPage = document.getElementById("ingredients-page");
// ingredients-page form
// <div class="ingredient-box d-flex">
//   <div class="num-box"><p>1</p></div>
//   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
// </div>

let instructionsPage = document.getElementById("instructions-page");
// Instructions-page form
// <div class="instructions-box d-flex">
//   <div class="num-box"><p>1</p></div>
//   <p id="inst-one">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
// </div>

let calories = document.getElementsByClassName("nutrition-values")[0];
let protein = document.getElementsByClassName("nutrition-values")[1];
let carbohydrates = document.getElementsByClassName("nutrition-values")[2];
let fat = document.getElementsByClassName("nutrition-values")[3];
let fiber = document.getElementsByClassName("nutrition-values")[4];
let sodium = document.getElementsByClassName("nutrition-values")[5];

let chefPage = document.getElementById("chef-inner");
//   <div class="chef-box d-flex gap-2 my-4">
//     <p class="m-0">✓</p>
//     <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloribus.</p>
//   </div>

let randomBtn = document.getElementById("random-btn");

let mealsArr = [
  {
    mealName: "Chicken Tikka Masala",
    stars: 4.7,
    reviews: "(389 reviews)",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Intermediate",
    region: "Asian",
    disc: "Rich and creamy Indian curry with tender chicken pieces",
    warningMsg: true,
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "fresh cilantro for garnish",
    ],
    Instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],
    Nutrition: {
      calories: 450,
      protein: 38,
      carbohydrates: 24,
      fat: 22,
      fiber: 4,
      sodium: 760,
    },
    chefTips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],
    img: "./images/ChickenTikkaMasala.avif",
  },
  {
    mealName: "French Onion Soup",
    stars: 4.7,
    reviews: "(257 reviews)",
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
    difficulty: "Intermediate",
    region: "Mediterranean",
    disc: "Rich beef broth with caramelized onions and melted cheese",
    warningMsg: true,
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    Instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],
    Nutrition: {
      calories: 380,
      protein: 18,
      carbohydrates: 36,
      fat: 18,
      fiber: 4,
      sodium: 980,
    },
    chefTips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning",
    ],
    img: "./images/FrenchOnionSoup.avif",
  },
  {
    mealName: "Margherita Pizza",
    stars: 4.9,
    reviews: "(512 reviews)",
    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",
    difficulty: "Intermediate",
    region: "Italian",
    disc: "Classic Italian pizza with fresh mozzarella and basil",
    warningMsg: true,
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    Instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    Nutrition: {
      calories: 580,
      protein: 24,
      carbohydrates: 68,
      fat: 22,
      fiber: 4,
      sodium: 920,
    },
    chefTips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
    img: "./images/MargheritaPizza.avif",
  },
  {
    mealName: "Chocolate Brownies",
    stars: 4.9,
    reviews: "(684 reviews)",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "9 pieces",
    difficulty: "Easy",
    region: "American",
    disc: "Fudgy and rich chocolate brownies with a crinkle top",
    warningMsg: false, // The red warning banner is not present in these images
    ingredients: [
      "200g unsalted butter, melted",
      "200g dark chocolate, chopped",
      "1 cup granulated sugar",
      "3 large eggs",
      "1/2 cup all-purpose flour",
      "1/3 cup cocoa powder",
      "1 teaspoon vanilla extract",
      "1/2 teaspoon salt",
    ],
    Instructions: [
      "Preheat your oven to 180°C (350°F) and line an 8x8 inch baking pan with parchment paper.",
      "Whisk the melted butter and granulated sugar together in a large bowl until well combined.",
      "Add the eggs one at a time, whisking vigorously after each addition until the mixture becomes pale and slightly fluffy.",
      "Stir in the vanilla extract and melted dark chocolate until smooth.",
      "Gently fold in the all-purpose flour, cocoa powder, and salt just until combined. Do not overmix.",
      "Pour the batter into the prepared pan, smooth the top, and bake for 22-25 minutes until the center is set but still fudgy.",
    ],
    Nutrition: {
      calories: 280,
      protein: 4,
      carbohydrates: 32,
      fat: 16,
      fiber: 2,
      sodium: 140,
    },
    chefTips: [
      "Do not overbake if you want a dense, fudgy texture in the center",
      "Whisking the eggs and sugar vigorously is the secret to getting that perfect crinkle top",
      "Let the brownies cool completely before slicing for clean, sharp edges",
      "Add a handful of chocolate chips or walnuts for extra texture and flavor",
    ],
    img: "./images/ChocolateBrownies.jpg",
  },
  {
    mealName: "Creamy Tuscan Chicken",
    stars: 4.8,
    reviews: "(415 reviews)",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "4 people",
    difficulty: "Easy",
    region: "Mediterranean",
    disc: "Tender chicken breasts in a rich garlic, spinach, and sun-dried tomato cream sauce",
    warningMsg: false,
    ingredients: [
      "600g chicken breasts, halved lengthwise",
      "2 tablespoons olive oil",
      "1 cup heavy cream",
      "1/2 cup chicken broth",
      "1 teaspoon garlic powder",
      "1 cup fresh spinach, packed",
      "1/2 cup sun-dried tomatoes, chopped",
      "1/2 cup grated Parmesan cheese",
    ],
    Instructions: [
      "Season chicken breasts with salt, pepper, and garlic powder on both sides.",
      "Heat olive oil in a large skillet over medium-high heat and sear chicken for 5 minutes on each side until golden brown. Remove and set aside.",
      "In the same skillet, reduce heat to medium and pour in chicken broth, heavy cream, and garlic powder. Bring to a simmer.",
      "Add the sun-dried tomatoes and spinach leaves to the sauce. Simmer for 3 minutes until spinach is wilted.",
      "Stir in the grated Parmesan cheese until the sauce thickens slightly.",
      "Return the chicken back into the skillet, spoon the sauce over it, and simmer for another 3 minutes before serving.",
    ],
    Nutrition: {
      calories: 510,
      protein: 42,
      carbohydrates: 6,
      fat: 36,
      fiber: 1,
      sodium: 680,
    },
    chefTips: [
      "Squeeze a bit of fresh lemon juice at the end to cut through the richness of the cream",
      "Make sure your skillet is hot before adding the chicken to get a perfect golden crust",
      "Serve this dish over a bed of fettuccine pasta or with crusty bread",
      "You can substitute chicken breasts with chicken thighs for an even juicier texture",
    ],
    img: "./images/CreamyTuscanChicken.jpg",
  },
  {
    mealName: "Greek Salmon Bowls",
    stars: 4.8,
    reviews: "(314 reviews)",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "2 people",
    difficulty: "Easy",
    region: "Mediterranean",
    disc: "Crisp seasoned salmon over a bed of fluffy quinoa, fresh cucumbers, and tangy feta",
    warningMsg: false,
    ingredients: [
      "300g salmon fillets, skinless",
      "1 cup quinoa, uncooked",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 cup Kalamata olives, pitted",
      "1/2 cup feta cheese, crumbled",
      "2 tablespoons olive oil",
      "1 tablespoon dried oregano",
    ],
    Instructions: [
      "Rinse quinoa thoroughly and cook according to package instructions, then set aside to cool slightly.",
      "Cut salmon fillets into bite-sized cubes and season generously with dried oregano, salt, and pepper.",
      "Heat olive oil in a skillet over medium-high heat and sear the salmon cubes for 2-3 minutes on each side until cooked through.",
      "Divide the cooked quinoa evenly between two serving bowls.",
      "Arrange the seared salmon, diced cucumber, cherry tomatoes, and Kalamata olives over the quinoa base.",
      "Garnish the top with crumbled feta cheese and an optional drizzle of olive oil before serving.",
    ],
    Nutrition: {
      calories: 520,
      protein: 34,
      carbohydrates: 42,
      fat: 24,
      fiber: 5,
      sodium: 610,
    },
    chefTips: [
      "Make sure the skillet is hot before adding salmon to get a beautifully crisp sear",
      "You can swap the quinoa for brown rice or a simple bed of chopped romaine lettuce",
      "Add a scoop of tzatziki sauce on top for extra creaminess and flavor",
      "Meal prep friendly—store the components separately and assemble right before eating",
    ],
    img: "./images/GreekSalmonBowls.jpg",
  },
  {
    mealName: "Creamy Tomato Basil Soup",
    stars: 4.6,
    reviews: "(198 reviews)",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    region: "Mediterranean",
    disc: "Smooth and velvety tomato soup infused with aromatic fresh basil",
    warningMsg: false,
    ingredients: [
      "800g canned whole peeled tomatoes",
      "1 large onion, chopped",
      "4 cloves garlic, minced",
      "2 cups vegetable broth",
      "1/2 cup heavy cream",
      "1/4 cup fresh basil leaves, packed",
      "2 tablespoons olive oil",
      "1 teaspoon Italian seasoning",
    ],
    Instructions: [
      "Heat olive oil in a large pot over medium heat. Sauté the chopped onion until transparent and soft.",
      "Add minced garlic and Italian seasoning, cooking for 1 minute until fragrant.",
      "Pour in the canned tomatoes with their juices and the vegetable broth. Bring to a boil, then reduce heat and simmer for 15 minutes.",
      "Remove the pot from the heat and stir in the fresh basil leaves.",
      "Use an immersion blender to puree the soup until completely smooth and velvety.",
      "Return to low heat, stir in the heavy cream, and season with salt and pepper to taste before serving.",
    ],
    Nutrition: {
      calories: 240,
      protein: 4,
      carbohydrates: 18,
      fat: 17,
      fiber: 3,
      sodium: 590,
    },
    chefTips: [
      "Serve alongside a classic grilled cheese sandwich for the perfect pairing",
      "If the tomatoes taste a bit too acidic, stir in a teaspoon of sugar to balance it out",
      "An immersion blender saves dishes, but a traditional stand blender works too (just don't overfill it while hot)",
      "Drizzle a tiny bit of extra virgin olive oil over the bowls right before serving for a gourmet finish",
    ],
    img: "./images/CreamyTomatoBasilSoup.jpg",
  },
  {
    mealName: "Beef Wellington",
    stars: 4.9,
    reviews: "(542 reviews)",
    prepTime: "60 min",
    cookTime: "45 min",
    servings: "6 people",
    difficulty: "Hard",
    region: "European",
    disc: "Tender beef fillet wrapped in rich mushroom duxelles, prosciutto, and crisp golden puff pastry",
    warningMsg: true,
    ingredients: [
      "1kg beef tenderloin center-cut, trimmed",
      "500g chestnut mushrooms, finely chopped",
      "12 slices of Prosciutto di Parma",
      "500g puff pastry block",
      "2 tablespoons English mustard",
      "4 cloves garlic, minced",
      "2 egg yolks, beaten (for egg wash)",
      "2 tablespoons olive oil",
    ],
    Instructions: [
      "Season the beef generously with salt and pepper, then sear in a hot skillet with olive oil for 2 minutes on all sides until browned. Remove and immediately brush with English mustard while hot.",
      "In the same pan, fry the finely chopped mushrooms with minced garlic until all moisture has evaporated, leaving a thick paste (duxelles). Let it cool completely.",
      "Overlap sheets of plastic wrap on a counter and lay out the prosciutto slices in an overlapping rectangle. Spread the mushroom duxelles evenly over the prosciutto layer.",
      "Place the beef fillet in the center and use the plastic wrap to roll the prosciutto tightly around the beef. Twist the ends of the wrap securely and chill in the fridge for 30 minutes.",
      "Roll out the puff pastry on a lightly floured surface. Unwrap the chilled beef roll, place it onto the pastry, and wrap the pastry tightly around it, sealing the edges completely.",
      "Score a decorative pattern gently onto the pastry surface, brush with beaten egg yolks, and bake at 200°C (400°F) for 35 minutes until the pastry is deep golden brown and the core reaches a perfect medium-rare.",
    ],
    Nutrition: {
      calories: 680,
      protein: 48,
      carbohydrates: 28,
      fat: 42,
      fiber: 2,
      sodium: 840,
    },
    chefTips: [
      "Make absolutely sure your mushroom duxelles is completely dry, or it will make your puff pastry soggy",
      "Letting the wrapped beef chill and firm up in the fridge is critical to maintaining its clean shape when slicing",
      "Use a thermometer to check the meat—remove from the oven when the center reads 52°C (125°F) for a perfect rest",
      "Let the Wellington rest for at least 10-15 minutes after baking so the internal juices lock into the meat",
    ],
    img: "./images/BeefWellington.jpg",
  },
  {
    mealName: "Koshari",
    stars: 4.9,
    reviews: "(482 reviews)",
    prepTime: "25 min",
    cookTime: "35 min",
    servings: "4 people",
    difficulty: "Intermediate",
    region: "Middle Eastern",
    disc: "Egypt's national dish featuring layers of rice, macaroni, lentils, and chickpeas topped with a spicy tomato sauce and crispy fried onions",
    warningMsg: false,
    ingredients: [
      "1 cup brown lentils",
      "1 cup Egyptian short-grain rice",
      "1 cup elbow macaroni",
      "1 can (400g) chickpeas, drained",
      "2 large onions, thinly sliced",
      "4 cloves garlic, minced",
      "500g tomato passata or crushed tomatoes",
      "2 tablespoons white vinegar",
      "1 teaspoon cumin",
      "1/2 teaspoon chili powder",
      "Vegetable oil for frying",
    ],
    Instructions: [
      "Deep-fry the sliced onions in vegetable oil until deep golden brown and crispy. Remove and drain on paper towels; save the cooking oil.",
      "Boil brown lentils in water until tender, then drain. In a separate pot, boil elbow macaroni until al dente, then drain.",
      "Using some of the reserved onion oil, cook the rice with a touch of cumin and water until fluffy. Mix the cooked rice and cooked lentils together.",
      "Make the tomato sauce: sauté minced garlic in a bit of onion oil, add tomato passata, cumin, salt, pepper, and vinegar. Simmer for 15 minutes.",
      "Make the optional 'Dakka' garlic sauce by mixing minced garlic, vinegar, cumin, and warm water together in a small bowl.",
      "Assemble the dish: layer the rice and lentil mix first, top with macaroni, warm chickpeas, pour the tomato sauce over everything, and garnish generously with the crispy onions.",
    ],
    Nutrition: {
      calories: 540,
      protein: 16,
      carbohydrates: 98,
      fat: 9,
      fiber: 12,
      sodium: 410,
    },
    chefTips: [
      "The secret to the authentic taste is using the onion-infused oil to cook the rice and make the sauce",
      "Make sure the onions are thoroughly dried before frying to get them perfectly crispy",
      "Serve with extra chili flakes mixed into a portion of the tomato sauce for those who love high heat",
      "This dish is naturally vegan, packed with plant-based protein, and incredibly filling",
    ],
    img: "./images/EgyptianKoshari.jpg",
  },
  {
    mealName: "Mahshi",
    stars: 4.8,
    reviews: "(319 reviews)",
    prepTime: "50 min",
    cookTime: "40 min",
    servings: "5 people",
    difficulty: "Hard",
    region: "Middle Eastern",
    disc: "Tender cabbage leaves stuffed with a spiced, aromatic rice and fresh herb mixture, simmered in a savory broth",
    warningMsg: true,
    ingredients: [
      "1 large green cabbage",
      "2 cups Egyptian short-grain rice, washed",
      "2 large onions, finely chopped",
      "2 cups tomato passata",
      "1 cup fresh cilantro, finely chopped",
      "1 cup fresh dill, finely chopped",
      "1 cup fresh parsley, finely chopped",
      "2 cups chicken or beef broth",
      "2 tablespoons ghee or butter",
      "1 teaspoon cumin",
      "1 teaspoon dry mint",
    ],
    Instructions: [
      "Boil the cabbage leaves in salted water with a touch of cumin for 2-3 minutes until pliable, then remove, cool, and cut into small rectangular wrappers.",
      "Prepare the stuffing sauce by sautéing onions in ghee, adding the tomato passata, cumin, salt, and pepper, and simmering until the sauce thickens.",
      "In a large bowl, mix the washed rice, the thickened tomato sauce, and all the finely chopped fresh herbs (cilantro, dill, parsley) together.",
      "Place a small spoonful of the rice mixture on a piece of cabbage leaf, roll it tightly like a small cigar, and repeat.",
      "Line the bottom of a deep pot with leftover cabbage scraps, then pack the stuffed rolls tightly in neat, circular layers.",
      "Pour the hot broth over the rolls until it just reaches the top layer, bring to a boil, then cover and simmer on low heat for 40 minutes until the rice is fully cooked.",
    ],
    Nutrition: {
      calories: 390,
      protein: 8,
      carbohydrates: 74,
      fat: 7,
      fiber: 6,
      sodium: 580,
    },
    chefTips: [
      "Do not overfill the leaves with rice because the grains will expand significantly while cooking",
      "Using a mix of all three fresh herbs—dill, parsley, and cilantro—is vital for that signature street-style aroma",
      "Placing a heavy, heat-safe plate face down on top of the rolls inside the pot prevents them from unrolling while boiling",
      "Squeeze a little bit of fresh lemon juice over the top layers right before serving to add a bright, tangy finish",
    ],
    img: "./images/EgyptianMahshi.jpg",
  },
  {
    mealName: "Ta'ameya",
    stars: 4.9,
    reviews: "(512 reviews)",
    prepTime: "720 min", // Requires overnight soaking for the beans
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Intermediate",
    region: "Middle Eastern",
    disc: "Authentic Egyptian falafel made with crushed fava beans and fresh green herbs, fried to a perfect golden crunch",
    warningMsg: true, // Set to true due to the extended overnight soaking time
    ingredients: [
      "500g split peeled fava beans (fool medas), soaked overnight",
      "1 cup fresh leek (korrat) or green onions, chopped",
      "1 cup fresh cilantro, chopped",
      "1 cup fresh parsley, chopped",
      "1 large onion, chopped",
      "5 cloves garlic",
      "1 tablespoon ground coriander",
      "1 teaspoon cumin",
      "1/2 teaspoon baking soda",
      "2 tablespoons sesame seeds (for coating)",
      "Vegetable oil for deep frying",
    ],
    Instructions: [
      "Drain the soaked fava beans thoroughly and place them into a food processor.",
      "Add the chopped onion, garlic, leek, cilantro, and parsley to the food processor with the beans.",
      "Pulse and blend the mixture until it forms a smooth, vibrant green paste. Avoid over-processing into a complete puree.",
      "Transfer the mixture to a bowl and stir in the ground coriander, cumin, salt, pepper, and baking soda.",
      "Shape the paste into small, flat patties, and gently press sesame seeds onto both sides of each patty.",
      "Heat vegetable oil in a deep pan over medium-high heat and fry the patties for 3-4 minutes until dark golden brown and crispy on the outside.",
    ],
    Nutrition: {
      calories: 310,
      protein: 14,
      carbohydrates: 38,
      fat: 12,
      fiber: 9,
      sodium: 480,
    },
    chefTips: [
      "Unlike Middle Eastern falafel made with chickpeas, traditional Egyptian ta'ameya relies entirely on fava beans for its signature light and fluffy interior",
      "Adding the baking soda right before frying reacts to give the patties a beautifully airy texture",
      "Make sure the fava beans are completely dried after soaking, as excess water will cause the patties to fall apart in the hot oil",
      "Serve hot inside warm Egyptian baladi bread with tahini sauce, tomatoes, and pickled turnips",
    ],
    img: "./images/EgyptianTaameya.jpg",
  },
  {
    mealName: "Hawawshi",
    stars: 4.8,
    reviews: "(365 reviews)",
    prepTime: "20 min",
    cookTime: "25 min",
    servings: "4 people",
    difficulty: "Easy",
    region: "Middle Eastern",
    disc: "Crispy, oven-baked baladi bread stuffed with a spiced minced meat and onion mixture",
    warningMsg: false,
    ingredients: [
      "500g minced beef (with 20% fat)",
      "2 large onions, finely grated",
      "2 green bell peppers, finely chopped",
      "1 hot chili pepper, minced (optional)",
      "4 loaves of Egyptian baladi bread (or pita bread)",
      "1 tablespoon ghee or melted butter",
      "1 teaspoon allspice",
      "1/2 teaspoon nutmeg",
      "1/2 teaspoon cinnamon",
    ],
    Instructions: [
      "In a large bowl, mix the minced beef, grated onions, chopped peppers, allspice, nutmeg, cinnamon, salt, and pepper. Knead well until fully combined.",
      "Carefully cut open one edge of each bread loaf to create a pocket for the stuffing.",
      "Divide the meat mixture into equal portions and spread a thin, even layer inside each loaf of bread.",
      "Preheat your oven to 200°C (400°F).",
      "Brush the outside of the stuffed bread loaves generously on both sides with ghee or melted butter.",
      "Wrap each loaf loosely in aluminum foil and bake in the oven for 15 minutes, then remove the foil and bake for another 10 minutes until the bread is perfectly crispy and the meat is cooked through.",
    ],
    Nutrition: {
      calories: 460,
      protein: 28,
      carbohydrates: 34,
      fat: 22,
      fiber: 3,
      sodium: 690,
    },
    chefTips: [
      "Using meat with a higher fat percentage (around 20%) keeps the inside juicy and prevents the filling from drying out",
      "If you don't want to use an oven, you can cook it in a skillet on the stovetop over medium heat with a lid on, flipping halfway through",
      "Serve hot alongside a side of tahini sauce, pickled cucumbers, or fresh arugula",
      "Make sure to squeeze the excess juice out of the grated onions before mixing them with the meat to keep the bread from getting soggy",
    ],
    img: "./images/Hawawshi.jpg",
  },
  {
    mealName: "Roz Ma'ammar",
    stars: 4.9,
    reviews: "(284 reviews)",
    prepTime: "15 min",
    cookTime: "50 min",
    servings: "6 people",
    difficulty: "Intermediate",
    region: "Middle Eastern",
    disc: "Rich and creamy baked rice dish made with milk, heavy cream, and pigeons or chicken tucked inside a clay pot",
    warningMsg: true, // Requires more than 45 minutes to cook/bake
    ingredients: [
      "2 cups Egyptian short-grain rice, washed and drained",
      "3 cups full-fat milk, hot",
      "1 cup heavy fresh cream (ishta)",
      "2 tablespoons ghee or butter",
      "500g chicken breast or small squab (pigeon) pieces, precooked",
      "1/4 teaspoon nutmeg",
      "Salt and black pepper to taste",
    ],
    Instructions: [
      "Preheat your oven to 200°C (400°F) and grease a traditional clay baking pot (bram) generously with ghee.",
      "Layer half of the washed short-grain rice at the bottom of the pot.",
      "Arrange the precooked chicken or squab pieces evenly over the rice layer, and season with salt, pepper, and a pinch of nutmeg.",
      "Cover the meat completely with the remaining half of the rice.",
      "Pour the hot full-fat milk into the pot, making sure it completely submerges the rice layers.",
      "Spread the heavy fresh cream (ishta) and pieces of butter over the top surface to ensure a rich, golden-brown crust forms.",
      "Bake in the oven for 45-50 minutes until the rice absorbs all the liquid and a deeply browned, bubbly crinkled crust develops on top.",
    ],
    Nutrition: {
      calories: 580,
      protein: 26,
      carbohydrates: 62,
      fat: 24,
      fiber: 1,
      sodium: 490,
    },
    chefTips: [
      "Using an authentic clay pot (bram) is essential for achieving the traditional earthy depth of flavor",
      "Don't substitute the fresh heavy cream; it's the key to getting that iconic thick, browned top layer",
      "Let the dish rest covered outside the oven for 10 minutes before scooping into it so the rice sets beautifully",
      "You can make a sweet version of this exact dish by omitting the meat and swapping the savory spices for sugar and vanilla",
    ],
    img: "./images/RozMaammar.jpg",
  },
  {
    mealName: "Mesa'aa",
    stars: 4.7,
    reviews: "(243 reviews)",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Easy",
    region: "Middle Eastern",
    disc: "Layers of fried eggplant, green bell peppers, and spiced minced beef baked in a garlicky tomato sauce",
    warningMsg: false,
    ingredients: [
      "2 large eggplants, sliced into rounds",
      "300g minced beef",
      "1 large onion, finely chopped",
      "2 green bell peppers, sliced",
      "4 cloves garlic, minced",
      "2 cups tomato passata",
      "2 tablespoons white vinegar",
      "1 teaspoon cumin",
      "Vegetable oil for frying",
    ],
    Instructions: [
      "Salt the eggplant slices and let them sit for 15 minutes to draw out moisture, then pat dry and fry in hot vegetable oil until golden brown.",
      "In a separate skillet, sauté the chopped onion and minced beef until the meat is fully browned. Season with salt, pepper, and cumin.",
      "Quickly fry the green pepper slices in the same oil until lightly softened, then remove.",
      "Make the sauce: sauté minced garlic in a tablespoon of oil until fragrant, splash in the white vinegar, then pour in the tomato passata and simmer for 10 minutes.",
      "In a baking dish, layer half of the fried eggplant and peppers, cover with the spiced minced beef mixture, and layer the remaining vegetables on top.",
      "Pour the garlicky tomato sauce evenly over the dish and bake at 190°C (375°F) for 20 minutes until bubbling and slightly browned on top.",
    ],
    Nutrition: {
      calories: 340,
      protein: 18,
      carbohydrates: 22,
      fat: 21,
      fiber: 6,
      sodium: 540,
    },
    chefTips: [
      "You can grill or brush the eggplant with oil and bake it instead of deep-frying for a lighter, lower-calorie option",
      "The splash of vinegar into the garlic right before adding the tomato sauce is essential for the authentic flavor profile",
      "This dish tastes even better the next day after the eggplant has thoroughly absorbed the garlic tomato sauce",
      "Can easily be made vegetarian or vegan by omitting the minced beef layer completely",
    ],
    img: "./images/Mesaaa.jpg",
  },
  {
    mealName: "Molokhia",
    stars: 4.9,
    reviews: "(582 reviews)",
    prepTime: "20 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Intermediate",
    region: "Middle Eastern",
    disc: "A smooth, aromatic green soup made from finely minced jute leaves, finished with a sizzling garlic and coriander tasha",
    warningMsg: false,
    ingredients: [
      "500g fresh molokhia leaves, finely minced (or frozen)",
      "4 cups chicken or rabbit broth",
      "6 cloves garlic, finely minced",
      "1 tablespoon ground coriander",
      "1 tablespoon ghee or butter",
      "1/4 teaspoon baking soda (optional, to keep the bright green color)",
      "Salt to taste",
    ],
    Instructions: [
      "Bring the chicken broth to a gentle simmer in a large pot over medium heat.",
      "Add the finely minced molokhia leaves to the hot broth, whisking vigorously to ensure the leaves blend smoothly into the liquid without forming clumps.",
      "Let the soup cook on a very low simmer for 5 minutes. Do not let it boil vigorously, and do not cover the pot.",
      "Prepare the 'Tasha' (the garlic oil): heat ghee in a small skillet over medium heat, add the minced garlic, and sauté until fragrant and lightly golden.",
      "Add the ground coriander to the skillet with the garlic, stirring constantly for about 1 minute until the mixture turns deep golden brown and highly aromatic.",
      "Immediately pour the sizzling hot tasha mixture directly over the simmering molokhia pot, stir gently, and turn off the heat.",
    ],
    Nutrition: {
      calories: 140,
      protein: 6,
      carbohydrates: 12,
      fat: 8,
      fiber: 4,
      sodium: 620,
    },
    chefTips: [
      "Never cover the pot during or after cooking, or the minced leaves will separate from the broth and sink to the bottom",
      "If using fresh leaves, make sure they are completely dry after washing before you start mincing them",
      "The traditional way to enjoy this is served piping hot over a bed of white rice, alongside roasted chicken and pickled tomatoes",
      "Be careful not to burn the coriander and garlic during the tasha stage, as burnt garlic will make the entire soup taste bitter",
    ],
    img: "./images/Molokhia.jpg",
  },
  {
    mealName: "Fattah",
    stars: 4.9,
    reviews: "(420 reviews)",
    prepTime: "25 min",
    cookTime: "40 min",
    servings: "6 people",
    difficulty: "Intermediate",
    region: "Middle Eastern",
    disc: "A festive layered dish of crispy toasted flatbread, garlic-vinegar rice, and tender boiled beef topped with a rich tomato sauce",
    warningMsg: false,
    ingredients: [
      "1kg beef cubes (like chuck or shank)",
      "2 cups Egyptian short-grain rice",
      "2 loaves of pita bread, cut into squares",
      "2 tablespoons ghee or butter",
      "8 cloves garlic, minced",
      "1/2 cup white vinegar",
      "2 cups tomato passata",
      "1 teaspoon cumin",
      "1/2 teaspoon coriander",
    ],
    Instructions: [
      "Boil the beef cubes in a large pot with onions, cardamom, and bay leaves until completely tender, reserving the rich broth.",
      "Toss the bread squares with a tablespoon of melted ghee and bake at 180°C (350°F) for 10-12 minutes until crispy and golden brown.",
      "Cook the short-grain rice in a pot with a tablespoon of ghee and hot water or broth until fluffy and fully cooked.",
      "Prepare the garlic-vinegar sauce (Dakka): sauté minced garlic in ghee until golden, pour in the white vinegar carefully, and let it simmer for 1 minute. Separate half of this sauce into a cup.",
      "Add tomato passata, cumin, coriander, salt, and pepper to the remaining garlic-vinegar sauce in the pan, cooking for 10 minutes until it thickens.",
      "Assemble the layers in a deep serving dish: place the crispy bread first, ladle a cup of hot beef broth and the plain garlic-vinegar sauce over it, spread the rice evenly on top, pour the tomato sauce over the rice, and arrange the tender beef cubes on top.",
    ],
    Nutrition: {
      calories: 610,
      protein: 38,
      carbohydrates: 54,
      fat: 26,
      fiber: 2,
      sodium: 710,
    },
    chefTips: [
      "Ladle the hot broth over the crispy bread right before serving so it softens slightly but retains a bit of crunch",
      "For extra flavor, pan-sear the boiled beef cubes in a tablespoon of ghee with black pepper before placing them on top of the rice",
      "You can customize the amount of garlic sauce poured over the bread layers depending on how strong you want the garlic flavor to be",
      "This dish is traditionally served during major celebratory occasions and family gatherings across Egypt",
    ],
    img: "./images/Fattah.jpg",
  },
  {
    mealName: "Macarona Bachamel",
    stars: 4.9,
    reviews: "(612 reviews)",
    prepTime: "20 min",
    cookTime: "40 min",
    servings: "6 people",
    difficulty: "Intermediate",
    region: "European",
    disc: "A deeply loved comfort dish featuring layers of penne pasta, spiced minced beef, and a thick, creamy layer of French-style béchamel sauce baked to golden perfection",
    warningMsg: false,
    ingredients: [
      "500g penne pasta",
      "400g minced beef",
      "1 large onion, finely chopped",
      "4 cups full-fat milk",
      "4 tablespoons all-purpose flour",
      "4 tablespoons butter",
      "1/2 cup mozzarella or roomi cheese, shredded",
      "1/4 teaspoon nutmeg",
      "Salt and black pepper to taste",
    ],
    Instructions: [
      "Boil the penne pasta in salted water until al dente, then drain and set aside.",
      "Sauté the chopped onion in a skillet, add the minced beef, and cook until browned. Season generously with salt, pepper, and a pinch of allspice.",
      "Make the béchamel sauce: melt butter in a saucepan, stir in the flour, and cook for 1-2 minutes. Gradually whisk in the warm milk to prevent lumps, then simmer until thick and smooth. Season with salt, pepper, and nutmeg.",
      "Mix a cup of the finished béchamel sauce into the cooked pasta to coat it.",
      "In a greased baking dish, layer half of the pasta, spread the minced beef mixture evenly on top, and add the remaining pasta as the third layer.",
      "Pour the remaining thick béchamel sauce completely over the top layer, sprinkle with shredded cheese, and bake at 200°C (400°F) for 35-40 minutes until bubbling and golden-brown.",
    ],
    Nutrition: {
      calories: 590,
      protein: 32,
      carbohydrates: 58,
      fat: 24,
      fiber: 2,
      sodium: 680,
    },
    chefTips: [
      "Let the dish cool for 15-20 minutes after baking if you want neat, clean squares when slicing it",
      "Whisk the milk into the roux very gradually while it's warm to guarantee a perfectly smooth sauce without any clumps",
      "Using a mix of mozzarella and local Roomi cheese adds an incredible savory depth and perfect melt to the top crust",
      "This dish is an adaptation of classic Greek Pastitsio or French baking techniques that became an essential center-piece for family gatherings across Egypt",
    ],
    img: "./images/MacaronaBachamel.jpg",
  },
  {
    mealName: "Baba Ganoush",
    stars: 4.8,
    reviews: "(342 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    region: "Middle Eastern",
    disc: "A smoky, creamy Levantine eggplant dip mixed with rich tahini, garlic, lemon juice, and olive oil, widely served on every breakfast and dinner table",
    warningMsg: false,
    ingredients: [
      "2 large eggplants",
      "1/4 cup tahini paste",
      "3 cloves garlic, minced",
      "3 tablespoons fresh lemon juice",
      "2 tablespoons extra virgin olive oil",
      "1 teaspoon cumin",
      "1/2 teaspoon paprika (for garnish)",
      "Salt to taste",
    ],
    Instructions: [
      "Poke holes in the eggplants with a fork and roast them directly over an open gas flame or under the oven broiler, turning occasionally, until the skin is charred and the inside is completely soft.",
      "Let the roasted eggplants cool slightly, then peel off the charred skin completely.",
      "Place the soft eggplant flesh in a colander for 5-10 minutes to drain any excess bitter juices.",
      "In a large bowl, mash the eggplant flesh thoroughly with a fork for a textured dip, or pulse briefly in a food processor if you prefer a completely smooth consistency.",
      "Stir in the tahini paste, minced garlic, fresh lemon juice, cumin, and salt, mixing until fully incorporated and creamy.",
      "Transfer to a serving dish, use a spoon to create a shallow well on top, drizzle generously with extra virgin olive oil, and dust with a pinch of paprika or fresh parsley.",
    ],
    Nutrition: {
      calories: 160,
      protein: 4,
      carbohydrates: 14,
      fat: 11,
      fiber: 5,
      sodium: 290,
    },
    chefTips: [
      "Roasting the eggplant directly over an open flame is absolutely critical to capturing that authentic, deeply smoky aroma",
      "Draining the excess liquid after roasting prevents your final dip from becoming watery and separating later",
      "Serve at room temperature alongside hot baladi bread, fried eggplant, or crispy ta'ameya",
      "Originating in the Levant, this dip has evolved into a permanent fixture of traditional Egyptian standard side dishes",
    ],
    img: "./images/BabaGanoush.jpg",
  },
  {
    mealName: "Shawarma",
    stars: 4.9,
    reviews: "(732 reviews)",
    prepTime: "30 min", // Does not include marinade time
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Intermediate",
    region: "Middle Eastern",
    disc: "Thinly sliced, tender chicken or beef marinated in complex aromatic spices, seared quickly and wrapped with tahini or garlic sauce",
    warningMsg: false,
    ingredients: [
      "700g chicken thighs or beef sirloin, thinly sliced",
      "1/4 cup plain yogurt",
      "3 tablespoons white vinegar or lemon juice",
      "4 cloves garlic, minced",
      "1 teaspoon cardamom",
      "1 teaspoon ground coriander",
      "1/2 teaspoon allspice",
      "1 large onion, sliced into strips",
      "1/2 cup fresh parsley, chopped",
      "Pita or baladi bread for serving",
    ],
    Instructions: [
      "In a large bowl, whisk together the yogurt, vinegar, minced garlic, coriander, cardamom, allspice, salt, and pepper to create the marinade.",
      "Add the thinly sliced meat to the marinade, mixing well to ensure every piece is coated. Cover and refrigerate for at least 2 hours (ideally overnight).",
      "Heat a large, heavy skillet or cast-iron pan over high heat with a tablespoon of oil until smoking hot.",
      "Add the marinated meat in a single layer, searing rapidly without crowding the pan to trap the internal juices. Cook for 8-10 minutes until edges get beautifully charred.",
      "Toss in the sliced onions during the last 3 minutes of cooking so they soften slightly while retaining a crisp texture.",
      "Remove from heat, mix in the fresh chopped parsley, and wrap tightly inside bread with a generous spread of garlic paste (toum) or tahini sauce.",
    ],
    Nutrition: {
      calories: 420,
      protein: 34,
      carbohydrates: 24,
      fat: 18,
      fiber: 2,
      sodium: 610,
    },
    chefTips: [
      "Using chicken thighs instead of breasts ensures the meat remains incredibly juicy and tender under the high skillet heat",
      "Ensure your pan is absolutely blistering hot before adding the meat so you get those authentic, crispy vertical-rotisserie style edges",
      "Letting the meat marinate overnight completely transforms the texture and allows the warm spices to penetrate deeply",
      "While historically tracking back to Ottoman roots and refined heavily by Syrian culinary traditions, shawarma wraps stand as an incredibly popular fast-food staple on nearly every street corner in Cairo",
    ],
    img: "./images/Shawarma.jpg",
  },
  {
    mealName: "Kofta",
    stars: 4.9,
    reviews: "(670 reviews)",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Intermediate",
    region: "Middle Eastern",
    disc: "Skewers of minced lamb and beef mixed with grated onion and fine spices, grilled over high heat for a smoky, tender finish",
    warningMsg: false,
    ingredients: [
      "500g minced beef (80% lean)",
      "250g minced lamb (adds crucial fat and flavor)",
      "1 large onion, grated and thoroughly squeezed of all liquid",
      "1/4 cup fresh parsley, minced incredibly fine",
      "1 teaspoon ground allspice",
      "1/2 teaspoon ground coriander",
      "1/4 teaspoon baking powder (secret for texture)",
      "Salt and cracked black pepper to taste",
    ],
    Instructions: [
      "In a large bowl, combine the minced beef, minced lamb, finely chopped parsley, allspice, coriander, baking powder, salt, pepper, and the dry grated onion pulp.",
      "Knead the meat forcefully with your hands for 5-8 minutes until it develops a sticky, paste-like fiber structure. Chill the meat mix for 30 minutes.",
      "Wet your hands with the reserved onion juice to prevent sticking, grab a handful of meat, and mold it firmly down the length of a thick metal skewer.",
      "Press finger indents along the meat skewer to create the traditional ribbed look and seal the top and bottom tips firmly onto the metal.",
      "Preheat your grill or broiler to high heat.",
      "Grill the meat skewers for roughly 4-5 minutes per side, turning frequently to prevent dropping, until beautifully browned and smoky.",
    ],
    Nutrition: {
      calories: 490,
      protein: 42,
      carbohydrates: 3,
      fat: 35,
      fiber: 1,
      sodium: 590,
    },
    chefTips: [
      "Squeezing out every drop of moisture from the grated onion pulp is critical; excess water is the primary reason meat slips off skewers into the flames",
      "Adding a tiny pinch of baking powder keeps the minced meat from tightening up and shrinking, leaving the interior light, bouncy, and airy",
      "Kneading the meat until strings form binds the proteins together, ensuring it grips the skewer securely throughout the cook",
      "A massive centerpiece of the Egyptian 'Mashwiyat' (grill house) dining culture, built on deep-rooted pan-Middle Eastern traditions",
    ],
    img: "./images/Kofta.jpg",
  },
  {
    mealName: "Warak Enab",
    stars: 4.9,
    reviews: "(520 reviews)",
    prepTime: "60 min",
    cookTime: "50 min",
    servings: "5 people",
    difficulty: "Hard",
    region: "Middle Eastern",
    disc: "Delicate grape leaves tightly wrapped around an aromatic mixture of spiced rice, fresh herbs, and tomato, gently simmered in broth",
    warningMsg: true, // Requires extended rolling time and cooking over 45 minutes
    ingredients: [
      "1 jar (approx. 400g) preserved grape leaves, rinsed well",
      "2 cups Egyptian short-grain rice, washed and drained",
      "2 medium onions, finely minced",
      "1.5 cups fresh tomato passata",
      "1 cup fresh dill, finely chopped",
      "1 cup fresh parsley, finely chopped",
      "1 cup fresh cilantro, finely chopped",
      "2.5 cups rich chicken or beef broth",
      "3 tablespoons olive oil or ghee",
      "1 large lemon, sliced into rounds",
    ],
    Instructions: [
      "Blanch the rinsed grape leaves in boiling water for 1 minute to soften them, then drain and set aside.",
      "Sauté the minced onions in olive oil until soft, stir in the tomato passata, and cook for 8 minutes until reduced. Allow to cool slightly.",
      "Combine the washed rice, cooked tomato sauce, and the chopped fresh herbs (dill, parsley, cilantro) in a large mixing bowl, seasoning with salt and pepper.",
      "Lay a grape leaf flat (veins facing upward), place a small teaspoon of rice mixture near the stem base, fold the sides inward, and roll tightly into a small cylinder.",
      "Line the bottom of a heavy cooking pot with lemon slices and any torn grape leaves to prevent sticking.",
      "Pack the rolled stuffed leaves tightly in concentric, overlapping circles inside the pot layer after layer.",
      "Pour the hot broth over the leaves until it hits the top layer, place a heavy heatproof plate directly on top to weigh them down, cover, and simmer on low for 50 minutes.",
    ],
    Nutrition: {
      calories: 340,
      protein: 6,
      carbohydrates: 65,
      fat: 7,
      fiber: 5,
      sodium: 640,
    },
    chefTips: [
      "Ensure you roll the leaves snugly but leave a tiny bit of breathing room, as the short-grain rice will expand when absorbing the broth",
      "The layer of sliced fresh lemons at the bottom provides a crucial shield against scorching while infusing the bottom layers with a bright, tangy pop",
      "Never skip placing a weighted plate over the rolls during cooking; it blocks them from unrolling and unraveling as the liquid boils",
      "While popular across Greece and the Levant (often cold or containing meat), the herb-heavy tomato version is a universal favorite across Egypt",
    ],
    img: "./images/WarakEnab.jpg",
  },
  {
    mealName: "Shish Tawook",
    stars: 4.8,
    reviews: "(485 reviews)",
    prepTime: "25 min", // Does not include marinating time
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    region: "Middle Eastern",
    disc: "Juicy, flame-grilled skewers of chicken cubes steeped in a rich marinade of yogurt, garlic, lemon, and tomato paste",
    warningMsg: false,
    ingredients: [
      "800g boneless chicken thighs, cut into uniform cubes",
      "1/2 cup plain whole yogurt",
      "4 cloves garlic, crushed",
      "2 tablespoons fresh lemon juice",
      "1 tablespoon tomato paste",
      "1 tablespoon olive oil",
      "1 teaspoon wild thyme (za'atar) or oregano",
      "1/2 teaspoon ground ginger",
      "1 large bell pepper and 1 onion, cut into chunks for skewering",
    ],
    Instructions: [
      "In a glass bowl, whisk the yogurt, crushed garlic, lemon juice, tomato paste, olive oil, thyme, ginger, salt, and pepper into a smooth paste.",
      "Toss the chicken cubes into the marinade until thoroughly coated. Cover and allow to marinate in the fridge for a minimum of 4 hours.",
      "If utilizing wooden skewers, submerge them fully in water for 30 minutes before threading to prevent charring.",
      "Thread the marinated chicken cubes onto the skewers, alternating with pieces of bell pepper and onion chunks.",
      "Heat a cast-iron grill pan or outdoor grill to high heat and brush lightly with oil.",
      "Grill the skewers for roughly 12-15 minutes, turning occasionally, until the chicken is thoroughly cooked and displays charred edges.",
    ],
    Nutrition: {
      calories: 360,
      protein: 36,
      carbohydrates: 7,
      fat: 20,
      fiber: 1,
      sodium: 520,
    },
    chefTips: [
      "Using boneless chicken thighs instead of breast meat is highly recommended, as thighs remain exceptionally juicy and resist drying out on the grill",
      "The lactic acid present in the plain yogurt acts as a natural tenderizer, making a lengthy marinating time key for meltingly tender meat",
      "Let the grilled skewers rest for 5 minutes under a sheet of foil before serving to lock all the internal juices back into the muscle fibers",
      "An incredibly common restaurant and street order across Egypt, adopted seamlessly from classic Lebanese and Turkish grilling methods",
    ],
    img: "./images/ShishTawook.jpg",
  },
  {
    mealName: "Sambousek",
    stars: 4.9,
    reviews: "(412 reviews)",
    prepTime: "30 min",
    cookTime: "10 min",
    servings: "6 people",
    difficulty: "Intermediate",
    region: "Middle Eastern",
    disc: "Crispy, savory pastry pockets stuffed with seasoned minced meat or a gooey mix of cheeses, served as an essential appetizer",
    warningMsg: false,
    ingredients: [
      "1 pack of prepared sambousek dough sheets (or egg roll wrappers)",
      "300g minced beef",
      "1 small onion, finely minced",
      "1/2 cup shredded feta or white brined cheese",
      "1/2 cup shredded mozzarella cheese",
      "1/2 teaspoon allspice",
      "1 tablespoon chopped fresh mint (for the cheese filling)",
      "Vegetable oil for deep frying",
    ],
    Instructions: [
      "Prepare the meat filling: sauté minced onion in a small pan, add minced beef, allspice, salt, and pepper, cooking until fully browned and dry.",
      "Prepare the cheese filling: in a separate bowl, mix the white brined cheese, mozzarella, and fresh chopped mint until unified.",
      "Lay out a sheet of dough, place a small teaspoon of either filling at one end, and fold it diagonally back and forth into a neat triangle.",
      "Seal the final edge of the triangle securely using a small dab of water or a flour-water paste to prevent opening.",
      "Heat a generous amount of vegetable oil in a deep pan over medium-high heat.",
      "Fry the pastry triangles for 2-3 minutes per side, turning carefully, until puffed, bubbly, and light golden brown. Drain well.",
    ],
    Nutrition: {
      calories: 210,
      protein: 9,
      carbohydrates: 18,
      fat: 11,
      fiber: 1,
      sodium: 340,
    },
    chefTips: [
      "Ensure your fillings are completely cooled to room temperature before wrapping, or the warm condensation will tear the pastry sheet",
      "Keep the remaining unused dough sheets covered with a damp cloth while working so they do not dry out and split",
      "Make sure the seal is flawless; any exposed cheese filling will immediately leak and splatter aggressively in hot oil",
      "While tracking back to ancient Central Asian samosa roots, these crisp parcels are a definitive fixture on Egyptian Ramadan banquet tables",
    ],
    img: "./images/Sambousek.jpg",
  },
  {
    mealName: "Chicken Pane",
    stars: 4.8,
    reviews: "(540 reviews)",
    prepTime: "20 min", // Does not include marinating time
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    region: "European",
    disc: "Crispy, golden-fried breaded chicken breasts marinated in onions and warm spices, an absolute staple in every household",
    warningMsg: false,
    ingredients: [
      "700g chicken breasts, sliced into thin cutlets",
      "1 large onion, grated (juice extracted)",
      "2 large eggs, beaten",
      "1 cup all-purpose flour",
      "1.5 cups fine breadcrumbs (or seasoned panko)",
      "1/2 teaspoon garlic powder",
      "1/2 teaspoon paprika",
      "1/4 teaspoon seasoned salt",
      "Vegetable oil for shallow frying",
    ],
    Instructions: [
      "Marinate the chicken cutlets in the extracted onion juice, salt, black pepper, garlic powder, and paprika for at least 1 hour in the refrigerator.",
      "Set up a dredging station with three separate shallow bowls: one with flour, one with the beaten eggs, and one with the breadcrumbs.",
      "Remove each chicken cutlet from the marinade, shake off any excess, and coat lightly in the flour.",
      "Dip the floured chicken completely into the beaten eggs, then press firmly into the breadcrumbs until completely and evenly coated.",
      "Heat vegetable oil in a large skillet over medium heat until hot but not smoking.",
      "Fry the chicken cutlets for 4-5 minutes on each side until the crust turns a deep golden brown and the chicken is cooked through. Drain on paper towels.",
    ],
    Nutrition: {
      calories: 410,
      protein: 38,
      carbohydrates: 26,
      fat: 16,
      fiber: 1,
      sodium: 580,
    },
    chefTips: [
      "Using only the strained onion juice rather than chopped bits prevents the breading from separating and flaking off during frying",
      "Press the breadcrumbs firmly onto the damp chicken with the palm of your hand to ensure a thick, seamless crust",
      "Don't crowd the skillet while frying; dropping too many pieces at once lowers the oil temperature and leads to soggy pane",
      "Typically served alongside Macarona Bachamel or french fries for a classic comfort meal",
    ],
    img: "./images/ChickenPane.jpg",
  },
];

let randomMealNum = Math.floor(Math.random() * mealsArr.length);
console.log(mealsArr.length);
console.log(randomMealNum);

openPageRandom();

function openPageRandom() {
  mealImg.style.backgroundImage = `url(${mealsArr[randomMealNum].img})`;
  rating.innerHTML = `${mealsArr[randomMealNum].stars} <span id="reviews-num">${mealsArr[randomMealNum].reviews}</span>`;
  prepTime.textContent = mealsArr[randomMealNum].prepTime;
  cookTime.textContent = mealsArr[randomMealNum].cookTime;
  servings.textContent = mealsArr[randomMealNum].servings;
  difficulty.textContent = mealsArr[randomMealNum].difficulty;
  region.textContent = mealsArr[randomMealNum].region;
  mealName.textContent = mealsArr[randomMealNum].mealName;
  mealDisc.textContent = mealsArr[randomMealNum].mealDisc;
  mealsArr[randomMealNum].warningMsg === true
    ? warningMsg.classList.remove("d-none")
    : warningMsg.classList.add("d-none");
  for (let x = 0; x < mealsArr[randomMealNum].ingredients.length; x++) {
    ingredientsPage.innerHTML += `
    <div class="ingredient-box d-flex">
      <div class="num-box"><p>${x + 1}</p></div>
      <p>${mealsArr[randomMealNum].ingredients[x]}</p>
    </div>`;
  }

  for (let x = 0; x < mealsArr[randomMealNum].Instructions.length; x++) {
    instructionsPage.innerHTML += `<div class="instructions-box d-flex">
      <div class="num-box"><p>${x + 1}</p></div>
      <p>${mealsArr[randomMealNum].Instructions[x]}</p>
    </div>`;
  }

  calories.textContent = mealsArr[randomMealNum].Nutrition.calories;
  protein.textContent = mealsArr[randomMealNum].Nutrition.protein;
  carbohydrates.textContent = mealsArr[randomMealNum].Nutrition.carbohydrates;
  fat.textContent = mealsArr[randomMealNum].Nutrition.fat;
  fiber.textContent = mealsArr[randomMealNum].Nutrition.fiber;
  sodium.textContent = mealsArr[randomMealNum].Nutrition.sodium;

  for (let x = 0; x < mealsArr[randomMealNum].chefTips.length; x++) {
    chefPage.innerHTML += `  <div class="chef-box d-flex gap-2 my-4">
        <p class="m-0">✓</p>
        <p class="m-0">${mealsArr[randomMealNum].chefTips[x]}</p>
      </div>`;
  }
}

function randomMealGenerator() {
  event.preventDefault();
  randomMealNum = Math.floor(Math.random() * mealsArr.length);
  console.log(randomMealNum);

  mealImg.style.backgroundImage = `url(${mealsArr[randomMealNum].img})`;
  rating.innerHTML = `${mealsArr[randomMealNum].stars} <span id="reviews-num">${mealsArr[randomMealNum].reviews}</span>`;
  prepTime.textContent = mealsArr[randomMealNum].prepTime;
  cookTime.textContent = mealsArr[randomMealNum].cookTime;
  servings.textContent = mealsArr[randomMealNum].servings;
  difficulty.textContent = mealsArr[randomMealNum].difficulty;
  region.textContent = mealsArr[randomMealNum].region;
  mealName.textContent = mealsArr[randomMealNum].mealName;
  mealDisc.textContent = mealsArr[randomMealNum].mealDisc;
  mealsArr[randomMealNum].warningMsg === true
    ? warningMsg.classList.remove("d-none")
    : warningMsg.classList.add("d-none");
  ingredientsPage.innerHTML = "";
  for (let x = 0; x < mealsArr[randomMealNum].ingredients.length; x++) {
    ingredientsPage.innerHTML += `
<div class="ingredient-box d-flex">
  <div class="num-box"><p>${x + 1}</p></div>
  <p>${mealsArr[randomMealNum].ingredients[x]}</p>
</div>`;
  }
  instructionsPage.innerHTML = "";
  for (let x = 0; x < mealsArr[randomMealNum].Instructions.length; x++) {
    instructionsPage.innerHTML += `<div class="instructions-box d-flex">
  <div class="num-box"><p>${x + 1}</p></div>
  <p>${mealsArr[randomMealNum].Instructions[x]}</p>
</div>`;
  }

  calories.textContent = mealsArr[randomMealNum].Nutrition.calories;
  protein.textContent = mealsArr[randomMealNum].Nutrition.protein;
  carbohydrates.textContent = mealsArr[randomMealNum].Nutrition.carbohydrates;
  fat.textContent = mealsArr[randomMealNum].Nutrition.fat;
  fiber.textContent = mealsArr[randomMealNum].Nutrition.fiber;
  sodium.textContent = mealsArr[randomMealNum].Nutrition.sodium;
  chefPage.innerHTML = "";
  for (let x = 0; x < mealsArr[randomMealNum].chefTips.length; x++) {
    chefPage.innerHTML += `  <div class="chef-box d-flex gap-2 my-4">
    <p class="m-0">✓</p>
    <p class="m-0">${mealsArr[randomMealNum].chefTips[x]}</p>
  </div>`;
  }
}

randomBtn.addEventListener("click", randomMealGenerator);
