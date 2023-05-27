import useFetchCalendarData from './useFetchCalendarData';
import fetchApiOriginal from './fetch/fetchApi';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

jest.mock('./fetchApi')

const fetchApi = fetchApiOriginal as jest.Mock;

const mockCalendarData = {
    "year_len": 336,
    "events": 0,
    "n_months": 12,
    "months": [
      "Primana",
      "Sigana",
      "Triana",
      "Quartana",
      "Quintana",
      "Sectana",
      "Septana",
      "Octana",
      "Novana",
      "Dectana",
      "Ontana",
      "Doctana"
    ],
    "month_len": {
      "Primana": 28,
      "Sigana": 28,
      "Triana": 28,
      "Quartana": 28,
      "Quintana": 28,
      "Sectana": 28,
      "Septana": 28,
      "Octana": 28,
      "Novana": 28,
      "Dectana": 28,
      "Ontana": 28,
      "Doctana": 28
    },
    "week_len": 7,
    "weekdays": [
      "Sunday",
      "Moonday",
      "Skueday",
      "Wledgesday",
      "Thunday",
      "Freeday",
      "Starday"
    ],
    "n_moons": 1,
    "moons": [],
    "lunar_cyc": { "0": 28 },
    "lunar_shf": { "0": 0 },
    "year": 0,
    "first_day": 0,
    "notes": {
      "0-1-1": "foo",
      "956-1-1": ""
    }
  };
  

describe('useFetchCalendarData', () => {
    let wrapper: ({children,}: {children?: React.ReactNode;}) => ReturnType<typeof QueryClientProvider>;
    beforeEach(() => {
        fetchApi.mockReset();
        const queryClient = new QueryClient();
        wrapper = ({children}) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        );
    })
    describe('when useFetchCalendarData is called', () => {
        let result: {current: ReturnType<typeof useFetchCalendarData>}
        let waitFor: ReturnType<typeof renderHook>["waitFor"]
        describe('and there are no errors', () => {
            beforeEach(() => {
                fetchApi.mockReturnValue(mockCalendarData);
            })
            it('returns the calendar data', async () => {
                ({result, waitFor} = renderHook(useFetchCalendarData, {wrapper}))
                await waitFor(() => !result.current.isLoading)
                expect(result.current.data).toMatchObject(mockCalendarData);
            })
        })

        describe('and there are errors', () => {
          it('returns isError: true', async () => {
              ({result, waitFor} = renderHook(useFetchCalendarData, {wrapper}))
              await waitFor(() => !result.current.isLoading)
              expect(result.current.isError).toBe(true);
      })
    })
  })
})
