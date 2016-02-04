'use strict';

// EVALPOLY //

/**
* FUNCTION: evalpoly( c, x )
*	Evaluates a polynomial.
*
* @param {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} c - polynomial coefficients sorted in ascending degree
* @param {Number} x - value at which to evaluate the polynomial
* @returns {Number} evaluated polynomial
*/
function evalpoly( c, x ) {
	var p;
	var i;
	
	i = c.length;
	if ( i < 2 || x === 0 ) {
		if ( i === 0 ) {
			return 0;
		}
		return c[ 0 ];
	}
	i -= 1;

	// Use Horner's rule (http://en.wikipedia.org/wiki/Horner's_method) to achieve efficient computation...
	p = c[ i ]*x + c[ i-1 ];
	i -= 2;
	while ( i >= 0 ) {
		p = p*x + c[ i ];
		i -= 1;
	}
	return p;
} // end FUNCTION evalpoly()


// EXPORTS //

module.exports = evalpoly;
