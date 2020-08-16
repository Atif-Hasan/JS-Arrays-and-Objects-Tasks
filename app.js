// Basic

// Question 1

let arr = [5, 10, 15];

console.log(arr[0]);

// Question 2

let obj = { name: "Maimoona", degree: "MBBS" };

console.log(obj.degree);

// Question 3

let txt="";
let arra = [1, 2, 3, 4, 5, 6, 7];


arra.forEach(myFunction);
console.log(arra);
function myFunction(value) {
    txt = txt + value + "<br>";
}

// Question 4

let obje = { name: "Maimoona", degree: "MBBS", age: 25 };

for (let property in obje) {
    console.log(`${property}: ${obje[property]}`);
}

// Intermediate - Students' Names and Hobbies Data

let students = [
    {
        name: "Amna",
        hobbies: ["eating", "cooking"]
    },
    {
        name: "Daniyal",
        hobbies: ["arts", "shopping"]
    },
    {
        name: "Fahad",
        hobbies: ["coding", "cooking"]
    },
    {
        name: "Hajra",
        hobbies: ["sleep", "reading"]
    }
];

for (let i = 0; i < students.length; i++) {
    console.log("Hobbies of " + students[i].name);
    for (let j = 0; j < students[i].hobbies.length; j++) {
        console.log(j + 1 + ". " + students[i].hobbies[j])
    }
    console.log("");
}




// Intermediate - Extensive Students' Data

let studentss = [
    {
    name: "Amna",
    gender: "f",
    dob: new Date("02-04-1990"),
    address: {
        ilaqa: "Gulistan-e-Johar",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 47114
    },
    phoneNo: "0331-2324243",
    admissionTestScore: 56,
    hasInternet: true,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: false
    },
    {
    name: "Hadia",
    gender: "f",
    dob: new Date("05-15-1984"),
    address: {
        ilaqa: "Lyari",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 75660
    },
    phoneNo: "0345-3452953",
    admissionTestScore: 48,
    hasInternet: false,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: true
    },
    {
    name: "Ahmed",
    gender: "m",
    dob: new Date("06-27-2002"),
    address: {
        ilaqa: "University Road",
        city: "Quetta",
        country: "Pakistan",
        postalCode: 82215
    },
    phoneNo: "0333-0124325",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
    },
    {
    name: "Fariha",
    gender: "f",
    dob: new Date("09-13-1998"),
    address: {
        ilaqa: "University Road",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 82215
    },
    phoneNo: "0331-9432532",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
    },
    {
    name: "Abdullah",
    gender: "m",
    dob: new Date("01-24-1972"),
    address: {
        ilaqa: "Bazar Colony",
        city: "Lahore",
        country: "Pakistan",
        postalCode: 32212
    },
    phoneNo: "0345-9912121",
    admissionTestScore: 33,
    hasInternet: false,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: true
    }
];

for (let i = 0; i < 1; i++) {
        console.log("Name: " + studentss[i].name);
        if (studentss[i].gender === "f") {
            console.log("Gender: Female");
        }
        else {
            console.log("Gender: Male");
        }
        console.log("City: " + studentss[i].address.city);
        console.log("Score: " + studentss[i].admissionTestScore + " marks");
        console.log("");
    };


     for (let i = 0; i < studentss.length; i++) {
     if (studentss[i].gender === "f") {
         console.log("Name: " + studentss[i].name);
     }
 };
 console.log("");

 for (let i = 0; i < studentss.length; i++) {
    if (studentss[i].gender === "m") {
        console.log("Name: " + studentss[i].name);
    }
};
console.log("");

 for (let i = 0; i < studentss.length; i++) {
        if (studentss[i].admissionTestScore >= 50) {
            console.log("Name: " + studentss[i].name);
        }
    };
    console.log("");

    for (let i = 0; i < studentss.length; i++) {
            if (studentss[i].address.city == "Karachi" && studentss[i].hasInternet === true) {
                console.log("Name: " + studentss[i].name);
            }
        };
        console.log("");


        for (let i = 0; i < studentss.length; i++) {
                console.log(studentss[i].name + "'s address: ");
                console.log(studentss[i].address.ilaqa + " in " + studentss[i].address.city + ", " + studentss[i].address.country);
                console.log("");
            };


        for (let i = 0; i < studentss.length; i++) {
    if (studentss[i].phoneNo.includes("0331") || studentss[i].phoneNo.includes("0332") || studentss[i].phoneNo.includes("0333") || studentss[i].phoneNo.includes("0334") || studentss[i].phoneNo.includes("0335")) {
        console.log("Name: " + studentss[i].name + ", " + "Phone Number: " + studentss[i].phoneNo);
    }
};
console.log("");

let groupA = [];
let groupB = [];
for (let i = 0; i < studentss.length; i++) {
    if (studentss[i].hasJob === false && studentss[i].hasSchoolBefore === false) {
        groupA.push(studentss[i].name)
    } else {
        groupB.push(studentss[i].name)

    }
};
console.log("Group A: " + groupA.join(", "));
console.log("Group B: " + groupB.join(", "));
console.log("");


function calculateAge(dateOfBirth) {

        let age = new Date().getFullYear() - dateOfBirth.getFullYear();
    
        let dobMonth = dateOfBirth.getMonth();
        let todayMonth = new Date().getMonth();
    
        if (todayMonth < dobMonth) {
            age--;
        } else if (todayMonth === dobMonth) {
            let todayDate = new Date().getDate();
            let dobDate = dateOfBirth.getDate();
    
            if (todayDate < dobDate) {
                age--;
            }
        }
    
        return age;
    }

for (let i = 0; i < studentss.length; i++) {
        let studentAge = calculateAge(studentss[i].dob);
    
        console.log(`${studentss[i].name}'s age is ${studentAge} years`);
    }

    console.log(
            "The name of the oldest student is " +
            studentss.sort(function (a, b) {
                return (new Date().getFullYear() - b.dob.getFullYear()) - (new Date().getFullYear() - a.dob.getFullYear())
            })[0].name
        
        );


        //  Intermediate - Video Data Task

        let videos = [
                {
                    title: "Photoshop tutorial",
                    lengthInMinutes: 70,
                    category: "Education",
                    uploadDate: new Date("07-22-2019"),
                    tags: "design, digital, photoshop, creativity",
                    features: ["Live", "360°", "HDR"],
                    viewCount: 4700,
                    rating: 4.3
                },
                {
                    title: "Episode # 01 - The Best Comedy Show",
                    lengthInMinutes: 19,
                    category: "Entertainment",
                    uploadDate: new Date("07-03-2019"),
                    tags: "comedy, funny",
                    features: ["Subtitles/CC", "3D", "HD"],
                    viewCount: 145615,
                    rating: 3.9
                },
                {
                    title: "How to use FOR EACH loop - tutorial by Tech Karo",
                    lengthInMinutes: 6,
                    category: "Education",
                    uploadDate: new Date("11-10-2018"),
                    tags: "javascript, loops, web development",
                    features: ["Purchased", "HD"],
                    viewCount: 9004,
                    rating: 4.5
                },
                {
                    title: "The Kapil Sharma Show",
                    lengthInMinutes: 10,
                    category: "Comedy",
                    uploadDate: new Date("03-04-2019"),
                    tags: "Entertainment,Comedy",
                    features: ["Subtitles/CC", "HD"],
                    viewCount: 6958442,
                    rating: 5.0
                },
                {
                    title: "Javascript Variable",
                    lengthInMinutes: 3,
                    category: "Education",
                    uploadDate: new Date("11-12-2018"),
                    tags: "javascript, varibale",
                    features: ["Purchased", "HD"],
                    viewCount: 15609,
                    rating: 4.0
                },
                {
                    title: "Js Array",
                    lengthInMinutes: 2,
                    category: "Education",
                    uploadDate: new Date("12-15-2018"),
                    tags: "javascript, Array",
                    features: ["Purchased", "HD"],
                    viewCount: 10410,
                    rating: 4.4
                },
                {
                    title: "Js fuction",
                    lengthInMinutes: 4,
                    category: "Education",
                    uploadDate: new Date("10-17-2018"),
                    tags: "javascript, fuction",
                    features: ["Purchased", "HD"],
                    viewCount: 3214,
                    rating: 3.6
                },
                {
                    title: "Js Array Methods",
                    lengthInMinutes: 7,
                    category: "Education",
                    uploadDate: new Date("11-08-2018"),
                    tags: "javascript, array methods",
                    features: ["Purchased", "HD"],
                    viewCount: 11302,
                    rating: 5.0
                },
                {
                    title: "Js do while loop",
                    lengthInMinutes: 1,
                    category: "Education",
                    uploadDate: new Date("10-24-2018"),
                    tags: "javascript, do while loop",
                    features: ["Purchased", "HD"],
                    viewCount: 4502,
                    rating: 3.2
                },
                {
                    title: "The Idiotz",
                    lengthInMinutes: 2,
                    category: "Comedy",
                    uploadDate: new Date("05-19-2019"),
                    tags: "Entertainment,Comedy",
                    features: ["Subtitles/CC", "HD"],
                    viewCount: 784876,
                    rating: 4.4
                },
                {
                    title: "Karachi Vynz",
                    lengthInMinutes: 6,
                    category: "Comedy",
                    uploadDate: new Date("07-19-2018"),
                    tags: "Entertainment,Comedy",
                    features: ["Subtitles/CC", "HD"],
                    viewCount: 644256,
                    rating: 4.5
                },
                {
                    title: "Visual Effects tutorial",
                    lengthInMinutes: 52,
                    category: "Education",
                    uploadDate: new Date("03-26-2017"),
                    tags: "design, digital, vfx, creativity",
                    features: ["Live", "360°", "HDR"],
                    viewCount: 6700,
                    rating: 4.7
                },
                {
                    title: "VS Code tutorial",
                    lengthInMinutes: 45,
                    category: "Education",
                    uploadDate: new Date("03-26-2017"),
                    tags: "digital, creativity",
                    features: ["Live", "360°", "HDR"],
                    viewCount: 9500,
                    rating: 4.2
                },
            
            ];

            let years = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

            for (let i = 0; i < videos.length; i++) {
                console.log("Tittle: " + videos[i].title);
                console.log("Length: " + videos[i].lengthInMinutes + " minutes");
                console.log("Category: " + videos[i].category);
                console.log("Views: " + videos[i].viewCount);
                console.log("Uploaded On: " + videos[i].uploadDate.getDate() + "-" + years[videos[i].uploadDate.getMonth()] + "-" + videos[i].uploadDate.getFullYear());
            
                if (parseInt(videos[i].rating) == "1") {
                    console.log("Rating: " + "*");
                } else if (parseInt(videos[i].rating) == "2") {
                    console.log("Rating: " + "**");
                } else if (parseInt(videos[i].rating) == "3") {
                    console.log("Rating: " + "***");
                } else if (parseInt(videos[i].rating) == "4") {
                    console.log("Rating: " + "****");
                } else if (parseInt(videos[i].rating) == "5") {
                    console.log("Rating: " + "*****");
                };
            
                console.log("");
            };



            for (let i = 0; i < videos.length; i++) {
                    if (videos[i].lengthInMinutes < 3) {
                        console.log("Short Video (less than 3 minutes): " + videos[i].title)
                    }
                
                };
                console.log("");


                for (let i = 0; i < videos.length; i++) {
                        if (videos[i].lengthInMinutes > 20) {
                            console.log("Long Video (greater than 20 minutes): " + videos[i].title)
                        }
                    
                    };
                    console.log("");

    for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes > 3 && videos[i].lengthInMinutes < 20) {
        console.log("Medium Length Video: " + videos[i].title)
    }

};
console.log("");


console.log(
        "The Longest Video: " +
        videos.sort(function (a, b) {
            return b.lengthInMinutes - a.lengthInMinutes
        }
        )[0].title,
    );
    console.log("");


    for (let i = 0; i < videos.length; i++) {
            if (videos[i].category.includes("Education")) {
                console.log("Educational Videos: " + videos[i].title);
            }
        };
        console.log("");


        for (let i = 0; i < videos.length; i++) {
                if (videos[i].tags.includes("javascript")) {
                    console.log("JavaScript Videos: " + videos[i].title);
                }
            };
            console.log("");


            for (let i = 0; i < videos.length; i++) {
                    if (videos[i].features.includes("HD")) {
                        console.log("HD Videos: " + videos[i].title);
                    }
                };
                console.log("");


                for (let i = 0; i < videos.length; i++) {
                        if (videos[i].uploadDate.getDay() === new Date().getDay()) {
                            console.log("Videos Uploaded Today: " + videos[i].title);
                        }
                    }
                    console.log("");


                    for (let i = 0; i < videos.length; i++) {
                            if (videos[i].uploadDate.getDay() === new Date().getDay()) {
                                console.log("Videos Uploaded This Week: " + videos[i].title);
                            }
                        }
                        console.log("");

for (let i = 0; i < videos.length; i++) {
    if (videos[i].uploadDate.getMonth() && videos[i].uploadDate.getFullYear() === new Date().getMonth() && videos[i].uploadDate.getFullYear()) {
        console.log("Videos Uploaded  This Month: " + videos[i].title);
    }
}
console.log("");

for (let i = 0; i < videos.length; i++) {
        if (videos[i].uploadDate.getFullYear() === new Date().getFullYear()) {
            console.log("Videos Uploaded This Year: " + videos[i].title);
        }
    }
    console.log("");


     for (let i = 0; i < videos.length; i++) {
            console.log(
                videos.sort(function (a, b) {
                    return a.viewCount - b.viewCount
                }
                )[i].title,
            );
        };
        console.log("");


        for (let i = 0; i < videos.length; i++) {
    console.log(
        videos.sort(function (a, b) {
            return parseFloat(a.rating) - parseFloat(b.rating)
        }
        )[i].title,
    );
};
console.log("");


// Advance - Recipe Card

var recipe = {
    'title': 'Mole',
    'servings': 2,
    'ingredients': ['cumin', 'cinnamon', 'cocoa']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}


// Reading List

var books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];
  
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
      console.log('You already read "' + bookInfo);
    } else {
      console.log('You still need to read "' + bookInfo);
    }
  }








   