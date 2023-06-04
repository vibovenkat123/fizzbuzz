const conditions = {
    3: "Fizz",
    5: "Buzz"
};
for (let i = 0; i <= 100; ++i) {
    let res = Object.entries(conditions)
        .map(([k, v]) => i % parseInt(k) === 0 ? v : "")
        .join("");
    if (!res) {
        res = i;
    }
    console.log(res);
}
