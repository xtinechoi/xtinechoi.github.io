(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(8),s=i.n(o),r=(i(15),i(1)),l=i(2),c=i(4),u=i(3),d=i(5),h=(i(16),i(6)),m=i.n(h),p=(i(17),function(e){function t(e){var i;return Object(r.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).onMouseEnterHandler=function(){i.setState({hover:!0})},i.handleClick=function(e){i.props.parentFunc()},i.state={hover:!1},i}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:m()("word",{hover:this.state.hover},{selected:this.props.isEverythingHighlighted}),onMouseEnter:this.onMouseEnterHandler,onClick:this.handleClick},this.props.word),a.a.createElement("span",{className:m()({selected:this.props.isEverythingHighlighted})}," "))}}]),t}(n.Component)),g="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n\nBoa Ipsum is a broad brushstrokes text-vanishing editor inspired by an extinct type of snake. \n\nReplace this text with your own: click anywhere to \u2018highlight all\u2019, then delete it and paste in whatever you want.\n\n\nConcepted by Christine Choi for a Biomimicry and Design graduate workshop led by Mara Holt Skov and Steven Skov Holt in 2009 at California College of the Arts, an early version of this project included a dense scientific prose paragraph about the Round Island Burrowing Boa that would scramble the words in your cursor\u2019s path. Words that were moused over switched places with words you\u2019d touched previously up to a certain number of times before becoming fixed; the idea was to make a poem that could replicate how curiosity-driven human movement can irreparably alter an ecosystem. As humans whose drive to explore and innovate technologically seems innate to our species, we spend lifetimes inventing engaging new platforms and capabilities for information circulation, whether it\u2019s about news, pharmaceuticals, finances, video games, our pets, or our personal lives. We expanded limited print publishing channels by paving myriad ways to self-publish multiple forms of content instantly, globally, all day long, incessantly. But as we add to the noise, shouldn\u2019t we also take responsibility for alleviating it? In the years since the first version of Boa Ipsum, Christine\u2019s been making a living as a short form Copywriter on user experience teams where she takes verbose thickets of expository language from subject matter experts, engineers, marketers, or lawyers and reduces them to clear short phrases and navigation elements for 21st century attention spans. In 2015, Boa Ipsum was reimagined for the students of Denise Newman\u2019s Off the Page undergraduate poetry workshop at CCA \u2014 all designers, painters, and multimedia artists with a pronounced passion for exploring the possibilities of working with text. This time, the idea was to create a more open-ended tool that provides a pleasing way to make swaths of text go away. In wake of a culture where the sheer volume of text on the screens we face each day increases exponentially, the work of the poet to create reprieve and write white space into something with intention and care holds new value. Thank you, generous developer friends who helped bring this site to light.",v=function(e){function t(e){var i;Object(r.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).logKey=function(e){8===e.keyCode&&(e.preventDefault(),i.setState({textBlocksArr:[],isEverythingHighlighted:!1}))},i.modifyPaste=function(e){var t=e.clipboardData.getData("text");e.preventDefault(),i.setState({textBlocksArr:t.split("\n")})},i.parentFunc=function(){i.setState({isEverythingHighlighted:!i.state.isEverythingHighlighted})};g.split("\n");return i.state={textBlocksArr:g.split("\n"),isEverythingHighlighted:!1},i}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("paste",this.modifyPaste),document.addEventListener("keydown",this.logKey)}},{key:"render",value:function(){var e=this,t=this.state.textBlocksArr.map(function(t,i){if(t.length>0){var n=t.split(" ");return a.a.createElement("div",{key:i},n.map(function(t,i){return a.a.createElement(p,{key:i,word:t,parentFunc:e.parentFunc,isEverythingHighlighted:e.state.isEverythingHighlighted})}))}return a.a.createElement("div",{key:i},a.a.createElement("br",null))});return a.a.createElement("div",{className:"App"},t)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,i){e.exports=i(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.8f44e339.chunk.js.map