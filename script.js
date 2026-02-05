//Prompt for input

let inputFlavors = prompt(
  "Please Enter a list of froyo flavors you have recently had",
);

//Defining Function for collecting and storing response with formatting (Lowercase, split commas and any space between, trim space)

function storeInputFalvors(input) {
  return input
    .toLowerCase()
    .trim()
    .split(/\s*,\s*/);
}

// Call previous function and convert formatted input to array stored as "flavors"

const flavors = storeInputFalvors(inputFlavors);

//Defining Function for counting flavors & tallying counts of flavors as object "counts"
//Function Logic: Create Counts object and define properties as unique parameter value
//and unique paramater value count.
// flavor is the parameter input alongside the total count of that "flavor(vanilla)".
//if unique parameter is seen again add to current object property count.

function countFlavors(flavorsArray) {
  const counts = {};

  for (let i = 0; i < flavorsArray.length; i++) {
    const flavor = flavorsArray[i];

    if (counts[flavor]) {
      counts[flavor]++;
    } else {
      counts[flavor] = 1;
    }
  }
  return counts;
}

//Calling previous function with parameter as stored array of flavors.
//previous function returns object counts from function as flavorcounts and prints in console.

const flavorCounts = countFlavors(flavors);

console.log(flavorCounts);
