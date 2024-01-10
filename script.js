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

  // Add input and change event listener to each quantity input
  quantityInputs.forEach(function (input) {
      input.addEventListener('input', handleQuantityChange);
      input.addEventListener('change', handleQuantityChange);
  });

  // Function to handle quantity change
  function handleQuantityChange() {
      // Update the cart subtotal when the quantity changes
      var price = parseFloat(this.closest('tr').querySelector('td:nth-child(4)').textContent.replace(' EGP', ''));
      var quantity = parseInt(this.value);
      var subtotal = price * quantity;
      this.closest('tr').querySelector('td:nth-child(6)').textContent = subtotal.toFixed(2) + ' EGP';
      updateCartTotal();
  }

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
