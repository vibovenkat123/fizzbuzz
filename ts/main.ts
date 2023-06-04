type Conditions = {
    [key: number]: string
}
const conditions: Conditions  = {
    3: "Fizz",
    5: "Buzz"
}
for (let i = 0; i <= 100; ++i) {
    let res: number | string = Object.entries(conditions)
        .map(([k, v]) => i % parseInt(k) === 0 ? v : "")
        .join("");
    if (!res) {
        res = i
    }
    console.log(res);
}
