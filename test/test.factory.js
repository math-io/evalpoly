'use strict';

// MODULES //

var tape = require( 'tape' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof factory === 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var evalpoly = factory( [1,2,3] );
	t.ok( typeof evalpoly === 'function', 'returns a function' );
	t.end();
});

tape( 'if provided an empty coefficient array, the generated `evalpoly` function always returns `0`', function test( t ) {
	var evalpoly = factory( [] );
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = evalpoly( i );
		t.equal( v, 0, 'returns 0' );
	}
	t.end();
});

tape( 'if provided only 1 coefficient, the generated `evalpoly` function always returns that coefficient', function test( t ) {
	var evalpoly = factory( [2] );
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = evalpoly( i );
		t.equal( v, 2, 'returns first coefficient' );
	}
	t.end();
});

tape( 'if the value at which to evaluate a polynomial is `0`, the generated `evalpoly` function returns the first coefficient', function test( t ) {
	var evalpoly = factory( [3,2,1] );
	var v;

	v = evalpoly( 0 );
	t.equal( v, 3, 'returns first coefficient' );

	t.end();
});

tape( 'the generated `evalpoly` function evaluates a polynomial', function test( t ) {
	var evalpoly;
	var v;

	evalpoly = factory( [ 4, 5 ] );
	v = evalpoly( 6 );
	t.equal( v, 34, 'returns 34' );

	evalpoly = factory( [ -4, -5 ] );
	v = evalpoly( 6 );
	t.equal( v, -34, 'returns -34' );

	evalpoly = factory( [ -19, 7, -4, 6 ] );
	v = evalpoly( 3 );
	t.equal( v, 128, 'returns 128' );

	t.end();
});
