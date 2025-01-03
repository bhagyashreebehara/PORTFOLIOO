
var typed = new Typed(".multiple-text", options);
function filterSelection(category) {
    const cards = document.getElementsByClassName('works-card');
    if (category === 'All') {
      // Show all cards
      for (let card of cards) {
        card.style.display = 'block';
      }
    } else {
      // Hide cards not matching the category and show matching ones
      for (let card of cards) {
        const dataName = card.getAttribute('data-name');
        if (dataName === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    }
  
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  function opentab(tabname,element){
      for( let tablink of tablinks){
          tablink.classList.remove("active-link");

      }
      for( let tabcontent of tabcontents){
          tabcontent.classList.remove("active-tab");
          
      }
      element.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }
  } 