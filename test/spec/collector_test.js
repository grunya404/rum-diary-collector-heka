/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

var assert = require('chai').assert;

var HekaCollector = require('../../index');
var MockHekaClient = require('../mocks/heka-client');

describe('heka-collector', function () {
  var hekaClient, collector;

  beforeEach(function () {
    hekaClient = new MockHekaClient();

    collector = new HekaCollector({
      message: 'message',
      hekaClient: hekaClient
    });
  });

  describe('write', function () {
    it('should increment a counter on the heka client', function () {
      collector.write({
        uuid: 'loadEvent1'
      });

      assert.equal(hekaClient.lastIncr.message, 'message');
      assert.equal(hekaClient.lastIncr.metaData.event.uuid, 'loadEvent1');
    });
  });
});



