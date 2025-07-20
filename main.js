// No JS needed for landing page decorations. All handled by HTML/CSS.

// Date reveal logic
const revealBtn = document.getElementById('reveal-btn');
const dateInput = document.getElementById('date-input');
const surprise = document.getElementById('surprise');

revealBtn.addEventListener('click', () => {
  const val = dateInput.value;
  if (!val) return;
  const date = new Date(val);
  if (date.getDate() === 22 && date.getMonth() === 6) { // July is month 6 (0-indexed)
    surprise.textContent = 'Happy 42nd Birthday, Mom! You are the light of our lives. 💖\nWishing you endless joy, love, and laughter!';
    surprise.classList.add('revealed');
    surprise.classList.remove('hidden');
  } else {
    surprise.textContent = 'Try again on the special day! 🎈';
    surprise.classList.remove('revealed');
    surprise.classList.remove('hidden');
  }
}); 