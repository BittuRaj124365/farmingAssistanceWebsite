const cropDataset = [
    {
      cropName: "Rice",
      season: "Kharif",
      plantingMonths: "June to July",
      harvestingMonths: "October to November",
      cultivationTime: "4–5 months",
      pesticides: "Urea, Chlorpyrifos",
      uses: "Food, Animal Feed",
      price: "₹30–40",
      yield: "3–4 tons",
      waterNeeds: "High Water (Flooded)",
      climate: "Tropical, Loamy soil",
      majorStates: "Punjab, UP, West Bengal",
      notes: "Needs a lot of water, main crop of India"
    },
    {
      cropName: "Wheat",
      season: "Rabi",
      plantingMonths: "November to December",
      harvestingMonths: "March to April",
      cultivationTime: "6–7 months",
      pesticides: "Urea, DAP",
      uses: "Food (Flour, Bread)",
      price: "₹25–30",
      yield: "2.5–3 tons",
      waterNeeds: "Moderate Water",
      climate: "Cold Temperate, Well-drained",
      majorStates: "Haryana, Punjab, MP",
      notes: "Grows best in winter months"
    },
    {
      cropName: "Cotton",
      season: "Kharif",
      plantingMonths: "May to June",
      harvestingMonths: "October to November",
      cultivationTime: "5–6 months",
      pesticides: "Urea, Imidacloprid",
      uses: "Fiber, Oil, Animal Feed",
      price: "₹100–120",
      yield: "400–500 kg",
      waterNeeds: "Moderate Water",
      climate: "Warm, Well-drained soil",
      majorStates: "Maharashtra, Gujarat",
      notes: "Pest management required"
    },
    {
      cropName: "Sugarcane",
      season: "Kharif",
      plantingMonths: "June to July",
      harvestingMonths: "November to March",
      cultivationTime: "12–18 months",
      pesticides: "Urea, DAP, Potash",
      uses: "Sugar, Molasses, Ethanol",
      price: "₹35–45",
      yield: "60–80 tons",
      waterNeeds: "High Water",
      climate: "Tropical, Sandy loam",
      majorStates: "UP, Maharashtra, Tamil Nadu",
      notes: "Water-intensive, requires long time to grow"
    },
    {
      cropName: "Maize (Corn)",
      season: "Kharif/Rabi",
      plantingMonths: "June to July (Kharif) or October to November (Rabi)",
      harvestingMonths: "September to October (Kharif) or March to April (Rabi)",
      cultivationTime: "3–4 months",
      pesticides: "Urea, Cypermethrin",
      uses: "Food, Feed, Biofuel",
      price: "₹18–25",
      yield: "3–4 tons",
      waterNeeds: "Moderate Water",
      climate: "Warm, Loamy soil",
      majorStates: "Bihar, Karnataka, Punjab",
      notes: "Drought-resistant varieties available"
    },
    {
      cropName: "Soybean",
      season: "Kharif",
      plantingMonths: "June to July",
      harvestingMonths: "October to November",
      cultivationTime: "3–4 months",
      pesticides: "Urea, DAP",
      uses: "Oil, Food, Animal Feed",
      price: "₹35–45",
      yield: "1.5–2 tons",
      waterNeeds: "Moderate Water",
      climate: "Warm, Well-drained soil",
      majorStates: "MP, Maharashtra, Rajasthan",
      notes: "Protein-rich, easy to grow"
    },
    {
      cropName: "Barley",
      season: "Rabi",
      plantingMonths: "October to November",
      harvestingMonths: "March to April",
      cultivationTime: "4–5 months",
      pesticides: "Urea, DAP",
      uses: "Food, Malt, Animal Feed",
      price: "₹25–35",
      yield: "1.5–2 tons",
      waterNeeds: "Moderate Water",
      climate: "Cool temperate, Well-drained soil",
      majorStates: "Rajasthan, Haryana, UP",
      notes: "Requires well-drained soil and moderate water"
    },
    {
      cropName: "Groundnut",
      season: "Kharif",
      plantingMonths: "June to July",
      harvestingMonths: "October to November",
      cultivationTime: "4–5 months",
      pesticides: "Imidacloprid, Urea",
      uses: "Oil, Food",
      price: "₹45–55",
      yield: "2–3 tons",
      waterNeeds: "Moderate Water",
      climate: "Warm, Well-drained soil",
      majorStates: "Gujarat, Andhra Pradesh, TN",
      notes: "Can be grown in drier regions"
    },
    {
      cropName: "Mustard",
      season: "Rabi",
      plantingMonths: "October to November",
      harvestingMonths: "February to March",
      cultivationTime: "3–4 months",
      pesticides: "Urea, Imidacloprid",
      uses: "Oil, Condiments",
      price: "₹50–60",
      yield: "1.2–1.5 tons",
      waterNeeds: "Low to Moderate Water",
      climate: "Cool temperate, Loamy soil",
      majorStates: "Rajasthan, Haryana, UP",
      notes: "Grown mostly in colder regions"
    },
    {
      cropName: "Chili",
      season: "Kharif",
      plantingMonths: "June to July",
      harvestingMonths: "October to November",
      cultivationTime: "3–4 months",
      pesticides: "Chlorpyrifos, Urea",
      uses: "Food, Spice",
      price: "₹100–150",
      yield: "1–2 tons",
      waterNeeds: "Low to Moderate Water",
      climate: "Warm, Well-drained soil",
      majorStates: "Andhra Pradesh, Tamil Nadu",
      notes: "Requires high sunlight"
    },
    {
      cropName: "Tomato",
      season: "Rabi",
      plantingMonths: "September to October",
      harvestingMonths: "December to March",
      cultivationTime: "3–4 months",
      pesticides: "Carbendazim, Urea",
      uses: "Food, Sauces, Ketchup",
      price: "₹25–40",
      yield: "10–12 tons",
      waterNeeds: "Moderate Water",
      climate: "Warm, Loamy soil",
      majorStates: "Karnataka, Punjab, Maharashtra",
      notes: "Grows well in well-drained soil"
    },
    {
      cropName: "Onion",
      season: "Rabi",
      plantingMonths: "October to November",
      harvestingMonths: "February to March",
      cultivationTime: "4–5 months",
      pesticides: "Imidacloprid, Chlorpyrifos",
      uses: "Food, Spice",
      price: "₹25–35",
      yield: "10–15 tons",
      waterNeeds: "Low to Moderate Water",
      climate: "Cool, Well-drained soil",
      majorStates: "Maharashtra, Gujarat",
      notes: "Grown in winter season"
    },
    {
      cropName: "Potato",
      season: "Rabi",
      plantingMonths: "October to November",
      harvestingMonths: "February to March",
      cultivationTime: "3–4 months",
      pesticides: "Carbendazim, Urea",
      uses: "Food, Chips, Snacks",
      price: "₹25–35",
      yield: "12–15 tons",
      waterNeeds: "Moderate Water",
      climate: "Cold, Loamy soil",
      majorStates: "UP, Punjab, West Bengal",
      notes: "Requires cool temperatures"
    }
  ];
  
  function searchCrop() {
    const cropName = document.getElementById('cropInput').value.trim().toLowerCase();
    const crop = cropDataset.find(item => item.cropName.toLowerCase() === cropName);
    const cropDetails = document.getElementById('cropDetails');
    cropDetails.innerHTML = '';
  
    if (crop) {
      const cropCard = document.createElement('div');
      cropCard.classList.add('crop-card');
  
      const cropTitle = document.createElement('h2');
      cropTitle.innerText = crop.cropName;
      cropCard.appendChild(cropTitle);
  
      const cropInfo = document.createElement('div');
      cropInfo.classList.add('crop-info');
  
      for (const [key, value] of Object.entries(crop)) {
        if (key !== 'cropName' && key !== 'price') {
          const infoItem = document.createElement('div');
          infoItem.classList.add('info-item');
          infoItem.innerHTML = `<strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}`;
          cropInfo.appendChild(infoItem);
        }
      }
  
      cropCard.appendChild(cropInfo);
  
      const priceInfo = document.createElement('div');
      priceInfo.classList.add('price-info');
      priceInfo.innerHTML = `<strong>Price:</strong> ${crop.price} per kg`;
  
      cropCard.appendChild(priceInfo);
      cropDetails.appendChild(cropCard);
    } else {
      cropDetails.innerHTML = `<p>No crop found. Please try again with a valid crop name.</p>`;
    }
  }
  