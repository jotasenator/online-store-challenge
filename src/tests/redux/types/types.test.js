import '@testing-library/jest-dom'
import { types } from '../../../redux/types/types'

describe('Get values from object types', () => {

    const { get, error, selected, created, modify } = types

    test('should {get} be GET-DATA', () => {
        expect(get).toBe('GET-DATA')
    })
    test('should {error} be ERROR', () => {
        expect(error).toBe('ERROR')
    })
    test('should {selected} be SELECTED-DATA', () => {
        expect(selected).toBe('SELECTED-DATA')
    })
    test('should {types.delete} be DELETED-DATA', () => {
        expect(types.delete).toBe('DELETED-DATA')
    })
    test('should {created} be CREATED-DATA', () => {
        expect(created).toBe('CREATED-DATA')
    })
    test('should {modify} be MODIFIED-DATA', () => {
        expect(modify).toBe('MODIFIED-DATA')
    })

})
