import useFetchCalendarData from './useFetchCalendarData';
import fetchMock from 'fetch-mock';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchCalendarData', () => {
    beforeEach(() => {
        fetchMock.reset();
    })
    describe('when useFetchCalendarData is called', () => {
        let result: {current: ReturnType<typeof useFetchCalendarData>}
        describe('and there are no errors', () => {
            beforeEach(() => {
                fetchMock.mock('~/data/calendar.json', {data: 'data'});
            })
            it('returns the calendar data', () => {
                ({result} = renderHook(useFetchCalendarData))
                expect(result.current).toMatchObject({data: 'data'});
            })
        })
    })
})
