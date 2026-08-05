def solution(p):
    def is_correct_parentheses(string):
        stack = []
        for s in string:
            if s == '(':
                stack.append(s)
            elif stack:
                stack.pop()
        return len(stack) == 0

    def separate_to_u_v(string):
        left, right = 0, 0
        u = ""
        idx = 0
        for i, char in enumerate(string):
            u += char
            if char == '(':
                left += 1
            else:
                right += 1
            if left == right:
                idx = i + 1
                break
        v = string[idx:]
        return u, v

    def reverse_parentheses(string):
        reversed_string = ""
        for char in string:
            reversed_string += ")" if char == '(' else "("
        return reversed_string

    def change_to_correct_parentheses(string):
        if string == '':
            return ''
        u, v = separate_to_u_v(string)
        if is_correct_parentheses(u):
            return u + change_to_correct_parentheses(v)
        else:
            return '(' + change_to_correct_parentheses(v) + ')' + reverse_parentheses(u[1:-1])

    if is_correct_parentheses(p):
        return p
    else:
        return change_to_correct_parentheses(p)