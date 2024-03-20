const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:
      "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Historic Chalet in the Alps",
    description:
      "Stay in a charming historic chalet surrounded by the breathtaking beauty of the Swiss Alps.",
    image:
      "https://images.unsplash.com/photo-1495745966610-2a67f2297f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNoYWxldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Urban Oasis in Tokyo",
    description:
      "Discover the vibrant city of Tokyo while enjoying the tranquility of this modern urban oasis.",
    image:
      "https://images.unsplash.com/photo-1543326466-88dfc51185db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Private Island Retreat",
    description:
      "Escape to your own private island with crystal-clear waters and white sandy beaches.",
    image:
      "https://images.unsplash.com/photo-1584140857823-3b2ef378edc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJpdmF0ZSUyMGlzbGFuZHxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Historic Center Apartment",
    description:
      "Immerse yourself in the rich history of the city with a stay in this charming apartment in the historic center.",
    image:
      "https://images.unsplash.com/photo-1559046523-8331e530cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNoYW1wYWduZXxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Tropical Paradise Villa",
    description:
      "Relax in a luxurious villa surrounded by tropical gardens and just minutes away from pristine beaches.",
    image:
      "https://images.unsplash.com/photo-1580894730403-381570bcb2c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyb3BpY2FsJTIwcGFyY2Vzc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Contemporary Villa in Barcelona",
    description:
      "Experience the vibrant culture of Barcelona while staying in this modern and stylish villa.",
    image:
      "https://images.unsplash.com/photo-1581091017138-051b5d347b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFyY2VsZSUyMHBhbGFkb3xlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Serenity by the Lake",
    description:
      "Enjoy peaceful moments by the lake in this serene cottage surrounded by nature's beauty.",
    image:
      "https://images.unsplash.com/photo-1535958395499-1a7ae0ebe3d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxha2UlMjBpbmNvbWluZ3xlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Lake Como",
    country: "Italy",
  },
  {
    title: "Luxury Penthouse in Paris",
    description:
      "Indulge in opulence with this luxurious penthouse boasting panoramic views of the Eiffel Tower and the city of Paris.",
    image: "https://images.unsplash.com/photo-1508884636466-e22a6ef6c21f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHV4dHklMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Paris",
    country: "France",
  },
  {
    title: "Oceanfront Paradise in Maldives",
    description:
      "Escape to this overwater bungalow in the Maldives and experience luxury surrounded by the crystal-clear waters of the Indian Ocean.",
    image: "https://images.unsplash.com/photo-1566478211209-9c4c673a6a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGRpdmVzJTIwb2YlMjB0aGUlMjBNYWxkaXZlc3xlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Mountain Retreat in Patagonia",
    description:
      "Unwind in this secluded cabin nestled in the Patagonian mountains, surrounded by breathtaking landscapes and wildlife.",
    image: "https://images.unsplash.com/photo-1573555787820-bf04d09b820e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhdGFnb25pYSUyMG1vdW50YWluaW5nfGVufDB8fDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Patagonia",
    country: "Argentina",
  },
  {
    title: "Riverside Cabin in Alaska",
    description:
      "Experience the rugged beauty of Alaska with a stay in this cozy riverside cabin, perfect for nature enthusiasts and adventure seekers.",
    image: "https://images.unsplash.com/photo-1521833241130-4505d47a6b20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWxha2ElMjBsaWdodGluZ3xlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Alaska",
    country: "United States",
  },
  {
    title: "Sunny Villa in Santorini",
    description:
      "Enjoy the charm of Santorini in this sun-soaked villa with stunning views of the Aegean Sea and the iconic white-washed buildings.",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FudG9yaW5pJTIwdmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Seaside Villa in Amalfi Coast",
    description:
      "Bask in the Mediterranean beauty of the Amalfi Coast with a stay in this elegant seaside villa overlooking the azure waters.",
    image: "https://images.unsplash.com/photo-1533880043109-6f038f6a3fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hbGZpJTIwY29hc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 3800,
    location: "Amalfi Coast",
    country: "Italy",
  },
  {
    title: "Urban Loft in Sydney",
    description:
      "Immerse yourself in the cosmopolitan vibe of Sydney with a stay in this stylish urban loft in the heart of the city.",
    image: "https://images.unsplash.com/photo-1574340541327-cf604c6eae53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3lkZXl3aWQlMjB1cmJhbiUyMGxvZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Historic Riad in Marrakech",
    description:
      "Immerse yourself in the vibrant colors and rich history of Marrakech with a stay in this beautifully restored historic riad.",
    image: "https://images.unsplash.com/photo-1565391203-8fc6f972aae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hcnJha2VjaCUyMGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Ski Chalet in Whistler",
    description:
      "Experience world-class skiing in Whistler with a stay in this cozy ski chalet, complete with breathtaking mountain views.",
    image: "https://images.unsplash.com/photo-1585599509199-3aa1e2768157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraSUyMHNoaWxsc3xlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 2600,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Serenity Cottage in Kyoto",
    description:
      "Escape to the tranquility of Kyoto with a stay in this serene cottage surrounded by traditional gardens and historic temples.",
    image: "https://images.unsplash.com/photo-1546465933-981a8775c7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGt5b3V0eXxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Lakefront Retreat in Switzerland",
    description:
      "Unwind by the pristine lakes of Switzerland with a stay in this modern retreat offering stunning views of the surrounding mountains.",
    image: "https://images.unsplash.com/photo-1540727155921-6bc67153688e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dpdHplcmxhbmQlMjBsYWtlZnJvbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Switzerland",
    country: "Switzerland",
  },
  {
    title: "Chic Apartment in Barcelona",
    description:
      "Immerse yourself in the vibrant culture of Barcelona with a stay in this chic apartment located in the heart of the city.",
    image: "https://images.unsplash.com/photo-1558428278-d00a3ed15325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyY2VsZ2FvJTIwY2l0eXxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Desert Retreat in Arizona",
    description:
      "Experience the beauty of the Sonoran Desert with a stay in this desert retreat, complete with stunning sunsets and starry nights.",
    image: "https://images.unsplash.com/photo-1503002704094-8fdadf23c6b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF6b3JhJTIwZGVzZXJ0JTIwcmVhdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Arizona",
    country: "United States",
  },
  {
    title: "Historic Palace in Vienna",
    description:
      "Step back in time with a stay in this historic palace in Vienna, offering a glimpse into the grandeur of Austria's imperial past.",
    image: "https://images.unsplash.com/photo-1549638842-501c7fb82e75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhbGFjZSUyMGludGVyaW9ufGVufDB8fDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Vienna",
    country: "Austria",
  },
  {
    title: "Coastal Retreat in Sydney",
    description:
      "Relax by the coastal beauty of Sydney in this modern retreat, offering panoramic views of the Pacific Ocean and sandy beaches.",
    image: "https://images.unsplash.com/photo-1539108283898-18a77b5b6eab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3lkZXl3aWQlMjByZWF0fGVufDB8fDB8fHx8&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Island Paradise in Seychelles",
    description:
      "Escape to a tropical paradise in the Seychelles with a stay in this luxurious villa surrounded by white-sand beaches and crystal-clear waters.",
    image: "https://images.unsplash.com/photo-1593785911948-40d41eab6dda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2V5Y2hlbGxlcyUyMHBhaXJhZGl8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Seychelles",
    country: "Seychelles",
  },
  {
    title: "Historic Monastery in Rome",
    description:
      "Experience the rich history of Rome with a stay in this historic monastery, offering a peaceful retreat in the heart of the city.",
    image: "https://images.unsplash.com/photo-1547507172-01dfcb9c9e6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vbml0b3J5JTIwcm9tZXxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Modern Oasis in Dubai",
    description:
      "Discover luxury in the heart of Dubai with a stay in this modern oasis, featuring skyline views and a private pool.",
    image: "https://images.unsplash.com/photo-1519202022-1df8acc7de09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWklMjBtb2Rlcm58ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
];

module.exports = { data: sampleListings };
