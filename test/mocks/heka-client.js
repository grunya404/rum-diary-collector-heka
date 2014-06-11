/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function MockHekaClient() {
  // nothing to do.
}

MockHekaClient.prototype = {
  incr: function (message, metaData, sampleRate) {
    this.lastIncr = {
      message: message,
      metaData: metaData,
      sampleRate: sampleRate
    };
  }
};

module.exports = MockHekaClient;
