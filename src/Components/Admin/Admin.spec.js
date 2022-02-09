import react from "react";
import reactDom from "react-dom";
import { Welcome } from "../../Services/AdminService";
import { GoodMorning } from "../../Services/AdminService";
import { GoodMorningabove18 } from "../../Services/AdminService";
import { GoodNight } from "../../Services/AdminService";
import { Email } from "../../Services/AdminService";

describe("welcome function Test", () => {
    it("return welcome", () => {
        expect(Welcome()).toEqual("hello user")
    })

})

describe("good morning function test", () => {
    it("return good morning", () => {
        expect(GoodMorning("Tikva")).toEqual(`good morning Tikva`)
    })

    it("return num", () => {
        expect(GoodMorning(2)).not.toBe()

    })

})

describe("good morning above age 18", () => {
    it("age above 18", () => {
        expect(GoodMorningabove18(26, "Tikva")).toBe(`good morning Tikva`)
    })
    it("age under 18", () => {
        expect(GoodMorningabove18(6, "Tikva")).toBe("too young")
    })
    it("age equal 18", () => {
        expect(GoodMorningabove18(26, "Tikva")).toBe(`good morning Tikva`)
    })
})

describe("Good Night Function", () => {
    it("return good night in jsx", () => {
        expect(GoodNight()).toEqual(<h1>Good Night</h1>)
    })

    it("return good night", () => {
        expect(GoodNight()).not.toBe()
    })
    it("return jsx", () => {
        const div = document.createElement(`div`)
        reactDom.render(GoodNight(), div)
        expect(div.innerHTML).toBe(`<h1>Good Night</h1>`)
    })

})

describe("Email function", () => {
    it("return email", () => {
        expect(Email("tikva@gmail.com")).toEqual(<a href="tikva@gmail.com"></a>)
    })
    
})




