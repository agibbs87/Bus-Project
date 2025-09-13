/**
 * @fileoverview This file contains the main application logic for the bus route finding system
 * @author Anthony Gibbs <antgibbs878@gmail.com>
 * @version 1.0.0
 * @date 2025-09-12
 * @lastModified 2025-09-12 Anthony Gibbs
 * @todoList General areas/walking features, custom time selection, custom route selection, connection to Spot App for CS
 */
const routesData = {
  "MonTuesWedThurs": [
    {
      "name": "WS Out",
      "stops": [
        "Union", "Physical Facilities", "Bunn Hill Access", "New York", "Ackley", 
        "Harrison", "Roberts", "Willow", "Burbank", "Cleveland", "Main and Floral", 
        "Matthews", "Crestmont", "Helen", "Schiller", "Clarke", "Cedar", "Arthur", 
        "Main and Murray", "Front", "Court and Hawley", "UDC"
      ],
      "times": [
        "07:15", "07:30", "07:50", "08:05", "08:55", "09:10", "09:30", "09:45",
        "10:35", "10:50", "11:10", "11:25", "12:15", "13:05",
        "14:30", "14:45", "15:45", "16:10", "17:10", "17:50",
        "18:35", "18:45", "19:30", "19:45", "20:30", "21:45", "22:45", "23:45"
      ]
    },

    {
        "name": "DCL In",
        "stops": [
          "UDC", "Leroy and Front", "Leroy and Murray", "Chestnut", "Laurel", 
          "Leroy and Beethoven", "Riverside and Beethoven", "Margaret", "Columbus", 
          "Elfred", "Ethel", "Academic A", "Union"
        ],
        "times":[
          "00:10","07:40", "07:55", "08:15", "08:30", "09:20", "09:35", "09:55", "10:05", "11:00", "11:15", "11:35", "11:50", "12:25",
          "12:40", "13:30", "14:55", "15:10", "16:10", "16:35", "17:35", "18:15",
          "19:00", "19:10", "19:55", "20:10", "20:55", "22:10", "23:10"
        ]
    },
    {
        "name": "DCL Out",
        "stops": [
          "Union", "Physical Facilities","Bunn Hill Access","Ethel","Elfred","Columbus","Margaret",
          "Riverside and Beethoven","Leroy and Beethoven","Laurel","Chestnut","Leroy and Murray",
          "Riverside and Front","UDC"
        ],
        "times":[
          "07:00", "07:15", "08:05", "08:20", "08:40", "08:55", "09:45", "10:00", "10:20", "10:35", "11:25", "11:40", "12:15",
          "12:50", "13:10", "13:55", "14:45", "15:20", "15:35", "16:35", "17:00", "17:25", "17:45", "18:15", "18:40", "19:35",
          "20:15", "20:45", "21:15", "22:20", "23:00", "23:45"
        ]
    },
    {
        "name": "WS In",
        "stops": [
          "UDC", "Court and Hawley", "Front", "Main and Murray", "Mather", "Cedar", "Clarke", "Schiller", "Helen",
          "Crestmont", "Crary", "Main and Floral", "Cleveland", "Burbank", "Willow", "Roberts", "Harrison",
          "Floral and St. Charles", "Cook", "Academic A", "Union"
        ],
        "times":[
          "00:05","07:20", "07:35", "08:25", "08:40", "09:00", "09:15", "10:05", "10:20", "10:40", "11:00",
          "11:45", "12:00", "12:40", "13:10", "13:30", "14:15", "15:05", "15:40", "15:55", "16:55", "17:20",
          "17:45", "18:05", "18:35", "19:00", "19:55", "20:35", "21:05", "21:35", "22:40",
          "23:20"
        ]
    },
    {
        "name": "UDC Out",
        "stops": ["Union","UDC"],
        "times":[
          "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00",
          "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
          "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
        ]
    },
    {
        "name": "UDC In",
        "stops": ["UDC","Union"],
        "times":[
          "07:45", "08:15", "08:45", "09:15", "09:45", "10:15", "10:45", "11:15", "11:45", "12:15",
          "12:45", "13:15", "13:45", "14:15", "14:45", "15:15", "15:45", "16:15", "16:45", "17:15",
          "17:45", "18:15", "18:45", "19:15", "19:45", "20:15", "20:45", "21:15", "21:45"
        ]
    },
    {
        "name": "MS Out",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Baker", "Albert", 
          "Main and St. Charles", "Baldwin", "Pharmacy School", "Nursing School", "Gannett Building",
          "Lester", "Main and Floral", "Matthews", "Crestmont", "Helen", "Schiller", "Clarke",
          "Cedar", "Arthur", "Main and Murray", "Oak and Seminary", "Oak and Leroy", "UDC"
        ],
        "times":[
          "07:30", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30",
          "17:30", "18:30", "19:30", "20:30", "21:30"
        ]
    },
    {
        "name": "DS In",
        "stops": [
          "UDC", "BC Junction", "Mirabito Stadium", "Moose", "Webster", "Jackson",
          "Conklin and Tompkins", "Alfred", "Telegraph", "Park Diner", "Livingston", "Tremont",
          "South Washington", "Vestal and Rush", "Brookfield", "Hawthorne", "Larchmont", "Union"
        ],
        "times":[
          "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
          "18:00", "19:00", "20:00", "21:00", "21:55"
        ]
    },
    {
        "name": "DS Out",
        "stops": [
          "Union", "Larchmont", "Hawthorne", "Brookfield", "Vestal and Rush", "South Washington",
          "Tremont", "Livingston", "Park Diner", "Telegraph", "Alfred", "Conklin and Tompkins",
          "Jackson", "Webster", "Moose", "Mirabito Stadium", "BC Junction", "UDC"
        ],
        "times":[
          "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
          "17:00", "18:00", "19:00", "20:00", "22:15"
        ]
    },
    {
        "name": "MS In",
        "stops": [
          "UDC", "Front and Leroy", "Main and Murray", "Mather", "Cedar", "Clarke", "Schiller", "Helen",
          "Crestmont", "Crary", "Main and Floral", "Lester", "Gannett Building", "Nursing School",
          "Pharmacy School", "Baldwin", "Main and St. Charles", "First", "Academic A", "Union"
        ],
        "times":[
          "07:30", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30",
          "17:30", "18:30", "19:30", "20:30", "22:35"
        ]
    },
    {
        "name": "ITC/UClub",
        "stops": [
          "Mohawk", "Newing", "Couper Administration", "East Gym", "ITC", "UClub", "Meadows",
          "Hayes", "Oxford and Murray Hill", "Washington and Lehigh", "Mohawk"
        ],
        "times":[
          "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00",
          "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
          "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
        ]
    },
    {
        "name": "UClub",
        "stops": [
          "Mohawk", "Newing", "Couper Administration", "East Gym", "UClub", "Meadows",
          "Hayes", "Oxford and Murray Hill", "Washington and Lehigh", "Mohawk"
        ],
        "times":["22:00", "22:30", "23:00", "23:30"]
    },
    {
        "name": "Vestal Shopping",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Rivera Ridge #1", "Rivera Ridge #2",
          "Hollybrook", "Burris and Rano", "Target", "Barnes & Noble", "Walmart", "Old Navy",
          "Staples", "Bunn Hill Access", "Physical Facilities", "Academic A"
        ],
        "times":["14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"]
    },
    {
        "name": "Oakdale Commons",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Oakdale Commons", "Wegmans", "Aldi", "Five Below",
          "Academic A"
        ],
        "times":["14:25", "15:25", "16:25", "17:25", "18:25", "19:25", "20:25", "21:25"]
    }
  ],
  "Friday": [
    {
      "name": "WS Out",
      "stops": [
        "Union", "Physical Facilities", "Bunn Hill Access", "New York", "Ackley", 
        "Harrison", "Roberts", "Willow", "Burbank", "Cleveland", "Main and Floral", 
        "Matthews", "Crestmont", "Helen", "Schiller", "Clarke", "Cedar", "Arthur", 
        "Main and Murray", "Front", "Court and Hawley", "UDC"
      ],
      "times": [
        "07:15", "07:30", "07:50", "08:05", "08:55", "09:10", "09:30", "09:45",
        "10:35", "10:50", "11:10", "11:25", "12:15", "13:05",
        "14:30", "14:45", "15:45", "16:10", "17:10", "17:50",
        "18:35", "18:45", "19:30", "19:45", "20:30", "21:15", "21:45", "23:00"
      ]
    },

    {
        "name": "DCL In",
        "stops": [
          "UDC", "Leroy and Front", "Leroy and Murray", "Chestnut", "Laurel", 
          "Leroy and Beethoven", "Riverside and Beethoven", "Margaret", "Columbus", 
          "Elfred", "Ethel", "Academic A", "Union"
        ],
        "times":[
          "07:40", "07:55", "08:15", "08:30", "09:20", "09:35", "09:55", "10:05", "11:00", "11:15", "11:35", "11:50", "12:25",
          "12:40", "13:30", "14:55", "15:10", "16:10", "16:35", "17:35", "18:15",
          "19:00", "19:10", "19:55", "20:10", "20:55", "21:40", "22:10", "23:25"
        ]
    },
    {
        "name": "DCL Out",
        "stops": [
          "Union", "Physical Facilities","Bunn Hill Access","Ethel","Elfred","Columbus","Margaret",
          "Riverside and Beethoven","Leroy and Beethoven","Laurel","Chestnut","Leroy and Murray",
          "Riverside and Front","UDC"
        ],
        "times":[
          "07:00", "07:15", "08:05", "08:20", "08:40", "08:55", "09:45", "10:00", "10:20", "10:35", "11:25", "11:40", "12:15",
          "12:50", "13:10", "13:55", "14:45", "15:20", "15:35", "16:35", "17:00", "17:25", "17:45", "18:15", "18:40", "19:35",
          "20:15", "20:45", "21:15", "22:20", "23:15"
        ]
    },
    {
        "name": "WS In",
        "stops": [
          "UDC", "Court and Hawley", "Front", "Main and Murray", "Mather", "Cedar", "Clarke", "Schiller", "Helen",
          "Crestmont", "Crary", "Main and Floral", "Cleveland", "Burbank", "Willow", "Roberts", "Harrison",
          "Floral and St. Charles", "Cook", "Academic A", "Union"
        ],
        "times":[
          "07:20", "07:35", "08:25", "08:40", "09:00", "09:15", "10:05", "10:20", "10:40", "11:00",
          "11:45", "12:00", "12:40", "13:10", "13:30", "14:15", "15:05", "15:40", "15:55", "16:55", "17:20",
          "17:45", "18:05", "18:35", "19:00", "19:55", "20:35", "21:05", "21:35", "22:40",
          "23:35"
        ]
    },
    {
        "name": "UDC Out",
        "stops": ["Union","UDC"],
        "times":[
          "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00",
          "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
          "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
        ]
    },
    {
        "name": "UDC In",
        "stops": ["UDC","Union"],
        "times":[
          "07:45", "08:15", "08:45", "09:15", "09:45", "10:15", "10:45", "11:15", "11:45", "12:15",
          "12:45", "13:15", "13:45", "14:15", "14:45", "15:15", "15:45", "16:15", "16:45", "17:15",
          "17:45", "18:15", "18:45", "19:15", "19:45", "20:15", "20:45", "21:15", "21:45"
        ]
    },
    {
        "name": "MS Out",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Baker", "Albert", 
          "Main and St. Charles", "Baldwin", "Pharmacy School", "Nursing School", "Gannett Building",
          "Lester", "Main and Floral", "Matthews", "Crestmont", "Helen", "Schiller", "Clarke",
          "Cedar", "Arthur", "Main and Murray", "Oak and Seminary", "Oak and Leroy", "UDC"
        ],
        "times":[
          "07:30", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30",
          "17:30", "18:30", "19:30", "20:30", "21:30"
        ]
    },
    {
        "name": "DS In",
        "stops": [
          "UDC", "BC Junction", "Mirabito Stadium", "Moose", "Webster", "Jackson",
          "Conklin and Tompkins", "Alfred", "Telegraph", "Park Diner", "Livingston", "Tremont",
          "South Washington", "Vestal and Rush", "Brookfield", "Hawthorne", "Larchmont", "Union"
        ],
        "times":[
          "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
          "18:00", "19:00", "20:00", "21:00", "21:55"
        ]
    },
    {
        "name": "DS Out",
        "stops": [
          "Union", "Larchmont", "Hawthorne", "Brookfield", "Vestal and Rush", "South Washington",
          "Tremont", "Livingston", "Park Diner", "Telegraph", "Alfred", "Conklin and Tompkins",
          "Jackson", "Webster", "Moose", "Mirabito Stadium", "BC Junction", "UDC"
        ],
        "times":[
          "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
          "17:00", "18:00", "19:00", "20:00", "22:15"
        ]
    },
    {
        "name": "MS In",
        "stops": [
          "UDC", "Front and Leroy", "Main and Murray", "Mather", "Cedar", "Clarke", "Schiller", "Helen",
          "Crestmont", "Crary", "Main and Floral", "Lester", "Gannett Building", "Nursing School",
          "Pharmacy School", "Baldwin", "Main and St. Charles", "First", "Academic A", "Union"
        ],
        "times":[
          "07:30", "08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30",
          "17:30", "18:30", "19:30", "20:30", "22:35"
        ]
    },
    {
        "name": "ITC/UClub",
        "stops": [
          "Mohawk", "Newing", "Couper Administration", "East Gym", "ITC", "UClub", "Meadows",
          "Hayes", "Oxford and Murray Hill", "Washington and Lehigh", "Mohawk"
        ],
        "times":[
          "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00",
          "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
          "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
        ]
    },
    {
        "name": "UClub",
        "stops": [
          "Mohawk", "Newing", "Couper Administration", "East Gym", "UClub", "Meadows",
          "Hayes", "Oxford and Murray Hill", "Washington and Lehigh", "Mohawk"
        ],
        "times":["22:00", "22:30", "23:00", "23:30"]
    },
    {
        "name": "Vestal Shopping",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Rivera Ridge #1", "Rivera Ridge #2",
          "Hollybrook", "Burris and Rano", "Target", "Barnes & Noble", "Walmart", "Old Navy",
          "Staples", "Bunn Hill Access", "Physical Facilities", "Academic A"
        ],
        "times":["14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"]
    },
    {
        "name": "Oakdale Commons",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Oakdale Commons", "Wegmans", "Aldi", "Five Below",
          "Academic A"
        ],
        "times":["14:25", "15:25", "16:25", "17:25", "18:25", "19:25", "20:25", "21:25"]
    },
    {
        "name": "Downtown Express (Before 1 AM)",
        "stops": [
          "Union", "Hayes", "Meadows", "UClub", "Late Nite Downtown", "Academic A"
        ],
        "times":["00:00", "00:30", "22:00", "22:30", "22:45", "23:00", "23:15", "23:45"]
    },
    {
        "name": "Downtown Express (After 1 AM)",
        "stops": [
          "Union", "Late Nite Downtown", "Academic A"
        ],
        "times":["01:00", "01:30", "01:45", "02:00", "02:15", "02:30", "02:45", "03:00", "03:15"]
    },
    {
      "name": "Late Nite WS Out",
      "stops": [
        "Union","New York", "Ackley", 
        "Harrison", "Roberts", "Willow", "Burbank", "Cleveland", "Main and Floral", 
        "Matthews", "Crestmont", "Helen", "Schiller", "Clarke", "Cedar", "Arthur", 
        "Main and Murray", "Front", "Late Nite Downtown"
      ],
      "times": ["00:45", "01:00", "02:00", "03:00"]
    },
    {
        "name": "Late Nite DCL In",
        "stops": [
          "Late Nite Downtown", "Leroy and Front", "Leroy and Murray", "Chestnut", "Laurel", 
          "Leroy and Beethoven", "Riverside and Beethoven", "Margaret", "Columbus", 
          "Elfred", "Ethel", "Academic A", "Union"
        ],
        "times":["01:10", "01:25", "02:25", "03:25"]
    },
    {
        "name": "Late Nite DCL Out",
        "stops": [
          "Union","Ethel","Elfred","Columbus","Margaret",
          "Riverside and Beethoven","Leroy and Beethoven","Laurel","Chestnut","Leroy and Murray",
          "Riverside and Front","Late Nite Downtown"
        ],
        "times":["00:00", "00:15", "01:00", "01:30", "02:15", "03:00"]
    },
    {
        "name": "Late Nite WS In",
        "stops": [
          "Late Nite Downtown", "Court and Hawley", "Front", "Main and Murray", "Mather", "Cedar", "Clarke", "Schiller", "Helen",
          "Crestmont", "Crary", "Main and Floral", "Cleveland", "Burbank", "Willow", "Roberts", "Harrison",
          "Floral and St. Charles", "Cook", "Academic A", "Union"
        ],
        "times":["00:20", "00:35", "01:20", "01:50", "02:35", "03:20"]
    }
  ],
  "Saturday": [
    {
      "name": "WS Out",
      "stops": [
        "Union", "Physical Facilities", "Bunn Hill Access", "New York", "Ackley", 
        "Harrison", "Roberts", "Willow", "Burbank", "Cleveland", "Main and Floral", 
        "Matthews", "Crestmont", "Helen", "Schiller", "Clarke", "Cedar", "Arthur", 
        "Main and Murray", "Front", "Court and Hawley", "UDC"
      ],
      "times": [
        "09:15", "10:00", "10:15", "11:35", "12:15", "13:00", "14:15", "15:15", "16:00", 
        "16:55", "20:05", "21:00", "22:00", "23:00"
      ]
    },

    {
        "name": "DCL In",
        "stops": [
          "UDC", "Leroy and Front", "Leroy and Murray", "Chestnut", "Laurel", 
          "Leroy and Beethoven", "Riverside and Beethoven", "Margaret", "Columbus", 
          "Elfred", "Ethel", "Academic A", "Union"
        ],
        "times":[
          "09:40", "10:25", "10:40", "12:00", "12:40", "13:25", "14:40", "15:40", "16:25",
          "17:20", "19:10", "20:30", "21:25", "22:25", "23:25"
        ]
    },
    {
        "name": "DCL Out",
        "stops": [
          "Union", "Physical Facilities","Bunn Hill Access","Ethel","Elfred","Columbus","Margaret",
          "Riverside and Beethoven","Leroy and Beethoven","Laurel","Chestnut","Leroy and Murray",
          "Riverside and Front","UDC"
        ],
        "times":[
          "08:45", "09:30", "10:45", "11:30", "12:55", "13:45", "14:30", "15:35", "16:30", "18:00",
          "19:30", "20:15", "21:30", "22:15", "23:15"
        ]
    },
    {
        "name": "WS In",
        "stops": [
          "UDC", "Court and Hawley", "Front", "Main and Murray", "Mather", "Cedar", "Clarke", "Schiller", "Helen",
          "Crestmont", "Crary", "Main and Floral", "Cleveland", "Burbank", "Willow", "Roberts", "Harrison",
          "Floral and St. Charles", "Cook", "Academic A", "Union"
        ],
        "times":[
          "09:05", "09:50", "11:10", "11:50", "13:15", "14:10", "14:50", "16:00", "16:50", "18:20", "19:50", 
          "20:35", "21:50", "22:35", "23:35"
        ]
    },
    {
        "name": "MS Out",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Baker", "Albert", 
          "Main and St. Charles", "Baldwin", "Pharmacy School", "Nursing School", "Gannett Building",
          "Lester", "Main and Floral", "Matthews", "Crestmont", "Helen", "Schiller", "Clarke",
          "Cedar", "Arthur", "Main and Murray", "Oak and Seminary", "Oak and Leroy", "UDC"
        ],
        "times":[
          "11:00", "13:00", "15:00", "17:45"
        ]
    },
    {
        "name": "DS In",
        "stops": [
          "UDC", "BC Junction", "Mirabito Stadium", "Moose", "Webster", "Jackson",
          "Conklin and Tompkins", "Alfred", "Telegraph", "Park Diner", "Livingston", "Tremont",
          "South Washington", "Vestal and Rush", "Brookfield", "Hawthorne", "Larchmont", "Union"
        ],
        "times":[
          "11:30", "13:30", "16:30", "18:15" 
        ]
    },
    {
        "name": "DS Out",
        "stops": [
          "Union", "Larchmont", "Hawthorne", "Brookfield", "Vestal and Rush", "South Washington",
          "Tremont", "Livingston", "Park Diner", "Telegraph", "Alfred", "Conklin and Tompkins",
          "Jackson", "Webster", "Moose", "Mirabito Stadium", "BC Junction", "UDC"
        ],
        "times":[
          "10:00", "12:00", "14:00", "16:45", "18:45"
        ]
    },
    {
        "name": "MS In",
        "stops": [
          "UDC", "Front and Leroy", "Main and Murray", "Mather", "Cedar", "Clarke", "Schiller", "Helen",
          "Crestmont", "Crary", "Main and Floral", "Lester", "Gannett Building", "Nursing School",
          "Pharmacy School", "Baldwin", "Main and St. Charles", "First", "Academic A", "Union"
        ],
        "times":[
          "10:30", "12:30", "14:30", "17:15", "19:15"
        ]
    },
    {
        "name": "UClub",
        "stops": [
          "Mohawk", "Newing", "Couper Administration", "East Gym", "UClub", "Meadows",
          "Hayes", "Oxford and Murray Hill", "Washington and Lehigh", "Mohawk"
        ],
        "times":["09:00", "09:30", "10:15", "11:00", "11:45", "12:15", "12:45", "13:15", "13:45", 
          "14:15", "14:45", "15:15", "15:45", "16:15", "16:45", "17:15", "17:45", "18:15", "18:45", 
          "19:15", "19:45", "20:15", "20:45", "21:15", "21:45", "22:15", "22:45", "23:45"]
    },
    {
        "name": "Vestal Shopping",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Rivera Ridge #1", "Rivera Ridge #2",
          "Hollybrook", "Burris and Rano", "Target", "Barnes & Noble", "Walmart", "Old Navy",
          "Staples", "Bunn Hill Access", "Physical Facilities", "Academic A"
        ],
        "times":["10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:15", "16:00", "16:45", "17:30", "18:15", "19:00", "19:45", "20:30", "21:15"]
    },
    {
        "name": "Oakdale Commons",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Oakdale Commons", "Wegmans", "Aldi", "Five Below",
          "Academic A"
        ],
        "times":["11:00", "12:20", "13:40", "15:00", "16:20", "18:10", "19:30", "20:50"]
    },
    {
        "name": "Downtown Express (Before 1 AM)",
        "stops": [
          "Union", "Hayes", "Meadows", "UClub", "Late Nite Downtown", "Academic A"
        ],
        "times":["00:00", "00:30", "21:30", "22:00", "22:30", "22:45", "23:00", "23:15", "23:45"]
    },
    {
        "name": "Downtown Express (After 1 AM)",
        "stops": [
          "Union", "Late Nite Downtown", "Academic A"
        ],
        "times":["01:00", "01:30", "01:45", "02:00", "02:15", "02:30", "02:45", "03:00", "03:15"]
    },
    {
      "name": "Late Nite WS Out",
      "stops": [
        "Union","New York", "Ackley", 
        "Harrison", "Roberts", "Willow", "Burbank", "Cleveland", "Main and Floral", 
        "Matthews", "Crestmont", "Helen", "Schiller", "Clarke", "Cedar", "Arthur", 
        "Main and Murray", "Front", "Late Nite Downtown"
      ],
      "times": ["00:45", "01:00", "02:00", "03:00"]
    },
    {
        "name": "Late Nite DCL In",
        "stops": [
          "Late Nite Downtown", "Leroy and Front", "Leroy and Murray", "Chestnut", "Laurel", 
          "Leroy and Beethoven", "Riverside and Beethoven", "Margaret", "Columbus", 
          "Elfred", "Ethel", "Academic A", "Union"
        ],
        "times":["01:10", "01:25", "02:25", "03:25"]
    },
    {
        "name": "Late Nite DCL Out",
        "stops": [
          "Union","Ethel","Elfred","Columbus","Margaret",
          "Riverside and Beethoven","Leroy and Beethoven","Laurel","Chestnut","Leroy and Murray",
          "Riverside and Front","Late Nite Downtown"
        ],
        "times":["00:00", "00:15", "01:00", "01:30", "02:15", "03:00"]
    },
    {
        "name": "Late Nite WS In",
        "stops": [
          "Late Nite Downtown", "Court and Hawley", "Front", "Main and Murray", "Mather", "Cedar", "Clarke", "Schiller", "Helen",
          "Crestmont", "Crary", "Main and Floral", "Cleveland", "Burbank", "Willow", "Roberts", "Harrison",
          "Floral and St. Charles", "Cook", "Academic A", "Union"
        ],
        "times":["00:20", "00:35", "01:20", "01:50", "02:35", "03:20"]
    }
  ],
  "Sunday": [
    {
      "name": "WS Out",
      "stops": [
        "Union", "Physical Facilities", "Bunn Hill Access", "New York", "Ackley", 
        "Harrison", "Roberts", "Willow", "Burbank", "Cleveland", "Main and Floral", 
        "Matthews", "Crestmont", "Helen", "Schiller", "Clarke", "Cedar", "Arthur", 
        "Main and Murray", "Front", "Court and Hawley", "UDC"
      ],
      "times": [
        "00:00", "9:15", "10:00", "10:15", "11:35", "12:15", "13:00", "14:15", "15:15", "16:00", 
        "16:55", "20:05", "21:00", "21:45", "22:30", "22:45"
      ]
    },

    {
        "name": "DCL In",
        "stops": [
          "UDC", "Leroy and Front", "Leroy and Murray", "Chestnut", "Laurel", 
          "Leroy and Beethoven", "Riverside and Beethoven", "Margaret", "Columbus", 
          "Elfred", "Ethel", "Academic A", "Union"
        ],
        "times":[
          "00:25","09:40", "10:25", "10:40", "12:00", "12:40", "13:25", "14:40", "15:40", "16:25",
          "17:20", "19:10", "20:30", "21:25", "22:10", "22:55", "23:10"
        ]
    },
    {
        "name": "DCL Out",
        "stops": [
          "Union", "Physical Facilities","Bunn Hill Access","Ethel","Elfred","Columbus","Margaret",
          "Riverside and Beethoven","Leroy and Beethoven","Laurel","Chestnut","Leroy and Murray",
          "Riverside and Front","UDC"
        ],
        "times":[
          "08:45", "09:30", "10:45", "11:30", "12:55", "13:45", "14:30", "15:35", "16:30", "18:00",
          "19:30", "20:15", "21:25", "22:00", "22:45", "23:15"
        ]
    },
    {
        "name": "WS In",
        "stops": [
          "UDC", "Court and Hawley", "Front", "Main and Murray", "Mather", "Cedar", "Clarke", "Schiller", "Helen",
          "Crestmont", "Crary", "Main and Floral", "Cleveland", "Burbank", "Willow", "Roberts", "Harrison",
          "Floral and St. Charles", "Cook", "Academic A", "Union"
        ],
        "times":[
          "09:05", "09:50", "11:10", "11:50", "13:15", "14:10", "14:50", "16:00", "16:50", "18:20", "19:50", 
          "20:35", "21:45", "22:20", "23:05", "23:35"
        ]
    },
    {
        "name": "MS Out",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Baker", "Albert", 
          "Main and St. Charles", "Baldwin", "Pharmacy School", "Nursing School", "Gannett Building",
          "Lester", "Main and Floral", "Matthews", "Crestmont", "Helen", "Schiller", "Clarke",
          "Cedar", "Arthur", "Main and Murray", "Oak and Seminary", "Oak and Leroy", "UDC"
        ],
        "times":[
          "11:00", "13:00", "15:00", "17:45"
        ]
    },
    {
        "name": "DS In",
        "stops": [
          "UDC", "BC Junction", "Mirabito Stadium", "Moose", "Webster", "Jackson",
          "Conklin and Tompkins", "Alfred", "Telegraph", "Park Diner", "Livingston", "Tremont",
          "South Washington", "Vestal and Rush", "Brookfield", "Hawthorne", "Larchmont", "Union"
        ],
        "times":[
          "11:30", "13:30", "16:30", "18:15" 
        ]
    },
    {
        "name": "DS Out",
        "stops": [
          "Union", "Larchmont", "Hawthorne", "Brookfield", "Vestal and Rush", "South Washington",
          "Tremont", "Livingston", "Park Diner", "Telegraph", "Alfred", "Conklin and Tompkins",
          "Jackson", "Webster", "Moose", "Mirabito Stadium", "BC Junction", "UDC"
        ],
        "times":[
          "10:00", "12:00", "14:00", "16:45", "18:45"
        ]
    },
    {
        "name": "MS In",
        "stops": [
          "UDC", "Front and Leroy", "Main and Murray", "Mather", "Cedar", "Clarke", "Schiller", "Helen",
          "Crestmont", "Crary", "Main and Floral", "Lester", "Gannett Building", "Nursing School",
          "Pharmacy School", "Baldwin", "Main and St. Charles", "First", "Academic A", "Union"
        ],
        "times":[
          "10:30", "12:30", "14:30", "17:15", "19:15"
        ]
    },
    {
        "name": "UClub",
        "stops": [
          "Mohawk", "Newing", "Couper Administration", "East Gym", "UClub", "Meadows",
          "Hayes", "Oxford and Murray Hill", "Washington and Lehigh", "Mohawk"
        ],
        "times":["09:00", "09:30", "10:15", "11:00", "11:45", "12:15", "12:45", "13:15", "13:45", 
          "14:15", "14:45", "15:15", "15:45", "16:15", "16:45", "17:15", "17:45", "18:15", "18:45", 
          "19:15", "19:45", "20:15", "20:45", "21:15", "21:45", "22:15", "22:45", "23:45"]
    },
    {
        "name": "Vestal Shopping",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Rivera Ridge #1", "Rivera Ridge #2",
          "Hollybrook", "Burris and Rano", "Target", "Barnes & Noble", "Walmart", "Old Navy",
          "Staples", "Bunn Hill Access", "Physical Facilities", "Academic A"
        ],
        "times":["10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:15", "16:00", "16:45", "17:30", "18:15", "19:00", "19:45", "20:30", "21:15"]
    },
    {
        "name": "Oakdale Commons",
        "stops": [
          "Union", "Physical Facilities", "Bunn Hill Access", "Oakdale Commons", "Wegmans", "Aldi", "Five Below",
          "Academic A"
        ],
        "times":["11:00", "12:20", "13:40", "15:00", "16:20", "18:10", "19:30", "20:50", "22:10"]
    }
  ]
};

// Create a mapping from option values to display names
function createStopMapping() {
    const stopMapping = {
        // CS Only
        "eng": "Engineering Building",
        "dshs": "Decker Student Health Services", "wc": "Welcome Center",
        "wg": "West Gym", "mcg": "McGuire", "clearview": "Clearview",
        "sus": "Susquehanna", "hillside": "Hillside", "mv": "Mountainview",
        "hinman": "Hinman",
        // Campus
        "union": "Union", "pf": "Physical Facilities", "bha": "Bunn Hill Access",
        "mohawk": "Mohawk", "newing": "Newing", "ca": "Couper Administration",
        "eg": "East Gym", "aa": "Academic A", 
        
        // Off Campus University
        "ps": "Pharmacy School", "ns": "Nursing School", "gb": "Gannett Building",
        "itc": "ITC", "udc": "UDC",
        
        // Floral Avenue
        "cook": "Cook", "fsc": "Floral and St. Charles", "ny": "New York",
        "ackley": "Ackley", "harrison": "Harrison", "roberts": "Roberts",
        "willow": "Willow", "burbank": "Burbank", "cleveland": "Cleveland",
        "mf": "Main and Floral",
        
        // Riverside Dr + Leroy St
        "ethel": "Ethel", "elfred": "Elfred", "columbus": "Columbus",
        "margaret": "Margaret", "rb": "Riverside and Beethoven",
        "lb": "Leroy and Beethoven", "laurel": "Laurel", "chestnut": "Chestnut",
        "lm": "Leroy and Murray", "rf": "Riverside and Front",
        
        // Main Street
        "baker": "Baker", "albert": "Albert", "msc": "Main and St. Charles",
        "baldwin": "Baldwin", "lester": "Lester", "first": "First",
        "matthews": "Matthews", "crestmont": "Crestmont", "crary": "Crary",
        "helen": "Helen", "schiller": "Schiller", "clarke": "Clarke",
        "cedar": "Cedar", "arthur": "Arthur", "mm": "Main and Murray", "mather": "Mather",
        
        // Downtown Binghamton
        "os": "Oak and Seminary", "ol": "Oak and Leroy", "fl": "Front and Leroy",
        "ch": "Court and Hawley", "sh": "State and Hawley",
        
        // Downtown Southside
        "larchmont": "Larchmont", "hawthorne": "Hawthorne", "brookfield": "Brookfield",
        "vr": "Vestal and Rush", "sw": "South Washington", "tremont": "Tremont",
        "livingston": "Livingston", "pd": "Park Diner", "telegraph": "Telegraph",
        "alfred": "Alfred", "ct": "Conklin and Tompkins", "jackson": "Jackson",
        "webster": "Webster", "moose": "Moose", "mirabito": "Mirabito Stadium",
        "bc": "BC Junction",
        
        // Vestal Shoppes
        "rr1": "Rivera Ridge #1", "rr2": "Rivera Ridge #2", "hollybrook": "Hollybrook",
        "burrisandrano": "Burris and Rano", "bandn": "Barnes & Noble",
        "walmart": "Walmart", "oldnavy": "Old Navy", "staples": "Staples",
        
        // Oakdale Commons
        "oc": "Oakdale Commons", "wegmans": "Wegmans", "aldi": "Aldi",
        "fivebelow": "Five Below",
        
        // UClub
        "uclub": "UClub", "meadows": "Meadows", "hayes": "Hayes",
        "omh": "Oxford and Murray Hill", "wl": "Washington and Lehigh",

        // Late Nite Stuff
        "lnd": "Late Nite Downtown"

    };
    
    return stopMapping;
}

// Create a mapping of travel time offsets from departure for each route
function getTravelTimeOffsets() {
  return {
      "WS Out": {
          "Union": 0,
          "Physical Facilities": 2,
          "Bunn Hill Access": 3,
          "New York": 5,
          "Ackley": 6,
          "Harrison": 6,
          "Roberts": 7,
          "Willow": 7,
          "Burbank": 8,
          "Cleveland": 8,
          "Main and Floral": 9,
          "Matthews": 10,
          "Crestmont": 11,
          "Helen": 11,
          "Schiller": 12,
          "Clarke": 12,
          "Cedar": 13,
          "Arthur": 14,
          "Main and Murray": 15,
          "Front": 17,
          "Court and Hawley": 20,
          "UDC": 25
      },
      "WS In": {
          "UDC": 0,
          "Court and Hawley": 1,
          "Front": 2,
          "Main and Murray": 3,
          "Mather": 3,
          "Cedar": 4,
          "Clarke": 5,
          "Schiller": 5,
          "Helen": 6,
          "Crestmont": 7,
          "Crary": 8,
          "Main and Floral": 9,
          "Cleveland": 10,
          "Burbank": 11,
          "Willow": 12,
          "Roberts": 14,
          "Harrison": 17,
          "Floral and St. Charles": 18,
          "Cook": 19,
          "Academic A": 23,
          "Union": 25
      },
      "DCL Out": {
          "Union": 0,
          "Physical Facilities": 1,
          "Bunn Hill Access": 2,
          "Ethel": 4,
          "Elfred": 5,
          "Columbus": 6,
          "Margaret": 7,
          "Riverside and Beethoven": 8,
          "Leroy and Beethoven": 8,
          "Laurel": 9,
          "Chestnut": 10,
          "Leroy and Murray": 11,
          "Riverside and Front": 14,
          "UDC": 18
      },
      "DCL In": {
          "UDC": 0,
          "Leroy and Front": 2,
          "Leroy and Murray": 3,
          "Chestnut": 4,
          "Laurel": 5,
          "Leroy and Beethoven": 6,
          "Riverside and Beethoven": 7,
          "Margaret": 8,
          "Columbus": 9,
          "Elfred": 13,
          "Ethel": 16,
          "Academic A": 18,
          "Union": 20
      },
      "UDC Out": {
          "Union": 0,
          "UDC": 15
      },
      "UDC In": {
          "UDC": 0,
          "Union": 15
      },
      "MS Out": {
          "Union": 0,
          "Physical Facilities": 2,
          "Bunn Hill Access": 2,
          "Baker": 5,
          "Albert": 6,
          "Main and St. Charles": 7,
          "Baldwin": 8,
          "Pharmacy School": 9,
          "Nursing School": 10,
          "Gannett Building": 11,
          "Lester": 11,
          "Main and Floral": 12,
          "Matthews": 13,
          "Crestmont": 14,
          "Helen": 15,
          "Schiller": 16,
          "Clarke": 16,
          "Cedar": 17,
          "Arthur": 17,
          "Main and Murray": 18,
          "Oak and Seminary": 20,
          "Oak and Leroy": 24,
          "UDC": 30
      },
      "MS In": {
          "UDC": 0,
          "Front and Leroy": 2,
          "Main and Murray": 3,
          "Mather": 4,
          "Cedar": 5,
          "Clarke": 6,
          "Schiller": 7,
          "Helen": 7,
          "Crestmont": 8,
          "Crary": 8,
          "Main and Floral": 9,
          "Lester": 10,
          "Gannett Building": 10,
          "Nursing School": 11,
          "Pharmacy School": 12,
          "Baldwin": 14,
          "Main and St. Charles": 18,
          "First": 21,
          "Academic A": 28,
          "Union": 30
      },
      "DS Out": {
          "Union": 0,
          "Larchmont": 3,
          "Hawthorne": 4,
          "Brookfield": 5,
          "Vestal and Rush": 6,
          "South Washington": 8,
          "Tremont": 9,
          "Livingston": 9,
          "Park Diner": 10,
          "Telegraph": 10,
          "Alfred": 10,
          "Conklin and Tompkins": 11,
          "Jackson": 12,
          "Webster": 12,
          "Moose": 13,
          "Mirabito Stadium": 14,
          "BC Junction": 15,
          "UDC": 25
      },
      "DS In": {
          "UDC": 0,
          "BC Junction": 3,
          "Mirabito Stadium": 4,
          "Moose": 5,
          "Webster": 6,
          "Jackson": 8,
          "Conklin and Tompkins": 10,
          "Alfred": 11,
          "Telegraph": 12,
          "Park Diner": 13,
          "Livingston": 14,
          "Tremont": 14,
          "South Washington": 15,
          "Vestal and Rush": 17,
          "Brookfield": 18,
          "Hawthorne": 19,
          "Larchmont": 20,
          "Union": 25
      },
      "ITC/UClub": {
          "Mohawk": 0,
          "Newing": 2,
          "Couper Administration": 3,
          "East Gym": 4,
          "ITC": 5,
          "UClub": 10,
          "Meadows": 12,
          "Hayes": 12,
          "Oxford and Murray Hill": 14,
          "Washington and Lehigh": 17,
          "Mohawk": 22
      },
      "UClub": {
          "Mohawk": 0,
          "Newing": 2,
          "Couper Administration": 3,
          "East Gym": 3,
          "UClub": 5,
          "Meadows": 6,
          "Hayes": 7,
          "Oxford and Murray Hill": 8,
          "Washington and Lehigh": 9,
          "Mohawk": 12
      },
      "Vestal Shopping": {
          "Union": 0,
          "Physical Facilities": 2,
          "Bunn Hill Access": 3,
          "Rivera Ridge #1": 5,
          "Rivera Ridge #2": 6,
          "Hollybrook": 7,
          "Burris and Rano": 8,
          "Target": 9,
          "Barnes & Noble": 12,
          "Walmart": 15,
          "Old Navy": 20,
          "Staples": 28,
          "Bunn Hill Access": 30,
          "Physical Facilities": 31,
          "Academic A": 45
      },
      "Oakdale Commons": {
          "Union": 0,
          "Physical Facilities": 2,
          "Bunn Hill Access": 3,
          "Oakdale Commons": 9,
          "Wegmans": 15,
          "Aldi": 18,
          "Five Below": 20,
          "Bunn Hill Access": 30,
          "Physical Facilities": 30,
          "Academic A": 35
      },
      "Downtown Express (Before 1 AM)": {
          "Union": 0,
          "Hayes": 3,
          "Meadows": 4,
          "UClub": 5,
          "Late Nite Downtown": 15,
          "Academic A": 30,
      },
      "Downtown Express (After 1 AM)": {
          "Union": 0,
          "Late Nite Downtown": 15,
          "UClub": 20,
          "Academic A": 30,
      },
      "Late Nite WS Out": {
          "Union": 0,
          "Physical Facilities": 2,
          "Bunn Hill Access": 3,
          "New York": 5,
          "Ackley": 6,
          "Harrison": 6,
          "Roberts": 7,
          "Willow": 7,
          "Burbank": 8,
          "Cleveland": 8,
          "Main and Floral": 9,
          "Matthews": 10,
          "Crestmont": 11,
          "Helen": 11,
          "Schiller": 12,
          "Clarke": 12,
          "Cedar": 13,
          "Arthur": 14,
          "Main and Murray": 15,
          "Front": 17,
          "Late Nite Downtown": 20
      },
      "Late Nite WS In": {
          "Late Nite Downtown": 0,
          "Court and Hawley": 1,
          "Front": 2,
          "Main and Murray": 3,
          "Mather": 3,
          "Cedar": 4,
          "Clarke": 5,
          "Schiller": 5,
          "Helen": 6,
          "Crestmont": 7,
          "Crary": 8,
          "Main and Floral": 9,
          "Cleveland": 10,
          "Burbank": 11,
          "Willow": 12,
          "Roberts": 14,
          "Harrison": 15,
          "Floral and St. Charles": 16,
          "Cook": 17,
          "Academic A": 20,
          "Union": 20
      },
      "Late Nite DCL Out": {
          "Union": 0,
          "Physical Facilities": 1,
          "Bunn Hill Access": 2,
          "Ethel": 4,
          "Elfred": 5,
          "Columbus": 6,
          "Margaret": 7,
          "Riverside and Beethoven": 8,
          "Leroy and Beethoven": 8,
          "Laurel": 9,
          "Chestnut": 10,
          "Leroy and Murray": 11,
          "Riverside and Front": 13,
          "Late Nite Downtown": 15
      },
      "Late Nite DCL In": {
          "Late Nite Downtown": 0,
          "Leroy and Front": 2,
          "Leroy and Murray": 3,
          "Chestnut": 4,
          "Laurel": 5,
          "Leroy and Beethoven": 6,
          "Riverside and Beethoven": 7,
          "Margaret": 8,
          "Columbus": 9,
          "Elfred": 13,
          "Ethel": 16,
          "Academic A": 18,
          "Union": 19
      },
  };
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners for auto-search when both fields are selected
  const startSelect = document.getElementById('starting');
  const endSelect = document.getElementById('ending');
  
  // Add small delay to avoid immediate search on change
  startSelect.addEventListener('change', function() {
    if (startSelect.value && endSelect.value) {
        setTimeout(findRoutes, 100); // Small delay for better UX
    }
  });
  
  endSelect.addEventListener('change', function() {
    if (startSelect.value && endSelect.value) {
      setTimeout(findRoutes, 100);
    }
  });
});

// Normalize stop names for matching
// Not necessary with current implementation 
// but kept for potential future use or human error
function normalizeStopName(stopName) {
    return stopName.toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/[&]/g, 'and')
        .trim();
}

// Get current time in minutes
function getCurrentTimeMinutes() {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
}

// Convert minutes back to time string with next day indicator
function minutesToTime(minutes, isNextDay = false) {
    // Handle next day times by subtracting 24 hours if needed
    let displayMinutes = minutes;

    const hours24 = Math.floor(displayMinutes / 60) % 24;
    const mins = displayMinutes % 60;
    
    let hours12 = hours24 % 12;
    if (hours12 === 0) hours12 = 12;
    const ampm = hours24 >= 12 ? "PM" : "AM";

    // Format time string from mins to HH:MM
    let timeStr = `${hours12}:${mins.toString().padStart(2, '0')} ${ampm}`;
    
    // Append next day indicator if applicable
    if (isNextDay) {
        timeStr += " (next day)";
    }

    return timeStr;
}

// Converts time to minutes since midnight
function timeToMinutes(timeStr) {
  if (!timeStr || timeStr.includes('See Spot App')) return null;

  const [hours, minutes] = timeStr.trim().replace(/\s*(AM|PM).*$/i, '').split(':').map(Number);
  const isNextDay = timeStr.includes("(next day)");
  let finalHours = hours;

  if (timeStr.trim().toUpperCase().includes("PM") && hours != 12){
      finalHours += 12;
  }
  else if (timeStr.trim().toUpperCase().includes("AM") && hours == 12){
      finalHours = 0;
  }

  let totalMinutes = finalHours * 60 + minutes;
  if (isNextDay) totalMinutes += 1440;

  return totalMinutes;
}

// Calculate travel time between two stops using time offsets
function calculateTravelTime(route, startStop, endStop) {
  const timeOffsets = getTravelTimeOffsets();
  const routeOffsets = timeOffsets[route.name];
      
  const startOffset = routeOffsets[startStop];
  const endOffset = routeOffsets[endStop];
    
  if (startOffset === undefined || endOffset === undefined) return null;
    
  return Math.abs(endOffset - startOffset);
}

// Function to truncate long stop names, purely for display purposes
function truncateStopName(stopName) {
  if (stopName.length > 20) {
    return stopName.substring(0, 17) + '...';
  }
  return stopName;
}

// Helper function to see if a route is circular
function isCircularRoute(routeName) {
    return ["ITC/UClub", "UClub"].includes(routeName);
}

// Get the next available departure time for a route
function getNextDeparture(route, currentTime) {
  // Grabs all valid times, converts to minutes, filters out invalid entries, and sorts them
  const validTimes = route.times
      .map(timeToMinutes)
      .filter(time => time !== null)
      .sort((a, b) => a - b);

  // If no valid times, return null
  if (validTimes.length === 0) return null;
  
  // Find next departure after current time
  let nextTime = validTimes.find(time => time > currentTime);
  let isNextDay = false;
    
  // If no time found today, take first time tomorrow
  if (!nextTime) {
      nextTime = validTimes[0];
      isNextDay = true;
  }
    
  return {time: nextTime, isNextDay};
}

function lateNiteCheck(){
  const body = document.querySelector('body');
  const now = new Date();
  const currentHour = now.getHours();
  const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });

  // Friday 9pm to Saturday 4am, OR Saturday 9pm to Sunday 4am
  const isLateNite = ((dayOfWeek === "Friday" || dayOfWeek === "Saturday") && 
      (currentHour >= 21 || currentHour < 4)) ||
      (dayOfWeek === "Sunday" && currentHour < 4);
  if (isLateNite) {
      // Late Nite
      body.style.backgroundColor = '#223f49ff';
      const h2 = document.createElement('h2');
      h2.textContent = 'Late Nite Hours';
      h2.style.color = 'white';
      h2.style.textAlign = 'center';
      const h1 = document.querySelector('h1');
      h1.insertAdjacentElement('afterend', h2);
      h1.style.color = 'white';
      const startingLabel = document.querySelector('label[for="starting"]');
      const endingLabel = document.querySelector('label[for="ending"]');
      startingLabel.style.color = 'white';
      endingLabel.style.color = 'white';
      document.getElementById('starting').value = 'lnd';
      document.getElementById('ending').value = 'union';
      findRoutes();
  }   
  else {
      // Regular hours
      body.style.backgroundColor = '#2596BE';
  }
}
// Main route finding function
function findRoutes() {
  // Get selected values from dropdown menus
  const startSelect = document.getElementById('starting');
  const endSelect = document.getElementById('ending');
  const resultsDiv = document.getElementById('results');
  
  const startValue = startSelect.value;
  const endValue = endSelect.value;
  
  // If either field is not selected, show message and return
  if (!startValue || !endValue) {
    resultsDiv.innerHTML = '<p>Please select both starting and ending locations.</p>';
    return;
  }
  
  // If both fields are the same, show message and return
  if (startValue === endValue) {
    resultsDiv.innerHTML = '<p>Starting and ending locations cannot be the same.</p>';
    return;
  }
  
  // Map selected values to display names
  const stopMapping = createStopMapping();
  const startStop = stopMapping[startValue];
  const endStop = stopMapping[endValue];

  // Campus Shuttle check
  const csRoutes = [
    "eng","dshs","wc","wg","mcg","clearview",
    "sus","hillside","mv","hinman",//"mohawk",
    "newing","ca","eg"
  ];
  // If both stops are on the Campus Shuttle route, show shuttle message
  if (csRoutes.includes(startValue) && csRoutes.includes(endValue)) {
    resultsDiv.innerHTML = `
      <div class="route-option cs-shuttle">
        <h3>Campus Shuttle Route</h3>
        <p>This trip is served by the Campus Shuttle.</p>
        <p>Please check the Spot app for the nearest shuttle and real-time tracking.</p>
      </div>
    `;
    return;
  }
    
  resultsDiv.innerHTML = '<p>Searching for routes...</p>';
  
  // Determine if today is a weekend or weekday to select appropriate routes
  if (new Date().toLocaleString('en-us', {  weekday: 'long' }) === 'Monday' || 
  new Date().toLocaleString('en-us', {  weekday: 'long' }) === 'Tuesday' ||
  new Date().toLocaleString('en-us', {  weekday: 'long' }) === 'Wednesday'||
  new Date().toLocaleString('en-us', {  weekday: 'long' }) === 'Thursday'){
      routesList = routesData.MonTuesWedThurs;
  }
  if (new Date().toLocaleString('en-us', {  weekday: 'long' }) === 'Friday'){
      routesList = routesData.Friday;
  }
  if (new Date().toLocaleString('en-us', {  weekday: 'long' }) === 'Saturday'){
      routesList = routesData.Saturday;
  }
  if (new Date().toLocaleString('en-us', {  weekday: 'long' }) === 'Sunday'){
      routesList = routesData.Sunday;
  }

  // Find direct routes
  const directRoutes = findDirectRoutes(startStop, endStop, routesList);
  
  // Find transfer routes
  const transferRoutes = findTransferRoutes(startStop, endStop, routesList);
  
  // Combine and sort all routes
  const allRoutes = [...directRoutes, ...transferRoutes.slice(0, 5)]
    .sort((a, b) => a.totalJourneyTime - b.totalJourneyTime);
  
  displayResults(allRoutes, startStop, endStop);
}

function findDirectRoutes(startStop, endStop, routesList) {
  const directRoutes = [];
  
  for (const route of routesList) {
    // Find index of start stop
    const startIndex = route.stops.findIndex(stop => 
      normalizeStopName(stop) === normalizeStopName(startStop)
    );
    // Find index of end stop
    const endIndex = route.stops.findIndex(stop => 
      normalizeStopName(stop) === normalizeStopName(endStop)
    );
    
    // True/False For circular routes
    const validDirection = isCircularRoute(route.name)
      // Valid if both stops exist and are not the same (if circular)
      ? (startIndex !== -1 && endIndex !== -1 && startIndex !== endIndex)
      // Valid if start comes before end in linear routes (if not circular)
      : (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex);

    // If both stops exist on this route and direction is valid
    if (validDirection) {
      const travelTime = calculateTravelTime(route, startStop, endStop);
      const currentTime = getCurrentTimeMinutes();
      const nextDepartureInfo = getNextDeparture(route, currentTime);
      
      // If these is a next departure and travel time is valid
      if (nextDepartureInfo !== null && travelTime !== null) {
        const arrivalTime = nextDepartureInfo.time + travelTime;
        // Check if arrival is next day (boolean value)
        const arrivalIsNextDay = nextDepartureInfo.isNextDay || (arrivalTime >= 1440);
        
        const normalizedDepartureTime = nextDepartureInfo.time % 1440;
        const normalizedArrivalTime = arrivalTime % 1440;
        
        // Add object (next bus for WS, DCL, etc.) to directRoutes array
        directRoutes.push({
          route: route.name,
          startStop,
          endStop,
          departureTime: minutesToTime(normalizedDepartureTime, nextDepartureInfo.isNextDay),
          arrivalTime: minutesToTime(normalizedArrivalTime, arrivalIsNextDay),
          totalTime: travelTime,
          waitTime: nextDepartureInfo.isNextDay ? 
                    (1440 - currentTime + normalizedDepartureTime) : 
                    (normalizedDepartureTime - currentTime),
          totalJourneyTime: nextDepartureInfo.isNextDay ? 
                          (1440 - currentTime + normalizedDepartureTime + travelTime) : 
                          (normalizedDepartureTime - currentTime + travelTime),
          transfers: 0,
          isNextDay: nextDepartureInfo.isNextDay
        });
      }
    }
  }
  
  // Sort direct routes by total journey time
  return directRoutes.sort((a, b) => a.totalJourneyTime - b.totalJourneyTime);
}

// Find routes with one transfer with direction validation
function findTransferRoutes(startStop, endStop, routesList) {
  const transferRoutes = [];
  const currentTime = getCurrentTimeMinutes();

  // Find all routes that contain the start stop
  const startRoutes = routesList.filter(route => {
    const startIndex = route.stops.findIndex(stop => 
      normalizeStopName(stop) === normalizeStopName(startStop)
    );
    return startIndex !== -1;
  });
  
  // Find all routes that contain the end stop  
  const endRoutes = routesList.filter(route => {
    const endIndex = route.stops.findIndex(stop => 
      normalizeStopName(stop) === normalizeStopName(endStop)
    );
    return endIndex !== -1;
  });
  
  // Find common stops between start and end routes (transfer points)
  for (const startRoute of startRoutes) {
    const startIndex = startRoute.stops.findIndex(stop => 
      normalizeStopName(stop) === normalizeStopName(startStop)
    );
    
    for (const endRoute of endRoutes) {
      // Skip if same route to avoid duplicates
      if (startRoute.name === endRoute.name) continue; 
 
      const endIndex = endRoute.stops.findIndex(stop => 
        normalizeStopName(stop) === normalizeStopName(endStop)
      );
        
        // Find common stops where direction is valid
        const commonStops = startRoute.stops.filter((stop1, idx1) => {
          // Transfer stop index must be after start stop index in start route
          if (idx1 <= startIndex) return false; 
            
          const idx2 = endRoute.stops.findIndex(stop2 => 
            normalizeStopName(stop1) === normalizeStopName(stop2)
          );
            // Transfer stop index must exist and be before end stop index in end route
            return idx2 !== -1 && idx2 < endIndex;
        });
          
          for (const transferStop of commonStops) {
            // Calculate first leg
            const firstLegTime = calculateTravelTime(startRoute, startStop, transferStop);
            const firstDepartureInfo = getNextDeparture(startRoute, currentTime);
            
            // Check if firstDepartureInfo is valid before using it
            if (!firstLegTime || !firstDepartureInfo) continue;              
            const firstArrival = firstDepartureInfo.time + firstLegTime;
            const firstArrivalIsNextDay = firstDepartureInfo.isNextDay || (firstArrival >= 1440);
            const normalizedFirstArrival = firstArrival % 1440;
            
            // Calculate second leg - FIXED: Use normalized arrival time for comparison
            const searchTime = firstArrivalIsNextDay ? normalizedFirstArrival : firstArrival;
            const secondDepartureInfo = getNextDeparture(endRoute, searchTime);
            const secondLegTime = calculateTravelTime(endRoute, transferStop, endStop);
            
            // Check if secondDepartureInfo is valid before using it
            if (!secondDepartureInfo || !secondLegTime) continue;
            
            // FIXED: Handle next day logic for second departure
            let secondDepartureIsNextDay = secondDepartureInfo.isNextDay;
            if (firstArrivalIsNextDay && !secondDepartureInfo.isNextDay) {
                // If first arrival is next day but second departure isn't, 
                // the second departure should also be next day
                secondDepartureIsNextDay = true;
            }
            
            const secondArrival = secondDepartureInfo.time + secondLegTime;
            const secondArrivalIsNextDay = secondDepartureIsNextDay || (secondArrival >= 1440);
            const normalizedSecondArrival = secondArrival % 1440;
            
            // Calculate wait times
            const waitTime = firstDepartureInfo.isNextDay ? 
              (1440 - currentTime + (firstDepartureInfo.time % 1440)) : 
              (firstDepartureInfo.time - currentTime);
            
            const transferWait = secondDepartureIsNextDay ? 
              (1440 - normalizedFirstArrival + (secondDepartureInfo.time % 1440)) : 
              (secondDepartureInfo.time - normalizedFirstArrival);
            
            const totalJourneyTime = secondArrivalIsNextDay ? 
              (1440 - currentTime + normalizedSecondArrival) : 
              (normalizedSecondArrival - currentTime);
            
            transferRoutes.push({
              route: `${startRoute.name} → ${endRoute.name}`,
              startStop,
              transferStop,
              endStop,
              firstLeg: {
                  route: startRoute.name,
                  departureTime: minutesToTime(firstDepartureInfo.time % 1440, firstDepartureInfo.isNextDay),
                  arrivalTime: minutesToTime(normalizedFirstArrival, firstArrivalIsNextDay),
                  travelTime: firstLegTime
              },
              secondLeg: {
                  route: endRoute.name,
                  departureTime: minutesToTime(secondDepartureInfo.time % 1440, secondDepartureIsNextDay),
                  arrivalTime: minutesToTime(normalizedSecondArrival, secondArrivalIsNextDay),
                  travelTime: secondLegTime
              },
              waitTime,
              transferWait,
              totalJourneyTime,
              transfers: 1
          });
        }
      }
  }
  
  return transferRoutes.sort((a, b) => a.totalJourneyTime - b.totalJourneyTime);
}

// Display results with truncated text for better readability
function displayResults(routes, startStop, endStop) {
  const resultsDiv = document.getElementById('results');  
  if (routes.length === 0) {
    resultsDiv.innerHTML = `
      <div class="route-option no-results">
        <h2>No Routes Found</h2>
          <p>No direct or transfer routes found between ${truncateStopName(startStop)} and ${truncateStopName(endStop)}.</p>
          <p>Please check the Spot app for real-time updates and alternative options.</p>
        <h3>Note: If you are on campus, consider walking to:</h3>
          <ul>
            <p><strong>Union</strong> for WS, DCL, MS, DS, VS, OC routes</p>
            <p><strong>Mohawk</strong> for ITC/UClub or UClub</p>
          </ul>
        <p>More information may be found at occtransport.org</p>
      </div>
    `;
    return;
  } 
  let html = `<h2>Route Options from ${truncateStopName(startStop)} to ${truncateStopName(endStop)}</h2>`;
  const now = new Date();
  const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
  const currentTime = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  html += `<h3>Using information from ${dayOfWeek} at ${currentTime}</h3>`;
  html += `<h5>Note: Times may vary based on current conditions. Always check the Spot app for real-time updates.</h5>`;
  
  html += (startStop === "Academic A" || endStop === "Academic A") ? 
  '<h5>Note: Some routes may not service Academic A at certain times. Always check occtransport.org for more information.</h5>' : '';
  
  routes.forEach((route, index) => {
  const isFirstOption = index === 0;
  const isDirect = route.transfers === 0;
  const routeClass = isFirstOption ? 'route-option fastest' : 
                      isDirect ? 'route-option' : 'route-option transfer';
                
  html += `<div class="${routeClass}">`;
                
  if (isFirstOption) {
    html += '<h3>Fastest Option</h3>';
  } else if (isDirect) {
    html += '<h3>Direct Route</h3>';
  } else {
    html += '<h3>Transfer Required</h3>';
  }
              
  if (isDirect) {
    html += `
    <div class="route-details">
      <p><strong>Route:</strong> ${route.route}</p>
      <p><strong>Departure:</strong> ${route.departureTime} from ${truncateStopName(startStop)}</p>
      <p><strong>Arrival:</strong> ${route.arrivalTime} at ${truncateStopName(endStop)}</p>
      <p><strong>Wait Time:</strong> ${Math.max(0, route.waitTime)} minutes</p>
      <p><strong>Travel Time:</strong> ${route.totalTime} minutes</p>
      <p><strong>Total Journey:</strong> ${route.totalJourneyTime} minutes</p>
    </div>
   `;
  } else {
      html += `
      <div class="route-details">
        <p><strong>First Bus:</strong> ${route.firstLeg.route}</p>
        <p>&nbsp;&nbsp;Depart: ${route.firstLeg.departureTime} from ${truncateStopName(startStop)}</p>
        <p>&nbsp;&nbsp;Arrive: ${route.firstLeg.arrivalTime} at ${truncateStopName(route.transferStop)}</p>
        
        <p><strong>Transfer at:</strong> ${truncateStopName(route.transferStop)} (${route.transferWait} min wait)</p>
        
        <p><strong>Second Bus:</strong> ${route.secondLeg.route}</p>
        <p>&nbsp;&nbsp;Depart: ${route.secondLeg.departureTime} from ${truncateStopName(route.transferStop)}</p>
        <p>&nbsp;&nbsp;Arrive: ${route.secondLeg.arrivalTime} at ${truncateStopName(endStop)}</p>
        
        <p><strong>Total Journey:</strong> ${route.totalJourneyTime} minutes</p>
      </div>
      `;
    }                
    html += '</div>';
  });
  resultsDiv.innerHTML = html;
}

// Make findRoutes globally available for the button onclick
window.findRoutes = findRoutes;