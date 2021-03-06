const Application = require('spectron').Application;
const assert = require('power-assert');
const electronPath = require('electron');
const path = require('path');

describe('Hello', function() {
  describe('Mocha', function() {
    it('should equate 2+2 with 4', function() {
      assert(2 + 2 === 4);
    });
  });

  describe('Spectron', function() {
    this.timeout(10 * 1000);

    beforeEach(function() {
      this.app = new Application({
        path: electronPath,
        args: [path.join(__dirname, '..')]
      });
      return this.app.start();
    });

    afterEach(function() {
      if(this.app && this.app.isRunning()) {
        return this.app.stop();
      }
    });

    it('shows a window', function() {
      return this.app.client.getWindowCount().then(function(count) {
        assert(count >= 1);
      });
    });
  });
});
