import { API, HTTPMethod } from './API';
import { URLs } from './URLs';



export function Login(Username, Password, Deviceid, Token, Devicename, Devicetypeid, Appversion) {
    let params = {
        "username": Username,
        "password": Password,
        "deviceid": Deviceid,
        "token": Token,
        "devicename": Devicename,
        "devicetypeid": Devicetypeid,
        "appversion": Appversion,
    };
    let url = URLs.base + URLs.Login;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function ResendOTP(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.ResendOTP;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function VerifyOTP(Userid, Otp) {
    let params = {
        "userid": Userid,
        "otp": Otp
    };
    let url = URLs.base + URLs.VerifyOTP;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function RegisterFirebaseToken(Userid, Firebasetoken) {
    let params = {
        "userid": Userid,
        "firebasetoken": Firebasetoken
    };
    let url = URLs.base + URLs.RegisterFirebaseToken;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function ChangePassword(Userid, Password, newpassword) {
    let params = {
        "userid": Userid,
        "password": Password,
        "newpassword": newpassword
    };
    let url = URLs.base + URLs.ChangePassword;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function GetNotifications(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.GetNotifications;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function GetNews(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.GetNews;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function GetEvents(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.GetEvents;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function GetMyChapters(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.GetMyChapters;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function GetMeetings(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.GetMeetings;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function GetCities(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.GetCities;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function GetBusinessCategories(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.GetBusinessCategories;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function GetRequirements(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.GetRequirements;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function GetMyRequirements(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.GetMyRequirements;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function GetRequirementDetails(Userid, Requirementid) {
    let params = {
        "userid": Userid,
        "requirementid": Requirementid
    };
    let url = URLs.base + URLs.GetRequirementDetails;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function AddEditRequirement(Userid, Requirementid, Areaid, Cityid, Title, Description, Businesscategoryid, Startdate, Enddate, Budget) {
    let params = {
        "userid": Userid,
        "requirementid": Requirementid,
        "areaid": Areaid,
        "cityid": Cityid,
        "title": Title,
        "description": Description,
        "businesscategoryid": Businesscategoryid,
        "startdate": Startdate,
        "enddate": Enddate,
        "budget": Budget,
    };
    let url = URLs.base + URLs.AddEditRequirement;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function CloseRequirement(Userid, Requirementid, Closereason) {
    let params = {
        "userid": Userid,
        "requirementid": Requirementid,
        "closereason": Closereason
    };
    let url = URLs.base + URLs.CloseRequirement;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function SearchMembers(Userid) {
    let params = {
        "userid": Userid,
    };
    let url = URLs.base + URLs.SearchMembers;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

export function InviteForChapter(Userid, Chaptermeetingid, Chapterid, Inviteename, Inviteecontactno) {
    let params = {
        "userid": Userid,
        "chaptermeetingid": Chaptermeetingid,
        "chapterid": Chapterid,
        "inviteename": Inviteename,
        "inviteecontactno": Inviteecontactno
    };
    let url = URLs.base + URLs.InviteForChapter;
    let body = JSON.stringify(params);
    return API.shared.request(HTTPMethod.post, url, body);
}

