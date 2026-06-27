let gendertype = "female"
function printGender(gendertype) {
    let colour= `brown`

    if (gendertype.startsWith("female")) {
        var age = "30"

        //blocked scope variable
        let  colour = "pink"
        console.log(`colour inside if block: ${colour}`)
        
    }

    console.log(`value of the age variable: ${age}`)
    console.log(`colour outside if block: ${colour}`)   

    }
printGender("male")
printGender("female")   