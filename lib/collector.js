/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// A Heka collector. Results are sent to a Heka instance.

'use strict';

var heka = require('heka-node');

function HekaCollector(options) {
  options = options || {};

  this.message = options.message || 'client.event';

  var hekaConfig = {
    stream: {
      factory: 'heka-node/streams:udpStreamFactory',
      hosts: 'localhost',
      ports: 4880,
      encoder: 'heka-node/senders/encoders:protobufEncoder'
    },
    logger: 'test',
    severity: 5
  };

  this.hekaClient = options.hekaClient || heka.clientFromJsonConfig(JSON.stringify(hekaConfig));
  this.sampleRate = new heka.BoxedFloat(options.sampleRate || 1.0);
}

HekaCollector.prototype = {
  destroy: function destroy() {
    // nothing to do.
  },

  write: function write(event) {
    var logData = {
      count: 1,
      event: event
    };

    this.hekaClient.incr(this.message, logData, this.sampleRate);
  },

  flush: function flush() {
    // nothing to do.
  }
};

module.exports = HekaCollector;

