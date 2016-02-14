import {MODALITIES} from './util/facade';

MODALITIES.forEach(m => {
  describe(`[${m.name}] globals`, () => {
  	it('should remove properties added to the global object', () => {
      m.run(() => {
        global.a = 5;
        global.b = 10;

        m.run(() => {
          global.c = 15;
          global.d = 20;
        });

        expect(global.c).toBeUndefined();
        expect(global.d).toBeUndefined();
      });

      expect(global.a).toBeUndefined();
      expect(global.b).toBeUndefined();
      expect(global.c).toBeUndefined();
      expect(global.d).toBeUndefined();
    });
  });
});
