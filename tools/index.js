// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const getProjectPath = (filePath) => path.join(cwd, filePath)

fs.readFile(getProjectPath('/tools/webpackConfig.js'), (_, data) => {
  fs.writeFile(getProjectPath('/node_modules/antd-tools/lib/getWebpackConfig.js'), data, (err) => {
    if (err) throw err;
    console.log('文件已保存');
  })
})