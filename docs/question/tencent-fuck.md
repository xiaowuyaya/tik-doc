# 关于国服更新 18 版本之后导致无法使用问题的解决方法
:::tip 注意
**该方案有一个局限性，只对操作的账号生效，当切换账号后，需要在执行一次下方操作**

以下方案二选一即可。
:::

## 通过Tik进行操作
:::tip 提示
以下操作请在关闭 wegame 的情况下操作。
在进行登入客户端时可能会遇到无法输入，提示病毒的问题，这一部可以直接退出Tik在密码输入完登入之后再打
:::

1. 退出`WeGame`、`游戏客户端`之后 打开Tik对局助手
2. 在 **常用功能** 中 选择游戏客户端，游戏客户端程序路径
    > 类似这样的路径 D:\WeGameApps\英雄联盟\TCLS\Client.exe
3. 选择完成之后，点击 **客户端切换:体验服**，切换到体验服之后点击上方的`启动`
4. 输入账号密码登入之后大区会只有一个`试炼之地` 进入该大区到大厅之后退出
5. 点击Tik中 **客户端切换:正式服** 之后再点击`启动`
6. 完成

## 手动操作方案

:::tip 提示
以下操作请在关闭 wegame 的情况下操作。
直接启动客户端： 开始菜单中找英雄联盟客户端直接运行，如果找不到，可以直接运行 英雄联盟安装目录/TCLS/Client.exe
:::


1. 备份 `英雄联盟安装目录/TCLS/config/dirserver.xml` 文件 复制一份到桌面上

2. 修改 `英雄联盟安装目录/TCLS/config/dirserver.xml` 文件内容为如下配置

```xml
<Server>
  <DirServer count="1" SuccessfulServerID="1" SuccessfulPort="5223">
      <server1 host="tdir-test.lol.qq.com" />
      <portlist count="1" port1="5223">0</portlist>
  </DirServer>
</Server>
```

3. 启动游戏客户端 登入游戏，大区选择`试炼之地`，等进入到大厅之后再退出
   1. 这一部可能会遇到登入客户端无法输入，提示病毒的问题，这一部可以直接退出Tik在密码输入完登入之后再打
4. 将桌面上备份的`dirserver.xml`文件再替换回原来路径 

