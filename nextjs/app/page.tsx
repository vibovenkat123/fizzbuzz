import styles from './page.module.css'
const fizzbuzz_map = new Map()
fizzbuzz_map.set(3, "fizz")
fizzbuzz_map.set(5, "buzz")

function fizzbuzz(num: number): string {
  let out = ""
  for (const [key, value] of fizzbuzz_map) {
    if (num % key === 0) {
      out += value
    }
  }
  if (out == "") {
    out = num.toString()
  }
  return out
}

export default function Home() {
  //why ?
  const fizz_nums = Array.from(Array(100).keys()).map((x) => x + 1)
  const fizzbuzzed = fizz_nums.map((x) => fizzbuzz(x))
  const fizzbuzz_elements = fizzbuzzed.map((x, i) => <li key={i}>{x}</li>)
  return (
    <main className={styles.main}>
      <ul>
        {fizzbuzz_elements}
      </ul>
    </main>
  )
}
