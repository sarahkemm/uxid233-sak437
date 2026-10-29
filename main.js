const zodiac_signs = [
    {
        name: 'capricorn', 
        start_month: 12,
        start_day: 22,
        start_month_days: 31,
        end_month: 1,
        end_day: 19,
        sound: 'audio/capricorn.mp3',
        image: 'images/capricorn.png',
        description:'Responsible with an inner sense of independence, they have a can do attitude',
    },
    {
        name: 'aquarius',
        start_month: 1,
        start_day: 20,
        start_month_days: 31,
        end_month: 2,
        end_day: 18,
        sound: 'audio/aquarius.mp3',
        image: 'images/aquarius.png',
        description: 'Aquarians are adaptable and versatile, embracing change with open arms.They are known for their eccentricity and love for idealistic causes. They rely on their mind and need alone time to recharge',
    },
    {
        name: 'picses',
        start_month: 2,
        start_day: 19,
        start_month_days: 28,
        end_month: 3,
        end_day: 20,
        sound: 'audio/picses.mp3',
        image: 'images/picses.png',
        description: 'Pisces are compassionate, artistic, and imaginative. They are very friendly and often find themselves in company of very different people. They are selfless and always willing to help others.',
    },
    {
        name: 'aries',
        start_month: 3,
        start_day: 21,
        start_month_days: 31,
        end_month: 4,
        end_day: 19,
        sound: 'audio/aries.mp3',
        image: 'images/aries.png',
        description: 'Embodies action, energy, and competition. They are highly self-aware, have strong opinions and are always ready to defend them. ',
    },
    {
        name: 'taurus',
        start_month: 4,
        start_day: 20,
        start_month_days: 30,
        end_month: 5,
        end_day: 20,
        sound: 'audio/taurus.mp3',
        image: 'images/taurus.png',
        description: 'Practical, sensual, and dependable Earth sign that values love and material pleasures. The most grounded zodiac sign, they love their routine and are committed to comfort.',
    },
    {
        name: 'gemini',
        start_month: 5,
        start_day: 21,
        start_month_days: 31,
        end_month: 6,
        end_day: 21,
        sound: 'audio/gemini.mp3',
        image: 'images/gemini.png',
        description: 'Intelligent and perceptive. They can size up a person in a matter of seconds. They are renowned for their adaptability, curiosity, and thirst for knowledge.',
    },
    {
        name: 'cancer',
        start_month: 6,
        start_day: 22,
        start_month_days: 30,
        end_month: 7,
        end_day: 22,
        sound: 'audio/cancer.mp3',
        image: 'images/cancer.png',
        description: 'They are highly sensitive, deeply caring, and feel everything deeply. Cancers attract friends and lovers through their loyalty, commitment, and emotional depth.',
    },
    {
        name: 'leo',
        start_month: 7,
        start_day: 23,
        start_month_days: 31,
        end_month: 8,
        end_day: 22,
        sound: 'audio/leo.mp3',
        image: 'images/leo.png',
        description: 'Leos are bold, warm, and loving. They dont necessarily want to be worshipped, they just want to be recognized for their authentic selves. Leo often has many friends for they are generous and loyal.',
    },
    {
        name: 'virgo',
        start_month: 8,
        start_day: 23,
        start_month_days: 31,
        end_month: 9,
        end_day: 22,
        sound: 'audio/virgo.mp3',
        image: 'images/virgo.png',
        description: 'Virgos are perceptive, analytical and driven by the need to feel useful.',
    },
    {
        name: 'libra',
        start_month: 9,
        start_day: 23,
        start_month_days: 30,
        end_month: 10,
        end_day: 22,
        sound: 'audio/libra.mp3',
        image: 'images/libra.png',
        description: 'People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them. Symbolized by the scales of balance, Libras are renowned for their captivating charm, quality elegance, and diplomatic spirit.',
    },
    {
        name: 'scorpio',
        start_month: 10,
        start_day: 23,
        start_month_days: 31,
        end_month: 11,
        end_day: 21,
        sound: 'audio/scorpio.mp3',
        image: 'images/scorpio.png',
        description: 'Scorpio is the zodiac sign associated with intense, emotional depth. Scorpios are passionate, determined and great leaders who uncover truth, keep secrets, and combat dishonesty.',
    },
    {
        name: 'sagittarius',
        start_month: 11,
        start_day: 22,
        start_month_days: 30,
        end_month: 12,
        end_day: 21,
        sound: 'audio/sagittarius.mp3',
        image: 'images/sagittarius.png',
        description: 'They will always choose principles over feelings and will often question who they are. Adventurous travelers with a strong moral compass and a misunderstood altruistic nature.',
    },
]

const number_of_zodiac_in_array = zodiac_signs.length

function play_sign_sound () {
    console.log('play_sign_sound: plays the selected sign\'s audio clip');
};
function find_sign () {
    console.log('find_sign: finds the sign using the date of birth');
};
function open_help_screen () {
    console.log('open_help_screen');
};
function save_last_sign () {
    console.log('save_last_sign: saves the last sign that was entered');
};
function change_color () {
    console.log('change_color: change the screen to the selected sign\'s color');
};
function show_description () {
    console.log('show_description: tell user the description of their zodiac sign');
};

play_sign_sound();
open_help_screen();
save_last_sign();
change_color();
show_description();

for (let i = 0; i < number_of_zodiac_in_array; i++) {
    console.log(`${i+1}. ${zodiac_signs[i].name}`)
};

function find_sign (month, day) {
    for (const zodiac_sign of zodiac_signs) {
        const in_start_month = month === zodiac_sign.start_month && day >= zodiac_sign.start_day && day <= zodiac_sign.start_month_days;
        const in_end_month = month === zodiac_sign.end_month && day <= zodiac_sign.end_day;

        if(in_start_month || in_end_month) {
            return zodiac_sign.name;
        }
    
    }
    return null;
    };

console.log (find_sign(12, 21));
console.log (find_sign(12, 22));
console.log (find_sign(1, 19));
console.log (find_sign(1, 20));
console.log (find_sign(2, 20));

console.log (find_sign(2,30));

function find_sign(month,day) {
    const li = document.createElement('li')
    li.textContent = name;
    for (const zodiac_sign of zodiac_signs) {
        const in_start_month = month === zodiac_sign.start_month && day >= zodiac_sign.start_day && day <= zodiac_sign.start_month_days;
        const in_end_month = month === zodiac_sign.end_month && day <= zodiac_sign.end_day;

        if(in_start_month || in_end_month) {
            return zodiac_sign.name;
        }
    
    }
    return null;
    
};

const zodiacname_ul = document.querySelector (`#zodiacname`)

function add_zodiac (name) {
    const li = document.createElement('li');
    li.textContent = name;

    if (zodiacname_ul) {
        zodiacname_ul.append(li)
    } else {
        //do whatever
    }
}

for (const zodiacname of zodiac_signs) {
    add_zodiac(zodiacname.name)
}

console.log 