import {generateName, 
    generateEmail, 
    generateMessage, 
    generateLongName, 
    generateNameNumber} from "../utils/helpers.js";

const TOPICS = {
    GENERAL: "General Inquiry",
    FEATURE: "Feature Request",
    BUG: "Bug Report",
    SUPPORT: "Support",
    OTHER: "Other"
}
//Valid Data
const validData = {
    name: generateName(),
    email: generateEmail(),
    topic: TOPICS.GENERAL,
    message: generateMessage()
    
}

//Invalid Data
const fieldsEmtpy = { name: "", email: "", topic: "", message: ""}  
const fieldsWithWhitespaces = { name: " ", email: " ", message: " "} 

const fieldNameWithNumbers = { name: generateNameNumber(), email: generateEmail(), topic: TOPICS.SUPPORT, message: generateMessage()} 

const invalidEmailFormat = { name: generateName(), email: "invalidemail.com", topic: TOPICS.BUG, message: generateMessage()} 

const invalidNameLength = { name: generateLongName(), 
                            email: generateEmail(),
                            topic: TOPICS.FEATURE,  
                            message: generateMessage()
                        }

export {TOPICS, validData, fieldsEmtpy, fieldsWithWhitespaces, fieldNameWithNumbers, invalidEmailFormat, invalidNameLength}
//data automatica 