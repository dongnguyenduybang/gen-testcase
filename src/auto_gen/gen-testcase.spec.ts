import { generateAllSpecsFromFolder } from './gen-testcase';
import * as path from 'path';
import * as fs from 'fs';

describe('Start Gen Testcase', () => {

    const dtoFolderPath = path.join(__dirname, 'dtos');
    const outputFolderPath = path.join(__dirname, 'auto_gen_specs');

    beforeAll(() => {
        // Generate all test files

    });
    generateAllSpecsFromFolder(dtoFolderPath, outputFolderPath);

    describe('Generated Test Files', () => {
        let specFiles: string[] = [];

        specFiles = fs.readdirSync(outputFolderPath).filter((file) => file.endsWith('.spec.ts'));

        specFiles.forEach((file) => {
            const filePath = path.join(outputFolderPath, file);

            describe(`Test Suite for ${file}`, () => {

                require(filePath);

            });
        });
    });
});
