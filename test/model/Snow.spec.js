/**
 * OpenWeatherMap API
 * Get the current weather, daily forecast for 16 days, and a three-hour-interval forecast for 5 days for your city. Helpful stats, graphics, and this day in history charts are available for your reference. Interactive maps show precipitation, clouds, pressure, wind around your location stations. Data is available in JSON, XML, or HTML format. **Note**: This sample Swagger file covers the `current` endpoint only from the OpenWeatherMap API. <br/><br/> **Note**: All parameters are optional, but you must select at least one parameter. Calling the API by city ID (using the `id` parameter) will provide the most precise location results.
 *
 * OpenAPI spec version: 2.5
 * Contact: some_email@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenWeatherMapApi);
  }
}(this, function(expect, OpenWeatherMapApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenWeatherMapApi.Snow();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Snow', function() {
    it('should create an instance of Snow', function() {
      // uncomment below and update the code to test Snow
      //var instance = new OpenWeatherMapApi.Snow();
      //expect(instance).to.be.a(OpenWeatherMapApi.Snow);
    });

    it('should have the property _3h (base name: "3h")', function() {
      // uncomment below and update the code to test the property _3h
      //var instance = new OpenWeatherMapApi.Snow();
      //expect(instance).to.be();
    });

  });

}));