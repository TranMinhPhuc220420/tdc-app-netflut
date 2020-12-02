const NetflutLang = {
  locale: 'vi',

  vi: {
    NAV_MANAGER_HOME: 'Trang chủ',
    NAV_MANAGER_FILM: 'Phim',
    NAV_MANAGER_TYPE_FILM: 'Loại phim',
    NAV_MANAGER_CATEGORY: 'Thể loại phim',
    NAV_MANAGER_SETTINGS: 'Cài đặt',
    SUCCESS: 'Thành công',
    SUCCESS_TITLE: 'Thành công 😎',
    SUCCESS_UPLOAD_NEW_TYPE_FILM: 'Thêm thành công',
    FAIL: 'Không thành công',
    FAIL_TITLE: 'Thất bại 😥',
    FAIL_UPLOAD_NEW_TYPE_FILM: 'Thêm không thành công, hãy thử lại xem sao',
  },

  en: {
    NAV_MANAGER_HOME: 'Home',
    NAV_MANAGER_FILM: 'Film',
    NAV_MANAGER_TYPE_FILM: 'Type Film',
    NAV_MANAGER_CATEGORY: 'Category Film',
    NAV_MANAGER_SETTINGS: 'Setting',
    SUCCESS: 'Success',
    SUCCESS_TITLE: 'Success 😎',
    SUCCESS_UPLOAD_NEW_TYPE_FILM: 'Create New Success',
    FAIL: 'Fail',
    FAIL_TITLE: 'Fail 😥',
    FAIL_UPLOAD_NEW_TYPE_FILM: 'Create New Not Success',
  },

  setLocal: (lang) => {
    NetflutLang.locale = lang;
  },

  getMsg: (aMsgCd) => {
    switch (NetflutLang.locale) {
      case 'vi':
        return NetflutLang.vi[aMsgCd];

      case 'en':
        return NetflutLang.en[aMsgCd];

      default:
        return NetflutLang.vi[aMsgCd];
    }
  }
};

export default NetflutLang;
