import {MODALITIES} from './util/facade';

MODALITIES.forEach(m => {

  describe(`[${m.name}]`, () => {
  	it('should remove properties added to the global object', () => {
      global.z = 100;

      m.run(() => {
        global.a = 5;
        global.b = 10;

        m.run(() => {
          global.c = 15;
          global.d = 20;
        });

        expect(global.z).toBe(100);
        expect(global.c).toBeUndefined();
        expect(global.d).toBeUndefined();
      });

      expect(global.z).toBe(100);
      expect(global.a).toBeUndefined();
      expect(global.b).toBeUndefined();
      expect(global.c).toBeUndefined();
      expect(global.d).toBeUndefined();
    });
  });

});
