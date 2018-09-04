const fg = require('fast-glob');
const fse = require('fs-extra');
const path = require('path');
const fs = require('fs');
const signale = require('signale');
const nodeAtomizr = require('node-atomizr');
const template = require('art-template');
const userHome = require('user-home');

class Snippet {
  constructor(snippetType) {
    this.snippetType = snippetType;
    this.srcPath = path.join(__dirname, '../src', snippetType);
    this.sublimeParse();
    this.vscodeParse();
  }

  getSnippetList() {
    const snippetType = this.snippetType;
    const srcPath = this.srcPath;
    const patterns = [srcPath + '/**/*.js', srcPath + '/**/*.vue', srcPath + '/**/*.html', srcPath + '/**/*.css', '!' + srcPath + '/**/config.js'];
    const entries = fg.sync(patterns);
    const list = {};
    entries.forEach((element) => {
      const basename = path.basename(element);
      const extname = path.extname(element);
      let name = path.basename(path.dirname(element));
      let obj = list[name] || {};
      let content = '';
      if (['.vue', '.js', '.html', '.css'].indexOf(extname) >= 0) {
        content = fs.readFileSync(element, 'utf8');
      }
      let config = {};
      const configElementPath = path.join(path.dirname(element), 'config.js');
      if (fs.existsSync(configElementPath)) {
        config = require(configElementPath);
      }
      if (config.name) {
        name = config.name;
      }
      const trigger = snippetType + ':' + name;
      obj = Object.assign(obj, {
        content,
        trigger,
      }, config);
      list[name] = obj;
    });
    return list;
  }

  sublimeParse() {
    const list = this.getSnippetList();
    const sublimeSnippetTemplate = path.join(__dirname, 'template/sublime.tpl');
    require.extensions['.tpl'] = template.extension;
    const view = require(sublimeSnippetTemplate);
    const snippetType = this.snippetType;
    const distBasePath = path.join(__dirname, '../dist/sublime', snippetType);

    Object.entries(list).forEach(([key, value]) => {
      const html = view(value);
      fse.outputFileSync(path.join(distBasePath, `${key}.sublime-snippet`), html);
    });
    signale.success('sublimeParse successful');
  }

  vscodeParse() {
    const list = this.getSnippetList();
    const sublimeSnippetTemplate = path.join(__dirname, 'template/sublime.tpl');
    require.extensions['.tpl'] = template.extension;
    template.defaults.minimize = false;
    const view = require(sublimeSnippetTemplate);
    const snippetType = this.snippetType;
    const distBasePath = path.join(__dirname, '../dist/vscode', snippetType + '.code-snippets');
    let vscodeSnippet = {};
    Object.entries(list).forEach(([key, value]) => {
      const html = view(value);
      const output = nodeAtomizr.sublime2vscode(html, { is_snippet: true, scope: '.css' });
      vscodeSnippet = Object.assign(vscodeSnippet, JSON.parse(output));
      // console.log(vscodeSnippet);
    });
    fse.outputFileSync(distBasePath, JSON.stringify(vscodeSnippet, null, 2));
    try {
      fse.copySync(distBasePath, path.join(userHome, 'Library/Application\ Support/Code/User/snippets/', snippetType + '.code-snippets'));
      console.log('copy success!');
    } catch (err) {
      console.error(err)
    }
    signale.success('vscodeParse successful');
  }

}

const instanceSnippetVue = new Snippet('x-vue');
const instanceSnippetWepy = new Snippet('x-wepy');
const instanceSnippetJs = new Snippet('x-js');