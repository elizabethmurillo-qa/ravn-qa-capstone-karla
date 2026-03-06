const TOPICS = {
    GENERAL: "General Inquiry",
    FEATURE: "Feature Request",
    BUG: "Bug Report",
    SUPPORT: "Support",
    OTHER: "Other"
}
//Valid Data
const validData = {
    name: "karla",
    email: "karla@gmail.com",
    topic: TOPICS.GENERAL,
    message: "This is a test with valid data"
    
}

//Invalid Data
const fieldsEmtpy = { name: "", email: "", topic: "", message: ""}  
const fieldsWithWhitespaces = { name: " ", email: " ", message: " "} 
const fieldNameWithNumbers = { name: "2", email: "karla@gmail.com", topic: TOPICS.SUPPORT, message: "This is a test with numbers"} 
const invalidEmailFormat = { name: "karla", email: "karlagmail.com", topic: TOPICS.BUG, message: "This a test with invalid email"} 
const invalidNameLength = { name: "karlaelizabethmurillourrutiakarlaelizabethmurillourrutia", 
                            email: "karla@gamil.com",
                            topic: TOPICS.FEATURE,  
                            message: "This is a test with invalid length "
                        }

module.exports = {TOPICS, validData, fieldsEmtpy, fieldsWithWhitespaces, fieldNameWithNumbers, invalidEmailFormat, invalidNameLength}
