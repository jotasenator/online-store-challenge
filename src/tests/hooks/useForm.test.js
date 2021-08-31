import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm';


describe('Test in useForm hook', () => {

    const initialForm = {
        name: 'Apple',
        cost: 1
    }

    test('should return a default form', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const [formValues, handleInputChange, reset] = result.current
        console.log(formValues)

        expect(formValues).toEqual(initialForm)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')
    })

    test('should change form name Apple to Carrot', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const [, handleInputChange] = result.current


        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Carrot'
                }
            })
        })

        const [formValues] = result.current
        console.log(formValues)
        expect(formValues).toEqual({ ...initialForm, name: 'Carrot' })
    })
    test('should change form cost 1 to 50', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const [, handleInputChange] = result.current


        act(() => {
            handleInputChange({
                target: {
                    name: 'cost',
                    value: 50
                }
            })
        })

        const [formValues] = result.current
        console.log(formValues)
        expect(formValues).toEqual({ ...initialForm, cost: 50 })
    })
    test('should change to initialForm value', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const [, handleInputChange, reset] = result.current


        act(() => {
            handleInputChange({
                target: {
                    name: 'cost',
                    value: 50
                }
            })
        })

        reset()

        const [formValues] = result.current
        console.log(formValues)
        expect(formValues).toEqual(initialForm)
    })
})
