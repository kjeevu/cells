/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The RestDeleteDataSourceResponse model module.
* @module model/RestDeleteDataSourceResponse
* @version 1.0
*/
export default class RestDeleteDataSourceResponse {
    /**
    * Constructs a new <code>RestDeleteDataSourceResponse</code>.
    * @alias module:model/RestDeleteDataSourceResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestDeleteDataSourceResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestDeleteDataSourceResponse} obj Optional instance to populate.
    * @return {module:model/RestDeleteDataSourceResponse} The populated <code>RestDeleteDataSourceResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestDeleteDataSourceResponse();

            
            
            

            if (data.hasOwnProperty('Success')) {
                obj['Success'] = ApiClient.convertToType(data['Success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} Success
    */
    Success = undefined;








}


