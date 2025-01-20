import { validateSync } from 'class-validator';

export function generateTestCasesFromPayload(dtoClass: any, payload: any) {
    const testCases = [];

    const instance = Object.assign(new dtoClass(), payload);
    const errors = validateSync(instance, { whitelist: true, forbidNonWhitelisted: true });

    if (errors.length === 1) {

        const error = errors[0];
        const field = error.property;
        const constraints = error.constraints;

        if (constraints) {
            for (const [constraintKey, message] of Object.entries(constraints)) {
                testCases.push({
                    name: `should return ${message}`,
                    payload,
                    expectedDetails: [message],
                });
            }
        }
    } else if (errors.length > 1) {

        const expectedDetails = errors.flatMap(error => Object.values(error.constraints || {}));

        testCases.push({
            name: `should return validation errors for multiple fields`,
            payload,
            expectedDetails,
        });
    } else {
        testCases.push({
            name: `should return successfully`,
            payload,
            expectedDetails: 'successfully'
        });
    }

    return testCases;
}
