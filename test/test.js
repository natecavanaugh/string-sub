'use strict';
var assert = require('assert');
var sub = require('../');

it(
	'should format with objects',
	function() {
		assert.strictEqual(sub('Hello {subject}, {greeting}!', {greeting: 'nice to meet you', subject: 'world'}), 'Hello world, nice to meet you!');
	}
);

it(
	'should format with arrays',
	function() {
		assert.strictEqual(sub('Hello {0}, {1}!', ['world', 'nice to meet you']), 'Hello world, nice to meet you!');
	}
);

it(
	'should format with arguments',
	function() {
		assert.strictEqual(sub('Hello {0}, {1}!', 'world', 'nice to meet you'), 'Hello world, nice to meet you!');
	}
);