import AsyncStorage from '@react-native-community/async-storage';

/**
 * This object represents the user of the app
 * @param {JSON} raw json that is received from server or local storage
 */
export function User(json) {
    this.id = json.userid || json.ID || ""
    this.type = json.UserType || json.type || 0

    this.firstName = json.FirstName || json.firstName || ""
    this.lastName = json.LastName || json.lastName || ""

    this.profilePic = json.ProfilePic || json.profilePic || ""
}

/**
 * Returns a name for the user that is suitable for display on profile etc.
 */
User.prototype.displayName = function () {
    // TODO: Fix this for locales where lastName may appear before firstName
    return this.firstName + " " + this.lastName
}

/**
 * Writes the current values stored into the user object to AsyncStorage
 */
let userStorageKey = "user"
User.prototype.writeToLocalStorage = function () {
    AsyncStorage.setItem(userStorageKey, JSON.stringify(this))
}

/**
 * Reads the values stored into AsyncStorage and populates into the caller instance of User
 */
User.prototype.readFromLocalStorage = function () {
    let stored = AsyncStorage.getItem(userStorageKey) || "{}"
    let json = JSON.parse(stored)
    let storedUser = new User(json)
    Object.assign(this, storedUser)
}

