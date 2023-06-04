use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert(3, "Fizz");
    map.insert(5, "Buzz");

    for i in 1..=100 {
        let output: String = map
            .iter()
            .filter(|(key, _)| i % **key == 0)
            .map(|(_, value)| *value)
            .collect::<Vec<&str>>()
            .join("");

        if output.is_empty() {
            println!("{}", i);
        } else {
            println!("{}", output);
        }
    }
}

