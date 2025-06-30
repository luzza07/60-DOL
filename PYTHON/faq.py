faqs = {
    "What is the difference between a list and a tuple?": "Lists are mutable, tuples are immutable.",
    "How do you check if a value exists in a set?": "Use the `in` keyword. Example: `if 3 in my_set:`",
    "Can dictionaries have duplicate keys?": "No. Each key must be unique in a dictionary.",
    "What is the output of bool([])?": "False. Empty sequences are considered False in Python.",
    "How do you concatenate two strings?": "Use the `+` operator or `join()` method."
}

for question, answer in faqs.items():
    print(f"❓ {question}\n💡 {answer}\n")
