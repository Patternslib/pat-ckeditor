# Changelog



## [3.2.0](https://github.com/patternslib/pat-ckeditor/compare/3.1.0...3.2.0) (2022-10-17)


### Bug Fixes


* Fix initialization of Module Federation. This is done by the plone main/host bundle. ([598ded1](https://github.com/patternslib/pat-ckeditor/commit/598ded13057ea37bddbc26d7c4f56c049a15d3a9))


### Maintenance


* Switch to class based pattern. ([8c8ff60](https://github.com/patternslib/pat-ckeditor/commit/8c8ff605322f615480366cae0595732e0722e4a5))

## [3.0.0](https://github.com/patternslib/pat-ckeditor/compare/3.0.0-alpha.0...3.0.0) (2022-06-28)


### Maintenance


* @patternslib/patternslib needs to be installed. Adding to devDependencies to avoid version clashes with other packages depending on it. ([d5beb11](https://github.com/patternslib/pat-ckeditor/commit/d5beb11fb5c287248485bc2aaae46683873b3caa))

* Upgrade to @patternslib/dev 2.2.0 and adapt module federation config. ([0eb24c7](https://github.com/patternslib/pat-ckeditor/commit/0eb24c728e00bcad3b157365cc87861cd1e9a9aa))

## [3.0.0-alpha.0](https://github.com/patternslib/pat-ckeditor/compare/2.0.0...3.0.0-alpha.0) (2022-06-15)


### Features


* **Build:** Build module federation enabled bundles. ([0c7c22f](https://github.com/patternslib/pat-ckeditor/commit/0c7c22f186cffa6256c6979b8a5c8967abfd37b9))


### Breaking Changes


* Depend on @patternslib/dev and extend config from there. ([1520231](https://github.com/patternslib/pat-ckeditor/commit/1520231746bee968fe94a1ba098a93da048dff9e))

* Extend babel config from @patternslib/dev. ([b2763f8](https://github.com/patternslib/pat-ckeditor/commit/b2763f8fc04780ef78f4bb2174cd41a5c17f772d))

* Extend commitlint config from @patternslib/dev. ([05b8e2a](https://github.com/patternslib/pat-ckeditor/commit/05b8e2a8a771b6605e7275e1d157fa3809b4c28d))

* Extend eslint config from @patternslib/dev. ([bcbcb8f](https://github.com/patternslib/pat-ckeditor/commit/bcbcb8f100dc5fd15129e3d7e7fb515046e3ec29))

* Extend jest config from @patternslib/dev. ([4317c5b](https://github.com/patternslib/pat-ckeditor/commit/4317c5b0587d909a6c04dace74c40eb9cab17d95))

* Extend Makefile from @patternslib/dev. ([3d4b116](https://github.com/patternslib/pat-ckeditor/commit/3d4b116c3ab596f2cc23fc2f553f70b8d40b87b2))

* Extend prettier config from @patternslib/dev. ([bfa8953](https://github.com/patternslib/pat-ckeditor/commit/bfa8953a6748b6963efe40f6b4c23492aa252f51))

* Extend release-it config from @patternslib/dev. ([67a4d6d](https://github.com/patternslib/pat-ckeditor/commit/67a4d6da5f4a55813e0002c792e660a393c15e85))

* Extend webpack config from @patternslib/dev. ([3155d8c](https://github.com/patternslib/pat-ckeditor/commit/3155d8ce0f178f86c6e80fa572f7ed278a760495))


### Maintenance


* **Build:** @patternslib/patternslib as peerDependency. ([2d3f34b](https://github.com/patternslib/pat-ckeditor/commit/2d3f34b28a9ba54476c00a426520c5f598e2534e))Move @patternslib/patternslib dependency to peerDependencies and set to any version to avoid version conflicts when this package is a dependency of another Patternslib based package.

* **Build:** Add @patternslib/patternslib also to devDependencies so that we get it installed. ([262ae61](https://github.com/patternslib/pat-ckeditor/commit/262ae61cb54cba180f86ff858ec8343d11dc08fc))

* **build:** Add build:dev script to package.json to create a unminified development build. ([cb029c2](https://github.com/patternslib/pat-ckeditor/commit/cb029c2d630455f4bafe2d79425bd77569b4f66d))

* **Build:** Add keyword "patternslib" to package.json. ([f29e735](https://github.com/patternslib/pat-ckeditor/commit/f29e73596832042752335cead52374ea5634f110))

* **Build:** Extend jest.config.js from Patternslib and reuse their setupTests file too. ([ad5b168](https://github.com/patternslib/pat-ckeditor/commit/ad5b16897b2bd08de9eb63fea161e5b044056b30))

* **Build:** Keep yarn.lock in repository. ([85bd5b5](https://github.com/patternslib/pat-ckeditor/commit/85bd5b5789f2e651b15ed84b94099e8445b89cbf))

* **Build:** Makefile - Allow OTP when publishing to npm, build bundles and publish them on GitHub, add pre-release targets. ([6653f88](https://github.com/patternslib/pat-ckeditor/commit/6653f88a4189309f83f14bc79c285b1a2d55ae18))

* **Build:** Remove dependency regenerator-runtime except from test setup. The async/await runtime handling is already built-in in current Babel. ([c9b3174](https://github.com/patternslib/pat-ckeditor/commit/c9b3174cc7172b4d252d199e66a12f7c038a34b8))

* **Build:** Update GitHub actions setup. ([b73c7f1](https://github.com/patternslib/pat-ckeditor/commit/b73c7f1abb70a28f1ebf258339583ed7f287dc57))

* **Build:** Upgrade and cleanup dependencies. ([e2b52b7](https://github.com/patternslib/pat-ckeditor/commit/e2b52b7428b5f903e89d8e7b758339c19bbecc06))

* **Build:** Upgrade ckeditor to 34.1.0. ([028d9de](https://github.com/patternslib/pat-ckeditor/commit/028d9de1643d309374c478fa9a106699cad34e09))

* **webpack:** Configure devServer static directory. ([66dcd05](https://github.com/patternslib/pat-ckeditor/commit/66dcd05c9e9e371ae67056282ca57b23816c0daf))

## [2.0.0](https://github.com/patternslib/pat-ckeditor/compare/1.3.0...2.0.0) (2021-11-17)


### Breaking Changes

* Re-release under 2.0 as previous 1.3 release was actually a major change due to Webpack 5 upgrade. ([6332ec0](https://github.com/patternslib/pat-ckeditor/commit/6332ec035867dc6f5aa042a608bcfa1057dac830))



### Maintenance

* **build:** Do an unattended GitHub release and checkout the CHANGES file afterwards since the GitHub release step did change it. ([3bdf4bc](https://github.com/patternslib/pat-ckeditor/commit/3bdf4bc2a10fb18aa99290833d5d71abe875f7ae))

* **build:** Remove .release-it.json. We're using .release-it.js now. ([968cecc](https://github.com/patternslib/pat-ckeditor/commit/968ceccdfe0ff1dba56ce8320f57089b366983fa))

* **dependencies:** Upgrade dev dependencies. ([a0cef93](https://github.com/patternslib/pat-ckeditor/commit/a0cef9385df6f81a3d06ee8f08a243f12824f7b5))

* **dependencies:** Upgrade Patternslib to 6.0.1. ([280c068](https://github.com/patternslib/pat-ckeditor/commit/280c068ab8a7cfe27e1e5c0fe39d7be0c61381c8))

## 1.3.0 (2021-11-17)


### Features

* Upgrade ckeditor to 27.0.0. ([1b83028](https://github.com/patternslib/pat-ckeditor/commit/1b8302889289828ea2fb5d8a2bb03cf56431a4c6))


### Maintenance

* **build:** Also release on GitHub releases. ([0a63677](https://github.com/patternslib/pat-ckeditor/commit/0a636778230db0042330795c2f8aaf7c31d76d36))
* **build:** Upgrade to Webpack 5 ([01dca0d](https://github.com/patternslib/pat-ckeditor/commit/01dca0d2402d3c037831a383a3f8a1148c7b1ec6))
* **build:** Upgrade to Webpack 5. ([282c7d7](https://github.com/patternslib/pat-ckeditor/commit/282c7d72c0fd2163bb6cd2771111c176098441b4))
* **dependencies:** Upgrade ckeditor to 31.0.0. ([536dc50](https://github.com/patternslib/pat-ckeditor/commit/536dc5015c5c35f17fea7303307ad8b190532066))
* Test updates after jest upgrade. ([f854e3a](https://github.com/patternslib/pat-ckeditor/commit/f854e3a938b9e998205c0ae1d4c6532ba609f0a4))
* Upgrade minor versions ([97bcb08](https://github.com/patternslib/pat-ckeditor/commit/97bcb08df89ca66ccb8b421f3219129a46a2ce90))
* **Build:** Align with Patternslib v4 changes. ([c0a2238](https://github.com/patternslib/pat-ckeditor/commit/c0a2238f9539fd850c649495c3f41ce55cc192e7))
* **Cleanup:** Increase JavaScript line length to 89 characters to make most // prettier-ignore statements obsolete. ([13b80dc](https://github.com/patternslib/pat-ckeditor/commit/13b80dcde92818972bbb823e590bea8c4a4181b8))
* **dependencies:** Depend on Patternslib v4.4.0. ([8591a98](https://github.com/patternslib/pat-ckeditor/commit/8591a985ad63137f8adac90beae9a9e839825b48))
* **dependencies:** Upgrade ckeditor to 28.0.0. ([3fa2d43](https://github.com/patternslib/pat-ckeditor/commit/3fa2d43ed46c3944789ea870c4a5dd55af38abf6))
* **dependencies:** Upgrade dependencies on minor+patch level. ([4645634](https://github.com/patternslib/pat-ckeditor/commit/4645634161eba08dbe7f9022bcf6c32feef0f55c))
* **make release-patch:** Add missing patch for patch level releases. ([86fd8f3](https://github.com/patternslib/pat-ckeditor/commit/86fd8f3c30e57b8a4288084b08b23dc9d6ee3774))
* **Release:** Fix make release-web target. ([16c2db8](https://github.com/patternslib/pat-ckeditor/commit/16c2db88fc7ac439ac283b3f831d913cd6313d69))
* **Release:** Release new version. ([55ed944](https://github.com/patternslib/pat-ckeditor/commit/55ed9444645d4f1275970b535f9238898f4a46b9))
* **Release:** Release new version. ([ac9006d](https://github.com/patternslib/pat-ckeditor/commit/ac9006dcd986f4b34d3575af9828aa0a01c3416a))
* **Release:** Remove .travis config. We're using Github actions now. ([3cc0c07](https://github.com/patternslib/pat-ckeditor/commit/3cc0c072645809751c8e400ade81bf0f1319c22c))
* **Release:** Remove the release-web target. Only Patternslib releases are pushed to Patterns-releases on Github. ([aab4c2f](https://github.com/patternslib/pat-ckeditor/commit/aab4c2fc8a6ccbc863acf15c4b57ae73d771b695))
* **Release process:** Do not include the release commit in the changelog. ([169f0c5](https://github.com/patternslib/pat-ckeditor/commit/169f0c5a3351414310df55fe4e70d2b997691998))
* **webpack:** Adapt start script to recent dependency changes. ([1e748c5](https://github.com/patternslib/pat-ckeditor/commit/1e748c59c3857672903c7c6bc51d48820d0964fa))
* **webpack:** Simplify webpack. ([1d72de1](https://github.com/patternslib/pat-ckeditor/commit/1d72de1490b9597d26ef8b111c0f6a3b52582f3b))
* Update build environment according to general changes in other patternslib projects. ([bce9909](https://github.com/patternslib/pat-ckeditor/commit/bce9909d73115d060076f51897e16e9ce69f3b0b))

## [1.2.0](https://github.com/patternslib/pat-ckeditor/compare/1.1.1...1.2.0) (2021-06-15)


### Maintenance

* Test updates after jest upgrade. ([2fd58f6](https://github.com/patternslib/pat-ckeditor/commit/2fd58f6fd57fade52c0de4a365267781642ea3a1))
* **dependencies:** Depend on Patternslib v4.4.0. ([6b1da41](https://github.com/patternslib/pat-ckeditor/commit/6b1da412d781689948a52644678002e2cd5295f4))
* **dependencies:** Upgrade ckeditor to 28.0.0. ([c207e90](https://github.com/patternslib/pat-ckeditor/commit/c207e901fde8206cddbb2041496d67f6cf37f4c5))
* **dependencies:** Upgrade dependencies on minor+patch level. ([84148f1](https://github.com/patternslib/pat-ckeditor/commit/84148f1cdb2f63a3f917e10e10ce00bbb7ead1ba))
* **webpack:** Adapt start script to recent dependency changes. ([413829b](https://github.com/patternslib/pat-ckeditor/commit/413829b0116f44d26dc2cf5a7d53f735c9f2b9df))
* **webpack:** Simplify webpack. ([2ae0465](https://github.com/patternslib/pat-ckeditor/commit/2ae0465a9f34024921b76fe5b7d42b6b35a84c24))

### [1.1.1](https://github.com/patternslib/pat-ckeditor/compare/1.1.0...1.1.1) (2021-04-23)


### Maintenance

* **make release-patch:** Add missing patch for patch level releases. ([cd07f28](https://github.com/patternslib/pat-ckeditor/commit/cd07f2837302256512947271bbb01c60f009178b))
* **Release:** Remove the release-web target. Only Patternslib releases are pushed to Patterns-releases on Github. ([a0fb81b](https://github.com/patternslib/pat-ckeditor/commit/a0fb81b9742f6fc5179d1fa3a26613f66816c373))
* **Release process:** Do not include the release commit in the changelog. ([5613de4](https://github.com/patternslib/pat-ckeditor/commit/5613de4be4735550a113dd726ee8abc7abf7803a))

## [1.1.0](https://github.com/patternslib/pat-ckeditor/compare/1.0.1...1.1.0) (2021-04-20)


### Features

* Upgrade ckeditor to 27.0.0. ([b7d7c62](https://github.com/patternslib/pat-ckeditor/commit/b7d7c6294b1cf695015073ede0b07229249871d0))


### Maintenance

* Update build environment according to general changes in other patternslib projects. ([8b430fc](https://github.com/patternslib/pat-ckeditor/commit/8b430fc85f13108276f1b1fc55f0775c02aa69d0))
* **Release:** Fix make release-web target. ([1e46642](https://github.com/patternslib/pat-ckeditor/commit/1e4664294cee56bb5b104b21acf2436601322e5e))
* **Release:** Remove .travis config. We're using Github actions now. ([6d9533c](https://github.com/patternslib/pat-ckeditor/commit/6d9533ca44019d4bed227ff114a31b9cb3daf009))

### 1.0.1 (2021-04-16)


### Maintenance

* **Build:** Align with Patternslib v4 changes. ([c0a2238](https://github.com/Patternslib/pat-ckeditor/commit/c0a2238f9539fd850c649495c3f41ce55cc192e7))
* **Cleanup:** Increase JavaScript line length to 89 characters to make most // prettier-ignore statements obsolete. ([13b80dc](https://github.com/Patternslib/pat-ckeditor/commit/13b80dcde92818972bbb823e590bea8c4a4181b8))


## 1.0.0 - unreleased

- Initial release.