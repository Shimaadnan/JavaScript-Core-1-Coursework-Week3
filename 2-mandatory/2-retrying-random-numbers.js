/*
    In the below example, we want to keep calling generateRandomNumber until we get a value that is > 50.
    Implement this using a do-while loop.
*/

// This function shouldn't be changed
function generateRandomNumber() {
  console.log("Generating number...");
  return Math.round(Math.random() * 100);
}

function getRandomNumberGreaterThan50() {
  let number = 0;
  do {
    return (number = getRandomNumberGreaterThan50());
  } while (number <= 50);

  // TODO - implement using a do-while loop
  return number;
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("Returned value should always be greater than 50", () => {
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
  expect(getRandomNumberGreaterThan50()).toBeGreaterThan(50);
});
