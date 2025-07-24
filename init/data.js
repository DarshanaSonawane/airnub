const sampleListings = [
  {
    title: "Beachside Villa",
    description: "A beautiful beachside villa with stunning views of the ocean.",
    price: 2000,
    location: "Baga Beach, Goa",
    country: "India",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mountain Retreat",
    description: "A cozy mountain retreat with breathtaking views of the Himalayas.",
    price: 1500,
    location: "Manali, Himachal Pradesh",
    country: "India",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "City Center Apartment",
    description: "A modern apartment in the heart of the city, perfect for business trips.",
    price: 1000,
    location: "Mumbai, Maharashtra",
    country: "India",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Countryside Cottage",
    description: "A charming cottage in the countryside, perfect for a peaceful getaway.",
    price: 800,
    location: "Mysuru, Karnataka",
    country: "India",
    image: "https://images.unsplash.com/photo-1501183638714-3c5a5b4f88d0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Luxury Penthouse",
    description: "A luxurious penthouse with panoramic views of the city skyline.",
    price: 5000,
    location: "Bengaluru, Karnataka",
    country: "India",
    image: "https://images.unsplash.com/photo-1505692952044-8e952f93c9ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Lakeview Cabin",
    description: "A peaceful cabin overlooking a serene lake.",
    price: 1200,
    location: "Nainital, Uttarakhand",
    country: "India",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Desert Camp",
    description: "Experience the desert life in this cozy camp.",
    price: 900,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Forest Bungalow",
    description: "A secluded bungalow in the heart of the forest.",
    price: 1100,
    location: "Coorg, Karnataka",
    country: "India",
    image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Riverfront Apartment",
    description: "Modern apartment with river views and easy city access.",
    price: 1300,
    location: "Kolkata, West Bengal",
    country: "India",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hilltop Chalet",
    description: "A rustic chalet perched atop a serene hill.",
    price: 1400,
    location: "Shimla, Himachal Pradesh",
    country: "India",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Modern Studio",
    description: "Compact and stylish studio perfect for solo travelers.",
    price: 700,
    location: "Pune, Maharashtra",
    country: "India",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Traditional Haveli",
    description: "Experience royal living in this beautifully restored haveli.",
    price: 1800,
    location: "Udaipur, Rajasthan",
    country: "India",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Seaside Cottage",
    description: "Charming cottage with easy access to the beach.",
    price: 1600,
    location: "Alibaug, Maharashtra",
    country: "India",
    image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Urban Loft",
    description: "Spacious loft in a trendy urban neighborhood.",
    price: 2200,
    location: "Delhi, Delhi",
    country: "India",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Garden Home",
    description: "Cozy home surrounded by a lush garden.",
    price: 1100,
    location: "Chennai, Tamil Nadu",
    country: "India",
    image: "https://images.unsplash.com/photo-1494522358652-69a8f22d85b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Historic Cottage",
    description: "Stay in a quaint cottage with historic charm.",
    price: 900,
    location: "Pondicherry",
    country: "India",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Luxury Treehouse",
    description: "Experience the forest from this upscale treehouse.",
    price: 2500,
    location: "Wayanad, Kerala",
    country: "India",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Eco-Friendly Cabin",
    description: "Sustainable cabin perfect for nature lovers.",
    price: 1300,
    location: "Sikkim",
    country: "India",
    image: "https://images.unsplash.com/photo-1501183638714-3c5a5b4f88d0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Beach Hut",
    description: "Simple and rustic beach hut close to the shore.",
    price: 600,
    location: "Varkala, Kerala",
    country: "India",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "City Penthouse",
    description: "Penthouse apartment with stunning city views.",
    price: 3000,
    location: "Hyderabad, Telangana",
    country: "India",
    image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80"
  }
];

module.exports = { data: sampleListings };
