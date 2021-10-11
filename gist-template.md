# 17 Computer Science for JavaScript: Regex Tutorial

Introductory paragraph (replace this with your text)

## Summary

Briefly summarize the regex you will be describing and what you will explain. Include a code snippet of the regex. Replace this text with your summary.
Matching an Email – /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
As a very visual person, something beneficial for this project was placing the regular expression in the website regex pal. From there, users can test strings. When particular strings match an expression, then they turn blue to verify a match. The user can hover over the different groups that make up the expression, and the program explains what each of the different pieces means and represents.
As the user hovers over those different parts, it will tell you what the purpose of those sets of letters or characters was to help make up a particular expression, and then at the bottom of their page, they also have a nice little cheat sheet.
Initially, when I looked at just the cheat sheet, though and tried to figure out how everything was happening and how all of the pieces fit together, I was confused. So I also tried to build one, but I think just by looking at the cheat sheet at the bottom of the page where it just gives you an actual map of where to go, it is difficult because if you are learning, it was confusing for me to know does everything need parentheses or a bracket around it. So I had a difficult time when I tried to play around and build one at first. However, it was a little bit easier to use the regex pal and put the expression I wanted to try out in the regular expression section and then break down what was happening piece by piece. Moreover, I just used a class example.
The expression that I chose was to match an email because I could see that being very useful and coming up in the future.  So to break down what is happening here, you start with a carrot at the very first of your expression well, and even before that, you have a \ which simply means or indicates a regex starting. So then, in this particular expression, you have a carrot, and a carrot is the beginning of the line or a string.
In this particular expression, the next item, we see parentheses. Parentheses capture a group. So it is multiple tokens together, and then right after that, we have square brackets, which tell us that this is a character set and matches characters shown within this set.
Inside the square brackets, there is an a-z saying that any letter between a-z is ok and may occur here, then 0-9, same thing just talking about your range of options. Any numbers between 0-9 are ok or can occur here.
Immediately following the a-z0-9, there is a_which just means_and then you have an Escape character right after that, so you have got a/and a. And then there is a dash which basically matches the dash character saying that that is acceptable, and then we are back to our square bracket square brackets for the character set
Immediately following the square brackets, we have a +, which means that we need to match one or more than one of the tokens that we just saw, and then that is ended with parentheses to tie up that section, and then you have an @ sign so if we are thinking of this like validating an email address I believe it just wants to say you need to have an @ here.
Then we have a parenthesis which means that we are now taking a look at our second capturing group, and there can be multiple tokens held within this to create this particular group. Then you have another set of square brackets to say this is a good character set, and then we have a \ and a D, which means that you can match any digit so any Think between 0 to 9. This is immediately followed by a dash see as we saw in the first group so you can have any character any letter between A-to-Z, and then we have another escape character, so we have a back/an a. Here is what I know about escape characters.
Following our escape character with the \in, then we have another Dash symbol, so that is just saying that is an ok option. I believe I have to look at that and then you have your square brackets just saying that is for that particular character set and a + so I can match at least one or more than one of any of these proceeding tokens that we just saw and then you have parentheses ending the capture group that we just looked at
Ok, so after our + in the parentheses, we have an escape character again – and a. And now we are onto group 3, so you start with parentheses, then you have your square brackets, and then we are going to determine the range again, so we have an eight Dash three so anything between A-to-Z is ok here we have another escape character a\and a. Then we have got a set of an end square bracket there. So then we have a quantifier that occurs next, and basically what this qualifier is saying is you need to match between two and six of the preceding tokens because we have curly braces with 82, six, and then ending curly brace, and that is within parentheses so right there is our whole capture group 3 and then following that you have the end of this regular expression which is defined with a question mark.
A question mark expresses the end of a regular expression. So you have hit the end of the regular expression. Then the way you can tell if this works is if you type in examples of email addresses below in the test string, anything that matches the above regular expression will show blue at the bottom of your page, and then it is even more incredible because you can hover over the test strings that you have created. It will say how your particular test string fits with this regular expression, basically, what characters or qualities it had to match your above expression. regex Pal is an excellent tool if you are trying to break down the different bits and pieces of a regex because it can at first look a little bit scary or intimidating just because it is a big extended group of letters, numbers, characters tokens, dashes slashes +’s and it is a lot to figure out right at first.
However, a significant part about this is is that not only can you hover over the different pieces of this expression, and it will help you break it down, but it also has the separate parts color-coded so that you can say ok this is part of this, this is a part of that, and here is how they fit together and so I found this tool particularly helpful.
is that not only can you hover over the different pieces of this expression and it will help you break it down, but it also has the separate parts color-coded so that you can say, ok this is part of this, this is a part of that, and here is how they fit together and so I found this tool particularly helpful
Caret ^ - the beginning of a string
() captures a group
$ - end of string or line
[] character set
a-z matches a character between a-z
0-9 matches a character between 0-9
underscore = underscore
. is an escape character
= - dash = dash
match one or more than one of the tokens

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Anchors

Anchors include symbols like a carrot and a $ at the end of the string or \A letter to describe word boundaries or the lack of. The \letter means being a or end of a string.
About anchors, an example of an anchor would be a carrot a $. Anchors or a way of telling you where you’re at, so basically, is it that start or the end? \A refers to the start of a string.
It is probably important to note as we start to talk about anything to do with regex that regex can vary a little bit depending on which language you are looking at. Some characters are the same across multiple languages and have the same meaning, but that is not true for all of them, so it is to find good references. In the documentation I looked at, some symbols or characters or tokens had notes with them saying all engines except JavaScript or this with the exception of Ruby or all of these are the same depending on the language, so it is important to watch out for that.
Quantifiers
Examples of regular expressions quantifiers are *, +, ?, {3}, {4,7}, {5,}.

### Quantifiers

Quantifiers in regex include ?, *, +, and then items within curly braces/brackets.
With quantifiers, you are basically trying to find how many times something happens or how many of certain things there are. In my research, I found that Quantifiers can also be eager reluctant possessive depending on how characters are placed together.
As you hover over those different parts of the expression, it will tell you what the purpose of those sets of letters or characters was to help make up a particular expression. Then at the bottom of the page, they also have a nice little cheat sheet.
For quantifiers, if you look at W3 schools, almost or all of the descriptions for what quantifiers start with “matches any string with” or “matches any string that.” And then in each of the examples they provide, it says more specifics, for example, matches any string with and end at the end of it or that is for the n $ example.
Or it could say matches any string that is followed by a specific string, and that would be if you had a? Equals n. Basically, quantifiers tell you what to look for to match
OR Operator

### OR Operator

Alternation is actually a simple OR, and this is exhibited or declared with a vertical line, so for example, if you wanted to find three different things, a cat, a dog, and a bird, then you would put cat|dog|bird.
this would make it so that you were requesting to look for all three of those different items are groups at the same time yeah also individually
<https://javascript.info/regexp-alternation>

### Character Classes

Character Classes
An example of character class would be a-z or A-Z -
when you see this in a regular expression, it is not just talking about finding a time frame see it is saying find anything, or you can look through anything that falls in the alphabet, so anything between A-to-Z could be any one of those characters you could use this A-to-Z, or you could also think about numbers, that is a possibility with numbers as well

### Flags

In JavaScript, when we are talking about flags, there are only six flags that work with JavaScript and retro regular expressions; those are “I,” which is a flag that searches for casein sensitive there is a G this flag looks for anything without the specified request. M is multiline and makes it so that you can use a dot to match.
The character U flag helps to process pairs correctly, and y is the sticky flag it looks for a particular position.
Flags
Regular expressions may have flags that affect the search.
There are only 6 of them in JavaScript:
i
With this flag, the search is case-insensitive: no difference between A and a (see the example below).
g
With this flag, the search looks for all matches without it – only the first match is returned.
m
Multiline mode (covered in the chapter Multiline mode of anchors ^ $, flag “m”).
s
Enables “dotall” mode, which allows a dot . to match newline character \n (covered in the chapter Character classes).
u
Enables full Unicode support; the flag enables the correct processing of surrogate pairs. More about that in the chapter Unicode: flag “u” and class \p{...}.
y
“Sticky” mode: searching at the exact position in the text (covered in the chapter Sticky flag “y”, searching at position)
<https://javascript.info/regexp-introduction>

### Grouping and Capturing

Grouping and Capturing
On capturing and grouping, an easy example would be to say that you have (cat).
if you are thinking about grouping and capturing and what if we use the sixth sample of the word  cat with him parentheses, then a regular expression is going to look at the screw cat and convert it or instead view it as individual characters so it would be viewed as C A T

### Bracket Expressions

Bracket Expressions
Brackets there is a really great article I would suggest on a website called I Javascript in plain English .io
In it, he breaks it down between square brackets, curly braces, and parentheses and what they each mean.
Brackets tell the viewer or user, or program to look at what is in between the brackets and see if there are any individual characters that can match.
With the curly braces, they do something a little bit different their job is to say or to define a specific number of things to match. For example, you could say I want to match this one example precisely two times.
And for parentheses, these are remembered matches, so the parentheses help anytime you want to do something with a particular part of a match you can refer back to a remembered match or  remembered portion of a match that would you be useful to bring up at another time
<https://javascript.plainenglish.io/regular-expressions-brackets-f2d6f69ffe13>
<https://javascript.plainenglish.io/regular-expressions-brackets-f2d6f69ffe13>

### Greedy and Lazy Match

Greedy and Lazy Match
Greedy and lazy matches. I think one of the best ways iPhone to describe greedy and lazy matches in rain checks was actually from the answer to a stack overflow question. A greedy match is going to be looking for the longest possible string can find, but a lazy match will look for the shortest string.
‘Greedy’ means match longest possible string.
‘Lazy’ means match shortest possible string.
For example, the greedy h.+l matches’ hell’ in ‘hello’ but the lazy h.+?l matches’ hel’.
<https://stackoverflow.com/questions/2301285/what-do-lazy-and-greedy-mean-in-the-context-of-regular-expressions>
<https://javascript.info/regexp-greedy-and-lazy>
<https://www.w3docs.com/learn-javascript/greedy-and-lazy-quantifiers.html>

### Boundaries

Word boundary is shown with a (\b) it is equivalent to an anchor. It basically tells  the user that this is a word boundary. Basically it is a way to declare here is a word/this is a word boundary. Example "fish" with in the parenthesis is a word. It is similar to if you declared with anchors "this is the first of my string" using a ^ carrot or the end of a string with the dollarsign. You are declaring a space or place. \b asks the programing language to look for that whole word. for example if we said, please find the entire word "fish". There are more complexities involved but that's a basic idea.

<https://www.javascripttutorial.net/regular-expression-word-boundaries/>

### Back-references

Back-references
What does a back-reference look like? It is typically a \ followed by single-digit.
Back-reference are a command, and it refers to something that already happened or previous part of a matched regular expression. You could make a better preference by name or number; basically, what you are doing is you are referencing a named group, and you would have a bag/and a K then the name of that group, for example.
Look-ahead and Look-behind
Allow you to control the way or define the way that matches are handled when using regular expressions.
I looked at the website regex buddy also says regular Dash expression .info, and Specifically, on this website, I looked at look-ahead and look-behind zero-length assertions.
According to this website, look ahead and look behind, which can also be known as look around assertions, are similar to a start and end of the line or anchors, but the difference with a look ahead and look behind.
Look around can match characters, and then they return a result of either a match or no match.

### Look-ahead and Look-behind

Allow you to control the way or define the way that matches are handled when using regular expressions.
I looked at the website regex buddy also says regular Dash expression .info, and Specifically, on this website, I looked at look-ahead and look-behind zero-length assertions.
According to this website, look ahead and look behind, which can also be known as look around assertions, are similar to a start and end of the line or anchors, but the difference with a look ahead and look behind.
Look around can match characters, and then they return a result of either a match or no match.

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
Samantha Peterson

Github: <https://github.com/SamanthaPeterson>
Linkedin: <https://www.linkedin.com/in/samantha-peterson-web-developer-photographer/>
Email: photographer.samantha@live.com
References
<http://www.rexegg.com/regex-anchors.html>
<https://cs.lmu.edu/~ray/notes/regex/>
<https://www.regular-expressions.info/lookaround.html>
<https://javascript.info/regexp-backreferences>
<https://javascript.info/regexp-greedy-and-lazy>

<https://www.javascripttutorial.net/regular-expression-word-boundaries/>



Links to application and commit history
https://github.com/SamanthaPeterson/Computer-science-for-javascript-17
https://gist.github.com/SamanthaPeterson
https://gist.github.com/SamanthaPeterson/84682013a1b31bd8ff048276d61ba547