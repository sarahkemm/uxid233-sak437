const zodiac_signs = [
    {
        name: 'capricorn', 
        start_month: 12,
        start_day: 22,
        end_month: 1,
        end_day: 19,
        sound: 'audio/capricorn.mp3',
        image: 'images/capricorn.png',
        description:'tbd',
    },
    {
        name: 'aquarius',
        start_month: 1,
        start_day: 20,
        end_month: 2,
        end_day: 18,
        sound: 'audio/aquarius.mp3',
        image: 'images/aquarius.png',
        description: 'tbd',
    },
    {
        name: 'picses',
        start_month: 2,
        start_day: 19,
        end_month: 3,
        end_day: 20,
        sound: 'audio/picses.mp3',
        image: 'images/picses.png',
        description: 'tbd',
    },
    {
        name: 'aries',
        start_month: 3,
        start_day: 21,
        end_month: 4,
        end_day: 19,
        sound: 'audio/aries.mp3',
        image: 'images/aries.png',
        description: 'tbd',
    },
    {
        name: 'taurus',
        start_month: 4,
        start_day: 20,
        end_month: 5,
        end_day: 20,
        sound: 'audio/taurus.mp3',
        image: 'images/taurus.png',
        description: 'tbd',
    },
    {
        name: 'gemini',
        start_month: 5,
        start_day: 21,
        end_month: 6,
        end_day: 21,
        sound: 'audio/gemini.mp3',
        image: 'images/gemini.png',
        description: 'tbd',
    },
    {
        name: 'cancer',
        start_month: 6,
        start_day: 22,
        end_month: 7,
        end_day: 22,
        sound: 'audio/cancer.mp3',
        image: 'images/cancer.png',
        description: 'tbd',
    },
    {
        name: 'leo',
        start_month: 7,
        start_day: 23,
        end_month: 8,
        end_day: 22,
        sound: 'audio/leo.mp3',
        image: 'images/leo.png',
        description: 'tbd',
    },
    {
        name: 'virgo',
        start_month: 8,
        start_day: 23,
        end_month: 9,
        end_day: 22,
        sound: 'audio/virgo.mp3',
        image: 'images/virgo.png',
        description: 'tbd',
    },
    {
        name: 'libra',
        start_month: 9,
        start_day: 23,
        end_month: 10,
        end_day: 22,
        sound: 'audio/libra.mp3',
        image: 'images/libra.png',
        description: 'tbd',
    },
    {
        name: 'scorpio',
        start_month: 10,
        start_day: 23,
        end_month: 11,
        end_day: 21,
        sound: 'audio/scorpio.mp3',
        image: 'images/scorpio.png',
        description: 'tbd',
    },
    {
        name: 'sagittarius',
        start_month: 11,
        start_day: 22,
        end_month: 12,
        end_day: 21,
        sound: 'audio/sagittarius.mp3',
        image: 'images/sagittarius.png',
        description: 'tbd',
    },
]
function play_sign_sound () {
    console.log('play_sign_sound: plays the selected sign\'s audio clip');
}
function find_sign () {
    console.log('find_sign: finds the sign using the date of birth');
}
function open_help_screen () {
    console.log('open_help_screen');
}
function save_last_sign () {
    console.log('save_last_sign: saves the last sign that was entered');
}
function change_color () {
    console.log('change_color: change the screen to the selected sign\'s color');
}
;