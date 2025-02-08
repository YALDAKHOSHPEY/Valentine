const story = [
    {
        image: 'download.jpeg',
        text: 'If you could plan our first date, what would you choose to do first?',
        options: [
            { text: 'A cozy and quiet café for a long conversation.☕️', next: 1 },
            { text: 'A walk in the park under the moonlight.🌙', next: 2 }
        ]
    },
    {
        image: 'cat.jpeg',
        text: 'To create a romantic evening, how would you connect with me?',
        options: [
            { text: 'By sending a romantic and heartfelt message.', next: 3 },
            { text: 'By giving me a gift that shows you paid attention to my interests.', next: 4 }
        ]
    },
    {
        image: 'choose.jpeg',
        text: 'We are about to spend a day together at a new place. Where would you choose to go?',
        options: [
            { text: 'An art museum for a deep and artistic conversation.', next: 5 },
            { text: 'A special restaurant with different cuisines for a new experience.', next: 6 }
        ]
    },
    {
        image: 'gavin.jpeg',
        text: 'If we become closer, how would you show your feelings for me?',
        options: [
            { text: 'By writing me a romantic letter filled with emotions.', next: 7 },
            { text: 'By directly expressing my feelings from the heart.', next: 8 }
        ]
    },
    {
        image: 'gol.jpeg',
        text: 'If we are spending a long night together, what would be important to you?',
        options: [
            { text: 'Long, deep conversations, laughing and enjoying the moment together.', next: 9 },
            { text: 'Quiet and peaceful silence, just being with each other and feeling calm.', next: 10 }
        ]
    },
    {
        image: 'error.jpeg',
        text: 'What would impress you the most on a date?',
        options: [
            { text: 'A relaxed atmosphere with mutual respect, where everything feels natural and comfortable.', next: 11 },
            { text: 'Suggesting an exciting activity that shows how eager you are to spend time with me.', next: 12 }
        ]
    },
    {
        image: 'miss.jpeg',
        text: 'When we spend time together, do you prefer to:',
        options: [
            { text: 'Talk about life and our future and plan together.', next: 13 },
            { text: 'Have simple, carefree moments and enjoy each other\'s presence.', next: 14 }
        ]
    },
    {
        image: 'kiss.jpeg',
        text: 'After a wonderful night filled with love, how would you leave me?',
        options: [
            { text: 'With a romantic kiss💋 and a promise to meet again.', next: 15 },
            { text: 'With a sweet message😌after we part, to let you know I\'ll always remember you.', next: 16 }
        ]
    },
    {
        image: 'image1.png',
        text: 'Based on your choices, it seems like you are:',
        options: [],
        result: '**Romantic and heartfelt, oh cuteeeee, The truth is, I think you\'re going this way And I was right if you got here.😘😘🥹🥹🥹'
    },
    {
        image: 'image2.png',
        text: 'Based on your choices, it seems like you are:',
        options: [],
        result: '**Sensitive and thoughtful, did you know that I love these details?😳😳😳I feel everything deeply with all my being'
    },
    {
        image: 'image3.png',
        text: 'Based on your choices, it seems like you are:',
        options: [],
        result: ' I like silence too, but for example when I\'m in your arms😍But if I\'m with you, I talk a lot 🤣😑'
    },
    {
        image: 'image4.png',
        text: 'Based on your choices, it seems like you are:',
        options: [],
        result: '**Calm and thoughtful**, A little excitement is good, it\'s too early to get old baby🤣😂❤️😘do not do that to me.lmao'
    },
    {
        image: 'image1.png',
        text: 'Based on your choices, it seems like you are:',
        options: [],
        result: '** Honest and steady **, how about an amusement park for an exciting activity? hmm🤪🤪Of course, you knew that as a child I didn\'t really like amusement parks and the excitement of this type. '
    },
    {
        image: 'wonder.jpeg',
        text: "What do you think the future looks like?🥹",
        options: [
            { text: "We must fight and build the future because it is in our hands..😁", next: 17 },
            { text: "Fate determines and you wait until a certain time.🙂", next: 18 }
        ]
    },
    {
        image: 'sherek.jpeg',
        text: 'Umm great, how do we spend time togather?',
        options: [
            { text: 'we play games🎮 ... ', next: 19 },
            { text: ' play with ourselves. hahaha🤤😂', next: 20 }
        ]
    },
    {
        image: 'image4.png',
        text: 'You follow the path and find a village. The villagers help you and you are safe!',
        options: [],
        result: 'very romantic, my love . I like that kiss too💋 let me kiss u. I think this was the most romantic way you\'ve ever come here.'
    },
    {
        image: 'di.jpeg',
        text: 'Which one of these two excites me more?😏',
        options: [
            { text: 'Speak Persian without me telling you.😂', next: 21 },
            { text: 'Take a video of yourself dancing😂', next: 22 }
        ]
    },
    {
        image: 'image2.png',
        text: 'You open the chest and find supplies. You use them to survive until help arrives. You are safe!',
        options: [],
        result: 'You are truly a gentleman. Thank you for making my heart melt.🥰I knew you would choose this. In any case, I will fight for the future and will be patient and try until I reach you.'
    },
    {
        image: 'image3.png',
        text: 'You leave the chest alone and continue exploring. Eventually, you find help and are safe.',
        options: [],
        result: 'If you choose this, I must say that I believe that we create destiny and I have made certain death for you.😏👿'
    },
    {
        image: 'image4.png',
        text: 'You investigate the eyes and find a friendly animal. It leads you to a safe place.',
        options: [],
        result: 'my brave . I don\'t feel like playing with you because you\'re a loser. But one night I\'ll be a loser because of you🤣🤪😈'
    },
    {
        image: 'image1.png',
        text: 'You stay where you are and the glowing eyes disappear. You spend the night safely.',
        options: [],
        result: 'you are so Naughty😈😈😈😈 be romantic more , go to horny jail lmao😂😂The good thing is that I agree with your choices because I\'m horny too'
    },
    {
        image: 'image2.png',
        text: 'You stay in the shelter and the strange noises stop. You rest and feel refreshed in the morning.',
        options: [],
        result: 'ahh thanks , You obviously know me well. To be honest, I\'ve never seen you try to surprise me with language. Of course, I know your learning is poor, with all due respect 💀😘😂Now What would be "I love you " in Persian? If you see this, tell me😂'
    },
    {
        image: 'image3.png',
        text: 'You move to a safer place and find a better shelter. You survive the night safely.',
        options: [],
        result: 'Any dance you like, go for it. It turns me on haha. Move your body man🤤🥵🤣 like twerk hmmm'
    },
    {
        image: 'image4.png',
        text: 'You signal the helicopter and it rescues you! You are safe!',
        options: [],
        result: 'Honestly, I didn\'t know you would choose this because I hadn\'t considered the two possibilities. Send it to me so I can check. Sorry.😳🤣😂🤦🏻‍♀'
    },
    {
        image: 'image1.png',
        text: 'You wait for the helicopter to see you, but it flies away. You have to find another way to get off the island.',
        options: [],
        result: 'Honestly, I didn\'t know you would choose this because I hadn\'t considered the two possibilities. Send it to me so I can check. Sorry.😳🤣😂🤦🏻‍♀'
    }
];

let currentStep = 0;
const answers = [];

function playClickSound() {
    const clickSound = document.getElementById('click-sound');
    clickSound.play();
}

function renderStep(stepIndex) {
    const step = story[stepIndex];
    const character = document.getElementById('character');
    const speechBubble = document.getElementById('speech-bubble');
    const options = document.getElementById('options');
    const summaryContainer = document.getElementById('summary-container');
    const chatBox = document.getElementById('chat-box');
    
    character.src = step.image;
    speechBubble.textContent = step.text;
    options.innerHTML = '';

    if (step.options.length > 0) {
        step.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.onclick = () => {
                playClickSound();
                answers.push(option.text);
                chooseOption(option.next);
                options.style.display = 'none';
            };
            options.appendChild(button);
        });
    } else {
        const resultsTable = `
        <table>
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                </tr>
            </thead>
            <tbody>
                ${answers.map((answer, index) => `
                <tr>
                    <td>Q${index + 1}</td>
                    <td>${answer}</td>
                </tr>`).join('')}
            </tbody>
        </table>
        `;

        const summary = document.getElementById('summary');
        summary.innerHTML = `
        <h1> Result: ${step.result}</h1>
        ${resultsTable}
        `;

        renderPsychologicalQuestions();  // اضافه کردن این تابع برای نمایش سوالات روانشناسی و هدایت به صفحه دیگر پس از پایان فایل صوتی
        summaryContainer.style.display = 'block';
        document.getElementById('comic-container').style.display = 'none';
        chatBox.style.display = 'none';
    }
}

function chooseOption(nextStep) {
    currentStep = nextStep;
    renderStep(currentStep);
}
function restartStory() {
    currentStep = 0;
    answers.length = 0;
    
    // نمایش مجدد بخش‌های اصلی
    document.getElementById('comic-container').style.display = 'block';
    document.getElementById('summary-container').style.display = 'none';
    document.getElementById('chat-box').style.display = 'block';

    // پاک کردن نتایج و سوالات روانشناسی
    const psychologicalContainer = document.getElementById('psychological-container');
    if (psychologicalContainer) {
        psychologicalContainer.remove();
    }

    const resultContainer = document.getElementById('result-container');
    if (resultContainer) {
        resultContainer.remove();
    }

    // پاک کردن فایل صوتی نهایی
    const endAudioContainer = document.getElementById('end-audio-container');
    if (endAudioContainer) {
        endAudioContainer.remove();
    }

    // پاک کردن هر پیام ویژه یا محتوای اضافی
    const specialMessage = document.getElementById('special-message-container');
    if (specialMessage) {
        specialMessage.remove();
    }

    // پاک کردن جدول نتایج
    const summary = document.getElementById('summary');
    if (summary) {
        summary.innerHTML = '';
    }

    // شروع دوباره بازی
    renderStep(currentStep);
}



document.addEventListener('DOMContentLoaded', () => renderStep(currentStep));

document.getElementById('input-message').onclick = () => {
    document.getElementById('options').style.display = 'flex';
};
function renderPsychologicalQuestions() {
    const questions = [
        "When we're facing a tough time in our relationship, how do you usually cope or react?",
        "If you could change one thing about how we communicate, what would it be?",
        "What moments with me bring you the most joy, even from afar?",
        "you told me you hate waiting.don't you regret waiting for me?",
        "What do you like most about me and what do you hate?",
    ];

    const psychologicalContainer = document.createElement('div');
    psychologicalContainer.id = 'psychological-container';
    psychologicalContainer.innerHTML = "<h2>Personality Questions</h2>";

    questions.forEach((question, index) => {
        const questionElement = document.createElement('p');
        questionElement.textContent = `${index + 1}. ${question}`;
        
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.placeholder = 'Type your answer here...';
        inputElement.style.width = '100%';
        inputElement.style.margin = '10px 0';
        
        psychologicalContainer.appendChild(questionElement);
        psychologicalContainer.appendChild(inputElement);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Answers';
    submitButton.onclick = () => {
        const answers = Array.from(psychologicalContainer.querySelectorAll('input')).map(input => input.value);
        displayAnswers(answers);
        renderEndAudioAndRedirect(); // پخش فایل صوتی و هدایت به صفحه دیگر پس از ثبت پاسخ‌ها
    };
    
    psychologicalContainer.appendChild(submitButton);
    document.body.appendChild(psychologicalContainer);
}

function displayAnswers(answers) {
    const psychologicalContainer = document.getElementById('psychological-container');
    if (psychologicalContainer) {
        psychologicalContainer.remove();
    }

    const resultContainer = document.createElement('div');
    resultContainer.id = 'result-container';
    resultContainer.innerHTML = '<h2>Submitted Answers</h2>';
    answers.forEach((answer, index) => {
        const answerElement = document.createElement('p');
        answerElement.textContent = `Q${index + 1}: ${answer}`;
        resultContainer.appendChild(answerElement);
    });
    document.body.appendChild(resultContainer);
}

function renderEndAudioAndRedirect() {
    const endAudioContainer = document.createElement('div');
    endAudioContainer.id = 'end-audio-container';
    endAudioContainer.innerHTML = "<h2>Special Message</h2>";
    
    
    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.id = 'end-audio';
    const sourceElement = document.createElement('source');
    sourceElement.src = 'endMessage.mp3';  // مسیر فایل صوتی شما
    sourceElement.type = 'audio/mpeg';
    audioElement.appendChild(sourceElement);

    endAudioContainer.appendChild(audioElement);
    document.body.appendChild(endAudioContainer);

   
}
