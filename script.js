
/* const roles = ["Journalist", "Radio presenter", "Videographer", "Graphic Designer"];
  const roleSpan = document.getElementById("changing-role");

  let index = 0;

  setInterval(() => {
    index = (index + 1) % roles.length;
    roleSpan.textContent = roles[index];
  }, 2500); 

*/

 
  const roles = ["Journalist", "Radio presenter", "Videographer", "Graphic designer"];
  const roleSpan = document.getElementById("changing-role");

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    let currentText = currentRole.substring(0, charIndex);

    roleSpan.textContent = currentText;

    let speed = isDeleting ? 80 : 100; // slower, smooth speed

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        charIndex++;
      } else {
        // Finished typing — pause before delete
        setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, 1500); // pause duration
        return;
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
      } else {
        // Finished deleting — move to next word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

  function showMobMenu(){
   const show= document.querySelector('.mobMenu');
   show.style.display='block'
  }

const closeMobMenu =() =>{
  const show=document.querySelector('.mobMenu');
  show.style.display='none'

}

 
