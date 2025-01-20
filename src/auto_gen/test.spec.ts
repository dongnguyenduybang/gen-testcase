import { TestDTO } from "./dto";
import { generateTestCasesFromPayload } from "./gen-testcase";

describe("Gen Testcase", () => {
    it("should generate test cases", () => {

        const validPayload = {
            username: '',
            phone: '1212121121',
            birthDate: new Date('1990-01-01'),
            isActive: 11,
        };

        const testCases = generateTestCasesFromPayload(TestDTO, validPayload);

        console.log(JSON.stringify(testCases, null, 4));

    });
});
