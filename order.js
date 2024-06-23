window.addEventListener("DOMContentLoaded", function () {

    
    let orderList = []; // List to store order items
    let  orderCount = 0; // Counter to keep track of order number

    // Function to toggle visibility of input fields
    function toggleVisibility(id) {
        var input = document.getElementById(id);
        // Check if the input is hidden or visible and toggle it
        if (input.style.display === 'none' || input.style.display === '') {
            input.style.display = 'block';
        } else {
            input.style.display = 'none';
        }
    }
    
    // Ensure onclick event can access the function
    window.toggleVisibility = toggleVisibility; 

    // Add event listener to the submit button
    document.getElementById('submitOrder').addEventListener('click', function() {
        
        // Get all the quantity inputs
        const quantityInputs = document.querySelectorAll('.quantity-input');
        quantityInputs.forEach(input => {
            // Check if the input is visible and has a value greater than 0. If so, display the item in the order list
            if (input.style.display !== 'none' && input.value > 0) {
                orderList.push(`${input.value} x ${input.previousElementSibling.textContent}`);
            }
        });
        // Increment the order count
        orderCount ++;
        // Display the order summary
        displayOrder(orderList);
    });

    // Function to display the order summary
    function displayOrder(list) {
        let orderSummary = list.join("\n");
        alert(`Order Summary ${orderCount}:\n\n${orderSummary}`);


        newOrderList =[]; // Create new empty order list
        //* Persistent Order list (Input to database/file storage for persistent use)... Future project *// 
        // Order List is only set to blank once it's data has been successfully stored
        orderList = newOrderList; // Clear the order list after displaying the order
    }
    
});
