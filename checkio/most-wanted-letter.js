/*
You are given a text, which contains different english letters and punctuation symbols. You should find the most frequent letter in the text. The letter returned must be in lower case.
While checking for the most wanted letter, casing does not matter, so for the purpose of your search, "A" == "a". Make sure you do not count punctuation symbols, digits and whitespaces, only letters.

If you have two or more letters with the same frequency, then return the letter which comes first in the latin alphabet. For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".

Input: A text for analysis as a string.

Output: The most frequent letter in lower case as a string.

Example:

mostWanted("Hello World!") == "l"
mostWanted("How do you do?") == "o"
mostWanted("One") == "e"
mostWanted("Oops!") == "o"
mostWanted("AAaooo!!!!") == "a"
mostWanted("abe") == "a"

*/

function mostWanted(str) {
    var wordCount = {},
        rx = /[a-z]/gi,
        letters = str.toLowerCase().match(rx).sort(),
        mostW = letters[0], 
        maxCount = 1;

    if (letters.length == 0){ return null; }
    
    for (var i = 0; i < letters.length; i++) {
        var key = letters[i];

        if (wordCount[key] == null) {
            wordCount[key] = 1;
        } else {
            wordCount[key]++;
        }
        if (wordCount[key] > maxCount) {
            mostW = key;
            maxCount = wordCount[key];
        }
    }
    
    return mostW;
}
