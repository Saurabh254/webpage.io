const names = ["Saurabh", "suraj", "karishma", "jyoti", "rupali", "saurabh"];
const wnames = names.find((name) => {
	return name.length === 5;
});
console.log(wnames);
