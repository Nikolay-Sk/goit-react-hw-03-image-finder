(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ButtonPosition:"Button_ButtonPosition__aGvLH",Button:"Button_Button__2iLfv"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2W15W",Modal:"Modal_Modal__3gAN8"}},22:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__yCTBS",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__3paVN"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__30397"}},26:function(e,t,a){e.exports={loader:"Spinner_loader__XYMO2"}},27:function(e,t,a){e.exports={App:"App_App__3yGEs"}},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1BL0G",SearchForm:"Searchbar_SearchForm__1r-99",SearchForm_button:"Searchbar_SearchForm_button__146SS",SearchForm_button_label:"Searchbar_SearchForm_button_label__123_c",SearchForm_input:"Searchbar_SearchForm_input__35pEf"}},71:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(21),c=a.n(r),i=a(12),l=a(5),s=a(6),u=a(8),m=a(7),d=a(4),h=a.n(d),g=a(0),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={text:""},e.onChange=function(t){var a=t.target.value;e.setState({text:a})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state.text)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.text;return Object(g.jsx)("div",{children:Object(g.jsx)("header",{className:h.a.Searchbar,children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.SearchForm,children:[Object(g.jsx)("button",{type:"submit",className:h.a.SearchForm_button,children:Object(g.jsx)("span",{className:h.a.SearchForm_button_label,children:"Search"})}),Object(g.jsx)("input",{className:h.a.SearchForm_input,onChange:this.onChange,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})}}]),a}(n.Component),b=a(10),j=a.n(b),_=function(e){var t=e.changePage;return Object(g.jsxs)("div",{className:j.a.ButtonPosition,children:[Object(g.jsx)("button",{onClick:t,type:"button",className:j.a.Button,children:"Load More"})," "]})},f=a(22),O=a.n(f),v=function(e){var t=e.url,a=e.alt,n=e.openModal,o=e.modalImage;return Object(g.jsx)("div",{children:Object(g.jsx)("li",{onClick:function(){return n(o)},className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:t,alt:a,className:O.a.ImageGalleryItem_image})})})},S=a(23),x=a.n(S),y=function(e){var t=e.images,a=e.openModal;return Object(g.jsx)("ul",{className:x.a.ImageGallery,children:t.map((function(e){return Object(g.jsx)(v,{url:e.webformatURL,alt:e.tags,modalImage:e.largeImageURL,openModal:a},e.id)}))})},I=a(11),M=a.n(I),w=function(e){var t=e.modalImage,a=e.closeModal;return Object(g.jsx)("div",{onClick:a,className:M.a.Overlay,children:Object(g.jsx)("div",{className:M.a.Modal,children:Object(g.jsx)("img",{src:t,alt:""})})})},F=a(24),N=a.n(F),G="20415428-bf9b7db865d7d385cdf74d6e6",B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(G,"&image_type=photo&orientation=horizontal&per_page=12");return N.a.get(a)},L=a(25),k=a.n(L),C=a(26),A=a.n(C),E=function(){return Object(g.jsx)("div",{className:A.a.loader,children:Object(g.jsx)(k.a,{type:"BallTriangle",color:"#00BFFF",height:80,width:80,timeout:3e3})})},P=a(27),q=a.n(P),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",images:[],page:1,isModalOpen:!1,isLoading:!1},e.openModal=function(t){e.setState({isModalOpen:!0,modalImage:t}),window.addEventListener("keydown",e.closeModal)},e.closeModal=function(t){t.target!==t.currentTarget&&"Escape"!==t.code||e.setState({isModalOpen:!1}),window.removeEventListener("keydown",e.closeModal)},e.onSubmit=function(t){e.setState({query:t,isLoading:!0}),B(t).then((function(t){console.log("resData",t),e.setState({images:t.data.hits})})).finally((function(){return e.setState({isLoading:!1})}))},e.changePage=function(){var t=e.state,a=t.query,n=t.page;B(a,n+1).then((function(t){e.setState((function(e){return{page:e.page+1,images:[].concat(Object(i.a)(e.images),Object(i.a)(t.data.hits))}}))}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.state.page;e.page!==t&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isModalOpen,n=e.modalImage,o=e.isLoading;return Object(g.jsxs)("div",{className:q.a.App,children:[Object(g.jsx)(p,{onSubmit:this.onSubmit}),o&&Object(g.jsx)(E,{}),Object(g.jsx)(y,{images:t,openModal:this.openModal}),t.length>11&&Object(g.jsx)(_,{changePage:this.changePage}),a&&Object(g.jsx)(w,{modalImage:n,closeModal:this.closeModal})]})}}]),a}(n.Component);c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.1f9bdb2f.chunk.js.map