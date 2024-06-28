/* Sprint 1 - Gary Blue's Diner - Order JS - DOM */
/* Author(s): Stephen Crocker, Sara Woodford, Michelle Anderson */
/* Date(s): June 22, 2024 - June 25, 2024 */

window.addEventListener("DOMContentLoaded", function () {
  let orderList = []; // List to store order items
  let orderCount = 0; // Counter to keep track of order number
  let totalBill = 0;

  const prices = {
    "big-gary": 5,
    "bucket-o-chicken": 10,
    "taters": 5,
    "soup": 3,
    "poutine": 7,
    "salad": 5,
  };

  // Function to toggle visibility of input fields
  function toggleVisibility(id) {
    console.log("toggleVisibility called");
    var input = document.getElementById(id);
    // Check if the input is hidden or visible and toggle it
    if (input.style.display === "none" || input.style.display === "") {
      input.style.display = "block";
    } else {
      input.style.display = "none";
    }
  }

  // Ensure onclick event can access the function
  window.toggleVisibility = toggleVisibility;

  // Add event listener to the submit button
  document.getElementById("submitOrder").addEventListener("click", function () {
    // Fetch input values at the time of submission
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const creditCard = document.getElementById("credit-card").value;

    // Get all the quantity inputs
    totalBill = 0;  // Reset total bill for each order submission
    orderList = []; // Clear order list for new orders

    const quantityInputs = document.querySelectorAll(".quantity-input");
    quantityInputs.forEach((input) => {
      // Check if the input is visible and has a value greater than 0. If so, display the item in the order list
      if (input.style.display !== "none" && input.value > 0) {
        let itemPrice = input.value * prices[input.id];
        totalBill += itemPrice;
        orderList.push(
          `${input.value} x ${input.previousElementSibling.textContent} = ${itemPrice}`
        );
      }
    });

    // Perform validation and display the order
    if (validateCreditCard(creditCard) && validateFields(name, address, email, creditCard)) {
      displayOrder(orderList, name, address, email, creditCard);
      orderCount++; 
    } else {
      alert("Please fill in all fields and ensure credit card format is correct to display a proper order");
    }
  });

  // Function to display the order summary in an alert
  function displayOrder(list, name, address, email, creditCard) {
    let orderSummary = list.join("\n");
    alert(`Order Summary ${orderCount}:\n\n${orderSummary}\n\nTotal: $${totalBill}\n\nCustomer Name: ${name}\nAddress: ${address}\nEmail: ${email}\nCredit Card: ${creditCard}`);
  }

  // Function to validate the credit card format
  function validateCreditCard(creditCard) {
    const creditCardFormat = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!creditCardFormat.test(creditCard)) {
      alert("Invalid credit card format");
      return false;
    }
    return true;
  }

  // Function to validate all fields are filled in
  function validateFields(name, address, email, creditCard) {
    if (name === "" || address === "" || email === "" || creditCard === "") {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  }

});
