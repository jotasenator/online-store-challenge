import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'


import LoadingSkeletonTable from '../../../components/skeletons/LoadingSkeletonTable'

describe('LoadingSkeletonTable test', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LoadingSkeletonTable />);
    });

    afterEach(() => {
        wrapper.unmount();
    });


    test('should render <LoadingSkeletonTable/> correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('should show me what is inside className=container', () => {
        expect(wrapper.find('.container').text()).toBe('<Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton />')
    })
    test('should show me what is inside className=head-table-skeleton', () => {
        expect(wrapper.find('.head-table-skeleton').text()).toBe('<Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton />')
    })

})
