(function(){var e=this;e.N2_=e.N2_||{r:[],d:[]},e.N2R=e.N2R||function(){e.N2_.r.push(arguments)},e.N2D=e.N2D||function(){e.N2_.d.push(arguments)}}).call(window),N2D("SmartSliderMainAnimationSimple",["SmartSliderMainAnimationAbstract"],function(e,t){function i(t,i){switch(this.postBackgroundAnimation=!1,this._currentBackgroundAnimation=!1,this.reverseSlideIndex=null,i=e.extend({delay:0,parallax:0,type:"horizontal",shiftedBackgroundAnimation:"auto"},i),i.delay/=1e3,N2Classes.SmartSliderMainAnimationAbstract.prototype.constructor.apply(this,arguments),this.parameters.type){case"no":this.animation=this._mainAnimationNo,this.isNoAnimation=!0;break;case"fade":this.animation=this._mainAnimationFade;break;case"crossfade":this.animation=this._mainAnimationCrossFade;break;case"vertical":0===this.parameters.parallax?this.animation=this._mainAnimationVertical:this.animation=this._mainAnimationVerticalParallax;break;case"vertical-reversed":0===this.parameters.parallax?this.animation=this._mainAnimationVerticalReversed:this.animation=this._mainAnimationVerticalReversedParallax;break;case"horizontal-reversed":0===this.parameters.parallax?this.animation=this._mainAnimationHorizontalReversed:this.animation=this._mainAnimationHorizontalReversedParallax;break;default:0===this.parameters.parallax?this.animation=this._mainAnimationHorizontal:this.animation=this._mainAnimationHorizontalParallax}}return i.prototype=Object.create(N2Classes.SmartSliderMainAnimationAbstract.prototype),i.prototype.constructor=i,i.prototype.setToStarterSlide=function(e){this.setActiveSlide(e)},i.prototype.changeTo=function(e,t,i,n){this.postBackgroundAnimation&&this.postBackgroundAnimation.prepareToSwitchSlide(e,t),N2Classes.SmartSliderMainAnimationAbstract.prototype.changeTo.apply(this,arguments)},i.prototype.setActiveSlide=function(e){for(var t=0;t<this.slider.slides.length;t++)this.slider.slides[t]!==e&&this._hideSlide(this.slider.slides[t])},i.prototype._hideSlide=function(e){NextendTween.set(e.$element,{x:-1e5*n2const.rtl.modifier}),e.background&&NextendTween.set(e.background.element,{x:-1e5*n2const.rtl.modifier})},i.prototype._showSlide=function(e){NextendTween.set(e.$element.get(0),{x:0}),e.background&&NextendTween.set(e.background.element,{x:0})},i.prototype.cleanSlideIndex=function(e){this._hideSlide(this.slider.slides[e])},i.prototype.revertTo=function(e,t){this.slider.slides[t].$element.css("zIndex",""),this._hideSlide(this.slider.slides[t]),N2Classes.SmartSliderMainAnimationAbstract.prototype.revertTo.apply(this,arguments)},i.prototype._initAnimation=function(e,t,i){this.animation(e,t,i)},i.prototype.onBackwardChangeToComplete=function(e,t,i){this.reverseSlideIndex=null,this.onChangeToComplete(e,t,i)},i.prototype.onChangeToComplete=function(e,t,i){null!==this.reverseSlideIndex&&(this.slider.slides[this.reverseSlideIndex].triggerHandler("mainAnimationStartInCancel"),this.reverseSlideIndex=null),this._hideSlide(e),N2Classes.SmartSliderMainAnimationAbstract.prototype.onChangeToComplete.apply(this,arguments)},i.prototype.onReverseChangeToComplete=function(e,t,i){this._hideSlide(e),N2Classes.SmartSliderMainAnimationAbstract.prototype.onReverseChangeToComplete.apply(this,arguments)},i.prototype._mainAnimationNo=function(t,i){this._showSlide(i),this.slider.unsetActiveSlide(t),i.$element.css("opacity",0),i.background&&i.background.element.css("opacity",0),this.slider.setActiveSlide(i);var n=this.timeline.totalDuration(),a=this.getExtraDelay();this._currentBackgroundAnimation&&this.parameters.shiftedBackgroundAnimation&&this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup(),0===n&&(n=1e-5,a+=n),this.timeline.set(t.$element,{opacity:0},a),!this._currentBackgroundAnimation&&t.background&&this.timeline.set(t.background.element,{opacity:0},a),this.timeline.set(i.$element,{opacity:1},n),!this._currentBackgroundAnimation&&i.background&&this.timeline.set(i.background.element,{opacity:1},n),this.sliderElement.on("mainAnimationComplete.n2-simple-no",e.proxy(function(e,t,i,n){this.sliderElement.off("mainAnimationComplete.n2-simple-no");var a=this.slider.slides[i],s=this.slider.slides[n];a.$element.css("opacity",""),!this._currentBackgroundAnimation&&a.background&&a.background.element.css("opacity",""),s.$element.css("opacity",""),!this._currentBackgroundAnimation&&s.background&&s.background.element.css("opacity","")},this))},i.prototype._mainAnimationFade=function(t,i){t.$element.css("zIndex",23),t.background&&t.background.element.css("zIndex",23),i.$element.css("opacity",0),this._showSlide(i),this.slider.unsetActiveSlide(t),this.slider.setActiveSlide(i);var n=this.adjustMainAnimation();if(0!=this.parameters.shiftedBackgroundAnimation){var a=!1,s=!1;if("auto"==this.parameters.shiftedBackgroundAnimation?t.hasLayers()?a=!0:s=!0:a=!0,this._currentBackgroundAnimation&&a){var r=n.outDuration-n.extraDelay;r>0&&this.timeline.shiftChildren(r),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else s&&(n.extraDelay>0&&this.timeline.shiftChildren(n.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}this.timeline.to(t.$element.get(0),n.outDuration,{opacity:0,ease:this.getEase()},n.outDelay),!this._currentBackgroundAnimation&&t.background&&this.timeline.to(t.background.element,n.outDuration,{opacity:0,ease:this.getEase()},n.outDelay),this.timeline.to(i.$element.get(0),n.inDuration,{opacity:1,ease:this.getEase()},n.inDelay),!this._currentBackgroundAnimation&&i.background&&i.background.element.css("opacity",1),this.sliderElement.on("mainAnimationComplete.n2-simple-fade",e.proxy(function(e,t,i,n){this.sliderElement.off("mainAnimationComplete.n2-simple-fade");var a=this.slider.slides[i],s=this.slider.slides[n];a.$element.css({zIndex:"",opacity:""}),!this._currentBackgroundAnimation&&a.background&&a.background.element.css({zIndex:"",opacity:""}),s.$element.css("opacity",""),!this._currentBackgroundAnimation&&s.background&&s.background.element.css("opacity","")},this))},i.prototype._mainAnimationCrossFade=function(t,i){t.$element.css("zIndex",23),t.background&&t.background.element.css("zIndex",23),i.$element.css("opacity",0),i.background&&i.background.element.css("opacity",0),this._showSlide(i),this.slider.unsetActiveSlide(t),this.slider.setActiveSlide(i);var n=this.adjustMainAnimation();if(0!=this.parameters.shiftedBackgroundAnimation){var a=!1,s=!1;if("auto"==this.parameters.shiftedBackgroundAnimation?t.hasLayers()?a=!0:s=!0:a=!0,this._currentBackgroundAnimation&&a){var r=n.outDuration-n.extraDelay;r>0&&this.timeline.shiftChildren(r),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else s&&(n.extraDelay>0&&this.timeline.shiftChildren(n.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}this.timeline.to(t.$element.get(0),n.outDuration,{opacity:0,ease:this.getEase()},n.outDelay),!this._currentBackgroundAnimation&&t.background&&this.timeline.to(t.background.element.get(0),n.outDuration,{opacity:0,ease:this.getEase()},n.outDelay),this.timeline.to(i.$element.get(0),n.inDuration,{opacity:1,ease:this.getEase()},n.inDelay),!this._currentBackgroundAnimation&&i.background&&this.timeline.to(i.background.element.get(0),n.inDuration,{opacity:1,ease:this.getEase()},n.inDelay),this.sliderElement.on("mainAnimationComplete.n2-simple-fade",e.proxy(function(e,t,i,n){this.sliderElement.off("mainAnimationComplete.n2-simple-fade");var a=this.slider.slides[i],s=this.slider.slides[n];a.$element.css({zIndex:"",opacity:""}),!this._currentBackgroundAnimation&&a.background&&a.background.element.css({zIndex:"",opacity:""}),s.$element.css("opacity",""),!this._currentBackgroundAnimation&&s.background&&s.background.element.css("opacity","")},this))},i.prototype._mainAnimationHorizontal=function(e,t,i){this.__mainAnimationDirection(e,t,"horizontal",0,i)},i.prototype._mainAnimationVertical=function(e,t,i){this._showSlide(t),this.__mainAnimationDirection(e,t,"vertical",0,i)},i.prototype._mainAnimationHorizontalParallax=function(e,t,i){this.__mainAnimationDirection(e,t,"horizontal",this.parameters.parallax,i)},i.prototype._mainAnimationVerticalParallax=function(e,t,i){this._showSlide(t),this.__mainAnimationDirection(e,t,"vertical",this.parameters.parallax,i)},i.prototype._mainAnimationHorizontalReversed=function(e,t,i){this.__mainAnimationDirection(e,t,"horizontal",0,!i)},i.prototype._mainAnimationVerticalReversed=function(e,t,i){this._showSlide(t),this.__mainAnimationDirection(e,t,"vertical",0,!i)},i.prototype._mainAnimationHorizontalReversedParallax=function(e,t,i){this.__mainAnimationDirection(e,t,"horizontal",this.parameters.parallax,!i)},i.prototype._mainAnimationVerticalReversedParallax=function(e,t,i){this._showSlide(t),this.__mainAnimationDirection(e,t,"vertical",this.parameters.parallax,!i)},i.prototype.__mainAnimationDirection=function(t,i,n,a,s){var r="",o=0,l=0,d="",m=1-a/100;"horizontal"===n?(r="x",d="width",l=o=this.slider.dimensions.slideouter.width,n2const.rtl.isRtl&&(s=!s)):"vertical"===n&&(r="y",d="height",l=o=this.slider.dimensions.slideouter.height),s&&(o*=-1);var h={},c={ease:this.getEase()},p={},u={ease:this.getEase()},g={ease:this.getEase()},y={ease:this.getEase()},A=23,f=22;if(0!==a)if(s)t.$element.addClass("n2-ss-parallax-clip"),A=22,f=23,c[d]=-o,u[d]=-o,o*=m,h[r]=o,h[d]=-o,p[r]=o,p[d]=-o,g[d]=-o,g[r]=l,y[r]=-o;else{o*=m;var k={};if(k[r]=o,NextendTween.set(i.$element,k),i.background){var v={};v[r]=o,NextendTween.set(i.background.element,v)}i.$element.addClass("n2-ss-parallax-clip"),h[r]=l,h[d]=o,c[d]=l,p[r]=o,g[d]=o,y[d]=o,g[r]=-o,y[r]=-o}else{var S={};if(S[r]=o,NextendTween.set(i.$element,S),i.background){var _={};_[r]=o,NextendTween.set(i.background.element,_)}h[r]=o,p[r]=o,g[r]=-o,y[r]=-o}t.$element.css("zIndex",A),t.background&&t.background.element.css("zIndex",A),i.$element.css("zIndex",f),i.background&&i.background.element.css("zIndex",f),this.slider.unsetActiveSlide(t),this.slider.setActiveSlide(i);var x=this.adjustMainAnimation();if(c[r]=0,c.roundProps="x,y",u[r]=0,u.roundProps="x,y",this.timeline.fromTo(i.$element.get(0),x.inDuration,h,c,x.inDelay),i.background&&this.timeline.fromTo(i.background.element,x.inDuration,p,u,x.inDelay),0!=this.parameters.shiftedBackgroundAnimation){var b=!1,D=!1;if("auto"===this.parameters.shiftedBackgroundAnimation?t.hasLayers()?b=!0:D=!0:b=!0,this._currentBackgroundAnimation&&b){var B=x.outDuration-x.extraDelay;B>0&&this.timeline.shiftChildren(B),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else D&&(x.extraDelay>0&&this.timeline.shiftChildren(x.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}if(g.roundProps="x,y",y.roundProps="x,y",this.timeline.to(t.$element.get(0),x.outDuration,g,x.outDelay),t.background&&this.timeline.to(t.background.element,x.outDuration,y,x.outDelay),this.isTouch&&this.isReverseAllowed&&0===a){var E=s?t.index+1:t.index-1;if(0>E?E=this.slider.parameters.carousel?this.slider.slides.length-1:t.index:E>=this.slider.slides.length&&(E=this.slider.parameters.carousel?0:t.index),E!==i.index){if(E!==t.index){this.reverseSlideIndex=E,this.enableReverseMode();var C=this.slider.slides[E];"vertical"===n&&this._showSlide(C),C.$element.css(r,o);var w={},z={ease:this.getEase()},T={},N={ease:this.getEase()};z[r]=0,w[r]=-o,N[r]=o,T[r]=0,C.$element.trigger("mainAnimationStartIn",[this,t.index,C.index,!1]),this.reverseTimeline.paused(!0),this.reverseTimeline.eventCallback("onComplete",this.onBackwardChangeToComplete,[t,C,!1],this),z.roundProps="x,y",this.reverseTimeline.fromTo(C.$element.get(0),x.inDuration,w,z,x.inDelay),C.background&&this.reverseTimeline.fromTo(C.background.element,x.inDuration,w,z,x.inDelay),N.roundProps="x,y",this.reverseTimeline.fromTo(t.$element.get(0),x.inDuration,T,N,x.inDelay),t.background&&this.reverseTimeline.fromTo(t.background.element,x.inDuration,T,N,x.inDelay)}}else this.reverseSlideIndex=null}this.sliderElement.on("mainAnimationComplete.n2-simple-fade",e.proxy(function(e,t,i,n){this.sliderElement.off("mainAnimationComplete.n2-simple-fade");var a=this.slider.slides[i],s=this.slider.slides[n];s.$element.css("zIndex","").css(r,"").removeClass("n2-ss-parallax-clip"),s.background&&s.background.element.css("zIndex","").css(r,""),a.$element.css("zIndex","").css(d,"").removeClass("n2-ss-parallax-clip"),a.background&&a.background.element.css("zIndex","").css(d,"")},this))},i.prototype.getExtraDelay=function(){return 0},i.prototype.adjustMainAnimation=function(){var e=this.parameters.duration,t=this.parameters.delay,i=this.timeline.totalDuration(),n=this.getExtraDelay();if(i>0){var a=e+t;if(!(a>i))return{inDuration:e,outDuration:e,inDelay:i-e,outDelay:n,extraDelay:n};e=e*i/a,t=t*i/a,n>t&&(e-=n-t,t=n)}else t+=n;return{inDuration:e,outDuration:e,inDelay:t,outDelay:t,extraDelay:n}},i.prototype.hasBackgroundAnimation=function(){return!1},i}),N2D("SmartSliderResponsiveSimple",["SmartSliderResponsive"],function(e,t){function i(){this.round=1,N2Classes.SmartSliderResponsive.prototype.constructor.apply(this,arguments)}return i.prototype=Object.create(N2Classes.SmartSliderResponsive.prototype),i.prototype.constructor=i,i.prototype.init=function(){this.sliderElement.find(".n2-ss-section-main-content").length&&(this.updateVerticalRatios=this._updateVerticalRatios),this._sliderHorizontal=this.addHorizontalElement(this.sliderElement,["width","marginLeft","marginRight"],"w","slider"),this.addHorizontalElement(this.sliderElement.find(".n2-ss-slider-1"),["width","paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],"w"),this._sliderVertical=this.addVerticalElement(this.sliderElement,["marginTop","marginBottom"],"h"),this.addHorizontalElement(this.sliderElement,["fontSize"],"fontRatio","slider"),this.addVerticalElement(this.sliderElement.find(".n2-ss-slider-1"),["height","paddingTop","paddingBottom","borderTopWidth","borderBottomWidth"],"h","slider"),this.addHorizontalElement(this.sliderElement.find(".n2-ss-slide"),["width"],"w","slideouter"),this.addVerticalElement(this.sliderElement.find(".n2-ss-slide"),["height"],"h","slideouter");var t=this.sliderElement.find(".n2-ss-layers-container");this.addHorizontalElement(t,["width"],"slideW","slide"),this.addVerticalElement(t,["height"],"slideH","slide").setCentered();for(var i=this.slider.parameters.mainanimation.parallax,n=this.slider.backgrounds.getBackgroundImages(),a=0;a<n.length;a++)0!==i&&(this.addHorizontalElement(n[a].element,["width"],"w"),this.addVerticalElement(n[a].element,["height"],"h"),this.slider.needBackgroundWrap&&(this.addHorizontalElement(n[a].$wrapElement,["width"],"w"),this.addVerticalElement(n[a].$wrapElement,["height"],"h")));var s=this.sliderElement.find(".n2-ss-slider-background-video");s.length&&(n2const.isVideoAutoplayAllowed()?(this._videoPlayerReady=e.proxy(this.videoPlayerReady,this,s),s[0].videoWidth>0?this._videoPlayerReady():(s[0].addEventListener("error",e.proxy(this.videoPlayerError,this,s),!0),s[0].addEventListener("canplay",this._videoPlayerReady)),s[0].load(),s[0].play()):this.videoPlayerError(s))},i.prototype.videoPlayerError=function(e){e.remove()},i.prototype.videoPlayerReady=function(t){t[0].removeEventListener("canplay",this._videoPlayerReady),t.data("ratio",t[0].videoWidth/t[0].videoHeight),t.addClass("n2-active"),this.slider.ready(e.proxy(function(){this.slider.sliderElement.on("SliderResize",e.proxy(this.resizeVideo,this,t)),this.resizeVideo(t)},this))},i.prototype.resizeVideo=function(e){var t=e.data("mode"),i=e.data("ratio"),n=this.slider.dimensions.slideouter||this.slider.dimensions.slide,a=n.width/n.height;"fill"===t?a>i?e.css({width:"100%",height:"auto"}):e.css({width:"auto",height:"100%"}):"fit"===t&&(i>a?e.css({width:"100%",height:"auto"}):e.css({width:"auto",height:"100%"})),e.css("marginTop",0).css(n2const.rtl.marginLeft,0),this.center(e)},i.prototype.center=function(e){var t=e.parent();e.css({marginTop:parseInt((t.height()-e.height())/2)}),e.css(n2const.rtl.marginLeft,parseInt((t.width()-e.width())/2))},i}),N2D("SmartSliderSimple",["SmartSliderAbstract"],function(e,t){function i(t,i){this.type="simple",N2Classes.SmartSliderAbstract.prototype.constructor.call(this,t,e.extend({bgAnimations:0,carousel:1},i))}return i.prototype=Object.create(N2Classes.SmartSliderAbstract.prototype),i.prototype.constructor=i,i.prototype.__initSlides=function(){1!==this.parameters.mainanimation.parallax&&(this.needBackgroundWrap=!0),N2Classes.SmartSliderAbstract.prototype.__initSlides.apply(this,arguments)},i.prototype.initResponsiveMode=function(){this.responsive=new N2Classes.SmartSliderResponsiveSimple(this,this.parameters.responsive),this.responsive.start(),N2Classes.SmartSliderAbstract.prototype.initResponsiveMode.call(this),this.$backgroundsContainer=this.sliderElement.find(".n2-ss-slide-backgrounds")},i.prototype.initMainAnimation=function(){nModernizr.csstransforms3d&&nModernizr.csstransformspreserve3d&&this.parameters.bgAnimations?this.mainAnimation=new N2Classes.SmartSliderFrontendBackgroundAnimation(this,this.parameters.mainanimation,this.parameters.bgAnimations):this.mainAnimation=new N2Classes.SmartSliderMainAnimationSimple(this,this.parameters.mainanimation)},i.prototype.afterRawSlidesReady=function(){if(this.parameters.postBackgroundAnimations&&this.parameters.postBackgroundAnimations.slides){for(var e=0;e<this.slides.length;e++)this.slides[e].postBackgroundAnimation=this.parameters.postBackgroundAnimations.slides[e];delete this.parameters.postBackgroundAnimations.slides}if(this.parameters.bgAnimations&&this.parameters.bgAnimations.slides){for(var t=0;t<this.slides.length;t++)this.slides[t].backgroundAnimation=this.parameters.bgAnimations.slides[t];delete this.parameters.bgAnimations.slides}},i.prototype.findSlideBackground=function(e){var t=N2Classes.SmartSliderAbstract.prototype.findSlideBackground.call(this,e);return t.appendTo(this.sliderElement.find(".n2-ss-slide-backgrounds")),t},i}),N2D("smartslider-simple-type-frontend");