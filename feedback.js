let lastScrollY = 0; // Track the last scroll position
const nav = document.getElementById('nav-id'); // Get the navbar element
const scrollThreshold = window.innerHeight * 0.4; // 40vh

window.addEventListener('scroll', () => {
  // Check if we've scrolled past the threshold (40vh)
  if (window.scrollY > scrollThreshold) {
    nav.classList.add('show-nav'); // Show navbar
  } else {
    nav.classList.remove('show-nav'); // Hide navbar
  }

  // Navbar hide/show logic based on scroll direction
  if (window.scrollY > lastScrollY) {
    nav.style.top = "-360px"; // Hide navbar when scrolling down
  } else {
    nav.style.top = "0"; // Show navbar when scrolling up
  }

  lastScrollY = window.scrollY; // Update scroll position
});

// Submit feedback form

document.getElementById('feedback-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const feedbackText = document.querySelector('.text-area').value;
    
    if (feedbackText.trim() === "") {
      alert("Please enter your feedback.");
      return;
    }

    const response = await fetch('http://localhost:3000/submit-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback: feedbackText })
    });

    if (response.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your feedback has been sent!",
        showConfirmButton: false,
        timer: 1500
      });
      document.querySelector('.text-area').value = ''; // Clear the textarea
    } else {
      alert("Error submitting feedback.");
    }
  });