(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{250:function(a,t,s){"use strict";s.r(t);var v=s(1),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"导学"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导学"}},[a._v("#")]),a._v(" 导学")]),a._v(" "),s("h4",{attrs:{id:"为什么要了解操作系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要了解操作系统"}},[a._v("#")]),a._v(" 为什么要了解操作系统")]),a._v(" "),s("p",[a._v("相比在大学时期大家还懵懵懂懂的时候就已经了解或接触过操作系统相关课程，但苦于代码量和能力的欠缺，对操作系统相关的东西还是有些不理解或是没有弄懂，为什么要这么设计操作系统，为什么要有线程，进程，许多并发场景操作系统是如何解决的，时间分片机制带来了哪些好处和问题，垃圾回收机制是如何在代码运行时高效清除不适用的对象。")]),a._v(" "),s("h4",{attrs:{id:"好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#好处"}},[a._v("#")]),a._v(" 好处")]),a._v(" "),s("p",[a._v("学习操作系统的设计思路，抽象，全局的去思考并解决一个问题,巩固基础知识，让代码更健壮， 加强代码的抽象能力和数据结构算法的基础使用能力,任何复杂业务中的问题最终都会抽象为操作系统以及相关基础知识的实现，无论前后端。")]),a._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("h3",{attrs:{id:"操作系统主要做了什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统主要做了什么"}},[a._v("#")]),a._v(" 操作系统主要做了什么")]),a._v(" "),s("h4",{attrs:{id:"总结三个字-不要停"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结三个字-不要停"}},[a._v("#")]),a._v(" 总结三个字: 不要停")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("  while(true){\n    // 期间不能关机，不能停下，我要一直做事情，不然就宕机了\n    // 跑网易云云月， vscode, nodejs，游戏...\n  }\n")])])]),s("h4",{attrs:{id:"操作系统启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统启动"}},[a._v("#")]),a._v(" 操作系统启动")]),a._v(" "),s("ol",[s("li",[a._v("开机   // 操作系统还在硬盘")]),a._v(" "),s("li",[a._v("Bios  //BASIC I/O System  最最基础的系统，仅支持汇编指令   move xxxxx  xxxxx")]),a._v(" "),s("li",[a._v("装载引导程序MBR(master boot record) => 分区引导程序 => 转交内核给操作系统(go to 操作系统的代码行)")]),a._v(" "),s("li",[a._v("操作系统接管控制")])]),a._v(" "),s("h3",{attrs:{id:"操作系统的能力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的能力"}},[a._v("#")]),a._v(" 操作系统的能力")]),a._v(" "),s("h4",{attrs:{id:"连接硬件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接硬件"}},[a._v("#")]),a._v(" 连接硬件")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("鼠标，打印机等： 硬件设备 => 总线 => (内存 && CPU中断) => 操作系统\n"),s("img",{attrs:{src:a.$withBase("./../imgs/system1.png")}}),a._v("\n按键与内存中的按键缓冲区映射， 用户按下按键后会产生中断，操作系统接管了CPU中断，感知到用户按下某按键 => 发送EVENT事件至各大APP\n"),s("code",[a._v("Ring Buffer（键盘缓冲区）: 记录键盘按下的key的顺序，是一个环状且超出覆盖的缓冲区， 系统卡顿的时候按下多个按键操作系统会滴滴滴的叫,因为ring buffer满了")])])]),a._v(" "),s("li",[s("p",[a._v("管理和调度应用\n抽象 ｜ 隔离 ｜ 管理 ｜ 调度\n"),s("br")]),a._v(" "),s("p",[a._v("抽象："),s("code",[a._v("文件，硬件抽象出可理解的资源，比如文件对于磁盘只有磁道，扇区，柱面，变为可展开的树形结构目录")]),a._v(" "),s("br"),a._v("\n隔离：\n"),s("code",[a._v("隔离每个应用， 应用之间不能冲突（外挂是如何做的： 修改游戏内某内存的数据，达到修改攻击等数据的）")]),a._v(" "),s("br")]),a._v(" "),s("p",[a._v("管理\n"),s("code",[a._v("关闭，强制退出，最小化，后台运行，应用异常")]),a._v(" "),s("br")]),a._v(" "),s("p",[a._v("调度\n"),s("code",[a._v("系统级别的进程肯定优先于用户的进程")])])]),a._v(" "),s("li",[s("p",[a._v("用户可以管理操作系统\n文件，app， UI，分辨率设置，开机密码， shell等")])])]),a._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("操作系统是一个管理硬件设备（管理）， 资源以及应用程序；将硬件的能力，资源抽象成服务让应用程序使用(抽象)")]),a._v(" "),s("h2",{attrs:{id:"内核和内核设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内核和内核设计"}},[a._v("#")]),a._v(" 内核和内核设计")]),a._v(" "),s("h3",{attrs:{id:"分层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分层"}},[a._v("#")]),a._v(" 分层")]),a._v(" "),s("ol",[s("li",[a._v("内核: 时钟，进程管理，进程调度，中断处理，进程通信等(内核态)")]),a._v(" "),s("li",[a._v("驱动： 打印机，显示器，磁盘，鼠标，键盘 （用户态）")]),a._v(" "),s("li",[a._v("服务： 文件服务，进程服务，自检（用户态）")]),a._v(" "),s("li",[a._v("应用：图形化界面和command终端（用户态）")])]),a._v(" "),s("h3",{attrs:{id:"权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[a._v("#")]),a._v(" 权限")]),a._v(" "),s("ol",[s("li",[a._v("拆分权限（端口，文件，操作）")]),a._v(" "),s("li",[a._v("多态， 区分用户态和内核态(访问相册（同意后切换到内核态） => 再次切换回到原有的进程(用户态) )")])]),a._v(" "),s("h3",{attrs:{id:"内核设计-参照b-s结构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内核设计-参照b-s结构设计"}},[a._v("#")]),a._v(" 内核设计: 参照B/S结构设计")]),a._v(" "),s("img",{attrs:{src:a.$withBase("./../imgs/system2.png")}}),a._v(" "),s("h3",{attrs:{id:"为什么要用微内核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用微内核"}},[a._v("#")]),a._v(" 为什么要用微内核")]),a._v(" "),s("ol",[s("li",[a._v("内核职责越少，可扩展性就越强。")]),a._v(" "),s("li",[a._v("现实中的其他系统设计： 分布式系统底层只是在做记录（区块链，日志系统），3D游戏引擎也只是做渲染。")]),a._v(" "),s("li",[a._v("OSI七层模型  物数网传会表应")]),a._v(" "),s("li",[a._v("所有程序语言最底层就是机器指令(操作码 + 地址码)，上层是汇编(三地址代码, move xxx xxx)，在上层是高级语言")])]),a._v(" "),s("h2",{attrs:{id:"进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[a._v("#")]),a._v(" 进程")]),a._v(" "),s("p",[a._v("操作系统的核心是程序， 操作系统对一个正在运行的程序的抽象就是进程，是操作系统调度资源的最小单位, 程序就是一段代码，这段代码只有运行时才算进程，在硬盘就不是了")]),a._v(" "),s("h3",{attrs:{id:"抽象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抽象"}},[a._v("#")]),a._v(" 抽象")]),a._v(" "),s("p",[a._v("在早起的计算机中只有一个核心，所有程序共享一个时间片段，操作系统需要提供一个模型去管理所有的程序，让程序以为CPU就只为他一个程序服务，于是就诞生了操作系统肿最核心的概念-进程(当我们写代码调试的时候，代码执行了一行然后下一行，就好像感觉CPU在一直为我工作， 其实不是，CPU很快，快到纳秒级别，10的-10次方这么短，基于CPU的中断和时间分片机制，他可以在处理你的代码后分享时间片给其他程序，比如你还能听歌，看视频，敲键盘，移动鼠标等)")]),a._v(" "),s("h3",{attrs:{id:"进程的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程的状态"}},[a._v("#")]),a._v(" 进程的状态")]),a._v(" "),s("ol",[s("li",[a._v("进程管理\n（适配中断机制，需要记录自己的状态信息，否则下次拥有执行权时无法知道自己上次到哪了）寄存器， 程序计数器， 程序状态子，堆栈指针（SP）, 优先级，父进程ID...")]),a._v(" "),s("li",[a._v("存储管理\n程序段指针, 堆栈段指针， 数据段指针。 需要存储堆栈，空闲区，数据，程序")]),a._v(" "),s("li",[a._v("文件管理\n根目录， 工作目录，文件描述，用户ID...\n"),s("br")])]),a._v(" "),s("p",[s("code",[a._v("所以，进程是一种数据结构，是一张能描述以上信息的表")])])])}),[],!1,null,null,null);t.default=_.exports}}]);