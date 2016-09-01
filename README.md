# x-snippets
项目常用中的代码整理

最初这个项目只想提供针对于基于`bootstrap`封装的在后台项目使用的`vue`组件`Sublime`的一些常用的代码片段给后台开发人员，提高他们在写前端页面的效率。但是后台有人使用`JetBrains`系列的编辑器，但不知道该这么写对于的`snippet`。在`Live templates` 一个个添加的话实在太累了。发现`amazeui/snippets`有做很好的支持，具体是生成一个`.xml`文件,包含一些约定的配置的。


## 如何安装 ##

递归参数`--recursive`会自动初始化项目并更新

    $ git clone --recursive git@github.com:huixisheng/x-snippets.git ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/x-snippets

或者`submodule`单独更新

    $ git clone  git@github.com:huixisheng/x-snippets.git ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/x-snippets
    $ cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/x-snippets
    $ git submodule init && git submodule update


## 命令说明 ##

<table>
    <thead>
        <tr>
            <th>组件</th>
            <th>快捷命令</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>vue封装的通用表单</td>
            <td>x-admin-form-vue</td>
        </tr>
        <tr>
            <td>vue封装的通用表格</td>
            <td>x-admin-table-vue</td>
        </tr>
    </tbody>
</table>

## todo ##

- [ ] 添加x-系列的 JetBrains系列的支持
- [ ] 通过配置生成对应编辑器的snippet
- [ ] 整理其他的代码片段用submodule集成

## JetBrains系列编辑器代码片段碰到的问题 ##

*.xml写好的代码片段存放的路径。[具体可以看](https://github.com/amazeui/snippets/)

>Overview
Live templates let you insert frequently-used or custom code constructs into your source code file quickly, efficiently, and accurately.

>Live templates are stored in the following location:
Windows: <your home directory>\.<product name><version number>\config\templates
Linux: ~/.<product name><version number>/config/templates
OS X: ~/Library/Preferences/<product name><version number>/templates  [https://www.jetbrains.com/help/phpstorm/2016.2/live-templates.html](https://www.jetbrains.com/help/phpstorm/2016.2/live-templates.html)



[无法智能提示](https://github.com/amazeui/snippets/issues/2)目前的解决办法只能 `control + space`  或者输入 '<'开头

- [Auto-Completing Code](https://www.jetbrains.com/help/webstorm/2016.2/auto-completing-code.html)
- [WebStorm 2016.2 Help/Live Templates](https://www.jetbrains.com/help/webstorm/2016.2/live-templates.html)

- https://github.com/JasonMortonNZ/bootstrap3-phpstorm-plugin


## 问题 ##

### 如何删除`submodule` ###

    git submodule add https://github.com/zenorocha/sublime-javascript-snippets.git
    git submodule foreach git pull
    git rm --cached sublime-javascript-snippets/
    rm -rf sublime-javascript-snippets/
    git add .
    git commit -m '添加vuejs-snippets和联系submodule删除'
    git push origin master

### 更新后期添加的`submodule` ###

添加`bs3-sublime-plugin`。其他目录xx更新了`x-snippets`,后有添加了`vuejs-snippets-sublime`。在目录xx执行 `git submodule foreach git pull`

    Entering 'bs3-sublime-plugin'
    You are not currently on a branch.
    Please specify which branch you want to merge with.
    See git-pull(1) for details.

        git pull <remote> <branch>

    Stopping at 'bs3-sublime-plugin'; script returned non-zero status.

执行以下命令都不行

    $ git submodule update
    $ git submodule foreach git submodule update

还需要

    $ git submodule init

### 其他 ###

>// 如果修改了.gitmodule的remote url，使用下面的命令更新submodule的remote url
git submodule sync [来自](https://github.com/hokein/Wiki/wiki/Git-submodule%E4%BD%BF%E7%94%A8)


>修改 submodule 的坑
有些时候你需要对 submodule 做一些修改，很常见的做法就是切到 submodule 的目录，然后做修改，然后 commit 和 push。
这里的坑在于，默认 git submodule update 并不会将 submodule 切到任何 branch，所以，默认下 submodule 的 HEAD 是处于游离状态的 (‘detached HEAD’ state)。所以在修改前，记得一定要用 git checkout master 将当前的 submodule 分支切换到 master，然后才能做修改和提交。
如果你不慎忘记切换到 master 分支，又做了提交，可以用 cherry-pick 命令挽救。具体做法如下：
用 git checkout master 将 HEAD 从游离状态切换到 master 分支 , 这时候，git 会报 Warning 说有一个提交没有在 branch 上，记住这个提交的 change-id（假如 change-id 为 aaaa)
用 git cherry-pick aaaa 来将刚刚的提交作用在 master 分支上
用 git push 将更新提交到远程版本库中 [引用](http://blog.devtang.com/2013/05/08/git-submodule-issues/)
