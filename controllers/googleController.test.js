const googleController = require("./googleController")
// @ponicode
describe("googleController.findAll", () => {
    test("0", () => {
        let param1 = [["https://croplands.org/app/a/reset?token=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://"], ["https://", "https://api.telegram.org/", "https://"], ["http://www.example.com/route/123?foo=bar", "https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc"]]
        let callFunction = () => {
            googleController.findAll(param1, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/"], ["https://croplands.org/app/a/confirm?t=", "https://croplands.org/app/a/confirm?t=", "http://www.example.com/route/123?foo=bar"], ["Www.GooGle.com", "https://", "ponicode.com"]]
        let callFunction = () => {
            googleController.findAll(param1, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["https://croplands.org/app/a/reset?token=", "ponicode.com", "ponicode.com"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/bot"], ["http://www.example.com/route/123?foo=bar", "www.google.com", "https://accounts.google.com/o/oauth2/revoke?token=%s"]]
        let callFunction = () => {
            googleController.findAll(param1, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Www.GooGle.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://twitter.com/path?abc"], ["www.google.com", "https://accounts.google.com/o/oauth2/revoke?token=%s", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["https://twitter.com/path?abc", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://www.example.com/route/123?foo=bar"]]
        let callFunction = () => {
            googleController.findAll(param1, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["https://twitter.com/path?abc", "https://api.telegram.org/bot", "ponicode.com"], ["http://www.croplands.org/account/confirm?t=", "Www.GooGle.com", "https://"], ["http://base.com", "ponicode.com", "https://api.telegram.org/"]]
        let callFunction = () => {
            googleController.findAll(param1, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            googleController.findAll(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
