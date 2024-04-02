const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/c0cb9aeb-47b8-4656-a36f-8cb873b05e08-americas-most-expensive-homes-billionaire-la.jpg",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
      "https://robbreport.com/wp-content/uploads/2023/02/10644BellagioRoad193_2-1.jpg",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
      "https://im.indiatimes.in/photogallery/2021/Jun/9marketwatch_60bcabb91feaf.jpg",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:
      "https://www.99acres.com/microsite/articles/files/2023/03/expensive.jpg",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:
      "https://assets.architecturaldigest.in/photos/604b071c4cfb7d2fe3ff6ba9/master/w_1600%2Cc_limit/Ellison%2520Estate-worlds-most-expensive-home.jpeg",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87xOVPy_DnNNse3BmRuy5xzv91Nh1d5Vk3TEALlV9KA&s",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:
      "https://img.staticmb.com/mbcontent/images/crop/uploads/2022/7/Jindal_House_0_1200.jpg",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:
      "https://thegcdg.com/wp-content/uploads/2020/10/6773f42e0a7f0800a7cbfcc7d5ce1eb7.jpg",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:
      "https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/Ellison-Estate-1.jpg",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Historic Chalet in the Alps",
    description:
      "Stay in a charming historic chalet surrounded by the breathtaking beauty of the Swiss Alps.",
    image:
      "https://www.arch2o.com/wp-content/uploads/2015/12/Arch2O-12-of-the-most-expensive-houses-in-the-world-15.jpg",
    price: 2800,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Urban Oasis in Tokyo",
    description:
      "Discover the vibrant city of Tokyo while enjoying the tranquility of this modern urban oasis.",
    image:
      "https://townsquare.media/site/660/files/2021/04/lakeside-view.jpeg?w=780&q=75",
    price: 2200,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Private Island Retreat",
    description:
      "Escape to your own private island with crystal-clear waters and white sandy beaches.",
    image:
      "https://townsquare.media/site/657/files/2021/06/most-expensive-homes-one-1.jpg?w=780&q=75",
    price: 4000,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Historic Center Apartment",
    description:
      "Immerse yourself in the rich history of the city with a stay in this charming apartment in the historic center.",
    image:
      "https://assets.architecturaldigest.in/photos/600825a51363405bf8eb5081/master/w_1600%2Cc_limit/ClFm6-DXIAQTu7w.jpg",
    price: 1800,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Tropical Paradise Villa",
    description:
      "Relax in a luxurious villa surrounded by tropical gardens and just minutes away from pristine beaches.",
    image:
      "https://netstorage-tuko.akamaized.net/images/3abae6c31f9e7d91.jpg",
    price: 2800,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Contemporary Villa in Barcelona",
    description:
      "Experience the vibrant culture of Barcelona while staying in this modern and stylish villa.",
    image:
      "https://images.unsplash.com/photo-1581091017138-051b5d347b6e?ixhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONt4B22C_PJtVjb4Js7j2HMjehxGlexurKTOA4Hubpv1Hz1-xm2JybzPbeFABNHm1CCE&usqp=CAU",
    price: 2300,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Serenity by the Lake",
    description:
      "Enjoy peaceful moments by the lake in this serene cottage surrounded by nature's beauty.",
    image:
      "https://mobiletravelsite.files.wordpress.com/2017/11/the-pinnacle-montana.jpg",
    price: 1500,
    location: "Lake Como",
    country: "Italy",
  },
  {
    title: "Luxury Penthouse in Paris",
    description:
      "Indulge in opulence with this luxurious penthouse boasting panoramic views of the Eiffel Tower and the city of Paris.",
    image: "https://thegcdg.com/wp-content/uploads/2020/10/6773f42e0a7f0800a7cbfcc7d5ce1eb7.jpg",
    price: 4500,
    location: "Paris",
    country: "France",
  },
  {
    title: "Oceanfront Paradise in Maldives",
    description:
      "Escape to this overwater bungalow in the Maldives and experience luxury surrounded by the crystal-clear waters of the Indian Ocean.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3eLaGHBuoWqfHqGUFeyVRwzq1eFDUfFbM58pltTQ2zmyy2CJDt2HM1kRwqKMf23KPQs&usqp=CAU",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Mountain Retreat in Patagonia",
    description:
      "Unwind in this secluded cabin nestled in the Patagonian mountains, surrounded by breathtaking landscapes and wildlife.",
    image: "https://cdn.onekindesign.com/wp-content/uploads/2017/01/Contemporary-Home-Design-Vertical-Arts-Architecture-01-1-Kindesign.jpg",
    price: 2800,
    location: "Patagonia",
    country: "Argentina",
  },
  {
    title: "Riverside Cabin in Alaska",
    description:
      "Experience the rugged beauty of Alaska with a stay in this cozy riverside cabin, perfect for nature enthusiasts and adventure seekers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7rQ09NPhW2IDBMxedU65iGYKCxT89ICr8dOOMXme2tOojV_13-f8Nwz3rozWKJ537uE&usqp=CAU",
    price: 1200,
    location: "Alaska",
    country: "United States",
  },
  {
    title: "Sunny Villa in Santorini",
    description:
      "Enjoy the charm of Santorini in this sun-soaked villa with stunning views of the Aegean Sea and the iconic white-washed buildings.",
    image: "https://cdn.homedit.com/wp-content/uploads/2020/09/Meadow-Mountain-Homes-located-in-Vail-Colorado.jpg",
    price: 3200,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Seaside Villa in Amalfi Coast",
    description:
      "Bask in the Mediterranean beauty of the Amalfi Coast with a stay in this elegant seaside villa overlooking the azure waters.",
    image: "https://i.pinimg.com/originals/82/d0/20/82d020d073400febe796a093b6e12d3c.jpg",
    price: 3800,
    location: "Amalfi Coast",
    country: "Italy",
  },
  {
    title: "Urban Loft in Sydney",
    description:
      "Immerse yourself in the cosmopolitan vibe of Sydney with a stay in this stylish urban loft in the heart of the city.",
    image: "https://i.pinimg.com/736x/79/d3/6d/79d36da06453fb40cbb24436506875ce.jpg",
    price: 2500,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Historic Riad in Marrakech",
    description:
      "Immerse yourself in the vibrant colors and rich history of Marrakech with a stay in this beautifully restored historic riad.",
    image: "https://i.pinimg.com/736x/04/b8/87/04b887b1436f99f693a5a1247ecad5bc.jpg",
    price: 2000,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Ski Chalet in Whistler",
    description:
      "Experience world-class skiing in Whistler with a stay in this cozy ski chalet, complete with breathtaking mountain views.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2z8cpPy7BxZEYaBc3_g3BU4rkOoLix0iv5rYHklPxR0-Gsos46QBd3tNnW7H9Kjw1Wm4&usqp=CAU",
    price: 2600,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Serenity Cottage in Kyoto",
    description:
      "Escape to the tranquility of Kyoto with a stay in this serene cottage surrounded by traditional gardens and historic temples.",
    image: "https://live.staticflickr.com/5027/5614435453_bc7f9f2deb_b.jpg",
    price: 1800,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Lakefront Retreat in Switzerland",
    description:
      "Unwind by the pristine lakes of Switzerland with a stay in this modern retreat offering stunning views of the surrounding mountains.",
    image: "https://www.theplancollection.com/admin/CKeditorUploads/Images/56-12.18.jpg",
    price: 3200,
    location: "Switzerland",
    country: "Switzerland",
  },
  {
    title: "Chic Apartment in Barcelona",
    description:
      "Immerse yourself in the vibrant culture of Barcelona with a stay in this chic apartment located in the heart of the city.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIOFkKT1QeJ0IyzOwbFyfKRwt0RfMQC84s6tJbV6VsGalPZe3PSs0yB2yW81DAxjF6vM&usqp=CAU",
    price: 2300,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Desert Retreat in Arizona",
    description:
      "Experience the beauty of the Sonoran Desert with a stay in this desert retreat, complete with stunning sunsets and starry nights.",
    image: "https://www.theplancollection.com/Upload/Designers/161/1040/Champery_Photo9_381_251.jpg",
    price: 1400,
    location: "Arizona",
    country: "United States",
  },
  {
    title: "Historic Palace in Vienna",
    description:
      "Step back in time with a stay in this historic palace in Vienna, offering a glimpse into the grandeur of Austria's imperial past.",
    image: "https://i.pinimg.com/736x/b2/1f/96/b21f9643f33d6a0a06baf6cee276aec9.jpg",
    price: 3000,
    location: "Vienna",
    country: "Austria",
  },
  {
    title: "Coastal Retreat in Sydney",
    description:
      "Relax by the coastal beauty of Sydney in this modern retreat, offering panoramic views of the Pacific Ocean and sandy beaches.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyXeyuCXNtO92QIdUl9y2owUBGl4Jdbf276SIrGZJRcStoSpMNSl2STfogczE4EuDrcg&usqp=CAU",
    price: 2800,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Island Paradise in Seychelles",
    description:
      "Escape to a tropical paradise in the Seychelles with a stay in this luxurious villa surrounded by white-sand beaches and crystal-clear waters.",
    image: "https://i.pinimg.com/736x/e8/21/1a/e8211a7f0dcebb8da3fd91d86729490e.jpg",
    price: 5000,
    location: "Seychelles",
    country: "Seychelles",
  },
  {
    title: "Historic Monastery in Rome",
    description:
      "Experience the rich history of Rome with a stay in this historic monastery, offering a peaceful retreat in the heart of the city.",
    image: "https://i.pinimg.com/736x/42/d6/61/42d66187354479a4befeae4a316c2783.jpg",
    price: 2500,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Modern Oasis in Dubai",
    description:
      "Discover luxury in the heart of Dubai with a stay in this modern oasis, featuring skyline views and a private pool.",
    image: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/28110144/Residence_of_Bill_Gates.resized-1600x900.jpg",
    price: 4000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
];

module.exports = { data: sampleListings };
