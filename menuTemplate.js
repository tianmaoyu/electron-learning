
const file_menu=require("./menus/file")

const template = [
    file_menu,
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