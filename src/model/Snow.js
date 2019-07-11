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
    root.OpenWeatherMapApi.Snow = factory(root.OpenWeatherMapApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Snow model module.
   * @module model/Snow
   * @version 2.5
   */

  /**
   * Constructs a new <code>Snow</code>.
   * @alias module:model/Snow
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Snow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Snow} obj Optional instance to populate.
   * @return {module:model/Snow} The populated <code>Snow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('3h')) {
        obj['3h'] = ApiClient.convertToType(data['3h'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Snow volume for the last 3 hours
   * @member {Number} 3h
   */
  exports.prototype['3h'] = undefined;



  return exports;
}));


