export default [
  {
    path: '/manager/noticeList/notice',
    name: 'notice',
    meta: {
      label: '通知',
      requireAuth: true,
      permission: "notice_left"
    },
    component: () => import('./noticeList'),
  },{
    path: '/manager/noticeList/perLetter',
    name: 'perLetter',
    meta: {
      label: '私信',
      requireAuth: true,
      permission: "notice_left"
    },
    component: () => import('./noticeList'),
  },
  {
    path: '/manager/noticeForm/add',
    name: 'noticeForm_Add',
    meta: {
      label: '新增通知',
      requireAuth: true,
      permission: 'notice_add'
    },
    component: () => import('./noticeForm')
  },
  {
    path: '/manager/noticeForm/edit/:noticeId',
    name: 'noticeForm_Edit',
    meta: {
      label: '编辑通知',
      requireAuth: true,
      permission: 'notice_edit'
    },
    component: () => import('./noticeForm')
  },
  {
    path: '/manager/noticeDisplay/:noticeId',
    name: 'noticeDisplay',
    meta: {
      label: '查看通知',
      requireAuth: true,
      permission: 'notice_display'
    },
    component: () => import('./noticeDisplay')
  }
]
