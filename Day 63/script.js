
// async function getWeather(city) {
//     let apikey = 'b92e57938eaebc6ded1fcf3a2f5b4bc3';

//     try {

//         let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)

//         if (!raw.ok) {
//             throw new Error('City not found or Something went wrong...')
//         }

//         let data = await raw.json();
//         if(data.main.temp < 0){
//             console.warn(`Too Cold out there...${data.main.temp}°C`)
//         }
//         else if(data.main.temp > 30){
//             console.warn(`Too Hot out there...${data.main.temp}°C`)
//         }
//         else{
//             console.log(`${data.main.temp}°C`)
//         }

//     } catch (err) {
//         console.log(err);

//     }
// }

// getWeather('Rajasthan');


let emails = [
    "harsh@email.com",
    "satwik@email.com",
    "sarthak@email.com"
]

function sendEmail(email) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 5);
        setTimeout(() => {
            let prbb = Math.floor(Math.random() * 10);
            if (prbb >= 5) {
                resolve('Email successfuly send.')
            } else {
                reject('Email not send.')
            }
        }, time * 1000);
    })
}

async function sendEmails(emailsArr) {
    let allResponses = emailsArr.map((email) => {
        return sendEmail(email)
            .then((data) => {
                return data;

            })
            .catch((err) => {
                return err;
            })
    })

    let ans = await Promise.all(allResponses)
    // console.log(ans);

    ans.forEach((ele,idx)=>{
        console.log(ele,idx);
        
    })
}

sendEmails(emails)