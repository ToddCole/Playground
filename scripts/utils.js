// Utility functions for the playground

// Fetch JSON data from a file or API endpoint
async function fetchData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

// Create a debounced function
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Random color generator
function randomColor() {
  return `hsl(${random(0, 360)}, ${random(60, 80)}%, ${random(50, 70)}%)`
}
