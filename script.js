// JavaScript interactivity for Skill Cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3').textContent;
      const provider = card.querySelector('.provider').textContent;
      const details = card.getAttribute('data-details');

      alert(`Skill: ${title}\n${provider}\n\nAdditional Details:\n${details}`);
    });
  });

  console.log("Skill Swap interactive cards initialized.");
});