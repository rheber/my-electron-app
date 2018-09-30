const Application = require('spectron').Application;
const assert = require('power-assert');
const electronPath = require('electron');
const path = require('path');

describe('App', function() {
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

  describe('Screen1', function() {
    it('shows the word "Next"', function(done) {
      const p = this.app.client.getText('.next');
      p.then(function(selection) {
        try {
          assert(selection === 'Next');
          done();
        } catch(e) {
          done(e);
        }
      });
    });

    it('links to screen 2', async function() {
      await this.app.client.click('.next');
      const selection = await this.app.client.getText('.counter');
      assert(selection === 'Counter: 0');
    });
  });

  describe('Screen2', function() {
    it('increments 0 to 1', async function() {
      await this.app.client.click('.next');
      await this.app.client.click('.inc');
      const selection = await this.app.client.getText('.counter');
      assert(selection === 'Counter: 1');
    });

    it('eventually increments 0 to 1 using async', async function() {
      await this.app.client.click('.next');
      await this.app.client.click('.async-inc');
      await this.app.client.waitUntil(async () => {
        const selection = await this.app.client.getText('.counter');
        return selection === 'Counter: 1';
      }, 2100, 'expected counter to change');
    });
  });
});
