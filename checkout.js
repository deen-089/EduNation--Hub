  // Fetch cart items and calculate total
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Display total on the page
  document.getElementById("total-amount").innerHTML = `Total Amount to Pay: &#8358;${total.toLocaleString()}`;

  // WhatsApp Confirmation Button Logic
  document.getElementById("whatsapp-confirm").addEventListener("click", () => {
    const message = `Hello, I just made a payment of ₦${total.toLocaleString()} for my order on EduNation Hub. Here is my receipt.`;
    const whatsappNumber = "2348082293334"; // Change to your real business number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });