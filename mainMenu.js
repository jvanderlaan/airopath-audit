module.exports = [
  {
    label: 'File',
    submenu: [
      { 
      	label: 'Import AP List',
      	click: () => { console.log('do something') },
      	accelerator: 'Ctr+Shift+O'
      },
      { label: 'Import Image', submenu: [
        {label: 'Image 1'},
        {label: 'Image 2'},
        {label: 'Image 3'},
        {label: 'Image 4'},
        {label: 'Image 5'}
        ] 
      },
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' }, 
      { role: 'close' }
    ]
  },
  {
    label: 'Info',
    submenu: [
      { label: 'Standards' },
      { label: 'Tolerances' }
    ]
  } 
]