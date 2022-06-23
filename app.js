let btn =document.getElementById('btn');
let output=document.getElementById('output');
let quotes=['“You can get everything in life you want if you will just help enough other people get what they want.” —Zig Ziglar',
'“Inspiration does exist, but it must find you working.” —Pablo Picasso',
'“Dont settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.” —Angela Bassett',
'“Show up, show up, show up, and after a while the muse shows up, too.” —Isabel Allende',
'“Dont bunt. Aim out of the ballpark. Aim for the company of immortals.” ―David Ogilvy',
'“I have stood on a mountain of nos for one yes.” —Barbara Elaine Smith',
'“If you believe something needs to exist, if its something you want to use yourself, dont let anyone ever stop you from doing it.” —Tobias Lütke',
'“First forget inspiration. Habit is more dependable. Habit will sustain you whether youre inspired or not. Habit will help you finish and polish your stories. Inspiration wont. Habit is persistence in practice.” ―Octavia Butler',
'“The best way out is always through.” ―Robert Frost',
'“The battles that count arent the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—thats where itws at." —Jesse Owens',
'“If there is no struggle, there is no progress.” —Frederick Douglass',
'“Someone will declare, “I am the leader!” and expect everyone to get in line and follow him or her to the gates of heaven or hell. My experience is that it doesnt happen that way. Others follow you based on the quality of your actions rather than the magnitude of your declarations.” ―Bill Walsh',
'“Courage is like a muscle. We strengthen it by use.” —Ruth Gordo',
'“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie',

'“Relentlessly prune bullshit, dont wait to do things that matter, and savor the time you have. Thats what you do when life is short.” —Paul Graham',

'"More is lost by indecision than wrong decision.” —Marcus Tullius Cicero',

'"If the highest aim of a captain were to preserve his ship, he would keep it in port forever." —Thomas Aquinas',

'"You can be the ripest, juiciest peach in the world, and theres still going to be somebody who hates peaches." —Dita Von Teese',

'“Keep a little fire burning; however small, however hidden.” ―Cormac McCarthy',

'"Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan Press On has solved and always will solve the problems of the human race." —Calvin Coolidge'
];

btn.addEventListener('click',function(){
    let rq=quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML=rq;
})