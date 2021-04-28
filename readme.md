## Installation

python version == 3.8

```
cd covolnet
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

```

In `covolnet/covolnet/settings.py` provide valid database credentrials


## API DOCS

### New Volunteer
```   
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
```
Sample body of the post request to create new volunteer.
request url = ```'/api/forms/volunteer/'```

### Possible 'preferred_timings'
 ```["7AM-10AM",  "10AM-1PM", "1PM-4PM", "4PM-7PM","7PM-9PM","9PM-11PM","11PM-1AM","1AM-3AM", "3AM-5AM", "5AM-7AM" ]``` Can  have multiple values
### Possible 'preferred_work'
```['VERIFICATION','COLLATE', 'SOS-HELP',]``` can have multiple values
### Possible 'preferred_days'
```['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY']```  can have multiple values
