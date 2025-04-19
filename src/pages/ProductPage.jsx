import React from "react";

// {
//     "id": 1,
//     "name": "Socks",
//     "price": 60.89,
//     "image_url": "https://placehold.co/600x400/png",
//     "stock": 30,
//     "created_at": "2025-04-09T08:54:15.000000Z",
//     "updated_at": "2025-04-09T08:54:15.000000Z"
// },

function ProductPage() {
  return (
    <div class="flex flex-col items-center gap-4 text-gray-700 p-4">
      <p class="text-3xl font-bold">Product</p>
      <div class="flex flex-col gap-1 w-80 min-h-64">
        <img src="https://placehold.co/600x400/png" class="max-w-xs" />
        <div class="flex justify-between text-xl">
          <div>
            <p class="font-semibold">Name</p>
            <p class="text-sm text-gray-500">Stock</p>
          </div>
          <p class="font-semibold">Price</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
