# Explanation

## Pseudocode

get string
check to make sure its a string
split the string into its characters
for every character put that character into return array
  then: for every character after that charater
    add it to a growing string
    put that string into return array
return the return array to the user
//obviously some extra declarations were added, but I figure that those are JS details

## Explanation

###For Loop
I used for loops for this function because they were the simplest way to easily access both the individual characters
and the split string array. I though about using while loops and forEach; but while loops would have made the code a little to
convoluted for what I needed givin that I would know the length of the array ahead of time. forEach sounded like a good idea, 
until I realized that I would still have to use a nested for loop inside that forEach, which would make the code harder to
understand to write. Therefore I settled on for loops as the most effective solution.

