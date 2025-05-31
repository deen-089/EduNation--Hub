function displayTotalAmount() {
  const totalAmountElement = document.getElementById("total-amount");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach(item => {
    const quantity = item.quantity || 1;
    total += item.price * quantity;
  });

  totalAmountElement.innerHTML = `Total Amount to Pay: &#8358;${total.toFixed(2)}`;
}

function confirmPayment() {
  const message = encodeURIComponent(
    "Hello EduNation Hub, I have made the payment. Please find my receipt attached. Thank you."
  );
  const whatsappNumber = "2348082293334";
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
}

// Call this when the page loads
window.onload = displayTotalAmount;
