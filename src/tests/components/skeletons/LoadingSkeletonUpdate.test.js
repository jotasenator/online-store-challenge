import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import LoadingSkeletonUpdate from '../../../components/skeletons/LoadingSkeletonUpdate'


describe('Snapshot from LoadingSkeletonUpdate', () => {

    test('should render <LoadingSkeletonUpdate/> correctly', () => {
        const wrapper = shallow(<LoadingSkeletonUpdate />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show me what is inside className=container', () => {
        const wrapper = shallow(<LoadingSkeletonUpdate />)
        expect(wrapper.find('.container').text()).toBe('<Skeleton /><Skeleton />')
    })
    test('should show me what is inside className=head-table-skeleton', () => {
        const wrapper = shallow(<LoadingSkeletonUpdate />)
        expect(wrapper.find('.head-table-skeleton').text()).toBe('<Skeleton />')
    })






})
