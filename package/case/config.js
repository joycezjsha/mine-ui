/**
 * 权限查询API
 * author:lifei
 * data:2019/04/26
 * @type {{getOrgRights: rights_api.getOrgRights, getUserRights: rights_api.getUserRights}}
 */
import httpConnect from './httpUtil'
const config = {
  GET_CASE_DATA:(url,data) => {
    return httpConnect({
      url:url,
      method:'get',
      params:data
    })}
}
export {config};
