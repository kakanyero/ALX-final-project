const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


// i added the following


document.addEventListener('DOMContentLoaded', function () {
    // Select all remove buttons
    var removeButtons = document.querySelectorAll('#cart tbody tr td:first-child a');

    // Add click event listener to each remove button
    removeButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the parent row and remove it from the table
            var row = button.closest('tr');
            row.parentNode.removeChild(row);
        });
    });

    // Select all quantity input fields
    var quantityInputs = document.querySelectorAll('#cart tbody tr td:nth-child(5) input');

    // Add input event listener to each quantity input
    quantityInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Get the parent row
            var row = input.closest('tr');

            // Get the price and calculate the subtotal
            var price = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace(' EGP', ''));
            var quantity = parseInt(input.value);
            var subtotal = price * quantity;

            // Update the subtotal in the table
            row.querySelector('td:nth-child(6)').textContent = subtotal + ' EGP';
        });
    });
});




//added the following


document.addEventListener('DOMContentLoaded', function () {
  // Select all remove buttons
  var removeButtons = document.querySelectorAll('#cart tbody tr td:first-child a');

  // Add click event listener to each remove button
  removeButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
          // Prevent the default link behavior
          event.preventDefault();

          // Get the parent row and remove it from the table
          var row = button.closest('tr');
          row.parentNode.removeChild(row);

          // Update the cart total after removing an item
          updateCartTotal();
      });
  });

  // Select all quantity input fields
  var quantityInputs = document.querySelectorAll('#cart tbody tr td:nth-child(5) input');

  // Add input event listener to each quantity input
  quantityInputs.forEach(function (input) {
      input.addEventListener('input', function () {
          // Update the cart total when the quantity changes
          updateCartTotal();
      });
  });

  // Function to update cart total
  function updateCartTotal() {
      var subtotalElements = document.querySelectorAll('#cart tbody tr td:nth-child(6)');
      var subtotal = 0;

      // Calculate the cart subtotal by summing up all item subtotals
      subtotalElements.forEach(function (element) {
          subtotal += parseFloat(element.textContent.replace(' EGP', ''));
      });

      // Get the shipping cost (you can set it to a fixed value or calculate based on specific rules)
      var shipping = 50; // Change this value as needed

      // Calculate the total including shipping
      var total = subtotal + shipping;

      // Update the cart total in the table
      document.querySelector('#cart-add #subtotal td:nth-child(2)').textContent = subtotal.toFixed(2) + ' EGP';

      // Update the shipping in the table
      document.querySelector('#cart-add #subtotal td:nth-child(4)').textContent = shipping.toFixed(2) + ' EGP';

      // Update the grand total in the table
      document.querySelector('#cart-add #subtotal td:nth-child(6)').textContent = total.toFixed(2) + ' EGP';
  }

  // Initial update of cart total
  updateCartTotal();
});
