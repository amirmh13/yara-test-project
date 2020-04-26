import { ShortSentencePipe } from './short-sentence.pipe';

describe('ShortSentencePipe', () => {
  it('create an instance', () => {
    const pipe = new ShortSentencePipe();
    expect(pipe).toBeTruthy();
  });
});
