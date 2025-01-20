export function generateStringTests(property: string): string {
    return `
        describe('${property} should be a valid string', () => {
            it('should pass with a valid value', async () => {
                const obj = { ${property}: "valid string" };
            
            });

            it('should fail with null', async () => {
                const obj = { ${property}: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { ${property}: undefined };
            
            });

            it('should fail with empty string', async () => {
                const obj = { ${property}: "" };
            
            });
            it('should fail with non-string value', async () => {
                const obj = { ${property}: 123 };
            
            });
        });
    `;
}

export function generateNumberTests(property: string): string {
    return `
        describe('${property} should be a valid number', () => {
            it('should pass with a valid value', async () => {
                const obj = { ${property}: 123 };
            
            });

            it('should fail with null', async () => {
                const obj = { ${property}: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { ${property}: undefined };
        
            });   

            it('should fail with empty', async () => {
                const obj = { ${property}: ""};
        
            });

            it('should fail with non-numeric value', async () => {
                const obj = { ${property}: "not a number" };
            
            });

        });
    `;
}

export function generateBooleanTests(property: string): string {
    return `
        describe('${property} should be a valid boolean', () => {
            it('should pass with true', async () => {
                const obj = { ${property}: true };
            
            });

            it('should pass with false', async () => {
                const obj = { ${property}: false };
            
            });

            it('should fail with null', async () => {
                const obj = { ${property}: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { ${property}: undefined };
            
            });
                        
            it('should fail with empty', async () => {
                const obj = { ${property}: "" };
            
            });

            it('should fail with non-boolean value', async () => {
                const obj = { ${property}: "not a boolean" };
            
            });
        });
    `;
}

export function generateDateTests(property: string): string {
    return `
        describe('${property} should be a valid Date (ISO string)', () => {
            it('should pass with a valid ISO date string', async () => {
                const obj = { ${property}: "2023-01-01T00:00:00.000Z" };
            
            });

            it('should fail with null', async () => {
                const obj = { ${property}: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { ${property}: undefined };
            
            });

            it('should fail with an invalid ISO string', async () => {
                const obj = { ${property}: "invalid-date-string" };
            
            });

            it('should fail with a non-date value', async () => {
                const obj = { ${property}: 12345 };

            });
        });
    `;
}

export function generateEnumTests(property: string, enumType: Record<string, any>): string {

    const validValues = Object.values(enumType);

    const validTests = validValues.map(
        (value) => `
            it('should pass with valid value "${value}"', async () => {
                const obj = { ${property}: '${value}' };

            });
        `
    ).join('\n');

    const invalidTests = `
        it('should fail with null', async () => {
            const obj = { ${property}: null };

        });

        it('should fail with undefined', async () => {
            const obj = { ${property}: undefined };

        });

        it('should fail with empty string', async () => {
            const obj = { ${property}: '' };

        });

        it('should fail with non-enum value', async () => {
            const obj = { ${property}: 'invalid_value' };

        });
    `;

    return `
        describe('${property} should be a valid enum', () => {
            ${validTests}
            ${invalidTests}
        });
    `;
}




export function generateDefaultTests(property: string, type: string): string {
    return `
        describe('${property} should be a valid ${type}', () => {
            it('should pass with a valid value', async () => {
                const obj = { ${property}: "valid ${type}" };
            
            });

            it('should fail with null', async () => {
                const obj = { ${property}: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { ${property}: undefined };
                
            });
        });
    `;
}
