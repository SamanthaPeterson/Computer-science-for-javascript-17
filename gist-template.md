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