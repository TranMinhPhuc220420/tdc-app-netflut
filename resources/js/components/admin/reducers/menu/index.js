import NetflutLang from '../../lang/NetflutLang'

const dataMenuNavLeft = [
  {
    text: NetflutLang.getMsg('NAV_MANAGER_HOME'),
    isActive: false,
    iconCls: 'fas fa-home',
    path: '/admin'
  },
  {
    text: NetflutLang.getMsg('NAV_MANAGER_FILM'),
    isActive: false,
    iconCls: 'fas fa-th',
    path: '/admin/film'
  },
  {
    text: NetflutLang.getMsg('NAV_MANAGER_CATEGORY'),
    isActive: false,
    iconCls: 'fas fa-sitemap',
    path: '/admin/category-type'
  },
  {
    text: NetflutLang.getMsg('NAV_MANAGER_SETTINGS'),
    isActive: false,
    iconCls: 'fas fa-user-cog',
    path: '/admin/setting'
  },
];
const menu = (state, action) => {
  if (action.type === 'SET_MENU') {
    state = action.data;
  } else {
    state = dataMenuNavLeft;
  }
  return state;
};

export default menu;
