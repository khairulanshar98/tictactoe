import swap from './Third';

test('renders App', async () => {
    expect(swap()).toBe('');
    expect(swap([])).toBe('');
    expect(swap([1])).toBe('1');
    expect(swap([1,2,3])).toBe('231');
    expect(swap([2,3,4,5,6,7])).toBe('456723');
    expect(swap([3,4,5,6,7,8,9,10])).toBe('678910345');
});