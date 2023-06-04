# bash 4
declare -A fizzbuzz=(["3"]="fizz" ["5"]="buzz")

for i in {1..100}; do
    out=""
    for k in "${!fizzbuzz[@]}"; do
        # check the hashmap
        if (( i % k == 0 )); then
            out+="${fizzbuzz[$k]}"
        fi
    done
    # if out is empty
    if [[ -z "$out" ]]; then
        out="$i"
    fi
    echo "$out"
done


# bash <4

for i in {1..100}; do
    out=""
    if (( i % 3 == 0 )); then
        out+="fizz"
    fi
    if (( i % 5 == 0 )); then
        out+="buzz"
    fi
    if [[ -z "$out" ]]; then
        out="$i"
    fi
    echo "$out"
done
