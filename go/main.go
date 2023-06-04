package main

import (
	"fmt"
	"sort"
)

func main() {
	conditions := []struct {
		key   int
		val string
	}{
		{3, "Fizz"},
		{5, "Buzz"},
	}

	sort.Slice(conditions, func(i, j int) bool {
		return conditions[i].key < conditions[j].key
	})

	for i := 1; i <= 100; i++ {
		result := ""
		for _, pair := range conditions {
			if i%pair.key == 0 {
				result += pair.val
			}
		}
		if len(result) == 0 {
			result = fmt.Sprintf("%v", i)
		}
		fmt.Println(result)
	}
}
