"""Fizzbuzz"""


def main():
    """
    FizzBuzz
    """
    fizzbuzz_map = {"3": "fizz", "5": "buzz"}
    for i in range(1, 101):
        output = ""
        for key, val in fizzbuzz_map.items():
            if i % int(key) == 0:
                output += val
        if len(output) == 0:
            output = str(i)
        print(output)


if __name__ == "__main__":
    main()
