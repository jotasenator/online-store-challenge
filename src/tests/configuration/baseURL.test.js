import '@testing-library/jest-dom'
import { baseURL } from "../../configuration/baseURL";

describe('Main url of the whole app', () => {

    test('should match with http://localhost:3001/item/', () => {

        expect(baseURL).toBe('http://localhost:3001/item/')
    })
})
