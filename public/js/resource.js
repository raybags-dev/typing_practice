const text_source = {
    1: `"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela`,

    2: `"The way to get started is to quit talking and begin doing." -Walt Disney`,

    3: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." -Steve Jobs`,

    4: `"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt`,

    5: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." -Oprah Winfrey`,

    6: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." -James Cameron`,

    7: `"Life is what happens when you're busy making other plans." -John Lennon`,

    8: `The insight and experience of others is a valuable source of inspiration and motivation. And learning from successful leaders and entrepreneurs is a fantastic way to grow. Life throws curveballs. And while there might be blockers to success, it's imperative to keep pushing with the knowledge mistakes will be made and failure is inevitable.`,

    9: `"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa`,

    10: `"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt`,

    11: `"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead`,

    12: `"Don't judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson`,

    13: `"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt`,

    11: `"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin`,

    12: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller`,

    13: `"It is during our darkest moments that we must focus to see the light." -Aristotle`,

    14: `"Whoever is happy will make others happy too." -Anne Frank`,

    15: `"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson`,

    16: `"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa`,

    17: `"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt`,

    18: `"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead`,

    19: `"Don't judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson`,

    20: `"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt`,

    21: `"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin`,

    22: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller`,

    23: `"It is during our darkest moments that we must focus to see the light." -Aristotle`,

    24: `"Whoever is happy will make others happy too." -Anne Frank`,

    25: `"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson`,

    26: `"You will face many defeats in life, but never let yourself be defeated." -Maya Angelou`,

    27: `"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela`,

    28: `"In the end, it's not the years in your life that count. It's the life in your years." -Abraham Lincoln`,

    29: `"Never let the fear of striking out keep you from playing the game." -Babe Ruth`,

    30: `"Life is either a daring adventure or nothing at all." -Helen Keller`,

    31: `"Many of life's failures are people who did not realize how close they were to success when they gave up." -Thomas A. Edison`,

    32: `"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.” – Mark Caine`,

    33: `"Get busy living or get busy dying." – Stephen King`,

    34: `"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us." – Helen Keller`,

    35: `"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do." – Mark Twain`,

    36: `"When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid." – Audre Lorde`,

    37: `"Great minds discuss ideas; average minds discuss events; small minds discuss people." – Eleanor Roosevelt`,

    38: `"A successful man is one who can lay a firm foundation with the bricks others have thrown at him." – David Brinkley`,

    39: `"Those who dare to fail miserably can achieve greatly." – John F. Kennedy`,

    40: `"I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time." -Herbert Bayard Swope`,

    41: `"Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success." – Thomas J. Watson`,

    42: `"It is hard to fail, but it is worse never to have tried to succeed." – Theodore Roosevelt`,

    43: `"Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world." – Lucille Ball`,

    44: `"Let us always meet each other with smile, for the smile is the beginning of love." – Mother Teresa`,

    45: `"Challenges are what make life interesting and overcoming them is what makes life meaningful." – Joshua J. Marine`,

    46: `"Love is a serious mental disease." – Plato`,

    47: `"Our greatest fear should not be of failure… but of succeeding at things in life that don’t really matter." – Francis Chan`,

    48: `"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things." – Leonardo Da Vinci`,

    49: `"Remember that the happiest people are not those getting more, but those giving more." – H. Jackson Brown, Jr.`,

    50: `"It is our choices, that show what we truly are, far more than our abilities." – J. K Rowling`,

    51: `"Only put off until tomorrow what you are willing to die having left undone." – Pablo Picasso`,

    52: `"Many of life’s failures are people who did not realize how close they were to success when they gave up." – Thomas A. Edison`,

    53: `"If you want to live a happy life, tie it to a goal, not to people or things." – Albert Einstein`,

    54: `"Success is just a war of attrition. Sure, there’s an element of talent you should probably possess. But if you just stick around long enough, eventually something is going to happen." – Dax Shepard`,

    55: `"The opposite of love is not hate; it’s indifference." – Elie Wiesel`,

    56: `"The good news is that the moment you decide that what you know is more important than what you have been taught to believe, you will have shifted gears in your quest for abundance. Success comes from within, not from without." – Elie Wiesel`,

    57: `"I never knew how to worship until I knew how to love." – Henry Ward Beecher`,

    58: `"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world." – Harriet Tubman`,

    59: `"It is impossible to escape the impression that people commonly use false standards of measurement — that they seek power, success and wealth for themselves and admire them in others, and that they underestimate what is of true value in life." – Sigmund Freud`,

    60: `"A friend is someone who gives you total freedom to be yourself." -Jim Morrison`,

    61: `"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world." – Harriet Tubman`,

    62: `"Never let the fear of striking out keep you from playing the game." – Babe Ruth`,

    63: `"Live in the sunshine, swim the sea, drink the wild air." – Ralph Waldo Emerson`,

    64: `"Success in business requires training and discipline and hard work. But if you’re not frightened by these things, the opportunities are just as great today as they ever were." – David Rockefeller`,

    65: `"The purpose of our lives is to be happpy." -Dalai Lama`,

    66: `"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking." – Steve Jobs`,

    67: `"Success is how high you bounce when you hit bottom." – George S. Patton`,

    68: `Your background does not define you, your future does! -Raymond Baguma [FYI, no one has claimed this one so, ...there you go. ]`,

    69: `"You will face many defeats in life, but never let yourself be defeated." – Maya Angelou`,

    70: `"May you live all the days of your life." – Jonathan Swift`,

    71: `"Success is not final, failure is not fatal: it is the courage to continue that counts." – Winston Churchill`,

    72: `"You’re not obligated to win. You’re obligated to keep trying. To the best you can do everyday." – Jason Mraz`,

    73: `"If life were predictable it would cease to be life, and be without flavor." – Eleanor Roosevelt`,

    74: `"If you don’t design your own life plan, chances are you’ll fall into someone else’s plan. And guess what they have planned for you? Not much." – Jim Rohn`,

    75: `"The question isn’t who is going to let me; it’s who is going to stop me." – Ayn Rand`,

    76: `"The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense." – Thomas A. Edison`,

    77: `"The successful warrior is the average man, with laser-like focus."– Bruce Lee`,

    78: `"A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do." – Bob Dylan`,

    79: `"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present." – Bil Keane`,

    80: `"Life isn’t about finding yourself. Life is about creating yourself." – George Bernard Shaw`,

    81: `"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it." – Henry Ford`,

    82: `"Success? I don’t know what that word means. I’m happy. But success, that goes back to what in somebody’s eyes success means. For me, success is inner peace. That’s a good day for me." – Denzel Washington`,

    83: `"A kiss is a lovely trick designed by nature to stop speech when words become superfluous." – Ingrid Bergman`,

    84: `"You miss 100 percent of the shots you never take." – Wayne Gretzky`,

    85: `"In order to write about life first you must live it." – Ernest Hemingway`,

    86: `"Do not go where the path may lead; go instead where there is no path and leave a trail." – Ralph Waldo Emerson`,

    87: `"We are what we repeatedly do; excellence, then, is not an act but a habit." – Aristotle`,

    88: `"Always forgive your enemies; nothing annoys them so much." – Oscar Wilde`,

    89: `"The big lesson in life, baby, is never be scared of anyone or anything." – Frank Sinatra`,

    90: `"To love and be loved is to feel the sun from both sides." – David Viscott`,

    91: `"Love is an irresistible desire to be irresistibly desired." – Robert Frost`,

    92: `"Those who believe in telekinetics, raise my hand." – Kurt Vonnegut`,

    93: `"I only regret that I have but one life to give for my country." – Nathan Hale`,

    94: `"The person who reads too much and uses his brain too little will fall into lazy habits of thinking." – Albert Einstein`,

    95: `"Better to have loved and lost, than to have never loved at all." – St. Augustine`,

    96: `"Every child is an artist, the problem is staying an artist when you grow up." – Pablo Picasso`,

    97: `"Have no fear of perfection, you’ll never reach it." – Salvador Dali`,

    98: `"Life is not a problem to be solved, but a reality to be experienced." – Søren Kierkegaard`,

    99: `"Curiosity about life in all of its aspects, I think, is still the secret of great creative people." – Leo Burnett`,

    100: `"Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will." – George Bernard Shaw`,

    101: `What doesn't kill you, makes you stronger. -Jamal Takal ???? Maybe.`
}

const _text_source = text_source;
export { _text_source as text_source };