import {MODALITIES} from './util/facade';

MODALITIES.forEach(m => {

  describe(`[${m.name}]`, () => {
    it('should not execute tasks when the context exists only within a single vm turn', () => {
      let fns = [
        (task) => global.setTimeout(task, 0),
        (task) => global.setTimeout(task, 100),
        (task) => global.setTimeout(task, 1000),
        (task) => global.setImmediate(task),
        (task) => global.setInterval(task, 100),
        (task) => global.setInterval(task, 1000)
      ];

      fns.forEach(fn => {
        let mockTask = jasmine.createSpy();

        m.run(() => {
          fn(mockTask);
        });

        expect(fn).not.toHaveBeenCalled();
      });
    });
  });

});
