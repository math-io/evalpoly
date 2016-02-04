'use strict';

var round = require( 'math-round' );
var evalpoly = require( './../lib' );

var coef;
var sign;
var poly;
var eqn;
var v;
var i;

// Create an array of random coefficients...
coef = new Float64Array( 10 );
for ( i = 0; i < coef.length; i++ ) {
	if ( Math.random() < 0.5 ) {
		sign = -1;
	} else {
		sign = 1;
	}
	coef[ i ] = sign * round( Math.random()*100 );
}
eqn = toStr( coef );
console.log( 'f(x) = %s', eqn );

// Evaluate the polynomial at random values...
for ( i = 0; i < 100; i++ ) {
	v = Math.random() * 100;
	console.log( 'f(%d) = %d', v, evalpoly( coef, v ) );
}

// Generate an `evalpoly` function...
poly = evalpoly.factory( coef );

console.log( '\nf(x) = %s', eqn );
for ( i = 0; i < 100; i++ ) {
	v = Math.random()*100 - 50;
	console.log( 'f(%d) = %d', v, poly( v ) );
}

function toStr( coef ) {
	var str;
	var c;
	var n;
	var i;

	n = coef.length;
	str = coef[ n-1 ] + 'x^' + n;
	for ( i = n-2; i >= 0; i-- ) {
		c = coef[ i ];
		if ( c < 0 ) {
			c = -c;
			str += ' - ';
		} else {
			str += ' + ';
		}
		str += c + 'x^' + i;
	}
	return str;
}
