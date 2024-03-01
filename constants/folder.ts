export const MODALS_ID = {
  addFolder: 'addFolder',
  share: 'share',
  rename: 'rename',
  delete: 'delete',
  deleteLink: 'deleteLink',
  addToFolder: 'addToFolder',
}

export const BUTTONS = [
  {
    iconSource: '/images/share.svg',
    text: '공유',
    modalId: MODALS_ID.share,
  },
  {
    iconSource: '/images/pen.svg',
    text: '이름 변경',
    modalId: MODALS_ID.rename,
  },
  {
    iconSource: '/images/trash.svg',
    text: '삭제',
    modalId: MODALS_ID.delete,
  },
]
