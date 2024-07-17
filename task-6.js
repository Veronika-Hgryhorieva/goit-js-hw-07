function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  const input = document.querySelector('input[type="number"]');
  const createBtn = document.querySelector('button[data-create]');
  const destroyBtn = document.querySelector('button[data-destroy]');
  const boxesDiv = document.getElementById('boxes');

  function createBoxes(amount) {
    boxesDiv.innerHTML = '';
  
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
      size += 10; 
    }
  }
 
  createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value);
  
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; 
    } else {
      alert('Please enter a number between 1 and 100');
    }
  });

  destroyBtn.addEventListener('click', () => {
    boxesDiv.innerHTML = ''; 
  });
  
  