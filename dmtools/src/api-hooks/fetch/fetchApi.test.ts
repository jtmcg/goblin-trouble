import fetchMock from 'fetch-mock';
import fetchApi from './fetchApi';
import loggerOriginal from '../../dev/logger';

jest.mock('../dev/logger');

const loggerLog = loggerOriginal.log as jest.Mock;

describe('fetchApi', () => {
    beforeEach(() => {
        loggerLog.mockReset();
        fetchMock.reset();
    })
    describe('when the fetch is successful', () => {
        beforeEach(() => {
            fetchMock.get('https://foo.bar', {data: 'data'});
        })
        it('returns the data', async () => {
            const response = await fetchApi({url: 'https://foo.bar', method: 'GET'})
            console.log(response)
            expect(response).toMatchObject({data: 'data'})
        })
    })

    describe('when the fetch has a bad response', () => {
        beforeEach(() => {
            fetchMock.get('https://foo.bar', 500);
        });
        it('logs an error', async () => {
            await fetchApi({url: 'https://foo.bar', method: 'GET'})
            expect(loggerLog).toBeCalled();
        })
    })
})