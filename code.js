var csConcentrations = ["Computer Science", "Data Base", "Software Engineering"]
var isConcentrations = ["Information Systems", "Information Systems Security", "Decision Science", "Web Development", "Healthcare Information Systems"]

fillMajors = () => {
    fetch("./itec-majors.json")
    .then(res => res.json())
    .then(data => {
        majors = data.majors
        for (let i = 0; i < majors.length; i++) {
            const majorName = majors[i].name
            $(".major-container").append(`<button class='major-butt' onclick="fillConcentrations(${i})"><h4 class="butt-label">${majorName}</h4></button>`)
        }
    })
}

fillConcentrations = majorIndex => {
    $(".concentration-container").empty()
    $(".course-butt-container").empty()
    $(".course-info-container").empty()
    $(".course-info-container").hide()
    $(".concentration-container").append("<h2>Concentrations</h2>")
    fetch("./itec-majors.json")
    .then(res => res.json())
    .then(data => {
        major = data.majors[majorIndex]
        concentrations = major.concentrations
        for (let i = 0; i < concentrations.length; i++) {
            const concName = concentrations[i].name
            $(".concentration-container").append(`<button class='conc-butt' onclick="fillCourses(${majorIndex},${i})"><h4 class="butt-label">${concName}</h4></button>`)
        }
    })
}

fillCourses = (majorIndex, concentrationIndex) => {
    $(".course-butt-container").empty()
    $(".course-info-container").empty()
    $(".course-info-container").hide()
    
    fetch("./itec-majors.json")
    .then(res => res.json())
    .then(data => {
        major = data.majors[majorIndex]
        concentration = major.concentrations[concentrationIndex]
        courses = concentration.courses
        $(".course-butt-container").append(`<h2>${concentration.name} Courses</h2>`)
        for (let i = 0; i < courses.length; i++) {
            const courseCode = courses[i].code
            $(".course-butt-container").append(`<button class='course-butt' onclick="fillCourseInfo(${majorIndex},${concentrationIndex},${i})"><h4 class="butt-label">${courseCode}</h4></button>`)
        }
    })
}

fillCourseInfo = (majorIndex, concentrationIndex, courseIndex) => {
    $(".course-info-container").empty()
    $(".course-info-container").show()
    fetch("./itec-majors.json")
    .then(res => res.json())
    .then(data => {
        major = data.majors[majorIndex]
        concentration = major.concentrations[concentrationIndex]
        course = concentration.courses[courseIndex]
        $(".course-info-container").append(`<h3>${course.code}</h3>`)
        $(".course-info-container").append(`<h3>${course.name}</h3>`)
        $(".course-info-container").append(`<h3>${course.description}</h3>`)
    })
}