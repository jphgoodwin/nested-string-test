// James Goodwin's solution.

// Function to determine whether a string is properly nested.
// Returns 1 if so and 0 if not.
function solution(str) {
    // Break the string into an array of individual characters,
    // and get array length.
    var arr = str.split("");
    var len = arr.length;

    // Initialise a new array to hold the required end values.
    var arrend = [];
    // Initialise return value to 1.
    var rtnval = 1;


    // Iterate through the characters in the array. Every time you
    // encounter an opening bracket push its closing counterpart
    // to the arrend array. When you encounter a closing bracket
    // compare it against the last value in the arrend array. If it
    // matches, pop the value off the array. If it doesn't match
    // then we know our string isn't properly nested, so set the
    // return value to 0 and break the loop.
    var i;
    for (i = 0; i < len; i++) {
        if (arr[i] == "{") {
            arrend.push("}");
        } else if (arr[i] == "[") {
            arrend.push("]");
        } else if (arr[i] == "(") {
            arrend.push(")");
        } else if (arr[i] == "}") {
            if (arrend[arrend.length - 1] == "}") {
                arrend.pop();
            } else {
                rtnval = 0;
                break;
            }
        } else if (arr[i] == "]") {
            if (arrend[arrend.length - 1] == "]") {
                arrend.pop();
            } else {
                rtnval = 0;
                break;
            }
        } else if (arr[i] == ")") {
            if (arrend[arrend.length - 1] == ")") {
                arrend.pop();
            } else {
                rtnval = 0;
                break;
            }
        } else {
            // Invalid character.
            rtnval = 0;
            break;
        }
    }

    // Once loop has finished, return value.
    return rtnval;
}

console.log(solution(""));
console.log(solution("{[()()]}"));
console.log(solution("([)()]"));
console.log(solution("{[(())}]"));
console.log(solution("{[(())]}"));
console.log(solution("[]{[]}({[]})"));
console.log(solution("[]{[]}({[]{)"));