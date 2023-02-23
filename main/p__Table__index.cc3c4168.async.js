"use strict";(self.webpackChunkyourname=self.webpackChunkyourname||[]).push([[311],{78194:function(f,o,e){e.r(o);var p=e(35290),r=e.n(p),m=e(411),l=e.n(m),c=e(43947),_=e(63342);o.default=function(){return(0,_.jsxs)("div",{children:[(0,_.jsx)(c._F,{prefixApi:"/a/b",columns:[{title:"\u540D\u79F0",dataIndex:"name",valueType:"text",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7C7B\u578B",dataIndex:"type",valueType:"select",valueEnum:{a:"\u9009\u98791",b:"\u9009\u98792"}}],request:function(){var s=l()(r()().mark(function n(a,i){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:case 1:case"end":return u.stop()}},n)}));return function(n,a){return s.apply(this,arguments)}}(),tableRequest:function(){var s=l()(r()().mark(function n(a,i,d){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve({total:30,data:[{name:"name1",id:1},{name:"name2",id:2}],success:!0}));case 2:case"end":return t.stop()}},n)}));return function(n,a,i){return s.apply(this,arguments)}}()}),(0,_.jsx)("pre",{className:"bg-white",children:`<VisCRUD<{ name: string; type: 'a' | 'b' }>
        prefixApi="/a/b"
        columns={[
          {
            title: '\u540D\u79F0',
            dataIndex: 'name',
            valueType: 'text',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '\u6B64\u9879\u4E3A\u5FC5\u586B\u9879',
                },
              ],
            },
          },
          {
            title: '\u7C7B\u578B',
            dataIndex: 'type',
            valueType: 'select',
            valueEnum: {
              a: '\u9009\u98791',
              b: '\u9009\u98792',
            },
          },
        ]}
        request={async (url: string, requestOpt: any) => {
          // \u7F16\u8F91,\u5220\u9664\u8C03\u7528
          console.log(url, requestOpt);
        }}
        tableRequest={async (pageInfo, sort, filter) => {
          // \u8868\u683C\u67E5\u8BE2
          console.log(pageInfo, sort, filter);
          return Promise.resolve({
            total: 30,
            data: [
              {
                name: 'name1',
                id: 1,
              },
              {
                name: 'name2',
                id: 2,
              },
            ],
            success: true,
          } as any);
        }}
      />`})]})}}}]);
