const coding = ["js", "java", "python", "rust", "ruby"];

coding.forEach((val) => {
  console.log(val);
});

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCode = [
  {
    languageName: "JavaSciprt",
    languageFileName: "js",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
];

myCode.forEach((item) => {
  console.log(item.languageName);
});
