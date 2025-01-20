
            import { validate } from 'class-validator';

            
        describe('username should be a valid string', () => {
            it('should pass with a valid value', async () => {
                const obj = { username: "valid string" };
            
            });

            it('should fail with null', async () => {
                const obj = { username: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { username: undefined };
            
            });

            it('should fail with empty string', async () => {
                const obj = { username: "" };
            
            });
            it('should fail with non-string value', async () => {
                const obj = { username: 123 };
            
            });
        });
    

        describe('firstname should be a valid string', () => {
            it('should pass with a valid value', async () => {
                const obj = { firstname: "valid string" };
            
            });

            it('should fail with null', async () => {
                const obj = { firstname: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { firstname: undefined };
            
            });

            it('should fail with empty string', async () => {
                const obj = { firstname: "" };
            
            });
            it('should fail with non-string value', async () => {
                const obj = { firstname: 123 };
            
            });
        });
    

        describe('lastname should be a valid string', () => {
            it('should pass with a valid value', async () => {
                const obj = { lastname: "valid string" };
            
            });

            it('should fail with null', async () => {
                const obj = { lastname: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { lastname: undefined };
            
            });

            it('should fail with empty string', async () => {
                const obj = { lastname: "" };
            
            });
            it('should fail with non-string value', async () => {
                const obj = { lastname: 123 };
            
            });
        });
    

        describe('address should be a valid string', () => {
            it('should pass with a valid value', async () => {
                const obj = { address: "valid string" };
            
            });

            it('should fail with null', async () => {
                const obj = { address: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { address: undefined };
            
            });

            it('should fail with empty string', async () => {
                const obj = { address: "" };
            
            });
            it('should fail with non-string value', async () => {
                const obj = { address: 123 };
            
            });
        });
    

        describe('birthday should be a valid Date (ISO string)', () => {
            it('should pass with a valid ISO date string', async () => {
                const obj = { birthday: "2023-01-01T00:00:00.000Z" };
            
            });

            it('should fail with null', async () => {
                const obj = { birthday: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { birthday: undefined };
            
            });

            it('should fail with an invalid ISO string', async () => {
                const obj = { birthday: "invalid-date-string" };
            
            });

            it('should fail with a non-date value', async () => {
                const obj = { birthday: 12345 };

            });
        });
    

        describe('age should be a valid number', () => {
            it('should pass with a valid value', async () => {
                const obj = { age: 123 };
            
            });

            it('should fail with null', async () => {
                const obj = { age: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { age: undefined };
        
            });   

            it('should fail with empty', async () => {
                const obj = { age: ""};
        
            });

            it('should fail with non-numeric value', async () => {
                const obj = { age: "not a number" };
            
            });

        });
    

        describe('role should be a valid enum', () => {
            
            it('should pass with valid value "admin"', async () => {
                const obj = { role: 'admin' };

            });
        

            it('should pass with valid value "user"', async () => {
                const obj = { role: 'user' };

            });
        
            
        it('should fail with null', async () => {
            const obj = { role: null };

        });

        it('should fail with undefined', async () => {
            const obj = { role: undefined };

        });

        it('should fail with empty string', async () => {
            const obj = { role: '' };

        });

        it('should fail with non-enum value', async () => {
            const obj = { role: 'invalid_value' };

        });
    
        });
    

        describe('isActive should be a valid boolean', () => {
            it('should pass with true', async () => {
                const obj = { isActive: true };
            
            });

            it('should pass with false', async () => {
                const obj = { isActive: false };
            
            });

            it('should fail with null', async () => {
                const obj = { isActive: null };
            
            });

            it('should fail with undefined', async () => {
                const obj = { isActive: undefined };
            
            });
                        
            it('should fail with empty', async () => {
                const obj = { isActive: "" };
            
            });

            it('should fail with non-boolean value', async () => {
                const obj = { isActive: "not a boolean" };
            
            });
        });
    
        