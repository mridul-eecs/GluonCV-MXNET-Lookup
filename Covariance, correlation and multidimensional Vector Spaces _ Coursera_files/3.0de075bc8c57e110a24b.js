(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+M5F":function(module,e,t){"use strict";t.d(e,"a",function(){return f});var r=t("wiyT"),n=t.n(r),a=t("JAlB"),i=t("wDa7"),o=t("CA+Q"),s=t("ML/G"),u=t("GnyC"),d=function receiveDeadlines(e,t){var r=t.deadlines,n=r.isEnabled,a=r.moduleDeadlines;n?e.dispatch("LOAD_COURSE_DEADLINES",{moduleDeadlines:a}):e.dispatch("DISABLE_DEADLINES")},c=function enableDeadlines(e){var t=e.getStore("CourseStore").getCourseId();return i.a.sendStartTime(!0,t).fail(function(e){throw e}).then(o.a).then(function(t){var r=t.elements,n=r[0].start;return s.a.pushV2(["open_course_home.welcome.emit.course_deadline_set",{first_week_due_time:n}]),e.executeAction(d,{deadlines:r[0]})})},l=function setDeadlinesIfEligible(e){var t=e.getStore("CourseStore"),r=e.getStore("CourseScheduleStore"),i=e.getStore("ProgressStore"),o=Object(u.a)(t,r,i),s=t.hasLaunched(),d=t.getCourseId(),l=e.getStore("CourseMembershipStore").isEnrolled(),f=e.getStore("SessionStore");return!Object(a.a)(d)&&s&&!f.isSessionsCourse()&&1===o&&l?e.executeAction(c,{}):n()()},f=function loadCourseDeadlines(e,t){var r=t.userId,s=e.getStore("CourseStore").hasLaunched(),u=e.getStore("CourseStore").getCourseId(),c=e.getStore("CourseMembershipStore").isEnrolled(),f=e.getStore("SessionStore"),S=e.getStore("CourseStore").isReal();if(!c||!r||Object(a.a)(u)||!1!==S&&!s)return n()();if(f.isSessionsEnabled()){if(f.isEnrolled()){var g=f.getSession(),v={moduleDeadlines:g.moduleDeadlines};v.itemDeadlines=g.itemDeadlines,e.dispatch("LOAD_COURSE_DEADLINES",v)}return n()()}return i.a.getStartTime(u).then(o.a).then(function(t){var r,n=t.elements[0];return n?e.executeAction(d,{deadlines:n}):e.executeAction(l,{})})},S=function disableDeadlines(e){var t=e.getStore("CourseStore").getCourseId();return i.a.disableDeadlines(t).then(function(){return e.dispatch("DISABLE_DEADLINES")}).fail(function(e){throw e})},g=function resetDeadlines(e,t){var r=t.userId,n=e.getStore("CourseStore").getCourseId();return i.a.resetDeadlines(n).then(function(){return e.executeAction(f,{userId:r})}).fail(function(e){throw e})}},"3/Qw":function(module,e,t){"use strict";var r=t("pVnL"),n=t.n(r),a=t("QILm"),i=t.n(a),o=t("17x9"),s=t.n(o),u=t("sbe7"),d=t.n(u),c=t("shn3"),l=function LoadingBox(e){var t=e.loadingText,r=e.iconSize,a=void 0===r?64:r,o=e.iconName,s=void 0===o?"SvgCssLoaderSignal":o,u=i()(e,["loadingText","iconSize","iconName"]);return d.a.createElement("div",n()({className:"rc-LoadingBox vertical-box align-items-absolute-center"},u),d.a.createElement(c.a,{iconName:s,size:a,className:"color-primary"}),t&&d.a.createElement("p",null,t))};l.propTypes={iconName:s.a.string,loadingText:s.a.string,iconSize:s.a.number},e.a=l},"5Ujo":function(module,e,t){"use strict";t.d(e,"a",function(){return i});var r=t("wiyT"),n=t.n(r),a=t("Vu1r"),i=function loadCoursePresentGrade(e,t){var r=t.userId,i=t.courseId;if(e.getStore("CoursePresentGradeStore").hasLoaded())return n()();return r?n()(a.a.getPresentGrade({userId:r,courseId:i})).then(function(t){var r=t.elements[0];e.dispatch("LOAD_COURSE_PRESENT_GRADE",{presentGrade:r})}).fail(function(t){e.dispatch("LOAD_COURSE_PRESENT_GRADE_FAIL",{})}):(e.dispatch("LOAD_COURSE_PRESENT_GRADE_FAIL",{}),n()())}},"8iQH":function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),a=t("BDKN"),i=t.n(a),o=t("DnuM"),s=t("IAOZ");e.a=function(e){var t=new o.a("/api/courses.v1",{type:"rest"}),r=(new i.a).addQueryParam("q","slug").addQueryParam("slug",e).addQueryParam("fields","certificates").addQueryParam("showHidden",!0);return n()(t.get(r.toString())).then(function(t){if("notFound"===t.errorCode)return null;var r=t.elements[0],n=r.id,a=r.certificates;return s.d.courseId=n,s.d.courseSlug=e,{courseId:n,courseCertificates:a}})}},BYIE:function(module,e,t){"use strict";var r=t("sArp"),n=t("CA+Q");e.a=function(e){if(!e)throw new Error("`courseId` is required to get course schedule.");return Object(r.a)(e).then(n.a).then(function(e){var t;return e.elements[0].defaultSchedule.periods})}},Bgx3:function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),a=t("8iQH"),i=t("IG+7");e.a=function(e,t){if(e.getStore(i.a).haveCourseIdentifiersLoaded())return n()();if(!t)throw new Error("Missing courseSlug");return Object(a.a)(t).then(function(r){var n=r.courseId,a=r.courseCertificates;if(!n)throw new Error("Missing courseId");return e.dispatch("SET_COURSE_IDENTIFIERS",{courseId:n,courseSlug:t,courseCertificates:a}),{courseId:n,courseSlug:t,courseCertificates:a}}).catch(function(r){console.error("Error getting courseId and courseCertificates from courseSlug: ".concat(t,": "),r,r.stack);var a="",i=[];return e.dispatch("SET_COURSE_IDENTIFIERS",{courseId:"",courseSlug:t,courseCertificates:i}),n()({courseId:"",courseSlug:t,courseCertificates:i})})}},D87r:function(module,e,t){"use strict";t.d(e,"a",function(){return d});var r=t("wiyT"),n=t.n(r),a=t("BDKN"),i=t.n(a),o=t("CWYE"),s=t("sQ/U"),u=Object(o.a)("/api/onDemandHomeProgress.v1",{type:"rest"}),d=function getHomeProgress(e){var t="".concat(s.a.get().id,"~").concat(e),r=new i.a(t).addQueryParam("fields","modulesCompleted,modulesPassed");return n()(u.get(r.toString()))}},FUAI:function(module,e,t){"use strict";t.d(e,"a",function(){return o});var r=t("wiyT"),n=t.n(r),a=t("l490"),i=t("5ijc"),o=function loadVerificationDisplay(e,t){var r=t.authenticated,o=t.userId,s=t.courseId,u=t.s12nId,d=t.isCourseVerificationEnabled;if(e.getStore(i.a).hasLoaded())return n()();return r?Object(a.a)(o,s,d,u).then(function(t){e.dispatch("LOAD_VERIFICATION_DISPLAY",t)}):(e.dispatch("LOAD_VERIFICATION_DISPLAY",null),n()())}},JAlB:function(module,e,t){"use strict";var r=t("KMW/");e.a=function(e){return-1!==r.a.get("featureBlacklist","defaultDeadlines").indexOf(e)}},JdaY:function(module,e,t){"use strict";t.r(e);var r=t("sbe7"),n=t.n(r),a=t("VYij"),i=t.n(a),o=t("sQ/U"),s=t("jsrg"),u=t("kwmr"),d=t("+LJP"),c=t("NLLZ"),l=t("dAof"),f=t("Bgx3"),S=t("E4RX"),g=t("b+2U"),v=t("iTPM"),p=t("Re7p"),m=t("Shko"),h=t("+M5F"),I=t("Nher"),D=t("FUAI"),O=t("dgIx"),E=t("5Ujo"),w=t("JSqB"),L=t("fghW"),b=t("IG+7"),y=t("xPfO"),A=t("5ijc"),C=t("8c4I"),P=t("c2GL"),j=t("sjlm"),R=t("RwVU"),T=t("x+tN"),M=t("3/Qw"),N=function DataFetcherBody(e){var t=e.children;if(!t)return null;return n.a.cloneElement(t,{})},x=Object(a.compose)(Object(c.a)(function(){return!1}),Object(d.a)(function(e){return{courseSlug:e.params.courseSlug}}),Object(u.a)([y.a,b.a,P.a,L.a,A.a,j.a,C.a,R.a],function(e,t,r,n,a,i,o,s){return{s12n:n.getS12n(),course:t.getMetadata(),courseId:t.getCourseId(),isEnrolled:r.isEnrolled(),sessionId:e.getSessionId(),isEnrolledInSession:e.isEnrolled(),s12nStoreHasLoaded:n.hasLoaded(),courseStoreHasLoaded:t.hasLoaded(),sessionStoreHasLoaded:e.hasLoaded(),verificationStoreHasLoaded:a.hasLoaded(),courseMembershipStoreHasLoaded:r.hasLoaded(),computedModelStoreHasLoaded:o.hasLoaded(),courseIdentifiersHaveLoaded:t.haveCourseIdentifiersLoaded(),courseViewGradeStoreHasLoaded:i.hasLoaded(),progressStoreHasLoaded:s.hasLoaded()}}),Object(l.a)(function(e,t){var r=t.courseSlug;e.executeAction(f.a,r)}),Object(s.a)(function(e){var t;return e.courseIdentifiersHaveLoaded}),Object(s.a)(function(e){var t;return!!e.courseId},n.a.createElement(T.a,null)),Object(l.a)(function(e,t){var r=t.courseId;e.executeAction(m.a,r)}),Object(s.a)(function(e){var t;return e.courseMembershipStoreHasLoaded}),Object(s.a)(function(e){var t=e.isEnrolled;return o.a.isSuperuser()||t},n.a.createElement(T.a,null)),Object(l.a)(function(e,t){var r=t.courseSlug,n=t.courseId;e.executeAction(v.a,{courseSlug:r,courseId:n})}),Object(s.a)(function(e){var t;return e.computedModelStoreHasLoaded}),Object(l.a)(function(e,t){var r=t.courseId,n=t.courseSlug,a=o.a.get().id,i=o.a.isAuthenticatedUser();e.executeAction(g.a,{courseSlug:n}),e.executeAction(I.a,{courseId:r}),e.executeAction(O.a,{courseId:r,userId:a}),e.executeAction(w.a,{authenticated:i}),e.executeAction(p.a,{courseId:r,userId:a}),e.executeAction(S.a,{authenticated:i,courseId:r,userId:a})}),Object(s.a)(function(e){var t=e.s12nStoreHasLoaded,r=e.courseStoreHasLoaded,n=e.sessionStoreHasLoaded,a=e.courseViewGradeStoreHasLoaded,i=e.progressStoreHasLoaded;return t&&r&&n&&a&&i}),Object(l.a)(function(e,t){var r=t.courseId,n=t.course,a=t.s12n,i=t.sessionId,s=o.a.get().id,u=o.a.isAuthenticatedUser(),d=a&&a.getId(),c=n.isVerificationEnabled(),l=e.getStore("CourseStore");e.executeAction(h.a,{userId:s}),l.isCumulativeGradePolicy()&&e.executeAction(E.a,{userId:s,courseId:r}),e.executeAction(D.a,{authenticated:u,userId:s,courseId:r,isCourseVerificationEnabled:c,s12nId:d}),e.executeAction(O.b,{courseId:r,userId:s,sessionId:i})}),Object(s.a)(function(e){var t;return e.verificationStoreHasLoaded}))(N),k=function LegacyDataFetch(e){var t=e.children,r=e.isLegacyDataLoaded;return n.a.createElement("div",{className:"rc-LegacyDataFetch"},n.a.createElement(x,null,t),!r&&n.a.createElement(M.a,{iconSize:512}))};e.default=Object(a.compose)(Object(u.a)([A.a],function(e){return{isLegacyDataLoaded:e.hasLoaded()}}))(k)},NBfQ:function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),a=t("sQ/U"),i=t("fghW"),o=t("4San"),s=t("qujA");e.a=function(e,t){if(e.getStore(i.a).hasLoaded())return n()();var r;return Object(o.d)(t,a.a.get().id).then(function(e){var t=(r=e).elements,i=t&&t[0];return i&&a.a.isAuthenticatedUser()?Object(s.a)(i.id,!0):n()()}).then(function(t){return e.dispatch("LOAD_S12N",{rawS12ns:r,rawOwnership:t}),{rawS12ns:r,rawOwnership:t}})}},NLLZ:function(module,e,t){"use strict";t.d(e,"a",function(){return renderOrigamiIf});var r=t("VbXa"),n=t.n(r),a=t("sbe7"),i=t.n(a),o=t("17x9"),s=t.n(o),u=t("+MHB"),d=t("BDKN"),c=t.n(d),l=t("37kS"),f=t.n(l);function renderOrigamiIf(e){return function(t){var r=t.displayName||t.name,a=function(r){function RenderOrigamiIf(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r.call.apply(r,[this].concat(n))||this).routerWillLeave=function(e){var t=u.a.renderedRegions.filter(function(e){return e.view.hasUnsavedModel}).map(function(e){return e.view.hasUnsavedModel()}).reduce(function(e,t){return e||t},!1);if(!t)return!0;return!(!t||!window.confirm(f()("There are unsaved changes that will be lost if you reload or leave this page.")))},e}n()(RenderOrigamiIf,r);var a=RenderOrigamiIf.prototype;return a.componentDidMount=function componentDidMount(){var e=this,t=this.context.router,r=this.props.route,n=function navigate(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new c.a(n),o=new c.a(window.location.toString());if(o.path()===i.path()&&o.query()===i.query())return;!0===a||a&&!0===a.trigger?a&&a.replace?t.replace(n):t.push(n):a&&a.replace?window.history.replaceState(null,null,n):window.history.pushState(null,null,n),r&&t.setRouteLeaveHook(r,e.routerWillLeave)};u.a.router.navigate=n,u.a.router.navigateTo=n},a.componentWillReceiveProps=function componentWillReceiveProps(t,r){e(this.props)&&!e(t)&&u.a.trigger("close")},a.render=function render(){return e(this.props)?i.a.createElement("div",null,i.a.createElement("div",{"data-js":"origami"}),i.a.createElement(t,this.props)):i.a.createElement(t,this.props)},RenderOrigamiIf}(i.a.Component);return a.displayName="RenderOrigamiIf(".concat(r,")"),a.propTypes={children:s.a.node,route:s.a.object},a.contextTypes={router:s.a.object},a}}},NO4R:function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),a=t("BYIE"),i=t("qgMw"),o=t("lqQ6");e.a=function(e,t){if(e.getStore(i.a).hasLoaded())return n()();if(!t)return n.a.reject(new o.a("courseId must be provided."));return Object(a.a)(t).then(function(t){e.dispatch("LOAD_COURSE_SCHEDULE",t)})}},PVyl:function(module,e,t){"use strict";t.r(e);var r=t("qlEU"),n=t.n(r),a=t("KgRe"),i=t("cySH");e.default=function(e){return n()(i.a.build(a.a.prototype.resourceName,e))}},Re7p:function(module,e,t){"use strict";t.d(e,"a",function(){return u});var r=t("MVZn"),n=t.n(r),a=t("wiyT"),i=t.n(a),o=t("yF8l"),s={showHidden:!0,fields:["courseId","grade"],includes:{vcMembership:{fields:["certificateCode","grade","grantedAt"]},course:{fields:[]}}},u=function loadCertificateData(e,t){var r=t.courseId,a=t.userId,u;if(e.getStore("CertificateStore").hasLoaded())return i()();return(u=a?Object(o.a)(n()({id:"".concat(a,"~").concat(r)},s,{rawData:!0})).then(function(t){e.dispatch("LOAD_MEMBERSHIPS",t)}):i()().then(function(){e.dispatch("LOAD_MEMBERSHIPS",null)})).done(),u}},TFmq:function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),a=t("sQ/U"),i=t("RwVU"),o=t("D87r");e.a=function(e,t){if(e.getStore(i.a).hasLoaded())return n()();return a.a.isAuthenticatedUser()?Object(o.a)(t).then(function(t){t.elements&&t.elements.length&&e.dispatch("LOAD_HOME_PROGRESS",t.elements[0])}).fail(function(){e.dispatch("LOAD_HOME_PROGRESS",{modulesCompleted:[],modulesPassed:[]})}):(e.dispatch("LOAD_HOME_PROGRESS",{modulesCompleted:[],modulesPassed:[]}),n()())}},Vu1r:function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),a=t("BDKN"),i=t.n(a),o=t("DnuM"),s=Object(o.a)("/api/onDemandCoursePresentGrades.v1",{type:"rest"}),u=function getPresentGrade(e){var t=e.userId,r=e.courseId,a=new i.a("/".concat(t,"~").concat(r)).addQueryParam("fields","grade,relevantItems,passingStateForecast");return n()(s.get(a.toString()))};e.a={getPresentGrade:u}},dgIx:function(module,e,t){"use strict";t.d(e,"a",function(){return d}),t.d(e,"b",function(){return c});var r=t("wiyT"),n=t.n(r),a=t("VYij"),i=t.n(a),o=t("yFL5"),s=t("6p3O"),u=t("Aw3H"),d=function loadUserGroupsForCourse(e,t){var r=t.courseId,a=t.userId;if(e.getStore("GroupSettingStore").hasLoaded())return n()();return o.a.myCourseGroupsWithSettings(a,r).then(function(t){var r=i()(t.linked["groupSettings.v1"]).map(function(e){return new u.a(e)}),n=t.linked["groups.v1"].map(function(e){return new s.a(e)}),a=t.elements;e.dispatch("LOADED_COURSE_GROUPS",{groups:n,groupSettings:r,groupMemberships:a})}).fail(function(t){e.dispatch("LOADED_COURSE_GROUPS",{})})},c=function loadUserSessionGroupForCourse(e,t){var r=t.courseId,a=t.userId,i=t.sessionId;if(e.getStore("GroupSettingStore").hasSessionGroupLoaded())return n()();return o.a.getCourseSessionGroup(a,r,i).then(function(t){var r=t.elements[0];e.dispatch("LOADED_SESSION_GROUP",{sessionGroup:r})}).fail(function(t){e.dispatch("LOADED_SESSION_GROUP",{})})}},iTPM:function(module,e,t){"use strict";t.d(e,"a",function(){return l});var r=t("wiyT"),n=t.n(r),a=t("NBfQ"),i=t("sroZ"),o=t("NO4R"),s=t("hw75"),u=t("wbHF"),d=t("TFmq"),c=t("8c4I"),l=function loadComputedModels(e,t){var r=t.courseSlug,l=t.courseId;if(e.getStore(c.a).hasLoaded())return n()();return n.a.all([Object(i.a)(e),Object(a.a)(e,l),Object(s.a)(e,r),Object(o.a)(e,l),Object(u.a)(e,l),Object(d.a)(e,l)]).then(function(){e.dispatch("LOAD_COMPUTED_MODELS")})}},l490:function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),a=t("uyIS");e.a=function(e,t,r,i){if(r&&e){var o=n.a.all([Object(a.a)(e,t,!0)]).spread(function(e){var t;return{isProductVerificationEnabled:r,productOwnership:e,s12nId:i}},function(){return null});return o.done(),o}var s=n()(null);return s.done(),s}},sArp:function(module,e,t){"use strict";t.d(e,"a",function(){return u});var r=t("wiyT"),n=t.n(r),a=t("BDKN"),i=t.n(a),o,s=new(t("CWYE").a)("/api/onDemandCourseSchedules.v1"),u=function getCourseSchedule(e){var t=new i.a(e).addQueryParam("fields","defaultSchedule");return n()(s.get(t.toString()))}},sroZ:function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),a=t("DnuM"),i=t("IG+7");e.a=function(e){var t=Object(a.a)("/api/domains.v1",{type:"rest"});if(void 0!==e.getStore(i.a).domains)return n()();return n()(t.get("?fields=id,name")).then(function(t){e.dispatch("LOAD_DOMAINS",t.elements)})}},wDa7:function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),a=t("CWYE"),i=t("BDKN"),o=t.n(i),s=t("sQ/U"),u=Object(a.a)("/api/onDemandDeadlineSettings.v1",{type:"rest"}),d={getStartTime:function getStartTime(e){var t=(new o.a).addQueryParam("q","byUserAndCourse").addQueryParam("userId",s.a.get().id).addQueryParam("courseId",e).toString();return n()(u.get(t)).fail(function(e){console.error(e)})},sendStartTime:function sendStartTime(e,t){var r={data:{userId:s.a.get().id,courseId:t,start:Date.now(),isEnabled:e}};return n()(u.post("",r))},disableDeadlines:function disableDeadlines(e){return d.sendStartTime(!1,e)},getResetPreview:function getResetPreview(e,t){var r=(new o.a).addQueryParam("q","extendPreview").addQueryParam("userId",s.a.get().id).addQueryParam("courseId",e).addQueryParam("extendedAt",Date.now()).toString();n()(u.get(r)).then(t).fail(function(e){console.error(e)}).done()},resetDeadlines:function resetDeadlines(e){var t={data:{userId:s.a.get().id,courseId:e,extendedAt:Date.now()}},r=(new o.a).addQueryParam("action","extend").toString();return n()(u.post(r,t))}};e.a=d;var c=d.getStartTime,l=d.sendStartTime,f=d.disableDeadlines,S=d.getResetPreview,g=d.resetDeadlines},wbHF:function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),a=t("BDKN"),i=t.n(a),o=t("CWYE");e.a=function(e,t){var r=Object(o.a)("/api/onDemandReferences.v1",{type:"rest"}),a=(new i.a).addQueryParam("courseId",t).addQueryParam("q","courseListed").addQueryParam("fields","name,shortId,slug,content").addQueryParam("includes","assets");return n()(r.get(a.toString())).then(function(t){e.dispatch("LOAD_REFERENCES_LIST",t.elements)})}},yF8l:function(module,e,t){"use strict";var r=t("VYij"),n=t.n(r),a=t("ywP/"),i=t.n(a),o=t("f5V2"),s=t("9CUK"),u=t("Toj+");e.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i()(e).then(function(t){if(t.linked&&t.linked["onDemandSessions.v1"]&&t.linked["onDemandSessionMemberships.v1"]){var r=n()(t.linked["onDemandSessions.v1"]).groupBy("courseId"),a=n()(t.linked["onDemandSessionMemberships.v1"]).groupBy("sessionId"),i=Object.keys(a);t.elements.forEach(function(e){var t=r[e.courseId]||[];if(t.length){var n=t.filter(function(e){return i.indexOf(e.id)>=0});if(n.length){var o=new u.Sessions(n).getLastSession();e.onDemandSessionId=o.id,e.onDemandSessionMemberships=n.map(function(e){return a[e.id]})}}})}if(t.linked&&t.linked["v1Details.v1"]&&(t.linked["courses.v1"]=n()(t.linked["courses.v1"]).map(function(e){if("v1.session"===e.courseType||"v1.capstone"===e.courseType){e.v1Details=e.id;var r=n()(t.linked["v1Sessions.v1"]).reduce(function(t,r){return r.courseId===e.id&&t.push(r.id.toString()),t},[]);e.v1Sessions=r}return e})),t.linked&&t.linked["v2Details.v1"]&&(t.linked["courses.v1"]=n()(t.linked["courses.v1"]).map(function(e){return"v2.ondemand"===e.courseType&&(e.v2Details=n()(t.linked["v2Details.v1"]).findWhere({id:e.id})),e})),t.linked&&t.linked["vcMemberships.v1"]){var d=n()(t.linked["vcMemberships.v1"]).pluck("id");t.elements=n()(t.elements).map(function(e){return n()(d).contains(e.id)&&(e.vcMembershipId=e.id),e})}if(t.linked&&t.linked["courses.v1"]){var c=n()(t.linked["courses.v1"]).pluck("id");t.elements=n()(t.elements).chain().filter(function(e){return n()(c).contains(e.courseId)}).compact().value()}if(t.linked&&t.linked["signatureTrackProfiles.v1"]&&n()(t.elements).each(function(e){e.signatureTrackProfile=e.userId}),e.rawData)return t;if(e.withPaging)return{elements:Object(o.a)(s.default.prototype.resourceName,t),paging:t.paging};return Object(o.a)(s.default.prototype.resourceName,t)}).fail(function(t){if(e.rawData)return null;return new s.default})}},"ywP/":function(module,exports,e){var t=function(e){return e.default?e.default:e},r=e("8kE/").default,n=t(e("PVyl"));module.exports=r(n)}}]);
//# sourceMappingURL=3.0de075bc8c57e110a24b.js.map