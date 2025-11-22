
// FadeIn Gsap Animation

gsap.registerPlugin(ScrollTrigger);

// Create the animation
gsap.utils.toArray('.fade').forEach(box => {
    gsap.fromTo(box, 
        { y: 100, opacity: 0 }, 
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: box,
                start: "top 100%",
                end: "top 0%",
            }
        }
    );
});




// Product Dropdown Hover
document.querySelector('.product-dd-it-1').addEventListener('mouseover', function() {
    document.querySelector('.about-product-hov-box-d-1').classList.add('show-box');
    document.querySelector('.about-product-hov-box-d-2').classList.remove('show-box');
  });
  
  document.querySelector('.product-dd-it-2').addEventListener('mouseover', function() {
    document.querySelector('.about-product-hov-box-d-2').classList.add('show-box');
    document.querySelector('.about-product-hov-box-d-1').classList.remove('show-box');
  });
  
  
  // Select the Products link and the dropdown container
  const productsLink = document.querySelector('#productsLink');
  const dropdownProduct = document.querySelector('.dropdown-product');
  
  function showDropdown() {
      dropdownProduct.classList.add('show-box');
  }
  
  function hideDropdown() {
      dropdownProduct.classList.remove('show-box');
  }
  
  productsLink.addEventListener('mouseover', showDropdown);
  dropdownProduct.addEventListener('mouseover', showDropdown);
  dropdownProduct.addEventListener('mouseout', hideDropdown);
  
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const productsLink = document.getElementById('productsLink');
    const financialLink = document.getElementById('financialLink');
    const customerLink = document.getElementById('customerLink');
    const box1 = document.querySelector('.about-product-hov-box-d-1-res');
    const box2 = document.querySelector('.about-product-hov-box-d-2-res');
    const dropdownProduct = document.querySelector('.dropdown-product');
    const productWrapper = document.querySelector('.product-scroll-wrapper');
  
  
    
    
    // Function to show box 1 and hide box 2
    function showBox1() {
      box1.classList.add('show-box');
        box2.classList.remove('show-box');
        financialLink.classList.add('active-link');
        customerLink.classList.remove('active-link');
        
    }
  
    // Function to show box 2 and hide box 1
    function showBox2() {
        box2.classList.add('show-box');
        box1.classList.remove('show-box');
        customerLink.classList.add('active-link');
        financialLink.classList.remove('active-link');
    }
  
    // Event listener for Products link to toggle dropdown
    productsLink.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownProduct.classList.toggle('show-box');
        if (dropdownProduct.classList.contains('show-box')) {
            // If dropdown is opened, ensure product boxes are closed
            box1.classList.remove('show-box');
            box2.classList.remove('show-box');
            financialLink.classList.remove('active-link');
            customerLink.classList.remove('active-link');
  
          }
  
          else {
            // If dropdown is opened, ensure product boxes are closed
            box1.classList.add('show-box');
            box2.classList.remove('show-box');
            financialLink.classList.add('active-link');
            customerLink.classList.remove('active-link');
  
          }
  
  
    });
  
    // Event listener for Financial Institution link
    financialLink.addEventListener('click', function(event) {
        event.preventDefault();
        showBox1();
        dropdownProduct.classList.remove('show-box'); // Close dropdown on click
    });
  
    // Event listener for Individual Customer link
    customerLink.addEventListener('click', function(event) {
        event.preventDefault();
        showBox2();
        dropdownProduct.classList.remove('show-box'); // Close dropdown on click
    });
  });
  
  
  
  