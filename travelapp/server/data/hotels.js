const hotels = [
  {
    id: "H001",
    name: "Grand Hyatt",
    location: "New York City",
    address: "109 E 42nd St, New York, NY 10017",
    stars: 5,
    amenities: ["Pool", "Gym", "Restaurant", "Spa"],
    roomsAvailable: 50,
    pricePerNight: 350,
    reviews: [
      { user: "Alice", rating: 4, comment: "Great location, comfortable rooms." },
      { user: "Bob", rating: 5, comment: "Excellent service and amenities." }
    ]
  },
  {
    id: "H002",
    name: "The Plaza Hotel",
    location: "New York City",
    address: "768 5th Ave, New York, NY 10019",
    stars: 5,
    amenities: ["Spa", "Restaurant", "Concierge", "Butler Service"],
    roomsAvailable: 20,
    pricePerNight: 700,
    reviews: [
      { user: "Charlie", rating: 5, comment: "Luxurious experience, worth every penny." },
      { user: "David", rating: 4, comment: "Historic and beautiful hotel." }
    ]
  },
  {
    id: "H003",
    name: "Budget Inn",
    location: "Brooklyn",
    address: "123 Main St, Brooklyn, NY 11201",
    stars: 2,
    amenities: ["Free Wi-Fi", "Breakfast"],
    roomsAvailable: 80,
    pricePerNight: 120,
    reviews: [
      { user: "Eve", rating: 3, comment: "Basic but clean, good value." }
    ]
  }
];

module.exports = hotels