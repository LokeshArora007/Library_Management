const LocalStorageService = (function () {
  let _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setLoginInfo(tokenObj) {
    console.log(tokenObj.userInfo);
    localStorage.setItem('accessToken', tokenObj.accessToken);
    localStorage.setItem('userInfo', tokenObj.userInfo);
    localStorage.setItem('refreshToken', tokenObj.refreshToken);
  }
  function _getAccessToken() {
    return localStorage.getItem('accessToken');
  }
  function _clearToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('refreshToken');
  }
  return {
    getService: _getService,
    setLoginInfo: _setLoginInfo,
    getAccessToken: _getAccessToken,
    clearToken: _clearToken,
  };
})();
export default LocalStorageService;
