import { loadTest } from './testService';

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 'test data' }),
    })
);

test('prueba fetchFromAPI', async () => {
    const data = await loadTest();
    expect(global.fetch).toHaveBeenCalledWith('/test.json');
    expect(data).toEqual({ data: 'test data' });
    global.fetch.mockRestore();
});