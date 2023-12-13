var quotes= [
    {
        quote: "“All life demands struggle Those who have everything given to them become lazy, selfish, and insensitive to the real values of life The very striving and hard work that we so constantly try to avoid is the major building block in the person we are today.” "
    },
    {
        quote: "“Today is the sort of day where the sun only comes up to humiliate you.”"
    },
    {
        quote: "“The timeless in you is aware of life's timelessness. And knows that yesterday is but today's memory and tomorrow is today's dream.”"
    },
    {
        quote: "“Forget yesterday - it has already forgotten you. Don't sweat tomorrow - you haven't even met. Instead, open your eyes and your heart to a truly precious gift - today.” "
    } ,
    {
        quote: " “The best preparation for tomorrow is doing your best today.” "
    },
    {
        quote: " “Stop longing. You poison today's ease, reaching always for tomorrow.” "
    },
    {
        quote: " “What worked yesterday doesn't always work today.” "
    },
    {
        quote: "“We live in an age when it is cheaper to buy the rights to movies than to make them.” "
    },
    {
        quote: "“Today will die tomorrow.” "
    },
    {
        quote: "“Always remember that you were once alone, and the crowd you see in your life today are just as unecessary as when you were alone.” "
    },
    {
        quote: "“Don't wait for a bright future. Make this very day a big bright explosion.” "
    },
    {
        quote: "“Live as if the best day is today; plan as if the best day was yesterday.” "
    },
    {
        quote: "“Today is the day. In fact, today is always the day, my friends!” "
    },
    {
        quote: "“If you fall to your fears today, your tomorrow will fall before it had the chance to become your next today.” "
    },
    {
        quote: "“Worrying doesn't take away tomorrow's trouble,it just take away today's peace” "
    },
    {
        quote: "“it's not a quote just wanted to say my name 'Osama' ;)” "
    }
]
var addquote =``
function addquotes(){
    document.getElementById("quote").innerHTML =  `
    <h2 class="font-2">  ${quotes[ Math.floor(Math.random() *quotes.length )].quote} </h2>
    `
}

addquotes();