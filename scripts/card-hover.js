// Grab the card container
const card = document.querySelector('.card')

// Define the words for each panel
const panels = ['Strength', 'Endurance', 'Discipline']

// Clear any existing HTML
card.innerHTML = ''

// Dynamically add each panel
panels.forEach(text => {
  const p = document.createElement('p')
  const span = document.createElement('span')
  span.textContent = text
  p.appendChild(span)
  card.appendChild(p)

  // Example of interactive behaviour
  p.addEventListener('click', () => {
    alert(`${text} clicked!`)
  })
})
