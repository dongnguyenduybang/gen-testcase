import * as fs from 'fs';
import * as path from 'path';
import { generateBooleanTests, generateDateTests, generateDefaultTests, generateEnumTests, generateNumberTests, generateStringTests } from './template/template';
import { UserRole } from './dtos/enums/user-role.enum';

function generateTestSpec(obj: Record<string, any>, outputFilePath: string, enums: Record<string, Record<string, any>>) {
    const testCases: string[] = [];

    for (const key in obj) {

        if (obj.hasOwnProperty(key)) {

            const value = obj[key];
            const type = typeof value;

            if (enums[key]) {
                const enumType = enums[key];
                if (Object.values(enumType).includes(value)) {
                    testCases.push(generateEnumTests(key, enumType));
                } else {
                    console.error(`Value of ${key} does not match enum ${enumType}`);
                }
                continue; // Không xử lý thêm vì đã là enum
            }




            if (type === 'string' && !isNaN(Date.parse(value))) {

                testCases.push(generateDateTests(key));

            } else {

                switch (type) {
                    case 'string':
                        testCases.push(generateStringTests(key));
                        break;

                    case 'number':
                        testCases.push(generateNumberTests(key));
                        break;

                    case 'boolean':
                        testCases.push(generateBooleanTests(key));
                        break;

                    default:
                        testCases.push(generateDefaultTests(key, type));
                        break;
                }
            }
        }
    }

    if (testCases.length === 0) {
        console.error(`No test cases generated for ${outputFilePath}.`);
        return;
    }

    const fileContent =
        `
            import { validate } from 'class-validator';

            ${testCases.join('\n')}
        `;

    fs.writeFileSync(outputFilePath, fileContent, 'utf-8');

}

export function generateAllSpecsFromFolder(dtoFolderPath: string, outputFolderPath: string) {

    const dtoFiles = fs.readdirSync(dtoFolderPath).filter((file) => file.endsWith('dto.ts'));

    if (dtoFiles.length === 0) {
        console.error('No DTO files found in the folder.');
        return;
    }

    if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath, { recursive: true });
    }

    const enums = {
        role: UserRole
    }

    for (const dtoFile of dtoFiles) {

        const dtoFilePath = path.join(dtoFolderPath, dtoFile);
        const dtoModule = require(dtoFilePath);
        const dtoName = path.basename(dtoFile, '.ts');

        for (const exportName in dtoModule) {
            if (dtoModule.hasOwnProperty(exportName)) {
                const dtoObj = dtoModule[exportName];
                const outputFilePath = path.join(outputFolderPath, `${dtoName}.spec.ts`);

                if (typeof dtoObj === 'object' && dtoObj !== null) {
                    console.log(`Generating test cases for ${exportName} in ${dtoFile}`);
                    generateTestSpec(dtoObj, outputFilePath, enums);
                }
            }
        }
    }
}
