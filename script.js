document.getElementById('open-letter').addEventListener('click', function () {
    const letterContent = document.getElementById('letter-content');
    letterContent.classList.toggle('hidden');
    this.textContent = letterContent.classList.contains('hidden') ? 'Open the Letter' : 'Close the Letter';
  });