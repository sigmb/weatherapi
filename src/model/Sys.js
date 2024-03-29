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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenWeatherMapApi) {
      root.OpenWeatherMapApi = {};
    }
    root.OpenWeatherMapApi.Sys = factory(root.OpenWeatherMapApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Sys model module.
   * @module model/Sys
   * @version 2.5
   */

  /**
   * Constructs a new <code>Sys</code>.
   * @alias module:model/Sys
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Sys</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sys} obj Optional instance to populate.
   * @return {module:model/Sys} The populated <code>Sys</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'Number');
      }
      if (data.hasOwnProperty('sunrise')) {
        obj['sunrise'] = ApiClient.convertToType(data['sunrise'], 'Number');
      }
      if (data.hasOwnProperty('sunset')) {
        obj['sunset'] = ApiClient.convertToType(data['sunset'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Country code (GB, JP etc.)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Internal parameter
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Internal parameter
   * @member {Number} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Sunrise time, unix, UTC
   * @member {Number} sunrise
   */
  exports.prototype['sunrise'] = undefined;
  /**
   * Sunset time, unix, UTC
   * @member {Number} sunset
   */
  exports.prototype['sunset'] = undefined;
  /**
   * Internal parameter
   * @member {Number} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


