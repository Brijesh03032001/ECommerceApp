export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "black", label: "Black" },
      { value: "red", label: "Red" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "XS", label: "XS", checked: false },
      { value: "S", label: "S", checked: false },
      { value: "M", label: "M", checked: false },
      { value: "L", label: "L", checked: false },
      { value: "XL", label: "XL", checked: false },
      { value: "XXL", label: "XXL", checked: false },
    ],
  },
  // {
  //   id: "category",
  //   name: "Category",
  //   options: [
  //     { value: "new-arrivals", label: "New Arrivals", checked: false },
  //     { value: "sale", label: "Sale", checked: false },
  //     { value: "travel", label: "Travel", checked: true },
  //     { value: "organization", label: "Organization", checked: false },
  //     { value: "accessories", label: "Accessories", checked: false },
  //     { value: "casual", label: "Casual", checked: false },
  //     { value: "formal", label: "Formal", checked: false },
  //   ],
  // },
  // {
  //   id: "brand",
  //   name: "Brand",
  //   options: [
  //     { value: "brandA", label: "Brand A", checked: false },
  //     { value: "brandB", label: "Brand B", checked: false },
  //     { value: "brandC", label: "Brand C", checked: false },
  //     { value: "brandD", label: "Brand D", checked: false },
  //     { value: "brandE", label: "Brand E", checked: false },
  //   ],
  // },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159-399" },
      { value: "400-799", label: "₹400-799" },
      { value: "800-1199", label: "₹800-1199" },
      { value: "1200-1599", label: "₹1200-1599" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% And Above" },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
    ],
  },
  {
    id: "availability",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
      { value: "pre_order", label: "Pre Order" },
    ],
  },
];
