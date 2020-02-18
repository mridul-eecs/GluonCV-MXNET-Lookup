(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"/5UJ":function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("TOZ3"),o=t("CsdX"),i=t("xqk1"),s=t("vpZN"),c=t("buno"),u=t("F9YM"),l=t("Ne6o"),d=t.n(l),m=t("Il3Q"),g=t.n(m),f=function formatNoteClipDescription(e){var t=e.noteStartTs,n=e.noteEndTs,a=e.captureTs;if(t&&n)return"".concat(Object(u.c)(t)," - ").concat(Object(u.c)(n));return"".concat(Object(u.c)(a))},p=function constructItemLink(e,t,n){return"".concat(Object(s.c)(e),"/lecture/").concat(t,"?t=").concat(Math.trunc(n))},h=function HighlightItemInfo(e){var t=e.note,n=e.course;return a.a.createElement(r.b,{rootClassName:"rc-NoteCardItemInfo highlight",flexDirection:"row",justifyContent:"start",alignItems:"start"},a.a.createElement(i.a,{size:24,color:o.b.black}),a.a.createElement(r.b,{rootClassName:"video-info-box",flexDirection:"column",justifyContent:"center",alignItems:"stretch"},a.a.createElement(c.a,{className:"nostyle",trackingName:"highlight_link",data:{itemId:t.itemId},href:p(n.slug,t.itemId,t.noteStartTs),target:"_blank",rel:"noopener noreferrer"},a.a.createElement("div",{className:"video-title","aria-label":d()("Item Name")},t.itemName)),a.a.createElement("div",{className:"video-details","aria-label":d()("Duration")},f(t))))},v=function HighlightItemInfoWithSnapshot(e){var t=e.note,n=e.course;return a.a.createElement(r.b,{rootClassName:"rc-NoteCardItemInfo snapshot",flexDirection:"column",justifyContent:"center",alignItems:"stretch"},a.a.createElement(c.a,{className:"nostyle thumbnail-container",trackingName:"snapshot_link",data:{itemId:t.itemId},href:p(n.slug,t.itemId,t.noteStartTs),target:"_blank",rel:"noopener noreferrer"},a.a.createElement("div",{className:"thumbnail-overlay"},a.a.createElement("div",{className:"snapshot-link-text"},d()("Go to video"))),a.a.createElement("img",{className:"snapshot-thumbnail",src:t.snapshotUrl,alt:"note"})),a.a.createElement("div",{className:"video-title","aria-label":d()("Item Name")},t.itemName),a.a.createElement("div",{className:"video-details","aria-label":d()("Duration")},f(t)))},N=function NoteCardItemInfo(e){var t=e.note,n=e.course;return t.snapshotUrl?a.a.createElement(v,{note:t,course:n}):a.a.createElement(h,{note:t,course:n})};e.a=N},"879p":function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("ikUE"),o=t("CbCy"),i=function ContentNotesDataProvider(e){var t=e.contentType,n=e.course,module=e.module,i=e.pageSize,s=void 0===i?10:i,c=e.children;if("module"===t)return module?a.a.createElement(o.a,{course:n,module:module,pageSize:s},function(e){return c(e)}):null;return a.a.createElement(r.a,{course:n,pageSize:s},function(e){return c(e)})};e.a=i},"9XxC":function(module,exports,e){},AK1u:function(module,exports,e){var t=e("sZKW"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},CbCy:function(module,e,t){"use strict";var n=t("RIqP"),a=t.n(n),r=t("VkAN"),o=t.n(r),i=t("sbe7"),s=t.n(i),c=t("lTCR"),u=t.n(c),l=t("oJmH"),d=t.n(l),m=t("mDxB");function _templateObject3(){var e=o()(["\n  mutation UpdateNoteMutation($noteId: String!, $noteDraft: DataMap!) {\n    UserNotesV1 @naptime {\n      update(id: $noteId, input: $noteDraft) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n      }\n    }\n  }\n"]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=o()(["\n  mutation DeleteNoteMutation($noteId: String!) {\n    UserNotesV1 @naptime {\n      delete(id: $noteId) {\n        id\n      }\n    }\n  }\n"]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=o()(["\n  query NotesModuleQuery($courseId: String!, $moduleId: String!, $start: Int, $limit: Int) {\n    UserNotesV1 @naptime {\n      courseModuleWithContentSort(courseId: $courseId, moduleId: $moduleId, start: $start, limit: $limit) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n        paging\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var g=function cloneData(e){return JSON.parse(JSON.stringify(e))},f=u()(_templateObject()),p=function ModuleNotesQueryProvider(e){var t=e.course,module=e.module,n=e.pageSize,r=e.children;return s.a.createElement(l.Query,{query:f,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n},notifyOnNetworkStatusChange:!0},function(e){var t=e.loading,o=e.error,i=e.data,s=e.fetchMore;if(o)return r({notes:null,onLastPage:!1,fetchNextPage:function fetchNextPage(){},error:!0,loadingInitialPage:!1,loadingNextPage:!1});if(t&&!(((i||{}).UserNotesV1||{}).courseModuleWithContentSort||{}).elements)return r({notes:null,onLastPage:!1,fetchNextPage:function fetchNextPage(){},error:!1,loadingInitialPage:!0,loadingNextPage:!1});var c,u=((i||{}).UserNotesV1||{}).courseModuleWithContentSort,l=((u||{}).elements||[]).map(m.d),d=(u||{}).paging,f=!d||!d.next||d.total&&d.next>=d.total,p;return r({notes:l,fetchNextPage:function fetchNextPage(){s({variables:{start:l.length,limit:n},updateQuery:function updateQuery(e,t){var n=t.fetchMoreResult,r=g(e);if(!n)return r;var o=r;o.UserNotesV1.courseModuleWithContentSort.elements=[].concat(a()(e.UserNotesV1.courseModuleWithContentSort.elements),a()(n.UserNotesV1.courseModuleWithContentSort.elements));var i=n.UserNotesV1.courseModuleWithContentSort.paging;return o.UserNotesV1.courseModuleWithContentSort.paging=i,o}})},onLastPage:f,error:!1,loadingInitialPage:!1,loadingNextPage:!!t})})},h=u()(_templateObject2()),v=function ModuleNotesDeletionProvider(e){var t=e.course,module=e.module,n=e.pageSize,a=e.children;return s.a.createElement(l.Mutation,{mutation:h},function(e){var r;return a({deleteNote:function deleteNote(a){e({variables:{noteId:a},update:function update(e){var r=e.readQuery({query:f,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n}}),o=g(r),i,s,c,u=((((r||{}).UserNotesV1||{}).courseModuleWithContentSort||{}).elements||[]).filter(function(e){return e.id!==a}),l=o;l.UserNotesV1.courseModuleWithContentSort.elements=u,e.writeQuery({query:f,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n},data:l})}})}})})},N=u()(_templateObject3()),x=function ModuleNotesUpdateProvider(e){var t=e.children;return s.a.createElement(l.Mutation,{mutation:N},function(e){var n;return t({updateNote:function updateNote(t,n){e({variables:{noteId:t,noteDraft:n}})}})})},C=function ModuleNotesDataProvider(e){var t=e.course,module=e.module,n=e.pageSize,a=e.children;return s.a.createElement(p,{course:t,module:module,pageSize:n},function(e){var r=e.notes,o=e.fetchNextPage,i=e.error,c=e.loadingInitialPage,u=e.loadingNextPage,l=e.onLastPage;return s.a.createElement(v,{course:t,module:module,pageSize:n},function(e){var t=e.deleteNote;return s.a.createElement(x,null,function(e){var n=e.updateNote;return a({notes:r,onLastPage:l,fetchNextPage:o,deleteNote:t,updateNote:n,error:i,loadingInitialPage:c,loadingNextPage:u})})})})};e.a=C},DaUC:function(module,e,t){"use strict";e.a=function(e){var t=document.createElement("canvas");t.width=960,t.height=540;var n=e.el().querySelector("video");return t.getContext("2d").drawImage(n,0,0,t.width,t.height),t.toDataURL("image/jpeg")}},F9YM:function(module,e,t){"use strict";t.d(e,"c",function(){return s}),t.d(e,"e",function(){return c}),t.d(e,"a",function(){return u}),t.d(e,"b",function(){return l}),t.d(e,"d",function(){return g});var n=t("bdFs"),a=t.n(n),r=1,o=function findCueIndexForTimeHelper(e,t,n,a){if(t>n)return-1;var r=n-Math.floor((n-t)/2);return a<e[r].startTime?findCueIndexForTimeHelper(e,t,r-1,a):r!==e.length-1&&a>=e[r+1].startTime?findCueIndexForTimeHelper(e,r+1,n,a):r},i=function findCueIndexForTime(e,t){return o(e,0,e.length-1,t)},s=function formatTime(e){var t="m:ss",n=1e3*e,r,o;return a.a.duration(n).hours()>0&&(t="h:m"+t),a.a.utc(n).format(t)},c=function getTimeFromDuration(e){var t=1e3*e,n=a.a.duration(t),r=n.hours(),o=n.minutes(),i;return{seconds:n.seconds(),minutes:o,hours:r}},u=function buildParagraphs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],a,r,o;return e.forEach(function(e){r&&(o=e.startTime-r.endTime),(!a||o>=t)&&(a=[],n.push(a)),a.push(e),r=e}),n},l=function findCuesAroundTime(e,t){var n,a=e[i(e,t)];if(!a)return[];return[a]},d=function getSentenceCueIndices(e,t){for(var n=[],a=e-1;-1!==a;){var r=t[a];if("."===r.text[r.text.length-1])break;n.unshift(a),a-=1}for(var o=e;o<=t.length-1;){var i=t[o];if(n.push(o),"."===i.text[i.text.length-1])break;o+=1}return n},m=function getAdjancentCueIndices(e,t){var n=[],a=[];return e>=2&&a.push(e-2),e>=1&&a.push(e-1),e<t-1&&n.push(e+1),e<t-2&&n.push(e+2),[].concat(a,[e],n)},g=function getAdjacentCues(e,t,n){var a=i(e,t);if(-1===a&&e.length>2)return[0,1,2].map(function(t){return e[t]});if(a<0||a>=e.length)return[];if("en"===n)return d(a,e).map(function(t){return e[t]});return m(a,e.length).map(function(t){return e[t]})}},Hwfz:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("1w3K"),o=t.n(r),i=t("XBa+"),s=t("TOZ3"),c=t("uhOI"),u=t("Ihj9"),l=t("zUWw"),d=t("Ne6o"),m=t.n(d),g=t("AK1u"),f=t.n(g),p=Object(u.a)({type:"BUTTON"})(i.a),h=function NotesCardList(e){var t=e.notes,n=e.course,o=e.fetchNextPage,i=e.onLastPage,u=e.deleteNote,d=e.updateNote,g=e.loadingPage;return a.a.createElement("div",{className:"rc-NotesCardList"},a.a.createElement("ul",{className:"nostyle note-card-list"},a.a.createElement(r.CSSTransitionGroup,{transitionEnter:!0,transitionLeave:!0,transitionName:"card-list-transition",transitionEnterTimeout:500,transitionLeaveTimeout:300},t.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(l.a,{note:e,course:n,deleteNote:function deleteNote(){return u(e.id)},updateNote:function updateNote(t){d(e.id,t)}}))}))),!i&&a.a.createElement(s.b,{rootClassName:"notes-page-button-container",flexDirection:"column",justifyContent:"start",alignItems:"center"},a.a.createElement(p,{type:"secondary",rootClassName:"notes-next-page-button",trackingName:"next_notes_page",trackingData:{currentNoteCount:t.length},apiStatus:g?c.c:c.a,apiStatusAttributesConfig:{label:{API_BEFORE_SEND:m()("See More Notes"),API_IN_PROGRESS:m()("Loading Notes...")}},onClick:o})))};e.a=h},Il3Q:function(module,exports,e){var t=e("nNx/"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},Ne6o:function(module,exports,e){var t=e("OIEB"),n=t.default?t.default:{},a,r=(0,e("HdzH").default)(n);r.getLocale=function(){return"en"},module.exports=r},OIEB:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},"Q/Lp":function(module,exports,e){},QAEH:function(module,e,t){"use strict";var n=t("VkAN"),a=t.n(n),r=t("sbe7"),o=t.n(r),i=t("lTCR"),s=t.n(i),c=t("oJmH"),u=t.n(c);function _templateObject(){var e=a()(['\n  query CourseMaterialsQuery($slug: String!) {\n    OnDemandCourseMaterialsV2 @naptime {\n      slug(slug: $slug, showHidden: true, includes: "modules") {\n        elements {\n          id\n          name\n        }\n        linked {\n          onDemandCourseMaterialModulesV1 {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n']);return _templateObject=function _templateObject(){return e},e}var l=s()(_templateObject()),d=function CourseContentDataProvider(e){var t=e.courseSlug,n=e.children;return o.a.createElement(c.Query,{query:l,variables:{slug:t}},function(e){var a=e.loading,r=e.error,o=e.data;if(r||a)return n({course:null,modules:null,error:!!r,loading:!!a});var i,s=(o.OnDemandCourseMaterialsV2||{}).slug,c=(s||{}).elements[0].id,u=(s||{}).elements[0].name,l=((s||{}).linked||{}).onDemandCourseMaterialModulesV1;return n({course:{id:c,name:u,slug:t},modules:l,error:!1,loading:!1})})};e.a=d},"R+Yg":function(module,exports,e){var t=e("r2Mg"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},SGsN:function(module,exports,e){},TaCa:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("TOZ3"),o=t("CsdX"),i=t("wwtN"),s=t("8WNh"),c=t("Ne6o"),u=t.n(c),l=t("kUh3"),d=t.n(l),m="https://s3.amazonaws.com/coursera_assets/learner/icon_note.svg",g="https://s3.amazonaws.com/coursera_assets/learner/icon_highlight.svg",f=function NotesReviewPageDataState(e){var t=e.dataState;return a.a.createElement(r.b,{rootClassName:"rc-NotesReviewPageDataState",flexDirection:"column",justifyContent:"start",alignItems:"center"},"error"===t&&[a.a.createElement(i.a,{key:"icon",size:84,color:o.b.error}),a.a.createElement("div",{key:"message",className:"data-state-message headline-5-text"},u()("There was an issue loading your notes data. Please try refreshing the page."))],"loading"===t&&[a.a.createElement(s.a,{key:"icon",size:84}),a.a.createElement("div",{key:"message",className:"data-state-message headline-5-text"},u()("Loading notes..."))],"empty"===t&&[a.a.createElement(r.b,{justifyContent:"center",rootClassName:"state-icons"},a.a.createElement("img",{src:m,alt:u()("Take notes"),className:"placeholder-icon"}),a.a.createElement("img",{src:g,alt:u()("Highlight"),className:"placeholder-icon"})),a.a.createElement("div",{key:"message",className:"data-state-message headline-5-text"},u()("You have not added any notes for this content. Go to course videos to take notes."))])};e.a=f},UVRO:function(module,exports,e){var t=e("wh/V"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},Yydp:function(module,e,t){"use strict";var n=t("RIqP"),a=t.n(n),r=t("MVZn"),o=t.n(r),i=t("pVnL"),s=t.n(i),c=t("sbe7"),u=t.n(c),l=t("6gRZ"),d=t.n(l),m=t("Ne6o"),g=t.n(m),f=t("UVRO"),p=t.n(f),h=function FilterDropdownItem(e){var t=e.content,n=e.inMenu,a=e.onEnterKey,r,o=n?{role:"menuitem",tabIndex:0,onKeyDown:a&&function(e){"Enter"===e.key&&a()}}:{};return t&&"course"!==t.contentType?u.a.createElement("div",s()({},o,{className:"content-name"}),t.name):u.a.createElement("span",o,g()("All notes in this course"))},v=function NotesPageFilterDropdown(e){var t=e.course,n=e.modules,r=e.selectedContentId,i=e.onSelect,s=void 0===i?function(){}:i,c=r||t.id,d=o()({contentType:"course"},t),m=n.map(function(module){return o()({contentType:"module"},module)}),g=[d].concat(a()(m)),f=g.find(function(e){return e.id===c}),p=u.a.createElement("div",{className:"content-switcher-title"},u.a.createElement(h,{content:f,inMenu:!1}));return u.a.createElement("div",{className:"rc-NotesPageFilterDropdown"},u.a.createElement(l.DropdownButton,{title:p,onSelect:s},g.map(function(e){return u.a.createElement(l.MenuItem,{key:e.id,eventKey:e.id},u.a.createElement(h,{inMenu:!0,content:e,onEnterKey:function onEnterKey(){s(e.id)}}))})))};e.a=v},ZJO1:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("MnCE"),o=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n=_objectWithoutPropertiesLoose(e,t),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++){if(a=o[r],t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;n[a]=e[a]}}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++){if(r=a[o],t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var i=function SvgTrash(e){var t=e.title,a=void 0===t?"Trash":t,r=_objectWithoutProperties(e,["title"]);return n.createElement(o.a,_extends({title:a},r,{viewBox:"0 0 48 48"}),n.createElement("polygon",{points:"14.501 37.0454 13.501 15.0454 15.499 14.9544 16.499 36.9544"}),n.createElement("polygon",{points:"25.499 37.0454 23.501 36.9544 24.501 14.9544 26.499 15.0454"}),n.createElement("path",{d:"M13.3877,6 L26.6127,6 L25.9627,4.051 C25.5537,2.824 24.4097,2 23.1167,2 L16.8827,2 C15.5897,2 14.4467,2.824 14.0367,4.051 L13.3877,6 Z M6.9507,46 L33.0487,46 L34.9487,8 L5.0517,8 L6.9507,46 Z M34.9507,48 L5.0487,48 L3.0487,8 L-0.0003,8 L-0.0003,6 L11.2797,6 L12.1397,3.419 C12.8217,1.374 14.7277,0 16.8827,0 L23.1167,0 C25.2727,0 27.1787,1.374 27.8607,3.419 L28.7207,6 L39.9997,6 L39.9997,8 L36.9507,8 L34.9507,48 Z"}))};(i=Object(r.pure)(i)).displayName="SvgTrash",e.a=i},c5cO:function(module,e,t){"use strict";t.r(e);var n=t("VbXa"),a=t.n(n),r=t("sbe7"),o=t.n(r),i=t("q3BH"),s=t("Hwfz"),c=t("QsJ7"),u=t("Yydp"),l=t("TaCa"),d=t("QAEH"),m=t("879p"),g=t("Ne6o"),f=t.n(g),p=t("R+Yg"),h=t.n(p),v=t("+9K8"),N=20,x=function(e){function NotesReviewPageWithCourseData(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={selectedContentId:null},t.onContentSelect=function(e){t.setState({selectedContentId:e})},t}var t;return a()(NotesReviewPageWithCourseData,e),NotesReviewPageWithCourseData.prototype.render=function render(){var e=this.props,t=e.course,n=e.modules,a,r=this.state.selectedContentId||t.id,i=r===t.id?t:n.find(function(module){return module.id===r}),d=r===t.id?"course":"module";return o.a.createElement("div",{className:"rc-NotesReviewPage"},o.a.createElement("h1",{className:"notes-header headline-6-text"},f()("Notes")),o.a.createElement(c.a,{pageTitle:f()("Notes")}),o.a.createElement(u.a,{course:t,modules:n,selectedContentId:r,onSelect:this.onContentSelect}),o.a.createElement(m.a,{pageSize:20,contentType:d,course:t,module:"module"===d&&i?i:null},function(e){var n=e.notes,a=e.onLastPage,r=e.fetchNextPage,i=e.error,c=e.loadingInitialPage,u=e.loadingNextPage,d=e.updateNote,m=e.deleteNote;if(i)return o.a.createElement(l.a,{dataState:"error"});if(c)return o.a.createElement(l.a,{dataState:"loading"});if(!n||0===n.length)return o.a.createElement(l.a,{dataState:"empty"});return o.a.createElement(s.a,{course:t,notes:n,onLastPage:a,fetchNextPage:r,updateNote:d,deleteNote:m,loadingPage:u})}))},NotesReviewPageWithCourseData}(o.a.Component),C=i.a.createTrackedContainer(function(e){var t;return{namespace:{page:"notes_review"},courseId:e.course.id}})(x),b=function NotesReviewPage(e){var t=e.params.courseSlug;return o.a.createElement(d.a,{courseSlug:t},function(e){var t=e.course,n=e.modules,a=e.error,r=e.loading;if(a)return o.a.createElement(l.a,{dataState:"error"});if(r)return o.a.createElement(l.a,{dataState:"loading"});return o.a.createElement(C,{course:t,modules:n})})};e.default=Object(v.a)(b)},ikUE:function(module,e,t){"use strict";var n=t("RIqP"),a=t.n(n),r=t("VkAN"),o=t.n(r),i=t("sbe7"),s=t.n(i),c=t("lTCR"),u=t.n(c),l=t("oJmH"),d=t.n(l),m=t("mDxB");function _templateObject3(){var e=o()(["\n  mutation UpdateNoteMutation($noteId: String!, $noteDraft: DataMap!) {\n    UserNotesV1 @naptime {\n      update(id: $noteId, input: $noteDraft) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n      }\n    }\n  }\n"]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=o()(["\n  mutation DeleteNoteMutation($noteId: String!) {\n    UserNotesV1 @naptime {\n      delete(id: $noteId) {\n        id\n      }\n    }\n  }\n"]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=o()(["\n  query NotesDataQuery($courseId: String!, $start: Int, $limit: Int) {\n    UserNotesV1 @naptime {\n      courseWithContentSort(courseId: $courseId, start: $start, limit: $limit) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n        paging\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var g=function cloneData(e){return JSON.parse(JSON.stringify(e))},f=u()(_templateObject()),p=function CourseNotesQueryProvider(e){var t=e.course,n=e.pageSize,r=e.children;return s.a.createElement(l.Query,{query:f,variables:{courseId:t.id,start:0,limit:n},notifyOnNetworkStatusChange:!0},function(e){var t=e.loading,o=e.error,i=e.data,s=e.fetchMore;if(o)return r({notes:null,onLastPage:!1,error:!0,fetchNextPage:function fetchNextPage(){},loadingInitialPage:!1,loadingNextPage:!1});var c,u=((i||{}).UserNotesV1||{}).courseWithContentSort;if(t&&!(u||{}).elements)return r({notes:null,onLastPage:!1,error:!1,fetchNextPage:function fetchNextPage(){},loadingInitialPage:!0,loadingNextPage:!1});var l=((u||{}).elements||[]).map(m.d),d=(u||{}).paging,f=!d||!d.next||d.total&&d.next>=d.total,p;return r({notes:l,fetchNextPage:function fetchNextPage(){s({variables:{start:l.length,limit:n},updateQuery:function updateQuery(e,t){var n=t.fetchMoreResult,r=g(e);if(!n)return r;var o=r;o.UserNotesV1.courseWithContentSort.elements=[].concat(a()(e.UserNotesV1.courseWithContentSort.elements),a()(n.UserNotesV1.courseWithContentSort.elements));var i=n.UserNotesV1.courseWithContentSort.paging;return o.UserNotesV1.courseWithContentSort.paging=i,o}})},onLastPage:f,error:!1,loadingInitialPage:!1,loadingNextPage:t})})},h=u()(_templateObject2()),v=function CourseNotesDeletionProvider(e){var t=e.course,n=e.pageSize,a=e.children;return s.a.createElement(l.Mutation,{mutation:h},function(e){var r;return a({deleteNote:function deleteNote(a){e({variables:{noteId:a},update:function update(e){var r=e.readQuery({query:f,variables:{courseId:t.id,start:0,limit:n}}),o=g(r),i,s,c,u=((((r||{}).UserNotesV1||{}).courseWithContentSort||{}).elements||[]).filter(function(e){return e.id!==a}),l=o;l.UserNotesV1.courseWithContentSort.elements=u,e.writeQuery({query:f,variables:{courseId:t.id,start:0,limit:n},data:l})}})}})})},N=u()(_templateObject3()),x=function CourseNotesUpdateProvider(e){var t=e.children;return s.a.createElement(l.Mutation,{mutation:N},function(e){var n;return t({updateNote:function updateNote(t,n){e({variables:{noteId:t,noteDraft:n}})}})})},C=function CourseNotesDataProvider(e){var t=e.course,n=e.pageSize,a=e.children;return s.a.createElement(p,{course:t,pageSize:n},function(e){var r=e.notes,o=e.fetchNextPage,i=e.error,c=e.loadingInitialPage,u=e.loadingNextPage,l=e.onLastPage;return s.a.createElement(v,{course:t,pageSize:n},function(e){var t=e.deleteNote;return s.a.createElement(x,null,function(e){var n=e.updateNote;return a({notes:r,onLastPage:l,fetchNextPage:o,deleteNote:t,updateNote:n,error:i,loadingInitialPage:c,loadingNextPage:u})})})})};e.a=C},kUh3:function(module,exports,e){var t=e("SGsN"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},kzXq:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("AWZ4"),o=t("TOZ3"),i=t("Ihj9"),s=t("Ne6o"),c=t.n(s),u=t("oLhO"),l=t.n(u),d=Object(i.a)({type:"BUTTON"})(r.b),m=function NoteCardNote(e){var t=e.note,n=e.editingState,r=e.isConfirmingDelete,i=e.onDeleteConfirm,s=e.onDeleteCancel,u=e.onEditTextChange,l=e.onEditSave,m=e.onEditCancel,g=e.editorRef;return a.a.createElement(o.b,{rootClassName:"rc-NoteCardNote",flexDirection:"column",justifyContent:"start",alignItems:"stretch"},a.a.createElement("div",{className:"video-section-text","aria-label":c()("Transcript")},t.transcriptText),!n.isEditing&&t.noteText&&t.noteText.length>0&&a.a.createElement("div",{className:"video-note-text-box video-note-text","aria-label":c()("User Note")},t.noteText),n.isEditing&&a.a.createElement("textarea",{ref:g,className:"video-note-text-box video-note-editor",value:n.editNoteText,onChange:function onChange(e){var t=e.target.value;u(t)}}),n.isEditing&&a.a.createElement(o.b,{rootClassName:"video-edit-actions",flexDirection:"row",justifyContent:"end",alignItems:"center"},a.a.createElement(d,{rootClassName:"edit-action-button edit-save-button",trackingName:"note_edit_save_button",trackingData:{noteId:t.id,oldText:t.noteText,newText:n.editNoteText},label:c()("Save"),size:"sm",type:"primary",onClick:l}),a.a.createElement(d,{rootClassName:"edit-action-button edit-cancel-button",trackingName:"note_edit_cancel_button",trackingData:{noteId:t.id,oldText:t.noteText,newText:n.editNoteText},label:c()("Cancel"),size:"sm",type:"default",onClick:m})),r&&a.a.createElement(o.b,{rootClassName:"delete-confirm-container",justifyContent:"end",alignItems:"center"},a.a.createElement("div",{className:"delete-confirm-text"},c()("Delete entire note?")),a.a.createElement(d,{rootClassName:"delete-confirm-button",size:"sm",type:"primary",label:c()("Yes"),onClick:i,trackingName:"note_delete_confirm_button"}),a.a.createElement(d,{rootClassName:"delete-confirm-button",size:"sm",type:"secondary",label:c()("No"),onClick:s,trackingName:"note_delete_cancel_button"})))};e.a=m},lDT8:function(module,exports,e){var t=e("Q/Lp"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},mDxB:function(module,e,t){"use strict";t.d(e,"d",function(){return m}),t.d(e,"e",function(){return g}),t.d(e,"a",function(){return f}),t.d(e,"b",function(){return p}),t.d(e,"c",function(){return h});var n=t("MVZn"),a=t.n(n),r=t("wiyT"),o=t.n(r),i=t("BDKN"),s=t.n(i),c=t("DnuM"),u=t("p6CZ"),l=Object(c.a)("/api/userNotes.v1",{type:"rest"}),d=function uploadSnapshot(e,t){return o.a.Promise(function(n){var a=(new s.a).addQueryParam("action","getScreenShotUploadUrl").addQueryParam("id",e);l.post(a.toString()).then(function(a){var r=Object(u.c)(t),o;Object(c.a)(a,{type:"rest"}).put("",{contentType:"image/png",data:r,processData:!1}).then(function(){var t=e.split("~")[1];n("https://s3.amazonaws.com/coursera-video-thumbnail-notes/web/".concat(t))})})})},m=function reshapeHighlightForClient(e){var t=e.id,n=e.createdAt,a=e.updatedAt,r=e.userText,o=e.details.definition,i=o.noteEndTs,s=o.noteStartTs,c=o.captureTs,u=o.snapshotUrl,l=o.transcriptTextStartIndex,d=o.transcriptTextEndIndex,m=o.transcriptText,g,f,p;return{id:t,itemId:o.itemId,itemName:o.itemName,clientId:t,createdAt:n,updatedAt:a,languageCode:o.languageCode,noteText:r,noteEndTs:i&&i/1e3,noteStartTs:s&&s/1e3,captureTs:c&&c/1e3,snapshotUrl:u,transcriptTextStartIndex:l,transcriptTextEndIndex:d,transcriptText:m,pendingCreate:!1,pendingUpdate:!1}},g=function updateHighlight(e){var t=e.itemId,n=e.courseId,a=e.languageCode,r=e.id,o=e.highlight,i=new s.a(r),c=Object(u.d)({itemId:t,courseId:n,highlight:o,languageCode:a});return l.put(i.toString(),{data:c})},f=function createHighlight(e){var t=e.itemId,n=e.courseId,r=e.languageCode,i=e.highlight,s=Object(u.d)({itemId:t,courseId:n,highlight:i,languageCode:r});if(i.snapshotDataUrl)return o.a.Promise(function(e,o){l.post("",{data:s}).then(function(s){var c,u=s.elements[0].id;if(!i.snapshotDataUrl)return void o();d(u,i.snapshotDataUrl).then(function(o){g({itemId:t,courseId:n,languageCode:r,id:u,highlight:a()({},i,{snapshotUrl:o})}).then(function(){e({id:u,snapshotUrl:o})})})})});return l.post("",{data:s}).then(function(e){return e.elements[0]})},p=function deleteHighlight(e){var t=e.id,n=new s.a(t);return l.delete(n.toString())},h=function getHighlights(e){var t=e.itemId,n=e.courseId,a=e.languageCode,r=(new s.a).addQueryParam("itemId",t).addQueryParam("courseId",n).addQueryParam("languageCode",a).addQueryParam("q","courseItemLanguageCode").addQueryParam("fields","id, userText, createdAt, updatedAt, details");return l.get(r.toString()).then(function(e){return e.elements.map(m)})},v=function getCourseHighlights(e){var t=e.courseId,n=(new s.a).addQueryParam("courseId",t).addQueryParam("q","course").addQueryParam("fields","id, userText, createdAt, updatedAt, details");return l.get(n.toString()).then(function(e){return e.elements.map(m)})}},"nNx/":function(module,exports,e){},oLhO:function(module,exports,e){var t=e("9XxC"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},p6CZ:function(module,e,t){"use strict";t.d(e,"c",function(){return o}),t.d(e,"b",function(){return i}),t.d(e,"a",function(){return s}),t.d(e,"d",function(){return c});var n=t("k8gO"),a=t("DaUC"),r=t("F9YM"),o=function getBlobFromDataURI(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(t.length),r=new Uint8Array(a),o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return new Blob([a],{type:n})},i=function generateHighlightFromTranscriptSelection(e,t){var a=e.transcriptTextStartIndex,r=e.transcriptTextEndIndex,o=t.cues.filter(function(e){return e.index>=a.cueIndex&&e.index<=r.cueIndex}),i=o.reduce(function(e,t){var n=t.index,o=t.text,i=a.cueIndex,s=a.textIndex,c=r.cueIndex,u=r.textIndex;if(n===i){if(n===c)return"".concat(e).concat(o.substring(s,u+1));return"".concat(e).concat(o.substring(s))}if(n===c)return"".concat(e," ").concat(o.substring(0,u+1));return"".concat(e," ").concat(o)},""),s=Object(n.a)(),c=s,u=o[0],l,d=o[o.length-1].endTime,m,g,f="",p=!0,h=!1,v;return{id:s,clientId:c,captureTs:u.startTime,noteStartTs:u.startTime,noteEndTs:d,transcriptText:i,noteText:"",languageCode:t.languageCode,transcriptTextStartIndex:a,transcriptTextEndIndex:r,pendingCreate:!0,pendingUpdate:!1}},s=function generateHighlightFromCaptureButton(e,t){var o=Object(n.a)(),i=o,s="",c=e.languageCode,u=t.currentTime(),l=Object(r.d)(e.cues,u,c),d=l[0],m=l[l.length-1],g=l.reduce(function(e,t){if(t.index===d.index)return"".concat(e).concat(t.text);return"".concat(e," ").concat(t.text)},""),f={textIndex:0,cueIndex:d.index},p={textIndex:m.text.length-1,cueIndex:m.index},h=m.endTime,v,N=!0,x=!1,C;return{id:o,clientId:i,captureTs:u,noteStartTs:d.startTime,noteEndTs:h,transcriptText:g,noteText:"",languageCode:c,transcriptTextStartIndex:f,transcriptTextEndIndex:p,snapshotDataUrl:Object(a.a)(t),pendingCreate:!0,pendingUpdate:!1}},c=function getDraftFromHighlight(e){var t=e.itemId,n=e.courseId,a=e.highlight,r=e.languageCode,o=a.noteStartTs,i=a.noteEndTs,s=a.captureTs,c=a.snapshotUrl,u=a.transcriptText,l=a.noteText,d=a.transcriptTextEndIndex,m;return{details:{typeName:"video",definition:{itemId:t,courseId:n,snapshotUrl:c||"",transcriptTextStartIndex:a.transcriptTextStartIndex,transcriptTextEndIndex:d,languageCode:r,transcriptText:u,noteEndTs:i&&1e3*i,captureTs:s&&1e3*s,noteStartTs:o&&1e3*o}},userNote:l}},u=function reshapeHighlightForClient(e){var t=e.id,n=e.createdAt,a=e.updatedAt,r=e.userText,o=e.details.definition,i=o.noteEndTs,s=o.noteStartTs,c=o.captureTs,u=o.snapshotUrl,l=o.transcriptTextStartIndex,d=o.transcriptTextEndIndex,m=o.transcriptText,g,f,p;return{id:t,itemId:o.itemId,itemName:o.itemName,clientId:t,createdAt:n,updatedAt:a,languageCode:o.languageCode,noteText:r,noteEndTs:i&&i/1e3,noteStartTs:s&&s/1e3,captureTs:c&&c/1e3,snapshotUrl:u,transcriptTextStartIndex:l,transcriptTextEndIndex:d,transcriptText:m,pendingCreate:!1,pendingUpdate:!1}}},r2Mg:function(module,exports,e){},sZKW:function(module,exports,e){},"wh/V":function(module,exports,e){},wwtN:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("MnCE"),o=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n=_objectWithoutPropertiesLoose(e,t),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++){if(a=o[r],t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;n[a]=e[a]}}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++){if(r=a[o],t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var i=function SvgFail(e){var t=e.title,a=void 0===t?"Fail":t,r=_objectWithoutProperties(e,["title"]);return n.createElement(o.a,_extends({title:a},r,{viewBox:"0 0 48 48"}),n.createElement("path",{d:"M24,46 C11.869,46 2,36.131 2,24 C2,11.869 11.869,2 24,2 C36.131,2 46,11.869 46,24 C46,36.131 36.131,46 24,46 M24,0 C10.767,0 0,10.767 0,24 C0,37.233 10.767,48 24,48 C37.233,48 48,37.233 48,24 C48,10.767 37.233,0 24,0"}),n.createElement("polygon",{points:"32.293 14.293 24 22.586 15.707 14.293 14.293 15.707 22.586 24 14.293 32.293 15.707 33.707 24 25.414 32.293 33.707 33.707 32.293 25.414 24 33.707 15.707"}))};(i=Object(r.pure)(i)).displayName="SvgFail",e.a=i},zUWw:function(module,e,t){"use strict";var n=t("MVZn"),a=t.n(n),r=t("VbXa"),o=t.n(r),i=t("sbe7"),s=t.n(i),c=t("BxDD"),u=t("TOZ3"),l=t("CsdX"),d=t("k52k"),m=t("ZJO1"),g=t("Ihj9"),f=t("/5UJ"),p=t("kzXq"),h=t("p6CZ"),v=t("Ne6o"),N=t.n(v),x=t("lDT8"),C=t.n(x),b=Object(g.a)({type:"BUTTON"})(c.a),I=function(e){function NoteCard(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={isEditing:!1,isConfirmingDelete:!1,editNoteText:null},t.onDeleteClick=function(){t.setState({isConfirmingDelete:!0})},t.onDeleteConfirm=function(){var e;(0,t.props.deleteNote)(),t.setState({isConfirmingDelete:!1})},t.onDeleteCancel=function(){t.setState({isConfirmingDelete:!1})},t.onEditStart=function(){var e;if(!t.state.isEditing){var n=t.props.note;t.setState({isEditing:!0,editNoteText:n.noteText||""})}},t.onEditTextChange=function(e){t.setState({editNoteText:e})},t.onEditCancel=function(){t.setState({isEditing:!1,editNoteText:null})},t.onEditSave=function(){var e=t.props,n=e.note,r=e.course,o=e.updateNote,i=t.state.editNoteText;o(Object(h.d)({itemId:n.itemId,courseId:r.id,highlight:a()({},n,{noteText:i||""}),languageCode:n.languageCode})),t.setState({isEditing:!1,editNoteText:null})},t.onNoteEditRef=function(e){e&&e.focus()},t}var t;return o()(NoteCard,e),NoteCard.prototype.render=function render(){var e=this.props,t=e.note,n=e.course,a=this.state,r=a.isEditing,o=a.isConfirmingDelete,i=a.editNoteText;return s.a.createElement(u.b,{rootClassName:"rc-NoteCard",htmlAttributes:{tabIndex:0},flexDirection:"row",justifyContent:"start",alignItems:"stretch"},s.a.createElement(f.a,{note:t,course:n}),s.a.createElement(u.b,{rootClassName:"note-text-and-actions",flexDirection:"column",justifyContent:"start",alignItems:"stretch"},s.a.createElement(p.a,{editorRef:this.onNoteEditRef,note:t,editingState:{isEditing:r,editNoteText:i},isConfirmingDelete:o,onDeleteCancel:this.onDeleteCancel,onDeleteConfirm:this.onDeleteConfirm,onEditCancel:this.onEditCancel,onEditSave:this.onEditSave,onEditTextChange:this.onEditTextChange}),!(r||o)&&s.a.createElement(u.b,{rootClassName:"action-buttons-row",justifyContent:"end",alignItems:"center"},s.a.createElement(b,{rootClassName:"note-card-button edit-button",htmlAttributes:{"aria-label":N()("Edit"),tabIndex:0},trackingName:"note_edit_button",trackingData:{noteId:t.id},svgElement:s.a.createElement(d.a,{size:24,color:l.b.lightGrayText,hoverColor:l.b.primary,title:N()("Edit")}),type:"icon",size:"zero",onClick:this.onEditStart}),s.a.createElement(b,{rootClassName:"note-card-button delete-button",htmlAttributes:{"aria-label":N()("Delete"),tabIndex:0},trackingName:"note_delete_button",trackingData:{noteId:t.id},svgElement:s.a.createElement(m.a,{size:24,color:l.b.lightGrayText,hoverColor:l.b.primary,title:N()("Delete")}),type:"icon",size:"zero",onClick:this.onDeleteClick}))))},NoteCard}(s.a.Component);e.a=I}}]);
//# sourceMappingURL=en.51.8fef08b7b8816eeb2c30.js.map