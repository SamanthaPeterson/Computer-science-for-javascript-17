# Title (replace with your title)

Introductory paragraph (replace this with your text)

## Summary
As a very visual person, something beneficial for this project was placing the regular epression in the website regex pal. From there, users can test strings. When particular strings match an expression then they turn blue to verify a match. The user can hover over the different groups that make up the expression and the program explains what each of the different pieces mean and represent. 

As a very visual person, something beneficial for this project was placing the regular epression in the website regex pal. From there, users can test strings. When particular strings match an expression then they turn blue to verify a match. The user can hover over the different groups that make up the expression and the program explains what each of the different pieces mean and represent. 

Briefly summarize the regex you will be describing and what you will explain. Then, include a code snippet of the regex. Replace this text with your summary. 
* Matching an Email &ndash; `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`
I am a very visual person, and something helpful for me was pulling this expression up in the website regex pal. From there, you can put test strings below, and then you list her expression, and it will tell you does this match my test string or which ones doesn’t match and then what I liked was that you can hover over the different groups are parts within your regular expression and
As you hover over those different parts, it will tell you what the purpose of those sets of letters or characters was to help make up a particular expression, and then at the bottom of their page, they also have a nice little cheat sheet.
Initially, when I looked at just the cheat sheet, though and tried to figure out how everything was happening and how all of the pieces fit together, I was confused. I also tried to build one, but I think just by looking at the cheat sheet at the bottom of the page where it just gives you an actual map of where to go, it’s difficult because if you’re just learning, it was confusing for me to know does everything need parentheses or a bracket around it. So I had a difficult time when I tried to play around and build one at first. But it was a little bit easier to use the regex pal and put the expression I wanted to try out in the regular expression section and then break down what was happening piece by piece. And I just used a class example.
The expression that I chose was to match an email because I could see that being very useful and coming up in the future. And I thought this might be a beneficial one to try out. So just to break down what’s happening here, you start with a carrot at the very first of your expression well, and even before that, you have a\which just simply means or indicates a regex starting. Then in this particular expression, you have a carrot, and a carrot is the beginning of the line or a string.
In this particular expression, the next item we see in parentheses and the parentheses are meant to capture a group. It’s basically multiple tokens together, and then right after that, we have square brackets, which tell us that this is a character set and to match characters that are shown within this set.
Inside of the square brackets, there is an a-z saying that here any letter between a-z is ok and may occur here, then 0-9 same thing basically just talking about your range of options. Any numbers between 0-9 are ok or can occur here. 
Immediately following the a-z0-9, there is a_which just means_and then you have an Escape character right after that, so you’ve got a/and a. And then there’s a dash which just basically matches the dash character saying that that’s acceptable, and then we’re back to our square bracket square brackets for the character set 
Immediately following the square brackets, we have a +, which just basically means that we need to match one or more than one of the tokens that we just saw, and then that is ended with parentheses to tie up that section, and then you have an @ sign so if we’re thinking of this like validating an email address I believe it just wants to say you need to have an @ here.
Then we have a parenthesis which means that we are now taking a look at our second capturing group, and there can be multiple tokens held within this to create this particular group. Then you have another set of square brackets to say this is a good character set, and then we have a\and a D, and this means that you can match any digit so any Think between 0 to 9. This is immediately followed by, and a dash see as we saw in the first group so you can have any character any letter between A-to-Z, and then we have another escape character, so we have a back/an a. And here is what I know about escape the characters.

Following our escape character with the\in the we have another Dash symbol, so that’s just saying that’s an ok option. I believe I have to look at that and then you have your square brackets just saying that’s for that particular character set and a + so I can match at least one or more than one of any of these proceeding tokens that we just saw and then you have parentheses ending the capture group that we just looked at
Ok, so after our + in the parentheses, we have an escape character again – and a. And now we’re onto group 3, so you start with parentheses, then you have your square brackets, and then we’re going to determine the range again, so we have an eight Dash three so anything between A-to-Z is ok here we have another escape character a\and a. And then we’ve got a set of an end square bracket there, and then we have a quantifier that occurs next, and basically what this qualifier is saying is you need to match between two and six of the preceding tokens because we have curly braces with 82, six and then ending curly Grace and that is within parentheses so right there is our whole capture group 3 and then following that you have the end of this regular expression which is defined with a?
A question mark expresses the end of a regular expression. you’ve hit the end of the regular expression, and then the way you can tell if this works is if you type in examples of email addresses below in the test string, anything that matches the above regular expression will show blue in the bottom of your page and then it’s even more incredible because you can hover over the test strings that you’ve created and it will say how your particular test string fits with this regular expression basically what characters or qualities did it have to make it match your above expression. rejexs Pal is an excellent tool if you’re trying to break down the different bits and pieces of a regex because it can at first look a little bit scary or intimidating just because it is a big extended group of letters, numbers, characters tokens, dashes slashes +’s and it’s a lot to figure out right at first.
But a significant part about this is is that not only can you hover over the different pieces of this expression and it will help you break it down, but it also has the separate parts color-coded so that you can say ok this is part of this this is a part of that and here’s how they fit together and so I found this tool particularly helpful.
is that not only can you hover over the different pieces of this expression and it will help you break it down but it also has the separate parts color-coded so that you can tell OK this is part of this this is a part of that and here’s how they fit together and so I found this tool particularly helpful


Caret ^ - the begining of string
() captures a group
$ - end of string or line
[] character set
a-z matches a character between a-z
0-9 matches a character between 0-9
underscore = underscore
\. is an escape character
- = - dash = dash
+ match  one or more than one of the tokens 



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
Anchors include symbols like a carrot and a $ at the end of the string or \A letter  to describe word boundaries or the lack of. The \letter means being a or end of a string 
### Quantifiers
Examples of regular expressions quantifiers are *, +, ?, {3}, {4,7}, {5,}.
Quantifiers in regex include ?, *, +, and then items within curly braces/brackets. 
With quantifiers you are basically trying to find how many time something happens or how many of certain things there are. In my research I found that Quantifiers can also be eager reluctant possessive depending on how characters are placed together. 
As you hover over those different parts it will tell you what the purpose of those sets of letters or characters were to help make up a particular expression and then at the bottom of their page they also have a nice little cheat sheet

### OR Operator

### Character Classes

### Flags

### Grouping and Capturing

### Bracket Expressions

### Greedy and Lazy Match

### Boundaries

### Back-references

### Look-ahead and Look-behind

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)

## Refrences 
http://www.rexegg.com/regex-anchors.html
https://cs.lmu.edu/~ray/notes/regex/

# 17 Computer Science for JavaScript: Regex Tutorial
This  is my intro to the project
Summary
As a very visual person, something beneficial for this project was placing the regular epression in the website regex pal. From there, users can test strings. When particular strings match an expression then they turn blue to verify a match. The user can hover over the different groups that make up the expression and the program explains what each of the different pieces mean and represent.

Briefly summarize the regex you will be describing and what you will explain. Then, include a code snippet of the regex. Replace this text with your summary.
Matching an Email – /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

As the user hovers over those different parts, it will tell you what the purpose of those sets of letters or characters was to help make up a particular expression, and then at the bottom of their page, they also have a nice little cheat sheet.
Initially, when I looked at just the cheat sheet, though and tried to figure out how everything was happening and how all of the pieces fit together, I was confused. I also tried to build one, but I think just by looking at the cheat sheet at the bottom of the page where it just gives you an actual map of where to go, it’s difficult because if you’re just learning, it was confusing for me to know does everything need parentheses or a bracket around it. So I had a difficult time when I tried to play around and build one at first. But it was a little bit easier to use the regex pal and put the expression I wanted to try out in the regular expression section and then break down what was happening piece by piece. And I just used a class example.
The expression that I chose was to match an email because I could see that being very useful and coming up in the future. And I thought this might be a beneficial one to try out. So just to break down what’s happening here, you start with a carrot at the very first of your expression well, and even before that, you have a\which just simply means or indicates a regex starting. Then in this particular expression, you have a carrot, and a carrot is the beginning of the line or a string.
In this particular expression, the next item we see in parentheses and the parentheses are meant to capture a group. It’s basically multiple tokens together, and then right after that, we have square brackets, which tell us that this is a character set and to match characters that are shown within this set.
Inside of the square brackets, there is an a-z saying that here any letter between a-z is ok and may occur here, then 0-9 same thing basically just talking about your range of options. Any numbers between 0-9 are ok or can occur here.
Immediately following the a-z0-9, there is a_which just means_and then you have an Escape character right after that, so you’ve got a/and a. And then there’s a dash which just basically matches the dash character saying that that’s acceptable, and then we’re back to our square bracket square brackets for the character set
Immediately following the square brackets, we have a +, which just basically means that we need to match one or more than one of the tokens that we just saw, and then that is ended with parentheses to tie up that section, and then you have an @ sign so if we’re thinking of this like validating an email address I believe it just wants to say you need to have an @ here.
Then we have a parenthesis which means that we are now taking a look at our second capturing group, and there can be multiple tokens held within this to create this particular group. Then you have another set of square brackets to say this is a good character set, and then we have a\and a D, and this means that you can match any digit so any Think between 0 to 9. This is immediately followed by, and a dash see as we saw in the first group so you can have any character any letter between A-to-Z, and then we have another escape character, so we have a back/an a. And here is what I know about escape the characters.
Following our escape character with the\in the we have another Dash symbol, so that’s just saying that’s an ok option. I believe I have to look at that and then you have your square brackets just saying that’s for that particular character set and a + so I can match at least one or more than one of any of these proceeding tokens that we just saw and then you have parentheses ending the capture group that we just looked at
Ok, so after our + in the parentheses, we have an escape character again – and a. And now we’re onto group 3, so you start with parentheses, then you have your square brackets, and then we’re going to determine the range again, so we have an eight Dash three so anything between A-to-Z is ok here we have another escape character a\and a. And then we’ve got a set of an end square bracket there, and then we have a quantifier that occurs next, and basically what this qualifier is saying is you need to match between two and six of the preceding tokens because we have curly braces with 82, six and then ending curly Grace and that is within parentheses so right there is our whole capture group 3 and then following that you have the end of this regular expression which is defined with a?
A question mark expresses the end of a regular expression. you’ve hit the end of the regular expression, and then the way you can tell if this works is if you type in examples of email addresses below in the test string, anything that matches the above regular expression will show blue in the bottom of your page and then it’s even more incredible because you can hover over the test strings that you’ve created and it will say how your particular test string fits with this regular expression basically what characters or qualities did it have to make it match your above expression. rejexs Pal is an excellent tool if you’re trying to break down the different bits and pieces of a regex because it can at first look a little bit scary or intimidating just because it is a big extended group of letters, numbers, characters tokens, dashes slashes +’s and it’s a lot to figure out right at first.
But a significant part about this is is that not only can you hover over the different pieces of this expression and it will help you break it down, but it also has the separate parts color-coded so that you can say ok this is part of this this is a part of that and here’s how they fit together and so I found this tool particularly helpful.
is that not only can you hover over the different pieces of this expression and it will help you break it down but it also has the separate parts color-coded so that you can tell OK this is part of this this is a part of that and here’s how they fit together and so I found this tool particularly helpful
Caret ^ - the begining of string
() captures a group
$ - end of string or line
[] character set
a-z matches a character between a-z
0-9 matches a character between 0-9
underscore = underscore
. is an escape character
= - dash = dash
match one or more than one of the tokens
Table of Contents
Anchors
Quantifiers
OR Operator
Character Classes
Flags
Grouping and Capturing
Bracket Expressions
Greedy and Lazy Match
Boundaries
Back-references
Look-ahead and Look-behind
Regex Components
Anchors
Anchors include symbols like a carrot and a $ at the end of the string or \A letter to describe word boundaries or the lack of. The \letter means being a or end of a string
Quantifiers
Examples of regular expressions quantifiers are *, +, ?, {3}, {4,7}, {5,}.
Quantifiers in regex include ?, *, +, and then items within curly braces/brackets.
With quantifiers you are basically trying to find how many time something happens or how many of certain things there are. In my research I found that Quantifiers can also be eager reluctant possessive depending on how characters are placed together.
As you hover over those different parts it will tell you what the purpose of those sets of letters or characters were to help make up a particular expression and then at the bottom of their page they also have a nice little cheat sheet
OR Operator
Character Classes
Flags
Grouping and Capturing
Bracket Expressions
Greedy and Lazy Match
Boundaries
Back-references
Look-ahead and Look-behind
Author
A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
Refrences
http://www.rexegg.com/regex-anchors.html
https://cs.lmu.edu/~ray/notes/regex/

# 17 Computer Science for JavaScript: Regex Tutorial
This  is my intro to the project
Summary
As a very visual person, something beneficial for this project was placing the regular expression in the website regex pal. From there, users can test strings. When particular strings match an expression, then they turn blue to verify a match. The user can hover over the different groups that make up the expression and the program explains what each of the different pieces mean and represents.

Briefly summarize the regex you will be describing and what you will explain. Then, include a code snippet of the regex. Replace this text with your summary.
Matching an Email – /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

As the user hovers over those different parts, it will tell you what the purpose of those sets of letters or characters was to help make up a particular expression, and then at the bottom of their page, they also have a nice little cheat sheet.
Initially, when I looked at just the cheat sheet, though and tried to figure out how everything was happening and how all of the pieces fit together, I was confused. I also tried to build one, but I think just by looking at the cheat sheet at the bottom of the page where it just gives you an actual map of where to go, it’s difficult because if you’re just learning, it was confusing for me to know does everything need parentheses or a bracket around it. So I had a difficult time when I tried to play around and build one at first. But it was a little bit easier to use the regex pal and put the expression I wanted to try out in the regular expression section and then break down what was happening piece by piece. And I just used a class example. 
The expression that I chose was to match an email because I could see that being very useful and coming up in the future. And I thought this might be a beneficial one to try out. So just to break down what’s happening here, you start with a carrot at the very first of your expression well, and even before that, you have a\which just simply means or indicates a regex starting. Then in this particular expression, you have a carrot, and a carrot is the beginning of the line or a string.
In this particular expression, the next item we see in parentheses and the parentheses are meant to capture a group. It’s basically multiple tokens together, and then right after that, we have square brackets, which tell us that this is a character set and to match characters that are shown within this set.
Inside of the square brackets, there is an a-z saying that here any letter between a-z is ok and may occur here, then 0-9 same thing basically just talking about your range of options. Any numbers between 0-9 are ok or can occur here.
Immediately following the a-z0-9, there is a_which just means_and then you have an Escape character right after that, so you’ve got a/and a. And then there’s a dash which just basically matches the dash character saying that that’s acceptable, and then we’re back to our square bracket square brackets for the character set
Immediately following the square brackets, we have a +, which just basically means that we need to match one or more than one of the tokens that we just saw, and then that is ended with parentheses to tie up that section, and then you have an @ sign so if we’re thinking of this like validating an email address I believe it just wants to say you need to have an @ here.
Then we have a parenthesis which means that we are now taking a look at our second capturing group, and there can be multiple tokens held within this to create this particular group. Then you have another set of square brackets to say this is a good character set, and then we have a\and a D, and this means that you can match any digit so any Think between 0 to 9. This is immediately followed by, and a dash see as we saw in the first group so you can have any character any letter between A-to-Z, and then we have another escape character, so we have a back/an a. And here is what I know about escape the characters.
Following our escape character with the\in the we have another Dash symbol, so that’s just saying that’s an ok option. I believe I have to look at that and then you have your square brackets just saying that’s for that particular character set and a + so I can match at least one or more than one of any of these proceeding tokens that we just saw and then you have parentheses ending the capture group that we just looked at
Ok, so after our + in the parentheses, we have an escape character again – and a. And now we’re onto group 3, so you start with parentheses, then you have your square brackets, and then we’re going to determine the range again, so we have an eight Dash three so anything between A-to-Z is ok here we have another escape character a\and a. And then we’ve got a set of an end square bracket there, and then we have a quantifier that occurs next, and basically what this qualifier is saying is you need to match between two and six of the preceding tokens because we have curly braces with 82, six and then ending curly Grace and that is within parentheses so right there is our whole capture group 3 and then following that you have the end of this regular expression which is defined with a?
A question mark expresses the end of a regular expression. you’ve hit the end of the regular expression, and then the way you can tell if this works is if you type in examples of email addresses below in the test string, anything that matches the above regular expression will show blue in the bottom of your page and then it’s even more incredible because you can hover over the test strings that you’ve created and it will say how your particular test string fits with this regular expression basically what characters or qualities did it have to make it match your above expression. rejexs Pal is an excellent tool if you’re trying to break down the different bits and pieces of a regex because it can at first look a little bit scary or intimidating just because it is a big extended group of letters, numbers, characters tokens, dashes slashes +’s and it’s a lot to figure out right at first.
But a significant part about this is is that not only can you hover over the different pieces of this expression and it will help you break it down, but it also has the separate parts color-coded so that you can say ok this is part of this this is a part of that and here’s how they fit together and so I found this tool particularly helpful.
is that not only can you hover over the different pieces of this expression and it will help you break it down but it also has the separate parts color-coded so that you can tell OK this is part of this this is a part of that and here’s how they fit together and so I found this tool particularly helpful
Caret ^ - the beginning of string
() captures a group
$ - end of string or line
[] character set
a-z matches a character between a-z
0-9 matches a character between 0-9
underscore = underscore
. is an escape character
= - dash = dash
match one or more than one of the tokens
Table of Contents
Anchors
Quantifiers
OR Operator
Character Classes
Flags
Grouping and Capturing
Bracket Expressions
Greedy and Lazy Match
Boundaries
Back-references
Look-ahead and Look-behind
Regex Components
Anchors
Anchors include symbols like a carrot and a $ at the end of the string or \A letter to describe word boundaries or the lack of. The \letter means being a or end of a string
About anchors, an example of an anchor would be a carrot a $. Anchors or a way of telling you where you’re at so basically is it that start or the end? \A refers to the start of a string. 
It is probably important to note as we start to talk about anything to do with regex that regex can vary a little bit depending on which language you’re looking at. Some characters are the same across multiple languages and have the same meaning, but that’s not true for all of them, so it’s important to find good references. In the documentation I looked at Some symbols or characters or tokens had notes with them saying all engines except JavaScript or this with the exception of Ruby or all of these are the same depending on what engineer on so it’s important to just watch out for that
Quantifiers
Examples of regular expressions quantifiers are *, +, ?, {3}, {4,7}, {5,}.
Quantifiers in regex include ?, *, +, and then items within curly braces/brackets.
With quantifiers, you are basically trying to find how many times something happens or how many of certain things there are. In my research I found that Quantifiers can also be eager reluctant possessive depending on how characters are placed together.
As you hover over those different parts it will tell you what the purpose of those sets of letters or characters were to help make up a particular expression and then at the bottom of their page they also have a nice little cheat sheet
Fort quantifiers if you look at W3 schools almost or all of the descriptions for what a quantifiers start with matches any string with or matches any string that. And then in each of the examples they provide it says more specifics for example mattress any string with and end at the end of it or that’s for the n $example
Or it could say matches any string that is followed by a specific string and that would be if you had a? Equals n. Basically quantifiers tell you what to look for to match
OR Operator
Alternation is actually a simple OR and this is exhibit with a vertical line so for example if you wanted to find three different things a cat a dog and a bird then you would put cat|dog|bird 
this would make it so that you were requesting to look for all three of those different items are groups at the same time yeah also individually
https://javascript.info/regexp-alternation
Character Classes
An example of character class would be a-z or A-Z - 
when you see this in regular expression, it’s not just talking about find a time frame see it’s saying find anything or you can look through anything that falls in the alphabet so anything between A-to-Z it could be any one of those characters you could use this A-to-Z or you could also think about a numbers that’s that’s a possibility with numbers as well
Flags
And JavaScript when we are talking about flags, there are only six flags that work with JavaScript and retro regular expressions those are high which is a flag that searches for casein sensitive there is a G this flag looks for anything without the specified request. M is multi-line yes makes it so that you can use a dot to match
Character you flag helps to correctly process pairs and why is the sticky flag it looks for a very specific position
Flags
Regular expressions may have flags that affect the search.
There are only 6 of them in JavaScript:
i
With this flag the search is case-insensitive: no difference between A and a (see the example below).
g
With this flag the search looks for all matches, without it – only the first match is returned.
m
Multiline mode (covered in the chapter Multiline mode of anchors ^ $, flag "m").
s
Enables “dotall” mode, that allows a dot . to match newline character \n (covered in the chapter Character classes).
u
Enables full Unicode support. The flag enables correct processing of surrogate pairs. More about that in the chapter Unicode: flag "u" and class \p{...}.
y
“Sticky” mode: searching at the exact position in the text (covered in the chapter Sticky flag "y", searching at position)
https://javascript.info/regexp-introduction
Grouping and Capturing
On capturing and grouping so an easy example would be to say that you have parentheses cat so (cat) 
if you’re thinking about grouping and capturing and what if we use the sixth sample of cat with him parentheses then a regular expression is going to look at the screw cat and convert it or instead view it as individual characters so it would be viewed as C A T
Bracket Expressions
Brackets there is a really great article I would suggest on a website called I Javascript in plain English .io 
In it he breaks it down between square brackets curly braces and parentheses and what they each mean
Brackets tell the viewer or user or program to look at what is in between the brackets and see if there are any individual characters that can match
With the curly braces they do something a little bit different their job is to say or to define a specific number of things to match for example you could say I want to match this one example exactly 2 times
And for parentheses these are remembered matches so the parentheses help anytime you want to do some thing with a particular part of a match you can basically referred back to a remembered match or I remembered portion of a match that would you be useful to bring up at another time
https://javascript.plainenglish.io/regular-expressions-brackets-f2d6f69ffe13
https://javascript.plainenglish.io/regular-expressions-brackets-f2d6f69ffe13

Greedy and Lazy Match
Greedy and lazy matches. I think one of the best ways iPhone to describe greedy and lazy matches in rain checks was actually from the answer to a stack overflow question. And they simply put that a greedy match is going to be looking for the longest possible string can find but a lazy match will look for the shortest string. 
'Greedy' means match longest possible string.
'Lazy' means match shortest possible string.
For example, the greedy h.+l matches 'hell' in 'hello' but the lazy h.+?l matches 'hel'. 
https://stackoverflow.com/questions/2301285/what-do-lazy-and-greedy-mean-in-the-context-of-regular-expressions
https://javascript.info/regexp-greedy-and-lazy
https://www.w3docs.com/learn-javascript/greedy-and-lazy-quantifiers.html

Boundaries

Back-references
What does a backreference look like it is typically a\followed by single-digit single-digit digit
Backreferences are a command and it refers to something that already happened or previous part of a matched regular expression. You could make a better preference by name or number basically what you’re doing is you’re referencing a named group and you would have a bag/and a K then the name of that group for example
Look-ahead and Look-behind
Allow you to control the way or define the way that matches are handled when using regular expressions
I looked at the website regex buddy also says regular Dash expression .info and Specifically on this website I looked at look ahead and look behind zero-length assertions.
According to this website look ahead and look behind which can also be known as look around assertions are similar to a start and end of the line or anchors but the difference with a look ahead and I’ll look behind
Look around can match characters and then they return a result of either a match or no match




Author

Samantha Peterson

Github: https://github.com/SamanthaPeterson
Linkedin: https://www.linkedin.com/in/samantha-peterson-web-developer-photographer/
Email: photographer.samantha@live.com
References
http://www.rexegg.com/regex-anchors.html
https://cs.lmu.edu/~ray/notes/regex/
https://www.regular-expressions.info/lookaround.html
https://javascript.info/regexp-backreferences
https://javascript.info/regexp-greedy-and-lazy

