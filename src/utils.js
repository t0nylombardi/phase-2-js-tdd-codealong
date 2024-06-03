// Your code here
export const currentAgeForBirthYear = (birthYear) => {
  console.log("birthYear: ", birthYear);
  console.log("new Date().getFullYear(): ", new Date().getFullYear());
  return new Date().getFullYear() - birthYear;
};

const year = 1984;
console.log(currentAgeForBirthYear(year)); // 38
