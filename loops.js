function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    var loop = `I am ${i} strange loop${i === 1 ? '' : 's'}.`
    array = [...array, loop]
  }
  return array
}

function whileLoop(n) {
  let countdown = n
  while (countdown > 0) {
    console.log(countdown--)
  }
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}
