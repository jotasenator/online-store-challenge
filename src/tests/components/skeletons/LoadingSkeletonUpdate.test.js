import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import LoadingSkeletonUpdate from '../../../components/skeletons/LoadingSkeletonUpdate'


describe('Snapshot from LoadingSkeletonUpdate', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LoadingSkeletonUpdate />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('should render <LoadingSkeletonUpdate/> correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should show me what is inside className=container', () => {
        expect(wrapper.find('.container').text()).toBe('<Skeleton /><Skeleton />')
    })
    test('should show me what is inside className=head-table-skeleton', () => {
        expect(wrapper.find('.head-table-skeleton').text()).toBe('<Skeleton />')
    })






})
