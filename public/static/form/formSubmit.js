/*
{
    "name": "fdhhfn",
    "email": "yjmgm@mail.com",
    "state": "hrnry",
    "district": "mtum",
    "languages": [
        "utmtm"
    ],
    "phone": "tdukmtm",
    "whatsapp": "tjdtm",
    "social_media": null,
    "discord_community": false,
    "preferred_work": [
        "COLLATE",
        "SOS-HELP",
        "VERIFICATION"
    ],
    "preferred_days": [
        "MONDAY",
        "TUESDAY"
    ],
    "preferred_timings": [
        "7AM-10AM",
        "1PM-4PM"
    ],
    "specific_skills":"string"
}

*/

const URL = "https://covolnet.herokuapp.com/api/forms/volunteer/";

const csrftoken = document.querySelector("[name=csrfmiddlewaretoken]").value;

// test button
// const test = document.getElementById("test")

// submit button
const name = document.getElementById("name-input");
const state = document.getElementById("state-input");
const district = document.getElementById("district-input");

// Language
const englishRadio = document.getElementById("english-radio");
const hindiRadio = document.getElementById("hindi-radio");
const otherRadio = document.getElementById("chkOthers");
const otherLang = document.getElementById("other");

const language_array = [englishRadio, hindiRadio, otherRadio];

// phone
const phone = document.getElementById("phone");
const whatsapp = document.getElementById("whatsapp");
const instagram = document.getElementById("instagram");
const twitter = document.getElementById("twitter");

const social_media = [instagram, twitter];

// days of week
const MONDAY = document.getElementById("MONDAY");
const TUESDAY = document.getElementById("TUESDAY");
const WEDNESDAY = document.getElementById("WEDNESDAY");
const THURSDAY = document.getElementById("THURSDAY");
const FRIDAY = document.getElementById("FRIDAY");
const SATURDAY = document.getElementById("SATURDAY");
const SUNDAY = document.getElementById("SUNDAY");

const days_of_week = [
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
];

const _7to10am = document.getElementById("7AM-10AM");
const _10to1pm = document.getElementById("10AM-1PM");
const _1to4pm = document.getElementById("1PM-4PM");
const _4to7pm = document.getElementById("4PM-7PM");
const _7to9pm = document.getElementById("7PM-9PM");
const _9to11pm = document.getElementById("9PM-11PM");
const _11to1am = document.getElementById("11PM-1AM");
const _1to3am = document.getElementById("1AM-3AM");
const _3to5am = document.getElementById("3AM-5AM");
const _5to7am = document.getElementById("5AM-7AM");

const timing_list = [
  _7to10am,
  _10to1pm,
  _1to4pm,
  _4to7pm,
  _7to9pm,
  _9to11pm,
  _11to1am,
  _1to3am,
  _3to5am,
  _5to7am,
];

// Preferred Work
const VERIFICATION = document.getElementById("VERIFICATION");
const SOS_HELP = document.getElementById("SOS-HELP");
const COLLATE = document.getElementById("COLLATE");

const preferred_work = [VERIFICATION, COLLATE, SOS_HELP];

// discord community
const discord_yes = document.getElementById("discord-yes");

// specific skills
const specific_skills = document.getElementById("specific_skills");

// makeObject
const makeObject = ({
  name,
  state,
  district,
  language_array,
  days_of_week,
  timing_list,
}) => {
  let languages = [];
  language_array.forEach((language) => {
    if (language.checked) {
      if (language.id == "english-radio") languages.push("ENGLISH");
      if (language.id == "hindi-radio") languages.push("HINDI");
      if (language.id == "chkOthers") languages.push(otherLang.value);
    }
  });
  let preferred_days = [];
  days_of_week.forEach((day) => {
    if (day.checked) preferred_days.push(day.id);
  });
  let preferred_timings = [];
  timing_list.forEach((time) => {
    // console.log(time)
    if (time.checked) preferred_timings.push(time.id);
  });
  let preferred_work_list = [];
  preferred_work.forEach((work) => {
    if (work.checked) preferred_work_list.push(work.id);
  });

  discord_community = discord_yes.checked ? true : false;
  // console.log(languages);
  let obj = {
    name: name.value,
    state: state.value,
    district: district.value,
    phone: phone.value,
    whatsapp: whatsapp.value,
    languages,
    preferred_days,
    preferred_timings,
    social_media: social_media.map((social) => social.value),
    preferred_work: preferred_work_list,
    discord_community,
    specific_skills: specific_skills.value,
    email: "xyz@gmail.com",
  };
  return obj;
};

// test.addEventListener('click', (event) => {
//     event.preventDefault()
//     // let obj = makeObject({name, state, district,
//     //                         language_array, days_of_week,
//     //                         timing_list})

// })

async function sendFetchReq(obj) {
  var http = new XMLHttpRequest();
  http.open("POST", URL, true);
  http.setRequestHeader("Content-type", "application/json");
  http.setRequestHeader("Access-Control-Allow-Origin", "*");
  http.setRequestHeader("CSRFToken", csrftoken);
  http.onload = () => console.log(this.repsonseText);
  http.send(JSON.stringify(obj));
}

async function openForm() {
  let obj = makeObject({
    name,
    state,
    district,
    language_array,
    days_of_week,
    timing_list,
  });
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  });

  const data = await response.json();
  console.log(data);
  document.getElementById("myForm").style.display = "block";
}
