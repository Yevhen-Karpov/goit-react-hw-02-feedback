(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),o=n.n(r),i=(n(14),n(5)),s=n(6),b=n(7),d=n(9),u=n(8),j=n(0);function l(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["Good:",t]}),Object(j.jsxs)("p",{children:["Neutral:",n]}),Object(j.jsxs)("p",{children:["Bad:",a]}),Object(j.jsxs)("p",{children:["Total:",c]}),Object(j.jsxs)("p",{children:["Positive feedback:",r," %"]})]})}var h=n(3),O=n.n(h);function v(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{className:O.a.buttonContainer,children:t.map((function(e){return Object(j.jsx)("button",{className:O.a.buttonContainerItem,type:"button",name:e,onClick:n,children:e},e)}))})}function p(e){var t=e.title,n=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:t}),n]})}function g(e){var t=e.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{children:t})})}var f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=100*e.state.good/t;return Math.round(n)},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage(),o=Object.keys(this.state);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{title:"Please leave feedback",children:Object(j.jsx)(v,{options:o,onLeaveFeedback:this.onLeaveFeedback})}),0===c?Object(j.jsx)(g,{message:"No feedback given"}):Object(j.jsx)(p,{title:"Statistics",children:Object(j.jsx)(l,{good:t,neutral:n,bad:a,total:c,positivePercentage:r})})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={buttonContainer:"FeedbackOptions_buttonContainer__3z2PO",buttonContainerItem:"FeedbackOptions_buttonContainerItem__2E3-z"}}},[[16,1,2]]]);
//# sourceMappingURL=main.33ad8f87.chunk.js.map