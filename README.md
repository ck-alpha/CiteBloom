# CiteBloom

**Personalized Research Discovery Agent for Zotero**

基于 Zotero 的个性化科研文献发现 Agent。

CiteBloom 根据文献库中的标签与元数据构建兴趣画像，结合候选发现、相关性排序和
MMR 多样性选择，为推荐提供可追溯的证据，并通过确认后的反馈事件更新持久化画像。

本仓库提供产品源码、运行资源及构建配置。完整开发历史在
[CiteBloom-Dev](https://github.com/ck-alpha/CiteBloom-Dev)。

## Source

- `src/recommendation/`：兴趣画像、候选发现、排序、证据与反馈持久化。
- `src/agent/`：Agent Runtime、工具及运行时 Skill 模板。
- `src/modules/`：Zotero 界面与交互。
- `addon/`：插件资源、界面、翻译与运行组件。
- `typings/`、`registry/`：类型声明与模型能力配置。

## Build

使用 Node.js 24：

```sh
npm ci
npm run build
```

构建产物位于 `.scaffold/build/citebloom.xpi`。插件保留上游 add-on ID，
不能与上游插件在同一 Zotero profile 中并存。

## License and credits

基于 [Yile Wang 与贡献者的 llm-for-zotero](https://github.com/yilewang/llm-for-zotero)，
遵循 [AGPL-3.0-or-later](LICENSE)。保留上游版权与现有代码声明。
科研推荐领域能力基于已有 Zotero UI、文献处理和通用 Agent Runtime 扩展。

感谢 [Zotero Plugin Template](https://github.com/windingwind/zotero-plugin-template)、
[@jianghao-zhang](https://github.com/jianghao-zhang)、
[@boltma](https://github.com/boltma) 与
[@renyong18](https://github.com/renyong18) 等上游贡献者。
