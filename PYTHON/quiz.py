quiz = [
    {
        "question": "1. What method would you use to turn a string into lowercase?",
        "options": ["A. lower()", "B. upper()", "C. capitalize()", "D. title()"],
        "answer": "A"
    },
    {
        "question": "2. Which data type is mutable?",
        "options": ["A. Tuple", "B. List", "C. String", "D. Integer"],
        "answer": "B"
    },
    {
        "question": "3. What is the correct syntax to access the value of 'name' in a dictionary?",
        "options": ["A. dict.name", "B. dict[name]", "C. dict['name']", "D. dict->name"],
        "answer": "C"
    },
    {
        "question": "4. Which of the following is a set?",
        "options": ["A. [1, 2, 3]", "B. (1, 2, 3)", "C. {1, 2, 3}", "D. '123'"],
        "answer": "C"
    },
    {
        "question": "5. What does `bool('False')` return?",
        "options": ["A. False", "B. Error", "C. True", "D. None"],
        "answer": "C"
    }
]

score = 0
for q in quiz:
    print("\n" + q["question"])
    for option in q["options"]:
        print(option)
    user_ans = input("Your answer (A/B/C/D): ").strip().upper()
    if user_ans == q["answer"]:
        print(" Correct!")
        score += 1
    else:
        print(f"Wrong! Correct answer: {q['answer']}")

print(f"\n Quiz Completed! Your score: {score}/{len(quiz)}")
