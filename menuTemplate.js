const template = [
    {
        label: '文件(F)',
        submenu: [
            {
                label: '新建',
                accelerator: 'CmdOrCtrl+N',
                click() {

                }
            },
            {
                label: '新建窗口',
                accelerator: 'CmdOrCtrl+S',
                click() {

                }
            },
            {
                type: 'separator'
            },

            { label: '打开', accelerator: 'CmdOrCtrl+O', },
            { label: '打开文件夹' },
            { type: 'separator' },


            { label: '快速打开', accelerator: 'CmdOrCtrl+P', },
            { label: '打开最近文件' },
            { label: '选择编码重新打开' },

            { type: 'separator' },
            { label: '保存', accelerator: 'CmdOrCtrl+S',},
            { label: '另存为...', accelerator: 'CmdOrCtrl+Shift+S',},
            { label: '保存全部打开的文件...',},
            { type: 'separator' },

            { label: '属性...', },
            { label: '打开文件位置...', },
            { label: '在侧边栏中显示...', },
            { label: '删除...', },
            { type: 'separator' },

            { label: '导入...', },
            { label: '导出', },
            { label: '打印...', accelerator: 'CmdOrCtrl+Shift+S',},
            { type: 'separator' },
            { label: '偏好设置...', },
            { type: 'separator' },
            {
                label: '关闭',
                accelerator: 'CmdOrCtrl+,',
                click() {
                    app.quit()
                }
            }

        ]
    },
    {
        label: '编辑(E)',
        submenu: [
            {
                label: '新建',

            },
            {
                label: '保存',

            }
        ]
    },
    {
        label: '段落(P)',
        submenu: [
            {
                label: '新建',

            },
            {
                label: '保存',

            }

        ]
    },
    {
        label: '格式(O)',
        submenu: [
            {
                label: '新建',

            },
            {
                label: '保存',

            }

        ]
    },
    {
        label: '视图(V)',
        submenu: [
            {
                label: '新建',

            },
            {
                label: '保存',

            }

        ]
    },
    {

        label: '主题(T)',
        submenu: [
            {
                label: '新建',

            },
            {
                label: '保存',

            }

        ]

    }
    ,
    {

        label: '帮助(T)',
        submenu: [
            {
                label: '新建',

            },
            {
                label: '保存',

            }
        ]
    }
];
// 导出模块
module.exports = template;